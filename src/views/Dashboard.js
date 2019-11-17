import React, {Fragment} from "react";
import {Card, CardContent, Typography, Button, makeStyles,Avatar,Grid} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import {List as ListIcon,Lock as LockIcon} from '@material-ui/icons/';
import {useSelector} from "react-redux";
import CardMedia from "@material-ui/core/CardMedia";
import InitialStepper from "./InitialSteps/InitialStepper";
const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 50,
        maxWidth: 500,
    },
    card: {
        // media query?
        height: 250,
        width: 250,
        margin: 5,
    },
    avatar:{
        left: 'calc(50% - 75px)',
        width: 150,
        height: 150,
    },
    field: {
        margin: 10
    },
    button: {
        marginTop: 'calc(50% - 25px)',
    }

    }));



const Dashboard = props => {

    const hasPasswords = useSelector(state => state.passwords);
    let administrations = useSelector(state => state.administrations);
    const classes = useStyles();
    if(hasPasswords.length === 0){
        return <InitialStepper/>
    }

    const renderAdministrations = () => {

        return administrations.map( administration =>
            (<Grid item>
                <Card className={classes.card} >
                    <CardContent>
                        <Avatar src={administration.logo} className={classes.avatar}>
                            {administration.administration_name[0].toUpperCase()}
                        </Avatar>

                        <Typography>{administration.administration_name} </Typography>
                    </CardContent>

                </Card>
            </Grid>
            ))
    };
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
