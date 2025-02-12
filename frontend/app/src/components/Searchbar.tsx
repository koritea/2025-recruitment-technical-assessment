import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";

const Searchbar = ({ width }: { width: string }) => {
  return (
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
        width: width,
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ef7021",
          },
        },
      }}
    />
  );
};

export default Searchbar;
