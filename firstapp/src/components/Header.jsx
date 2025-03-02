import Logo from "../assets/react.svg";
import "../css/Header.css";
export const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt="React Logo" />
      <a href="/">Home</a>
    </header>
  )
}
