import React, {Fragment} from "react";
import {Card, CardContent, Typography, Button, makeStyles,Avatar,Grid} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import {List as ListIcon,Lock as LockIcon} from '@material-ui/icons/';
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
        left: 'calc(50% - 25px)',
        top: 25,
        marginTop: 'calc(25% - 50px)',
        width: 75,
        height: 75,
        backgroundColor: 'green'
    },
    field: {
        margin: 10
    },
    button: {
        marginTop: 'calc(50% - 25px)',
    }

    }));



const Dashboard = props => {

    // const hasMasterPassword = useSelector(state => state.user?state.user.hasMasterPassword: null);
    // if(!hasMasterPassword){
    //     return <InitialStepper/>
    // }
    let administrations = useSelector(state => state.administrations);

    const renderAdministrations = () => {

        return administrations.map( administration =>
            (<Grid item>
                <Card className={classes.card} >
                <CardContent>
                    <Typography>{administration.administration_name} </Typography>
                    <Avatar image={administration.logo} className={classes.avatar}>{administration.administration_name[0].toUpperCase()}</Avatar>
                    <Button variant={"contained"} color={"primary"} className={classes.button} onClick={() => props.history.replace("administration/"+administration.id)}>
                        Ga
                    </Button>
                </CardContent>
            </Card>
                </Grid>
            ))
    };
    const classes = useStyles();
    return (<Fragment>
        <Grid container>
        <Card className={classes.card}>

            <CardContent>

                <Avatar className={classes.avatar}>
                <LockIcon/>
                </Avatar>
                <Button
                    variant={"contained"}
                    className={classes.button}
                    color={"primary"}
                    onClick={() =>props.history.replace("new")}
                >
                    Create New password
                </Button>
            </CardContent>
        </Card>
        <Card className={classes.card}>
            <CardContent>
                <Avatar className={classes.avatar}>
                <ListIcon/>
                </Avatar>
                <Button variant={"contained"} color={"primary"} className={classes.button} onClick={() =>props.history.replace("list")}>List passwords</Button>
            </CardContent>
        </Card>

        {renderAdministrations()}
    </Grid>
    </Fragment>)
};

export default withRouter(Dashboard);
