interface Experience {
    period: string;
    position: string;
    company: string;
    tasks: string[];
}
  
interface Education {
    period: string;
    career: string;
    institution: string;
}

interface PersonalProject {
    name: string;
    technologiesUsed: string[];
    description?: string;
    url?: string;
}

interface Course {
    name: string;
    academicHours: string;
    provider: string;
    professor: string;
    year: string;
}

interface Language {
    speak: string;
    read: string;
    write: string;
}

interface WorkSkills {
    warehousingAndMerchandiseTransport: boolean;
    administrativeAssistant: boolean;
    technicalAssistantInComputerMaintenance: boolean;
}

interface Availability {
    availability: string;
}

interface Resume {
    fullName: string;
    location: string;
    phoneNumbers: string[];
    email: string;
    linkedIn: string;
    github: string;
    goals: string;
    fullstackDeveloper: string[];
    otherTechnologies: string[];
    ides: string[];
    versionControlSystem: string[];
    webServers: string[];
    databases: string[];
    design: string[];
    infrastructure: string[];
    developmentMethodologies: string[];
    languages: Language;
    workExperience: Experience[];
    educationAndCredentials: Education[];
    personalProjects: PersonalProject[];
    courses: Course[];
    workSkills: WorkSkills;
    availability: Availability;
}
  