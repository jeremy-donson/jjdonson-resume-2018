import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
      <div>
        <Button id="1" color="primary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline iPhone + iPad Apps</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <ol>
            <li><a target="_blank" rel="noopener noreferrer" href="https://v4-alpha.getbootstrap.com/components/collapse/">Separate Actions</a></li>
            <li>Border Font</li>
            <li>Button Color</li>
            <li>Button Border</li>
            <li>Border Panels</li>
            <li>Full Width Panel</li>
            <li></li>
            </ol>
            </CardBody>
          </Card>
        </Collapse><br/>

        <Button id="2" color="primary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline Android App</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>

        <Button id="3" color="primary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>TechExecOnline Support Services</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>

        <Button id="4" color="primary" onClick={this.toggle} style={{ borderColor: 'Black', marginBottom: '0rem' }}>Roadmaps: webApp + phoneApps + webSite</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
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