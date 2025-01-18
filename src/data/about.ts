// @/data/about.ts

// 1) Education interface
interface EducationItem {
    school: string;
    schoolUrl?: string; // Optional
    degree: string;
    degreeUrl?: string;
    startDate: string;
    endDate: string;
    details: string;
  }
  
  // 2) Certification interface
  interface CertificationItem {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    badgeUrl?: string;
  }
  
  // 3) Work Experience interface
  interface WorkExperienceItem {
    company: string;
    companyUrl?: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }
  
  // Education data
  export const EDUCATION: EducationItem[] = [
    {
      school: "University of Example",
      schoolUrl: "https://example.edu",
      degree: "Bachelor of Science in Computer Science",
      degreeUrl: "https://example.edu/department-of-cs",
      startDate: "August 2015",
      endDate: "May 2019",
      details:
        "Studied various computer science topics including algorithms, data structures, and software engineering. Also researched in the XYZ Lab and published ABC Paper.",
    },
    {
      school: "Example Community College",
      schoolUrl: "https://ecc.example.edu",
      degree: "Associate of Science in Information Technology",
      degreeUrl: "https://ecc.example.edu/associate-it",
      startDate: "August 2013",
      endDate: "May 2015",
      details:
        "Focused on foundational programming skills and IT infrastructure fundamentals.",
    },
  ];
  
  // Certifications data
  export const CERTIFICATIONS: CertificationItem[] = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "June 2022",
      credentialId: "ABC123XYZ",
      badgeUrl: "https://www.credly.com/badges/XYZ",
    },
    {
      name: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "September 2021",
      credentialId: "GCP-DEV-2021-XYZ",
      badgeUrl: "https://www.credential.net/google-cloud-dev-2021",
    },
  ];
  
  // Work Experience data
  export const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
      company: "Tech Startup Inc.",
      companyUrl: "https://techstartup.example.com",
      position: "Frontend Developer",
      startDate: "June 2021",
      endDate: "Present",
      responsibilities: [
        "Build and maintain responsive UI using React and Tailwind CSS.",
        "Collaborate with designers and backend developers to implement new features.",
      ],
    },
    {
      company: "Software Solutions LLC",
      companyUrl: "https://softwaresolutions.example.com",
      position: "Junior Software Engineer",
      startDate: "July 2019",
      endDate: "May 2021",
      responsibilities: [
        "Developed RESTful APIs in Node.js and integrated with React applications.",
        "Implemented automated testing and CI/CD pipeline.",
      ],
    },
  ];
  