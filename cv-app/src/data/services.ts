import { Service } from "@/models/service.model";

export const servicesMock: Service[] = [
    {
        icon: 'linecons linecons-display',
        title: 'Frontend Development',
        description: `Scalable web applications with Angular, React, Next.js, and TypeScript. State management with NgRx/Redux. Responsive design and mobile-first approach.`,
    },
    {
        icon: 'linecons linecons-cloud',
        title: 'Backend Development',
        description: `RESTful APIs with NodeJS, NestJS, and ExpressJS. Microservices architecture. Database design with MongoDB, PostgreSQL, and SQL Server.`,
    },
]

export const servicesMock2: Service[] = [{
    icon: 'linecons linecons-cog',
    title: 'Cloud & DevOps',
    description: `Cloud deployment on Azure and AWS. Docker containerization. CI/CD pipelines with Jenkins and Azure DevOps. Infrastructure as Code.`,
},
{
    icon: 'linecons linecons-phone',
    title: 'Mobile Development',
    description: `Cross-platform mobile apps with Ionic and Cordova. Progressive Web Apps (PWA). Native-like user experiences.`,
}];