import React from 'react';

var Footer = function() {
    var year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright &#169; {year}</p>
        </footer>
    );
}

export default Footer;