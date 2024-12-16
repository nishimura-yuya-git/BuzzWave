import React from 'react';

interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}

export function AdvantageCard({ icon, title, description, number }: AdvantageCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-sm text-blue-600 font-semibold mb-2">{number}.</div>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}