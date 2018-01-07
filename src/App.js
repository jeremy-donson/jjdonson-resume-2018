import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import logo from './TE-logo.svg'

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div >
        <Button id="1" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline iPhone + iPad Apps</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card style={{ backgroundColor: 'Yellow' }}>
            <CardBody>
            <p>Rapid Candidate Team Registration</p>
            </CardBody>
          </Card>
        </Collapse>

        <Button id="2" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{  borderColor: 'Black', marginBottom: '0rem' }}> Android App</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <ul>
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

        <Button id="3" className="btn btn-primary btn-lg btn-block" color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline Support Services</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
           <ul>
           <li></li>
           <li></li>
           </ul>
            </CardBody>
          </Card>
        </Collapse>


        <Button id="4" className="btn btn-primary btn-lg btn-block" fontFamily='Noticia Text' color="secondary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline Roadmaps</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card >
            <CardBody>
             Job Sourcing & Talent Sourcing
             </CardBody>
          </Card>
        </Collapse>

      </div>
    );
  }
}

export default Example;

//  fontFamily: 'Arial', 
// import { Collapse, Button, CardBody, Card, Progress } from 'reactstrap';
// <img style={{width: 66, height: 58}} src={ logo } />
// <li><a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Noticia+Text" />Button Fonts</a></li>
