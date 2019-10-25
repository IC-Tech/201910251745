/* Copyright © Imesh Chamara 2019 */
/*
File Info
From P201907221247, Export Edition P201908141852
Original Location @P201908141852/icApp.js
Projects: 201908141852, 201905271231, 201908221129, 201909091739
*/
const icApp = {
	get d(){return document},
	qs: v => icApp.d.querySelector(v),
	cE: v => icApp.d.createElement(v),
	cen: (n,v) => icApp.d.createElementNS(n,v),
	qsa: v => icApp.d.querySelectorAll(v),
	_n: {
		a: (v, f) =>{var a=true,b=0;for(;b<v.length&&(a=f(v[b],b,v));b++);return a;}
	},
	e: class e {
		constructor(v){ this.v = typeof v == 'string' ? icApp.qs(v) : v; return v == null || v == undefined ? v : this }
		get cl() { return this.v.classList }
		get ch() { return this.v.children }
		cha(v) { this.v.appendChild(v); return this }
		ap(v) { this.v.appendChild(v); return this }
		// eslint-disable-next-line no-unused-vars
		chr(v) { return ([v == undefined ? (a=>{while(this.ch.length > 0)this.ch[0].remove()})() : this.ch[v].remove(), this])[1] }
		cla(v) { return ([v = [v, this.cl], typeof v[0] == 'object' ? v[1].add(...v[0]) : v[1].add(v[0]), this])[2] }
		// eslint-disable-next-line no-unused-vars
		clr(v) { return !v ? this : ([typeof v == 'object' ? (a=>v.forEach(v=>this.clr(v)))() : this.cl.remove(v) ,this])[1] }
		clc(v) { return typeof v == 'object' ? icApp._n.a(v, v => this.clc(v)) : this.cl.contains(v) }
		get st() { return this.v.style }
		get d() { return this.v.dataset }
		set stp(v) { this.st.setProperty(v[0], v[1]) }
		get txt() { return this.v.innerText }
		set txt(v) { this.v.innerText = v }
		get html() { return this.v.innerHTML }
		set html(v) { this.v.innerHTML = v }
		sa(n,v) {this.v.setAttribute(n,v); return this }
		ae(n,f) { this.v.addEventListener(n,f); return this }
		get p() {return new icApp.e(this.v.parentElement) }
		get tag() {return this.v.tagName }
		rem() { this.v.remove(); return this }
	},
	ds: a => new icApp.e(Object.keys((a = {a,b: ''}).a).forEach(b=> a.b+=`[data-${b}="${a.a[b]}"]`) == 'a' ? 0 : a.b)
}
// eslint-disable-next-line no-undef
;(a=> [window.ic == undefined ? window.ic = [] : 0, window.ic.icApp = icApp, setTimeout(a => [typeof ic.init == 'function' ? ic.init(icApp) : 0],1000)])()
