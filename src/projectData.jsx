

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
      `hero.webp`,
      `product1.webp`,
      `tablet1.webp`,
      `tablet2.webp`,
      `tablet3.webp`,
    ],
    overview: 'James Kang & I co-designed and developed a singlepage formatted website for a blossoming chiropractor locally. Our goal was to create an easy-to-use website to open the gate for clients both new & existing to book appointments & learn about her practice. We utilised figma for the initial design experimentation, sticking closely towards the brand identity and using that as the basis for our palette, we moved swiftly onto Vite with React & Tailwind CSS for development and experimentation of functionality and features we could implement, like the google maps API and FAQ dropdowns.',
    textList:[
      //Challenge
      "Being given a short period of time to go from branding to opening doors, creating a full scale website for the start of the next month presented various challenges, especially co-designing and programming on a commercial level whilst liasing with client expectations. We were tasked with creating a site as an entry point into Mikayla's appointment scheduling system with all her client details.",
      // Process
      "James & I started with outlining goals & expectations and functionality to build. We then proceeded to discuss features and ensure we were aligned aesthetically before diving into our own sections to experiment with before coming together to discuss prototype layouts and ideate together. Once experimental designs for each section were settled, we mocked up the final high fidelity frame, adjusted sizings to ensure maximum usability & accessibility, checked colour contrast compliance and created our pitch for our client, Mikayla. After we received approval, we got to work, creating a new website utilising Vite as the framework for React & Tailwind CSS, systems we were both familiar with and were able to work swiftly within.",
      // Solution
      "Experimenting with Google Maps API, Vertical Scrolling and Responsive Text Cards, we created a full singlepage site aimed at drawing the user towards booking whilst teaching them about Mikayla's practice and specialities and ensured we had all bases covered in regards to both web standards, accessibility & performance wise but also making sure all data in regards to the medical standards of private practice were met i.e privacy policy, terms & conditions, etc. ",      
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
        `herodark.webp`,
        `product1.webp`,
        `tablet1.webp`,
        `tablet2.webp`,
        `tablet3.webp`,
      ],
      overview: "While working in cooperation with VHEDIA, I was tasked with the project of creating a custom UI theme design to be developed for their car headunits that came in various designs, models and bases. The theme had to include consideration for custom widgets & personalisation whilst remaining simple enough for all variants of users to be able to troubleshoot either via a provided PDF guide or over the phone from one of the support technicians",
      textList:[
        //Challenge
        "Creating an OS design in itself was easy enough, however, the primary limitation in this brief was the software-side limitations. We initially started this project in 2022, creating a fully fledged animated startup screen and enough room for widgets and other personalisations. However this was deemed impossible due to the lacking functionality of Android 10 on the developer's side.",
        // Process
        "Through utilising all varities of designs both on development side and my own variations and researching both competitor's functionalities and user preferences. I started to create a design aligning with both the design trends utilising glass morphism & gradient colour-coded icons, with large easy-to-press buttons for both the side menu / core buttons and the homepage buttons. Once the initial prototype was completed, I thoroughly tested every component to ensure full functionality before we standardise it across all of our units.",
        // Solution
        "With testing completed, we successfully created an OS theme that works with different coloured backgrounds and can be used as a standard for software across our headunits, allowing our headunits to not only separate themselves from the rest of the market, but relieving stress on the support team, as all headunit's had the same directory structure, allowing the customer to be directed to the solution with ease.",      
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
        `hero.webp`,
        `mobileOne.webp`,
        `Mobile1.webp`,
        `MobileTablet1.webp`,
      ],
      overview:"Tyrewatcher. A versatile app designed for phones, tablets and car headunits utilising BTE technology to connect our bluetooth tyre pressure sensors to your device ranging from one sensor up to 24+ for trucks and other large vehicles.",
      textList:[
        //Challenge
        "I was initially given the role to QA test version 1.0. Which, upon release, failed when it came to device performance variance beyond what the test APK's performed. Due to the change in direction from Phone only app to Phone & Headunit app, we decided to recreate the design of the app, with me at the lead. So the new challenge was to create an app functional on the old android system for headunits but also on modern android and IOS systems.",
        // Process
        "Utilising the key colours from the Tyrewatcher product, I created a fully functional figma prototype with indicators for popups, animations and different scenarios, Including a first time setup for each vehicle type setup. The layout was designed so each sensor would be clickable and have specific details about the readings coming from the sensor and alerts were to be assigned to certain pressures as a warning of too high or too low pressure levels. Once this design was sufficient it was sent to an outsourced development team based in China, who I liased with to ensure functionality and flow was sufficient throughout the development process.",
        // Solution
        "The application itself was completed successfully, with all designs intact for the headunit version (mobile TBA) however during final troubleshooting we found that we couldn't connect to the sensors due to the difference in bluetooth modules. This was amended and a build was created by the headunit developers however we were stuck being unable to connect to more than one sensor at a time, and that this was unable to be changed. Our developers for the headunit itself attempted to fix this issue and ended up only partially being able to work. Since then I have not been updated as to the app's status and the business has changed hands.",     
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
        `mobileHero.webp`,
        `mobileOne.webp`,
        `mobileTwo.webp`,
        `phone2.webp`,
        `phone3.webp`,
        `phone4.webp`,
      ],
      overview: "Battery Watcher utilises our BattWatcher product to connect to your car battery and transmits data directly to your phone through a Bluetooth connection to this app. You can view the voltage and health of your battery,the consumption of power per second and run various tests such as the Cranking, Charging and Battery tests to make sure you get the most out of your battery.",      
      textList:[
        //Challenge
        "Batterywatcher was handed to me as a QA Project utilising an old style well overdue for a redesign. My challenge was to create an application for phones to connect to our bluetooth battery monitoring devices aswell as update the branding and ensure full functionality across all devices. I had to create multiple flows of designs for the variety of testing types, setup and having 1-4 battery monitors connected.",
        // Process
        "Utilising our old design and exploring design trends such as glass-morphism, blurred gradients and through redesigning the brand-identity of batterywatcher, moving from a red and white palette to a more electrical based blue meaning neutral, with other colours such as red, green and yellow as accent / section colours for different devices. Once the branding was outlined, I adjusted the app to the new user flow",
        // Solution
        "After mapping out the user flow using stickynotes and experimenting with different routes I utilised the old app's design with the new flow to create a base set of low fidelity frames, sketching different concepts and layouts, testing the visibility and usability of each as the app's style and goals were becoming clearer in its design, creating something easy to read, use and navigate whilst still maintaining the depth of knowledge on voltage & batteries that users expect, accounting for a whole range of battery types and scales.",
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
        `hero.webp`,
        `Mobile1.webp`,
        `MobileTablet1.webp`,
        `phone2.webp`,
        `phone3.webp`,
        `tablet1.webp`,
      ],
      overview:["Gremio, a ficticious "],
      textList:[
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
      `hero.webp`,
      `mobileOne.webp`,
      `mobileTwo.webp`,
      `phone2.webp`,
      `phone3.webp`,
      `tablet1.webp`,
    ],
    
    textList:[
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
  