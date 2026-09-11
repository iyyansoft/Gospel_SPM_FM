import logoPrayer from '../assets/logo_prayer.png'
import logoMusic from '../assets/logo_music.png'
import logoPraise from '../assets/logo_praise.png'

// Home Page FM Channels (Prayer FM, Music FM, Praise FM)
export const channels = [
  {
    id: 'prayer-fm',
    name: 'Prayer FM',
    tagline: '24/7 Prayer & Intercession',
    description: 'Tune in to Prayer FM for uplifting prayers, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'pray',
    logo: logoPrayer,
    image: '/main_bg_exact_v2.jpg',
    accent: '#f5b942', // Gold
    accentSoft: 'rgba(245, 185, 66, 0.14)',
    frequency: '90.5 FM',
    link: 'https://centova71.instainternet.com/proxy/spmgospelfm?mp=/stream',
  },
  {
    id: 'music-fm',
    name: 'Music FM',
    tagline: '24/7 Music & Gospel',
    description: 'Tune in to Music FM for uplifting music, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'music',
    logo: logoMusic,
    image: '/bible_lantern.jpg',
    accent: '#a855f7', // Purple
    accentSoft: 'rgba(168, 85, 247, 0.14)',
    frequency: '92.7 FM',
    link: 'https://centova71.instainternet.com/proxy/spmgospelmusic?mp=/stream',
  },
  {
    id: 'praise-fm',
    name: 'Praise FM',
    tagline: '24/7 Praise & Worship',
    description: 'Tune in to Praise FM for uplifting praise, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'cross',
    logo: logoPraise,
    image: '/main_bg_heavenly.jpg',
    accent: '#3b82f6', // Blue
    accentSoft: 'rgba(59, 130, 246, 0.14)',
    frequency: '93.5 FM',
    link: 'https://centova71.instainternet.com/proxy/gospelpraisefm?mp=/stream',
  },
]

// Channels Page Channels (Gospellive, BIBLE, Gospeltv)
export const channelsPageList = [
  {
    id: 'gospellive',
    name: 'Gospellive',
    tagline: '24/7 Live Stream',
    description: 'Tune in to Gospellive for uplifting prayers, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'pray',
    logo: logoPrayer,
    image: '/main_bg_exact_v2.jpg',
    accent: '#f5b942', // Gold
    accentSoft: 'rgba(245, 185, 66, 0.14)',
    frequency: '90.5 FM',
    link: 'http://gospeltamiltv.livebox.co.in/livebox/player/?url=http://gospeltamiltv.livebox.co.in/gospellivehls/gospellive.m3u8',
  },
  {
    id: 'bible',
    name: 'BIBLE',
    tagline: '24/7 Scripture & Gospel',
    description: 'Tune in to BIBLE for uplifting music, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'music',
    logo: logoMusic,
    image: '/bible_lantern.jpg',
    accent: '#a855f7', // Purple
    accentSoft: 'rgba(168, 85, 247, 0.14)',
    frequency: '92.7 FM',
    link: 'https://gospeltamiltv.livebox.co.in/livebox/player/?url=https://gospeltamiltv.livebox.co.in/BIBLEhls/live.m3u8',
  },
  {
    id: 'gospeltv',
    name: 'Gospeltv',
    tagline: '24/7 Gospel Television',
    description: 'Tune in to Gospeltv for uplifting praise, powerful messages, and inspirational worship. Strengthen your faith and grow closer to God every day.',
    icon: 'cross',
    logo: logoPraise,
    image: '/main_bg_heavenly.jpg',
    accent: '#3b82f6', // Blue
    accentSoft: 'rgba(59, 130, 246, 0.14)',
    frequency: '93.5 FM',
    link: 'https://gospeltamiltv.livebox.co.in/livebox/player/?url=https://gospeltamiltv.livebox.co.in/gospeltvhls/gospeltv.m3u8',
  },
]

export const tvChannels = [
  { id: 'comforter-tv', name: 'Comforter TV', color: '#60A5FA' },
  { id: 'joy-tv', name: 'Joy TV', color: '#F5B942' },
  { id: 'elim-tv', name: 'Elim TV', color: '#2DD4BF' },
]

export const socialLinks = [
  { id: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/spmgospelfm' },
  { id: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@spmgospelfm7223' },
  { id: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/gospeltvebi/' },
  { id: 'twitter', label: 'Twitter / X', url: 'https://x.com/gospel5365' },
  { id: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/919840857022' },
]

export const verseOfTheDay = {
  text: '“The Lord is my light and my salvation; whom shall I fear?”',
  reference: 'Psalm 27:1 (KJV)',
}
