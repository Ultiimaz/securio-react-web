import React, {useState} from "react";
import {Input} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const renderAdministrations = props =>{
    props.administrations.map(administration => (
        <MenuItem value={administration.id}>{administration.administration_name}</MenuItem>
    ));
}
const NewPassword = props => {
    const [displayName,setDisplayName] = useState("");
    const [administration,setAdministration] = useState('Administration 1');
    return <div> creating password for: {props.match.params.administration_id}
        <Input
            placeholder={"Applicatie naam"}
            value={displayName}
            required
            onChange={event => setDisplayName(event.target.value)}
        />
        <Input
            placeholder={"Applicatie gebruikersnaam"}
            value={displayName}
            onChange={event => setDisplayName(event.target.value)}
        />
        <Input
            placeholder={"Applicatie wachtwoord"}
            value={displayName}
            onChange={event => setDisplayName(event.target.value)}
        />
        {props.isAdministration?
        <Select
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
    </div>
}

export default NewPassword;
