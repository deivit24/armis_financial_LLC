import React from 'react';
import { Link } from 'react-router-dom';
class Process extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="showtron process">
          <h1>Our Approach To Creating &</h1>
          <h2>Implementing Financial Plans</h2>
        </div>
        <div className="container">
          <h1 className="project-name">The Armis Process</h1>
          <div id="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-search"></i>
              </div>
              <div className="timeline-content">
                <h2>Step 1: Discovery</h2>
                <p>
                  We start with an initial no-obligation discovery consultation
                  to uncover your financial concerns, values, and needs.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-edit"></i>
              </div>
              <div className="timeline-content right">
                <h2>Step 2: Gather Information</h2>
                <p>
                  Gather information regarding your financial state of affairs
                  and take our Risk Profile Questionaire so I can get a clear
                  picture of where you are today.
                </p>
                <a href="/" className="btn">
                  Take Questionaire!
                </a>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <div className="timeline-content">
                <h2>Step 3: Analyze</h2>
                <p>
                  After our Discovery and Gather Information meetings, I will
                  evaluate your current financial position.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-tv"></i>
              </div>
              <div className="timeline-content right">
                <h2>Step 4: Develop & Present</h2>
                <p>
                  We will develop and present your financial plan and any
                  recommendations on how to improve your financial position
                </p>
                <a href="/" className="btn">
                  Sample Plan
                </a>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-crosshairs"></i>
              </div>
              <div className="timeline-content">
                <h2>Step 5: Execution</h2>
                <p>
                  Outline how to execute on that plan and hire Armis Financial
                  as your investment manager.
                </p>
                <Link to="/fee" className="btn">
                  Fees
                </Link>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <div className="timeline-content right">
                <h2>Step 6: Monitor</h2>
                <p>
                  Ongoing monitoring of portfolio performances, financial goals,
                  investment strategies, and portfolio rebalancing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
