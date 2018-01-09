import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';


import react_logo from './Images/react-logo.svg';
import react_logo_black from './Images/react-logo-black.svg';
import msword_logo from './Images/word-icon.png';
import pdf_logo from './Images/pdf-icon.png';
import bofa_logo from './Images/bofa-logo.svg';
import sint_logo from './Images/sintec-media-logo.png';
import gplay_logo from './Images/Google_Play_logo.png';
import cs_logo from './Images/Credit_Suisse_Logo.png';
import econ_logo from './Images/economist-dot-com-1.svg';
import citi_logo from './Images/CITIGROUP.png';
import teo_logo from './Images/teo.png';
import clear from './Images/clear.png';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import './html5-styles.css'
// import logo from './TE-logo.svg'

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);

    this.state = { collapse: false, collapse1: false, collapse2: false, collapse3: false, collapse4: false };
    console.log(this.state);
  }

  toggle() { this.setState({ collapse: !this.state.collapse });  console.log(this.state.collapse); }
  toggle1() { this.setState({ collapse1: !this.state.collapse1 });   console.log(this.state.collapse1); }
  toggle2() { this.setState({ collapse2: !this.state.collapse2 });   console.log(this.state.collapse2); }
  toggle3() { this.setState({ collapse3: !this.state.collapse3 });   console.log(this.state.collapse3); }
  toggle4() { this.setState({ collapse4: !this.state.collapse4 });   console.log(this.state.collapse4); }
  toggle5() { this.setState({ collapse5: !this.state.collapse5 });   console.log(this.state.collapse5); }
  toggle6() { this.setState({ collapse6: !this.state.collapse6 });   console.log(this.state.collapse6); }
  
  render() {
    return (
      <div>
        <div align="center" style={{ borderColor: 'Black', backgroundColor: '#add8e6', overflow: 'auto' }}>
        <img src={react_logo_black} className="App-logo" alt="logo" />
        <h6><small>jeremy j donson</small></h6>
        <h6><small>urbanspectra • new york city, ny</small></h6>
        </div>
        <Button id="0" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Web Resume Links</Button>
        <Collapse id="0" isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: '#add8e6' }}>
            <CardBody >

            <div style={{ width: '50%', height: '50%', float: 'left' }}>
            <h5><strong>Multiple Expert Hats...</strong></h5>
            <small>click logo to view project description</small>
            <hr/>
            <ul>
            <li>Dev Ops Engineer: <img src={ clear }  className="Job-logo3" alt="logo" /><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y75dazyh"><img src={ bofa_logo }  className="Job-logo" alt="logo" /></a> Bank of America<br/></li>
            <hr/>
            <li>Data Architect & Engineer: <img src={ clear }  className="Job-logo3" alt="logo" /><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9ekm8r3"><img src={ gplay_logo }  className="Job-logo" alt="logo" /></a></li>
            <hr/>
            <li>Infrastructure Automation Engineer: <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9kzvr3r"><img src={ cs_logo }  className="Job-logo2" alt="logo" /></a></li>
            <hr/>
            <li>Technical Project Manager: <a target="_blank" rel="noopener noreferrer" href=""><img src={ sint_logo }  className="Job-logo2" alt="logo" /></a> </li>
            <hr/>
            <li>Mobile Marketing Strategist: <img src={ clear }  className="Job-logo3" alt="logo" /><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/yaw8qxfc"><img src={ econ_logo }  className="Job-logo3" alt="logo" /></a></li>
            <hr/>
            <li>Web App Prototype Developer: <a target="_blank" rel="noopener noreferrer" href=""><img src={ teo_logo }  className="Job-logo" alt="logo" /></a></li>
            </ul>
            </div>
            <div align="center" style={{ width: '50%', height: '50%', float: 'right'}}>
            <br/><br/>
            <h5>Web Resume</h5>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/ycqkdsx4">Intro</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y7l5ytbt">Resume</a>
            <hr/>
            <h5>Resume Downloads</h5><br/>
            <a href="Images/jjdonson-resume-2018.docx" title="download pdf doc" download><img src={msword_logo} className="Msw-logo" alt="logo" /></a>
            <a href="Images/jjdonson-resume-2018.pdf" title="download pdf file" download><img src={pdf_logo} className="Msw-logo" alt="logo" /></a>

            </div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="1" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle1} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Employers</Button>
        <Collapse id="1" isOpen={this.state.collapse1}>
          <Card style={{ backgroundColor: '#add8e6' }}>
            <CardBody >
            <div align="center" style={{ width: '50%', height: '50%', float: 'left' }}>Rapid Candidate Registration</div>
            <div align="center" style={{ width: '50%', height: '50%', float: 'right'}}>Rapid Employer Job Posting</div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="2" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle2} style={{  borderColor: 'Black', marginBottom: '0rem' }}>Candidates</Button>
        <Collapse id="2" isOpen={this.state.collapse2}>
          <Card>
            <CardBody align="left" >
            <ul>
            <li>DRY HTML String</li>
            <li>Sortify</li>
            <li>Left justify bullets at 20% left padded</li>
            <li>Set screen height and adjust on reveal.</li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://modernizr.com">Modernizr</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Noticia+Text">Button Fonts</a></li>
            <li>Button Color</li>
            <li>Button Height</li>
            <li>Card Font Sizes</li>
            <li><a target="_blank" rel="noopener noreferrer" href="http://vectorpaint.yaks.co.nz/">Logos</a></li>
            </ul>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="3" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle3} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Mobile Apps</Button>
        <Collapse id="3" isOpen={this.state.collapse3}>
          <Card>
            <CardBody>
           <ul>
           <li></li>
           <li></li>
           </ul>
            </CardBody>
          </Card>
        </Collapse>


        <Button id="4" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle4} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Support Services</Button>
        <Collapse id="4" isOpen={this.state.collapse4}>
          <Card >
            <CardBody>
             Job Sourcing & Talent Sourcing
             </CardBody>
          </Card>
        </Collapse>

        <Button id="5" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle5} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Strategic Roadmaps</Button>
        <Collapse id="5" isOpen={this.state.collapse5}>
          <Card  >
            <CardBody>
             Job Sourcing & Talent Sourcing
             </CardBody>
          </Card>
        </Collapse>

        <Button id="6" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle6} style={{ borderColor: 'Black', marginBottom: '0rem' }}>User Feedback</Button>
        <Collapse id="6" isOpen={this.state.collapse6}>
          <Card  >
            <CardBody>
             <ul>
             <li><a href=" mailto:jjdonson@gmail.com?subject=webAppResume%20Feedback&body=REPRODUCIBLE%20BUG%20REPORT:%0D%0AbugName:%0D%0AbugURL:%0D%0AbugDate:%0D%0AbugReporter:%0D%0A%0D%0AATTACH%20SCREENSHOT?%0D%0A%0D%0ATHANK%20YOU!" target="_blank" rel="noopener noreferrer" >Report</a> A Bug</li>
             </ul>
             <hr/>
             [hatTips]: <a href="http://www.softwaretestinghelp.com/sample-bug-report/" target="_blank" rel="noopener noreferrer">Bug Report Guide</a>
             </CardBody>
          </Card>
        </Collapse>

<footer className="App-footer"><h5>
<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React.js Rules The Web"><img src={react_logo}
className="App-logo-foot" alt="logo" /> React.js</a> ... <a href="https://reactjs.org/"
target="_blank" rel="noopener noreferrer" title="built for the future">built4theFuture</a></h5>
<p><br/>©2018 Jeremy Donson, New York City 10027</p>
</footer>
      </div>
    );
  }
}

export default Accordion;
