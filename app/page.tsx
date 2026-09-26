'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, CalendarDays, Clock3, MapPin, Menu, X } from 'lucide-react'

const events = [
  { type: 'Nikah', date: '13 Nov', time: 'After Juma', venue: 'Venue details coming soon', color: 'cream' },
  { type: 'Mehndi', date: '13 Nov', time: 'Night', venue: 'Venue details coming soon', color: 'coral' },
  { type: 'Barat', date: '14 Nov', time: 'Evening / Night', venue: 'Venue details coming soon', color: 'blue' },
  { type: 'Walima', date: '15 Nov', time: 'Evening / Night', venue: 'Venue details coming soon', color: 'lavender' },
]

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="topbar"><a href="#home" className="logo">A<span>+</span>A</a><nav className="desktop-nav"><a href="#story">Our story</a><a href="#events">Events</a><a href="#gallery">Gallery</a></nav><button className="nav-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button></header>
    {open && <div className="mobile-nav"><a href="#story" onClick={() => setOpen(false)}>Our story <ArrowUpRight /></a><a href="#events" onClick={() => setOpen(false)}>Events <ArrowUpRight /></a><a href="#gallery" onClick={() => setOpen(false)}>Gallery <ArrowUpRight /></a></div>}
  </>
}

function Hero() {
  return <section id="home" className="hero"><div className="hero-copy"><p className="label">A wedding invitation / 2026</p><h1>Ahmad<br /><em>&</em> Alishba</h1><p className="hero-intro">Two families, one beautiful beginning. Join us as we celebrate the start of forever.</p><a className="pill-link" href="#events">Explore the details <ArrowUpRight /></a></div><div className="hero-image"><img src="/images/wedding-portrait.png" alt="Ahmad and Alishba wedding portrait" /><div className="image-tag">Save<br />the date</div><div className="date-stamp">13 — 15<br /><span>November 2026</span></div></div></section>
}

function Story() { return <section id="story" className="story section"><div className="section-index">01 <span>Our story</span></div><div className="story-layout"><h2>A new chapter,<br /><i>together.</i></h2><div><p className="large-copy">With the blessings of our families and the grace of Allah, we begin a beautiful new chapter together.</p><p className="muted-copy">Your presence and prayers would mean the world to us as we gather to celebrate these special moments.</p><div className="signature">A <span>×</span> A</div></div></div></section> }

function Events() { return <section id="events" className="events section"><div className="section-index">02 <span>The celebrations</span></div><div className="events-heading"><h2>Mark your<br /><i>calendar.</i></h2><p>Four moments.<br />One unforgettable weekend.</p></div><div className="event-grid">{events.map((event, index) => <article className={`event-card ${event.color}`} key={event.type}><div className="event-top"><span>0{index + 1}</span><CalendarDays /></div><p className="event-type">{event.type}</p><h3>{event.date}</h3><div className="event-meta"><span><Clock3 /> {event.time}</span><span><MapPin /> {event.venue}</span></div><ArrowUpRight className="card-arrow" /></article>)}</div></section> }

function Countdown() { const target = new Date('2026-11-13T14:00:00+05:00').getTime(); const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0 }); useEffect(() => { const tick = () => { const diff = Math.max(0, target - Date.now()); setTime({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60 }) }; tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, []); return <section className="countdown section"><div><p className="label">The countdown is on</p><h2>See you<br /><i>very soon.</i></h2></div><div className="count-numbers">{Object.entries(time).map(([key, value]) => <div key={key}><strong>{String(value).padStart(2, '0')}</strong><span>{key}</span></div>)}</div></section> }

function Gallery() { return <section id="gallery" className="gallery section"><div className="section-index">03 <span>A little glimpse</span></div><div className="gallery-head"><h2>Life in<br /><i>bloom.</i></h2><p>Some things are better<br />felt than explained.</p></div><div className="gallery-grid"><img className="gallery-main" src="/images/mehndi-detail.png" alt="Detailed bridal mehndi" /><img src="/images/floral-still-life.png" alt="Wedding flowers" /><div className="gallery-message">with love,<br /><i>always.</i></div></div></section> }

function Footer() { return <footer><div className="footer-mark">A<span>+</span>A</div><p>Ahmad Zulfiqar & Alishba Tariq</p><p>13 — 15 November 2026</p><a href="#home">Back to top ↑</a></footer> }

export default function Home() { return <main><Header /><Hero /><Story /><Events /><Countdown /><Gallery /><section className="closing"><p className="label">We cannot wait</p><h2>Celebrate<br /><i>with us.</i></h2><p>With love, Ahmad & Alishba</p></section><Footer /></main> }
