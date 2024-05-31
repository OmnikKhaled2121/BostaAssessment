import React from "react";
import { Dialog, DialogContent, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Modal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          variant="outlined"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
