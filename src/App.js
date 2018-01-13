import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import react_logo from './Images/react-logo.svg';
import react_logo_black from './Images/react-logo-black.svg';
import msword_logo from './Images/word-icon.png';
import pdf_logo from './Images/pdf-icon.png';
import bofa_logo from './Images/bofa-logo.png';

import sint_logo from './Images/sintec-media-logo.png';
import google_logo from './Images/google.png';
import cs_logo from './Images/Credit_Suisse_Logo.png';
import econ_logo from './Images/economist-dot-com-1.svg';
import citi from './Images/citi.png';
import chase from './Images/chase.svg';
import athena from './Images/athena.svg';
import coreOS from './Images/coreos.png';

import teo_logo from './Images/teo.png';
import clear from './Images/clear.png';
import apple from './Images/apple.svg';
import brew from './Images/homebrew.png';

import win from './Images/winlogo2006.svg';
import git from './Images/git.png';
import react_logo_b from './Images/react-blue-on-black.svg';
import python from './Images/python-logo.svg';
import mysql from './Images/mysql.svg';
import postgres from './Images/postgres.svg';
import kafka from './Images/kafka.svg';
import jira from './Images/jira-logo.png';
import tux from './Images/tux.svg';

import ansible from './Images/ansible-logo.png';
import tform from './Images/terraform.png';

import mswDoc from './Images/jjdonson-resume-2018.docx';
import pdfDoc from './Images/jjdonson-resume-2018.pdf';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this); this.toggle1 = this.toggle1.bind(this); this.toggle2 = this.toggle2.bind(this); this.toggle3 = this.toggle3.bind(this); this.toggle4 = this.toggle4.bind(this); this.toggle5 = this.toggle5.bind(this); this.toggle6 = this.toggle6.bind(this); this.toggle7 = this.toggle7.bind(this);
    this.state = { collapse: false, collapse1: false, collapse2: false, collapse3: false, collapse4: false , collapse5: false , collapse6: false , collapse7: false  };
//    console.log(this.state);
  }

  toggle() { this.setState({ collapse: !this.state.collapse });  console.log(this.state.collapse); }
  toggle1() { this.setState({ collapse1: !this.state.collapse1 });   console.log(this.state.collapse1); }
  toggle2() { this.setState({ collapse2: !this.state.collapse2 });   console.log(this.state.collapse2); }
  toggle3() { this.setState({ collapse3: !this.state.collapse3 });   console.log(this.state.collapse3); }
  toggle4() { this.setState({ collapse4: !this.state.collapse4 });   console.log(this.state.collapse4); }
  toggle5() { this.setState({ collapse5: !this.state.collapse5 });   console.log(this.state.collapse5); }
  toggle6() { this.setState({ collapse6: !this.state.collapse6 });   console.log(this.state.collapse6); }
  toggle7() { this.setState({ collapse7: !this.state.collapse7 });   console.log(this.state.collapse7); }

  render() {
    return (

      <div>
        <div align="center" style={{ borderColor: 'Black', backgroundColor: '#6495ED', overflow: 'auto' }}>
        <img src={react_logo_black} className="App-logo" alt="logo" />
        <h6><small>jeremy j donson</small></h6>
        <h6><small>urbanspectra • new york city, ny</small></h6>
        </div>
        <Button id="0" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Professional Experience</Button>
        <Collapse id="0" isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody >

            <div align="center" style={{ width: '35%', height: '50%', float: 'left'}}>
            <h6><strong>Expert Skills</strong></h6><br/>
            Web<br/><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
            <img src={ react_logo_b } className="Job-logo2" alt="logo" /></a>
            <br/>Apps
            <hr/>
            Big Data Arch + Eng<br/>
            <img src={ mysql } className="Job-logo4" alt="logo" /><br/>
            <img src={ postgres } className="Job-logo3" alt="logo" /><br/>
            <img src={ kafka } className="Job-logo1" alt="logo" /><br/>10+ yrs<hr/>
            Bash Python Scripts<br/><br/><img src={ python } className="Job-logo2" alt="logo" /><br/>10+ yrs
            <hr/>
            Dev Team Laptop Mgt<br/>
            <img src={ apple } className="Job-logo3" alt="logo" /><br/>
            <p><img src={ brew } className="Job-logo2" alt="logo" /></p>
            <img src={ win } className="Job-logo2" alt="logo" /><br/>10+ yrs<br/>
            <hr/>
            Git + Github<br/><img src={ git } className="Job-logo2" alt="logo" /><br/> 10+ yrs
            <hr/>
            Linux<br/>
            <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer" ><img src={ tux } className="Job-logo3" alt="logo" /></a><br/>
            10+ yrs
            <hr/>            
            Auto Infra<br/>
            <img src={ ansible } className="Job-logo3" alt="logo" /><br/><br/>
            <img src={ tform } className="Job-logo3" alt="logo" /><br/><br/>
            <img src={ coreOS } className="Job-logo4" alt="logo" /><br/><br/>
            10+ yrs
            <hr/>            
            Tech Proj Mgt<br/>
            <img src={ jira } className="Job-logo2" alt="logo" /><br/>10+ yrs
            <hr/>            
            Biz Strat<br/> 10+ yrs
            </div>
            <div align="center" style={{ width: '65%', height: '50%', float: 'right' }}>
            <h6><strong>Projects At Scale</strong></h6><br/>
            Dev Ops Engineer<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y75dazyh">
            <img src={ bofa_logo } className="Job-logo3" alt="logo" /></a><br/>
            <hr/>
            Data Architect & Cloud Engineer<br/><br/>
            <p><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9ekm8r3">
            <img src={ google_logo } className="Job-logo1" alt="logo" /></a></p><br/>
            <p><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9ekm8r3">
            <img src={ chase } className="Job-logo" alt="logo" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9ekm8r3">
            <img src={ citi } className="Job-logo5" alt="logo" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9ekm8r3">
            Athena<img src={ athena } className="Job-logo1" alt="logo" />Capital</a>
            </p>
            <hr/>
            Infrastructure Automation Engineer<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y9kzvr3r">
            <img src={ cs_logo }  className="Job-logo1" alt="logo" /></a>
            <hr/>
            Engineer, Architect & Tech Project Mgr<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="">
            <img src={ sint_logo }  className="Job-logo1" alt="logo" /></a>
            <hr/>
            Mobile Cloud Marketing Strategist<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/yaw8qxfc">
            <img src={ econ_logo }  className="Job-logo-sm" alt="logo" /></a>
            <hr/>
            Web App Prototype Developer:<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="">
            <img src={ teo_logo }  className="Job-logo" alt="logo" /></a>
            <hr/>
            <h6>Certs</h6>
            MySQL DBA<br/>
            RHEL Linux<br/>
            Oracle DBA
            <hr/>
            <h6>Web Resume</h6>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/ycqkdsx4">Intro</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y7l5ytbt">Resume</a>
            <br/>
            <a target="https://www.linkedin.com/in/jjdonson/" rel="noopener noreferrer" href="">LinkedIn</a>
            <hr/>
            <h6>Resume Docs</h6>
            <a href={mswDoc} download={mswDoc} title="download word doc"><img src={msword_logo} className="Msw-logo" alt="logo" /></a>
            <a href={pdfDoc} download={pdfDoc} title="download pdf file" ><img src={pdf_logo} className="Msw-logo" alt="logo" /></a>
            </div>

            </CardBody>
          </Card>
        </Collapse>

        <Button id="1" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle1} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Current Projects</Button>
        <Collapse id="1" isOpen={this.state.collapse1}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody >
            <div align="center" style={{ width: '33%', height: '50%', float: 'left' }}>
            
            linkedUp
            
            </div>
            <div align="center" style={{ width: '33%', height: '50%', float: 'left' }}>
            
            barterEngine
            
            </div>
            <div align="center" style={{ width: '33%', height: '50%', float: 'right'}}>
            
            weHive
            
            </div>
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
            <li><a target="_blank" rel="noopener noreferrer" href="http://modernizr.com">Modernizr</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Noticia+Text">Button Fonts</a></li>
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
        onClick={this.toggle6} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Make Contact</Button>
        <Collapse id="6" isOpen={this.state.collapse6}>
          <Card  >
            <CardBody>
             <ul>
             <li><a href="mailto:jjdonson@gmail.com?subject=webAppResume%20Feedback">email</a></li>
             <li><a href="tel:1-718-710-9434">phone</a></li>
             </ul>
             </CardBody>
          </Card>
        </Collapse>

        <Button id="7" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle7} style={{ borderColor: 'Black', marginBottom: '0rem' }}>User Feedback</Button>
        <Collapse id="7" isOpen={this.state.collapse7}>
          <Card  >
            <CardBody>
             <ul>
             <li><a href="mailto:jjdonson@gmail.com?subject=webAppResume%20Feedback&body=REPRODUCIBLE%20BUG%20REPORT:%0D%0AbugName:%0D%0AbugURL:%0D%0AbugDate:%0D%0AbugReporter:%0D%0A%0D%0AATTACH%20SCREENSHOT?%0D%0A%0D%0ATHANK%20YOU!" target="_blank" rel="noopener noreferrer" >Report</a> A Bug</li>
             </ul>
             <hr/>
             <p align="right"><small><a href="" target="_blank" rel="noopener noreferrer">hatTips</a></small></p>
             </CardBody>
          </Card>
        </Collapse>

<footer className="App-footer"><h5>
<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React.js Rules The Web"><img src={react_logo}
className="App-logo-foot" alt="logo" /> React.js</a> ... <a href="https://reactjs.org/"
target="_blank" rel="noopener noreferrer" title="built for the future">b<small>4</small>tf</a></h5>
<p><br/>©2018 Jeremy Donson, New York City 10027</p>
</footer>
      </div>
    );
  }
}

export default Accordion;

/*

<span>
    Our&nbsp;New thingamabob is&nbsp;the<br class="full-width-breakpoint"/> best&nbsp;thing since&nbsp;sliced&nbsp;bread!
</span>

@media screen and (max-width:550px) {       
    .full-width-breakpoint {             
        display:none;                    
        line-height:0;                   
    }

Max Width depends on your design only experimentation or  calculation will reveal the best max-width.

<ul style={{listStyle: 'none'}}>

// <meta name="format-detection" content="telephone=no">
// https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer
// import DownloadLink from 'react-download-link'; // https://www.npmjs.com/package/react-download-link
// import imports from './Components/Imports';

<a href="http://www.softwaretestinghelp.com/sample-bug-report/" target="_blank" rel="noopener noreferrer"></a>

*/
