/* Copyright © Imesh Chamara 2019 */
import './icApp.js'
import {Theme, initTheme, setTheme} from './Theme.js'
import {IAR} from './icApp-render.js'
import {IC_DEV} from './common.js'
import './signin.scss'

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
			ready: false
		}
		this.analytics = firebase.analytics()
		this.performance = firebase.performance()
		this.googleProvider = new firebase.auth.GoogleAuthProvider()
		this.googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email')
		this.facebookProvider = new firebase.auth.FacebookAuthProvider()
		this.facebookProvider.addScope('email')
		this.facebookProvider.addScope('user_link')
	}
	didMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.update({user, UI: 1})
			if(user) this.analytics.setUserId(user.uid)
			gtag('event', 'screen_view', { 'screen_name': this.data.user ? 'signedUser' : 'sign'})
		})
		firebase.auth().getRedirectResult().then(a => {
			if (a.user) {
				gtag('event', a.additionalUserInfo.isNewUser ? 'sign_up' : 'login', {
					method : a.additionalUserInfo.providerId == 'google.com' ? 'Google' : 'Unknown',
					'event_callback': a => {
						location = location.origin
				}})
				setTimeout(a => {
					gtag('event', 'exception', {'description': 'gtag event_callback failed', 'fatal': false})
					location = location.origin
				}, 4000)
			}
		})
		document.addEventListener('click', a => {
			a = {a: new icApp.e(a.target), b: 0}
			for(var b=0; b<3 && a.b == 0; b++)
				a.b = (a.a.v.id == 'menu-btn' ? 1 : (a.a = a.a.p) ? 0 : 0)
			if(a.b == 0) icApp.ds({t: 'mb'}).v.checked = false
		})
		this.update({ready:true})
	}
	didUpdate() {}
	close() {
		window.close()
	}
	GSignin() {
		firebase.auth().signInWithRedirect(this.googleProvider)
	}
	FSignin() {
		firebase.auth().signInWithRedirect(this.facebookProvider)
	}
	signout() {
		firebase.auth().signOut()
		gtag('event', 'logout')
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
						{ t: 'div', s: {display: !this.data.user ? 'flex' : 'none'}, ch: [
							{t: 'span', txt: 'Signin To ELearn', cl: 'c01' },
							{t: 'div', ch: [
								{t: 'span', cl: 'ic-btn0', txt: 'Sign in with Google', e:[['onclick', a => this.GSignin()]] },
								{t: 'span', cl: ['ic-btn0', 'dis'], txt: 'Sign in with Email' },
								{t: 'span', cl: ['ic-btn0', 'dis'], txt: 'Sign in with Twitter' },
								{t: 'span', cl: ['ic-btn0', 'dis'], txt: 'Sign in with Github' },
								{t: 'span', cl: ['ic-btn0', 'dis'], txt: 'Sign in with Yahoo' },
								{t: 'span', cl: 'ic-btn0', txt: 'Sign in with Facebook', e:[['onclick', a => this.FSignin()]] },
								{t: 'span', cl: ['ic-btn0', 'dis'], txt: 'Sign in with Microsoft' }
							]}
						]},
						{ t: 'div', s: {display: this.data.user ? 'flex' : 'none'}, ch: [
							{t: 'span', txt: 'ELearn', cl: 'c01' },
							{t: 'span', txt: 'You have already signin to ELearn.', cl: 'c03' },
							{t: 'div', ch: [
								{t: 'a', cl: 'ic-btn0', at: [['href', '/']], txt: 'ELearn' },
								{t: 'span',cl: 'ic-btn0',  txt: 'Signout', e:[['onclick', a => this.signout()]] }
							]}
						]}
					]}
				]}
			]},
			{ s: {display: !this.data.ready ? 'flex' : 'none'} }
		])
	}
}
new ELearn().mount(_root_.v)
})
