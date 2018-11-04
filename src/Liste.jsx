import React, { Component } from 'react';
import './Liste.css';
import ListElement from './ListElement';

class Liste extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Elements: [
				{id: 1, title: 'Test1', desc: 'more Test1'},
				{id: 2, title: 'Test2', desc: 'more Test2'},
				{id: 3, title: 'Test3', desc: 'more Test3'},
			]
		};
	};

	render() {
		console.log(this.state.Elements[0].title)
		return (
			<div>
				{this.state.Elements.map( (element, index) => {
					return <ListElement key={element.id} title={element.title} desc={element.desc}/>
				})}
				<h1>Hallo</h1>	
			</div>
			
		)
	}
}

export default Liste;