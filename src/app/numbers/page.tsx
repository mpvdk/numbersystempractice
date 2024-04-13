import Link from 'next/link';

interface NumbersProps {}

const Numbers: React.FC<NumbersProps> = ({}) => {
  return (
    <>
      <Link href='/numbers/singles'>0 - 9</Link>
      <Link href='/numbers/doubles'>00 - 99</Link>
    </>
  );
};

export default Numbers;
