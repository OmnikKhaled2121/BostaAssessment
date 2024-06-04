import { useState, useContext } from "react";
import Popover from "@mui/material/Popover";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import { ShipmentContext } from "../context/Shipment";
import useDebounce from "../Hooks/useDebounce";

function TrackYourShip() {
  const { t } = useTranslation();
  const content = t("Navbar.trackYourShip");
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const { setShipmentID } = useContext(ShipmentContext);
  const debouncedSearch = useDebounce((val) => {
    setShipmentID(val);
  }, 1000);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span style={{ color: "red", cursor: "pointer" }} onClick={handleClick}>
        {content}
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <TextField
          label={content}
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  handleClose();
                }}
              >
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Popover>
    </div>
  );
  
}

export default TrackYourShip;
