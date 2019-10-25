/* Copyright © Imesh Chamara 2019 */
'use strict';
import './icApp.js'
import {IC_DEV} from './common.js'
const icApp = ic.icApp
const _a = a => Object.keys(a[0]).forEach(b=>a[1](b))
const _b = a => typeof a == 'object' ? a : [a]
const _elm_pos = 10
const Loop = a => {
	for(var i=0; i<a[0]; i++) a[1]([i, a])
}
const _ce = a => _elm({e: new icApp.e(icApp.cE(a.t)), d: a})
const _elm = a => [
a.d.t ? [a.e.v.tagName != a.d.t.toUpperCase() ? (a.e = new icApp.e(([a.t = icApp.cE(a.d.t), a.e.v.parentElement ? a.e.v.parentElement.replaceChild(a.t, a.e.v) : 0, a.t])[2])) : 0] : 0,
a.d.s ? [_a([a.e.st, b => [a.e.st[b = a.e.st[b]] = a.d.s[b] ? a.d.s[b] : null, a.d.s[b] ? delete a.d.s[b] : 0]]), _a([a.d.s, b => a.e.st[b] = a.d.s[b]])] : 0,
a.d.cl ? [(a.d.cl = _b(a.d.cl)).forEach(b => a.e.clc(b) ? 0 : a.e.cla(b)), a.e.cl.forEach(b => a.d.cl.indexOf(b) >= 0 ? 0 : a.e.clr(b))] : 0,
a.d.at ? a.d.at.forEach((b,c) => b[1] ? (a.e.v.getAttribute(b[0]) == b[1].toString() ? delete a.d.at[c] : a.e.v.setAttribute(b[0], b[1])) : a.e.v.removeAttribute(b[0])) : 0,
a.d.e ? a.d.e.forEach(b => a.e.v[b[0]] = b[1]) : 0,
a.d.d ? _a([a.d.d, b => a.e.d[b] = a.d.d[b]]) : 0,
a.d.html ? [a.e.html != a.d.html ? a.e.html = a.d.html : 0] : 0,
a.d.txt ? [a.e.txt != a.d.txt ? a.e.txt = a.d.txt : 0] : 0,
!a.d.noupdate && a.d.ch ? [a.d.ch.forEach((b,c) => b ? (a.e.ch[c] ? _elm({e: new icApp.e(a.e.ch[c]), d: b}) : a.e.ap(_ce(b)[_elm_pos].e.v)) : 0), a.e.ch.length > a.d.ch.length ? (b => { while(a.d.ch.length < a.e.ch.length) a.e.ch[a.e.ch.length - 1].remove() })() : 0] : 0,
a.d.id ? a.e.v.id = a.d.id : 0,
a
]
class icAppRender {
	constructor() {
		this._elm = _elm.bind(this)
		this._ce = _ce.bind(this)
		this.e = null
		this.a = false
		this.pevData = null
		if(IC_DEV) __IC_DEV__[this.constructor.name] = this
	}
	update(d) {
		if(this.data) {
			if(this.willUpdate) this.pevData = Object.assign({}, this.data)
			Object.assign(this.data, d)
		}
		if(this.render && (typeof this.willUpdate == 'undefined' || !this.willUpdate())) {
			var b = this.render()
			this._elm({e: this.e, d: {ch: typeof b.length == 'undefined' ? [b] : b}})
			if(this.a && this.didUpdate) this.didUpdate()
			if(!this.a) this.a = true
		}
	}
	mount(e) {
		this.e = new icApp.e(e)
		this.update()
		if(this.didMount) this.didMount()
	}
}
export {icAppRender as IAR, _ce as IAR_CE, _elm_pos as IAR_EP}
