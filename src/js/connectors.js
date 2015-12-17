/*eslint-env jquery*/

import React from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/text'
import 'brace/mode/xml'
import 'brace/theme/github'

export default class Connectors extends React.Component {
	constructor () {
		super()
		var deviceId = 'AABBCCDD'
		var hex = '55FEF55EFE03F5'
		this.state = {
			deviceId,
			raw: hex,
			mqtt: hex,
			lora: (`
				<?xml version="1.0" encoding="UTF-8"?>
				<DevEUI_uplink xmlns="http://uri.actility.com/lora">
					<Time>2015-10-22T13:39:59.489+02:00</Time>
					<DevEUI>${deviceId}</DevEUI>
					<FPort>1</FPort>
					<FCntUp>1</FCntUp>
					<ADRbit>1</ADRbit>
					<FCntDn>148</FCntDn>
					<payload_hex>${hex}</payload_hex>
					<mic_hex>444eefd3</mic_hex>
					<Lrcid>00000065</Lrcid>
					<LrrRSSI>-99.000000</LrrRSSI>
					<LrrSNR>7.750000</LrrSNR>
					<SpFact>12</SpFact>
					<SubBand>G1</SubBand>
					<Channel>LC2</Channel>
					<DevLrrCnt>1</DevLrrCnt>
					<Lrrid>29000071</Lrrid>
					<LrrLAT>52.211414</LrrLAT>
					<LrrLON>5.194857</LrrLON>
					<Lrrs>
						<Lrr>
							<Lrrid>29000071</Lrrid>
							<LrrRSSI>-99.000000</LrrRSSI>
							<LrrSNR>7.750000</LrrSNR>
						</Lrr>
					</Lrrs>
					<CustomerID>100000728</CustomerID>
					<CustomerData>{"alr":{"pro":"LORA/genericA.1","ver":"1"}}</CustomerData>
					<ModelCfg>0</ModelCfg>
				</DevEUI_uplink>
			`).replace(/^\n\t+/, '').replace(/\n\t\t\t\t/g, '\n').replace(/\n\t+$/, ''),
			spul: '0000000000000000'.substr(0, 16 - deviceId.length) + deviceId + '0207FFFF' + hex + hex,
		}
	}
	componentDidMount () {
		$(this.refs.menu).find('.item').tab()
	}
	render () {
		return (
			<div className="ui segment">
				<h2>
					Connectors
					<button className="ui primary button right floated">Send</button>
				</h2>
				<div>Device ID: {this.state.deviceId}</div>
				<div ref="menu" className="ui top attached tabular menu">
					<a className="item active" data-tab="raw">Raw</a>
					<a className="item" data-tab="mqtt">MQTT</a>
					<a className="item" data-tab="lora">LoRa</a>
					<a className="item" data-tab="spul">SPUL</a>
				</div>
				<div className="ui bottom attached tab segment active" data-tab="raw">
					Hexadecimal payload
					<AceEditor
						mode="text"
						theme="github"
						name="connector-raw"
						width="auto"
						value={this.state.raw}
						onChange={(raw) => { this.setState({ raw }) }}
						editorProps={{$blockScrolling: true}}
					/>
				</div>
				<div className="ui bottom attached tab segment" data-tab="mqtt">
					MQTT publish event JSON
					{/*"client.publish('data', new Buffer(<hex>))"*/}
					<AceEditor
						mode="text"
						theme="github"
						name="connector-mqtt"
						width="auto"
						value={this.state.mqtt}
						onChange={(mqtt) => { this.setState({ mqtt }) }}
						editorProps={{$blockScrolling: true}}
					/>
				</div>
				<div className="ui bottom attached tab segment" data-tab="lora">
					LoRa XML
					<AceEditor
						mode="text"
						theme="github"
						name="connector-lora"
						width="auto"
						value={this.state.lora}
						onChange={(lora) => { this.setState({ lora }) }}
						editorProps={{$blockScrolling: true}}
					/>
				</div>
				<div className="ui bottom attached tab segment" data-tab="spul">
					SPUL blocks
					<AceEditor
						mode="text"
						theme="github"
						name="connector-spul"
						width="auto"
						value={this.state.spul}
						onChange={(spul) => { this.setState({ spul }) }}
						editorProps={{$blockScrolling: true}}
					/>
				</div>
			</div>
		)
	}
}
