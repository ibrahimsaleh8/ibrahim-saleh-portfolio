import mainUniversity from "@images/projects/University_Management_System.webp";
import university1 from "@images/ProjectDetails/UniversityManagment/1.webp";
import university2 from "@images/ProjectDetails/UniversityManagment/2.webp";
import university3 from "@images/ProjectDetails/UniversityManagment/3.webp";
import university4 from "@images/ProjectDetails/UniversityManagment/4.webp";
import university5 from "@images/ProjectDetails/UniversityManagment/5.webp";
import university6 from "@images/ProjectDetails/UniversityManagment/6.webp";
import university7 from "@images/ProjectDetails/UniversityManagment/7.webp";
import university8 from "@images/ProjectDetails/UniversityManagment/8.webp";
import university9 from "@images/ProjectDetails/UniversityManagment/9.webp";
import university10 from "@images/ProjectDetails/UniversityManagment/10.webp";
// Megaza Store
import mainMegaza from "@images/projects/MegazaStore.webp";
import megaza1 from "@images/ProjectDetails/MegazaStore/2.webp";
import megaza2 from "@images/ProjectDetails/MegazaStore/3.webp";
import megaza3 from "@images/ProjectDetails/MegazaStore/4.webp";
import megaza4 from "@images/ProjectDetails/MegazaStore/5.webp";
import megaza5 from "@images/ProjectDetails/MegazaStore/6.webp";
import megaza6 from "@images/ProjectDetails/MegazaStore/7.webp";
import megaza7 from "@images/ProjectDetails/MegazaStore/8.webp";
import megaza8 from "@images/ProjectDetails/MegazaStore/9.webp";
import megaza9 from "@images/ProjectDetails/MegazaStore/10.webp";
import megaza10 from "@images/ProjectDetails/MegazaStore/11.webp";
// Gaming Store
import mainGaming from "@images/projects/gameingStore.webp";
import gaming1 from "@images/ProjectDetails/GamingStore/1.webp";
import gaming2 from "@images/ProjectDetails/GamingStore/2.webp";
import gaming3 from "@images/ProjectDetails/GamingStore/3.webp";
import gaming4 from "@images/ProjectDetails/GamingStore/4.webp";
import gaming5 from "@images/ProjectDetails/GamingStore/5.webp";
import gaming6 from "@images/ProjectDetails/GamingStore/6.webp";
import gaming7 from "@images/ProjectDetails/GamingStore/7.webp";
import gaming8 from "@images/ProjectDetails/GamingStore/8.webp";
import gaming9 from "@images/ProjectDetails/GamingStore/9.webp";
// Optimo
import mainOptimo from "@images/projects/Optimo.webp";
import optimo1 from "@images/ProjectDetails/optimo/1.webp";
import optimo2 from "@images/ProjectDetails/optimo/2.webp";
import optimo3 from "@images/ProjectDetails/optimo/3.webp";
import optimo4 from "@images/ProjectDetails/optimo/4.webp";
import optimo5 from "@images/ProjectDetails/optimo/5.webp";
import optimo6 from "@images/ProjectDetails/optimo/6.webp";
// Portfolio
import portfolio1 from "@images/ProjectDetails/Portfolio/1.webp";
import portfolio2 from "@images/ProjectDetails/Portfolio/2.webp";
import portfolio3 from "@images/ProjectDetails/Portfolio/3.webp";
import portfolio4 from "@images/ProjectDetails/Portfolio/4.webp";
import portfolio5 from "@images/ProjectDetails/Portfolio/5.webp";
import portfolio6 from "@images/ProjectDetails/Portfolio/6.webp";

export const allProjects = [
  {
    name: "University Management System",
    link: "university-management-system",
    description: `The University Management System is a comprehensive full-stack web application designed to centralize and automate academic and administrative operations within a university environment. The platform provides dedicated, role-based dashboards for administrators, teachers, and students, ensuring that each user interacts only with the features relevant to their responsibilities.

Administrators can manage the entire academic structure, including departments, courses, semesters, teachers, and students. Teachers are able to create and manage classrooms, assign students, upload course materials, create exams and assignments, and track student performance. Students can enroll in courses, view schedules, access shared resources, submit assignments, and monitor exam results through a clean and intuitive interface.

The system focuses heavily on security and scalability, implementing secure authentication, protected API routes, and full CRUD operations for all core entities. Performance is optimized using efficient data fetching strategies and caching, ensuring smooth interactions even as data grows.

Built using Next.js and TypeScript, with Prisma and PostgreSQL for data integrity and scalability, the application leverages modern frontend tools such as React Query, Redux Toolkit, Tailwind CSS, and Shadcn UI to deliver a responsive and maintainable user experience. Additional integrations like Cloudinary and Nodemailer enhance file handling and system communication.`,
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Shadcn UI",
      "React Query",
      "Redux Toolkit",
      "Zod",
      "Cloudinary",
      "Nodemailer",
    ],
    year: 2025,
    overviewLink: "https://university-management-system-eta.vercel.app/",
    repoLink: "https://github.com/ibrahimsaleh8/university-management-system",
    videoLink:
      "https://www.linkedin.com/posts/ibrahim-saleh-dev_universitymanagement-webdevelopment-nextjs-activity-7375186042393489408-4euh",
    mainImage: mainUniversity,
    otherImages: [
      university1,
      university2,
      university3,
      university4,
      university5,
      university6,
      university7,
      university8,
      university9,
      university10,
    ],
    services: ["Full-Stack", "Managment", "Education Services"],
  },

  {
    name: "Megaza Store",
    link: "megaza-store",
    description: `Megaza Store is a modern, production-ready e-commerce platform focused on delivering a seamless online shopping experience for men’s fashion. The application allows users to browse a wide range of clothing products with advanced search, filtering, and pagination, making it easy to discover items quickly and efficiently.

Users can add products to their cart, manage quantities, apply discount codes, and complete purchases through a secure checkout process powered by Stripe. The platform also includes a powerful admin dashboard that enables store managers to create, edit, and delete products, manage orders, track order statuses, and control promotional discounts from a single interface.

A strong emphasis was placed on performance optimization and SEO, utilizing server-side rendering, lazy loading, and API caching. These optimizations significantly reduce load times and improve search engine visibility, resulting in faster navigation and higher user engagement.

The project is built with Next.js 14 and TypeScript, using React Query for data fetching, Zustand for state management, and Prisma with PostgreSQL for reliable backend operations. Styling is handled with Tailwind CSS, form validation with Zod, and media storage through Cloudinary, creating a scalable and maintainable e-commerce solution.`,
    techStack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
      "Zod",
    ],
    year: 2025,
    overviewLink: "https://megaza-store.vercel.app/",
    repoLink: "https://github.com/ibrahimsaleh8/megaza-store",
    videoLink:
      "https://www.linkedin.com/posts/ibrahim-saleh-dev_nextjs-typescript-react-activity-7307411410517401600-qyzA",
    mainImage: mainMegaza,
    otherImages: [
      megaza1,
      megaza2,
      megaza3,
      megaza4,
      megaza5,
      megaza6,
      megaza7,
      megaza8,
      megaza9,
      megaza10,
    ],
    services: ["Full-Stack", "E-Commerce", "Fashions Services"],
  },

  {
    name: "Gaming Store",
    link: "gaming-store",
    description: `The Gaming Store is a full-featured e-commerce platform tailored specifically for gamers, allowing users to browse and purchase games across PC, PlayStation, and Xbox platforms. The application provides advanced filtering, wish lists, discount codes, and real-time order tracking to enhance the shopping experience.

An integrated admin dashboard allows administrators to manage inventory, update product details, track orders, and apply discounts efficiently. The system ensures smooth and consistent data flow by leveraging Redux Toolkit and RTK Query, which significantly improves caching and reduces unnecessary network requests.

The user interface is fully responsive and enriched with smooth animations using Framer Motion, creating an engaging and modern experience across devices. Accessibility and usability were key considerations, ensuring intuitive navigation and fast interactions.

Built with React and TypeScript, the application uses Firebase for authentication and data storage, along with Tailwind CSS and Shadcn UI for a clean and cohesive design system. Performance optimizations such as lazy loading and efficient state management contribute to faster load times and reduced bounce rates, especially on mobile devices.`,
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Hook Form",
      "Yup",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Firebase",
    ],
    year: 2024,
    overviewLink: "https://gaming-ecommerce-a7eac.web.app/",
    repoLink: "https://github.com/ibrahimsaleh8/gaming-store",
    videoLink: "https://www.facebook.com/share/v/1CyZtccTCc/",
    mainImage: mainGaming,
    otherImages: [
      gaming1,
      gaming2,
      gaming3,
      gaming4,
      gaming5,
      gaming6,
      gaming7,
      gaming8,
      gaming9,
    ],
    services: ["Full-Stack", "E-Commerce", "Gaming Services"],
  },

  {
    name: "Optimo — Image Converter & Compressor",
    link: "optimo",
    description: `Optimo is a powerful and easy-to-use web application designed to simplify image conversion and compression for everyday users and developers. The platform allows users to convert images between multiple popular formats, including PNG, JPG, WEBP, GIF, and AVIF, and compress images with a fully adjustable quality slider.

Users can easily upload an image, select the desired output format, adjust compression quality (from 10 to 100), and download the optimized result. The system is designed to reduce file sizes significantly while preserving visual quality, making it ideal for web optimization and performance-sensitive use cases.

Optimo combines a modern frontend with a high-performance backend. The frontend is built using Next.js (App Router), React, Tailwind CSS, and Shadcn UI, delivering a fast, responsive, and visually clean interface. The backend uses Node.js and Express.js, with Sharp.js handling image processing tasks efficiently and reliably.

The application emphasizes speed, usability, and scalability, with optimized client-server communication and minimal processing overhead. Optimo demonstrates strong full-stack skills, efficient handling of binary data, and practical problem-solving for real-world performance challenges.`,
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "Sharp.js",
    ],
    year: 2025,
    overviewLink: "https://optimizer-frontend.vercel.app/",
    repoLink: "https://github.com/ibrahimsaleh8/optimizer-frontend",
    videoLink:
      "https://www.linkedin.com/posts/ibrahim-saleh-dev_%D8%A7%D9%84%D8%AD%D9%85%D8%AF%D9%84%D9%84%D9%87-%D8%A7%D9%88%D9%84-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-%D9%84%D9%8A%D8%A7-%D8%A8-node-js-%D9%88-express-activity-7403763016099569664-orZm",
    mainImage: mainOptimo,
    otherImages: [optimo1, optimo2, optimo3, optimo4, optimo5, optimo6],
    services: ["Full-Stack", "SASS", "Image Services"],
  },
  {
    name: "Personal Portfolio",
    link: "portfolio",
    description: `This is my personal portfolio website built to showcase my projects, skills, and experience as a Frontend Developer. The portfolio serves as a central hub where recruiters and clients can explore detailed case studies of my work, view live demos, and access GitHub repositories.

The website features a clean, modern design with smooth animations and transitions to create an engaging user experience. Each project includes detailed descriptions, technology stacks, image galleries, and external links, allowing visitors to clearly understand the scope and impact of each project.

Performance and user experience were top priorities. The portfolio is fully responsive, optimized for fast load times, and built with scalable, maintainable code. Animations are used thoughtfully to enhance interaction without sacrificing performance.

Built with Next.js and TypeScript, the portfolio demonstrates strong frontend architecture, component reusability, modern UI patterns, and attention to detail in both design and engineering.`,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
    ],
    year: 2025,
    overviewLink: "https://my-portfolio-flax-seven-12.vercel.app/",
    repoLink: "https://github.com/ibrahimsaleh8/my-portfolio",
    videoLink: "",
    mainImage: portfolio2,
    otherImages: [portfolio1, portfolio3, portfolio4, portfolio5, portfolio6],
    services: ["Frontend", "interactions", "animations"],
  },
];
