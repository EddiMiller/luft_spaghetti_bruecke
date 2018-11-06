import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addListElement } from '../actions/index_actions'


import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'rc-time-picker/assets/index.css';



class AddElement extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			newTitle: "",
			newDesc: "",
			startTime: null,
			endTime: null
			
		};
		this.onChangedTitleHander = this.onChangedTitleHander.bind(this);
		this.onClickHander = this.onClickHander.bind(this);
	}

	handleStartValueChange = (value) => {
		
		this.setState({
			startTime: value
		});
	}

	handleEndValueChange = (value) => {
		console.log(value);
		this.setState({
			endTime: value
		});
		
	}

	onChangedTitleHander = (event) => {
		let title = event.target.value;
		this.setState({
			newTitle: title
		});
	};

	onChangedDescHander = (event) => {
		let desc = event.target.value;
		this.setState({
			newDesc: desc
		});
	};

	onClickHander = () => {
		const title = this.state.newTitle;
		const desc = this.state.newDesc;
		const start = this.state.startTime;
		const end = this.state.endTime;

		this.props.addElement(title, desc, start, end);
		
		this.setState({
			newTitle: "",
			newDesc: "",
			startTime: null,
			endTime: null
		})
	};

	collapseButton = () => {
		const button = <button id="collapseButton" className="btn btn-primary" onClick={() => this.props.setShowInput()}>Einklappen</button>
		if (document.querySelector('#collapseButton')) {
			document.querySelector('#collapseButton').disabled = false;
			if ( this.props.Elements.length === 0 ) {
				document.querySelector('#collapseButton').disabled = true
			};
		};
		return button
	};
	

	render() {
		return (
			<div className="card ListElement">
				<div className="card-body">
					<h5 className="card-title">Füge dein eigenes Event ein.</h5>
					<form className="align-left">
						<div className="form-group">
							<label htmlFor="title" className="label-input" >Title</label>
							<input
								type="text"
								className="form-control"
								id="title"
								onChange={this.onChangedTitleHander}
								value={this.state.newTitle}
								/>
						</div>
						<div className="form-group">
							<label className="label-input" htmlFor="desc">Beschreibung</label>
							<textarea
								id="desc"
								cols="1"
								rows="4"
								className="form-control"
								onChange={this.onChangedDescHander}
								value={this.state.newDesc}>
							</textarea>
						</div>
						<div>
							Startzeit:  
							<TimePicker 
								showSecond={false}
								
								onChange={this.handleStartValueChange}
							/>
							Endzeit:  
							<TimePicker 
								showSecond={false}
								
								onChange={this.handleEndValueChange}
							/>
						</div>
						<button
							className="btn btn-success"
							onClick={this.onClickHander} >Speichern
						</button>
						{this.collapseButton()}
						
					</form>
				</div>
			</div>
		)
	}
};

let mapStateToProps = (state) => {
	return {
		Elements : state.list
	}
};

let mapDispatchToProps = {
	addElement: addListElement
};

let AddElementContainer = connect(mapStateToProps, mapDispatchToProps)(AddElement);

export default AddElementContainer;