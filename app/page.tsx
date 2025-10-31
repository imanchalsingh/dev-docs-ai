"use client";
import { useState, useEffect } from "react";
import FactCard from "../components/feature/FactCard";
import { facts, installationGuides } from "../utils/constants";

export default function Home() {
  const [currentFacts, setCurrentFacts] = useState(facts.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...facts].sort(() => 0.5 - Math.random()).slice(0, 3);
      setCurrentFacts(shuffled);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const refreshFacts = () => {
    const shuffled = [...facts].sort(() => 0.5 - Math.random()).slice(0, 3);
    setCurrentFacts(shuffled);
  };

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#003049] mb-4">
          Welcome to <span className="text-[#adc178]">DevResources</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive hub for programming resources, documentation, and
          DSA practice.
        </p>
      </section>

      {/* Animated Facts Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#003049]">
            Programming Facts
          </h2>
          <button
            onClick={refreshFacts}
            className="px-4 py-2 bg-[#adc178] text-white rounded-lg hover:bg-[#9bb067] transition-colors"
          >
            Refresh Facts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentFacts.map((fact, index) => (
            <FactCard key={fact.id} fact={fact} index={index} />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 bg-[#adc178] bg-opacity-10 p-6 rounded-xl">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-[#003049]">150+</div>
          <div className="text-gray-600">Project Ideas</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-[#003049]">50+</div>
          <div className="text-gray-600">Official Docs</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-[#003049]">100+</div>
          <div className="text-gray-600">DSA Problems</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
          <div className="text-3xl font-bold text-[#003049]">100+</div>
          <div className="text-gray-600">Installation Guides</div>
        </div>
      </section>

      {/* Recent Updates */}
      <section>
        <h2 className="text-2xl font-bold text-[#003049] mb-6">
          Recent Updates
        </h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-[#adc178] rounded-full mr-3"></span>
              Added new Rust documentation resources
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-[#adc178] rounded-full mr-3"></span>
              Updated LeetCode problem links
            </li>
            <li className="flex items-center text-gray-700">
              <span className="w-2 h-2 bg-[#adc178] rounded-full mr-3"></span>
              New installation guides added
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
