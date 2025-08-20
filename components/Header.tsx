import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coffee-accent to-amber-400">
        MoodMix
      </h1>
      <p className="mt-2 text-lg text-coffee-light">
        Craft the perfect sonic atmosphere for your audio.
      </p>
    </header>
  );
};

export default Header;