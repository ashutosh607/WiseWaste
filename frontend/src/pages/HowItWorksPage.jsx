import React from 'react';
import { ArrowRight, Database, Cpu, CheckCircle2, Shield, Wrench, FileText } from 'lucide-react';

export default function HowItWorksPage({ setActiveTab }) {
  return (
    <div style={{ backgroundColor: '#FAF8F5', padding: '50px 0 80px 0' }}>
      <div className="app-container">
        
        {/* Header Telemetry */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="technical-label" style={{ color: '#736F66', marginBottom: '8px' }}>
              THE METHODOLOGY / PROTOCOL REF 2025.A
            </div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)', lineHeight: 1.1, color: '#141413', maxWidth: '780px' }}>
              From discarded object to actionable outcome in three deliberate steps.
            </h1>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="technical-label" style={{ color: '#736F66' }}>REFERENCE CORPUS</div>
            <div className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#141413' }}>
              305,482 Logs
            </div>
            <div className="font-mono text-muted" style={{ fontSize: '0.6875rem' }}>Validated via ORA standard</div>
          </div>
        </div>

        <p style={{ fontSize: '1rem', color: '#524F48', maxWidth: '640px', lineHeight: 1.6, marginBottom: '50px' }}>
          WasteWise bridges raw consumer symptoms with millions of community repair data points to compute realistic item lifecycles.
        </p>

        {/* Phase Timeline Header */}
        <div className="border-b-hairline border-t-hairline font-mono" style={{ backgroundColor: '#F3F0E8', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ color: '#2B693A', fontWeight: 600 }}>● 01 STAGE: DESCRIBE</span>
            <span style={{ color: '#736F66' }}>→ 02 STAGE: ANALYZE</span>
            <span style={{ color: '#736F66' }}>→ 03 STAGE: UNDERSTAND</span>
          </div>
          <div>
            <span>SYSTEM LATENCY: &lt;18ms | DETERMINISTIC FLOW</span>
          </div>
        </div>

        {/* 3 Step Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '60px' }}>
          
          {/* STEP 01 */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '10px' }}>
                01 PHASE — OBSERVATION
              </div>
              <h2 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '16px', color: '#141413' }}>
                Tell WasteWise what you have.
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Specify the product category, make, operational age, and exact fault symptoms without requiring technical jargon. Our pipeline accepts natural colloquial language.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', fontSize: '0.72rem', borderTop: '1px solid #F0ECE4', paddingTop: '16px' }} className="font-mono">
                <div>
                  <div className="text-muted">PARAMETER INGESTION</div>
                  <div style={{ color: '#141413', fontWeight: 600 }}>NATURAL LANGUAGE</div>
                </div>
                <div>
                  <div className="text-muted">SYMPTOM VECTORIZATION</div>
                  <div style={{ color: '#141413', fontWeight: 600 }}>UNSTRUCTURED → TOKEN</div>
                </div>
                <div>
                  <div className="text-muted">CHASSIS ARCHETYPING</div>
                  <div style={{ color: '#141413', fontWeight: 600 }}>AUTOMATED CATEGORY MATCH</div>
                </div>
                <div>
                  <div className="text-muted">INPUT FIDELITY</div>
                  <div style={{ color: '#2B693A', fontWeight: 600 }}>98.4% ROBUSTNESS</div>
                </div>
              </div>
            </div>

            {/* Schematic Blueprint View */}
            <div style={{ backgroundColor: '#F8F6F0', padding: '24px', borderRadius: '3px', border: '1px dashed #D4CDC0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.625rem' }} className="font-mono text-muted">
                <span>FIG. 01 — PHYSICAL DECOMPOSITION BLUEPRINT</span>
                <span>SCHEMATIC | BB-2024-8X</span>
              </div>
              <div style={{
                height: '180px',
                border: '1px solid #E2DDD5',
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '20px',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ padding: '8px 12px', border: '1px dashed #736F66', borderRadius: '2px', fontSize: '0.7rem' }} className="font-mono">
                    PWR BLOCK (LI-ION)
                  </div>
                  <div style={{ height: '1px', flex: 1, backgroundColor: '#D4CDC0', margin: '0 10px' }} />
                  <div style={{ padding: '8px 12px', border: '1px solid #141413', backgroundColor: '#F3F0E8', borderRadius: '2px', fontSize: '0.7rem' }} className="font-mono">
                    PCB CHIPSET / MCU
                  </div>
                  <div style={{ height: '1px', flex: 1, backgroundColor: '#D4CDC0', margin: '0 10px' }} />
                  <div style={{ padding: '8px 12px', border: '1px dashed #736F66', borderRadius: '2px', fontSize: '0.7rem' }} className="font-mono">
                    ACOUSTIC TRANSDUCER
                  </div>
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#736F66', textAlign: 'center' }} className="font-mono">
                  TRACE: FAILURE TO DRAW CURRENT | CATEGORY: SMALL CONSOLE
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.6875rem' }} className="font-mono">
                <span>INPUT FORM: Text + Structural Specs</span>
                <span style={{ color: '#2B693A' }}>FAULT CLASSIFIER: Power Distribution</span>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '10px' }}>
                02 PHASE — COMPUTATION
              </div>
              <h2 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '16px', color: '#141413' }}>
                Our machine-learning pipeline studies the item's characteristics.
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Raw text descriptions undergo TF-IDF sub-linear tokenization and one-hot encoding, matched against 305,000+ historical Open Repair Alliance records across ensemble gradient boosted classifiers.
              </p>

              <div style={{ backgroundColor: '#F3F0E8', padding: '16px', borderRadius: '3px', border: '1px solid #E4DFD5', marginBottom: '16px' }}>
                <div className="technical-label" style={{ color: '#141413', marginBottom: '6px' }}>
                  // FEATURE VECTOR FORMATION
                </div>
                <div className="font-mono" style={{ fontSize: '0.75rem', color: '#2B2A27' }}>
                  V = concat(TFIDF(tokens), OneHot(cat), Scale(age))
                </div>
                <div style={{ fontSize: '0.7rem', color: '#736F66', marginTop: '4px' }}>
                  Weighting model: XGBoost Regularized Hist-Tree Ensemble with calibrated Bayesian prior.
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }} className="font-mono">
                <span style={{ color: '#2B693A' }}>● ENSEMBLE ACTIVE</span>
                <span>Tokens: 1,420 / Sec</span>
              </div>
            </div>

            {/* Vector Recombination Diagram */}
            <div style={{ backgroundColor: '#F8F6F0', padding: '24px', borderRadius: '3px', border: '1px dashed #D4CDC0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.625rem' }} className="font-mono text-muted">
                <span>FIG. 02 — VECTOR RECOMBINATION & ENSEMBLE CLUSTERING</span>
                <span>TF-IDF MATRIX TO EMBEDDING</span>
              </div>
              <div style={{
                height: '180px',
                border: '1px solid #E2DDD5',
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.65rem' }} className="font-mono">
                  <span style={{ backgroundColor: '#F3F0E8', padding: '2px 6px', borderRadius: '2px' }}>"battery_swollen"</span>
                  <span style={{ backgroundColor: '#F3F0E8', padding: '2px 6px', borderRadius: '2px' }}>"flashing_red_led"</span>
                  <span style={{ backgroundColor: '#F3F0E8', padding: '2px 6px', borderRadius: '2px' }}>"port_loose_pwr"</span>
                </div>
                <div style={{ width: '1px', height: '120px', backgroundColor: '#D4CDC0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.6875rem' }} className="font-mono">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '50px', height: '6px', backgroundColor: '#2B693A', borderRadius: '2px' }} />
                    <span>0.884</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '30px', height: '6px', backgroundColor: '#141413', borderRadius: '2px' }} />
                    <span>0.512</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '15px', height: '6px', backgroundColor: '#B45309', borderRadius: '2px' }} />
                    <span>0.240</span>
                  </div>
                </div>
                <div style={{ width: '1px', height: '120px', backgroundColor: '#D4CDC0' }} />
                <div style={{ textAlign: 'center' }}>
                  <div className="technical-badge badge-green" style={{ fontSize: '0.6rem' }}>
                    ✓ CONSENSUS
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#736F66', marginTop: '4px' }} className="font-mono">
                    97.2% Agreement
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.6875rem' }} className="font-mono">
                <span>FEATURE VECTOR SIZE: 1 x 253</span>
                <span style={{ color: '#2B693A' }}>CALIBRATION LOSS: 0.028 W-H</span>
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'center' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '10px' }}>
                03 PHASE — VERDICT
              </div>
              <h2 className="font-serif" style={{ fontSize: '1.9rem', marginBottom: '16px', color: '#141413' }}>
                Get a predicted repair status and supporting evidence.
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Receive an empirical prediction (<strong>Fixed</strong>, <strong>Repairable</strong>, or <strong>End of life</strong>) accompanied by confidence margins and the exact underlying signals driving the model.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8125rem' }}>
                  <span className="technical-badge badge-green" style={{ width: '90px', justifyContent: 'center' }}>FIXED</span>
                  <span style={{ color: '#524F48' }}>Non-destructive intervention complete with minimal tools.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8125rem' }}>
                  <span className="technical-badge badge-amber" style={{ width: '90px', justifyContent: 'center' }}>REPAIRABLE</span>
                  <span style={{ color: '#524F48' }}>Feasible with standard replacement parts & community guidance.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8125rem' }}>
                  <span className="technical-badge badge-red" style={{ width: '90px', justifyContent: 'center' }}>END OF LIFE</span>
                  <span style={{ color: '#524F48' }}>Material reclamation candidate (surgical parts harvesting).</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem' }} className="font-mono text-muted">
                <span>95% CI = ± 2.4%</span>
                <span>Empirical calibrated intervals</span>
              </div>
            </div>

            {/* Verdict Synthesis Box */}
            <div style={{ backgroundColor: '#F8F6F0', padding: '24px', borderRadius: '3px', border: '1px dashed #D4CDC0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.625rem' }} className="font-mono text-muted">
                <span>FIG. 03 — EMPIRICAL VERDICT SYNTHESIS</span>
                <span>CALIBRATED PROBABILITY PROFILE</span>
              </div>
              <div style={{
                border: '1px solid #E2DDD5',
                backgroundColor: '#FFFFFF',
                borderRadius: '2px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '24px'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '3px solid #2B693A',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#141413' }}>
                    88.4%
                  </span>
                  <span className="technical-label" style={{ fontSize: '0.55rem', color: '#2B693A' }}>
                    CONFIDENCE
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div className="technical-label" style={{ color: '#736F66', marginBottom: '6px' }}>
                    DOMINANT INFLUENCING SIGNALS
                  </div>
                  <div style={{ fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Modular Connector Trace</span>
                      <span style={{ color: '#2B693A', fontWeight: 600 }}>+42% Weight</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Symptom Recurrence in ORA</span>
                      <span style={{ color: '#2B693A', fontWeight: 600 }}>+21% Weight</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Fastener Accessibility</span>
                      <span style={{ color: '#2B693A', fontWeight: 600 }}>+15% Weight</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.6875rem' }} className="font-mono">
                <span>RECOMMENDED: REPAIR CAFE TRIAGE</span>
                <span style={{ color: '#2B693A' }}>EST. COST: $12.00 - $24.00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Data Transmission Protocol Table */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '32px', marginBottom: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '4px' }}>
                METHODOLOGICAL AUDIT
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#141413' }}>
                Data Transmission & Classification Protocol
              </h3>
            </div>
            <span className="technical-badge badge-neutral font-mono">SPEC ID: PROTO-ML-09</span>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #E4DFD5', color: '#736F66' }} className="technical-label">
                <th style={{ padding: '12px 10px' }}>STAGE</th>
                <th style={{ padding: '12px 10px' }}>INPUT PRIMITIVE</th>
                <th style={{ padding: '12px 10px' }}>TRANSFORMATION ENGINE</th>
                <th style={{ padding: '12px 10px' }}>DETERMINISTIC OUTPUT</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
              <tr style={{ borderBottom: '1px solid #F0ECE4' }}>
                <td style={{ padding: '12px 10px', fontWeight: 600 }}>01. INGEST</td>
                <td style={{ padding: '12px 10px' }}>Consumer search string</td>
                <td style={{ padding: '12px 10px' }}>spaCy Lemmatizer + Regex Cleansing</td>
                <td style={{ padding: '12px 10px', color: '#2B693A' }}>Sanitized semantic n-grams</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #F0ECE4' }}>
                <td style={{ padding: '12px 10px', fontWeight: 600 }}>02. VECTOR</td>
                <td style={{ padding: '12px 10px' }}>N-grams + Age + Taxonomy</td>
                <td style={{ padding: '12px 10px' }}>Sub-linear TF-IDF + OHE Pipeline</td>
                <td style={{ padding: '12px 10px', color: '#2B693A' }}>253-dimension real-valued array</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 10px', fontWeight: 600 }}>03. INFER</td>
                <td style={{ padding: '12px 10px' }}>253-dim Feature Array</td>
                <td style={{ padding: '12px 10px' }}>ORA Calibrated Ensemble (XGBoost)</td>
                <td style={{ padding: '12px 10px', color: '#2B693A' }}>Status Class & Certainty Interval</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Banner */}
        <div style={{
          backgroundColor: '#F3F0E8',
          border: '1px solid #E4DFD5',
          borderRadius: '3px',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <FileText size={28} color="#141413" />
            <div>
              <div className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#141413' }}>
                BACKED BY OPEN REPAIR ALLIANCE DATA
              </div>
              <div style={{ fontSize: '0.78rem', color: '#736F66' }}>
                Formulated upon international standard ORA-2025 comprising vetted repair interventions across the EU, North America, and Australia.
              </div>
            </div>
          </div>

          <button 
            className="btn-primary-black"
            onClick={() => setActiveTab('check-item')}
          >
            BEGIN AN ASSESSMENT <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
