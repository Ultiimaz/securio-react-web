import React, {Fragment, useState} from "react";
import {Input} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {API} from "../../Networking/API";
import CryptoJS from 'crypto-js';
import {useSelector} from "react-redux";


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 50,
        maxWidth: 500,
    },
    field: {
        margin: 10
    }
}));

const renderAdministrations = props =>{
    props.administrations.map(administration => (
        <MenuItem value={administration.id}>{administration.administration_name}</MenuItem>
    ));
};
const NewPassword = props => {
    const classes = useStyles();
    const [applicationDisplayName,setApplicationDisplayName] = useState("");
    const [applicationUser,setApplicationUser] = useState("");
    const [administration,setAdministration] = useState('Administration 1');
    const [applicationPassword,setApplicationPassword] = useState("");
    const [applicationLogo,setApplicationLogo] = useState();
    const [breached,setBreached] = useState();
    const master_password = useSelector(state => state.master_password);
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            user: applicationUser,
            password: applicationPassword,
            readable: true
        };
        let encryption = CryptoJS.AES.encrypt(JSON.stringify(data),master_password).toString();
        console.log(encryption);

        console.log(CryptoJS.AES.decrypt(encryption,master_password).toString(CryptoJS.enc.Utf8));

        API.newPassword(applicationDisplayName,encryption)
            .then(response => {

            }).catch(error =>{
            // return error screen
        });

    };
    return <form onSubmit={handleSubmit}>
        <Paper className={classes.paper} >

        <Grid container direction={"column"}>
            <Grid item>
                <Input
                    error={applicationDisplayName.length <= 4 && applicationDisplayName !== ""}
                    required
                    className={classes.field}
                    placeholder={"Applicatie naam"}
                    value={applicationDisplayName}
                    onChange={event => setApplicationDisplayName(event.target.value)}
                />
            </Grid>
        <Grid>
        <Input
            required
            className={classes.field}
            placeholder={"Applicatie gebruikersnaam"}
            value={applicationUser}
            onChange={event => setApplicationUser(event.target.value)}
        />
        </Grid>
            <Grid item>
        <Input
            required
            className={classes.field}
            placeholder={"Applicatie wachtwoord"}
            value={applicationPassword}
            onChange={event => setApplicationPassword(event.target.value)}
        />
            </Grid>
        {props.hasAdministration?
        <Select
            className={classes.field}
            value={administration}
            onChange={event => setAdministration(event.target.value)}
            inputProps={{
                name: 'age',
                id: 'age-simple',
            }}
        >
            {
                renderAdministrations(props)
            }
        </Select>
        : null}
        </Grid>
            <Grid item>
                <Button onClick={handleSubmit} variant={"contained"} color={"primary"}>Verstuur</Button>
            </Grid>
        </Paper>
    </form>
}

export default NewPassword;
