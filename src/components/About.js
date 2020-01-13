import React from 'react';
import Armis from '../img/armis3.png';

import Firm from './Firm';
import Advisor from './Advisor';
import Process from './Process';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h1: 'Comprehensive Financial Planning',
      h2: 'From The Capitol City'
    };
    this.advisorClick = this.advisorClick.bind(this);
    this.firmClick = this.firmClick.bind(this);
    this.processClick = this.processClick.bind(this);
  }
  advisorClick() {
    this.setState({
      h1: 'Providing Customized Services',
      h2: 'From Boomers To Millennials'
    });
  }
  firmClick() {
    this.setState({
      h1: 'Comprehensive Financial Planning',
      h2: 'From The Capitol City'
    });
  }
  processClick() {
    this.setState({
      h1: 'Our Approach To Creating &',
      h2: 'Implementing Financial Plans'
    });
  }
  render() {
    return (
      <div id="About">
        <div className="container">
          <ul className="nav justify-content-center " id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                onClick={this.firmClick}
              >
                Firm
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                onClick={this.advisorClick}
              >
                Advisor
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
                onClick={this.processClick}
              >
                Process
              </a>
            </li>
          </ul>
        </div>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <Firm />
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Advisor />
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <Process />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
