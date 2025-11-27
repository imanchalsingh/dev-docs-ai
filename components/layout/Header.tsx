'use client';
import { CodeXml, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            type="button"
            className="lg:hidden text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 mx-4">
        <p className="text-[#003049] font-bold text-md">TECH ENTHUSIAST - Turning Ideas into Code.</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-[#adc178] rounded-full flex items-center justify-center border-4-[#003049] border">
            <span className="text-[#003049] font-bold text-sm"><CodeXml/></span>
          </div>
        </div>
      </div>
    </header>
  );
}