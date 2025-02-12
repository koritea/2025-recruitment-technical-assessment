import { FilterAlt, FilterList, Search } from "@mui/icons-material";
import page from "@/styles/page.module.css";
import interactive from "@/styles/interative.module.css";
import { InputAdornment, TextField } from "@mui/material";

const FilterBar = () => {
  return (
    <div className={page.filterbar}>
      <div className={interactive.filter}>
        <FilterAlt />
        <h4>Filters</h4>
      </div>
      <TextField
        variant="outlined"
        placeholder="Search for a building..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: { height: "45px" },
          },
        }}
        sx={{
          width: "50%",
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ef7021",
            },
          },
        }}
      />
      <div className={interactive.filter}>
        <FilterList />
        <h4>Sort</h4>
      </div>
    </div>
  );
};

export default FilterBar;
