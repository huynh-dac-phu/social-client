import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteScream } from "../../redux/actions/dataAction";
//Component
import MyButton from "../../util/MyButton";
//MUI
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
//Icon
import DeleteOutline from "@material-ui/icons/DeleteOutline";

const DeleteScream = props => {
  const {
    iD,
    deleteScream,
    userHandle,
    user: {
      authenticated,
      credentials: { handle }
    }
  } = props;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteScream(iD);
    handleClose();
  };

  return (
    <>
      {authenticated && userHandle === handle && (
        <MyButton title="Delete Scream" onClick={handleClickOpen}>
          <DeleteOutline color="secondary" />
        </MyButton>
      )}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Are you want to delete the scream ?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDelete}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProp = state => ({
  user: state.user
});

const mapDispatchToProp = { deleteScream };

export default connect(mapStateToProp, mapDispatchToProp)(DeleteScream);
