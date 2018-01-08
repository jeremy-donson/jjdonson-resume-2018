import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import './html5-styles.css'
// import logo from './TE-logo.svg'


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.state = { collapse: false, collapse1: false, collapse2: false, collapse3: false, collapse4: false };
    console.log(this.state);
  }

  toggle() { this.setState({ collapse: !this.state.collapse });  console.log(this.state); }

  toggle1() { this.setState({ collapse1: !this.state.collapse1 });   console.log(this.state); }
  
  render() {
    return (
      <div>
        <div align="center" style={{ borderColor: 'Black', backgroundColor: '#add8e6', overflow: 'auto' }}>
        <br/><h5>TechExecRecruiter.com</h5><h6>Strategic Online Tools + Services</h6></div>
        <Button id="0" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Employers</Button>
        <Collapse id="0" isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: 'Pink' }}>
            <CardBody >
            <div align="center" style={{ width: '50%', height: '50%', float: 'left' }}>Rapid Candidate Registration</div>
            <div align="center" style={{ width: '50%', height: '50%', float: 'right'}}>Rapid Employer Job Posting</div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="8" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle1} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Employers</Button>
        <Collapse id="8" isOpen={this.state.collapse1}>
          <Card style={{ backgroundColor: 'Pink' }}>
            <CardBody >
            <div align="center" style={{ width: '50%', height: '50%', float: 'left' }}>Rapid Candidate Registration</div>
            <div align="center" style={{ width: '50%', height: '50%', float: 'right'}}>Rapid Employer Job Posting</div>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="1" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{  borderColor: 'Black', marginBottom: '0rem' }}>Candidates</Button>
        <Collapse id="1" isOpen={this.state.collapse}>
          <Card>
            <CardBody align="left" >
            <ul>
            <li>DRY HTML String</li>
            <li>Sortify</li>
            <li>Left justify bullets at 20% left padded</li>
            <li>Set screen height and adjust on reveal.</li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://v4-alpha.getbootstrap.com/components/collapse/">Separate Actions</a></li>
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

        <Button id="2" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Mobile Apps</Button>
        <Collapse id="2" isOpen={this.state.collapse}>
          <Card>
            <CardBody>
           <ul>
           <li></li>
           <li></li>
           </ul>
            </CardBody>
          </Card>
        </Collapse>


        <Button id="3" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Support Services</Button>
        <Collapse id="3" isOpen={this.state.collapse}>
          <Card >
            <CardBody>
             Job Sourcing & Talent Sourcing
             </CardBody>
          </Card>
        </Collapse>

        <Button id="4" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Strategic Roadmaps</Button>
        <Collapse id="4" isOpen={this.state.collapse}>
          <Card  >
            <CardBody>
             Job Sourcing & Talent Sourcing
             </CardBody>
          </Card>
        </Collapse>

      </div>
    );
  }
}

export default Accordion;


/*
  helloStateName() { return <h1>Hello, {this.state.name}</h1>; } 
  validateYAML(yaml_file_strux, yaml_file) {}
  parseYAML(aml_file_strux, yaml_file) {}
  configCollapse() { }
  styleSideBySide() { }
  routeURL() { }

  topDivStyleF() { return "color: 'White', backgroundColor: 'Green', overflow: 'auto'"; }
  topDivStyle = "style={{ color: 'White', backgroundColor: 'Green', overflow: 'auto' }}";

  buttonStyle = "borderColor: 'Black', marginBottom: '0rem'";
  buttonAttribs() { return 'id="1" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} buttonStyle() ;' ;}

---
// https://css-tricks.com/html5-progress-element/
  <link rel="stylesheet" href="https://cloud.typography.com/610186/6645572/css/fonts.css">
  <!--[if !IE]><!-->
  <link rel="stylesheet" href="https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/style.css?v=11.2">
  <!--<![endif]-->
  <!--[if lt IE 9]>
  <link rel="stylesheet" href="https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/css/oldie.css">
  <![endif]-->
  <!--[if IE 9]>
  <link rel="stylesheet" href="https://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-16/style.css?v=11.2>
  <![endif]-->
*/


// http://reactstrap.github.io/components/button-dropdown/
// https://react.rocks/example/react-sortable-tree

//  fontFamily: 'Arial', 
// import { Collapse, Button, CardBody, Card, Progress } from 'reactstrap';
// <img style={{width: 66, height: 58}} src={ logo } />
// <li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Noticia+Text" />Button Fonts</a></li>

