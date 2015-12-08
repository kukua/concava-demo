import React from 'react'

export default class Storage extends React.Component {
	render () {
		return (
			<div className="ui segment">
				<h2>Storage</h2>
				<table className="ui celled table">
					<thead>
						<tr>
							<th>Time</th>
							<th>attr1</th>
							<th>attr2</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2015-12-01 10:10:10</td>
							<td>20.4</td>
							<td>90</td>
						</tr>
						<tr>
							<td>2015-12-02 10:10:10</td>
							<td>20.5</td>
							<td>88</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
