import Grid from "@material-ui/core/Grid";
import {Button, Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import React, {Fragment, useState} from "react";
import {Add as AddIcon} from '@material-ui/icons';
import Searchbar from "../../components/Searchbar";
import {Link} from "react-router-dom";
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
    const administrations_sample = [
        {id: 1,name:"super lange administratie naam",icon: 'null'},
        {id: 1,name:"piet",icon: "test"},
        {id: 1,name:"df"},{id: 1,name:"gf"}
        ];
    const [credentials,setCredentials] = useState(administrations_sample);
    const renderCredentials = () => {

        return credentials.map( administration =>
            (<Grid item>
                    <Link to={"administration/"+administration.id} style={{ textDecoration: 'none' }} >
                    <Card className={classes.card}  >
                        <CardContent href={"administration/"+administration.id} >
                            <Typography noWrap className={classes.credentialName}>{administration.name} </Typography>
                            <Avatar image={administration.logo} className={classes.avatar}>{administration.name[0].toUpperCase()}</Avatar>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>
            ))
    };

    return <Fragment>
        <Searchbar data={administrations_sample} result={filteredCredentials=> setCredentials(filteredCredentials)}/>
        <Grid container>
        {renderCredentials()}
    </Grid></Fragment>
};

export default ListCredential;
