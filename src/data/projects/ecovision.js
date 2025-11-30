const ecovision = {
  title: "Ecovision – Sustainability Platform",
  shortTitle: "Ecovision",
  description: "A sustainability platform for Green Score tracking, Food Redistribution, OCR-based bill scanning, and Eco-Blogs.",
  
  longDescription: `
Ecovision is a full-stack sustainability platform built to promote eco-friendly living through
Green Score tracking, Food Redistribution, and awareness-driven blogs.  
It includes OCR-based bill scanning, Google Maps integration, Google OAuth login, volunteer workflows,
and a complete admin verification dashboard.

This project empowers users to make eco-friendly choices, donate surplus food,
and spread awareness—while admins and volunteers manage verification, pickups, and blog approval workflows.
  `,

  whyBuilt: `
I built Ecovision to address a real-world sustainability problem—food waste and lack of awareness.
The platform encourages users to adopt greener habits, redistribute leftover food, and publish impactful blogs.
It allowed me to implement OCR, Google Maps APIs, multi-role authentication, and a production-grade MERN architecture.
  `,

  problemSolved: `
✔ Reduces food waste by connecting donors and volunteers  
✔ Encourages green lifestyle by awarding monthly Green Scores  
✔ Provides a platform for eco-awareness blogs  
✔ Simplifies food pickup with location tracking and Google Maps  
✔ Admin verification ensures secure and reliable contributions  
  `,

  features: [
    "OCR-based bill scanning for automatic Green Score calculation",
    "Google OAuth login + JWT-based secure login",
    "Food donation module with live pickup tracking",
    "Volunteer dashboard with Google Maps integration",
    "Blog editor: create, update, delete blogs with images",
    "Role-based access control (User, Volunteer, Admin)",
    "Admin dashboard for verifying donations and Green Scores",
    "Monthly leaderboard for green badges",
    "Cloud media storage (CDN)",
    "Responsive UI built with Material UI & Bootstrap"
  ],

  challenges: [
    "Implementing accurate OCR extraction from bill images",
    "Role-based routing & permission control",
    "Google Maps location handling",
    "Synchronizing donor–volunteer pickup status",
    "Managing blog images through CDN storage",
    "Securing JWT + HTTP-only cookie authentication"
  ],

  techStack: [
    // Frontend
    "React",
    "React Router",
    "Material UI",
    "Bootstrap",
    "MDB React UI Kit",
    "Axios",
    "React Context API",
    "Google Maps API",
    "Google OAuth",
    "Firebase (CDN Storage)",

    // Backend
    "Node.js",
    "Express",
    "MongoDB Atlas",
    "Mongoose",
    "multer (image uploads)",
    "bcrypt.js",
    "jsonwebtoken",
    "express-session",

    // OCR / Media
    "OCR API / Tesseract",
    "Cloud CDN",

    // Other
    "Render Deployment",
    "GitHub Version Control"
  ],

  github: "https://github.com/Harshan-mv/VOYAGE-VIBE",
  live: "https://eco-front1.onrender.com"
};

export default ecovision;
