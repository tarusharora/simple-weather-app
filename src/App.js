import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import { Loader, Dimmer, Segment, Header, Divider } from 'semantic-ui-react'

import WeatherIcon from './components/WeatherIcon'

import Dropdown from './components/Dropdown'
import ItemGroup from './components/ItemGroup'

import Cities from './stubs/Cities'

import getWeather from './api/getWeather'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		// initial state
		this.state = {
			init: false,
			currentCity: '',
			weather: [],
			cityInfo: {}
		}
	}

	onCityChange = (e, { value }) => {
		this.setState({
			init: true,
			currentCity: value,
			weather: []
		})
		// get the weather here and update it in state as soon as you do get it
		getWeather(value, ({ body }) => {
			this.setState({
				weather: body.list,
				cityInfo: body.city
			})
		})
	}

	render() {
		const { currentCity, weather, init, cityInfo } = this.state

		return (
			<div className="App">
				<header className="App-header">
					<WeatherIcon alt="logo" />
					<h1 className="App-title">Babbler - The weather forecast app</h1>
				</header>
				<div className="App-intro" style={{ padding: '8px 12px 24px 12px' }}>
					<Dropdown value={currentCity} placeholder="Select City" options={Cities} onChange={this.onCityChange} />
				</div>
				<div>
					{(() => {
						if (isEmpty(weather) && init) {
							return (
								<Segment style={{ minHeight: '70vh' }}>
									<Dimmer active inverted>
										<Loader>Loading</Loader>
									</Dimmer>
								</Segment>
							)
						} else if (init) {
							return (
								<div>
									<Header as="h1">{`Weather in ${cityInfo.name}, ${cityInfo.country}`}</Header>
									<Divider />
									<ItemGroup data={this.state.weather} />
								</div>
							)
						}
					})()}
				</div>
			</div>
		)
	}
}

export default App
