import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, {useCallback} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";

const MasterPasswordDialog = (props) => {

    const [open, setOpen] = React.useState(true);
    const [master_password,set_master_password] = React.useState();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type:'SET_MASTER_PASSWORD',
            payload: master_password
        });
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Verify</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <DialogContentText>
                          please insert your <b> master password </b>
                        </DialogContentText>
                        <TextField
                            name={"master"}
                            autoFocus
                            margin="dense"
                            onChange={({target})=>set_master_password(target.value)}
                            id="name"
                            label="Master password"
                            type="password"
                            fullWidth
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} type={"submit"} color="primary">
                        Authenticate
                    </Button>
                </DialogActions>

            </Dialog>
    );
};
export default MasterPasswordDialog;
