

export const projectData = [
  {
    id: 0,
    // Core
    title: 'RadiantChiropracticCare',
    role: 'UI/UX Design & Development',
    year: '2023',
    status: 'Complete',
    websiteLink: 'https://radiantchiropracticcare.com.au/',
    managementStyle: 'Waterfall / Linear',
    // Project Type
    projectType:'Mobile & Tablet App',
    // Tags
    tagList: ['UI / UX','Front-End Development','QA Testing'],
    // Software Icons
    softwareTitle: ["Figma",'React','Tailwind','Vite'],
    softwareList: ["file-icons:figma",'file-icons:jsx-atom','file-icons:tailwind','file-icons:vite'],
    // Images
    image:[
        `hero.png`,
        `image-1.png`,
        `image-2.png`,
        `image-3.webp`,
        `image-4.png`,
        `image-5.png`,
        `image-6.png`,
        `image-7-wireframe.png`,
        `image-8-wireframe.png`,
      ],
    overview: 'James Kang & I co-designed and developed a singlepage formatted website for a blossoming chiropractor locally. Our goal was to create an easy-to-use website to open the gate for clients both new & existing to book appointments & learn about her practice. We utilised figma for the initial design experimentation, sticking closely towards the brand identity and using that as the basis for our palette, we moved swiftly onto Vite with React & Tailwind CSS for development and experimentation of functionality and features we could implement, like the google maps API and FAQ dropdowns.',
    processTextList:[
      // Challenge
      "Being given a short period of time to go from branding to opening doors, creating a full scale website for the start of the next month presented various challenges, especially co-designing and programming on a commercial level whilst liasing with client expectations. We were tasked with creating a site as an entry point into Mikayla's appointment scheduling system with all her client details.",
      // Process
      "We began by defining project goals, target audience needs, and core site functionality, creating a clear roadmap from concept to launch. Each phase—from research to deployment—was structured to ensure alignment with the client’s vision and user expectations.",
      // Solution
      "Design decisions were anchored in the existing brand identity, using the established palette, typography, and visual cues to reflect the practice’s warmth and professionalism while ensuring a cohesive digital presence.",
      // Wireframing
      "Low-fidelity wireframes in Figma outlined structure, content hierarchy, and user flow, enabling us to validate functionality and navigation before refining the visual design.",
      // UI Design
      "A clean, approachable interface was designed with accessibility and ease of use in mind, balancing whitespace, typography, and iconography to create a welcoming yet professional experience that aligned seamlessly with the brand.",
      // Development Process
      "The site was built using Vite, React, and Tailwind CSS for speed, responsiveness, and maintainability, with integrated features such as Google Maps for location access and interactive FAQ dropdowns to enhance usability."
    ],
    // Colour palette
    gradientColour: "linear-gradient(180deg, rgba(224,150,34,1) 0%, rgba(255,180,0,1) 100%)",
    colours:
    [
      "#FFC400",
      "#FDE07E",
      "#9F842A",
      "#FEFEFE",
      "#050505",
    ]
  },{
      id: 1,
      title: 'Android12',
      role: 'OS Design',

      year: '2023',
      status: 'Complete',
      websiteLink: 'https://vhedia.com/',

      gradientColour: "linear-gradient(180deg, rgba(222,0,0,1) 0%, rgba(212,33,158,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      tagList: ['UI / UX'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],

    image:[
        `hero.png`,
        `image-1.png`,
        `image-2.png`,
        `image-3.png`,
        `image-4.png`,
        `image-5.png`,
        `image-6.png`,
        `image-7-wireframe.png`,
        `image-8-wireframe.png`,
      ],
      overview: "While working in cooperation with VHEDIA, I was tasked with the project of creating a custom UI theme design to be developed for their car headunits that came in various designs, models and bases. The theme had to include consideration for custom widgets & personalisation whilst remaining simple enough for all variants of users to be able to troubleshoot either via a provided PDF guide or over the phone from one of the support technicians",
      processTextList:[
        // Challenge
        "Designing a universal UI theme for VHEDIA’s range of car headunits posed the challenge of catering to multiple hardware designs, models, and operating bases, while ensuring usability for a wide range of drivers.",
        // Process
        "We began by identifying the technical constraints and understanding user scenarios across different headunit configurations. This informed a design framework adaptable to various screen sizes, resolutions, and layouts.",
        // Solution
        "The theme was designed with a balance of customisation and simplicity, supporting personal widgets and user preferences while maintaining an intuitive, streamlined interface for everyday use.",
        // Wireframing
        "Wireframes mapped out navigation flows, widget placement, and key user interactions, allowing us to test adaptability across different model dimensions before committing to final visuals.",
        // UI Design
        "The visual design emphasised clarity and accessibility, using a clean, bold interface style optimised for in-car visibility, with clear iconography and consistent placement of core functions.",
        // Development Considerations
        "Design assets and specifications were documented for integration by the development team, with built-in support for PDF-based troubleshooting guides and remote assistance by VHEDIA’s technical staff."
      ],
      colours:
      [
        "#590508",
        "#8A020D",
        "#901721",
        "#01011E",
        "#fefefe",
      ]
    },
    
    {
      id: 2,
      title: 'TyreWatcher',
      role: 'App Design & QA Testing',

      year: '2023',
      status: 'Development Complete Pending Hardware Update. Discontinued',
      gradientColour: "linear-gradient(180deg, rgba(222,106,0,1) 0%, rgba(212,33,33,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      
      tagList: ['UI / UX','Project Management','QA Testing'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],
      image:[
          `hero.png`,
          `image-1.png`,
          `image-2.png`,
          `image-3.webp`,
          `image-4.webp`,
          `image-5.png`,
          `image-6.png`,
          `image-7-wireframe.png`,
          `image-8-wireframe.png`,
      ],
      overview:"Tyrewatcher. A versatile app designed for phones, tablets and car headunits utilising BTE technology to connect our bluetooth tyre pressure sensors to your device ranging from one sensor up to 24+ for trucks and other large vehicles.",
      processTextList:[
        // Challenge
        "Tyrewatcher needed to operate seamlessly across phones, tablets, and in-car headunits, supporting anywhere from a single tyre sensor to over 24 for large trucks, all while maintaining reliable Bluetooth connectivity via BTE technology.",
        // Process
        "We began by mapping out user requirements for different vehicle types, from solo drivers to fleet operators, and assessing how interface complexity should scale with the number of connected sensors.",
        // Solution
        "The app was designed with a modular interface that dynamically adapts to the number of sensors, providing clear tyre status indicators, alerts, and easy access to detailed readings.",
        // Wireframing
        "Low-fidelity wireframes defined layouts for various screen sizes, ensuring critical information like pressure warnings and connection status remained prominent across all devices.",
        // UI Design
        "The design focused on legibility and quick-glance usability, using bold status colours, intuitive icons, and scalable typography optimised for both mobile and in-car visibility.",
        // Development Considerations
        "Cross-platform compatibility and Bluetooth stability were prioritised, with the interface built to handle rapid sensor data updates while minimising latency for safety-critical alerts."
      ],
      colours:
      [
        "#F8991C",
        "#BB4430",
        "#FFAA00",
        '#E8E9EB',
        "#1C1F20",
      ]
    },
    
    {
      id: 3,
      title: 'BatteryWatcher',
      role: 'UI/UX App Design',

      year: '2023',
      status: 'Complete',
      gradientColour: "linear-gradient(180deg, rgba(0,92,222,1) 0%, rgba(255,0,0,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      tagList: ['UI / UX','QA Testing'],
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],
    image:[
        `hero.png`,
        `image-1.png`,
        `image-2.png`,
        `image-3.png`,
        `image-4.png`,
        `image-5.png`,
        `image-6.png`,
        `image-7-wireframe.png`,
        `image-8-wireframe.png`,
      ],
      overview: "Battery Watcher utilises our BattWatcher product to connect to your car battery and transmits data directly to your phone through a Bluetooth connection to this app. You can view the voltage and health of your battery,the consumption of power per second and run various tests such as the Cranking, Charging and Battery tests to make sure you get the most out of your battery.",      
      processTextList:[
        // Challenge
        "Battery Watcher needed to deliver accurate, real-time diagnostics from the BattWatcher device to a user’s phone via Bluetooth, while presenting data in a way that was both detailed for enthusiasts and approachable for everyday drivers.",
        // Process
        "We started by identifying the key performance metrics drivers value most — voltage, health, and power consumption — and mapping out how these should be monitored, displayed, and tested within the app.",
        // Solution
        "The app integrates live battery status with detailed diagnostic tools, including Cranking, Charging, and Battery tests, giving users both quick health checks and deeper performance insights.",
        // Wireframing
        "Wireframes prioritised a clear hierarchy between at-a-glance metrics and in-depth reports, ensuring users could access both without navigating through unnecessary screens.",
        // UI Design
        "A clean, data-focused interface was created with clear typography, colour-coded indicators, and intuitive test controls, allowing users to easily interpret results and take action.",
        // Development Considerations
        "Optimised for Bluetooth stability and low-latency data transfer, the app was built to handle continuous monitoring without draining device resources, ensuring accurate readings in real time."
      ],
      colours:
      [
        "#5A9FF0",
        "#75ECA5",
        "#E70000",
        "#FDFEFF",
        "#132024",
      ]
    },
    {
      id: 4,
      title: 'Gremio',
      role: 'App Design & Development',
  
      year: '2023',
      status: 'Complete',
      gradientColour: "linear-gradient(180deg, rgba(120,13,13,1) 0%, rgba(255,0,0,1) 100%)",
      managementStyle: 'Waterfall / Linear',
      projectType:'Mobile & Tablet App',
      softwareTitle: ["Figma",'Photoshop','Illustrator'],
      softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:adobe-illustrator'],

      tagList: ['UI / UX','Project Management','Full-Stack Development'],
      
      image:[
          `hero.png`,
          `image-1.png`,
          `image-2.png`,
          `image-3.png`,
          `image-4.png`,
          `image-5.png`,
          `image-6.png`,
          `image-7-wireframe.png`,
          `image-8-wireframe.png`,
      ],
      overview:["Gremio, a ficticious "],
      processTextList:[
        //Challenge
        "As a part of a university brief, we were tasked with creating a fullstack application of our own design using a fictional brand of our own creation. The purpose of this assesment was to utilise full-stack development skills including database management, login & updating accordingly whilst attempting to build out a design with features such as a dashboard, search / filtration function, settings and other features we could utilise REST APIs & database models for.",
        // Process
        "",
        // Solution
        "",      
      ],
      colours:
      [
        "#E90101",
        "#F55454",
        "#222222",
        "#181414",
        "white",
      ]
    },
    {
    id: 5,
    title: 'Obd2Scanz',
    role: 'App Design & Project Management',

    year: '2023',
    status: 'Complete',
    gradientColour: "linear-gradient(180deg, rgba(120,13,13,1) 0%, rgba(255,0,0,1) 100%)",
    managementStyle: 'Waterfall / Linear',
    projectType:'Mobile & Tablet App',
    softwareTitle: ["Figma",'Photoshop','Excel'],
    softwareList: ["file-icons:figma",'file-icons:adobe-photoshop','file-icons:microsoft-excel'],

    tagList: ['UI / UX','Project Management','QA Testing'],
    
    image:[
        `hero.png`,
        `image-1.png`,
        `image-2.png`,
        `image-3.png`,
        `image-4.png`,
        `image-5.png`,
        `image-6.png`,
        `image-7-wireframe.png`,
        `image-8-wireframe.png`,
      ],
    
    processTextList:[
      //Challenge
      "",
      // Process
      "",
      // Solution
      "",       
    ],
    colours:
    [
      "#E90101",
      "#F55454",
      "#222222",
      "#181414",
      "white",
    ]
  },
  ];
  