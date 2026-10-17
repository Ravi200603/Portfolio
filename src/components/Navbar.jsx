import { useState } from 'react'
import hamburger from '../assets/hamburger.svg'

const links = [
  { label: 'Home', href: '#Home' },
  { label: 'About', href: '#About' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav
        className="top-0 z-50 flex justify-around items-center bg-[#fafafc] h-[80px] max-w-[100vw]"
        id="Home"
      >
        <button
          className="md:hidden relative left-[10px] text-[#1d1d20]"
          onClick={() => setOpen((o) => !o)}
        >
          <img src={hamburger} className="w-6 h-6 cursor-pointer" alt="" />
        </button>
        <div className="md:hidden flex-1 text-center text-[#1d1d20] font-semibold text-2xl">
          Ravinder's Portfolio
        </div>
        <div className="right">
          <ul
            className={`${
              open ? '' : 'hidden'
            } flex-col absolute top-[80px] left-0 w-full bg-[#fafafc] border-t border-gray-200 py-4 justify-center md:flex md:flex-row md:static md:w-auto md:py-0 md:shadow-none md:border-none text-[#1d1d20]`}
          >
            {links.map(({ label, href }) => (
              <li key={label} className="w-full list-none mx-[24px]">
                <a
                  className="block px-6 no-underline cursor-pointer hover:text-[#bcbcbc] hover:text-[1.1rem]"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
