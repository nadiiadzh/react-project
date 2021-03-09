import React from 'react'
import test from 'img/Capture.jpg'
import hello from './hello'

const App = () => {
	return (
		<>
			<hello />
			<img src={test} alt="Just a test image" />
		</>
	)
}

export default App