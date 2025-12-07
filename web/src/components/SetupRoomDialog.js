import React from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
} from "@mui/material";

const SetupRoomDialog = ({ values = {}, onCloseHandler }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCloseHandler();
  };

  const dialogContent = (
    <Box sx={{ p: 1 }}>
      <Typography sx={{ mt: 2 }} variant="h6">
        Dialog content
      </Typography>
    </Box>
  );

  return (
    <div>
      <Button
        variant="contained"
        sx={{ mr: 1 }}
        color="secondary"
        onClick={handleClickOpen}
      >
        Click button to open dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Close dialog
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SetupRoomDialog;
