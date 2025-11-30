import apiTestFramework from "./data/projects/apiTestFramework.js";
import webRTCApp from "./data/projects/webrtc.js";
import farmFresh from "./data/projects/farmfresh.js";
import todoApp from "./data/projects/todoApp.js";
import authProject from "./data/projects/authProject.js";
import ecovision from "./data/projects/ecovision";

// Load detailed projects

export const DETAILED_PROJECTS = [
  apiTestFramework, webRTCApp,  farmFresh,  todoApp,  authProject, ecovision,   
  // Add more like:
  // ecovision,
  // ticketNest,
];

export const PERSONAL_DETAILS = {
  name: 'Harshan MV',
  location: 'Kochi / Kannur, Kerala, India',
  phone: '9061854723',
  emails: ['harshanmv007@gmail.com'],
  linkedin: 'https://www.linkedin.com/in/harshan-mv-haru07',
  github: 'https://github.com/Harshan-mv',
  aboutHeadline: 'Full-Stack Developer | Research Enthusiast | MERN Stack',
  aboutText: 'I build full-stack web solutions using React, Node.js, and modern tools with a focus on best practices and performance.'
};

// add ur projects to display in brief on the homepage
export const PROJECTS = [
  {
    title: "API Test Automation Framework",
    description: "Production-grade API testing framework with Jest, SuperTest, MongoDB, Nock & CI/CD",
    tech: ["Node.js", "API", "Automation"],
    image: "https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496519/apitesting_fachkj.png"
  },
  {
  title: "WebRTC Video Chat App",
  description: "Real-time video/audio calling using WebRTC, React, Socket.IO and Google OAuth.",
  tech: ["React", "WebRTC", "Socket.IO", "Google OAuth"],
  image:"https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496518/webrtc_vth3cq.png"
},
{
  title: "FarmFresh E-Commerce (Razorpay + CDN)",
  description: "MERN grocery e-commerce with Razorpay checkout & CDN images",
  tech: ["MERN", "Razorpay", "CDN"],
  image:"https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496521/farmfresh_zj6ssi.jpg"
},
{
  title: "Todo App - Spring Boot Application",
  description: "Task management app using Spring Boot, Thymeleaf, Docker & Render deployment.",
  tech: ["Spring Boot", "Docker", "Thymeleaf"],
  image:"https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496518/todolist_tzshla.jpg"
},
{
  title: "Auth System – Google & Normal Login",
  description: "Google OAuth + Email Login with cookie-based authentication and reusable components.",
  tech: ["React", "Node.js", "Google OAuth", "JWT"],
  image:"https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496519/authProject_jshhss.jpg"
},
{
  title: "Ecovision – Sustainability Platform",
  description: "Green Score, Food Redistribution, OCR-based bill scanning, Blogs & Google Maps",
  tech: ["React", "OCR", "Google OAuth", "MongoDB"],
  image:"https://res.cloudinary.com/dxq7c4jok/image/upload/v1764496519/ecovision_s9r9gz.jpg"  
}
];

export const SKILLS = [
  {
    category: "Frontend Development",
    skills: [
      "HTML5", "CSS3",  "React.js","JavaScript (ES6+)","Axios",
      "Tailwind CSS", "Material UI", "Bootstrap", "SCSS", 
       "WebRTC", "Socket.IO", "Google OAuth", "Google Maps API"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Node.js", "Express.js", "JWT Auth", "Session Auth", "MongoDB",
      "Mongoose", "Multer", "Razorpay Integration", "Cloudinary/Firebase CDN"
    ]
  },
  {
    category: "Java & Spring",
    skills: [
      "Java 17", "Spring Boot", "Spring MVC", "Spring Data JPA",
      "Thymeleaf", "H2 Database", "Maven", "Docker Deployment"
    ]
  },
  {
    category: "Testing & Automation",
    skills: [
      "Jest", "SuperTest", "Nock", "Allure Reports",
      "CI/CD Testing", "GitHub Actions", "API Automation"
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git", "GitHub", "Docker", "Render Deployment", "Postman",
      "Firebase Storage", "Environment Variables", "Linux Basics"
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      "Teamwork", "Communication", "Problem Solving",
      "Leadership", "Time Management"
    ]
  }
];


export const EDUCATION = [
  { degree: 'MCA', institution: 'Chandigarh University', year: '2023–2025' },
  { degree: 'BCA', institution: 'Depaul Arts and Science College', year: '2020–2023' },
];

export const CERTIFICATIONS = [
  { name: 'Python & Excel Data Visualisation', issuer: 'Coursera' },
  { name: ' JavaScript', issuer: 'Infosys Springboard ' },
];

export const PUBLICATIONS = [
  {
    title: 'A Review Paper of Threats and an AI-Powered Malware Detection Model — INCSST 2025',
    link: 'https://ieeexplore.ieee.org/document/11210260'
  }
];
