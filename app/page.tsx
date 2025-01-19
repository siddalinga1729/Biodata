"use client"; // Mark the file as a Client Component

import Image from "next/image";
import { useState, useEffect } from 'react';
import { MdMail, MdEmail } from 'react-icons/md';
import { BsLinkedin, BsGithub, BsTelephone } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll handling function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePhoneClick = async () => {
    const phoneNumber = '8106595594';
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(phoneNumber);
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 2000);
    }
  };

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen p-6 font-sans relative">
        {/* Updated Navbar */}
        <nav className="backdrop-blur-md bg-gray-800/90 text-white fixed top-0 left-0 right-0 p-4 z-50 border-b border-gray-700">
          <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent text-center md:text-left">
              Siddalingappa K
            </h1>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
              {[
                { id: "summary", label: "Summary" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "roles", label: "Roles" },
                { id: "education", label: "Education" },
                { id: "personal", label: "Personal" }
              ].map(({ id, label }) => (
                <li key={id}>
                  <a 
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="hover:text-blue-400 transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-400 after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content - Add padding to account for fixed navbar */}
        <div className="container mx-auto max-w-4xl px-4 pt-24">
          {/* Floating Action Buttons - moved to middle right */}
          <div className="fixed top-1/2 -translate-y-1/2 right-4 md:right-10 space-y-3 md:space-y-4 z-20">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-blue-500/50 transform transition-all hover:scale-110 text-lg md:text-xl flex items-center gap-2"
              title="View Resume"
            >
              <FaUserTie className="w-5 h-5 md:w-6 md:h-6"/>
              <span className="absolute right-full mr-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                View Resume
              </span>
            </button>
            
            <button
              onClick={() => window.open('https://www.linkedin.com/in/siddalingappa-k/', '_blank')}
              className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 rounded-full shadow-lg hover:shadow-blue-600/50 transform transition-all hover:scale-110 text-xl flex items-center gap-2"
              title="Connect on LinkedIn"
            >
              <BsLinkedin className="w-6 h-6"/>
              <span className="absolute right-full mr-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn Profile
              </span>
            </button>

            <button
              onClick={() => window.open('mailto:siddalinga1729@gmail.com')}
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow-lg hover:shadow-red-500/50 transform transition-all hover:scale-110 text-xl flex items-center gap-2"
              title="Send Email"
            >
              <MdEmail className="w-6 h-6"/>
              <span className="absolute right-full mr-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Send Email
              </span>
            </button>

            <button
              onClick={() => window.open('https://github.com/YourGitHubUsername', '_blank')}
              className="group bg-gradient-to-r from-gray-700 to-gray-900 text-white p-4 rounded-full shadow-lg hover:shadow-gray-700/50 transform transition-all hover:scale-110 text-xl flex items-center gap-2"
              title="View GitHub Profile"
            >
              <BsGithub className="w-6 h-6"/>
              <span className="absolute right-full mr-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub Profile
              </span>
            </button>
          </div>

          {/* Header Section with Profile Image */}
          <header id="header" className="mt-12 text-center mb-12 pb-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
            {/* Profile Image Container */}
            <div className="relative w-44 h-44 mx-auto mb-4">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse blur-xl opacity-50"></div>
              
              {/* Profile Image */}
              <Image
                src="/siddu01.png"
                alt="Siddalingappa K"
                width={176}
                height={176}
                className="rounded-full object-cover w-full h-full border-4 border-blue-400 relative z-10 shadow-xl"
                priority
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center 15%'
                }}
              />
              
              {/* Decorative ring */}
              <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Name and Title */}
            <div className="relative z-20 mt-6">
              <h1 className="text-5xl font-bold text-white mb-3">
                Siddalingappa K
              </h1>
              <p className="text-2xl font-medium text-blue-400 mb-4">
                Java Full Stack Developer
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-6">
              <div className="flex items-center justify-center gap-2 p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                <MdMail className="text-blue-400 w-5 h-5" />
                <a href="mailto:siddalinga1729@gmail.com" 
                   className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  siddalinga1729@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 relative group p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
                <BsTelephone className="text-blue-400 w-5 h-5" />
                <a href="tel:+918106595594" 
                   className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base">
                  Phone: 8106595594
                </a>
                <button
                  onClick={handlePhoneClick}
                  className="opacity-0 group-hover:opacity-100 ml-2 hover:scale-110 transition-all duration-300 p-2 relative"
                  title="Copy phone number"
                >
                  <svg className="w-4 h-4 text-blue-400 hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  {showCopySuccess && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="text-blue-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Location: Bangalore</span>
              </div>
            </div>
          </header>

          {/* Summary Section */}
          <section id="summary" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Summary
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Java Full Stack Developer with approximately 3 years and 5 months of professional IT experience as a Software Developer, 
              specializing in Java/J2EE and JavaScript technologies. Proficient in the complete project life cycle, including design, 
              analysis, development, integration, and deployment of application software in web-based environments and client/server 
              architectures. Strong expertise in building frameworks using HTML, CSS, Bootstrap, Spring Boot, ASP.NET, Blazor and 
              Microservices Architecture.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {[
                {
                  company: "Hynetic Electronics Pvt. Ltd",
                  website: "https://hynetic.com/",
                  designation: "Software Developer",
                  duration: "Nov 2023 - Oct 2024",
                  experience: "1.2 years",
                  location: "Bangalore"
                },
                {
                  company: "Cadmaxx Solution Pvt Ltd (DRDO)",
                  website: "https://cadmaxx.com/",
                  designation: "Software Developer",
                  duration: "April 2021 - Nov 2023",
                  experience: "2.5 years",
                  location: "Bangalore"
                },
                {
                  company: "Granito Brushes Private Limited",
                  website: "https://www.granitobrushes.in/",
                  designation: "Production Assistant",
                  duration: "Nov 2020 - March 2021",
                  experience: "8 Months",
                  location: "Doddaballapur"
                }
              ].map((exp, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold text-blue-400">
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors flex items-center gap-2"
                      >
                        {exp.company}
                        <svg 
                          className="w-5 h-5 inline-block" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </a>
                    </h3>
                    <span className="text-gray-400">{exp.duration}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Designation:</span>
                        <span className="text-gray-300">{exp.designation}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Experience:</span>
                        <span className="text-gray-300">{exp.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-gray-300">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="space-y-6">
              {[
                {
                  category: "Programming Languages",
                  skills: ["Java (back-end)", "C#", "JavaScript (front-end)", "Object Oriented Programming (OOP)", "JSON", "HTML", "CSS"]
                },
                {
                  category: "Frameworks",
                  skills: ["Spring Boot", "Hibernate (ORM)", "Swagger", "Maven", "Spring MVC", "Spring Security", "Spring JDBC", 
                          "Spring Cloud", "Spring AOP", "Spring IoC", "Blazor", "ASP.NET Framework", "React.JS", "Bootstrap 5"]
                },
                {
                  category: "Databases",
                  skills: ["PostgreSQL", "Cassandra", "MongoDB", "MySQL"]
                },
                {
                  category: "Testing",
                  skills: ["JUnit", "Mockito", "Postman", "Mock MVC"]
                },
                {
                  category: "Methodology",
                  skills: ["Agile", "Sprint", "Test Driven Development (TDD)", "Jenkins", "GitLab CI-CD"]
                },
                {
                  category: "Other Technologies",
                  skills: ["Docker", "Kubernetes", "Git", "GitHub", "JWT", "Web Designing", "Data Structures and Algorithms"]
                }
              ].map((category, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="space-y-8">
              {[
                {
                  name: "CRAS 1.2",
                  company: "Cadmaxx Solution Pvt Ltd (DRDO)",
                  teamSize: 3,
                  duration: "2.5 years",
                  tools: ["STS4.8", "JDK 11", "Eclipse IDE", "Postman", "MySQL Workbench", "Visual Studio Code", "Ubuntu", "PgAdmin", "Linux", "RHEL", "Jira", "IntelliJ", "Tomcat Server", "Sonar Lint", "SonarQube"],
                  description: "Led development of analytics for analyzing Call-Data-Records (CDR) to aid police investigations, enhancing public safety.",
                  responsibilities: [
                    "Implemented core analytics engine for CDR analysis",
                    "Designed and optimized database schema for large-scale data processing",
                    "Integrated security features for sensitive data handling",
                    "Led team meetings and coordinated with stakeholders",
                    "Implemented CI/CD pipeline using Jenkins and GitLab"
                  ]
                },
                {
                  name: "Street Light Management System 7.5",
                  company: "Hynetic Electronics Pvt. Ltd",
                  teamSize: 8,
                  duration: "1.2 years",
                  tools: ["Visual Studio", "Putty", "Postman", "MySQL Workbench", "ASP.NET", "Blazor", "React.js"],
                  description: "Developed comprehensive street light management solution for efficient urban infrastructure management.",
                  responsibilities: [
                    "Developed real-time monitoring dashboard",
                    "Implemented energy optimization algorithms",
                    "Created responsive UI using React and Blazor",
                    "Integrated IoT sensors data processing",
                    "Implemented fault detection system"
                  ],
                  processType: "Agile Scrum"
                },
                {
                  name: "Vaccination Registration and Monitoring Hub",
                  company: "Center for Artificial Intelligence and Robotics (CAIR) DRDO",
                  teamSize: 3,
                  duration: "2.3 years",
                  tools: ["STS4.8", "JDK 11", "Eclipse IDE", "Postman", "MongoDB", "Visual Studio Code", "Ubuntu"],
                  description: "Created a vital platform to streamline COVID-19 vaccination registration, enhancing accessibility and efficiency for citizens.",
                  responsibilities: [
                    "Designed scalable architecture for high-volume registration",
                    "Implemented real-time monitoring system",
                    "Developed automated notification system",
                    "Created admin dashboard for authorities",
                    "Implemented data analytics for vaccination trends"
                  ]
                },
                {
                  name: "Solar Panel Cleaning Brush",
                  company: "Granito Brushes Private Limited",
                  teamSize: 2,
                  duration: "8 Months",
                  description: "Developed innovative solution for efficient solar panel cleaning.",
                  responsibilities: [
                    "Researched optimal brush materials",
                    "Conducted field testing and optimization",
                    "Documented technical specifications",
                    "Coordinated with manufacturing team"
                  ]
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">{project.name}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Company:</span>
                        <span className="text-gray-300">{project.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">Team Size:</span>
                        <span className="text-gray-300">{project.teamSize}</span>
                      </div>
                      {project.duration && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-gray-300">{project.duration}</span>
                        </div>
                      )}
                      {project.processType && (
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">Process:</span>
                          <span className="text-gray-300">{project.processType}</span>
                        </div>
                      )}
                    </div>
                    
                    {project.tools && (
                      <div>
                        <h4 className="text-gray-400 mb-2">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <span key={toolIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 hover:bg-blue-500 hover:text-white transition-colors cursor-default">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="text-gray-400 mb-2">Description:</h4>
                      <p className="text-gray-300">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-gray-400 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Roles Section */}
          <section id="roles" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Roles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Installing MySQL database and creating database schema",
                "Mapping database objects using POJO classes",
                "Developing web applications using Spring Boot",
                "Creating Responsive UI using CSS and Bootstrap V5.0",
                // ... add all responsibilities
              ].map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform"></div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{responsibility}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Educational Qualification
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-400">Bachelor of Engineering</h3>
                  <span className="text-gray-400">Graduated in 2020</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">University:</span>
                    <span className="text-gray-300">Jawaharlal Nehru Technical University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Achievement:</span>
                    <span className="text-gray-300">Completed with Distinction</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">Academic Excellence</span>
                  </div>
                </div>
              </div>

              {/* Additional Certifications or Achievements can be added here */}
              <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Professional Development</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="text-gray-300">Continuous learning and skill enhancement in Full Stack Development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="text-gray-300">Specialized training in Java/J2EE and JavaScript technologies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0"></span>
                    <span className="text-gray-300">Expertise in modern web development frameworks and tools</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Section */}
          <section id="personal" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 mb-16 shadow-2xl border-l-4 border-blue-500 transition-all duration-300 hover:shadow-blue-500/10 hover:border-l-8">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Personal Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">Nationality:</span>
                  <span className="text-gray-300">Indian</span>
                </div> 
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">Address:</span>
                  <span className="text-gray-300">Nandini Layout, Bangalore-560096</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">Languages:</span>
                  <span className="text-gray-300">English, Hindi, Telugu, Kannada</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Scroll to top button - stays at bottom right */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 md:bottom-10 right-4 md:right-10 p-3 md:p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white opacity-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 z-50"
        style={{ opacity: showScrollTop ? 1 : 0 }}
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
