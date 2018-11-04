import React from 'react';

const ListElement = (props) => {
	
	return (
		<div className="card ListElement">
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.desc}</p>
				id: {props.id} <br/>
				<button className="btn btn-danger del-button" onClick={() => props.deleteHander(props.id)}>Löschen</button>

			</div>
		</div>
	)
};

export default ListElement;