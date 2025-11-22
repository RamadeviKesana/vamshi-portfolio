import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Civil Engineer Portfolio',
  description:
    'A showcase of my civil engineering work, projects, and technical skills in structural design, construction management, and planning.',

  author: 'Vamshi Kothuru',
  authorHeadline: 'Civil Engineer | Construction & Structural Enthusiast',

  authorAbout:
    "Hi, I'm Vamshi — a civil engineer with hands-on experience in residential and commercial construction. I’m dedicated to designing safe, efficient structures and transforming engineering concepts into reliable, real-world solutions through strong technical expertise and disciplined project execution.",

  authorAboutExtended:
    "Vamshi is based in Dayton, Ohio, and holds a strong interest in infrastructure development. With experience in residential construction, structural analysis, and project planning, he focuses on delivering work that balances safety, efficiency, and sustainability.\n\nOutside of engineering, he enjoys exploring architectural designs, learning new software tools like AutoCAD and Revit, and discovering new places.",

  socials: {
    twitter: '',
    github: 'https://github.com/vamshi',
    linkedin: 'https://www.linkedin.com/in/vamshikothuru',
    instagram: '',
    facebook: '',
  },

  email: 'vamshikothuru84@gmail.com',
  phoneNumber: '(937) 344-0327',

  contactTitle: 'Get in Touch',
  contactSubtitle:
    "Feel free to reach out for engineering projects, collaborations, or general inquiries. I'm always open to connecting with professionals and clients.",

  analytics: {
    plausibleDataDomain: '',
    googleAnalyticsId: 'G-XXXXXXX',
  },

  siteNavLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ],

  offerings: [
    {
      title: "Structural Design",
      description: "Providing safe and efficient structural plans for residential and commercial projects.",
    },
    {
      title: "Site Planning",
      description: "Creating accurate, detailed layouts for construction projects using industry-standard tools.",
    },
    {
      title: "Project Coordination",
      description:
        "Assisting teams by managing timelines, logistics, and documentation for construction activities.",
    }
  ],

  siteRepo: 'https://github.com/vamshi',

  featureSection: {
    title: "What I Bring as a Civil Engineer",
    description:
      "From managing large-scale residential projects to performing geotechnical analysis, I combine field experience with strong technical skills to deliver safe, efficient, and well-planned engineering solutions.",
    features: [
      {
        name: "Construction Management",
        description:
          "Experience managing subcontractors, workforce allocation, procurement, and daily site operations.",
        icon: RiShoppingBagLine,
      },
      {
        name: "Structural & Geotechnical Analysis",
        description:
          "Skilled in STAAD Pro, Plaxis, GeoStudio, and foundation design for stability and safety.",
        icon: GiBanana,
      },
      {
        name: "Planning & Scheduling",
        description:
          "Expertise in Primavera P6, Navisworks Manage, and BIM workflows for clash detection and project optimization.",
        icon: IoFastFoodOutline,
      },
      {
        name: "Transportation & Site Development",
        description:
          "Understanding of roadway design, land development, drainage, and surveying processes.",
        icon: RiCarLine,
      },
    ],
  },

  experience: {
    title: 'Professional Experience & Education',
    intro:
      "My background includes structural design, residential construction, and project planning. I've worked with industry-standard tools like AutoCAD, Revit, STAAD Pro, and MS Project to deliver quality engineering solutions.",

    education: [
      {
        schoolName: 'University of Dayton',
        degree: 'Master of Science in Civil Engineering',
        description:
          'Focused on construction engineering and structural systems, with hands-on experience in design, materials, and modern engineering technologies.',
        startDate: '2023',
        endDate: '2025',
      },
      {
        schoolName: 'JNTU Hyderabad',
        degree: 'Bachelor of Civil Engineering',
        description:
          'Studied core engineering subjects including structural analysis, geotechnical engineering, transportation systems, and environmental engineering.',
        startDate: '2015',
        endDate: '2020',
      },
    ],
  },
}

export default siteMetadata
