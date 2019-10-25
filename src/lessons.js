/* Copyright © Imesh Chamara 2019 */
'use strict';
import './icApp.js'
import {Theme, initTheme, setTheme} from './Theme.js'
import {IAR} from './icApp-render.js'
import {IC_DEV, XHR} from './common.js'
import {dialogUI} from './dialog-ui.js'
import './dialog.scss'
window.ic = window.ic || []
window.ic.pageLoad = Date.now()
document.addEventListener('DOMContentLoaded', () => {
let icApp = ic.icApp
firebase.performance()
var _root_ = new icApp.e('#root')
Theme.set('red')

const defaultWait = 1200
const Project = '201910251745'
const PublicName = 'ELearn'

class ELearn extends IAR {
	constructor() {
		super()
		this.data = {
			UI: 0,
			UI2: 0,
			ready: false
		}
		this.send = this.send.bind(this)
		var a = firebase.app().options
		this.analytics = firebase.analytics()
		this.performance = firebase.performance()
		this.functions = IC_DEV ? `http://192.168.8.20:5001/${a.projectId}/us-central1/` : `https://us-central1-${a.projectId}.cloudfunctions.net/`
	}
	start(user) {
		if(!user || this.started) return
		this.user = user.uid
		this.analytics.setUserId(this.user)
		this.firestore = firebase.firestore()
		this.started = true
	}
	didMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.update({user, UI: 1})
			this.start(user)
		})
		document.addEventListener('click', a => {
			a = {a: new icApp.e(a.target), b: 0}
			for(var b=0; b<3 && a.b == 0; b++)
				a.b = (a.a.v.id == 'menu-btn' ? 1 : (a.a = a.a.p) ? 0 : 0)
			if(a.b == 0) icApp.ds({t: 'mb'}).v.checked = false
		})
		this.update({ready:true})
		gtag('event', 'page_mount_end', {pageMount: Date.now() - window.ic.pageLoad})
	}
	didUpdate() {}
	willUpdate() {
		if(this.data.UI2 != this.pevData.UI2) gtag('event', 'screen_view', { 'screen_name': (['homepage', 'messages'])[this.data.UI2] })
	}
	close() {
		window.close()
	}
	render() {
		return ([
			{ s: {display: this.data.ready ? 'flex' : 'none'}, ch: [
				{ ch: [
					{},
					{ ch: [
						{}, {},
						{ ch: [
							{s: {display: !this.data.user ? 'inline-block' : 'none'}},
							{s: {display: this.data.user ? 'inline-block' : 'none'}, at:[['href', `/profile.html?tid=${this.data.user ? this.data.user.uid : ''}`]]},
							{}, {},
							{ e: [['onclick', this.close]]}
						]}
					]}
				]},
				{ ch: [
					{ s: {display: this.data.UI == 0 ? 'flex' : 'none'} },
					{ s: {display: this.data.UI == 1 ? 'flex' : 'none'}, ch: [
					]}
				]}
			]},
			{ s: {display: !this.data.ready ? 'flex' : 'none'} }
		])
	}
}
//new ELearn().mount(_root_.v)
})
