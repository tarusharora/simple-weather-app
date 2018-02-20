import request from 'superagent'

const makeRequest = (type, url, success, failure) => {
	request(type, url).then(success, failure)
}

export default makeRequest