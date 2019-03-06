"use strict";var precacheConfig=[["/app.17c3499e.js","733f04e738d630fd684716fe6ff3673e"],["/app.17c3499e.js.gz","4a273ee1497cf147f2a3b8be802e8cc7"],["/app.17c3499e.js.map.gz","1c3ebd1e9b4f57fc479f2d3546678719"],["/index.html","a134d835402430a620ab4ee8ed8a5d57"],["/react.ecb5943a.js","a467da622fe13d3762a149271d7c1893"],["/react.ecb5943a.js.gz","38b4a4520f42e48e960882847eaca31a"],["/react.ecb5943a.js.map.gz","8db00c8b2dca5bbe41de46c1f23be63e"],["/static/assets/project.77644bed.png","77644bedbb7ee4e2e9760bda3b4c35be"],["/static/assets/user.fda3837f.png","fda3837f8fe55c96663e5e4b51c94494"],["/static/css/0.d4320da28e48bdd82d0d.css","40c9c92d73993d1b0ed1639c728a4ba1"],["/static/css/0.d4320da28e48bdd82d0d.css.gz","84cbb863d6fbde72490fae0151a56641"],["/static/css/1.d4320da28e48bdd82d0d.css","e81f14b210a80edcb37bc88f0a74cda2"],["/static/css/1.d4320da28e48bdd82d0d.css.gz","957342aa6497de283a71a0d374d637a6"],["/static/css/10.d4320da28e48bdd82d0d.css","57f1e841e6a20243d9480da2f61311cb"],["/static/css/11.d4320da28e48bdd82d0d.css","91457c70b756caeb27a2b53873683a10"],["/static/css/12.d4320da28e48bdd82d0d.css","f4fa3ed032f6b2b9b16dec7320646db4"],["/static/css/2.d4320da28e48bdd82d0d.css","eee4ca331794a798aa7b462df967231d"],["/static/css/2.d4320da28e48bdd82d0d.css.gz","69f4068c8e9c169bd12f55760fb81316"],["/static/css/6.d4320da28e48bdd82d0d.css","64ad04201a3d605fa1c671182995d69c"],["/static/css/6.d4320da28e48bdd82d0d.css.gz","018df731da838ea35f5dfbb4e960d7c0"],["/static/css/7.d4320da28e48bdd82d0d.css","cd03d209725f459741ace36673fd58cd"],["/static/css/7.d4320da28e48bdd82d0d.css.gz","b7037fcefcbbce98e3e7c7b4633dd00d"],["/static/css/8.d4320da28e48bdd82d0d.css","cb648b3bfec594d120d38fbb3324da7a"],["/static/css/9.d4320da28e48bdd82d0d.css","3c645c424371a9c6225e4b0f1bdc395c"],["/static/css/9.d4320da28e48bdd82d0d.css.gz","ef2d82de3b6cdecabd0c94f2d6664767"],["/static/css/app.d81b162e.css","b33667233342bace32bce05a10f5dd30"],["/static/css/app.d81b162e.css.gz","48b14e269e6e4039096b55d849e4d187"],["/static/js/0.2d44dbec.js","15675236c949842ab1e48c562938f78b"],["/static/js/0.2d44dbec.js.map.gz","6bdfd8b62e9fd9dfc20bdbb8c3e032b5"],["/static/js/1.b7228fa9.js","dd62a47b933b746d4e26b571b7d7443c"],["/static/js/1.b7228fa9.js.gz","6926b65eadbb79913d0c541b53a2f9b7"],["/static/js/1.b7228fa9.js.map.gz","cb7985d0437edbd46c1dddb2b5e8be2b"],["/static/js/10.f396e12c.js","babf6e76ef12610fc005b268954e5316"],["/static/js/10.f396e12c.js.gz","fb77718589f0e379d7ba3ea7912419f4"],["/static/js/10.f396e12c.js.map.gz","6259a1d53a5773df1fc296a82544c822"],["/static/js/11.92b33197.js","6f19b5964817a45a959b79b1fefd2c59"],["/static/js/12.60083337.js","f159e26591c7199b750a94124807c6ab"],["/static/js/13.f690ac5c.js","51fbb1a73204da6323196b52fafb3c8d"],["/static/js/14.0c609064.js","29aabb44bdb116641d18b3be733e30d9"],["/static/js/15.2bca3ed9.js","08b28a0c4ee32ee14bfc48fc91b673b9"],["/static/js/16.0bc27416.js","5150b38f561e61883ed2caeaa0fb982f"],["/static/js/17.4e14e738.js","07f320b083e66b07c072909cce3862e0"],["/static/js/2.5cce6839.js","9145d3874632e6376b469e0700c2265b"],["/static/js/2.5cce6839.js.gz","4c6039946450e7ace0d66273722cc701"],["/static/js/2.5cce6839.js.map.gz","fc5d8ffcb743c5955660f9f9b0c68701"],["/static/js/6.5d1ea6ea.js","fa97fabbb93509533cdf068a416df903"],["/static/js/6.5d1ea6ea.js.gz","72c89234497c376db76f100df29e4adc"],["/static/js/6.5d1ea6ea.js.map.gz","5cea3f721df2c765e5e05d35be8cde7b"],["/static/js/7.d2426137.js","79b5d2f569d452bdd300e3a0d61921ac"],["/static/js/7.d2426137.js.gz","42dcf5caf6080ca2175dca32fb692699"],["/static/js/7.d2426137.js.map.gz","f5c56fb830937be27704d2ad970d34e4"],["/static/js/8.6079b984.js","da9981a877dc85eb9b1cfd3b746c9e8e"],["/static/js/8.6079b984.js.gz","ed1fa586ecd0379e47738c4442d5fadd"],["/static/js/8.6079b984.js.map.gz","8b5c9561ada3ef9cde2a0fd9f24f916e"],["/static/js/9.c80060d7.js","9ba4f4969f284257aff46395d89e3eb1"],["/static/js/9.c80060d7.js.gz","32d0e7f818e0c42a17e1a910197cb418"],["/static/js/9.c80060d7.js.map.gz","b41466fdc69f549d9601d4a6cf7e0355"],["/static/js/external.49740a7e.js","1f47981ff1aef349807e1f9ce245408d"],["/static/js/external.49740a7e.js.gz","e1f2f4bd86797a89b98896efa0d7496c"],["/static/js/external.49740a7e.js.map.gz","9a1061da242b9c450d037e56a56f64f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,/\.\w{8}\./);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});