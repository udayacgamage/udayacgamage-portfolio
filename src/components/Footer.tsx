import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-white/70 dark:bg-black/60 backdrop-blur-md border-t border-gray-200/60 dark:border-white/10">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Udaya Chathuranga. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
