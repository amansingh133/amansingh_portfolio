import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config.js';

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" style={{ background:'var(--bg-alt)', position:'relative', overflow:'hidden' }}>
      {/* Subtle orb */}
      <div className="orb orb-cyan" style={{ width:600, height:600, top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:0.04 }} />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          style={{ textAlign:'center', marginBottom:64 }}
        >
          <div className="accent-line" style={{ margin:'0 auto 16px' }} />
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle" style={{ margin:'0 auto' }}>
            A curated toolkit built across years of shipping production apps.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:20 }}>
          {CONFIG.skills.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity:0, y:40, scale:0.96 }}
              whileInView={{ opacity:1, y:0, scale:1 }}
              viewport={{ once:true, margin:'-40px' }}
              transition={{ duration:0.55, delay: gi * 0.07, ease:[0.22,1,0.36,1] }}
              whileHover={{ y:-6, transition:{duration:0.2} }}
              onClick={() => setActive(active === gi ? null : gi)}
              style={{
                padding:'24px',
                background:'var(--card-bg)',
                border:`1px solid ${active===gi ? 'var(--border-accent)' : 'var(--card-border)'}`,
                borderRadius:16,
                cursor:'pointer',
                backdropFilter:'blur(12px)',
                transition:'all 0.25s',
                boxShadow: active===gi ? 'var(--shadow-accent)' : 'none',
              }}
            >
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                <span style={{ fontSize:'1.4rem' }}>{group.icon}</span>
                <span style={{
                  fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'0.95rem',
                  color: active===gi ? 'var(--accent)' : 'var(--text)',
                  transition:'color 0.2s',
                }}>{group.category}</span>
              </div>

              <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                {group.items.map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity:0, scale:0.8 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ delay: gi*0.06 + si*0.04 }}
                    style={{
                      display:'inline-flex', alignItems:'center',
                      padding:'4px 10px', borderRadius:999,
                      background: active===gi ? 'var(--accent-glow)' : 'var(--surface)',
                      border:`1px solid ${active===gi ? 'var(--border-accent)' : 'var(--border)'}`,
                      fontFamily:"'Fira Code',monospace", fontSize:'0.7rem',
                      color: active===gi ? 'var(--accent)' : 'var(--text-muted)',
                      transition:'all 0.2s',
                      whiteSpace:'nowrap',
                    }}
                  >{skill}</motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
