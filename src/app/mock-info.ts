import { Info, WhatIDo, Resume, Certificate, Letter } from './info';

export const INFORMATION: Info [] = [
  { first: "Age", second: '27' },
  { first: "Residence ", second: 'the Netherlands' },
  { first: "City ", second: 'Veenendaal' },
  { first: "Email  ", second: 'wouter@eden.nl' },
  { first: "Phone  ", second: '061345678' },
  { first: "Hobies  ", second: 'Chilling' },
];

export const WHATIDO: WhatIDo [] = [
    {title: "Agile Advocate", description: "I'm a strong believer in the Agile development methodology. Collaboration, adaptability, and continuous improvement are at the core of my approach to project management."},
    {title: "Node.js Mastery", description: "I've leveraged the power of Node.js to build robust server-side applications, APIs, and microservices. I'm well-versed in asynchronous programming and have a deep understanding of event-driven architecture."},
    {title: "Problem Solver", description: "I'm not just a developer; I'm a problem solver. I enjoy tackling complex technical issues and finding innovative solutions."},
    {title: "Angular Proficiency", description: "Angular is my playground for crafting engaging and responsive user interfaces. I've developed scalable and feature-rich web applications using Angular, making the most of its component-based architecture."},
]

export const ABOUTME = "My name is Wouter. I'm a seasoned Senior Full Stack Engineer with a deep passion for building dynamic web applications and a strong specialization in Node.js and Angular. With over 12 years of experience in the ever-evolving world of web development, I've had the privilege of working on a diverse range of projects and solving complex technical challenges. My journey in the world of software engineering began with a fascination for the limitless possibilities of the web. Over the years, I've honed my skills to become proficient in both front-end and back-end development, and I take pride in my ability to bridge the gap between design and functionality."

export const RESUME: Resume [] = [
  { year: "2022 - Current", employee: 'Beun de Haas', title: "Senior Data engineer", text: "Backend development of software for measuring employee- and customer satisfaction. Microservice architecture build on both Java Spring Boot and Yii PHP Framework." },
  { year: "2022 - Current", employee: 'Beun de Haas', title: "Medior Data engineer", text: "Backend development of software for measuring employee- and customer satisfaction. Microservice architecture build on both Java Spring Boot and Yii PHP Framework." },
  { year: "2022 - Current", employee: 'Beun de Haas', title: "Junior Data engineer", text: "Backend development of software for measuring employee- and customer satisfaction. Microservice architecture build on both Java Spring Boot and Yii PHP Framework." },
];

export const CERTIFICATES: Certificate [] = [
  { title: "Microsoft Certified: Azure Data Engineer Associate", company: "Microsoft", date: "Toegekend: jul 2023 - verloopt 2420", number: "Certificate number: 1234567890" },
  { title: "Microsoft Certified: Azure Data Engineer Associate", company: "Microsoft", date: "Toegekend: jul 2023 - verloopt 2420", number: "Certificate number: 1234567890" },
  { title: "Microsoft Certified: Azure Data Engineer Associate", company: "Microsoft", date: "Toegekend: jul 2023 - verloopt 2420", number: "Certificate number: 1234567890" },
  { title: "Microsoft Certified: Azure Data Engineer Associate", company: "Microsoft", date: "Toegekend: jul 2023 - verloopt 2420", number: "Certificate number: 1234567890" },
]

export const LETTERS: Letter [] = [
  { item: "LET'S" },
  { item: "WORK" },
  { item: "TOGETHER" },
  { item: "ON" },
  { item: "AWESOME" },
  { item: "NEW" },
  { item: "STUFF" },
  { item: "!" },
]