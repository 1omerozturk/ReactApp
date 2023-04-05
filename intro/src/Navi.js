import React from 'react'
import CartSummary from './CartSummary'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { Link } from 'react-router-dom'
export default class Example extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar className='navbar navbar-light' light expand="md">
          <NavbarBrand className='fw-bold' href="/">Nortwind App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className='text-muted fw-bold' to="/form1">Form</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className='text-muted fw-bold' to="/form2">My Account</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/1omerozturk">
                  GitHub
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
