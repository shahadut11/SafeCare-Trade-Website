// ─────────────────────────────────────────────────────────
// lib/data.js
// SafeCare Trade & Engineering
// ─────────────────────────────────────────────────────────

export const SITE = {
  name: 'SafeCare Trade & Engineering',
  tagline: 'Fire Protection & Engineering Solutions',

  phone: '+8801718414529',
  officePhone: '+8801718414529',

  email: 'safecaretrade@gmail.com',

  address:
    'House-20 (Gr. FL), Road-6, Lane-4, Block-B, Mirpur-6, Dhaka-1216, Bangladesh',

  whatsapp: '8801718414529',

  social: {
    facebook:
      'https://web.facebook.com/profile.php?id=61567911577967',
  },
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Fire Protection & Engineering Solutions',

  lineSmall:
    'Consultancy • Design • Supply • Installation • Testing & Commissioning',

  bgImage:
    'https://images.unsplash.com/photo-1574739782594-db4ead022697?w=1600&q=90',

  stats: [
    {
      value: '7+',
      label: 'Years Experience',
    },
    {
      value: '50+',
      label: 'Projects Completed',
    },
    {
      value: '50+',
      label: 'Happy Clients',
    },
    {
      value: '24/7',
      label: 'Support',
    },
  ],
}

export const TICKER_ITEMS = [
  '🔥 Fire Protection System',
  '🚨 Fire Detection & Alarm System',
  '💧 Fire Hydrant System',
  '🚿 Fire Sprinkler System',
  '🧯 Gas Suppression System',
  '⚙️ Fire Pump System',
  '📋 Fire Safety Plan Approval',
  '🏢 Industrial Design & Drawing',
]

export const ABOUT = {
  image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85',

  body:
    'SafeCare Trade & Engineering is a professional fire safety engineering company in Bangladesh. We provide consultancy, design, supply, installation, testing, commissioning and Fire Service approval support for all types of industrial, commercial and residential projects.',

  features: [
    {
      title: 'Fire Service Approval Support',
      sub: 'Complete documentation and approval assistance.',
    },
    {
      title: 'End-to-End Engineering Solutions',
      sub: 'Design, Supply, Installation & Commissioning.',
    },
    {
      title: 'Professional Consultancy',
      sub: 'Risk assessment and fire safety planning.',
    },
  ],

  skills: [
    {
      label: 'Fire Detection & Alarm',
      pct: 98,
    },
    {
      label: 'Fire Protection Systems',
      pct: 95,
    },
    {
      label: 'Engineering Consultancy',
      pct: 97,
    },
  ],
}

export const STATS = [
  {
    target: 50,
    label: 'Projects Completed',
  },
  {
    target: 40,
    label: 'Happy Clients',
  },
  {
    target: 25,
    label: 'Expert Team',
  },
  {
    target: 7,
    label: 'Years Experience',
  },
]

export const SERVICES = [
  {
    icon: '🔥',
    title: 'Fire Protection System',
    desc: 'Complete fire protection solutions for all building types.',
  },

  {
    icon: '🚨',
    title: 'Fire Detection System',
    desc: 'Advanced fire alarm and detection systems.',
  },

  {
    icon: '💧',
    title: 'Fire Hydrant System',
    desc: 'Hydrant network design and installation.',
  },

  {
    icon: '🚿',
    title: 'Fire Sprinkler System',
    desc: 'Automatic sprinkler system installation.',
  },

  {
    icon: '🧯',
    title: 'Gas Suppression System',
    desc: 'FM-200 and Novec clean-agent systems.',
  },

  {
    icon: '⚙️',
    title: 'Fire Pump System',
    desc: 'Electric, diesel and jockey pump systems.',
  },

  {
    icon: '📋',
    title: 'Fire Safety Plan Approval',
    desc: 'FSCD approval documentation and support.',
  },

  {
    icon: '🏗️',
    title: 'Industrial Design & Drawing',
    desc: 'Professional engineering design and drawing services.',
  },

  {
    icon: '🔍',
    title: 'Engineering Assessment',
    desc: 'Detailed fire safety and risk assessments.',
  },

  {
    icon: '🛠️',
    title: 'Maintenance & Support',
    desc: 'Annual maintenance and emergency support.',
  },
]

export const PRODUCT_CATEGORIES = [
  'all',
  'detection',
  'suppression',
  'safety',
]

export const PRODUCTS = [
  {
    cat: 'suppression',
    label: 'Fire Pump',
    name: 'Fire Pump System',
    desc: 'Electric, diesel and jockey pump setup.',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80',
  },

  {
    cat: 'detection',
    label: 'Detection',
    name: 'Fire Alarm Control Panel',
    desc: 'Addressable and conventional fire alarm panel.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },

  {
    cat: 'detection',
    label: 'Detection',
    name: 'Smoke Detector',
    desc: 'Photoelectric smoke detector.',
    img: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400&q=80',
  },

  {
    cat: 'suppression',
    label: 'Suppression',
    name: 'Sprinkler Head',
    desc: 'Automatic fire sprinkler.',
    img: 'https://images.unsplash.com/photo-1558618047-3d6232f0b5a1?w=400&q=80',
  },

  {
    cat: 'suppression',
    label: 'Suppression',
    name: 'FM-200 System',
    desc: 'Clean agent gas suppression system.',
    img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80',
  },

  {
    cat: 'safety',
    label: 'Safety',
    name: 'Fire Extinguisher',
    desc: 'Portable fire extinguisher.',
    img: 'https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=400&q=80',
  },

  {
    cat: 'safety',
    label: 'Safety',
    name: 'Emergency Exit Light',
    desc: 'Emergency evacuation lighting.',
    img: 'https://images.unsplash.com/photo-1587438920960-af2d3fef7c23?w=400&q=80',
  },

  {
    cat: 'safety',
    label: 'Safety',
    name: 'Fire Rated Door',
    desc: 'Certified fire-resistant door.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
  },
]

export const PROJECTS = [
  {
    featured: true,
    name: 'Industrial Fire Protection Project',
    type: 'Industrial',
    desc: 'Complete fire alarm, hydrant, sprinkler and pump installation.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=85',
  },

  {
    name: 'Garments Factory Fire Safety',
    type: 'Industrial',
    img: 'https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=500&q=80',
  },

  {
    name: 'Commercial Building Protection',
    type: 'Commercial',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=80',
  },

  {
    name: 'Corporate Office Safety',
    type: 'Corporate',
    img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500&q=80',
  },

  {
    name: 'Warehouse Fire System',
    type: 'Industrial',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80',
  },

  {
    name: 'Residential Fire Protection',
    type: 'Residential',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80',
  },
]

export const CLIENTS = [
   

  'W.Apparels Ltd',
  'AKH Group',
  'Quality Apparels',
  'Bengal Group',
  'Ratul Group',
  'K.A Design Wear Ltd',
  'Dekko Group',
  'Mondol Group',
  'Abir Fashion',
  'Ahmed Fashion',
  'Inovative Shoe Makers Ltd',
  'Nipa Group',
  'Square Group',
  'Orion Group',
  'United Group',
  'K-One Ltd',
  'Orchid Apprels Ltd',
  'Montrims Ltd',
  'Spectra Sweaters Ltd',
  'Maati Properties',
  'Eve Dress Shirts Ltd',
  'Textown Group',
  'ISPAHANI',
  'Northern Tosrifa Group',
  'Fakir Garments Ltd',
  'Renaissance Group',
  'Windy Group',
  'Chaity Group',
  'Posmi Sweater Ltd.',
  'Base Fashions Ltd.',
  'Azim & Sons Group',
  'FNF Trend Fashions Ltd.',
  'Sheltech Ceramics Ltd.',
  'Glope Apparels Ltd.',
  'AR Geans Producer Ltd.',

]

export const TESTIMONIALS = [
  {
    initials: 'DG',
    name: 'Project Manager',
    role: 'W Apparels Ltd.',
    stars: 5,
    quote:
      'SafeCare Trade & Engineering delivered our fire protection system professionally and on time.',
  },

  {
    initials: 'SG',
    name: 'Facility Head',
    role: 'AKH Group',
    stars: 5,
    quote:
      'Excellent technical support and quality installation services.',
  },

  {
    initials: 'OG',
    name: 'Operations Manager',
    role: 'Quality Group',
    stars: 5,
    quote:
      'Highly recommended for fire safety and engineering consultancy.',
  },
]

export const FAQS = [
  {
    q: 'Do you provide Fire Service approval support?',
    a: 'Yes, we provide complete Fire Service approval documentation and support.',
  },

  {
    q: 'Which fire protection systems do you install?',
    a: 'Fire Alarm & Detection System, Fire Hydrant System, Fire Sprinkler System, Fire Pump System, Fire Suppression System FM-200 and all related systems.',
  },

  {
    q: 'Do you provide annual maintenance services?',
    a: 'Yes, we provide AMC and emergency maintenance support.',
  },

  {
    q: 'Do you work outside Dhaka?',
    a: 'Yes, we provide services all over Bangladesh.',
  },

  {
    q: 'How can I request a quotation?',
    a: 'Call us directly or send project details via email and WhatsApp.',
  },
]