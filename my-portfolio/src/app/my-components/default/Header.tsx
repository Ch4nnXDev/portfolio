
"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Experience", "Projects"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl sm:px-6">
        <a href="#home" className="font-serif text-lg font-semibold tracking-tight">CK.</a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => <li key={link}><a href={`#${link.toLowerCase()}`} className="text-sm font-medium text-slate-600 transition hover:text-blue-700">{link}</a></li>)}
        </ul>
        <button onClick={() => setOpen((value) => !value)} className="rounded-lg p-1.5 text-slate-700 md:hidden" aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>
      {open && <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/60 bg-white/95 p-2 shadow-lg backdrop-blur-xl md:hidden">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">{link}</a>)}
      </div>}
    </header>
  );
}
