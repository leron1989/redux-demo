import React from 'react';
import PropTypes from 'prop-types';

const Link = ({active, text, onCLick}) => {

    if(active){
        return <span>{text}</span>
    }

    return(
        <a onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            <span>{text}</span>
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;