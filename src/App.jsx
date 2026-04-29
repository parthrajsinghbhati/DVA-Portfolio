import React from 'react';
import './index.css';

const App = () => {
  return (
    <div className="portfolio">
      {/* Floating Header */}
      <nav style={{ position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: 'auto' }}>
        <div className="bento-card" style={{ padding: '12px 32px', borderRadius: '999px', flexDirection: 'row', gap: '32px', alignItems: 'center', background: 'rgba(12, 19, 36, 0.5)' }}>
          <div style={{ fontWeight: '800', fontSize: '20px' }} className="gradient-text">PB.</div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: '600' }}>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
            <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
            <a href="#stack" style={{ color: 'inherit', textDecoration: 'none' }}>Stack</a>
            <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      <main className="bento-grid" style={{ paddingTop: '140px' }}>
        
        {/* HERO BLOCK */}
        <div className="bento-card" style={{ gridColumn: 'span 8', minHeight: '400px', justifyContent: 'center' }} id="about">
          <span className="label-tech">Data Visualization & Analytics</span>
          <h1 style={{ fontSize: '72px', lineHeight: '1.1', marginBottom: '24px' }}>
            Architecting <span className="gradient-text">Data Clarity.</span>
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--on-surface-variant)', maxWidth: '500px', marginBottom: '32px' }}>
            Transforming complex datasets into actionable insights. Aspiring DVA professional. 200+ LeetCode & 600+ DSA problems solved.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="https://drive.google.com/drive/folders/1fheFD5cQSicpOnfYtrpbLqQeKxXZFxRk?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-premium">View Resume</a>
            <a href="https://github.com/parthrajsinghbhati" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--on-surface)', display: 'flex', alignItems: 'center', fontWeight: '600', textDecoration: 'none' }}>
              View GitHub →
            </a>
          </div>
        </div>

        {/* CAPABILITIES BLOCK */}
        <div className="bento-card" style={{ gridColumn: 'span 4', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Expertise Area</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }} className="gradient-text">EDA & BI</div>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Complex data exploration and interactive dashboarding.</p>
            </div>
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
              <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }} className="gradient-text">Statistical Analysis</div>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}>Hypothesis testing and data-driven decision making.</p>
            </div>
          </div>
        </div>

        {/* PROJECTS HEADER */}
        <div style={{ gridColumn: 'span 12', marginTop: '40px' }} id="projects">
          <h2 style={{ fontSize: '32px' }}>Selected Works</h2>
        </div>

        {/* PROJECT 1 */}
        <a href="https://github.com/parthrajsinghbhati/Foodhub" target="_blank" rel="noopener noreferrer" className="bento-card" style={{ gridColumn: 'span 6', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ height: '240px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '64px' }}>📊</span>
          </div>
          <span className="label-tech">Python • Pandas • Seaborn</span>
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>FoodHub Data Analysis</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px' }}>
            Uncovered key efficiency gaps in 1.8k+ food orders. Surfaced a 6-min prep time difference between weekends and weekdays.
          </p>
        </a>

        {/* PROJECT 2 */}
        <a href="https://github.com/parthrajsinghbhati/HR-Analytics" target="_blank" rel="noopener noreferrer" className="bento-card" style={{ gridColumn: 'span 6', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ height: '240px', background: 'linear-gradient(135deg, #1e1b4b, #0f172a)', borderRadius: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '64px' }}>📊</span>
          </div>
          <span className="label-tech">Tableau • Excel • SQL</span>
          <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>HR Analytics Dashboard</h3>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px' }}>
            Interactive Tableau dashboard analyzing attrition across 1,470 employees. Segmented attrition metrics and interactive education slicers.
          </p>
        </a>

        {/* TECH STACK */}
        <div className="bento-card" style={{ gridColumn: 'span 4' }} id="stack">
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Tech Stack & Tools</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {['Tableau', 'Python', 'Pandas', 'Seaborn', 'SQL', 'Excel', 'MongoDB', 'Git'].map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="bento-card" style={{ gridColumn: 'span 4' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Education</h3>
          <p style={{ fontWeight: '700', fontSize: '15px' }}>B.Tech in AI</p>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px', marginBottom: '12px' }}>Newton School of Technology</p>
          <p style={{ fontSize: '13px', color: 'var(--secondary)' }}>2024 — 2028</p>
        </div>

        {/* EXTRA */}
        <div className="bento-card" style={{ gridColumn: 'span 4' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Milestones</h3>
          <ul style={{ listStyle: 'none', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <li style={{ marginBottom: '8px' }}>🎓 High Distinction: 9.68/10.0 GPA</li>
            <li style={{ marginBottom: '8px' }}>🏆 CodeChef 3-star | Codeforces Pupil</li>
            <li style={{ marginBottom: '8px' }}>🐙 Hacktoberfest 2024 Contributor</li>
            <li style={{ marginBottom: '8px' }}>💻 200+ LeetCode | 600+ DSA Problems</li>
            <li>🥎 Softball National Level</li>
          </ul>
        </div>

        {/* CONTACT BLOCK */}
        <div className="bento-card" style={{ gridColumn: 'span 12', textAlign: 'center', background: 'var(--accent-gradient)', color: 'white' }} id="contact">
          <h2 style={{ fontSize: '48px', marginBottom: '16px' }}>Let's work together.</h2>
          <p style={{ marginBottom: '32px', opacity: 0.9 }}>Available for internships and data-driven projects.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <a href="mailto:parthraj.bhati2024@nst.rishihood.edu.in" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>Email Me</a>
            <a href="https://drive.google.com/drive/folders/1fheFD5cQSicpOnfYtrpbLqQeKxXZFxRk?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>View Resume</a>
            <a href="https://www.linkedin.com/in/parthraj-singh-bhati-6a5128309/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', fontWeight: '700' }}>LinkedIn</a>
          </div>
        </div>

      </main>

      <footer style={{ padding: '40px 0', textAlign: 'center', opacity: 0.5, fontSize: '12px' }}>
        &copy; 2026 Parthraj Singh Bhati
      </footer>
    </div>
  );
};

export default App;
