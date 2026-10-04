import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const FASTAPI_URL = process.env.FASTAPI_URL || 'http://127.0.0.1:8000';

app.use(cors());
app.use(express.json());

// In-memory / file assessment history ledger
const LEDGER_FILE = path.join(__dirname, 'assessment_ledger.json');
let historyLedger = [];

if (fs.existsSync(LEDGER_FILE)) {
  try {
    historyLedger = JSON.parse(fs.readFileSync(LEDGER_FILE, 'utf-8'));
  } catch (err) {
    historyLedger = [];
  }
}

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check
app.get('/api/health', async (req, res) => {
  let fastApiStatus = 'offline';
  try {
    const resp = await fetch(`${FASTAPI_URL}/health`, { signal: AbortSignal.timeout(2000) });
    if (resp.ok) {
      fastApiStatus = 'connected';
    }
  } catch (e) {
    fastApiStatus = 'unreachable';
  }

  res.json({
    status: 'online',
    service: 'WasteWise Node.js Orchestrator & API Gateway',
    version: '2.4.0',
    port: PORT,
    fastapi_service: {
      url: FASTAPI_URL,
      status: fastApiStatus
    },
    timestamp: new Date().toISOString()
  });
});

// Taxonomy for autocomplete & presets
app.get('/api/taxonomy', (req, res) => {
  res.json({
    categories: [
      { id: 'laptop', label: 'Laptop', code: 'CAT-LT-04', icon: 'laptop' },
      { id: 'mobile', label: 'Phone', code: 'CAT-PH-02', icon: 'smartphone' },
      { id: 'audio', label: 'Audio', code: 'CAT-AUD-01', icon: 'headphones' },
      { id: 'optics', label: 'Optics', code: 'CAT-OPT-03', icon: 'camera' },
      { id: 'appliance', label: 'Appliance', code: 'CAT-APP-05', icon: 'cpu' },
      { id: 'coffee-maker', label: 'Coffee maker', code: 'CAT-APP-06', icon: 'coffee' },
      { id: 'vacuum', label: 'Vacuum', code: 'CAT-APP-07', icon: 'wind' },
      { id: 'power-tool', label: 'Power tool', code: 'CAT-APP-08', icon: 'wrench' },
      { id: 'lamp', label: 'Lamp', code: 'CAT-LMP-09', icon: 'sun' },
      { id: 'flat-screen', label: 'Flat screen', code: 'CAT-DSP-10', icon: 'tv' }
    ],
    common_brands: [
      'Dell', 'Apple', 'Sony', 'HP', 'Lenovo', 'Bosch', 'Dyson', 'Philips',
      'Samsung', 'Asus', 'De\'Longhi', 'Breville', 'Krups', 'Panasonic', 'Black & Decker'
    ],
    sample_specimens: [
      {
        category: 'Laptop',
        brand: 'Dell',
        age: 4,
        problem: "Doesn't turn on and shows no power when connected to original AC adapter.",
        cad_model: 'Dell Laptop (Chassis Rev. 2020)',
        disassembly_time: '18 min avg',
        screw_type: 'T5 Torx Screws',
        reparability_index: '7.4 / 10',
        community_fix_rate: '82.6%'
      },
      {
        category: 'Audio',
        brand: 'Sony',
        age: 6,
        problem: 'Intermittent left-channel audio loss. Cable stress near 3.5mm terminal.',
        cad_model: 'Sony MDR-7506 Monitors',
        disassembly_time: '15 min avg',
        screw_type: 'PH00 Screws',
        reparability_index: '9.1 / 10',
        community_fix_rate: '94.2%'
      },
      {
        category: 'Appliance',
        brand: 'Dyson',
        age: 3,
        problem: 'Rapid pulsating motor shutdown after 5 seconds of trigger operation.',
        cad_model: 'Cyclone V10 Turbine Assembly',
        disassembly_time: '10 min avg',
        screw_type: 'T8 Torx',
        reparability_index: '7.9 / 10',
        community_fix_rate: '79.1%'
      }
    ]
  });
});

// Analyze Item: Node.js communicates with FastAPI ML Service
app.post('/api/analyze', async (req, res) => {
  const { product_category, brand, product_age, problem } = req.body;

  // Validation
  if (!product_category || !problem) {
    return res.status(400).json({
      error: 'Validation Error',
      message: 'Both product_category and problem description are required.'
    });
  }

  const ageNumber = product_age !== undefined && product_age !== null && product_age !== '' 
    ? parseFloat(product_age) 
    : 4.0;

  try {
    // Forward to FastAPI ML Microservice
    const fastApiPayload = {
      product_category: String(product_category).trim(),
      brand: String(brand || 'Generic').trim(),
      product_age: isNaN(ageNumber) ? 4.0 : ageNumber,
      problem: String(problem).trim()
    };

    console.log(`Forwarding inference request to FastAPI: ${FASTAPI_URL}/predict`);
    const mlResponse = await fetch(`${FASTAPI_URL}/predict`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fastApiPayload)
    });

    if (!mlResponse.ok) {
      const errText = await mlResponse.text();
      throw new Error(`FastAPI ML service error (${mlResponse.status}): ${errText}`);
    }

    const mlData = await mlResponse.json();

    // Generate unique record ID
    const recId = `WW-${Math.floor(1000 + Math.random() * 9000)}-REV${Math.floor(1 + Math.random() * 5)}`;
    const timestamp = new Date().toISOString();

    // Enrich with technician protocol & circular decision preview
    const enrichedResponse = {
      record_id: recId,
      timestamp,
      ...mlData,
      technician_checklist: [
        { step: '01', title: 'Hard-reset CMOS battery (coin-cell disconnect for 60s)' },
        { step: '02', title: 'Check Type-C CC1/CC2 lines for short to ground' },
        { step: '03', title: 'Inspect battery pack internal fuse impedance' },
        { step: '04', title: 'Verify thermal paste viscosity and fan bearing resistance' }
      ],
      recommended_protocol: {
        action_order: '#1',
        title: 'Attend a Community Repair Café or Engage an Independent Workbench',
        description: 'This failure profile strongly benefits from non-destructive multimeter triage before component acquisition. 91% of community repair spaces possess calibrated power analyzers capable of isolating this fault in under 15 minutes.',
        local_cafe_available: true
      },
      // Note: Clearly marked as future decision layer as requested!
      future_circular_decision_layer: {
        status: 'COMING NEXT / FUTURE DECISION LAYER',
        available_pathways: [
          { name: 'Repair', status: 'Active (Current ML Scope)' },
          { name: 'Resale', status: 'Coming Next (Heuristic Market Index)' },
          { name: 'Donate', status: 'Coming Next (Social Logistics Engine)' },
          { name: 'Parts', status: 'Coming Next (BOM Disassembly Protocol)' },
          { name: 'Recycle', status: 'Coming Next (Certified Smelting Registry)' }
        ]
      }
    };

    // Store in history ledger
    historyLedger.unshift({
      record_id: recId,
      timestamp,
      product_category: fastApiPayload.product_category,
      brand: fastApiPayload.brand,
      product_age: fastApiPayload.product_age,
      problem: fastApiPayload.problem,
      prediction: mlData.prediction,
      confidence: mlData.confidence
    });

    if (historyLedger.length > 50) historyLedger.pop();

    try {
      fs.writeFileSync(LEDGER_FILE, JSON.stringify(historyLedger, null, 2));
    } catch (e) {
      console.warn('Could not write ledger file:', e.message);
    }

    return res.json(enrichedResponse);

  } catch (error) {
    console.error('Error during ML inference orchestration:', error.message);
    return res.status(502).json({
      error: 'ML Gateway Error',
      message: 'Failed to communicate with FastAPI ML Service.',
      details: error.message
    });
  }
});

// Insights endpoint: Node.js proxies FastAPI insights
app.get('/api/insights', async (req, res) => {
  try {
    const mlResponse = await fetch(`${FASTAPI_URL}/insights`);
    if (!mlResponse.ok) {
      throw new Error(`FastAPI returned status ${mlResponse.status}`);
    }
    const data = await mlResponse.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching insights from FastAPI:', error.message);
    res.status(500).json({
      error: 'Insights Service Unavailable',
      message: error.message
    });
  }
});

// Recent history
app.get('/api/history', (req, res) => {
  res.json({
    total: historyLedger.length,
    records: historyLedger.slice(0, 10)
  });
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🌿 WasteWise Node.js API Gateway listening on port ${PORT}`);
  console.log(`🔗 Connected to FastAPI ML Microservice at: ${FASTAPI_URL}`);
  console.log(`=======================================================`);
});
