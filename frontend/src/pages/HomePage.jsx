import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Shield, Activity, RefreshCw, Compass } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';

export default function HomePage({ setActiveTab, onSelectSpecimen }) {
  return (
    <div style={{ backgroundColor: '#FAF8F5' }}>
      
      {/* 1. Technical Telemetry Header Ticker */}
      <div className="border-b-hairline" style={{ backgroundColor: '#F3F0E8', padding: '6px 0', fontSize: '0.65rem' }}>
        <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#2B693A', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2B693A' }} className="animate-pulse-subtle" />
              KERNEL V2.4 LIVE SYNC
            </span>
            <span className="font-mono text-muted">LOC: 52.3702° N, 4.8952° E</span>
            <span className="font-mono text-muted">ORA_BENCHMARK_2025</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="font-mono">
            <span>INDEX: 14,280 MATERIAL ARCHETYPES</span>
            <span style={{ color: '#2B693A', fontWeight: 600 }}>MITIGATION INDEX: 94.2%</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section style={{ padding: '60px 0 40px 0' }}>
        <div className="app-container">
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column: Editorial Headline & Actions */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span className="technical-label" style={{ color: '#736F66' }}>PHYSICAL OBJECT TAXONOMY</span>
                <span style={{ width: '20px', height: '1px', backgroundColor: '#D4CDC0' }} />
                <span className="technical-label" style={{ color: '#141413', fontWeight: 600 }}>SERIES #01</span>
              </div>

              <h1 className="font-serif" style={{ fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)', lineHeight: 1.05, fontWeight: 500, color: '#141413', marginBottom: '24px' }}>
                Waste shouldn’t be the end.
              </h1>

              <p style={{ fontSize: '1rem', color: '#524F48', lineHeight: 1.6, maxWidth: '500px', marginBottom: '36px' }}>
                Understand what your unwanted item can become before you discard it. A heuristic circular assessment engine calibrating disassembly viability and component reincarnation.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', flexWrap: 'wrap' }}>
                <button 
                  className="btn-primary-black"
                  onClick={() => setActiveTab('check-item')}
                  style={{ padding: '13px 26px', fontSize: '0.78rem' }}
                >
                  CHECK AN ITEM <ArrowRight size={14} />
                </button>

                <button 
                  className="btn-secondary-ghost"
                  onClick={() => setActiveTab('insights')}
                  style={{ padding: '13px 22px', fontSize: '0.78rem' }}
                >
                  EXPLORE THE DATA <ChevronDown size={14} />
                </button>
              </div>

              {/* Verified Metrics Counter */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid #E4DFD5'
              }}>
                <div>
                  <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#141413' }}>
                    305.4k
                  </div>
                  <div className="technical-label" style={{ fontSize: '0.625rem', marginTop: '2px' }}>
                    ARCHIVED REPAIRS
                  </div>
                </div>

                <div>
                  <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#2B693A' }}>
                    68.2%
                  </div>
                  <div className="technical-label" style={{ fontSize: '0.625rem', marginTop: '2px' }}>
                    RECOVERY RATE
                  </div>
                </div>

                <div>
                  <div className="font-serif" style={{ fontSize: '1.75rem', fontWeight: 600, color: '#141413' }}>
                    1,420kg
                  </div>
                  <div className="technical-label" style={{ fontSize: '0.625rem', marginTop: '2px' }}>
                    LANDFILL DIVERTED
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Pedestal Specimen Visual */}
            <div style={{ position: 'relative' }}>
              
              {/* Radar Coordinate Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.6875rem' }} className="font-mono">
                <span style={{ color: '#736F66' }}>
                  LAT: 52.3701° <br />
                  LONG: 4.8952°
                </span>
                <span style={{ color: '#2B693A', fontWeight: 600, textAlign: 'right' }}>
                  01 CIRCULARITY (89%) <br />
                  <span style={{ color: '#141413' }}>STATE: ACTIVE_INSPECTION</span>
                </span>
              </div>

              {/* 3D Canvas Box */}
              <div style={{
                position: 'relative',
                background: 'radial-gradient(circle at center, #F4F1E8 0%, #EAE5D9 100%)',
                borderRadius: '50%',
                aspectRatio: '1 / 1',
                maxHeight: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #DCD6C9',
                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.03)'
              }}>
                
                {/* Orbiting Axis Lines */}
                <div style={{
                  position: 'absolute',
                  inset: '20px',
                  borderRadius: '50%',
                  border: '1px dashed #D0C9BA',
                  pointerEvents: 'none'
                }} className="animate-spin-slow" />

                <ThreeCanvas modelType="laptop" height="420px" showPedestal={true} />

                {/* Floating Specimen Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#FFFFFF',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid #DCD6C9',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 500, color: '#141413' }}>Model: Book Air 13" (M2)</span>
                  <span className="technical-badge badge-green" style={{ fontSize: '0.58rem', padding: '1px 5px' }}>99% VIABLE</span>
                </div>

                {/* Technical Coordinates Side Marker */}
                <div className="technical-label" style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  writingMode: 'vertical-rl',
                  color: '#9C978D',
                  fontSize: '0.6rem'
                }}>
                  DIAGNOSTICS
                </div>
              </div>

              {/* Technical Footnote */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.625rem', color: '#9C978D' }} className="font-mono">
                <span>03 MATERIAL YIELD</span>
                <span>DATA_SRC: ORA_305K | MESH: UNIBODY_MAGNESIUM | CONFIDENCE: 88.4%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Black Epigraph & Axiom Quote Banner */}
      <section style={{ backgroundColor: '#141413', color: '#FAF8F5', padding: '48px 0', textAlign: 'center' }}>
        <div className="app-container">
          <div className="technical-label" style={{ color: '#8C8983', marginBottom: '14px', letterSpacing: '0.14em' }}>
            CORE EPIGRAPH & AXIOM
          </div>
          <blockquote className="font-serif" style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.4rem)', fontStyle: 'italic', fontWeight: 400, maxWidth: '820px', margin: '0 auto 14px auto', lineHeight: 1.3 }}>
            “Before you throw it away, ask what it can become.”
          </blockquote>
          <div className="technical-label" style={{ color: '#B5AD9E', fontSize: '0.625rem' }}>
            WASTEWISE DESIGN PRINCIPLE #F-01
          </div>
        </div>
      </section>

      {/* 4. Mini Stats Ribbon */}
      <div className="border-b-hairline border-t-hairline" style={{ backgroundColor: '#F3F0E8', padding: '12px 0' }}>
        <div className="app-container font-mono" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '16px', fontSize: '0.72rem', color: '#524F48' }}>
          <span>● 305,420 REPAIR EVENTS RECORDED</span>
          <span style={{ color: '#D4CDC0' }}>/</span>
          <span>● 68.2% HISTORICAL SUCCESS RATE</span>
          <span style={{ color: '#D4CDC0' }}>/</span>
          <span>● 1,420KG E-WASTE MITIGATED</span>
          <span style={{ color: '#D4CDC0' }}>/</span>
          <span>● 14,200 MATERIAL TAXONOMIES</span>
        </div>
      </div>

      {/* 5. The WasteWise Philosophy (3 Observation Cards) */}
      <section style={{ padding: '70px 0' }}>
        <div className="app-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '8px' }}>
                FOUNDATIONAL THEORY
              </div>
              <h2 className="font-serif" style={{ fontSize: '2.2rem', color: '#141413' }}>
                The WasteWise Philosophy
              </h2>
            </div>
            <p style={{ maxWidth: '440px', fontSize: '0.875rem', color: '#524F48', lineHeight: 1.5 }}>
              We replace disposal reflexes with empirical structural intelligence. Every manufactured casing contains modular potential.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '24px' }}>
            
            {/* Observation 01 */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }} className="technical-label">
                <span>OBSERVATION 01</span>
                <span>OBS_FLAW</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#141413' }}>
                The Linear Illusion
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Most electronic devices and home equipment are retired prematurely due to simple, localized flaws—a failed thermal sensor, depleted galvanic cell, or stripped mechanical connector. Linear consumer culture treats a solitary defect as complete system mortality.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '14px' }}>
                <span className="technical-label">PREMATURE DISCARD RATE</span>
                <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#A32828' }}>73.4%</span>
              </div>
            </div>

            {/* Observation 02 */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }} className="technical-label">
                <span>OBSERVATION 02</span>
                <span>ORA_OPEN_SYN</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#141413' }}>
                The Open Repair Baseline
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Our probabilistic models do not rely on theoretical manufacturer guidelines. They are cross-referenced with over 305,000 real-world community repair café logs worldwide, capturing authentic tool accessibility, adhesive barriers, and common part fatigue.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '14px' }}>
                <span className="technical-label">VALIDATED COMMUNITY NODES</span>
                <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#2B693A' }}>2,140 Cafés</span>
              </div>
            </div>

            {/* Observation 03 */}
            <div style={{ backgroundColor: '#FFFFFF', padding: '28px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px' }} className="technical-label">
                <span>OBSERVATION 03</span>
                <span>ML_PROB_DIST</span>
              </div>
              <h3 className="font-serif" style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#141413' }}>
                Deterministic Modeling
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#524F48', lineHeight: 1.6, marginBottom: '24px' }}>
                Moving beyond binary recycling or landfill guesswork, WasteWise applies calibrated gradient boosted decision trees and NLP tokenizers to generate tailored triage manifests: immediate component restoration, modular upcycling, or surgical raw-material extraction.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '14px' }}>
                <span className="technical-label">INFERENCE PRECISION</span>
                <span className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 600, color: '#141413' }}>96.8% ROC-AUC</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Exemplary Item Diagnostics Section */}
      <section style={{ padding: '20px 0 70px 0' }}>
        <div className="app-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <div className="technical-label" style={{ color: '#736F66', marginBottom: '6px' }}>
                INTERACTIVE GATEWAY
              </div>
              <h2 className="font-serif" style={{ fontSize: '2rem', color: '#141413' }}>
                Exemplary Item Diagnostics
              </h2>
            </div>
            <button 
              onClick={() => setActiveTab('check-item')}
              style={{ background: 'none', border: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#141413', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              RUN CUSTOM SPECIMEN →
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Specimen 1: Sony MDR-7506 */}
            <div 
              onClick={() => {
                onSelectSpecimen({
                  category: 'Audio',
                  brand: 'Sony',
                  age: 6,
                  problem: 'Intermittent left-channel audio loss. Cable stress near 3.5mm terminal.'
                });
                setActiveTab('check-item');
              }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '210px', backgroundColor: '#F0ECE3', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <ThreeCanvas modelType="audio" height="210px" showPedestal={false} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between' }} className="technical-label">
                  <span>AUDIO HARDWARE</span>
                  <span>CAT: AUD-001</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#141413' }}>
                  Sony MDR-7506 Monitors
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#524F48', lineHeight: 1.5, marginBottom: '20px' }}>
                  Symptom: Intermittent left-channel loss. Diagnosis indicates degraded 3.5mm soldered connector; 10-minute non-destructive wire retermination.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '12px', fontSize: '0.72rem' }} className="font-mono">
                  <div>
                    <span className="text-muted">REPARABILITY INDEX: </span>
                    <span style={{ color: '#2B693A', fontWeight: 600 }}>94% HIGHLY VIABLE</span>
                  </div>
                  <span style={{ color: '#141413', fontWeight: 500 }}>VIEW FLOW →</span>
                </div>
              </div>
            </div>

            {/* Specimen 2: Keyboard / Peripherals */}
            <div 
              onClick={() => {
                onSelectSpecimen({
                  category: 'PC accessory',
                  brand: 'Custom',
                  age: 2,
                  problem: 'Non-responsive row 3 matrix. Cold solder joint identified on diode D14.'
                });
                setActiveTab('check-item');
              }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '210px', backgroundColor: '#EDE9E0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <ThreeCanvas modelType="laptop" height="210px" showPedestal={false} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between' }} className="technical-label">
                  <span>INPUT PERIPHERALS</span>
                  <span>CAT: PER-002</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#141413' }}>
                  Custom CNC 65% Keyboard
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#524F48', lineHeight: 1.5, marginBottom: '20px' }}>
                  Symptom: Non-responsive row 3 matrix. Cold solder joint identified on diode D14. High component salvage potential with 67 modular switches.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '12px', fontSize: '0.72rem' }} className="font-mono">
                  <div>
                    <span className="text-muted">REPARABILITY INDEX: </span>
                    <span style={{ color: '#2B693A', fontWeight: 600 }}>89% MODULAR</span>
                  </div>
                  <span style={{ color: '#141413', fontWeight: 500 }}>VIEW FLOW →</span>
                </div>
              </div>
            </div>

            {/* Specimen 3: Cyclone V10 Turbine Assembly */}
            <div 
              onClick={() => {
                onSelectSpecimen({
                  category: 'Vacuum',
                  brand: 'Dyson',
                  age: 3,
                  problem: 'Rapid pulsating motor shutdown. Root cause: micro-filter clog triggers thermal cut-off.'
                });
                setActiveTab('check-item');
              }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ height: '210px', backgroundColor: '#EBE6DC', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <ThreeCanvas modelType="appliance" height="210px" showPedestal={false} />
                <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between' }} className="technical-label">
                  <span>HOME ROBOTICS</span>
                  <span>CAT: ELE-004</span>
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="font-serif" style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#141413' }}>
                  Cyclone V10 Turbine Assembly
                </h3>
                <p style={{ fontSize: '0.8rem', color: '#524F48', lineHeight: 1.5, marginBottom: '20px' }}>
                  Symptom: Rapid pulsating motor shutdown. Root cause: micro-filter clog triggers immediate thermal protection; ultrasonic wash restores 100% flow.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F0ECE4', paddingTop: '12px', fontSize: '0.72rem' }} className="font-mono">
                  <div>
                    <span className="text-muted">REPARABILITY INDEX: </span>
                    <span style={{ color: '#B45309', fontWeight: 600 }}>79% VIABLE</span>
                  </div>
                  <span style={{ color: '#141413', fontWeight: 500 }}>VIEW FLOW →</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner: Ready to assess an unwanted object? */}
      <section style={{ paddingBottom: '60px' }}>
        <div className="app-container">
          <div style={{
            backgroundColor: '#141413',
            color: '#FFFFFF',
            padding: '48px',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <div className="technical-label" style={{ color: '#8C8983', marginBottom: '10px' }}>
                INTERACTIVE ARCHIVAL CLASSIFIER
              </div>
              <h2 className="font-serif" style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '10px' }}>
                Ready to assess an unwanted object?
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#B5AD9E', maxWidth: '580px', lineHeight: 1.5 }}>
                Input model details, symptoms, or component failure modes. The machine-learning pipeline delivers disassembly pathways and circular yield forecasts in seconds.
              </p>
            </div>

            <button 
              className="btn-primary-black"
              onClick={() => setActiveTab('check-item')}
              style={{ backgroundColor: '#FAF8F5', color: '#141413', borderColor: '#FAF8F5', padding: '14px 28px', fontSize: '0.78rem' }}
            >
              INITIATE ANALYSIS <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
