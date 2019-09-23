import React, {useEffect, useState} from "react";
import ListAdministrationCredentials from "./ListAdminstrationCredential";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const getAdministrationData = (id) => {

};
const AdministrationPage = (props) => {
    const [administration,setAdministration] = useState();
    useEffect(() => {
        setAdministration(getAdministrationData(props.connection));
    },[props.match.params.administration]);
    getAdministrationData(props.match.params.administration);
    return <Grid container>
        <Grid item xs>
            <Card>
                <ListAdministrationCredentials/>
            </Card>
        </Grid>
    </Grid>
};

export default AdministrationPage
