import Link from 'next/link';

interface MobileMenuProps {
  closeMobileMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMobileMenu }) => {
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-white' onClick={closeMobileMenu}>
      <svg fill='#000000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 92.132 92.132' className='absolute w-14 h-14 left-1/2 bottom-32 -translate-x-1/2'>
        <path d='M2.141,89.13c1.425,1.429,3.299,2.142,5.167,2.142c1.869,0,3.742-0.713,5.167-2.142l33.591-33.592L79.657,89.13 c1.426,1.429,3.299,2.142,5.167,2.142c1.867,0,3.74-0.713,5.167-2.142c2.854-2.854,2.854-7.48,0-10.334L56.398,45.205 l31.869-31.869c2.855-2.853,2.855-7.481,0-10.334c-2.853-2.855-7.479-2.855-10.334,0L46.065,34.87L14.198,3.001 c-2.854-2.855-7.481-2.855-10.333,0c-2.855,2.853-2.855,7.481,0,10.334l31.868,31.869L2.143,78.795 C-0.714,81.648-0.714,86.274,2.141,89.13z'></path>
      </svg>
      <nav className='flex flex-col items-center justify-center gap-6 text-3xl'>
        <Link href='/account'>account</Link>
        <Link href='/numbers'>numbers</Link>
        <Link href='/practice'>practice</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
