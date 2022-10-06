import React from 'react';
import { Link } from 'react-router-dom';
import { linkList } from '../../config';

const Links = () => {
  return (
    <ul className="hidden h-full w-auto items-center gap-9 bg-slate-100/20 px-12 md:flex lg:px-32">
      {linkList.map((link) => (
        <li key={link.id} className="h-full text-lg">
          <Link
            data-link
            to={link.href}
            className={`link-hover relative flex h-full items-center font-barlow uppercase tracking-wider text-slate-100 content-none ${
              link.name === 'home' ? 'link-active' : ''
            }`}
          >
            <span className="mr-2 hidden bpCustom:inline-block">
              {link.span}
            </span>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
