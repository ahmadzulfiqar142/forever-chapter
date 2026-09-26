'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, CalendarDays, Clock3, Heart, Menu, MapPin, X } from 'lucide-react'

const weddingEvents = [
  { number: '01', name: 'Nikah', day: 'Friday', date: '13 November 2026', shortDate: '13 NOV', time: 'After Juma', tone: 'ivory' },
  { number: '02', name: 'Mehndi', day: 'Friday', date: '13 November 2026', shortDate: '13 NOV', time: 'Night', tone: 'rose' },
  { number: '03', name: 'Barat', day: 'Saturday', date: '14 November 2026', shortDate: '14 NOV', time: 'Evening / Night', tone: 'wine' },
  { number: '04', name: 'Walima', day: 'Sunday', date: '15 November 2026', shortDate: '15 NOV', time: 'Evening / Night', tone: 'green' },
]

function FloralMark({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`floral-mark ${className}`}><span /><span /><span /><i /></div>
}

function MobileHeader() {
  const [open, setOpen] = useState(false)
  const links = ['Home', 'Our Story', 'Events', 'Venue', 'Gallery']
  return <>
    <header className="site-header">
      <a href="#home" className="wordmark">Ahmad <span>&</span> Alishba</a>
      <button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}<span>{open ? 'Close' : 'Menu'}</span></button>
    </header>
    {open && <div className="mobile-menu"><div className="menu-kicker">THE WEDDING OF</div><nav>{links.map((link, i) => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link}<ArrowUpRight /></a>)}</nav><div className="menu-footer"><FloralMark /> 13 — 15 November 2026</div></div>}
  </>
}

function Hero() {
  return <section id="home" className="hero section-pad"><div className="hero-botanical botanical-left" /><div className="hero-botanical botanical-right" /><div className="hero-content"><p className="eyebrow">A new chapter begins</p><h1><span>Ahmad Zulfiqar</span><em>&</em><span>Alishba Tariq</span></h1><div className="hero-rule"><i /><span>13 — 15 November 2026</span><i /></div><p className="hero-copy">Together with their families, they invite you to celebrate their wedding.</p></div><a href="#our-story" className="scroll-cue">Scroll to explore <ArrowDown /></a></section>
}

function WeddingIntro() {
  return <section id="our-story" className="intro section-pad"><FloralMark /><p className="eyebrow">With joy in our hearts</p><h2>A Beautiful<br /><i>Beginning</i></h2><p className="body-copy">With the blessings of our families and the grace of Allah, we begin a beautiful new chapter together. We would be honored to have you with us as we celebrate these special moments.</p><div className="intro-signature">A <span>♥</span> A</div></section>
}

function EventSection() {
  return <section id="events" className="events section-pad"><div className="section-heading"><p className="eyebrow">Mark the moments</p><h2>The Wedding<br /><i>Celebrations</i></h2></div><div className="event-list">{weddingEvents.map(event => <article className={`event-card ${event.tone}`} key={event.name}><div className="event-number">{event.number}</div><div className="event-info"><p className="event-label">{event.name}</p><h3>{event.day}</h3><p className="event-date">{event.date}</p><div className="event-time"><Clock3 /> {event.time}</div></div><FloralMark /></article>)}</div></section>
}

function WeddingTimeline() {
  return <section className="timeline-wrap section-pad"><p className="eyebrow">The days ahead</p><div className="timeline">{weddingEvents.map((event, index) => <div className="timeline-item" key={event.name}><div className="timeline-date">{event.shortDate}</div><div className="timeline-dot" /><div className="timeline-name">{event.name}</div>{index < weddingEvents.length - 1 && <div className="timeline-line" />}</div>)}</div></section>
}

function Countdown() {
  const target = new Date('2026-11-13T14:00:00+05:00').getTime()
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => { const tick = () => { const diff = Math.max(0, target - Date.now()); setTime({ days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 }) }; tick(); const id = setInterval(tick, 1000); return () => clearInterval(id) }, [])
  return <section className="countdown section-pad"><div className="countdown-top"><p className="eyebrow">Until we say I do</p><h2>Counting Down to<br /><i>Our Celebration</i></h2></div><div className="count-grid">{Object.entries(time).map(([label, value]) => <div key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div></section>
}

function VenueSection() {
  return <section id="venue" className="venue section-pad"><div className="section-heading"><p className="eyebrow">Save your seat</p><h2>Join <i>Us</i></h2></div><div className="venue-list">{weddingEvents.map(event => <article className="venue-item" key={event.name}><div><p className="event-label">{event.name}</p><p className="venue-date">{event.date}</p><p className="venue-time">{event.time}</p></div><div className="venue-place"><MapPin /> <span>Venue details<br />coming soon</span></div><button className="location-button">View Location <ArrowUpRight /></button></article>)}</div></section>
}

function Gallery() {
  return <section id="gallery" className="gallery section-pad"><div className="section-heading"><p className="eyebrow">A few beautiful things</p><h2>Moments to<br /><i>remember</i></h2></div><div className="gallery-grid"><img className="gallery-large" src="/images/wedding-portrait.png" alt="Elegant wedding portrait" /><img src="/images/mehndi-detail.png" alt="Bridal mehndi detail" /><img src="/images/floral-still-life.png" alt="Wedding flowers" /><div className="gallery-note">Our story,<br /><i>in bloom.</i></div></div></section>
}

function DuaSection() {
  return <section className="dua section-pad"><FloralMark /><p className="eyebrow">A prayer for our journey</p><h2>With Love<br /><i>& Prayers</i></h2><blockquote>“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.”</blockquote><span className="surah">— Qur’an 30:21</span></section>
}

function FinalInvitation() {
  return <section className="final-invitation section-pad"><div className="final-botanical" /><p className="eyebrow">Please join us</p><h2>We Can&apos;t Wait to<br /><i>Celebrate With You</i></h2><p className="body-copy">Your presence and prayers will make our celebrations even more special.</p><div className="final-names">Ahmad <span>&</span> Alishba</div><p className="final-date">13 — 15 November 2026</p></section>
}

function Footer() { return <footer><div className="wordmark">Ahmad <span>&</span> Alishba</div><p>13 — 15 November 2026</p><Heart className="footer-heart" /></footer> }

export default function Home() { return <main><MobileHeader /><Hero /><WeddingIntro /><EventSection /><WeddingTimeline /><Countdown /><VenueSection /><Gallery /><DuaSection /><FinalInvitation /><Footer /></main> }
