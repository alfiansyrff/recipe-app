'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <a href='/' className={pathName === '/' ? styles.active : ''}>Beranda</a>
        
            </li>
            <li>
              <a>Asal Masakan</a>
              <ul className="p-2">
                <li><a>Jepang</a></li>
                <li><a>Malaysia</a></li>
                <li><a>Italia</a></li>
              </ul>
            </li>
            <li>
                <a className={pathName === '/popular' ? styles.active : ''}>Populer</a>
        
            </li>
          </ul>
        </div>
          <a className="btn btn-ghost text-xl">ResepKu</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
              <a href='/' className={pathName === '/' ? styles.active : ''}>Beranda</a>
          </li>
          <li>
            <details>
              <summary>Asal Masakan</summary>
              <ul className="p-2">
                <li><a>Jepang</a></li>
                <li><a>Malaysia</a></li>
                <li><a>Italia</a></li>
              </ul>
            </details>
          </li>
          <li>
              <a href='/popular' className={pathName === '/popular' ? styles.active : ''}>Populer</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-md btn-outline btn-info">Masuk</a>
        <a className="ml-3 btn btn-md btn-info">Daftar</a>
      </div>
    </div>
  );
};

export default Navbar;
