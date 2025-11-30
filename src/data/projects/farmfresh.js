const farmFresh = {
  title: "FarmFresh E-Commerce (Razorpay + CDN)",
  description:
    "Full MERN grocery platform with Razorpay payments, image CDN, authentication, cart, orders, and admin workflow.",

  longDescription: `
FarmFresh is a fully functional MERN e-commerce platform built for selling fresh farm products.
It includes dynamic product management, secure Razorpay payments, cart and checkout pages,
and image optimization via CDN for fast delivery.

The platform is deployed with a custom domain (www.farmfresh.click) and Render hosting,
configured with DNS records to ensure stable and global accessibility.

The system includes:
• User authentication  
• Product categories  
• Razorpay payment workflow  
• Order creation + order success tracking  
• Admin features for managing products  
• CDN-based image optimization for smooth performance  
`,

  whyBuilt: `
I built this project to understand real-world e-commerce architecture using the MERN stack,
and integrate an end-to-end Razorpay payment flow just like production systems.

It also helped me learn:
• How to optimize media with CDN  
• Deployment with Render + custom DNS domain  
• Secure checkout flow  
• State management and frontend routing  
`,

  problemSolved: `
Small businesses often lack a modern online platform with digital payments.  
FarmFresh solves this by offering:

✔ Fast product browsing  
✔ Secure Razorpay payments  
✔ Lightweight, mobile-first UI  
✔ CDN-powered images for faster loads  
✔ Admin dashboard to manage product listings  
`,

  features: [
    "User authentication (JWT-based)",
    "Add to Cart + Quantity updates",
    "Full checkout flow with Razorpay",
    "Order creation & order success screen",
    "Product listing with image CDN",
    "Admin product management",
    "Responsive UI for mobile & desktop",
    "Persistent cart using localStorage",
    "Live deployment with custom domain"
  ],

  challenges: [
    "Managing Razorpay signature verification",
    "Avoiding payment duplication issues",
    "Ensuring image optimization with CDN",
    "Handling asynchronous cart updates",
    "Securing API endpoints for admin access",
    "Setting up Render DNS + custom domain correctly"
  ],

  techStack: [
    // Frontend
    "React 19",
    "React Router DOM v7",
    "Axios",
    "Date-fns",
    "React Scripts",
    "CSS Modules / Basic CSS",

    // Backend capabilities (even if repo separate)
    "Node.js",
    "Express",
    "MongoDB / Mongoose",

    // Integrations
    "Razorpay",
    "Cloud Image CDN",
    "JWT Authentication",

    // Deployment
    "Render Hosting",
    "Custom Domain (farmfresh.click)",
    "DNS Configuration (A records, CNAME, HTTPS)"
  ],

  github: "https://github.com/Harshan-mv/RZbooks-front",
  live: "https://www.farmfresh.click"
};

export default farmFresh;
