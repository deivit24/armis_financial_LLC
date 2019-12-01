import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id="SocialMedia" className="container-fluid">
          <div className="row">
            <div className="col-xs-3">
              <a href="https://www.facebook.com/armisfinancial">
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
            <div className="col-xs-3">
              <a href="https://www.linkedin.com/company/armis-financial/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="col-xs-3">
              <a href="/">
                <i className="fab fa-instagram"> </i>
              </a>
            </div>
            <div className="col-xs-3">
              <a href="mailto:david@armisfinancial.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <p>111 Congress Ave Suite 400, Austin, TX 78701</p>
          <p>(512) 709-9741</p>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <p>
                  <a href="dist/page/info.html">Important Information</a>
                </p>
              </div>
              <div className="col-sm-3">
                <p>
                  <a href="dist/page/refer.html">Refer Friend or Family</a>
                </p>
              </div>
              <div className="col-sm-3">
                <p>
                  <a href="dist/page/rpq.html">Risk Profile Questionnaire</a>
                </p>
              </div>
              <div className="col-sm-3">
                <p>
                  <a href="dist/page/contact.html">Contact Me</a>
                </p>
              </div>
            </div>
            <br />
            <p className="foot">
              Armis Financial LLC, Copyright &copy; 2018 is a Texas registered
              investment adviser under the Investment Advisers Act of 1940 and
              uses Interactive Brokers for Armis Financial accounts. Interactive
              Brokers LLC is a member <a href="https://www.nyse.com">NYSE-</a>
              <a href="http://finra.org">FINRA-</a>
              <a href="https://www.sipc.org">SIPC</a>
              and is regulated by the US Securities and Exchange Commision and
              the Commodity Futures Trading Commision. Interactive Brokers is a
              member of the Securities Investor Protection Corporation (SIPC),
              which provides funds to meet claims up to a ceiling of $500,000,
              including a maximum of $250,000 for cash claims. For additional
              information regarding SIPC coverage, including a brochure, please
              contact SIPC at (202) 371‐8300 or visit www.sipc.org. By using
              this website, you accept our Terms of Use and Privacy Policy.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
