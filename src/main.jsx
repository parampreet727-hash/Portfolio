import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const projects = [
  {
    title: "TrendWear",
    type: "Fashion E-Commerce Web App",
    description:
      "Responsive fashion storefront with product browsing and a mobile-first, component-based React architecture.",
    stack: ["React.js", "Tailwind CSS", "Netlify"],
    live: "https://mytrendwear.netlify.app",
  },
  {
    title: "TicketJet",
    type: "Travel Booking Platform",
    description:
      "Multi-page travel experience with destination discovery, packages, reviews, itinerary sections and a login flow.",
    stack: ["JavaScript", "CSS", "React", "Netlify"],
    live: "https://travelingwithus.netlify.app",
  },
];

const skillGroups = [
  ["Frontend", "React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  ["Workflow", "Git", "GitHub", "Vite", "VS Code", "Chrome DevTools"],
  ["Other", "Responsive Web Design", "SEO Fundamentals", "MongoDB", "Vercel", "Netlify"],
];

function Icon({ name, size = 20 }) {
  const paths = {
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="M6 6l12 12M18 6 6 18"/></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></>,
    graduation: <><path d="m2 9 10-5 10 5-10 5L2 9Z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("home");

  React.useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const nav = ["home", "about", "skills", "projects", "education", "contact"];
  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b17] text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b17]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => go("home")} className="focus-ring text-xl font-black tracking-tight" aria-label="Go home">
            Parampreet<span className="text-indigo-400">.</span>
          </button>
          <div className="hidden items-center gap-6 md:flex">
            {nav.map(id => <button key={id} onClick={() => go(id)} className={`focus-ring text-sm capitalize transition ${active === id ? "text-indigo-300" : "text-slate-400 hover:text-white"}`}>{id}</button>)}
          </div>
          <button onClick={() => go("contact")} className="hidden rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold transition hover:bg-indigo-400 md:block">Let's Talk</button>
          <button onClick={() => setOpen(v => !v)} className="focus-ring rounded-lg p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            <Icon name={open ? "close" : "menu"} />
          </button>
        </nav>
        {open && <div className="border-t border-white/10 px-5 py-4 md:hidden">
          {nav.map(id => <button key={id} onClick={() => go(id)} className="focus-ring block w-full py-3 text-left capitalize text-slate-300">{id}</button>)}
        </div>}
      </header>

      <main>
        <section id="home" className="grid-bg relative px-5 pb-24 pt-36 md:pb-32 md:pt-48">
          <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl"/>
          <div className="relative mx-auto max-w-6xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[.22em] text-indigo-300"><span className="h-px w-8 bg-indigo-400"/>Frontend Developer</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Building clean, modern <span className="text-indigo-400">web experiences.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Hi, I'm Parampreet Singh. I build responsive and user-friendly interfaces using React.js, JavaScript and Tailwind CSS.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => go("projects")} className="focus-ring inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3.5 font-semibold hover:bg-indigo-400">View Projects <Icon name="arrow" size={18}/></button>
              <button onClick={() => go("contact")} className="focus-ring rounded-full border border-white/15 px-6 py-3.5 font-semibold hover:bg-white/5">Contact Me</button>
            </div>
            <div className="mt-10 flex gap-3">
              <a className="focus-ring rounded-full border border-white/10 p-3 text-slate-400 hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a>
              <a className="focus-ring rounded-full border border-white/10 p-3 text-slate-400 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a>
              <a className="focus-ring rounded-full border border-white/10 p-3 text-slate-400 hover:text-white" href="mailto:Parampreetdhatt410@gmail.com" aria-label="Email"><Icon name="mail"/></a>
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-5 md:items-center">
            <div className="md:col-span-2">
              <div className="mx-auto flex aspect-square max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-cyan-500/10 shadow-2xl shadow-indigo-950/40">
                <div className="text-center"><div className="text-7xl font-black">PS</div><div className="mt-3 text-sm text-slate-500">Frontend Developer</div></div>
              </div>
            </div>
            <div className="md:col-span-3">
              <SectionHead eyebrow="About Me" title="Turning ideas into polished interfaces." />
              <p className="mt-6 leading-8 text-slate-400">Frontend Developer with hands-on experience building and deploying responsive, user-friendly web applications using React.js, JavaScript (ES6+) and TypeScript. Comfortable with component architecture, Tailwind CSS styling, Git-based workflows and production deployment.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Info icon="code" title="Frontend" text="React, JavaScript, Tailwind"/>
                <Info icon="briefcase" title="Workflow" text="Git, Vite, DevTools"/>
                <Info icon="graduation" title="Education" text="MSc IT + PGDCA"/>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-white/5 bg-white/[.02] px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="Skills" title="My technical toolkit"/>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {skillGroups.map(([group, ...items]) => <div key={group} className="rounded-3xl border border-white/10 bg-white/[.03] p-6">
                <h3 className="font-bold">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">{items.map(x => <span key={x} className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300">{x}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section id="projects" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHead eyebrow="Projects" title="Selected work"/>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {projects.map(p => <article key={p.title} className="group rounded-3xl border border-white/10 bg-white/[.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/15 text-lg font-black text-indigo-300">{p.title.slice(0,2)}</div>
                  <a className="focus-ring rounded-full border border-white/10 p-3 text-slate-400 hover:text-white" href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}><Icon name="external" size={18}/></a>
                </div>
                <h3 className="mt-7 text-2xl font-bold">{p.title}</h3>
                <p className="mt-1 text-indigo-300">{p.type}</p>
                <p className="mt-5 leading-7 text-slate-400">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{p.stack.map(x => <span key={x} className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300">{x}</span>)}</div>
                <a href={p.live} target="_blank" rel="noreferrer" className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-indigo-200">View live project <Icon name="arrow" size={16}/></a>
              </article>)}
            </div>
          </div>
        </section>

        <section id="education" className="px-5 pb-24">
          <div className="mx-auto max-w-6xl rounded-3xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 md:p-12">
            <SectionHead eyebrow="Education & Certifications" title="Academic background"/>
            <h3 className="mt-8 text-2xl font-bold">Punjabi University, Patiala</h3>
            <div className="mt-5 grid gap-3 text-slate-400 md:grid-cols-3">
              <span>Master of Science in Information Technology</span>
              <span>Post Graduate Diploma in Computer Applications</span>
              <span>Bachelor of Arts</span>
            </div>
            <p className="mt-7 text-sm leading-7 text-slate-500">IT-ITeS Sector Skill Council — Level 2 Certification • Introduction to Prompt Engineering — Simplilearn SkillUp • Trust and Security with Google Cloud — Google Cloud</p>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 px-5 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHead eyebrow="Contact" title="Let's build something great." center />
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">I'm looking for opportunities to grow as a frontend developer and contribute to modern web products.</p>
            <a href="mailto:Parampreetdhatt410@gmail.com" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-7 py-4 font-semibold hover:bg-indigo-400"><Icon name="mail" size={18}/> Email Me</a>
            <p className="mt-5 text-sm text-slate-500">Chandigarh, India • 87290-99410</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-7">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Parampreet Singh</span><span>React.js • Tailwind CSS • Vite</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, center = false }) {
  return <div className={center ? "text-center" : ""}><p className="text-sm font-bold uppercase tracking-[.2em] text-indigo-400">{eyebrow}</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h2></div>;
}
function Info({ icon, title, text }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[.03] p-4"><div className="text-indigo-400"><Icon name={icon}/></div><div className="mt-3 font-semibold">{title}</div><div className="mt-1 text-sm text-slate-500">{text}</div></div>;
}

createRoot(document.getElementById("root")).render(<App />);
