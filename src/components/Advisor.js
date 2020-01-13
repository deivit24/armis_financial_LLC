import React from 'react';
import { Link } from 'react-router-dom';
import Me from '../img/biopic.jpg';

class Advisor extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="showtron advisor">
          <h1>Providing Customized Services</h1>
          <h2>From Boomers To Millennials</h2>
        </div>
        <div className="container">
          <h1>Principal Owner</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={Me} alt="" />
            </div>
            <div className="col-md-6">
              <h1>David Salazar, MSc</h1>
              <h2>Wealth Management Advisor</h2>
              <Link to="/contact">
                <i className="far fa-comment-alt"></i> Send A Message
              </Link>
            </div>
          </div>
          <p>
            After playing tennis for most of my teenage life, I was fortunate
            enough to receive a full scholarship to attend Lipscomb University
            in Nashville, TN. Shortly after receiving my B.A. in Accounting with
            150 credit hours, I followed my passion which was tennis. I had a
            fantastic opportunity to be one of the assistant men’s tennis coach
            at the United States Military Academy at West Point. I probably
            learned more from the cadets that are serving our country than they
            did from me during my tenure there. I then went to the University of
            Durham in the United Kingdom to pursue a Master’s in Financial
            Management while coaching and playing for their tennis team. It was
            at the point when I knew that I wanted to become a financial
            advisor.
          </p>
          <p>
            When I came back to the states, I immediately started working for a
            large financial service firm. That is when I fell in love with my
            job, but I slowly became to realize that I was limited to providing
            true value that wasn’t conflicted with my firm’s interest. The more
            research I did, the more I found out that virtually every firm
            operates in a similar manner. I had a choice to make. Either quit my
            dream job and start a different profession or start my own
            Independent firm and actually make a difference. I chose the latter.
          </p>
          <p>
            In 2016, I married my wife Polina in NYC. Thanks to her, I have
            newly found love for cats and have adopted a cat named Athena. We
            still enjoy playing tennis from time to time. We love driving around
            Austin, TX trying new bubble tea places and restaurants. More
            importantly, we love traveling together and living life by the
            moment.
          </p>
        </div>
      </div>
    );
  }
}

export default Advisor;
