export const projects = [

  {
    id: 1,
    title: "Weatherly – Modern Weather App",
    shortDesc: "A live weather forecasting application powered by OpenWeather API.",
    fullDesc: `
    Weatherly is a clean, modern weather forecasting application that provides 
    real-time weather information such as temperature, humidity, wind speed, and 
    weather conditions using the OpenWeather API. It features an intuitive UI 
    that adapts dynamically based on the searched city’s weather condition.
  `,
    tech: ["React", "TailwindCSS", "JavaScript", "API"],
    features: [
      "Live temperature and humidity data",
      "Wind speed and real-time conditions",
      "Search any city worldwide",
      "Clean and responsive UI",
      "Dynamic background changes based on weather",
    ],
    // Images stored inside public/projects/weatherly/
    mainImage: "/projects/weather1.webp",
    images: [
      "/projects/weather2.webp",
      "/projects/weather3.webp",
    ],

    liveDemo: "https://weatherly-topaz.vercel.app/",  
    videoDemo: null,                                 
    github: "https://github.com/Kathirvel2321/Weather-App", 
  },
  {
    id: 2,
    title: "Plantopedia",
    shortDesc: "A smart plant information and diagnosis platform.",
    fullDesc: `
      Plantopedia is a plant-care system that provides structured details 
      about indoor plants, disease symptoms, and proven cures. 
      Users can log in, like posts, comment, and interact with the content. 
      Built using HTML, CSS, JavaScript, PHP, and MySQL.
    `,
    features: [
      "Plant Knowledge Library",
      "Disease Detection & Remedies",
      "User Login System",
      "Like & Comment System",
      "Search & Filter",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    mainImage: "/projects/plant-1.webp", // top image
    images: [
      "/projects/plant-2.webp",
      "/projects/plant-3.webp",
    ],
    liveDemo: null,           // ❌ no live demo
    videoDemo: "/projects/plantopedia.mp4", // ✔ show video
    github: "https://github.com/Kathirvel2321/Plantopedia-project",
  },



  {
    id: 3,
    title: "Tic Tac Toe – Wood Edition",
    shortDesc: "A classic 2-player Tic Tac Toe game with a wooden theme and smooth animations.",
    fullDesc: `
    Tic Tac Toe – Wood Edition is a beautifully styled two-player game built with 
    a wooden texture UI. It includes smooth winning animations, responsive layout 
    and a clean, simple interaction flow. The project focuses on providing a 
    relaxing visual experience while maintaining perfect game logic.
  `,
    tech: ["React", "TailwindCss"],
    features: [
      "Two-player gameplay",
      "Wood-themed UI",
      "Winning line animations",
      "Restart functionality",
      "Responsive layout",
    ],
    // Images stored inside public/projects/tictactoe/
    mainImage: "/projects/tic-tac1.webp",
    images: [
      "/projects/tic-tac2.webp",
      "/projects/tic-tac3.webp",
    ],

    liveDemo: "https://tic-tac-toe-wood.vercel.app/",
    videoDemo: null,  // No video since live demo exists
    github: "https://github.com/Kathirvel2321/TicTacToe-Wood", // (add your repo if different)
  },

  {
    id: 4,
    title: "Stopwatch App",
    shortDesc: "A clean and responsive stopwatch with lap tracking and smooth UI interactions.",
    fullDesc: `
    Stopwatch App is a simple but polished time-tracking tool built with React. 
    It features start, pause, reset, and lap recording functionality with a smooth 
    and responsive UI. The app focuses on minimalistic design, precision timing, 
    and a modern user experience suitable for both mobile and desktop usage.
  `,
    tech: ["React.js", "CSS", "JavaScript"],

    mainImage: "/projects/watch1.webp",
    images: [
      "/projects/watch2.webp",
      "/projects/watch3.webp",
    ],
    features: [
      "Start / Pause / Reset controls",
      "Lap tracking feature",
      "Precision milliseconds timing",
      "Responsive UI",
      "Clean and modern design"
    ],

    liveDemo: "https://stopwatch-ivory-rho.vercel.app/",
    videoDemo: null, // No video needed
    github: "https://github.com/Kathirvel2321/Stopwatch", // replace if needed
  },

  {
    id: 5,
    title: "Earthquake Visualizer",
    shortDesc: "A real-time global earthquake tracker with interactive maps and detailed seismic insights.",
    fullDesc: `
    Earthquake Visualizer is an interactive web application built to display real-time 
    seismic activity across the world. It integrates the USGS Earthquake API to fetch
    live earthquake data and plots each event on a Leaflet-powered world map.
    Users can explore earthquake magnitude, depth, location, time, and other metadata 
    through dynamic popups. The interface is optimized for clarity, performance, and 
    smooth map interaction on all devices.
  `,

    tech: [
      "React.js",
      "Leaflet.js",
      "USGS Earthquake API",
      "Tailwind CSS",
      "JavaScript"
    ],

    mainImage: "/projects/earthquake2.webp",
    images: [
      "/projects/earthquake1.webp",
      "/projects/earthquake3.webp",
    ],
    features: [
      "Live USGS earthquake data",
      "Interactive world map",
      "Magnitude-based markers",
      "Depth-based visualization",
      "Popup details for each event",
      "Mobile-friendly interface"
    ],

    liveDemo: "https://earthquake-visualizer-track.vercel.app/",
    videoDemo: null,
    github: "https://github.com/Kathirvel2321/Earthquake-Visualizer" // change if different
  },
  {
    id: 6,
    title: "Resume Preview UI",
    shortDesc: "A clean and modern resume preview interface — UI-only design showcasing layout and visual structure.",

    fullDesc: `
    Resume Preview UI is a frontend-only project built as a visual prototype. 
    It demonstrates a clean resume layout, real-time preview panel, and 
    professional typography. The project focuses on UI structure, spacing, 
    and usability rather than backend functionality. This prototype highlights 
    your ability to design modern, minimal interfaces with proper visual hierarchy.
  `,

    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript"
    ],

    mainImage: "/projects/resume1.webp",
    images: [
      "/projects/resume2.webp",
      "/projects/resume3.webp"
    ],
    features: [
      "Modern and clean resume layout for professional readability.",
      "Live preview panel (UI-only prototype).",
      "Fully responsive across mobile, tablet, and desktop.",
      "Section-based resume structure for clarity.",
    ],

    liveDemo: "https://resume-preview-sepia.vercel.app/",
    videoDemo: null,             
    github: "https://github.com/Kathirvel2321/Resume-preview"  
  }

];
