import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCw, RotateCcw, Wrench, ShieldCheck, Check, Lightbulb } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';

export default function CheckItemPage({ 
  formData, 
  setFormData, 
  onAnalyze, 
  isLoading 
}) {
  const [modelAngle, setModelAngle] = useState(0);

  const categories = [
    { label: 'Laptop', id: 'Laptop', model: 'laptop' },
    { label: 'Phone', id: 'Mobile', model: 'tech' },
    { label: 'Audio', id: 'Audio', model: 'audio' },
    { label: 'Optics', id: 'DSLR/video camera', model: 'tech' },
    { label: 'Appliance', id: 'Vacuum', model: 'appliance' }
  ];

  const allCategories = [
    'Laptop', 'Mobile', 'Tablet', 'Desktop computer', 'PC accessory',
    'Audio', 'Headphones', 'Hi-Fi separates', 'Portable radio',
    'Vacuum', 'Coffee maker', 'Power tool', 'Kettle', 'Toaster',
    'Iron', 'Lamp', 'Flat screen', 'Sewing machine', 'Hair dryer',
    'Food processor', 'Digital compact camera', 'DSLR/video camera',
    'Games console', 'Decorative or safety lights', 'Watch/clock'
  ];

  const ageOptions = [
    { label: '1 yr', value: 1.0 },
    { label: '2 yrs', value: 2.0 },
    { label: '4 yrs', value: 4.0 },
    { label: '7+ yrs', value: 8.0 }
  ];

  const handleCategorySelect = (cat) => {
    setFormData({
      ...formData,
      product_category: cat.id
    });
  };

  const handleAgeSelect = (val) => {
    setFormData({
      ...formData,
      product_age: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.product_category || !formData.problem) {
      alert("Please fill in both the product category and the failure symptoms.");
      return;
    }
    onAnalyze();
  };

  // Determine which 3D model type to show
  const currentCatLower = (formData.product_category || '').toLowerCase();
  let threeType = 'laptop';
  if (currentCatLower.includes('audio') || currentCatLower.includes('headphone') || currentCatLower.includes('radio') || currentCatLower.includes('hi-fi')) {
    threeType = 'audio';
  } else if (currentCatLower.includes('vacuum') || currentCatLower.includes('appliance') || currentCatLower.includes('coffee') || currentCatLower.includes('tool')) {
    threeType = 'appliance';
  }

  return (
    <div style={{ backgroundColor: '#FAF8F5', padding: '40px 0 80px 0' }}>
      <div className="app-container">
        
        {/* Header Protocol Badge & Title */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
            <span className="technical-label" style={{ color: '#2B693A', fontWeight: 600 }}>
              DIAGNOSTIC PROTOCOL V2.4
            </span>
          </div>

          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: '#141413', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '8px' }}>
            Let’s Understand the Item.
          </h1>

          <p style={{ fontSize: '0.95rem', color: '#736F66', maxWidth: '640px' }}>
            Tell us a few things about it. Our model will evaluate its repair feasibility against verified community records.
          </p>
        </div>

        {/* 2-Column Grid: Form Left, CAD Preview Right */}
        <div className="check-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '36px', alignItems: 'start' }}>
          
          {/* LEFT: Diagnostic Form */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '32px' }}>
            <form onSubmit={handleSubmit}>
              
              {/* Category Selection */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }} className="technical-label">
                  <span style={{ color: '#141413', fontWeight: 600 }}>ASSET TAXONOMY / CLASS</span>
                  <span>CAT-CODE: 4802</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  {categories.map((c) => {
                    const isSelected = formData.product_category === c.id;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => handleCategorySelect(c)}
                        style={{
                          backgroundColor: isSelected ? '#141413' : '#F3F0E8',
                          color: isSelected ? '#FAF8F5' : '#141413',
                          border: isSelected ? '1px solid #141413' : '1px solid #E4DFD5',
                          borderRadius: '2px',
                          padding: '7px 16px',
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                </div>

                {/* More Categories Dropdown */}
                <select
                  value={formData.product_category}
                  onChange={(e) => setFormData({ ...formData, product_category: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '2px',
                    border: '1px solid #E4DFD5',
                    backgroundColor: '#FAF8F5',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#141413'
                  }}
                >
                  <option value="">-- Or choose from full 42-category taxonomy --</option>
                  {allCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Manufacturer / OEM */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }} className="technical-label">
                  <span style={{ color: '#141413', fontWeight: 600 }}>MANUFACTURER / OEM</span>
                  <span style={{ color: '#2B693A' }}>Verified Ledger</span>
                </div>

                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    placeholder="e.g. Dell, Apple, Sony, Dyson, Bosch..."
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '2px',
                      border: '1px solid #E4DFD5',
                      backgroundColor: '#FAF8F5',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: '#141413'
                    }}
                  />
                  <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: '#2B693A' }} className="font-mono">
                    <span>XPS-LINE</span>
                    <Check size={13} />
                  </div>
                </div>
              </div>

              {/* Lifecycle Horizon (Age) */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }} className="technical-label">
                  <span style={{ color: '#141413', fontWeight: 600 }}>LIFECYCLE HORIZON (AGE)</span>
                  <span style={{ color: '#2B693A', fontWeight: 600 }}>{formData.product_age} years active</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '10px' }}>
                  {ageOptions.map((opt) => {
                    const isSelected = formData.product_age === opt.value;
                    return (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() => handleAgeSelect(opt.value)}
                        style={{
                          backgroundColor: isSelected ? '#141413' : '#F3F0E8',
                          color: isSelected ? '#FAF8F5' : '#141413',
                          border: isSelected ? '1px solid #141413' : '1px solid #E4DFD5',
                          borderRadius: '2px',
                          padding: '8px 0',
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono)',
                          cursor: 'pointer',
                          textAlign: 'center'
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                {/* Visual Progress Bar */}
                <div style={{ height: '4px', backgroundColor: '#E4DFD5', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${Math.min(100, (formData.product_age / 8) * 100)}%`,
                    height: '100%',
                    backgroundColor: '#2B693A',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Observed Failure Mode */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }} className="technical-label">
                  <span style={{ color: '#141413', fontWeight: 600 }}>OBSERVED FAILURE MODE</span>
                  <span>NLP HEURISTIC</span>
                </div>

                <textarea
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Describe the failure, e.g. Doesn't turn on and shows no power when connected to original AC adapter."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '2px',
                    border: '1px solid #E4DFD5',
                    backgroundColor: '#FAF8F5',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.85rem',
                    color: '#141413',
                    lineHeight: 1.5,
                    resize: 'vertical'
                  }}
                />

                {/* Helpful Tip */}
                <div style={{
                  marginTop: '8px',
                  backgroundColor: '#F3F0E8',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.72rem',
                  color: '#524F48'
                }}>
                  <Lightbulb size={13} color="#B45309" />
                  <span><strong>Tip:</strong> Mentioning battery behavior, sounds, or physical drops improves prediction accuracy by <strong>+14%</strong>.</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary-black"
                style={{
                  width: '100%',
                  padding: '14px',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} />
                  {isLoading ? 'ANALYZING SPECIMEN...' : 'ANALYZE ITEM'}
                </span>
                <span style={{ color: '#B5AD9E', fontSize: '0.7rem' }}>
                  TENSOR-NODE v2 →
                </span>
              </button>

            </form>
          </div>

          {/* RIGHT: Surface CAD View & Specimen Metrics */}
          <div>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '3px', border: '1px solid #E4DFD5', padding: '24px', marginBottom: '24px' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                  <div className="technical-label" style={{ color: '#736F66', marginBottom: '2px' }}>
                    SURFACE CAD VIEW
                  </div>
                  <div className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600, color: '#141413' }}>
                    {formData.brand || 'Dell'} {formData.product_category || 'Laptop'} (Chassis Rev. 2020)
                  </div>
                </div>

                <span className="technical-badge badge-green">
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2B693A' }} />
                  94.2% ML MATCH
                </span>
              </div>

              {/* 3D Canvas with Cad Annotations */}
              <div style={{
                position: 'relative',
                backgroundColor: '#F3F0E8',
                borderRadius: '3px',
                border: '1px solid #E2DDD5',
                overflow: 'hidden'
              }}>
                <ThreeCanvas modelType={threeType} height="320px" showPedestal={false} />

                {/* Component Inspection Annotations */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  border: '1px solid #DCD6C9',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#141413'
                }}>
                  ⚙ PMIC REVISION: TPS65988
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  border: '1px solid #DCD6C9',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#2B693A'
                }}>
                  ⚡ DC-IN BUS INSPECTION
                </div>
              </div>

              {/* Rotation & Historical Cohort Footer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '14px', fontSize: '0.7rem' }} className="font-mono">
                <div>
                  <span className="text-muted">HISTORICAL COHORT: </span>
                  <span style={{ color: '#141413', fontWeight: 600 }}>14,820 Similar Open Repair Records</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#736F66' }}>
                  <span>ROTATION</span>
                  <RotateCcw size={13} style={{ cursor: 'pointer' }} />
                  <span>45° ISO</span>
                  <RotateCw size={13} style={{ cursor: 'pointer' }} />
                </div>
              </div>

            </div>

            {/* 3 Quick Diagnostics Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              
              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
                <div className="technical-label" style={{ color: '#736F66', marginBottom: '4px' }}>
                  DISASSEMBLY TIME
                </div>
                <div className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, color: '#141413' }}>
                  18 min <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>avg</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#736F66', marginTop: '4px' }} className="font-mono">
                  🔧 T5 Torx Screws
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
                <div className="technical-label" style={{ color: '#736F66', marginBottom: '4px' }}>
                  REPARABILITY INDEX
                </div>
                <div className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, color: '#2B693A' }}>
                  7.4 <span style={{ fontSize: '0.85rem', color: '#736F66' }}>/ 10</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#736F66', marginTop: '4px' }} className="font-mono">
                  Class III Open Chassis
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '16px', borderRadius: '3px', border: '1px solid #E4DFD5' }}>
                <div className="technical-label" style={{ color: '#736F66', marginBottom: '4px' }}>
                  COMMUNITY FIX RATE
                </div>
                <div className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 600, color: '#141413' }}>
                  82.6% <span style={{ fontSize: '0.75rem', color: '#2B693A' }}>+3.1%</span>
                </div>
                <div style={{ fontSize: '0.6875rem', color: '#736F66', marginTop: '4px' }} className="font-mono">
                  1,240 Solved Cases
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Neural Graph Weights Banner */}
        <div style={{
          marginTop: '36px',
          backgroundColor: '#F3F0E8',
          border: '1px solid #E4DFD5',
          borderRadius: '3px',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.72rem',
          color: '#524F48'
        }} className="font-mono">
          <div>
            <strong>ACTIVE NEURAL GRAPH WEIGHTS: V2.4-ORA</strong> — Cross-referencing 240,000+ open repair taxonomy entries and iFixit telemetry.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>PARAM LATENCY: 22ms</span>
            <span>TOPOLOGY: GNN-DENSE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
