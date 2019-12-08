import React from 'react';

import Transparent from '../img/transparent.jpg';
import Mutual from '../img/mutualfunds.jpg';
import Risk from '../img/risk.jpg';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Cover-Page">
          <div className="container middle">
            <h1 id="Logo">
              <span className="flux">Armis</span>{' '}
              <span className="neon">Financial</span>
            </h1>
            <h2>
              Are You
              <span
                className="txt-type"
                data-wait="1000"
                data-words='[" Paying Too Much In Advisor Fees?", "  Not Sure Which Investments Are Right For You?", " Invested In Mutual Funds?", " Worried About The Market?", " Planning For Your Financial Future?" ]'
              ></span>
            </h2>
            <a className="btn learnBtn" href="/about">
              Learn More
            </a>
          </div>
        </div>
        <div id="sec1">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={Transparent} alt="" />
              </div>
              <div className="col-md-6">
                <p>
                  Being <span>Transparent</span> Is A Must But Being{' '}
                  <span>Straightforward</span> Is Valuable
                </p>
                <a href="/fee" className="btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  The Ugly <span>Truth</span> behind <span>Mutual Funds</span>{' '}
                  And How They <span>Affect</span> Your <span>Portfolio</span>
                </p>
                <a href="/philosophy" className="btn">
                  Learn More
                </a>
              </div>
              <div className="col-md-6 order-md-last order-first">
                <img src={Mutual} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={Risk} alt="" />
              </div>
              <div className="col-md-6">
                <p>
                  Your Real <span>Risk Profile</span> And How To{' '}
                  <span>Gauge</span> It.
                </p>
                <a href="/risk-profile" className="btn">
                  Take Quiz
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <h1>Fees That Make Sense</h1>
            <a href="/fees" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
