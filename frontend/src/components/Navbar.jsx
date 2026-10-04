import React from 'react';
import { Sparkles, User, Cpu } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'how-it-works', label: 'HOW IT WORKS' },
    { id: 'check-item', label: 'CHECK AN ITEM' },
    { id: 'analysis', label: 'ANALYSIS' },
    { id: 'results', label: 'RESULTS' },
    { id: 'insights', label: 'INSIGHTS' },
    { id: 'pipeline', label: 'ML PIPELINE' },
    { id: 'future-layer', label: 'FUTURE CIRCULAR LAYER' }
  ];

  return (
    <header className="border-b-hairline bg-white/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="app-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
        
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1.5px solid #141413',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#141413' }} />
            <div style={{ position: 'absolute', width: '2px', height: '4px', top: '1px', background: '#141413' }} />
            <div style={{ position: 'absolute', width: '2px', height: '4px', bottom: '1px', background: '#141413' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, letterSpacing: '-0.02em', color: '#141413' }}>
                WasteWise
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
            </div>
            <div className="technical-label" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: '#736F66', marginTop: '-2px' }}>
              CIRCULAR INTELLIGENCE
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #141413' : '2px solid transparent',
                  padding: '8px 2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6875rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.08em',
                  color: isActive ? '#141413' : '#736F66',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  textTransform: 'uppercase'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and User Profile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button 
            className="btn-primary-black"
            onClick={() => setActiveTab('check-item')}
            style={{ padding: '8px 16px', fontSize: '0.7rem' }}
          >
            CHECK AN ITEM
          </button>
          
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#141413',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <User size={15} />
          </div>
        </div>

      </div>
    </header>
  );
}
