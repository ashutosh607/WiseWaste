import React, { useEffect, useState } from 'react';
import { ArrowRight, Terminal, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';

export default function AnalysisPage({ 
  formData, 
  analysisResult, 
  onViewResult 
}) {
  const [progress, setProgress] = useState(25);
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const logs = [
    `→ Tokenizing: "${formData.problem ? formData.problem.slice(0, 32) : 'no power, battery'}..."`,
    `→ Encoding categorical tensors (${formData.brand || 'Dell'}, ${formData.product_category || 'Laptop'}, ${formData.product_age || 4}yr, ORA)`,
    `→ Querying XGBoost & Random Forest ensemble (depth=8, 253 sparse features)...`,
    `→ Evaluating Bayesian repair success rate across 14,820 historical cohorts...`,
    `→ Validating component replaceable parts schema (DIN EN 45554)...`,
    `→ Unsupervised K-Means mapping: assigning natural failure archetype (k=4)...`,
    `→ Final calibrated confidence synthesis: ${analysisResult ? (analysisResult.confidence * 100).toFixed(1) : '78.0'}% certainty.`
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 15;
      });
      setActiveLogIndex((prev) => Math.min(prev + 1, logs.length - 1));
    }, 450);

    return () => clearInterval(timer);
  }, [logs.length]);

  return (
    <div style={{ backgroundColor: '#FAF8F5', padding: '40px 0 80px 0' }}>
      <div className="app-container">
        
        {/* Header Telemetry */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2B693A' }} className="animate-pulse-subtle" />
              <span className="technical-label" style={{ color: '#2B693A', fontWeight: 600 }}>
                ACTIVE TENSOR DECOMPOSITION · STEP 03/05
              </span>
              <span className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>
                JOB_ID #WW-8924-ML
              </span>
            </div>

            <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: '#141413', textTransform: 'capitalize', letterSpacing: '-0.02em', marginBottom: '4px' }}>
              Understanding the Item...
            </h1>
            <div className="technical-label" style={{ color: '#736F66' }}>
              DECONSTRUCTING SYMPTOMS & MATCHING ARCHIVAL REPAIR COHORTS
            </div>
          </div>

          {/* Right Metrics Box */}
          <div style={{ display: 'flex', gap: '24px', fontSize: '0.72rem', backgroundColor: '#FFFFFF', padding: '12px 18px', borderRadius: '3px', border: '1px solid #E4DFD5' }} className="font-mono">
            <div>
              <div className="text-muted">INFERENCE ENGINE</div>
              <div style={{ color: '#141413', fontWeight: 600 }}>ORA-GraphHybrid v4.2</div>
            </div>
            <div>
              <div className="text-muted">LATENCY</div>
              <div style={{ color: '#2B693A', fontWeight: 600 }}>13.7 ms</div>
            </div>
            <div>
              <div className="text-muted">ENTROPY POOL</div>
              <div style={{ color: '#141413', fontWeight: 600 }}>0.041σ</div>
            </div>
          </div>
        </div>

        {/* Center Orbital Network Visual */}
        <div style={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderRadius: '4px',
          border: '1px solid #E4DFD5',
          padding: '40px 20px',
          marginBottom: '36px',
          overflow: 'hidden'
        }}>
          
          {/* Radar Circles in Background */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px dashed #E2DDD5',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            border: '1px solid #EAE5D9',
            pointerEvents: 'none'
          }} />

          {/* Coordinate Marks */}
          <div className="font-mono text-muted" style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.625rem' }}>
            000° N
          </div>
          <div className="font-mono text-muted" style={{ position: 'absolute', top: '50%', right: '20px', transform: 'translateY(-50%)', fontSize: '0.625rem' }}>
            090° E
          </div>
          <div className="font-mono text-muted" style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.625rem' }}>
            180° S
          </div>
          <div className="font-mono text-muted" style={{ position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%)', fontSize: '0.625rem' }}>
            270° W
          </div>

          {/* 3D Canvas in center */}
          <div style={{ maxWidth: '420px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <ThreeCanvas modelType="laptop" height="340px" showPedestal={false} />
          </div>

          {/* Floating Data Attribute Nodes */}
          
          {/* Node 1: Category Taxonomy */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '8%',
            backgroundColor: '#FAF8F5',
            padding: '8px 14px',
            borderRadius: '2px',
            border: '1px solid #DCD6C9',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            zIndex: 20
          }}>
            <div className="technical-label" style={{ fontSize: '0.58rem', color: '#736F66' }}>CATEGORY TAXONOMY</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#141413' }}>
              ● {formData.product_category || 'Portable Computer / Laptop'}
            </div>
          </div>

          {/* Node 2: Lifespan & Degradation */}
          <div style={{
            position: 'absolute',
            top: '40px',
            right: '8%',
            backgroundColor: '#FAF8F5',
            padding: '8px 14px',
            borderRadius: '2px',
            border: '1px solid #DCD6C9',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            zIndex: 20
          }}>
            <div className="technical-label" style={{ fontSize: '0.58rem', color: '#736F66' }}>LIFESPAN & DEGRADATION</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#141413' }}>
              ● ~{formData.product_age || 4.0} Years Vintage <span style={{ fontSize: '0.65rem', color: '#736F66' }}>(Gen-8 Cycle)</span>
            </div>
          </div>

          {/* Node 3: OEM Profile */}
          <div style={{
            position: 'absolute',
            bottom: '70px',
            left: '10%',
            backgroundColor: '#FAF8F5',
            padding: '8px 14px',
            borderRadius: '2px',
            border: '1px solid #DCD6C9',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            zIndex: 20
          }}>
            <div className="technical-label" style={{ fontSize: '0.58rem', color: '#736F66' }}>OEM PROFILE</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#141413' }}>
              ● {formData.brand || 'Dell'} Technologies <span style={{ fontSize: '0.65rem', color: '#736F66' }}>Chassis rev</span>
            </div>
          </div>

          {/* Node 4: Isolated Anomaly */}
          <div style={{
            position: 'absolute',
            bottom: '70px',
            right: '10%',
            backgroundColor: '#FAF8F5',
            padding: '8px 14px',
            borderRadius: '2px',
            border: '1px solid #DCD6C9',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            zIndex: 20
          }}>
            <div className="technical-label" style={{ fontSize: '0.58rem', color: '#A32828' }}>● ISOLATED ANOMALY</div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#141413' }}>
              Power Failure / Charging Cutoff
            </div>
            <div style={{ fontSize: '0.65rem', color: '#736F66' }} className="font-mono">AC handshake timeout - zero amp draw</div>
          </div>

        </div>

        {/* Bottom Inference Stream Terminal */}
        <div className="terminal-window" style={{ padding: '24px', marginBottom: '24px' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #2B2A27', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#B45309' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#A32828' }} />
              <span style={{ fontSize: '0.72rem', color: '#A8A49C', marginLeft: '6px' }}>
                INFERENCE STREAM (KERNEL 2.4)
              </span>
            </div>
            <span className="technical-badge badge-green" style={{ fontSize: '0.6rem' }}>
              STREAMING
            </span>
          </div>

          {/* Log Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.78rem', minHeight: '120px' }}>
            {logs.slice(0, activeLogIndex + 1).map((line, idx) => (
              <div key={idx} style={{ color: idx === activeLogIndex ? '#FFFFFF' : '#8C8983' }}>
                {line}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '0.6875rem', color: '#736F66', borderTop: '1px solid #2B2A27', paddingTop: '10px' }}>
            <span>WEIGHTS: v25.2_dell_chassis.pt</span>
            <span>GPU_ALLOC: 1.84 GB / 8 GB</span>
          </div>
        </div>

        {/* Progress bar & Transition Button */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '3px',
          border: '1px solid #E4DFD5',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
              <span className="font-serif" style={{ fontSize: '1.6rem', fontWeight: 600, color: '#141413' }}>
                {progress}%
              </span>
              <span className="technical-label">COHORT SYNTHESIS (Vector Space Rank: 14,820 Nodes)</span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#736F66' }}>
              Comparing against 14,820 verified records in Open Repair Alliance and iFixit archival repositories...
            </p>
          </div>

          <button 
            className="btn-primary-black"
            onClick={onViewResult}
            style={{ padding: '12px 24px', fontSize: '0.78rem' }}
          >
            VIEW COMPUTED RESULT <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
