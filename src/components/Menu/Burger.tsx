interface BurgerProps {
  toggleMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({ toggleMenu }) => {
  return (
    <svg viewBox='0 0 120 80' width='30' onClick={toggleMenu}>
      <rect rx='8' width='120' height='15'></rect>
      <rect rx='8' y='30' width='120' height='15'></rect>
      <rect rx='8' y='60' width='120' height='15'></rect>
    </svg>
  );
};

export default Burger;
