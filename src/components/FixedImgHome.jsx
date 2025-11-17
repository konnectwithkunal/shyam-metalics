import React from 'react';

const FixedImgHome = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/groupimg.jpg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
};

export default FixedImgHome;