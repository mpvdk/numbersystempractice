'use client';

import Link from 'next/link';
import { useState } from 'react';
import Burger from './Menu/Burger';
import MobileMenu from './Menu/MobileMenu';

interface HeadingProps {}

const Header: React.FC<HeadingProps> = ({}) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    if (menuActive) setMenuActive(false);
    else setMenuActive(true);
  };

  return (
    <header className='flex flex-row justify-between p-4 items-center'>
      <span>NubmerSystemPractice</span>
      <Burger toggleMenu={toggleMenu} />
      {menuActive && <MobileMenu closeMobileMenu={() => setMenuActive(false)} />}
    </header>
  );
};

export default Header;
