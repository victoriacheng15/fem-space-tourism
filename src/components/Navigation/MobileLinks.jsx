import React from 'react';
import { Link } from 'react-router-dom';
import { linkList } from '../../config';

const MobileLinks = () => {
  return (
    <ul className="relative z-20 flex flex-col gap-8 px-8 pt-32">
      {linkList.map((link) => (
        <li key={link.id} className="text-2xl">
          <Link
            id={link.id}
            to={link.href}
            className="font-barlow uppercase tracking-wider text-slate-100"
          >
            <span className="mr-2">{link.span}</span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileLinks;
