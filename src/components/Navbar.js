import React from 'react';

import { NavLink } from 'react-router-dom';

import BullLogo from '../img/bull-logo.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    if (document.location.pathname === '/') {
      this.state = {
        color: ''
      };
      console.log('Its true');
    } else if (document.location.pathname !== '/') {
      this.state = {
        color: 'light'
      };
      console.log('All other paths');
    }
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit() {
    if (document.location.pathname === '/') {
      this.setState({
        color: 'light'
      });
      console.log('Its true');
    } else if (document.location.pathname !== '/') {
      this.setState({
        color: 'light'
      });
      console.log('All other paths');
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      let activeClass = 'light';
      if (window.scrollY < 300) {
        activeClass = 'top';
      }
      this.setState({ activeClass });
    });
    console.log('component did mount');
  }
  render() {
    // let navLink = document.querySelector('#AboutPage');

    // console.log(navLink.aria.current);

    return (
      <div>
        <nav
          id="Nav"
          className={`navbar navbar-expand-md navbar-dark fixed-top  
          ${this.state.color}
          ${this.state.activeClass}
          `}
        >
          <a className="navbar-brand" href="/">
            <img
              src={BullLogo}
              width="100px"
              alt=""
              onClick={this.handleSubmit}
            />
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#NavBar"
            aria-controls="NavBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="NavBar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/about"
                  exact
                  onClick={this.handleSubmit}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/services"
                  exact
                  onClick={this.handleSubmit}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/philosophy"
                  exact
                  onClick={this.handleSubmit}
                >
                  Philosophy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/fee"
                  exact
                  onClick={this.handleSubmit}
                >
                  Fee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to="/contact"
                  exact
                  onClick={this.handleSubmit}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  id="ClientLoginBtn"
                  className="nav-link"
                  activeClassName="active"
                  to="/client-login"
                  exact
                  onClick={this.handleSubmit}
                >
                  <i className="fas fa-user-lock"></i> Client Login
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                id="ClientLoginBtn"
                activeClassName="active"
                to="/client-login"
                exact
                onClick={this.handleSubmit}
              >
                <i className="fas fa-user-lock"></i> Client Login
              </NavLink>
            </li>
          </ul> */}
        </nav>
      </div>
    );
  }
}

export default NavBar;
