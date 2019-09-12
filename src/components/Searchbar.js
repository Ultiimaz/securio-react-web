import {TextField} from "@material-ui/core";
import React, {useState} from "react";

const Searchbar = (props) => {
    const [searchResult, setSearchResult] = useState();

    const changeSearchValue = (event) => {
        console.log(event.target.value);
        setSearchResult(event.target.value);
        // eslint-disable-next-line array-callback-return
        // console.log(props.data);
        // console.log(props.data);
props.result(props.data.filter(object => object.name.includes(event.target.value)));
    };
    return <TextField value={searchResult} onChange={changeSearchValue}/>
};

export default Searchbar;
