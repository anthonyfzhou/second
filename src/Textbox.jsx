import React, { Component } from 'react';
import './Textbox.css';
const prompts = ["as you walk into the next room, you see shaylan and vaib standing over a bench",
				"vaib is screaming about how excited he is about the TOTAL NUMBER OF MEMBERS IN CODEOLOGY this semester",
				"you have no idea what he's talking about and why that was highlighted",
				"shaylan is out here tryna tell vaib he benches ----- for his 1 rep max",
				"but that's turbo cap like how can a human being even lift that",
				"you take a look around and you notice there's not even ---- in weights so wtf are they even talking about",
				"however, you distinctly remember shaylan gassing himself up after his CS70 midterm",
				"perhaps the number is modulo something??",
				"Shaylan's sees you in the corner of his eyes and asks you to spot him",
				"he's tasked you with setting up the weights correctly while he slams his creatine and pre-workout",
				"he said he'll tell you the password after but he also mentions that the you'll need to submit the modulo"];

class Textbox extends Component {
	constructor(props) {
		super(props);
		this.state = {text: prompts,
					  max: 11,
					  index: 0,
					  weight: 0
					 };
		
		this.handleForward = this.handleForward.bind(this);
		this.handleBackwards = this.handleBackwards.bind(this);
		this.setWeight = this.setWeight.bind(this);
	}
	
	handleForward() {
		console.log(this.state.index);
		if (this.state.index < (this.state.max - 1)) {
			this.setState({index: this.state.index + 1});
		}
	}
	
	handleBackwards() {
		if (this.state.index > 0) {
			this.setState({index: this.state.index - 1});
		}
	}
	
	renderBackwardsButton() {
		if (this.state.index == 0) {
			return null;
		}
		return <button onClick={this.handleBackwards}>Previous</button>;
	}
	
	renderForwardsButton() {
		if (this.state.index >= this.state.max - 1) {
			return null;
		}
		return <button onClick={this.handleForward}>Next</button>;
	}
	
	setWeight(event) {
		this.setState({weight: event.target.value},() => { console.log( this.state.weight); });
	}
	
	renderContent() {
		
		let ret;
		
		if (this.state.index >= 1) {
			if (this.state.weight == 1000) {
				ret = <div>
						<div> jason lezak's incredible 100m freestyle leg in the 2008 olympics </div>
						<div id="content">
							<img id="shaylan" src={require('./shaylan.png').default} />
							<img id="bench" src={require('./bench.jpg').default} />
							<img id="vaib" src={require('./vaib.png').default} />
						</div>
						<form>
							<p>Enter the correct weight:</p>
							<input
								type='number'
								onChange={this.setWeight}
							/>
							</form>
					  </div>
				
			} else {
				ret = <div>
						<div id="content">
							<img id="shaylan" src={require('./shaylan.png').default} />
							<img id="bench" src={require('./bench.jpg').default} />
							<img id="vaib" src={require('./vaib.png').default} />
						</div>
						<form>
							<p>Enter the correct weight:</p>
							<input
								type='number'
								onChange={this.setWeight}
							/>
						</form>
					  </div>
			}
		}

		return ret;
	}
	
	render() {
		let content = this.renderContent();
		let forwardButton = this.renderForwardsButton();
		let backwardsButton = this.renderBackwardsButton();
		
		return (
			<div>
				<div id="textDisplay"> {this.state.text[this.state.index]} </div>
				<div>
					{backwardsButton}
					{forwardButton}
				</div>
				{content}
			</div>
		)
	}
}

export default Textbox;

