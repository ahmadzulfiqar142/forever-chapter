'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, CalendarDays, Clock3, MapPin, Menu, X } from 'lucide-react'

const events = [
  { number: '01', name: 'Nikah', date: '13 Nov 2026', time: 'After Juma', tone: 'mint' },
  { number: '02', name: 'Mehndi', date: '13 Nov 2026', time: 'Night', tone: 'peach' },
  { number: '03', name: 'Barat', date: '14 Nov 2026', time: 'Evening / Night', tone: 'blue' },
  { number: '04', name: 'Walima', date: '15 Nov 2026', time: 'Evening / Night', tone: 'yellow' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = ['Story', 'Schedule', 'Gallery']
  return <>
    <header className="site-header"><a href="#home" className="wordmark">A<span>·</span>A / 26</a><nav>{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />} <span>{open ? 'Close' : 'Menu'}</span></button></header>
    {open && <div className="mobile-menu"><p>AHMAD + ALISHBA / 2026</p>{links.map((link, i) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}><small>0{i + 1}</small>{link}<ArrowUpRight /></a>)}<span className="mobile-note">A weekend made for gathering.</span></div>}
  </>
}

function Hero() {
  return <section id="home" className="hero"><div className="hero-glow" /><div className="hero-content"><p className="eyebrow">A wedding invitation / Karachi</p><h1>Ahmad <span>&</span><br />Alishba</h1><div className="hero-bottom"><p>Two people. Two families.<br />One new beginning.</p><a href="#schedule">See the weekend <ArrowDownRight /></a></div></div><div className="hero-image-wrap"><img src="/images/wedding-portrait.png" alt="Ahmad and Alishba" /><div className="hero-date"><b>13—15</b><span>NOVEMBER<br />2026</span></div></div><div className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight /></div></section>
}

function Story() { return <section id="story" className="story section"><div className="section-label"><span>01</span><span>Our story</span></div><div className="story-grid"><h2>Here&apos;s to<br /><em>the next chapter.</em></h2><div className="story-copy"><p className="lead">With the blessings of our families and the grace of Allah, we&apos;re making it official.</p><p>We&apos;d love for you to be there as we celebrate the beginning of our forever. Come for the ceremony, stay for the dancing.</p><div className="initials">A <i>+</i> A</div></div></div></section> }

function Schedule() { return <section id="schedule" className="schedule section"><div className="section-label"><span>02</span><span>The weekend</span></div><div className="schedule-head"><h2>Save<br /><em>the dates.</em></h2><p>Four celebrations.<br />One unforgettable weekend.</p></div><div className="event-list">{events.map((event) => <article className={`event ${event.tone}`} key={event.name}><div className="event-number">{event.number}</div><div className="event-main"><span>{event.name}</span><h3>{event.date}</h3><p><Clock3 /> {event.time}</p></div><CalendarDays className="event-icon" /></article>)}</div><div className="venue-note"><MapPin /> Venue details coming soon <ArrowUpRight /></div></section> }

function Countdown() { const [parts, setParts] = useState([0, 0, 0]); useEffect(() => { const target = new Date('2026-11-13T14:00:00+05:00').getTime(); const tick = () => { const d = Math.max(0, target - Date.now()); setParts([Math.floor(d / 86400000), Math.floor(d / 3600000) % 24, Math.floor(d / 60000) % 60]) }; tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, []); return <section className="countdown"><p className="eyebrow">Until we say I do</p><div className="count-row">{parts.map((value, i) => <div key={i}><strong>{String(value).padStart(2, '0')}</strong><span>{['Days', 'Hours', 'Minutes'][i]}</span></div>)}</div></section> }

function Gallery() { return <section id="gallery" className="gallery section"><div className="section-label"><span>03</span><span>Little moments</span></div><div className="gallery-head"><h2>Life in<br /><em>full colour.</em></h2><p>Some things are better<br />felt than explained.</p></div><div className="gallery-grid"><img className="gallery-large" src="/images/mehndi-detail.png" alt="Bridal mehndi detail" /><img src="/images/floral-still-life.png" alt="Wedding flowers" /><div className="gallery-card">made<br /><em>with love</em></div></div></section> }

export default function Home() { return <main><Header /><Hero /><Story /><Schedule /><Countdown /><Gallery /><section className="closing"><p className="eyebrow">We cannot wait</p><h2>See you<br /><em>there.</em></h2><p>With love, Ahmad & Alishba</p></section><footer><span>A·A / 26</span><span>13—15 November 2026</span><a href="#home">Back to top ↑</a></footer></main> }

// v0 Design System Showcase Page
// This page intentionally uses a single, focused editorial system for the wedding invitation.
