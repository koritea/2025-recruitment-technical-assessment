"use client";

import { useState } from "react";
import Image from "next/image";
import { DarkMode, Map, Search, Window } from "@mui/icons-material";
import page from "@/styles/page.module.css";
import interactive from "@/styles/interative.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={page.navbar}>
      <div className={page.freerooms}>
        <Image
          src={
            open
              ? "/assets/freeRoomsLogo.png"
              : "/assets/freeroomsDoorClosed.png"
          }
          alt="Freerooms logo"
          height={50}
          width={50}
          onClick={() => setOpen(!open)}
          className={interactive.logo}
        />
        <h1 className={page.title}>Freerooms</h1>
      </div>
      <div className={interactive["btn-grp"]}>
        <button className={interactive["icon-btn"]}>
          <Search />
        </button>
        <button className={interactive["icon-btn"]}>
          <Window />
        </button>
        <button className={interactive["icon-btn"]}>
          <Map />
        </button>
        <button className={interactive["icon-btn"]}>
          <DarkMode />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
