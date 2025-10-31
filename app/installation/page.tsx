'use client';
import { useState } from 'react';
import { Download, Terminal, CheckCircle, Copy, Search } from 'lucide-react';
import { installationGuides } from '../../utils/constants';

export default function InstallationPage() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const copyToClipboard = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-600 bg-green-50';
      case 'Intermediate':
        return 'text-yellow-600 bg-yellow-50';
      case 'Advanced':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  // 🧠 Filter logic
  const filteredGuides = installationGuides.filter((guide) => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty =
      difficultyFilter === 'All' || guide.difficulty === difficultyFilter;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#003049] mb-2">Installation Guidance</h1>
          <p className="text-gray-600">
            Step-by-step installation guides for various programming tools and frameworks
          </p>
        </div>

        {/* 🔍 Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#adc178] focus:outline-none"
            />
          </div>

          {/* Filter */}
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full md:w-48 border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-[#adc178] focus:outline-none"
          >
            <option value="All">All Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Guides Grid */}
        {filteredGuides.length === 0 ? (
          <p className="text-center text-gray-500 italic">No guides found 😢</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredGuides.map((guide, index) => (
              <div
                key={guide.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Guide Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-[#adc178] bg-opacity-10 rounded-lg">
                        <Download className="h-6 w-6 text-[#003049]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#003049]">
                          {guide.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="px-2 py-1 text-xs font-medium bg-[#003049] bg-opacity-10 text-[#daf397] rounded-full">
                            {guide.category}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(
                              guide.difficulty
                            )}`}
                          >
                            {guide.difficulty}
                          </span>
                          {guide.verified && (
                            <span className="flex items-center text-xs text-green-600">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{guide.description}</p>
                </div>

                {/* Steps */}
                <div className="p-6">
                  <h4 className="font-semibold text-[#003049] mb-4">
                    Installation Steps
                  </h4>
                  <div className="space-y-4">
                    {guide.steps.map((step, stepIndex) => (
                      <div
                        key={stepIndex}
                        className="border-l-4 border-[#adc178] pl-4"
                      >
                        <h5 className="font-medium text-[#003049] mb-1">
                          {stepIndex + 1}. {step.title}
                        </h5>
                        <p className="text-sm text-gray-600 mb-2">
                          {step.description}
                        </p>
                        {step.command && (
                          <div className="relative">
                            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                              {step.command}
                            </pre>
                            <button
                              onClick={() => copyToClipboard(step.command)}
                              className="absolute top-2 right-2 p-1 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                            >
                              {copiedCommand === step.command ? (
                                <CheckCircle className="h-4 w-4 text-green-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-[#003049] mb-4">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <Terminal className="h-8 w-8 text-[#adc178] mb-2" />
              <h3 className="font-semibold text-[#003049] mb-1">
                Command Line Basics
              </h3>
              <p className="text-sm text-gray-600">
                Learn essential command line commands for your operating system
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <Download className="h-8 w-8 text-[#adc178] mb-2" />
              <h3 className="font-semibold text-[#003049] mb-1">
                Package Managers
              </h3>
              <p className="text-sm text-gray-600">
                Understand different package managers like npm, pip, brew, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
