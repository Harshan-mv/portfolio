const authProject = {
  title: "Auth System – Google & Normal Login",

  description:
    "A reusable authentication system with Google OAuth, email/password login, and secure cookie-based authentication.",

  longDescription: `
This project is a complete authentication system built using React, Node.js, Express, 
and MongoDB. It supports both normal login (email/password) and Google OAuth.

The backend uses secure HTTP-only cookies to store refresh tokens, while access tokens 
are kept in memory and automatically refreshed using Axios interceptors.

The UI is built with React + Material UI, featuring reusable components, 
context-based global state management, protected routes, and full role-based access.

This system was designed to be reused across multiple future MERN applications, 
allowing fast integration of authentication without rewriting logic.
  `,

  whyBuilt: `
I built this project to create a reusable, production-ready authentication template 
that works for any MERN-stack project.

It helped me strengthen the following skills:
• Google OAuth 2.0 integration  
• Cookie-based authentication using HTTP-only cookies  
• Role-based authorization  
• React Context + useReducer for global auth state  
• Token refresh flows with Axios interceptors  
• Protecting frontend routes  
• Designing reusable authentication modules  
  `,

  problemSolved: `
Most MERN projects require a reliable and secure authentication system.
However, building one from scratch repeatedly wastes time and introduces bugs.

This project solves:
✔ Rewriting login/register every time  
✔ Handling Google OAuth manually  
✔ Managing secure cookies  
✔ Implementing token refresh safely  
✔ Protecting routes from unauthorized access  
✔ Providing a reusable boilerplate for future apps  
  `,

  features: [
    "Normal Login & Register (Email + Password)",
    "Google OAuth Login (Google Identity Services)",
    "HTTP-only Cookie-based Authentication",
    "Access + Refresh Token Architecture",
    "Role-Based Authorization (Admin/User)",
    "React Context + useReducer Authentication State",
    "Axios Interceptors for Automatic Token Refresh",
    "Protected Routes (React Router v6)",
    "Reusable Authentication Components",
    "User Preferences stored in cookies (theme, language, fav number)"
  ],

  challenges: [
    "Implementing secure cookie-based JWT authentication",
    "Maintaining access token in memory while using refresh tokens in cookies",
    "Making Axios auto-refresh tokens without loops",
    "Integrating Google OAuth 2.0 with backend JWT",
    "Handling user roles and conditional UI rendering",
    "Ensuring smooth logout + token invalidation"
  ],

  techStack: [
    // Frontend
    "React",
    "Material UI",
    "Axios",
    "React Router v6",
    "Google Identity Services",
    "React Context + useReducer",

    // Backend
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Cookie-parser",
    "CORS"
  ],

  github: "https://github.com/Harshan-mv", // Replace with actual repo if separate
  live: "", // Add if hosted somewhere (Render/Netlify/etc.)
};

export default authProject;
