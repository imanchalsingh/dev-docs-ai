"use client";
import React, { useState } from "react";
import { projectsIdeas } from "@/utils/constants";
import { Lightbulb } from "lucide-react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  // Filtered projects logic
  const filteredProjects = projectsIdeas.filter((idea) => {
    const matchesSearch =
      idea.TechStack.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = selectedLevel === "" || idea.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-[#003049]">Project Ideas</h1>
      <div className="w-40 h-1 bg-[#adc178] mb-6"></div>

      {/* Search and Filter Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by Tech Stack or Title..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#adc178] focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#adc178] focus:border-transparent"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">Filter by Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Project Ideas Grid */}
      {filteredProjects.length === 0 ? (
        <p className="text-gray-500 text-center">No projects found 😅</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((idea) => (
            <div
              key={idea.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-500 cursor-pointer border-t-8 border-t-[#003049] hover:border-t-[#adc178] hover:shadow-xl hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#adc178] flex items-center justify-center text-white shadow-md">
                  <Lightbulb size={22} />
                </div>
                <span className="text-[#003049]">{idea.title}</span>
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Tech Stack:</strong>{" "}
                {Array.isArray(idea.TechStack)
                  ? idea.TechStack.join(", ")
                  : idea.TechStack}
              </p>

              <span
                className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${
                  idea.level === "Beginner"
                    ? "bg-green-100 text-green-700"
                    : idea.level === "Intermediate"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {idea.level}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
