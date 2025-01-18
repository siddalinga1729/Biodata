"use client"; // Mark the file as a Client Component

import Image from "next/image";
import Head from "next/head"; // Add this import to use the Head component
// @ts-ignore
import { MailIcon } from "@heroicons/react/solid";
import { BsLinkedin } from "react-icons/bs"; 

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/dev.avif" />
      </Head>
      <div className="bg-gray-900 text-white min-h-screen p-10 font-sans relative transform transition-all hover:scale-100">
        {/* View Resume Button at Top Right */}
        <section className="absolute top-10 right-10">
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-xl transform transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-2xl text-xl"
          >
            View Resume
          </button>
        </section>

        {/* Header Section */}
        <header className="text-center mb-16 pb-12">
        <div className="relative w-48 h-48 mx-auto mb-6">
    <Image
      src="/Siddu.jpg"  // Path to the image inside the public folder
      alt="Siddalingappa K"
      width={192}
      height={192}
      className="rounded-full object-cover w-full h-full"
    />
  </div>
          <h1 className="text-5xl font-extrabold mb-4">Siddalingappa K</h1>
          <p className="text-xl font-medium text-gray-400 mb-6">Java Full Stack Developer</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:siddalinga1729@gmail.com" 
              className="hover:text-yellow-400 text-xl flex items-center space-x-2 transform transition-all hover:scale-110"
            >
              <MailIcon className="w-6 h-6 text-yellow-400 transform transition-all hover:scale-110" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/sidda-linga-842a781b8"
              target="_blank"
              className="hover:text-yellow-400 text-xl flex items-center space-x-2 transform transition-all hover:scale-110"
            >
              <BsLinkedin className="h-6 w-6 text-yellow-400 transform transition-all hover:scale-110" />
              <span>LinkedIn</span>
            </a>
          </div>
          <button
            onClick={() => window.open('mailto:siddalinga1729@gmail.com')}
            className="bg-yellow-400 text-gray-900 py-3 px-8 mt-6 rounded-full shadow-xl transform transition-all hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl text-xl"
          >
            Get in Touch
          </button>
        </header>

        {/* Summary Section */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Summary</h2>
          <p className="text-gray-400">
            Java Full Stack Developer with approximately 3 years and 5 months of professional IT experience as a Software Developer, specializing in Java/J2EE and JavaScript technologies. Proficient in the complete project life cycle, including design, analysis, development, integration, and deployment of application software in web-based environments and client/server architectures. Strong expertise in building frameworks using HTML, CSS, Bootstrap, Spring Boot, ASP.NET, Blazor, and Microservices Architecture.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
          
          {/* Hynetic Electronics */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Software Developer - Hynetic Electronics Pvt. Ltd</h3>
            <p className="text-gray-400">Nov 2023 - Oct 2024 (1.2 years) | Location: Bangalore</p>
            <p className="text-gray-400">Developed solutions for Street Light Management System using tools like Visual Studio, Postman, and MySQL Workbench.</p>
            <a 
              href="https://hynetic.com/" 
              target="_blank"
              className="text-yellow-400 hover:underline transition-all duration-300"
            >
              Company Website
            </a>
          </div>

          {/* Cadmaxx Solution */}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold">Software Developer - Cadmaxx Solution Pvt Ltd (DRDO)</h3>
            <p className="text-gray-400">April 2021 - Nov 2023 (2.5 years) | Location: Bangalore</p>
            <p className="text-gray-400">Led development of analytics for Call-Data-Records (CDR) to aid police investigations, enhancing public safety.</p>
            <a 
              href="https://cadmaxx.com/" 
              target="_blank"
              className="text-yellow-400 hover:underline transition-all duration-300"
            >
              Company Website
            </a>
          </div>

          {/* Granito Brushes */}
          <div>
            <h3 className="text-2xl font-semibold">Production Assistant - Granito Brushes Private Limited</h3>
            <p className="text-gray-400">Nov 2020 - March 2021 (8 months) | Location: Doddaballapur</p>
            <a 
              href="https://www.granitobrushes.in/" 
              target="_blank"
              className="text-yellow-400 hover:underline transition-all duration-300"
            >
              Company Website
            </a>
          </div>
        </section>

        {/* Educational Qualification */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Educational Qualification</h2>
          <p className="text-gray-400">
            Completed Engineering from Jawaharlal Nehru Technical University with Distinction in 2020.
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Programming Languages: Java, C#, JavaScript, HTML, CSS</li>
            <li>Frameworks: Spring Boot, Hibernate, Swagger, Blazor, ASP.NET, React.JS, Bootstrap 5</li>
            <li>Databases: PostgreSQL, Cassandra, Mongo DB, MySQL</li>
            <li>Testing: JUnit, Mockito, Postman, Mock MVC</li>
            <li>Methodology: Agile, Sprint, TDD, Jenkins, GitLab CI-CD</li>
            <li>Other: Docker, Kubernetes, React.JS, Git, GitHub, JWT</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>

          {/* CRAS 1.2 */}
          <div className="mb-6">
            <h3 className="font-semibold text-2xl">CRAS 1.2</h3>
            <p className="text-gray-400">Company: Cadmaxx Solution Pvt Ltd (DRDO)</p>
            <p className="text-gray-400">Tools Used: STS4.8, JDK 11, Eclipse IDE, Postman, MySQL Workbench, and more.</p>
            <p className="text-gray-400">Project Description: Led development of analytics for analyzing Call-Data-Records (CDR) to aid police investigations, enhancing public safety.</p>
          </div>

          {/* Street Light Management */}
          <div className="mb-6">
            <h3 className="font-semibold text-2xl">Street Light Management System 7.5</h3>
            <p className="text-gray-400">Company: Hynetic Electronics Pvt. Ltd</p>
            <p className="text-gray-400">Tools Used: Visual Studio, Postman, MySQL Workbench, and more.</p>
            <p className="text-gray-400">Duration: 1.2 years | Process Type: Agile Scrum</p>
            <p className="text-gray-400">Project Description: Optimized street light management for Hynetic Electronics Pvt. Ltd.</p>
          </div>

          {/* Vaccination Registration */}
          <div className="mb-6">
            <h3 className="font-semibold text-2xl">Vaccination Registration and Monitoring Hub</h3>
            <p className="text-gray-400">Company: CAIR DRDO</p>
            <p className="text-gray-400">Tools Used: STS4.8, JDK 11, MongoDB, Visual Studio Code, Ubuntu, and more.</p>
            <p className="text-gray-400">Project Description: Streamlined COVID-19 vaccination registration with real-time updates for efficient monitoring by authorities.</p>
          </div>

          {/* Solar Panel Cleaning Brush */}
          <div>
            <h3 className="font-semibold text-2xl">Solar Panel Cleaning Brush</h3>
            <p className="text-gray-400">Company: Granito Brushes Private Limited</p>
            <p className="text-gray-400">Project Description: Developed a solution for cleaning solar panels with efficient brushes.</p>
          </div>
        </section>

        {/* Personal Details Section */}
        <section className="bg-gray-800 shadow-xl rounded-lg p-8 mb-16 transform transition-all hover:shadow-2xl hover:bg-gray-700">
          <h2 className="text-3xl font-semibold mb-6">Personal Details</h2>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Nationality: Indian</li>
            <li>Present Address: Nandini Layout, Bangalore-560096</li>
            <li>Languages Known: English, Hindi, Telugu, Kannada</li>
          </ul>
        </section>
      </div>
    </>
  );
}
