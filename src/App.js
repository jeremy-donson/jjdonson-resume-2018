import React, { Component } from 'react';


import { Collapse, Button, CardBody, Card } from 'reactstrap';
import  { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import bugNinja from  './Images/bugNinja.gif';
import linkedup_logo from './Images/linkup.svg';
import barter_logo from './Images/appengine.svg';
import wehive_logo from './Images/honeycomb.svg';
import bug from './Images/bug.svg';
import caller from './Images/people.svg';
import mail_logo from './Images/email-logo.svg';
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

import iaas_clust_thumb from './Images/_diagram-cluster_thumb.png';
import oss_stacks_thumb from './Images/_oss-client-server-stacks_thumb.png';
import envs_thumb from './Images/_envs_thumb.png';

import intro from './Components/Intro';
import resume from './Components/Resume';
import pagenot from './Components/PageNot';

import crowdsmash from './Components/Crowdsmash';


import linkedup from './Components/LinkedUp';
import barterengine from './Components/BarterEngine';
import wehive from './Components/WeHive';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class Accordion extends Component {
  constructor(props) { super(props);
    this.toggle0 = this.toggle0.bind(this); this.toggle1 = this.toggle1.bind(this); this.toggle2 = this.toggle2.bind(this); this.toggle3 = this.toggle3.bind(this); this.toggle4 = this.toggle4.bind(this); this.toggle5 = this.toggle5.bind(this); this.toggle6 = this.toggle6.bind(this); this.toggle7 = this.toggle7.bind(this); this.makeHref = this.makeHref.bind(this);
    this.state = { collapse0: false, collapse1: false, collapse2: false, collapse3: false, collapse4: false , collapse5: false, collapse6: false, collapse7: false };
  }

  toggle0() { this.setState({ collapse0: !this.state.collapse0 });   console.log(this.state.collapse0); }
  toggle1() { this.setState({ collapse1: !this.state.collapse1 });   console.log(this.state.collapse1); }
  toggle2() { this.setState({ collapse2: !this.state.collapse2 });   console.log(this.state.collapse2); }
  toggle3() { this.setState({ collapse3: !this.state.collapse3 });   console.log(this.state.collapse3); }
  toggle4() { this.setState({ collapse4: !this.state.collapse4 });   console.log(this.state.collapse4); }
  toggle5() { this.setState({ collapse5: !this.state.collapse5 });   console.log(this.state.collapse5); }
  toggle6() { this.setState({ collapse6: !this.state.collapse6 });   console.log(this.state.collapse6); }
  toggle7() { this.setState({ collapse7: !this.state.collapse7 });   console.log(this.state.collapse7); }

 makeHref() { }

  render() {
    return (

      <div>
        <div align="center" style={{ borderColor: 'Black', backgroundColor: '#6495ED', overflow: 'auto' }}>
        <a href ="/" title="return2home"><img src={react_logo_black} className="App-logo" alt="logo" /></a>
        <h6><small>emerging tools</small></h6>
        <h6><small>jeremy j donson</small></h6>
        <h6><small>urbanspectra • new york city, ny</small></h6>
        </div>

        <Button id="0" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle0} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Expertise</small></Button>
        <Collapse id="0" isOpen={this.state.collapse0}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody >

            <div align="center">
            <h6><strong>Full Stack Skills</strong></h6><br/>
            Web<br/><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" >
            <img src={ react_logo_b } className="Job-logo2" alt="logo" /></a>
            <br/>Apps
            <hr/>
            Scripting<br/>Bash<br/>Python<br/><br/><img src={ python } className="Job-logo2" alt="logo" /><br/>10+ yrs
            <hr/>
            Big Data<br/>Architecture + Engineering<br/>
            <a href="https://www.percona.com" target="_blank" rel="noopener noreferrer"><img src={ mysql } className="Job-logo4" alt="logo" /></a><br/>
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><img src={ postgres } className="Job-logo3" alt="logo" /></a><br/>
            <a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer"><img src={ kafka } className="Job-logo1" alt="logo" /></a><br/>10+ yrs<hr/>
            Dev Team Laptop Mgt<br/>
            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer"><img src={ apple } className="Job-logo3" alt="logo" /></a><br/>
            <p><a href="https://brew.sh" target="_blank" rel="noopener noreferrer"><img src={ brew } className="Job-logo2" alt="logo" /></a></p>
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer"><img src={ win } className="Job-logo2" alt="logo" /></a><br/>10+ yrs<br/>
            <hr/>
            Git + Github<br/>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><img src={ git } className="Job-logo2" alt="logo" /></a><br/> 10+ yrs
            <hr/>
            Linux<br/>
            <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer" >
            <img src={ tux } className="Job-logo3" alt="logo" /></a><br/>
            10+ yrs
            <hr/>            
            Infrastructure<br/>Automation<br/>
            <a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer"><img src={ ansible } className="Job-logo3" alt="logo" /></a><br/><br/>
            <a href="https://www.hashicorp.com" target="_blank" rel="noopener noreferrer"><img src={ tform } className="Job-logo3" alt="logo" /></a><br/><br/>
            <a href="https://www.tectonic.com" target="_blank" rel="noopener noreferrer"><img src={ coreOS } className="Job-logo4" alt="logo" /></a><br/><br/>
            10+ yrs
            <hr/>            
            Technincal Project Management<br/>
            <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer"><img src={ jira } className="Job-logo2" alt="logo" /></a><br/>10+ yrs
            <hr/>            
            Business Strategy<br/> 10+ yrs
            </div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="1" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle1} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Professional Experience</small></Button>
        <Collapse id="1" isOpen={this.state.collapse1}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody >

            <div align="center">
            <h6><strong>Projects At Scale</strong></h6><br/>
            Dev Ops<br/>Lead Engineer<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.bankofamerica.com/">
            <img src={ bofa_logo } className="Job-logo3" alt="logo" /></a><br/>
            <hr/>
            Data Architect & Cloud Engineer<br/><br/>
            <p><a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store">
            <img src={ google_logo } className="Job-logo1" alt="logo" /></a></p><br/>
            <p><a target="_blank" rel="noopener noreferrer" href="hhttps://creditcards.chase.com/exploreproducts2">
            <img src={ chase } className="Job-logo" alt="logo" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://online.citi.com/US/login.do">
            <img src={ citi } className="Job-logo5" alt="logo" /></a></p>
            <p><a target="_blank" rel="noopener noreferrer" href="https://www.athenacr.com/">
            Athena<img src={ athena } className="Job-logo1" alt="logo" />Capital</a>
            </p>
            <hr/>
            Infrastructure Automation Engineer<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.credit-suisse.com/us/en.html">
            <img src={ cs_logo }  className="Job-logo1" alt="logo" /></a>
            <hr/>
            Engineer, Architect & Tech Project Manager<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="https://www.sintecmedia.com/">
            <img src={ sint_logo }  className="Job-logo1" alt="logo" /></a>
            <hr/>
            Mobile Cloud Marketing Strategist<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="http://www.economistgroup.com/">
            <img src={ econ_logo }  className="Job-logo-sm" alt="logo" /></a>
            <hr/>
            Web App Dev:<br/><br/>
            <a target="_blank" rel="noopener noreferrer" href="">
            <img src={ teo_logo }  className="Job-logo" alt="logo" /></a>
            </div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="2" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle2} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Current Projects</small></Button>
        <Collapse id="2" isOpen={this.state.collapse2}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody >
            <div align="center">
            <Router>
            <div>
            <ul style={{listStyle: 'none'}}>
            <li><Link to="/crowdSmash"><img src={ bugNinja } className="Job-logo3" alt="logo" /><img src={ clear } className="Job-logo" alt="logo" />crowdSmash</Link></li>
            <hr/>
            <li><Link to="/linkedUp">linkedUp<img src={ clear } className="Job-logo" alt="logo" /><img src={ linkedup_logo } className="Job-logo3" alt="logo" /></Link></li>
            <hr/>
            <li><Link to="/barterEngine"><img src={ barter_logo } className="Job-logo3" alt="logo" />barterEngine</Link></li>
            <hr/>
            <li><Link to="/weHive">weHive<img src={ clear } className="Job-logo" alt="logo" /><img src={ wehive_logo } className="Job-logo3" alt="logo" /></Link></li>
            <hr/>
            </ul>
            <Switch>
              <Route path="/crowdSmash" component={crowdsmash}/>
              <Route path="/weHive" component={wehive}/>
              <Route path="/barterEngine" component={barterengine}/>
              <Route path="/linkedUp" component={linkedup}/>
            </Switch>
            </div>
            </Router>
            </div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="3" className="btn btn-primary btn-lg btn-block" color="secondary"
        onClick={this.toggle3} style={{  borderColor: 'Black', marginBottom: '0rem' }}><small>Resume Links</small></Button>
        <Collapse id="3" isOpen={this.state.collapse3}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody align="left" >
            <div align="center">
            <Router>
            <div>
            <ul align="center" style={{listStyle: 'none'}}>
            <li><Link to="/resumeIntro">intro</Link> - <a href="https://tinyurl.com/y7l5ytbt" target="_blank" rel="noopener noreferrer" >resume</a> - <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jjdonson/">linkedin</a></li>
            </ul>
            <Switch>
              <Route path="/resumeIntro" component={intro}/>
{/*              <Route path="/resume" component={resume}/> */}
            </Switch>
            </div>
            </Router>
            <hr/>
            <ul align="center" style={{listStyle: 'none'}}>
            <h6>Certifications</h6>
            <li>MySQL DBA</li>
            <li>RHEL Linux</li>
            <li>Oracle DBA</li>
            </ul>
            <hr/>
            <h6>Download Docs</h6>
            <a href={mswDoc} download={mswDoc} title="download word doc"><img src={msword_logo} className="Msw-logo" alt="logo" /></a>
            <a href={pdfDoc} download={pdfDoc} title="download pdf file" ><img src={pdf_logo} className="Msw-logo" alt="logo" /></a>
            </div>
            </CardBody>
          </Card>
        </Collapse>


        <Button id="4" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle4} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Support Services</small></Button>
        <Collapse id="4" isOpen={this.state.collapse4}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody>
             
             </CardBody>
          </Card>
        </Collapse>

        <Button id="5" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle5} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Strategic Roadmaps</small></Button>
        <Collapse id="5" isOpen={this.state.collapse5}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody>
            <div>
            <Router>
            <div align="center">
            <Link to="/ossStacks"><small>Stack Layers Diagram</small><br/><img src={ clear } className="Job-logo" alt="logo" />
            <img src={ oss_stacks_thumb } className="Job-logo3" alt="logo" /></Link>
            <hr/>
            <Link to="/iaasCluster"><img src={ iaas_clust_thumb } className="Job-logo3" alt="logo" /><br/><small>Clustered IAAS Services</small></Link>
            <hr/>
            <Link to="/envs"><small>Code Pipeline</small><img src={ clear } className="Job-logo" alt="logo" />
            <img src={ envs_thumb } className="Job-logo3" alt="logo" /></Link>
            <hr/>
            <Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("./_oss-stack-svg.html"));}}>moo</Link>
            <hr/>
             </div>
             </Router>
             </div>
             </CardBody>
          </Card>
        </Collapse>

        <Button id="6" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle6} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>UI Features</small></Button>
        <Collapse id="6" isOpen={this.state.collapse6}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody>
             <p>Feature</p>
             <p>Demo</p>
             <p>Source</p>
             <p>Browser Support</p>
             <p>Fallback</p>
             </CardBody>
          </Card>
        </Collapse>

        <Button id="7" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary"
        onClick={this.toggle7} style={{ borderColor: 'Black', marginBottom: '0rem' }}><small>Make Contact</small></Button>
        <Collapse id="7" isOpen={this.state.collapse7}>
          <Card style={{ backgroundColor: '#5F9EA0' }}>
            <CardBody>
             <ul>
             <li><img src={mail_logo} className="Job-logo" alt="logo" /><img src={clear} className="Clear" alt="logo" />
             <a href="mailto:jjdonson@gmail.com?subject=webAppResume%20Feedback">email us</a></li>
             <hr/>
             <li><img src={caller} className="Job-logo" alt="logo" /><img src={clear} className="Clear" alt="logo" />
             <a href="tel:1-718-710-9434">call us</a></li>
             <hr/>
             <li><img src={bug} className="Job-logo" alt="logo" /><img src={clear} className="Clear" alt="logo" />
             <a href="mailto:jjdonson@gmail.com?subject=webAppResume%20Feedback&body=PROVIDE%20A%20REPRODUCIBLE%20BUG%20REPORT:%0D%0AbugName:%0D%0AbugURL:%0D%0AbugDate:%0D%0AbugReporter:%0D%0A%0D%0AATTACH%20SCREENSHOT!%0D%0A%0D%0ATHANK%20YOU!" target="_blank" rel="noopener noreferrer" >report bug</a></li>
             </ul>
             <p align="right"><small><a href="http://www.softwaretestinghelp.com/sample-bug-report/" target="_blank" rel="noopener noreferrer">hatTips</a></small></p>
             </CardBody>
          </Card>
        </Collapse>

<footer className="App-footer">
<small><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" title="React.js Rules The Web"><img src={react_logo}
className="App-logo-foot" alt="logo" /> React.js</a> ... built4future
<br/>©2018 Jeremy Donson, New York City 10027
</small>
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

            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/ycqkdsx4">Intro</a>
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/y7l5ytbt">Resume</a>
            <br/>



<Link to="route" target="_blank" onClick={(event) => {event.preventDefault(); window.open(this.makeHref("route"));}} />

<div align="center" style={{ width: '35%', height: '50%', float: 'left'}}>
*/
