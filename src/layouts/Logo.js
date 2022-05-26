// import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import LogoNirvoya from "../assets/images/logos/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/" className="logoContainer">
      {/* <LogoDark /> */}
      <img src={LogoNirvoya} alt="nirvoya logo" />
    </Link>
  );
};

export default Logo;
