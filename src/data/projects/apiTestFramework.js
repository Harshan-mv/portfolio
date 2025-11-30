const apiTestFramework = {
  title: "API Test Automation Framework", // title should match with PROJECTS title
  shortTitle: "API Test Framework",
  description: "Production-grade automation with Jest, SuperTest, MongoDB, Nock, Allure and CI/CD.",
  tech: ["Node.js", "Jest", "SuperTest", "MongoDB", "CI/CD"],

  longDescription: `
A production-grade API Test Automation Framework built to simulate real enterprise SDET workflows.

Designed for testing a mock E-Commerce backend with Auth, Products, Orders, Payment, DB checks, and CI integration.
`,

  whyBuilt: `
I built this framework to strengthen skills in API Automation, Middleware Testing, CI-driven testing, mocking external services, and Allure reporting.
`,

  problemSolved: `
❌ Most beginner API testing lacks DB validation, mocking, CI, reporting, environment switching.
✔ This framework simulates enterprise-grade E2E testing with DB checks, mocked payment gateway, negative test flows, reporting, CI pipelines, and more.
`,

  features: [
    "Full Auth, Product, and Order API coverage",
    "Mocked Payment Gateway using Nock",
    "MongoDB validation for persistent data",
    "Negative test flows for 400/401",
    "Allure HTML Reporting",
    "GitHub Actions CI pipeline with MongoDB container",
    "Environment switching (local / test / CI)"
  ],

  challenges: [
    "Mocking external payment gateway realistically",
    "Managing DB cleanup between test runs",
    "Handling CI race conditions",
    "Multi-environment test config setup"
  ],

  techStack: [
    "Node.js",
    "Express",
    "MongoDB",
    "Jest",
    "SuperTest",
    "Nock",
    "Allure Reports",
    "GitHub Actions",
    "Mongoose"
  ],

  github: "https://github.com/harshan-mv/API-test-framework",
  live: "https://harshan-mv.github.io/API-test-framework/"
};

export default apiTestFramework;
