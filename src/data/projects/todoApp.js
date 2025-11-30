const todoApp = {
  title: "Todo App - Spring Boot Application",

  description:
    "A clean and responsive Todo management app built with Spring Boot, Thymeleaf, Docker, and Render.",

  longDescription: `
This Todo App is a full-featured task management system built using Spring Boot.
It provides a clean UI using Thymeleaf templates and Bootstrap, allowing users to
manage their tasks efficiently and intuitively.

The backend is powered by Spring Boot 3 with Spring MVC and Spring Data JPA.
An in-memory H2 database is used for fast development and testing. The entire application
is containerized using Docker and deployed on Render with automated builds from GitHub.

This project demonstrates production-ready features like:
• CRUD operations  
• MVC layering  
• Dockerized deployment  
• CI-ready structure  
• Environment-based configuration files  
`,

  whyBuilt: `
I built this project to strengthen my understanding of the Spring Boot ecosystem,
and to learn how to deploy Java-based applications in Docker containers on cloud platforms.

This helped me master:
• Spring MVC architecture  
• Thymeleaf templating  
• Dockerizing Java applications  
• Cloud deployment using Render  
• Writing clean, modular backend code  
`,

  problemSolved: `
Many people struggle with managing daily tasks efficiently.
This project offers a simple, fast, and intuitive interface for task tracking.

It solves:
✔ Overwhelming task lists  
✔ Need for quick updates  
✔ Difficulty tracking completed and pending tasks  
✔ Lack of lightweight Todo apps with clean UI  
`,

  features: [
    "Add new tasks",
    "Edit existing todos",
    "Mark tasks as complete/incomplete",
    "Delete tasks",
    "Responsive, clean UI",
    "Real-time updates",
    "In-memory database for fast performance",
    "Environment-specific configurations",
    "Docker-based container deployment",
    "Automatic deployments via Render"
  ],

  challenges: [
    "Implementing clean MVC architecture",
    "Ensuring fast CRUD operations",
    "Creating reusable Thymeleaf components",
    "Dockerizing the Spring Boot application",
    "Setting up production configs on Render",
    "Managing static assets under Spring Boot"
  ],

  techStack: [
    // Backend
    "Java 17",
    "Spring Boot 3.5.3",
    "Spring Web MVC",
    "Spring Data JPA",
    "H2 Database",
    "Maven",

    // Frontend
    "Thymeleaf",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap 5",

    // DevOps / Deployment
    "Docker",
    "Render Hosting",
    "Git",
    "GitHub",
    "CI/CD Deployment Triggers"
  ],

  github: "https://github.com/Harshan-mv/Todo-java",
  live: "https://todo-java-13wl.onrender.com"
};

export default todoApp;
