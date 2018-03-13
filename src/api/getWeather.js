import makeRequest from '../utils/makeRequest'

const getWeather = (value, callback) => {
	makeRequest(
		'GET',
		`http://openweathermap.org/data/2.5/forecast/daily/?appid=b6907d289e10d714a6e88b30761fae22&id=${value}&units=metric`,
		response => callback(response)
	)
}

export default getWeather
