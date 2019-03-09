"use strict";var geoip2=function(){function Lookup(e,t,o,n){this.successCallback=e,this.errorCallback=t,this.geolocation=o&&o.hasOwnProperty("geolocation")?o.geolocation:navigator.geolocation,this.type=n}var exports={};Lookup.prototype.returnSuccess=function(e){this.successCallback&&"function"==typeof this.successCallback&&this.successCallback(this.fillInObject(this.objectFromJSON(e)))},Lookup.prototype.returnError=function(e){this.errorCallback&&"function"==typeof this.errorCallback&&(e||(e={error:"Unknown error"}),this.errorCallback(e))},Lookup.prototype.objectFromJSON=function(json){return"undefined"!=typeof window.JSON&&"function"==typeof window.JSON.parse?window.JSON.parse(json):eval("("+json+")")};var fillIns={country:[["continent","Object","names","Object"],["country","Object","names","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["traits","Object"]],city:[["city","Object","names","Object"],["continent","Object","names","Object"],["country","Object","names","Object"],["location","Object"],["postal","Object"],["registered_country","Object","names","Object"],["represented_country","Object","names","Object"],["subdivisions","Array",0,"Object","names","Object"],["traits","Object"]]};return Lookup.prototype.fillInObject=function(e){for(var t="country"https://js.maxmind.com/js/apis/geoip2/v2.1/===this.type?fillIns.country:fillIns.city,o=0;o<t.length;o++)for(var n=t[o],r=e,s=0;s<n.length;s+=2){var i=n[s];r[i]||(r[i]="Object"===n[s+1]?{}:[]),r=r[i]}try{Object.defineProperty(e.continent,"continent_code",{enumerable:!1,get:function(){return this.code},set:function(e){this.code=e}})}catch(c){e.continent.code&&(e.continent.continent_code=e.continent.code)}if("country"!==this.type)try{Object.defineProperty(e,"most_specific_subdivision",{enumerable:!1,get:function(){return this.subdivisions[this.subdivisions.length-1]},set:function(e){this.subdivisions[this.subdivisions.length-1]=e}})}catch(c){e.most_specific_subdivision=e.subdivisions[e.subdivisions.length-1]}return e},Lookup.prototype.getGeoIPResult=function(){var e,t,o=this,n="//geoip-js.maxmind.com/geoip/v2.1/"+this.type+"/me?",r={referrer:location.protocol+"//"+location.hostname};if(!this.alreadyRan){this.alreadyRan=1,"Microsoft Internet Explorer"===navigator.appName&&window.XDomainRequest&&navigator.appVersion.indexOf("MSIE 1")===-1?(t=new XDomainRequest,n=window.location.protocol+n,t.onprogress=function(){}):(t=new window.XMLHttpRequest,n="https:"+n);for(e in r)r.hasOwnProperty(e)&&r[e]&&(n+=e+"="+encodeURIComponent(r[e])+"&");n=n.substring(0,n.length-1),t.open("GET",n,!0),t.onload=function(){if("undefined"==typeof t.status||200===t.status)o.returnSuccess(t.responseText);else{var e,n=t.hasOwnProperty("contentType")?t.contentType:t.getResponseHeader("Content-Type");if(/json/.test(n)&&t.responseText.length)try{e=o.objectFromJSON(t.responseText)}catch(r){e={code:"HTTP_ERROR",error:"The server returned a "+t.status+" status with an invalid JSON body."}}else e=t.responseText.length?{code:"HTTP_ERROR",error:"The server returned a "+t.status+" status with the following body: "+t.responseText}:{code:"HTTP_ERROR",error:"The server returned a "+t.status+" status but either the server did not return a body or this browser is a version of Internet Explorer that hides error bodies."};o.returnError(e)}},t.ontimeout=function(){o.returnError({code:"HTTP_TIMEOUT",error:"The request to the GeoIP2 web service timed out."})},t.onerror=function(){o.returnError({code:"HTTP_ERROR",error:"There was a network error receiving the response from the GeoIP2 web service."})},t.send(null)}},exports.country=function(e,t,o){var n=new Lookup(e,t,o,"country");n.getGeoIPResult()},exports.city=function(e,t,o){var n=new Lookup(e,t,o,"city");n.getGeoIPResult()},exports.insights=function(e,t,o){var n=new Lookup(e,t,o,"insights");n.getGeoIPResult()},exports}();
//# sourceMappingURL=geoip2.js.map
