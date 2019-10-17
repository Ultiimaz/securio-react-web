import Grid from "@material-ui/core/Grid";
import {Button, Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import React, {Fragment, useState} from "react";
import {Add as AddIcon,Lock as LockIcon} from '@material-ui/icons';
import Searchbar from "../../components/Searchbar";
import {Link} from "react-router-dom";
import CredentialDialog from "../../components/CredentialDialog";
import {API} from "../../Networking/API";
import {useSelector} from "react-redux";
const useStyles = makeStyles(theme => ({
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            marginTop: 50,
            maxWidth: 500,
        },
        card: {
            height: 250,
            width: 250,
            margin: 5,

        },
        avatar:{
            left: 'calc(50% - 50px)',
            top: 50,
            marginTop: 'calc(25% - 50px)',
            width: 100,
            height: 100,
            backgroundColor: 'green'
        },
        field: {
            margin: 10
        },
        button: {
            marginTop: 'calc(50% - 25px)',
            marginLeft: 'calc(90% - 50px)'
        },
        credentialName: {
            textOverflow: 'ellipsis',
            textDecoration: 'none'
        }

    }
));

const ListCredential = (props) => {
    const classes = useStyles();
    const [credentials,setCredentials] = useState(useSelector(state=> state.passwords));
    const [showCredential,setShowCredential] = useState();

    const renderCredentials = () => {

        return credentials.map( credential =>
            (<Grid item>
                    <Card className={classes.card} onClick={() => setShowCredential(credential)}  >
                        <CardContent>
                            <Typography noWrap className={classes.credentialName}>{credential.application_name} </Typography>
                            <Avatar image={credential.logo} className={classes.avatar}>{credential.application_name?credential.application_name[0].toUpperCase():null}</Avatar>
                        </CardContent>
                    </Card>
                </Grid>
            ))
    };
    if(showCredential)
    {
        return <CredentialDialog credential={showCredential} handleClose={()=> setShowCredential(null)}/>
    }
    return <Fragment>
        <Searchbar data={credentials} result={filteredCredentials=> setCredentials(filteredCredentials)}/>
        <Grid container>
        {renderCredentials()}
    </Grid></Fragment>
};

export default ListCredential;
