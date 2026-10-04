import React from 'react';
import { ArrowDown, Cpu, Database, CheckCircle2, Server, Layers, FileCode } from 'lucide-react';

export default function PipelinePage({ setActiveTab }) {
  const steps = [
    {
      title: "01. Open Repair Alliance Raw Ingestion",
      desc: "296,902 raw device failure records collected from international community repair events across Europe, UK, and North America.",
      badge: "296,902 RECORDS"
    },
    {
      title: "02. Systematic Data Cleaning & Target Filtering",
      desc: "Filtered to verified ground-truth target classes ('Fixed', 'Repairable', 'End of life'). Standardized high-cardinality brands and removed null categories.",
      badge: "NOISE SUPPRESSED"
    },
    {
      title: "03. High-Performance Feature Engineering",
      desc: "Extracted 150 top unigram and bi-gram failure tokens using sub-linear TF-IDF. Mapped 11 technical symptom categories across 4 languages.",
      badge: "150 TF-IDF N-GRAMS"
    },
    {
      title: "04. Leakage-Free Preprocessing & Stratified Splitting",
      desc: "80/20 stratified split (237,521 training samples, 59,381 held-out test). Bounded median scaling for product age with missingness indicator mask.",
      badge: "253 SPARSE FEATURES"
    },
    {
      title: "05. Multi-Model Benchmark (Dual-Pipeline Architecture)",
      desc: "Trained and benchmarked Logistic Regression, Decision Tree, Random Forest, and Extreme Gradient Boosting (XGBoost) with binned histogram splits ('hist').",
      badge: "4 ARCHITECTURES"
    },
    {
      title: "06. Model Evaluation & Champion Selection",
      desc: "XGBoost demonstrated superior landfill diversion performance with 75.88% binary triage accuracy and 97.68% salvageable recall.",
      badge: "🥇 XGBOOST CHAMPION"
    },
    {
      title: "07. Model Serialization & FastAPI Microservice Deployment",
      desc: "Serialized pipeline artifacts using Joblib (best_model.joblib, scaler.joblib, tfidf_vectorizer.joblib). Deployed to FastAPI high-speed inference engine.",
      badge: "FASTAPI PORT 8000"
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F5', padding: '40px 0 80px 0' }}>
      <div className="app-container">
        
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="technical-label" style={{ color: '#736F66', marginBottom: '8px' }}>
            SYSTEM ARCHITECTURE / PIPELINE REPRODUCIBILITY
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.4rem)', color: '#141413', marginBottom: '8px' }}>
            End-to-End Machine Learning Pipeline
          </h1>
          <p style={{ fontSize: '0.95rem', color: '#524F48', maxWidth: '720px', lineHeight: 1.6 }}>
            WasteWise transforms messy, multilingual community repair logs into deterministic circular predictions through rigorous data engineering, NLP feature extraction, and gradient-boosted decision trees.
          </p>
        </div>

        {/* Pipeline Architecture Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px', margin: '0 auto 48px auto' }}>
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '3px',
                border: '1px solid #E4DFD5',
                padding: '24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div>
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#141413', marginBottom: '6px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: '#524F48', lineHeight: 1.5, maxWidth: '640px' }}>
                    {s.desc}
                  </p>
                </div>

                <span className="technical-badge badge-neutral font-mono" style={{ fontSize: '0.65rem' }}>
                  {s.badge}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', color: '#B5AD9E' }}>
                  <ArrowDown size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Master Notebook Link Box */}
        <div style={{
          backgroundColor: '#F3F0E8',
          borderRadius: '3px',
          border: '1px solid #E4DFD5',
          padding: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div className="font-serif" style={{ fontSize: '1.3rem', color: '#141413', marginBottom: '4px' }}>
              Master Jupyter Research Notebook: WiseWaste_ML_Pipeline.ipynb
            </div>
            <div style={{ fontSize: '0.8rem', color: '#736F66' }}>
              Contains all 54 cells covering EDA, Data Cleaning, NLP TF-IDF, Dual Training, Sections 12 & 13 Unsupervised K-Means, and Joblib serialization.
            </div>
          </div>

          <button 
            className="btn-primary-black"
            onClick={() => setActiveTab('check-item')}
          >
            TEST INFERENCE IN APP →
          </button>
        </div>

      </div>
    </div>
  );
}
