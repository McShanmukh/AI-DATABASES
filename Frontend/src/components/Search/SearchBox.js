import React from 'react';

import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
import { black } from 'material-ui/styles/colors';

const baseStyles = {
    open: {
        width: 550,
    },
    closed: {
        width: 200,
    },
    smallIcon: {
        width: 30,
        height: 30
    },
    icon: {
        width: 40,
        height: 40,
        padding: 8,
        // top: 0.5
        bottom : 2
    },
    frame: {
        border: 'inset 1px black',
        borderRadius: 5,
        rightpadding: 1
    }
};

const 
SearchBox = ({isOpen, query, onClick, onSubmit, onQueryUpdate, additionalStyles, frameClass}) => {

    const handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            onSubmit();
        }
    };

    let textStyle = isOpen ? baseStyles.open : baseStyles.closed;
    textStyle = Object.assign(textStyle, additionalStyles ? additionalStyles.text : {});

    const divStyle = Object.assign({}, textStyle, baseStyles.frame, additionalStyles ? additionalStyles.frame : {});
    divStyle.width += baseStyles.icon.width + 5;

    return (
        <div style={divStyle} className={frameClass ? frameClass : ''}>
            <IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onSubmit={() => onSubmit()}  >
                <SearchIcon />
            </IconButton>
            <TextField name='search'
                       style={textStyle}
                       onClick={() => onClick()}
                       value={query}
                       onKeyDown={handleKeyDown}                    
                       onChange={(event, value) => onQueryUpdate(value)}
                       />
        </div>
    );
};



export  default SearchBox;