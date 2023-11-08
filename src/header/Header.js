import React from 'react';
import PropTypes  from 'prop-types';

function Header({title}) {
    return (
        <div>
            <h3>{title} ❄</h3>
        </div>
    );
}

//Documentacion 
/*Header.PropTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string,
        char: PropTypes.number,
    }).isRequired,
}*/

export default Header;