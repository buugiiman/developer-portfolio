'use client'

import { ArrowUpRight, AtSign, Code2, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { projects, type Project } from '@/data/projects'

const skills = {
  Backend: ['Java', 'Spring Boot', 'Python', 'REST APIs', 'TypeScript', 'Node.js'],
  Databases: ['PostgreSQL', 'SQL', 'Data modeling', 'Query design'],
  'AI & Search': ['Semantic search', 'Embeddings', 'NLP', 'Retrieval systems'],
  Tools: ['Git', 'Docker', 'Next.js', 'Linux', 'Vercel'],
}

function ProjectVisual({ project }: { project: Project }) {
  const projectNumber = String(projects.indexOf(project) + 1).padStart(2, '0')

  return (
    <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
      {project.visual === 'map' && (
        <>
          <div className="map-contour map-contour-one" />
          <div className="map-contour map-contour-two" />
          <div className="map-route" />
          <div className="map-pin map-pin-one" />
          <div className="map-pin map-pin-two" />
          <div className="map-search">semantic query <span>⌕</span></div>
        </>
      )}
      {project.visual === 'literary' && (
        <>
          <div className="literary-page"><span>“</span><i /><i /><i /><i /><b>emotion</b></div>
          <div className="literary-vector literary-vector-one" />
          <div className="literary-vector literary-vector-two" />
          <div className="literary-dot literary-dot-one" /><div className="literary-dot literary-dot-two" /><div className="literary-dot literary-dot-three" />
        </>
      )}
      {project.visual === 'api' && (
        <>
          <div className="api-node api-node-client">CLIENT</div>
          <div className="api-node api-node-server">API</div>
          <div className="api-node api-node-db">DB</div>
          <div className="api-line api-line-one" /><div className="api-line api-line-two" />
          <div className="api-pulse" />
        </>
      )}
      <span className="visual-index">{projectNumber}</span>
    </div>
  )
}

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a href="#top" className="wordmark" aria-label="Back to top"><span>AJ</span><b>Alex Jordan</b></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="nav-github"><Code2 /> GitHub</a>
        <a href="#contact" className="resume-link" onClick={() => setOpen(false)}>Resume <ArrowUpRight /></a>
      </nav>
    </header>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-meta"><span>{project.category ?? 'Featured project'}</span><span>0{projects.indexOf(project) + 1}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.highlights && <ul className="highlight-list">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
        {(project.githubUrl || project.liveDemoUrl) && (
          <div className="project-links">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>}
            {project.liveDemoUrl && <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">Live demo <ArrowUpRight /></a>}
          </div>
        )}
      </div>
    </article>
  )
}

export function PortfolioPage() {
  return (
    <div id="top" className="portfolio-shell">
      <Navigation />
      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="status-dot" /> Open to software engineering opportunities</p>
            <h1 id="hero-title">Building useful<br /><em>systems</em> with care.</h1>
            <p className="hero-intro">I&apos;m Alex Jordan, a software engineer focused on backend development, thoughtful APIs, databases, and practical AI integration.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight /></a><a className="button button-secondary" href="https://github.com" target="_blank" rel="noreferrer">GitHub <Code2 /></a></div>
          </div>
          <div className="hero-aside"><span className="hero-mark">&gt;_</span><p>Software engineer<br />backend + applied AI</p><span className="scroll-cue">Scroll to explore <span>↓</span></span></div>
        </section>

        <section id="projects" className="content-section projects-section" aria-labelledby="projects-title">
          <SectionHeading number="01" eyebrow="Selected work" title="Featured projects" />
          <div className="projects-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </section>

        <section id="skills" className="content-section skills-section" aria-labelledby="skills-title">
          <SectionHeading number="02" eyebrow="The toolkit" title="Technical skills" />
          <div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div>{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section id="about" className="content-section about-section" aria-labelledby="about-title">
          <SectionHeading number="03" eyebrow="A little context" title="About me" />
          <div className="about-layout"><div className="about-copy"><p>I&apos;m interested in the parts of software that make products dependable: clear interfaces, resilient backend systems, useful data models, and the thoughtful application of AI.</p><p>I enjoy learning by building. This portfolio is a living record of experiments and projects across backend engineering, search, and developer tooling.</p></div><div className="terminal-card"><div className="terminal-bar"><span /> <span /> <span /><small>about.txt</small></div><pre>{`$ whoami\nsoftware engineer\n\nfocus:\n  → backend systems\n  → APIs & databases\n  → applied AI\n\nstatus: always learning_`}</pre></div></div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title"><div><p className="eyebrow">04 / Start a conversation</p><h2 id="contact-title">Have a problem worth<br /><em>solving?</em></h2></div><a className="contact-email" href="mailto:hello@example.com">hello@example.com <ArrowUpRight /></a><div className="contact-links"><a href="https://github.com" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><AtSign /> LinkedIn</a><a href="mailto:hello@example.com"><Mail /> Email</a></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} Alex Jordan</span><span>Designed & built with intention</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
