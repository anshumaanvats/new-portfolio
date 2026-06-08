// Raw images mapped dynamically from GitHub

export const HERO_CONTENT = `I am a passionate Software Engineer with 3 years of hands-on experience in building advanced, integrated solutions. I specialize in designing scalable web applications, and developing intelligent robotic systems that integrate IoT, sensors, and embedded technologies. My goal is to create innovative solutions that enhance automation, improve efficiency, and drive technological advancements across industries.`;

export const ABOUT_TEXT = `Innovative Software Engineer with a focus on Fullstack Development, RPA, and Generative AI. Experienced in building scalable applications and e-commerce platforms with custom configuration engines using React, Node.js, and Python. Proven track record of innovation with 4 published patents and certifications from industry leaders like Google, AWS, and Oracle. Expert at optimizing operational efficiency through intelligent automation.`;

const RAW_ASSETS = "https://raw.githubusercontent.com/anshumaanvats/AnshumaanVatsPortfolio/main/src/assets";
const RAW_VIDEOS = "https://raw.githubusercontent.com/anshumaanvats/AnshumaanVatsPortfolio/main/public/videos";

export const INTERNSHIP = [
  {
    image: `${RAW_ASSETS}/projects/company-1.jpg`,
    year: "August 2024 - September 2024",
    role: "Software Engineer Intern",
    company: "TATA Advanced Systems Limited",
    description: `Built and deployed automation infrastructure using Python, Node.js, and SQL that reduced manual data processing effort by 30% across critical business pipelines. Integrated automated workflows into legacy backend systems, improving operational throughput with zero-downtime deployment patterns.`,
    technologies: ["Python", "Node.js", "SQL", "Mendix", "RPA"],
    link: "https://www.tataadvancedsystems.com/",
    document: "/assets/records/internships/TATA ADVANCED SYSTEMS LIMITED.pdf",
    documentType: "pdf"
  },
  {
    image: `${RAW_ASSETS}/projects/company-2.jpg`,
    year: "July 2023 - August 2023",
    role: "Robotics Intern", 
    company: "AICTE Idea Lab",
    description: `Designed Python-based automation scripts for embedded control systems improving task execution reliability by 25%. Built data-driven IoT workflows managing real-time sensor pipelines with fault-tolerant execution logic.`,
    technologies: ["IoT", "Python", "Arduino", "ESP32", "NodeMCU"],
    link: "https://idealnet.aicte-india.org/",
    document: "/assets/records/internships/AICTE IDEA LAB.jpg",
    documentType: "image"
  },
  {
    image: "/assets/projects/freelance.png",
    year: "Mar 2022 - Apr 2023",
    role: "Full-Stack Engineer",
    company: "Freelance",
    description: `Built CareCrew: production full-stack app with real-time hardware config sync, deployed via CI/CD on Vercel. Designed REST API backend handling dynamic product configuration logic; reduced deployment cycle time 40% through automated pipelines.`,
    technologies: ["React", "Tailwind CSS", "Node.js", "REST APIs", "Vercel", "CI/CD"],
    link: "#"
  }
];

export const SOFTWARE_PROJECTS = [
  {
    title: "AI Coding Agent — Backend",
    image: "/assets/projects/aicoding.jpg",
    description:
      "Built backend agent with smart model-selection heuristics, terminal execution sandbox, file management, and auto-cleanup on Render. Implemented security controls for terminal access and multi-provider API fallback logic.",
    technologies: ["Node.js", "Express", "OpenAI API", "Gemini API"],
  },
  {
    title: "Enterprise RPA Bot Suite",
    image: "/assets/projects/rpa.jpg",
    description:
      "Architected modular multi-bot system eliminating human error in critical pipelines, boosting throughput 50%. Streamlined user management in organizational databases, automating activation and deactivation processes.",
    technologies: ["UiPath", "Automation Anywhere", "Python", "RPA"],
  },
  {
    title: "Visitor Management System",
    image: "/assets/projects/vms.png",
    description:
      "Developed a comprehensive application for streamlining visitor management processes. Features appointment scheduling, admin approval, and tracking with role-based access for admins, users, and security personnel.",
    technologies: ["Mendix", "CSS", "Authentication", "MySQL"],
  },
];

export const HARDWARE_PROJECTS = [
  {
    title: "Omni-Mate Wheel Chair",
    image: `${RAW_ASSETS}/projects/hardwareproject-7.jpg`,
    description:
      "Designed full-stack IoT system managing real-time hardware configuration and data sync between embedded controller and web interface. Features mecanum wheels for omnidirectional movement and voice assistance.",
    technologies: ["Arduino", "C++", "React", "IoT", "Mecanum Wheels"],
    video: `${RAW_VIDEOS}/WHEEL_CHAIR.mp4`
  },
  {
    title: "Serving Robot",
    image: `${RAW_ASSETS}/projects/hardwareproject-6.jpg`,
    description:
      "Developed a smart serving robot controlled via a phone using NodeMCU. Features include matrix eyes that blink when detecting proximity, line-following capabilities for navigating to customers, and automated food serving.",
    technologies: ["Matrix Eyes", "NodeMCU", "Line Following Sensors", "Mobile App Control"],
    video: `${RAW_VIDEOS}/SERVING_ROBOT.mp4`
  },
  {
    title: "Smart Speaker",
    image: `${RAW_ASSETS}/projects/hardwareproject-5.jpg`,
    description:
      "Developed a versatile boombox equipped with a wireless charger for compatible phones. Features include programmable lights with over 1000 patterns controlled via a mobile app, a powerful 20,000mAh battery for extended use.",
    technologies: ["Wireless Charging", "Programmable Lights", "NodeMCU", "Mobile App Control"],
    video: `${RAW_VIDEOS}/SMART_SPEAKER.mp4`
  },
  {
    title: "Parking System",
    image: `${RAW_ASSETS}/projects/hardwareproject-4.jpg`,
    description:
      "Developed a comprehensive parking system with user and manager interfaces. Features include advance booking, IR sensors for slot detection, NodeMCU for real-time data transmission.",
    technologies: ["IR Sensors", "NodeMCU", "Real-time Data Transmission", "Cloud Integration"],
    video: `${RAW_VIDEOS}/PARKING_SYSTEM.mp4`
  },
  {
    title: "Robotic Personal Assistance System",
    image: `${RAW_ASSETS}/projects/hardwareproject-3.jpg`,
    description:
      "Developed an AI-powered robot for autonomous task execution. Incorporates WiFi for remote control, voice recognition for user interaction, and Raspberry Pi for processing.",
    technologies: ["Robot Control", "Raspberry Pi", "Voice Recognition", "Voice Activation"],
    video: `${RAW_VIDEOS}/BRAINY.mp4`
  },
  {
    title: "Truck Overloading Detection System",
    image: `${RAW_ASSETS}/projects/hardwareproject-2.jpg`,
    description:
    "Developed a system with Load Cell Detection to measure truck loads, Relay Control to prevent overloaded trucks from moving, and NodeMCU for real-time reporting.",
    technologies: ["Load Cell Detection", "Relay Control", "NodeMCU", "Real-time Reporting"],
    video: `${RAW_VIDEOS}/TRUCK_OVERLOADING.mp4`
  },
  {
    title: "Temperature Controlled Fan System",
    image: `${RAW_ASSETS}/projects/hardwareproject-1.jpg`,
    description:
      "Developed a system integrating DS18B20 temperature sensor, microcontroller, and PWM technology. Adjusts fan speed based on real-time temperature readings.",
    technologies: ["DS18B20 Temperature Sensor", "Pulse Width Modulation", "Printed Circuit Board"],
    video: `${RAW_VIDEOS}/AUTOMATED_FAN.mp4`
  },
];

export const PATENTS = [
  {
    applicationno: "Application No-202411041958",
    name: "Omni-Mate Wheel Chair",
    year: "2024",
    description: `Developed an innovative wheelchair with mecanum wheels for omnidirectional movement. Features include a 3-way joystick, PS2 remote, HTML phone IP interface, and voice assistance for medication management. Prioritizes user comfort, convenience, and safety while maintaining cost efficiency.`,
    technologies: ["Mecanum Wheels", "Arduino Mega", "C++", "HTML", "Voice Assistance"],
    pdf: "/assets/records/patents/APPLICATION NO-202411041958 (OMNIMATE WHEEL CHAIR).pdf"
  },
  {
    applicationno: "Application No-202311063488",
    name: "Parking System",
    year: "2023",
    description: `Developed a comprehensive parking system with user and manager interfaces. Features include advance booking, IR sensors for slot detection, NodeMCU for real-time data transmission, automated slot allocation, and secure payment integration. Provides real-time updates and navigation assistance.`,
    technologies: ["IR Sensors", "NodeMCU", "Real-time Data Transmission", "Cloud Integration"],
    pdf: "/assets/records/patents/APPLICATION NO-202311063488 (PARKING SYSTEM).pdf"
  },
  {
    applicationno: "Application No-202311063214",
    name: "Robotic Personal Assistance System",
    year: "2023",
    description: `Developed an AI-powered robot for autonomous task execution. Incorporates WiFi for remote control, voice recognition for user interaction, and Raspberry Pi for processing. Features voice activation for commands. Innovation secured with a patent.`,
    technologies: ["Robot Control", "Raspberry Pi", "Voice Recognition", "Voice Activation"],
    pdf: "/assets/records/patents/APPLICATION NO-202311063214 (ROBOTIC PERSONAL ASSISTANCE SYSTEM).pdf"
  },
  {
    applicationno: "Application No-202311064317",
    name: "Truck Overloading Detection System",
    year: "2023",
    description: `Developed a system with Load Cell Detection to measure truck loads, Relay Control to prevent overloaded trucks from moving, and NodeMCU for real-time reporting. Includes Data Logging and an Alert System. Ensures safety compliance, cost efficiency, and improved road safety.`,
    technologies: ["Load Cell Detection", "Relay Control", "NodeMCU", "Real-time Reporting"],
    pdf: "/assets/records/patents/APPLICATION NO-202311064317 (TRUCK OVERLOADING DETECTION SYSTEM).pdf"
  },
  {
    applicationno: "Application No-202311063490",
    name: "Temperature Controlled Fan System",
    year: "2023",
    description: `Developed a system integrating DS18B20 temperature sensor, microcontroller, and PWM technology. Adjusts fan speed based on real-time temperature readings. Components integrated onto a single PCB for compact design and easy installation.`,
    technologies: ["DS18B20 Temperature Sensor", "Pulse Width Modulation", "Printed Circuit Board"],
    pdf: "/assets/records/patents/APPLICATION NO-202311063490 (TEMPERTAURE CONTROLLED FAN SYSTEM ).pdf"
  },
];

export const SKILLS = [
  { category: "Languages", items: ["Python", "C++", "JavaScript", "SQL", "Go", "Embedded C"] },
  { category: "Backend & Cloud", items: ["Node.js", "Express.js", "Linux", "REST APIs", "Firebase", "AWS (Solutions Architecture)"] },
  { category: "Frontend", items: ["React", "Tailwind CSS", "HTML5/CSS3", "Vite", "Figma"] },
  { category: "DevOps & Tools", items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "Vercel", "CI/CD"] },
  { category: "AI & Automation", items: ["Generative AI (LLMs)", "UiPath", "Automation Anywhere", "Mendix", "Arduino"] },
  { category: "Specialized", items: ["IoT Integration", "Robotic Process Automation", "Distributed Systems", "Cybersecurity Fundamentals"] }
];

export const ACHIEVEMENTS = [
  { title: "1st Position: Hack for Impact", organization: "IIIT Delhi", year: "2025", type: "achievement", document: "/assets/records/achievements/HACK FOR IMPACT IIIT DELHI.pdf", documentType: "pdf" },
  { title: "1st Position: National Technology Day", organization: "National Technology Day", year: "2024", type: "achievement", document: "/assets/records/achievements/PROJECT EXPO NTD 2024.pdf", documentType: "pdf" },
  { title: "Project Expo CSIR Chandigarh", organization: "CSIR", year: "2024", type: "achievement", document: "/assets/records/achievements/PROJECT EXPO CSIR CHANDIGARH.pdf", documentType: "pdf" },
  { title: "SIH Internal Finalist", organization: "SIH", year: "2023", type: "achievement", document: "/assets/records/achievements/SIH INTERNAL FINALIST.pdf", documentType: "pdf" },
  { title: "BFCET Hack 2.0", organization: "BFCET", year: "2023", type: "achievement", document: "/assets/records/achievements/BFCET HACK 2.O.pdf", documentType: "pdf" },
  { title: "Zinnovatio 2.0", organization: "Zinnovatio", year: "2023", type: "achievement", document: "/assets/records/achievements/ZINNOVATIO 2.0.pdf", documentType: "pdf" },
  { title: "NIT Hamirpur Hackathon", organization: "NIT Hamirpur", year: "2023", type: "achievement", document: "/assets/records/achievements/NIT HAMIRPUR HACKATHON.pdf", documentType: "pdf" },
  { title: "Innovation Fair 2nd Position", organization: "Innovation Fair", year: "2023", type: "achievement", document: "/assets/records/achievements/INNOVATION FAIR 2ND POSTION.pdf", documentType: "pdf" },
  { title: "IoT Summer Training", organization: "Training", year: "2023", type: "certification", document: "/assets/records/achievements/IOT SUMMER TRAINING.pdf", documentType: "pdf" },
  { title: "Discipline Committee", organization: "Leadership", year: "2023", type: "leadership", document: "/assets/records/achievements/DISCIPLINE COMMITTEE.pdf", documentType: "pdf" }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Kurukshetra University, India",
    year: "2021-2025",
    cgpa: "CGPA: 8/10"
  }
];
