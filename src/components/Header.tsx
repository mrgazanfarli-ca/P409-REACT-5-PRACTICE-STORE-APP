import React from 'react';
import {
    Navbar,
    Nav,
    NavbarToggler,
    NavItem,
    Collapse,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = React.useCallback(() => setIsOpen(prevValue => !prevValue), []);

    return (
        <Navbar color="light" light expand="md">
            <NavLink className="navbar-brand" to="/">reactstrap</NavLink>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink to="/categories" activeClassName="active" className="nav-link">Categories</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
