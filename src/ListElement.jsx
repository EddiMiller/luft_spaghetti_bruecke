import React from 'react';

const ListElement = (props) => {
	
	const style = {
		width: '80%',
		margin: '5px'
	}

	return (
		<div className="card" style={style}>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.desc}</p>
				<a href="#" className="card-link">read more</a>
			</div>
		</div>
	)
};

export default ListElement;