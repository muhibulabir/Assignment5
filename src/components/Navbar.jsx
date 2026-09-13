import {useState} from 'react'
import logo from '../assets/logo-text.png'
const NavLinks=['Home','Technologies','About','Contact']
function Navbar() {
    const[menuopen,setMenuOpen]=useState(false)
    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
           <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={menuopen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuopen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuopen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
              <path d="M0 1h20M0 8h20M0 15h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>
        <a href="#top" className="flex items-center gap-2 md:mr-6">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
        </a>
        <ul className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NavLinks.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? 'text-brand-pink' : 'transition-colors hover:text-ink'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 md:gap-4">
          <a href="#signin" className="hidden text-sm font-medium text-ink sm:inline">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-card transition-transform hover:scale-[1.03] sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </nav>
      {menuopen&& (
        <ul className="flex flex-col gap-1 border-t border-slate-100 bg-white px-4 pb-4 pt-2 text-sm font-medium text-slate-600 md:hidden">
          {NavLinks.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-2 py-2 ${
                  i===0 ? 'text-brand-pink' : 'hover:bg-slate-50 hover:text-ink'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
          <li className="pt-1 sm:hidden">
            <a href="#signin" className="block rounded-md px-2 py-2 hover:bg-slate-50">
              Sign In
            </a>
          </li>
        </ul>
      )}
        </header>
    )
}