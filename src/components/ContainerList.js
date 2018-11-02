import React, { Component } from 'react';
import ListItem from './ListItem';

export default class ContainerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasdata: false
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({
				hasdata: true
			})
		}
	}
	render() {
		let { data } = this.props;

		if(!this.state.hasdata) {
			return null;
		}

		return (
			<div className="container-list">
				{
				data.data.children.length == 0 
				?	<p className="error">Não existem dados aqui!</p> 
				: 	data.data.children.map((item, index) => <ListItem key={index} data={item.data}/> )
				}
			</div>
		);
	}
}
