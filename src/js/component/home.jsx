import React from "react";
import { render } from "react-dom/cjs/react-dom.production.min";



//create your first component
class TrafficLight extends React.Component{
	constructor(){
		super();
		this.state={
			clickedLight: null
		}
	}
	
	render(){
		console.log(this.state);
		let redExtraClass='';
		let yellowExtraClass='';
		let greenExtraClass='';

		if(this.state.selectedLight == 'red') redExtraClass = "selected"
		if(this.state.selectedLight == 'yellow') yellowExtraClass = "selected"
		if(this.state.selectedLight == 'green') greenExtraClass = "selected"

	return (
		<div className="text-center mt-5">
		<div id="trafficTop"></div>
			<div className="container">
				<div className={"red light "+redExtraClass}onClick={()=> this.setState({selectedLight: 'red'})}></div>
				<div className={"yellow light "+yellowExtraClass} onClick={()=> this.setState({selectedLight: 'yellow'})}></div>
				<div className={"green light "+greenExtraClass} onClick={()=> this.setState({selectedLight: 'green'})}></div>
			</div>
		</div>
		);
	}
};

export default TrafficLight;


