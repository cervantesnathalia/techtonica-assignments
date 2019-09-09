import React, { Component, Fragment } from "react";
import Expand from "react-expand-animated";
import { uniqueNamesGenerator, UniqueNamesGeneratorConfig } from 'unique-names-generator';

  const starWarsCharacters = [
    'Han Solo',
    'Jabba The Hutt',
    'R2-D2',
    'Luke Skywalker',
    'Princess Leia Organa',
    'Nathalia Cervantes',
    'Freddy Cervantes'
  ];

class Evento extends Component {
    //extraer texto
    state = { 
        open: false,
        attendees: []
     };

    toggle = () => {
        this.setState(prevState => ({ open: !prevState.open }));
      };
    componentDidMount() {
        let attendee = [];
        for (let i = 0; i < 5; i++) {
            attendee.push(uniqueNamesGenerator({
                dictionaries: [starWarsCharacters],
                length: 1,
                space: ' '
              }));
        }
        this.setState({attendees: attendee})
    }
    render() {
        console.log(this.props.evento)
        let evento = this.props.evento;
        let {text} = evento.description;

    if(text){
        if (text.length >= 250) {
            text = text.substr(0,200);
        }
    }else {
        text = null
    }

    

    return(
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo  ? <img src={evento.logo.url} alt={evento.name.text}/> : null}
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                    <p>{text}</p>
                </div>
                <div className="uk-card-footer">
                    <a href={evento.url} target="_blank" rel="noopener noreferrer" className="uk-button uk-button-secondary">
                       More info
                    </a>
                    <div/>
                    <br/>
                    <a target="_blank" onClick={this.toggle} rel="noopener noreferrer" className="uk-button uk-button-secondary">
                       See Atendees
                    </a>
                    
                    <Expand
                    open={this.state.open}
                    duration={1000}
                    >
                    {this.state.attendees.map(attendee => (
                        <div>{attendee}</div>
                    )
                        
                    )}
                    </Expand>
                </div>
        
            </div>
        </div>
    );
    }
    
};

export default Evento;
