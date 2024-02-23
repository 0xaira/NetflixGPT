import logo from '../assets/gptlogo.png';

const Header = () => {
  return (
    
    <div className="absolute px-8 py-2  z-10 w-[200px]">
      <img
        src={logo}
        alt=""
        className="absolute  mt-6"
      />
    </div>
  );
};
export default Header;