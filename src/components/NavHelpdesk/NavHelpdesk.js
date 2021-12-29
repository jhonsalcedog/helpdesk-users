import React from 'react';

import Nav from 'emerald-ui/lib/Nav';
import Navbar from 'emerald-ui/lib/Navbar';
import Container from 'emerald-ui/lib/Container';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavHelpdesk.css';

const NavHelpdesk = () => {
  return (
    <header className="helpdesk-header-space">
      <Navbar breakAt="xs" inverse className="helpdesk-nav-bg">
        <Container>
          <Navbar.Brand>
            <h2>
              <Link to="/">Helpdesk</Link>
            </h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

Nav.propTypes = {};

export default NavHelpdesk;
