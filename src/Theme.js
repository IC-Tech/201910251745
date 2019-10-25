/* Copyright © Imesh Chamara 2019 */
import './Themes.css'
const ColorThemes = [ 'red','pink','purple','indeigo','blue','teal','yellow','orange','green','black' ]
const Theme = {
	set: a => [a = [a, a=>([a=parseInt(a).toString(16),a.length < 2 ? '0'+a:a])[1], '#'], new ic.icApp.e('body').clr(...ColorThemes).cla(ColorThemes[typeof a[0] == 'number' ? a[0] : ColorThemes.indexOf(a[0])]), getComputedStyle(ic.icApp.qs('body')).getPropertyValue('--light-4').match(/\d+/g).forEach(b=> a[2] += a[1](b)), ['theme-color', 'msapplication-navbutton-color', 'apple-mobile-web-app-status-bar-style'].forEach(b=> new ic.icApp.e(`[name=${b}`).sa('content', a[2]))]
}
const initTheme = a => {
	const icApp = a
	a = JSON.parse(localStorage.getItem('ICTech.Theme'))
	if(!a && a != false) a = window.matchMedia("(prefers-color-scheme: dark)").matches
	return setTheme(icApp, a)
}
const setTheme = (a,b) => {
	new a.e('body')[b ? 'cla' : 'clr']('dark')
	return b
}
export {ColorThemes, Theme, initTheme, setTheme}
