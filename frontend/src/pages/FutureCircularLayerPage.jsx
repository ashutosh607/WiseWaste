import React from 'react';
import { ArrowRight, Wrench, ShoppingBag, HeartHandshake, Cog, Recycle, ShieldAlert, Sparkles } from 'lucide-react';

export default function FutureCircularLayerPage({ setActiveTab }) {
  const pathways = [
    {
      name: 'Repair',
      icon: Wrench,
      status: 'CURRENT ML SCOPE (ACTIVE)',
      color: '#2B693A',
      badge: 'badge-green',
      scope: 'Active production pipeline: Predicts Fixed, Repairable, or End of life based on 305,000+ open repair records.',
      metrics: 'Dual-pipeline XGBoost triage: 75.88% binary accuracy, 97.68% salvageable recall.'
    },
    {
      name: 'Resale',
      icon: ShoppingBag,
      status: 'COMING NEXT / FUTURE DECISION LAYER',
      color: '#B45309',
      badge: 'badge-amber',
      scope: 'Dynamic secondary-market valuation algorithm integrating eBay, Swappa, and BackMarket API pricing feeds for working refurbished equipment.',
      metrics: 'Anticipated Q3 release: Residual economic yield calibration.'
    },
    {
      name: 'Donate',
      icon: HeartHandshake,
      status: 'COMING NEXT / FUTURE DECISION LAYER',
      color: '#B45309',
      badge: 'badge-amber',
      scope: 'Civic redistribution dispatcher routing functional, sanitized digital hardware to schools, non-profits, and digital inclusion charities.',
      metrics: 'Anticipated Q3 release: Social logistics and tax-deductible valuation index.'
    },
    {
      name: 'Parts',
      icon: Cog,
      status: 'COMING NEXT / FUTURE DECISION LAYER',
      color: '#B45309',
      badge: 'badge-amber',
      scope: 'Automated Bill of Materials (BOM) disassembly breakdown. Recommends harvesting functional screens, IC power rails, memory chips, and chassis plastics.',
      metrics: 'Anticipated Q4 release: Sub-component salvage routing.'
    },
    {
      name: 'Recycle',
      icon: Recycle,
      status: 'COMING NEXT / FUTURE DECISION LAYER',
      color: '#A32828',
      badge: 'badge-red',
      scope: 'WEEE & R2v3 certified metallurgical smelting triage for unrecoverable toxic substrates, lithium cells, and rare-earth recovery.',
      metrics: 'Anticipated Q4 release: Chain-of-custody carbon audit certificates.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F5', padding: '40px 0 80px 0' }}>
      <div className="app-container">

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span className="technical-badge badge-amber font-mono">
              COMING NEXT / FUTURE DECISION LAYER
            </span>
          </div>

          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)', color: '#141413', marginBottom: '8px' }}>
            The Complete Circular Decision Matrix
          </h1>

          <p style={{ fontSize: '0.95rem', color: '#524F48', maxWidth: '720px', lineHeight: 1.6 }}>
            WasteWise is architected to scale from triage diagnostic modeling to multi-tier circular logistics.
            While our current trained ML models focus strictly on <strong>Fixed / Repairable / End of life</strong>, this future layer will route items into five circular pathways.
          </p>
        </div>

        {/* Clear Notice Banner */}
        <div style={{
          backgroundColor: '#FEF3C7',
          border: '1px solid rgba(180, 83, 9, 0.3)',
          borderRadius: '3px',
          padding: '16px 20px',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#92400E'
        }}>
          <ShieldAlert size={18} />
          <div>
            <strong>Scientific Integrity Statement:</strong> WasteWise does NOT falsely claim that the current ML model predicts Resale, Donate, Parts, or Recycle. The current trained XGBoost model outputs strictly empirical repairability classes (<code>Fixed</code>, <code>Repairable</code>, <code>End of life</code>). The pathways below represent the planned post-triage circular execution layer.
          </div>
        </div>

        {/* 5 Circular Pathway Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '3px',
                  border: '1px solid #E4DFD5',
                  padding: '28px',
                  display: 'grid',
                  gridTemplateColumns: '80px 1.5fr 1fr',
                  gap: '24px',
                  alignItems: 'center'
                }}
                className="hero-grid"
              >
                {/* Icon box */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '2px',
                  backgroundColor: '#F3F0E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={28} color={p.color} />
                </div>

                {/* Main info */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h2 className="font-serif" style={{ fontSize: '1.6rem', color: '#141413' }}>
                      {p.name}
                    </h2>
                    <span className={`technical-badge ${p.badge}`} style={{ fontSize: '0.62rem' }}>
                      {p.status}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.84rem', color: '#524F48', lineHeight: 1.5 }}>
                    {p.scope}
                  </p>
                </div>

                {/* Status & Timeline */}
                <div style={{ borderLeft: '1px solid #F0ECE4', paddingLeft: '24px' }}>
                  <div className="technical-label" style={{ marginBottom: '4px' }}>STATUS & ROADMAP</div>
                  <div className="font-mono" style={{ fontSize: '0.75rem', color: '#141413', fontWeight: 600, marginBottom: '4px' }}>
                    {p.metrics}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#736F66' }}>
                    Standardized via ISO 59020 Circularity Measurement.
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '3px',
          border: '1px solid #E4DFD5',
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div className="font-serif" style={{ fontSize: '1.25rem', color: '#141413', marginBottom: '4px' }}>
              Want to test the active ML repairability inference engine?
            </div>
            <div style={{ fontSize: '0.8rem', color: '#736F66' }}>
              Submit an item to run the active XGBoost 253-feature diagnostic model.
            </div>
          </div>

          <button
            className="btn-primary-black"
            onClick={() => setActiveTab('check-item')}
          >
            CHECK AN ITEM <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
