import React from 'react';
// import PropTypes from "prop-types"

// ---------------------------------------------------------

import { header } from './styles.module.scss';

// ---------------------------------------------------------

const Header = () => (
  <header className={header}>
    This is the header.
    <hr />
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
