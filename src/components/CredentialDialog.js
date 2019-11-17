import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, { useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {Tooltip} from "@material-ui/core";
import {decrypt} from "../utilities/Encryption";
import MasterPasswordDialog from "./MasterPasswordDialog";


const CredentialDialog = (props) => {
    const [isPasswordShown,setPasswordShown] = useState(false);
    const [copied,setCopied] = useState(false);
    const [credential,setCredential] = useState();
    const dispatch = useDispatch();
    const master_password = useSelector(state => state.master_password);

    let master_password_list = useSelector(state => state.master_password);
    let password = decrypt(props.credential.hash,master_password_list);
    const handleClose = () => {
        props.handleClose();
    };
    if(!password.readable)
    {
        return <MasterPasswordDialog/>
    }
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
