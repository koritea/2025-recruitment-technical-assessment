"use client";

import { useEffect, useState } from "react";
import { FilterAlt, FilterList } from "@mui/icons-material";
import page from "@/styles/page.module.css";
import interactive from "@/styles/interative.module.css";
import Searchbar from "./Searchbar";

const FilterBar = () => {
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={page.filterbar}>
      {width <= 650 && <Searchbar width="100%" />}
      <div className={interactive.filter}>
        <FilterAlt />
        <h4>Filters</h4>
      </div>
      {width > 650 && <Searchbar width="50%" />}
      <div className={interactive.filter}>
        <FilterList />
        <h4>Sort</h4>
      </div>
    </div>
  );
};

export default FilterBar;
