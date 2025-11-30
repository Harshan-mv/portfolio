const webRTCApp = {
  title: "WebRTC Video Chat App",
  description: "Real-time video/audio calling using WebRTC, React, Socket.IO and Google OAuth.",

  longDescription: `
A real-time video calling application built with WebRTC, React, and Socket.IO.

Supports:
• Audio/video streaming
• Real-time messaging
• Google OAuth login
• Public lobby
• Room PIN protection
• Raise hand, mute, camera toggle
`,

  whyBuilt: `
I built this project to understand peer-to-peer connection handling, 
real-time signaling with WebRTC, and authentication with Google OAuth.
`,

  problemSolved: `
Most chat apps store all communication on servers.
WebRTC solves this by enabling P2P encrypted communication with minimal latency.
`,

  techStack: [
    "React 19",
    "WebRTC",
    "Socket.IO Client",
    "Simple-Peer",
    "Google OAuth",
    "Axios",
    "SCSS",
    "JWT Decode"
  ],

  features: [
    "Google Sign-In",
    "Create / Join Rooms",
    "PIN-protected private rooms",
    "P2P Audio/Video calling",
    "Public lobby",
    "Live chat",
    "Typing indicator",
    "Mute / Camera toggle",
    "Raise hand"
  ],

  challenges: [
    "Managing peer-to-peer connections",
    "Handling ICE candidates & signaling",
    "Ensuring stable video call performance",
    "Implementing Google OAuth securely"
  ],

  github: "https://github.com/Harshan-mv",
  live: "https://your-webrtc-app-live-link.com"
};

export default webRTCApp;
