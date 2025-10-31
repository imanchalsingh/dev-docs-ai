import React from "react";
import { projectsIdeas } from "@/utils/constants";
import { Lightbulb } from "lucide-react";
const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Project Ideas</h1>
        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search by Tech Stack..."
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option value="">Filter by Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        {/* Project Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Idea Card */}
          {projectsIdeas.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#adc178] flex items-center justify-center text-white shadow-md">
                  <Lightbulb size={22} />
                </div>
                <span className="text-[#003049]">{idea.title}</span>
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                Tech Stack:{" "}
                {Array.isArray(idea.TechStack)
                  ? idea.TechStack.join(", ")
                  : idea.TechStack}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                {idea.level}
              </span>
            </div>
          ))}
          {/* Add more project idea cards here */}
        </div>
      </div>
    </div>
  );
};

export default page;
