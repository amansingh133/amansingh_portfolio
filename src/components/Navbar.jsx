import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { useThemeCtx } from '../App.jsx';
import { CONFIG } from '../data/config.js';

export default function Navbar() {
  const { theme, toggle } = useThemeCtx();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleNav = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => document.querySelector(path)?.scrollIntoView({ behavior:'smooth' }), 350);
      } else {
        document.querySelector(path)?.scrollIntoView({ behavior:'smooth' });
      }
    } else {
      navigate(path);
      window.scrollTo({ top:0, behavior:'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0, opacity:1 }}
        transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
        style={{
          position:'fixed', top:0, left:0, right:0, zIndex:1000,
          padding: scrolled ? '14px 0' : '22px 0',
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition:'all 0.35s ease',
        }}
      >
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16 }}>
          {/* Logo */}
          <a href="/" onClick={e => { e.preventDefault(); navigate('/'); window.scrollTo({top:0,behavior:'smooth'}); }}
            style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0, textDecoration:'none' }}>
            <div style={{
              width:36, height:36,
              background:'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderRadius:8, display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:"'Fira Code',monospace", fontWeight:700, fontSize:'1rem', color:'#fff',
              boxShadow:'0 0 16px var(--accent-glow)',
            }}>A</div>
            <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:'1rem', color:'var(--text)' }}>
              {CONFIG.personal.name.split(' ')[0]}<span style={{color:'var(--accent)'}}>.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:4 }}>
            {CONFIG.nav.map(item => (
              <a key={item.label} href={item.path} onClick={e => handleNav(e, item.path)}
                style={{
                  fontFamily:"'Fira Code',monospace", fontSize:'0.8rem', fontWeight:500,
                  color:'var(--text-muted)', padding:'8px 14px', borderRadius:6,
                  transition:'all 0.2s', cursor:'pointer', display:'block',
                }}
                onMouseEnter={e=>{ e.target.style.color='var(--accent)'; e.target.style.background='var(--accent-glow)'; }}
                onMouseLeave={e=>{ e.target.style.color='var(--text-muted)'; e.target.style.background='transparent'; }}
              >{item.label}</a>
            ))}
          </div>

          {/* Controls */}
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <motion.button onClick={toggle} whileTap={{ scale:0.9 }} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}
              style={{ width:40, height:40, borderRadius:'50%', background:'var(--surface)',
                border:'1px solid var(--border)', display:'flex', alignItems:'center',
                justifyContent:'center', color:'var(--text-muted)', transition:'all 0.2s', cursor:'pointer' }}
              onMouseEnter={e=>{ e.currentTarget.style.color='var(--accent)'; e.currentTarget.style.borderColor='var(--border-accent)'; }}
              onMouseLeave={e=>{ e.currentTarget.style.color='var(--text-muted)'; e.currentTarget.style.borderColor='var(--border)'; }}
            >
              {theme === 'dark' ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>

            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
              style={{ width:40, height:40, borderRadius:8, background:'var(--surface)',
                border:'1px solid var(--border)', display:'none', alignItems:'center',
                justifyContent:'center', color:'var(--text-muted)', cursor:'pointer' }}>
              {menuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }}
            transition={{ duration:0.25 }}
            style={{ position:'fixed', top:70, left:16, right:16, zIndex:999,
              background:'var(--surface)', border:'1px solid var(--border)',
              borderRadius:16, padding:16, backdropFilter:'blur(20px)', boxShadow:'var(--shadow-md)' }}
          >
            {CONFIG.nav.map((item, i) => (
              <motion.a key={item.label} href={item.path} onClick={e => handleNav(e, item.path)}
                initial={{ opacity:0, x:-16 }} animate={{ opacity:1, x:0 }}
                transition={{ delay: i * 0.05 }}
                style={{ display:'block', padding:'14px 16px', fontFamily:"'Fira Code',monospace",
                  fontSize:'0.875rem', color:'var(--text-muted)', borderRadius:8,
                  transition:'all 0.2s', cursor:'pointer' }}
                onMouseEnter={e=>{ e.target.style.color='var(--accent)'; e.target.style.background='var(--accent-glow)'; }}
                onMouseLeave={e=>{ e.target.style.color='var(--text-muted)'; e.target.style.background='transparent'; }}
              >{item.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
