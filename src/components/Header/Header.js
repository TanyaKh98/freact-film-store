import "./Header.css";
import img from "../../assets/icons/img.svg";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <img src={img} alt="icon" />
      Entertainment Store
      <img src={img} alt="icon" />
    </span>
  );
};

export default Header;
