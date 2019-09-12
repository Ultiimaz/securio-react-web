import React, {Fragment} from "react";
import {ListItem as MaterialListItem, List, makeStyles,ListItemAvatar,Avatar} from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/ListItemText";
const ListItem = (props) => {
    console.log(props);
    return <MaterialListItem onClick={() => console.log("test")}>
        <ListItemAvatar>
            <Avatar>
                <ImageIcon />
            </Avatar>
        </ListItemAvatar>
        {/*<ListItemText primary={props.credential.name} secondary={props.credential.userCredential} />*/}
    </MaterialListItem>
}
const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: 100,
        backgroundColor: 'green',
    },
}));
const ListAdministrationCredentials = (props) => {


    const test=  [{id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},
        {id: '1',name:'World of Warcraft',userCredential: 'test@test.nl',password: 'SecretPassword123'},];
    return <Fragment>
        <FixedSizeList height={400} width={360} itemSize={46} itemCount={200}>
            <ListItem data={test}/>
        </FixedSizeList>
    </Fragment>
};
const renderCredentials = (credentials) => {
  return credentials.map(credential => (<ListItem credential={credential}/>));
}

export default ListAdministrationCredentials;
