/* Copyright © Imesh Chamara 2019 */
const Host = location.origin + '/'
const __IC_DEV__ = JSON.parse(process.env.__IC_DEV__) == true
if(__IC_DEV__ && !window.__IC_DEV__) window.__IC_DEV__ = {}
const ReloadError = (e, f) => (f ? f : alert)(e)
const XHR = (url, call, op, data) => {
   // eslint-disable-next-line no-undef
  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
  xhr.open(data ? 'POST' : 'GET', url + ((url.indexOf('?') >= 0 ? '&' : '?') + 't=' + new Date().getTime()))
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status != 0) {
      if(xhr.response) {
        var v
        try {
          v = op && op.raw ? xhr.response : JSON.parse(xhr.response)
        } catch(e) {
          ReloadError('Server response error. (EC: 0xA2 >>> ' + e + ' <)', op && op.err ? op.err : undefined)
        }
        call(v)
      }
      else
        ReloadError('Server response error. (EC: 0xA1)', op && op.err ? op.err : undefined)
    }
  }
  xhr.onerror = function (e) {
    if(e.target.status == 0) ReloadError("The Webpage can't connect to the server. Try again in a few moments.", op && op.err ? op.err : undefined)
  }
  xhr.send(data)
}
const pram = (a, b) => {
  if(!b) {
    b = a
    a = location.search
  }
  var c = a.indexOf(b += '='),
  d = a.indexOf('&', c)
  c = c == -1 ? null : a.substring(c + b.length, d == -1 ? a.length : d)
  return c
}
const mobile = a => ([a = [navigator.userAgent.toLowerCase(), 0], ['android','webos','iphone','ipad','ipod','blackberry','iemobile','opera mini'].forEach(b=> a[1] == 0 && a[0].indexOf(b) >= 0 ? (a[1] = 1) : 0)])[0][1] == 1

export {XHR, pram, mobile, Host, __IC_DEV__ as IC_DEV}
