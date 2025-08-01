import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="w-10 h-10 bg-gradient-to-br from-[#00ADB5] to-[#007bff] rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-200 hover:scale-105">
      <div className="text-white font-bold text-lg">
        SB
      </div>
    </div>
  );
};

export default Logo;