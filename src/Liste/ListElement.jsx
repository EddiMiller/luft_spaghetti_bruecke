import React from 'react';
import { connect } from 'react-redux';
import { delListElement } from '../actions/index_actions';

const ListElement = (props) => {
	

	return (
		<div className="card ListElement">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.desc}</p>
				id: {props.id} <br/>
				<button className="btn btn-danger del-button" onClick={() => props.delete(props.id)}>Löschen</button>

			</div>
		</div>
	)
};

let mapStateToProps = function(state) {
	return {}
}

let mapDispatchToProps = {
	delete: delListElement
};

let ListElementContainer = connect(mapStateToProps,mapDispatchToProps)(ListElement);

export default ListElementContainer;