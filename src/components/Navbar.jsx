import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiScissors } from 'react-icons/fi';
import Button from './Button';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-maroon ${isActive ? 'text-maroon' : 'text-ink/80'}`;

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-ink/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-display font-semibold text-lg" onClick={() => setOpen(false)}>
          <FiScissors className="w-5 h-5 text-maroon" aria-hidden="true" />
          Sims Unisex Salon
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as={NavLink} to="/booking" size="sm">
            Book appointment
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-ink/5"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper px-4 pb-4 pt-2 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <Button as={NavLink} to="/booking" size="sm" className="w-full" onClick={() => setOpen(false)}>
            Book appointment
          </Button>
        </div>
      )}
    </header>
  );
}
