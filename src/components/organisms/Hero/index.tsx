import React from 'react';

const Hero: React.FC = (): React.ReactElement => (
  <div className="layout flex flex-col items-center justify-center font-inter h-screen hero">
    <h1 className="text-2xl font-extrabold">
      Hi There!
      {' '}
      <br />
      {' '}
      I&apos;m Denny Abbas Zain
    </h1>
    <p className="text-sm">
      I&apos;m a Web Engineer based in Bogor, ID.
    </p>
  </div>
);

export default Hero;
