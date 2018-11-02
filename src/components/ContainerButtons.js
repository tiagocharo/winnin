import React, { Component } from 'react';

class App extends Component {

	onClickButton(e) {
		e.preventDefault();
		this.listButtons.childNodes.forEach((item) => {
			if (item.hasAttribute('class')) {
				item.classList.remove('checked')
			} 
		})
		e.target.classList.add('checked');
		this.props.option(e.target.innerText.toLowerCase());
	}

	render() {
		return (
			<div ref={listButtons => this.listButtons = listButtons} className="container-buttons">
				<button onClick={(e) => this.onClickButton(e)}>hot</button>
				<button onClick={(e) => this.onClickButton(e)}>new</button>
				<button onClick={(e) => this.onClickButton(e)}>rising</button>
			</div>
		);
	}
}

export default App;
