import React, { Component } from 'react';
import './Liste.css';
import ListElement from './ListElement';
import AddElement from './AddElement';
import {connect} from 'react-redux';
import { delListElement } from '../actions/index_actions';

class Liste extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			showInput: true
		};

		this.setShowInput = this.setShowInput.bind(this);
		this.deleteListElementHandler = this.deleteListElementHandler.bind(this);
	};

	deleteListElementHandler = (id) => {
		this.props.delete(id);
		console.log('juhu: ' + this.props.Elements.length);
		if (this.props.Elements.length === 1) {
			
			this.setState({showInput: true})
		}
	}

	setShowInput = () => {
		this.setState({
			showInput : !this.state.showInput
		})
	}

	render() {
		return (
			<div className="Liste">
				{this.props.Elements.map( (element, index) => {
					return (
						<ListElement 
							key={element.id}
							id={element.id}
							title={element.title} 
							desc={element.desc}
							deleteHander={this.deleteListElementHandler}
						/>
					)})
				}
				{this.props.Elements.length != 0? <button className="btn btn-primary" onClick={this.setShowInput}>Hinzufügen</button> : null}
				{(!this.state.showInput || this.props.Elements.length === 0)? <AddElement></AddElement> : null}
			</div>	
		)
	}
}

let mapStateToProps = function(state) {
	return {
		Elements : state.list
	}
}

let mapDispatchToProps = {
	delete: delListElement
};

let ListeContainer = connect(mapStateToProps,mapDispatchToProps)(Liste);

export default ListeContainer;