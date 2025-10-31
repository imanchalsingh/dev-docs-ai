import Footer from "@/components/layout/Footer";
import { Check, Copy } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 mb-2">
        <h2 className="text-2xl font-bold text-[#003049] mb-2">
          About the Developer
        </h2>
        {/* create a underline */}
        <div className="w-40 h-1 bg-[#adc178] mb-2"></div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-[#003049] mb-4">
            Anchal Singh
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            A passionate developer dedicated to building impactful software
            solutions and sharing knowledge with the programming community.
          </p>
        </div>
        <div className="md:w-1/2 bg-white rounded-lg shadow-lg border border-gray-300 p-6 relative">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
              JavaScript
            </span>
          </div>

          {/* Code with Syntax Colors */}
          <pre className="text-sm font-mono overflow-x-auto bg-gray-50 p-4 rounded border border-gray-200">
            <code className="text-gray-800">
              <span className="text-purple-600">function</span>{" "}
              <span className="text-blue-600">greet</span>() {"{\n"}
              {"  "}
              <span className="text-gray-600">console</span>.
              <span className="text-yellow-600">log</span>(
              <span className="text-green-600">"Hello, World!"</span>);{"\n"}
              {"}"}
              {"\n"}
              <span className="text-blue-600">greet</span>();
            </code>
          </pre>
        </div>
      </section>
      {/* Add About me, My learing, and tech stack as 3 cards */}
      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-500 cursor-pointer border-t-8 border-t-[#003049] hover:border-t-[#adc178] hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold text-[#003049] mb-4">
              About Me
            </h3>
            <p className="text-gray-600">
              I am a passionate developer with a love for creating useful tools
              and resources for the programming community. My journey in tech
              has been driven by curiosity and a desire to learn and share
              knowledge.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-500 cursor-pointer border-t-8 border-t-[#003049] hover:border-t-[#adc178] hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold text-[#003049] mb-4">
              My Learning Journey
            </h3>
            <p className="text-gray-600">
              From mastering the basics of programming to exploring advanced
              frameworks and tools, my learning journey has been filled with
              exciting challenges and rewarding experiences. I continuously seek
              to expand my skill set and stay updated with the latest industry
              trends.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-500 cursor-pointer border-t-8 border-t-[#003049] hover:border-t-[#adc178] hover:shadow-xl hover:scale-105">
            <h3 className="text-xl font-semibold text-[#003049] mb-4">
              Tech Stack
            </h3>
            <p className="text-gray-600">
              I work with a diverse tech stack including JavaScript, TypeScript,
              React, Node.js, and more. I am also proficient in various tools
              and frameworks that enhance development efficiency and project
              management.
            </p>
          </div>
        </div>
      </section>
      {/* Add a get in touch and some social media links as linkedin github instagram and email */}
      <section className="max-w-7xl mx-auto p-6 mb-12">
        <h2 className="text-2xl font-bold text-[#003049] mb-6">Get in Touch</h2>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
          <p className="text-gray-600 mb-4">
            I'm always open to connecting with fellow developers, sharing ideas,
            and exploring new opportunities. Feel free to reach out to me
            through any of the platforms below:
          </p>
          <ul className="flex space-x-6">
            <li>
              <a
                href="mailto:singhanchal159257@gmail.com"
                className="text-[#003049] hover:text-[#adc178] font-semibold"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/imanchalsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] hover:text-[#adc178] font-semibold"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/imanchalsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] hover:text-[#adc178] font-semibold"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/imanchalsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003049] hover:text-[#adc178] font-semibold"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
