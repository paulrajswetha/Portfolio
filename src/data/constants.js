import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiPostgresql,
  SiGit,
  SiFigma,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiPython,
  SiDjango,
  SiFlask,
  SiMysql,
} from 'react-icons/si'
import { FaAws, FaDatabase } from 'react-icons/fa'
import { DiJava } from 'react-icons/di'
import LogiStackImage from '../images/LogiStack.png'
import NetcureaImage from '../images/Netcurea.png'
import PodcastImage from '../images/Podcast.png'

export const personalInfo = {
  name: "Swetha P",
  title: "MERN Full Stack Developer",
  email: "23csec24swethapaulraj@gmail.com",
  phone: "+91 **********",
  location: "Villapuram, Tamil Nadu, India",
  github: "https://github.com/paulrajswetha",
  linkedin: "https://www.linkedin.com/in/swetha-paulraj/",
  shortBio:
    "Future-ready Software Development Engineer specializing in Full Stack Development, blending intuitive UI design with powerful backend logic to create seamless, scalable web applications that solve real-world problems.",
  profilePhoto: "/profile-photo.jpg",
}

export const education = [
  {
    id: 1,
    institution: "ST. Joseph's Matriculation Higher Secondary School",
    degree: "",
    field: "Computer Science",
    startYear: "2009",
    endYear: "2022",
    description:
      "Learned programming fundamentals, algorithms, and how to write structured, logical code.",
    gpa: "92.6%",
    location: "Old Kuyavar Palayam Road, Madurai.",
  },
  {
    id: 2,
    institution: "Velammal College of Engineering and Technology",
    degree: "BE Computer Science and Engineering",
    field: "Computer Science and Engineering",
    startYear: "2023",
    endYear: "2027",
    description:
      "Designed and implemented scalable MERN-based applications integrated with AI/ML models for intelligent data processing, automation, and real-time analytics.",
    gpa: "GPA: 8.5 / 10",
    location: "Viraganoor, Madurai.",
  },
]

export const skills = {
  frontend: [
    { name: "React.js", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript", icon: SiJavascript },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "Flask", icon: SiFlask },
    { name: "Java", icon: DiJava },
  ],
  databases: [
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "SQL", icon: FaDatabase },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "Postman", icon: SiPostman },
    { name: "Figma", icon: SiFigma },
  ],
}

export const projects = [
  {
    id: 1,
    name: "LogiStack",
    shortDesc: "Coding practice platform for DSA, aptitude, and contests",
    fullDesc:
      "A MERN stack-based coding practice platform developed to strengthen problem-solving and full-stack development skills. Features programming challenges, aptitude modules, contest support, JWT-based authentication, and Monaco Editor integration for an in-browser coding experience.",
    techTags: ["React.js", "Express.js", "MongoDB", "Node.js", "JWT", "Tailwind CSS"],
    github: "https://github.com/paulrajswetha/LogiStack_frontend",
    liveDemo: "https://logistack0.netlify.app/",
    image: LogiStackImage,
  },

  {
    id: 2,
    name: "NetCurea",
    shortDesc: "AI-powered hospital management system",
    fullDesc:
      "A smart hospital management system built using React (Vite) and Flask. The platform supports role-based access control, AI-driven risk prediction, automated appointment scheduling, and efficient patient management workflows.",
    techTags: ["React", "Vite", "Flask", "Python", "Machine Learning", "Tailwind CSS"],
    github: "https://github.com/paulrajswetha/Netcurea_frontend",
    liveDemo: "https://netcurea.netlify.app/",
    image: NetcureaImage,
  },

  {
    id: 3,
    name: "Podcast Platform",
    shortDesc: "Full-stack podcast streaming platform",
    fullDesc:
      "A podcast platform that enables users to discover and stream podcast episodes seamlessly. Built with React.js, Express.js, and Tailwind CSS, featuring secure authentication, responsive design, and smooth audio streaming capabilities.",
    techTags: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/paulrajswetha/my-podcast-frontend",
    liveDemo: "https://my-podacast-frontend.netlify.app/",
    image: PodcastImage,
  },
];

export const certificates = [
  {
    id: 1,
    name: "Fundamentals of SQL",
    organization: "Dataquest",
    issueDate: "Nov 2024",
    link: "https://drive.google.com/file/d/1Q4TU8rtmHE1bMDN46bn-qHf_F7FCICVE/view?usp=drive_link",
  },

  {
    id: 2,
    name: "Getting Started as a Java Developer",
    organization: "LinkedIn Learning",
    issueDate: "Sep 2024",
    link:"https://drive.google.com/file/d/1-TW4mI0m90I-e9OUcXCyOKvF-KRmNDlD/view?usp=drive_link",
  },

  {
    id: 3,
    name: "MERN Full Stack Development",
    organization: "Revamp",
    issueDate: "Dec 2024",
    image: "/certificates/revamp-mern.jpg",
    link: "https://drive.google.com/file/d/11ca9S5lP3xm8gIUwnwjV5H3xEVP-_paD/view?usp=drive_link",
  },

  {
    id: 4,
    name: "Data Structure and Algorithms using Java",
    organization: "NPTEL",
    issueDate: "Oct 2025",
    link:"https://drive.google.com/file/d/1vTv2iTnPTl8UJepqc7ngUbPcmovALTQg/view?usp=drive_link",
  },

  {
    id: 5,
    name: "Machine Learning, Deep Learning & NLP",
    organization: "Training Program",
    issueDate: "2024",
    link:"https://drive.google.com/file/d/1SATwlDszCtHRd9Gzxa_6VUA3A-L_ZBMz/view?usp=drive_link",
  },

  {
    id: 6,
    name: "SQL, Power BI, Tableau & Python",
    organization: "Training Program",
    issueDate: "2024",
    link:"https://drive.google.com/file/d/1MboaUPW0ZaUWS4v31-btu2TbUyLjht5Y/view?usp=drive_link",
  },
];
export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
]