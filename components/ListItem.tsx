import React from 'react';

interface ListItemProps {
  icon: React.ReactNode;
  text: string;
  variant?: 'positive' | 'negative';
}

export const ListItem: React.FC<ListItemProps> = ({ icon, text, variant = 'positive' }) => {
  const textColor = variant === 'positive' ? 'text-gray-700' : 'text-red-800';
  const iconColor = variant === 'positive' ? 'text-green-500' : 'text-red-500';

  return (
    <li className="flex items-start">
      <span className={`flex-shrink-0 mt-1 mr-3 w-6 h-6 ${iconColor}`}>
        {icon}
      </span>
      <span className={`text-base font-medium ${textColor}`}>
        {text}
      </span>
    </li>
  );
};