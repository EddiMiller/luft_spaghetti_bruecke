import React from 'react';
import moment from 'moment';


const ListElement = (props) => {
	console.log(props);
	
	return (
		<div className="card ListElement">
			
			<div className="card-body">
				<div className="time">
					<div>Start: {moment(props.start).format('HH:mm')} </div>
					<div>Ende: {moment(props.end).format('HH:mm')}</div>
				</div>
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.desc}</p>
			
				id: {props.id} <br/>
				<button className="btn btn-danger del-button" onClick={() => props.deleteHander(props.id)}>Löschen</button>

			</div>
			
		</div>
	)
};

export default ListElement;