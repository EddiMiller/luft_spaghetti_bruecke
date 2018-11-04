import React, { Component } from 'react';
import './Liste.css';
import ListElement from './ListElement';

import {connect} from 'react-redux';

class Liste extends Component {
	constructor(props) {
		super(props);
	};


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
					
			</div>	
		)
	}
}

let mapStateToProps = function(state) {
	return {
		Elements : state.list
	}
}

let mapDispatchToProps ={

}

let ListeContainer = connect(mapStateToProps,mapDispatchToProps)(Liste);

export default ListeContainer;