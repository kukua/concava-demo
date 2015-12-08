import React from 'react'
import {render} from 'react-dom'
import Connectors from './connectors'
import ConCaVa from './concava'
import Storage from './storage'

class App extends React.Component {
	render () {
		var progress = 0.33
		return (
			<div>
				<h1>ConCaVa demo</h1>
				<p>
					By clicking 'Send' the device ID and payload are send to ConCaVa, which converts, calibrates, validates, and store the data.
					<br/>Try changing the payload value or ConCaVa metadata and see what happens.
					<br/>Check the browser console for more debugging output.
				</p>
				<div className="ui small progress error">
					<div className="bar" style={{ width: progress * 100 + '%' }}></div>
					<div className="label">There was an error.</div>
				</div>
				<div className="ui three column grid">
					<div className="column">
						<Connectors />
					</div>
					<div className="column">
						<ConCaVa />
					</div>
					<div className="column">
						<Storage />
					</div>
				</div>
			</div>
		)
	}
}

render(<App />, document.getElementById('app'))
