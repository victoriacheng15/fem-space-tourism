import React from 'react';
import { Github, Twitter, Linkedin } from './Socials';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-2 text-slate-100">
      <div className="mx-auto flex w-11/12 items-center justify-center">
        <p className="flex items-center gap-2">
          Coded by Victoria | <Github /> | <Linkedin /> | <Twitter />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
