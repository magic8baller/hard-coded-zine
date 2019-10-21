import React, {Component} from 'react';
import AppGrid from './AppGrid';
import data from './db.js';
import {img10, img6, img7, img8, img9} from './images';
export default class App extends Component {
	state = {
		poems: data.poems,
		iframes: [
			{id: 1, uri: 'https://open.spotify.com/playlist/0LMRW5n645F40QwaT5oVeA?si=M8mhH1GzSNW_kNtNl1UnmA'}, {id: 2, uri: 'https://open.spotify.com/playlist/37i9dQZF1DWY1XXKzcWtF3?si=UJwKftMxQyqWrRdkqFLmKw'}, {id: 3, uri: 'https://open.spotify.com/playlist/3MXpifLwW0UUN23dbY15k0?si=UxEypWslTHKWiCg8DOo78Q'}
		],
		images: [
			{src: img7, title: 'ok'}, {src: img8, title: 'two'}, {src: img9, title: 'third'}, {src: img10, title: 'fourth'}, {src: img6, title: 'sixth'}
		]
	}
	// componentDidMount () {
	// 	// let poems = [];
	// 	fetch(`http://localhost:3001/poems`)
	// 		.then(jsonResponse => jsonResponse.json())
	// 		.then(poemsData => {
	// 			// poems.push(poemsData)
	// 			this.setState({poems: poemsData})
	// 		})

	// 	fetch(`http://localhost:3001/iframes`)
	// 		.then(jsonResponse => jsonResponse.json())
	// 		.then(iframesData => {
	// 			// s.push(poemsData)
	// 			this.setState({iframes: iframesData})
	// 		})
	// }

	render () {
		console.log(this.state.poems)
		return (
			<div>
				<AppGrid poems={this.state.poems} images={this.state.images} iframes={this.state.iframes} />
			</div>
		)
	}
}
