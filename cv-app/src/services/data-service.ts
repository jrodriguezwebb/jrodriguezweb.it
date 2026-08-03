import { Skill } from "@/models/skill.model";
import { Service } from "@/models/service.model";

// Backend Skills
export const backendSkills: Skill[] = [
    { skillName: "NodeJS / NestJS", skillValue: 92 },
    { skillName: "TypeScript / JavaScript", skillValue: 95 },
    { skillName: "MongoDB / PostgreSQL", skillValue: 88 },
    { skillName: "REST APIs / Microservices", skillValue: 90 },
    { skillName: "Azure / AWS", skillValue: 85 },
    { skillName: "Docker / Kubernetes", skillValue: 78 },
];

// Frontend Skills
export const frontendSkills: Skill[] = [
    { skillName: "Angular / NgRx", skillValue: 98 },
    { skillName: "React / Next.js", skillValue: 82 },
    { skillName: "TypeScript / JavaScript", skillValue: 95 },
    { skillName: "HTML5 / CSS3 / SASS", skillValue: 93 },
    { skillName: "Responsive Design", skillValue: 90 },
    { skillName: "State Management", skillValue: 95 },
];

// Services
export const servicesMock: Service[] = [
    {
        icon: 'linecons linecons-display',
        title: 'Frontend Development',
        description: `Scalable web applications with Angular, React, Next.js, and TypeScript. State management with NgRx/Redux. Responsive design and mobile-first approach.`,
    },
    {
        icon: 'linecons linecons-data',
        title: 'Backend Development',
        description: `RESTful APIs with NodeJS, NestJS, and ExpressJS. Microservices architecture. Database design with MongoDB, PostgreSQL, and SQL Server.`,
    },
]

export const servicesMock2: Service[] = [{
    icon: 'linecons linecons-params',
    title: 'Cloud',
    description: `Cloud deployment on AWS, GCP and Azure. Docker containerization. CI/CD pipelines with Jenkins and Azure DevOps. Infrastructure as Code.`,
},
{
    icon: 'linecons linecons-phone',
    title: 'Mobile Development',
    description: `Cross-platform mobile apps with Ionic and Cordova. Progressive Web Apps (PWA). Native-like user experiences.`,
}];