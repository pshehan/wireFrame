"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/wire-frame/index.html","49e3bff42f3ede9954d1c30f2484b10f"],["/wire-frame/static/css/main.c0a63c00.css","fd0598cd2cf29d947b57e4c878ff6288"],["/wire-frame/static/js/main.d9d1f9fe.js","421a2e94c59267fb0aa231c08bcf4c8e"],["/wire-frame/static/media/Avon.c11bbe2f.jpg","c11bbe2f67e22ea3ecddfb7102814105"],["/wire-frame/static/media/Bunk.fab234ff.jpg","fab234ff45963b04bc7e58624cafc4e8"],["/wire-frame/static/media/Bunny.66defc1d.jpg","66defc1df70fe987246be289ec49defe"],["/wire-frame/static/media/Davis.89d574e5.jpg","89d574e51b2adb87ba880b5f2fc2da6a"],["/wire-frame/static/media/Frank_Sobotka.cb01796c.jpg","cb01796cf5215465fefb8f4f7d0c818e"],["/wire-frame/static/media/Freamon.c7e2c0e4.jpg","c7e2c0e4c075dbef33b7d43c5e0b02d2"],["/wire-frame/static/media/Haynes.47a355d8.jpg","47a355d88773cd93bc82203f19faf04c"],["/wire-frame/static/media/Herc.a6c12364.jpg","a6c123643727b57de8e4b60d90825bfe"],["/wire-frame/static/media/McNulty.375ecef2.jpg","375ecef2de286dc474a1f46c159fabb6"],["/wire-frame/static/media/Omar.396bccae.jpg","396bccae01e1116736e385be8b6ce7b6"],["/wire-frame/static/media/Prez.4bb609e8.jpg","4bb609e83417d9fc09a9b1db87c94ddc"],["/wire-frame/static/media/Stringer.eda99370.jpg","eda99370f71adf19129e6db5ea8e2a22"],["/wire-frame/static/media/Wilson.ec870419.jpg","ec870419ef122fdaba3b98b239455f45"],["/wire-frame/static/media/bg1.f0370b50.jpg","f0370b505be5476085be2d056676e271"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var a=new Request(r,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),t=urlsToCacheKeys.has(r));var n="/wire-frame/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});