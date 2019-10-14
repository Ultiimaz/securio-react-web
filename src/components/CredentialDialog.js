import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, {useCallback, useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {Tooltip} from "@material-ui/core";

const CredentialDialog = (props) => {

    const dispatch = useDispatch();
    const handleClose = () => {
        props.handleClose();
    };
    const [isPasswordShown,setPasswordShown] = useState(false);
    const [copied,setCopied] = useState(false);
    return (
        <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Show Password</DialogTitle>
            <DialogContent>
                    <DialogContentText>
                        {props.credential.name}
                    </DialogContentText>
                    <TextField
                        disabled
                        autoFocus
                        value={props.credential.user}
                        margin="dense"
                        label="Username/email"
                        type="text"
                        fullWidth
                    />
                    <Tooltip title={copied?"Copied!":"Click on me to copy"}>
                <TextField
                    disabled
                    autoFocus
                    onClick={() => setCopied(true)}
                    value={props.credential.password}
                    margin="dense"
                    label="Password"
                    type={isPasswordShown?"text":"password"}
                    fullWidth
                />
                    </Tooltip>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>

            </DialogActions>

        </Dialog>
    );
};
export default CredentialDialog;
