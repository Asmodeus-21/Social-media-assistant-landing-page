import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-4 mb-6">
        {title}
      </h3>
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
};