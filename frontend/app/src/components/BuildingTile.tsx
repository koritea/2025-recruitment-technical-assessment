"use client";

import page from "@/styles/page.module.css";
import { useEffect, useState } from "react";

const BuildingTile = ({
  name,
  code,
  rooms,
}: {
  name: string;
  code: string;
  rooms: number;
}) => {
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url('/assets/${code}.webp')` }}
      className={page.tile}
    >
      <div className={page.overlay}></div>
      <div className={page["rooms-available"]}>
        <div className={page.available} />
        <p>
          {rooms} {width > 650 ? "rooms available" : ` / ${rooms}`}
        </p>
      </div>
      <div className={page["building-name"]}>{name}</div>
    </div>
  );
};

export default BuildingTile;
