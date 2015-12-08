import React from 'react'

export default class ConCaVa extends React.Component {
	render () {
		var types = ['int8', 'uint8', 'int16le', 'int16be', 'uint16le', 'uint16be', 'int32le', 'int32be', 'uint32le', 'uint32be', 'int64le', 'int64be', 'uint64le', 'uint64be', 'floatle', 'floatbe', 'doublele', 'doublebe', 'integer', 'ascii', 'asciiFloat', 'asciiInteger', 'skip']

		return (
			<div className="ui segment">
				<h2>ConCaVa</h2>
				<form className="ui form">
					<h4 class="ui dividing header">First attribute</h4>
					<div className="field">
						<label>Name</label>
						<input type="text" value="attr1" />
					</div>
					<div className="field">
						<label>Type</label>
						<select value="uint16be">
							{types.map((type) => <option value={type}>{type}</option>)}
						</select>
					</div>
					<div className="field">
						<label>Type length</label>
						<input type="number" />
						<p>Amount of bytes (only used by last five types).</p>
					</div>
					<div className="field">
						<label>Calibrator</label>
						<textarea>{'var multiplier = 10\n\nreturn value * multiplier'}</textarea>
					</div>
					<h4 class="ui dividing header">Second attribute</h4>
					<div className="field">
						<label>Name</label>
						<input type="text" value="attr2" />
					</div>
					<div className="field">
						<label>Type</label>
						<select value="uint8">
							{types.map((type) => <option value={type}>{type}</option>)}
						</select>
					</div>
					<div className="field">
						<label>Type length</label>
						<input type="number" />
						<p>Amount of bytes (only used by last five types).</p>
					</div>
					<div className="field">
						<label>Validator (min)</label>
						<input type="number" value="10" />
					</div>
					<div className="field">
						<label>Validator (max)</label>
						<input type="number" value="1000" />
					</div>
					<p>This demo is restricted to two attributes and the min/max validators.</p>
				</form>
				<ul>
					<li>By using generic converter functions, you can easily configure how the payload is being parsed.</li>
				</ul>
			</div>
		)
	}
}
