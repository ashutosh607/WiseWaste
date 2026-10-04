import React from 'react';
import { ShieldCheck, Activity } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="border-t-hairline" style={{ backgroundColor: '#FAF8F5', paddingTop: '48px', paddingBottom: '36px', marginTop: '60px' }}>
      <div className="app-container">
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          paddingBottom: '40px'
        }} className="border-b-hairline">
          
          {/* Column 1: Identity & Kernel */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#141413' }}>
                WasteWise
              </span>
              <span className="technical-badge badge-neutral" style={{ fontSize: '0.6rem' }}>
                V2.4 KERNEL
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: '#736F66', lineHeight: 1.6, maxWidth: '340px', marginBottom: '20px' }}>
              An architectural intelligence protocol assessing physical object lifecycle taxonomy, material disassemblability, and circular viability for industrial engineering.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: '#2B693A' }}>
              <ShieldCheck size={14} />
              <span className="font-mono">Accredited under the Open Repair Alliance Protocol (ORA-2025)</span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div>
            <div className="technical-label" style={{ marginBottom: '16px', color: '#141413' }}>
              NAVIGATION INDEX
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'System Methodology', tab: 'how-it-works' },
                { name: 'Specimen Diagnostics', tab: 'check-item' },
                { name: 'Archival Inspection Insights', tab: 'insights' },
                { name: 'Full ML Pipeline Specification', tab: 'pipeline' },
                { name: 'Future Circular Layer (Coming Next)', tab: 'future-layer' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveTab(item.tab)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: '#736F66',
                      fontSize: '0.8125rem',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#141413')}
                    onMouseLeave={(e) => (e.target.style.color = '#736F66')}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Live System Telemetry */}
          <div style={{ backgroundColor: '#F3F0E8', padding: '20px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="technical-label">SYSTEM STATUS</span>
              <span className="technical-badge badge-green" style={{ fontSize: '0.62rem' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
                Online / Latency 14ms
              </span>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <span className="font-serif" style={{ fontSize: '2rem', fontWeight: 600, color: '#141413' }}>
                94.8%
              </span>
              <span className="technical-label" style={{ marginLeft: '8px' }}>
                DISASSEMBLY CONFIDENCE
              </span>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#736F66', lineHeight: 1.5, marginBottom: '16px' }}>
              Active archival evaluation running real-time heuristic validation across 14,200 material assemblies.
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: '#9C978D' }}>
              <span>NODE: WW-ARCH-09</span>
              <span>HASH: 78F4...A18C</span>
            </div>
          </div>

        </div>

        {/* Legal & Standards Bottom Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          paddingTop: '20px',
          fontSize: '0.72rem',
          color: '#9C978D',
          fontFamily: 'var(--font-mono)'
        }}>
          <div>
            © 2025–2026 WasteWise Laboratory. All rights reserved. Archival Paper Series #04
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Editorial Standards</span>
            <span>Material Taxonomy</span>
            <span>Privacy Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
