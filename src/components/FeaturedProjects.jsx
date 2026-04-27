import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { CONFIG } from '../data/config.js';
import ProjectCard from './ProjectCard.jsx';

export default function FeaturedProjects() {
  const featured = CONFIG.projects.filter(p => p.featured);
  const navigate  = useNavigate();
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="featured-projects" style={{ background:'var(--bg-alt)', overflow:'hidden', position:'relative' }}>
      <div className="orb orb-purple" style={{ width:500, height:500, bottom:'-10%', right:'-5%', opacity:0.06 }} />

      <div className="container">
        <motion.div
          initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-60px' }}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end',
            marginBottom:56, flexWrap:'wrap', gap:20 }}
        >
          <div>
            <div className="accent-line" />
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <motion.button whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }}
            className="btn btn-outline"
            onClick={() => { navigate('/projects'); window.scrollTo({top:0,behavior:'smooth'}); }}>
            All Projects <HiArrowRight size={14} />
          </motion.button>
        </motion.div>

        {/* Selector tabs */}
        <div style={{ display:'flex', gap:8, marginBottom:28, flexWrap:'wrap' }}>
          {featured.map((p, i) => (
            <motion.button key={p.id} onClick={() => setActiveCard(i)} whileTap={{ scale:0.95 }}
              style={{
                padding:'8px 18px', borderRadius:999, cursor:'pointer',
                border:`1px solid ${activeCard===i ? 'var(--border-accent)' : 'var(--border)'}`,
                background: activeCard===i ? 'var(--accent-glow)' : 'transparent',
                color: activeCard===i ? 'var(--accent)' : 'var(--text-muted)',
                fontFamily:"'Fira Code',monospace", fontSize:'0.75rem', transition:'all 0.2s',
              }}
            >{String(i+1).padStart(2,'0')} — {p.title}</motion.button>
          ))}
        </div>

        {/* Card stack */}
        <div style={{ position:'relative', height:520, marginBottom:20 }} className="card-stack-wrapper">
          {featured.map((project, i) => {
            const offset   = i - activeCard;
            const isActive = offset === 0;
            const isBehind = offset > 0;
            return (
              <motion.div key={project.id}
                animate={{
                  x:       isActive ? 0 : isBehind ? `${offset*24}px` : `-${Math.abs(offset)*120}%`,
                  y:       `${Math.abs(offset)*12}px`,
                  scale:   isActive ? 1 : 1 - Math.abs(offset)*0.04,
                  zIndex:  featured.length - Math.abs(offset),
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset)*0.25,
                  rotateY: !isActive && isBehind ? `${offset*-3}deg` : '0deg',
                }}
                transition={{ duration:0.45, ease:[0.22,1,0.36,1] }}
                onClick={() => !isActive && isBehind && setActiveCard(i)}
                style={{
                  position:'absolute', top:0, left:0, right:0,
                  cursor: isActive ? 'default' : 'pointer',
                  transformOrigin:'top center',
                  pointerEvents: Math.abs(offset) > 2 ? 'none' : 'auto',
                }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            );
          })}
        </div>

        {/* Dot nav */}
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:16 }}>
          {featured.map((_, i) => (
            <motion.button key={i} onClick={() => setActiveCard(i)}
              animate={{ width: activeCard===i ? 24 : 8, background: activeCard===i ? 'var(--accent)' : 'var(--border)' }}
              transition={{ duration:0.25 }}
              style={{ height:8, borderRadius:999, cursor:'pointer', border:'none' }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .card-stack-wrapper { height: auto !important; }
          .card-stack-wrapper > div { position: relative !important; margin-bottom: 16px; }
        }
      `}</style>
    </section>
  );
}
