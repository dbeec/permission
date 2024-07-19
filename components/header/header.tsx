"use client";
import Image from "next/image";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./../../public/Logo_completo_normal.svg";
import ProfileMenu from "../profile-menu/profile-menu";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="content-burger__menu">
          <MenuIcon />
        </div>

        <div className="content-title__page">
          <h1>Dashboard</h1>
        </div>

        <div className="content-profile__menu">
          <ProfileMenu />
        </div>

        {/* <Image src={Logo} alt="logo" width={10} height={10} priority={true} /> */}
      </div>
    </>
  );
}
