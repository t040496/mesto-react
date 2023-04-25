import React from 'react';

import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <span className={classes.footer__copyright}>&#169; 2020 Mesto Russia</span>
          </footer>
    );
};

export default Footer;