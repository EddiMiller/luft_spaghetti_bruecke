import React, { Component } from 'react';
import './Liste.css';
import ListElement from './ListElement';
import AddElement from './AddElement';
import {connect} from 'react-redux';

class Liste extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			showInput: true
		};

		this.setShowInput = this.setShowInput.bind(this);
	};

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
							title={element.title} 
							desc={element.desc}
						/>
					)})
				}
				<button className="btn btn-primary" onClick={this.setShowInput}>Hinzufügen</button>
				{!this.state.showInput? <AddElement></AddElement> : null}
			</div>	
		)
	}
}

let mapStateToProps = function(state) {
	return {
		Elements : state.list
	}
}

let mapDispatchToProps = {}

let ListeContainer = connect(mapStateToProps,mapDispatchToProps)(Liste);

export default ListeContainer;