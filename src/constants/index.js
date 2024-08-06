import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Back-end Developer",
    icon: backend,
  },
  {
    title: "CMS(Wordpress/Wix) Developer",
    icon: mobile,
  },
  {
    title: "Andriod Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Flight Immigration Company",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Implementing designs from mockups or wireframes",
      "Ensuring web pages are accessible and meet web standards",
      "Creating responsive layouts that work across various devices",
      "Debugging and fixing front-end issues",
      "Addressed complex issues with real-time mentorship using Websocket connectivity"
    ],
  },
   
  {
    title: "Nodejs Backend developer",
    company_name: "TriMap",
    icon: javascript,
    iconBg: "#383E56",
    date: "Feb 2024 - april 2024",
    points: [
      "Developing APIs for front-end and mobile app consumption.",
      "Ensuring security best practices are followed in back-end code.",
      "Writing and maintaining server-side code in languages like Node.js, ExpressJS or PHP.",
      "Integrating databases (e.g., MySQL, PostgreSQL, MongoDB) with web applications"
    ],
  },
  {
    title: "Software Development",
    company_name: "Continuous Learning and Development",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Experimenting with new tools, frameworks, and libraries.",
      "Building personal or side projects to practice and showcase skills.",
      "Keeping up with industry news, blogs, and documentation.",
       "Attending workshops, webinars, and training sessions."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our brand, but Isreal show the possibilities Good Job.",
    name: "Shuib Oshiomah",
    designation: "CFO",
    company: "Flight Immigration Company"
  },
  {
    testimonial:
      "I've never met a web developer who pays attention to details as he does, keep it up",
    name: "Johnas khosa",
    designation: "COO",
    company: "DEF Corp"
  },
  {
    testimonial:
      "After He optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CEO",
    company: "Philadephia Plc international"
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
