"use client";
import { useState, useEffect } from "react";
import { FactCard as FactCardType } from "../../types";

interface FactCardProps {
  fact: FactCardType;
  index: number;
}

export default function FactCard({ fact, index }: FactCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-gray-200 p-6 transform transition-all duration-500 cursor-pointer border-t-8 border-t-[#003049] hover:border-t-[#adc178] hover:shadow-xl hover:scale-105`}
    >
      <div className="flex items-center mb-4">
        <span className="font-bold w-10 h-10 flex items-center justify-center rounded-full bg-[#adc178] text-[#003049] text-lg shadow-md">
          {fact.title.charAt(0).toUpperCase()}
        </span>

        <div className="ml-4">
          <h3 className="font-semibold text-[#003049] text-lg">{fact.title}</h3>
          <span className="text-sm text-[#adc178] font-medium">Fun Facts</span>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">{fact.description}</p>
      <div className="mt-4 pt-4 border-t border-gray-100"></div>
    </div>
  );
}
