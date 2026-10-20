'use client'

import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const APP_STORE_URL = 'https://apps.apple.com/'

const screenshots = [
  { src: '/images/projects/monlok/home.png', title: 'Local discovery, made simple', description: 'Explore local businesses and find places that match your needs.', alt: 'Monlok home screen showing local business discovery' },
  { src: '/images/projects/monlok/semantic-search.png', title: 'Search by intent, not just by name', description: 'Find relevant places using natural-language queries. A search for “date night” can surface relevant restaurants and bars even when their names do not contain those words.', alt: 'Monlok semantic search for a date night' },
  { src: '/images/projects/monlok/business-details.png', title: 'Essential information in one place', description: 'View business photos, addresses, contact information, opening hours, and other available details in one profile.', alt: 'Monlok business details screen' },
  { src: '/images/projects/monlok/business-about-reviews.png', title: 'More context before you visit', description: 'AI-generated business descriptions provide a concise introduction to a place, while customer reviews offer additional context.', alt: 'Monlok business description and reviews' },
  { src: '/images/projects/monlok/map.png', title: 'Discover places around you', description: 'Explore businesses on a map and narrow down the results with category filters, such as cafes.', alt: 'Monlok map discovery screen' },
  { src: '/images/projects/monlok/map-cafe-filter.png', title: 'Discover places around you', description: 'Explore businesses on a map and narrow down the results with category filters, such as cafes.', alt: 'Monlok map filtered to cafes' },
  { src: '/images/projects/monlok/beauty-filter.png', title: 'Find businesses that match your needs', description: 'Browse businesses by category and discover services beyond restaurants, including beauty businesses.', alt: 'Monlok category filtering for beauty businesses' },
  { src: '/images/projects/monlok/app-store.png', title: 'App Store listing', description: '', alt: 'Monlok App Store listing' },
]

function Screenshot({ shot, onOpen }: { shot: typeof screenshots[number]; onOpen: () => void }) {
  return <button className="monlok-shot" data-placeholder={`Add ${shot.src.split('/').pop()} here`} onClick={onOpen} aria-label={`Enlarge ${shot.title}`}><Image src={shot.src} alt={shot.alt} width={900} height={1200} sizes="(max-width: 720px) 100vw, 42vw" onError={(event) => { event.currentTarget.style.opacity = '0' }} /></button>
}

function Lightbox({ index, onClose, onChange }: { index: number; onClose: () => void; onChange: (index: number) => void }) {
  const shot = screenshots[index]
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onChange((index + 1) % screenshots.length)
      if (event.key === 'ArrowLeft') onChange((index - 1 + screenshots.length) % screenshots.length)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [index, onChange, onClose])

  return <div className="monlok-lightbox" role="dialog" aria-modal="true" aria-label="Screenshot viewer" onClick={onClose}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={onClose} aria-label="Close screenshot viewer"><X /></button><Image src={shot.src} alt={shot.alt} width={900} height={1200} priority sizes="90vw" /><div className="lightbox-controls"><button onClick={() => onChange((index - 1 + screenshots.length) % screenshots.length)} aria-label="Previous screenshot"><ChevronLeft /></button><span>{index + 1} / {screenshots.length}</span><button onClick={() => onChange((index + 1) % screenshots.length)} aria-label="Next screenshot"><ChevronRight /></button></div></div></div>
}

export function MonlokCaseStudy() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  return <div className="case-study-shell">
    <header className="case-study-header"><a href="/#projects" className="back-link"><ArrowLeft /> Back to projects</a><span className="case-study-label">01 / Case study</span></header>
    <main>
      <section className="monlok-hero"><div><p className="eyebrow">Project 01 / Product & search</p><h1>Monlok</h1><p className="monlok-lede">A local business discovery application combining structured business data, Google Places integration, and AI-powered semantic search.</p><div className="tag-list">{['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Google Places', 'OpenAI / semantic search'].map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button button-primary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">View on the App Store <ArrowUpRight /></a></div><div className="monlok-hero-image" data-placeholder="Add home.png here"><Image src={screenshots[0].src} alt={screenshots[0].alt} width={900} height={1200} priority sizes="(max-width: 720px) 100vw, 38vw" onError={(event) => { event.currentTarget.style.opacity = '0' }} /></div></section>
      <section className="monlok-showcase" aria-labelledby="showcase-title"><div className="case-section-heading"><p className="eyebrow">Product in practice</p><h2 id="showcase-title">Built for <em>real discovery.</em></h2></div><div className="monlok-feature feature-reverse"><Screenshot shot={screenshots[1]} onOpen={() => setLightboxIndex(1)} /><div><p className="eyebrow">Search experience</p><h3>{screenshots[1].title}</h3><p>{screenshots[1].description}</p></div></div><div className="monlok-feature"><div><p className="eyebrow">Business profiles</p><h3>{screenshots[2].title}</h3><p>{screenshots[2].description}</p></div><Screenshot shot={screenshots[2]} onOpen={() => setLightboxIndex(2)} /></div><div className="monlok-feature feature-reverse"><Screenshot shot={screenshots[3]} onOpen={() => setLightboxIndex(3)} /><div><p className="eyebrow">More context</p><h3>{screenshots[3].title}</h3><p>{screenshots[3].description}</p></div></div><div className="monlok-feature"><div><p className="eyebrow">Map discovery</p><h3>{screenshots[4].title}</h3><p>{screenshots[4].description}</p></div><div className="monlok-shot-pair"><Screenshot shot={screenshots[4]} onOpen={() => setLightboxIndex(4)} /><Screenshot shot={screenshots[5]} onOpen={() => setLightboxIndex(5)} /></div></div><div className="monlok-feature feature-reverse"><Screenshot shot={screenshots[6]} onOpen={() => setLightboxIndex(6)} /><div><p className="eyebrow">Category filters</p><h3>{screenshots[6].title}</h3><p>{screenshots[6].description}</p></div></div></section>
      <section className="under-hood" aria-labelledby="under-hood-title"><div className="case-section-heading"><p className="eyebrow">Engineering notes</p><h2 id="under-hood-title">Under the <em>hood.</em></h2></div><div className="engineering-grid"><article><span>01</span><h3>Supabase and PostgreSQL</h3><p>Monlok uses Supabase as its backend platform and PostgreSQL as its relational database. Structured records hold names, categories, tags, locations, and opening hours so discovery and filtering can remain useful and consistent.</p></article><article><span>02</span><h3>Google Places</h3><p>Google Places data enriches local business listings with additional information and photos, giving each profile more useful context for deciding where to go.</p></article><article><span>03</span><h3>OpenAI-powered semantic search</h3><p>Semantic similarity matches the intent behind a natural-language query with relevant businesses. A search for “date night” can surface restaurants and bars even when those words are not in their names.</p></article><article><span>04</span><h3>Filtering and location</h3><p>Semantic relevance works alongside conventional business, category, and tag filters, with map-based discovery where supported.</p></article></div></section>
      <section className="app-store-section"><div><p className="eyebrow">Published product</p><h2>Available on the <em>App Store.</em></h2><a className="button button-primary" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">View the listing <ArrowUpRight /></a></div><Screenshot shot={screenshots[7]} onOpen={() => setLightboxIndex(7)} /></section>
    </main>
    {lightboxIndex !== null && <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />}
  </div>
}
