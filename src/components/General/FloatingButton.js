import React, { useState } from 'react';
import { Fab, Snackbar } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: '#8600CE', // Add this line
    '&:hover': {
      backgroundColor: '#6e00a8', // Add this line for hover effect
    },
  },
}));

const FloatingButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Soon you will be able to add custom prompts and questions for AI to answer based on the previous candidate answers."
      />
    </div>
  );
};

export default FloatingButton;
