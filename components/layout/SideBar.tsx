"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BookOpen,
  Download,
  Code2,
  ChevronLeft,
  CircleUserIcon,
  Image,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Official Docs", href: "/docs", icon: BookOpen },
  { name: "Installation", href: "/installation", icon: Download },
  { name: "DSA Problems", href: "/dsa", icon: Code2 },
  { name: "About Developer", href: "/aboutdev", icon: CircleUserIcon },
  { name: "Project Ideas", href: "/projectsideas", icon: Image },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#003049] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 bg-[#003049] border-b border-[#003049]">
          <span className="text-white font-bold text-xl">DevResources</span>
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-2 transition-colors ${
                  isActive
                    ? "bg-[#adc178] text-[#003049]"
                    : "text-gray-300 hover:bg-[#003049] hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
