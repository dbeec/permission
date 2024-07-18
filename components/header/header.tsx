import Image from "next/image";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./../../public/Logo_completo_normal.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="content-burger__menu">
          <MenuIcon />
        </div>

        <h1>Dashboard</h1>

        {/* <Image src={Logo} alt="logo" width={10} height={10} priority={true} /> */}
      </div>
    </>
  );
}
