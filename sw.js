if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),d={module:{uri:l},exports:o,require:a};s[l]=Promise.all(r.map((e=>d[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App.1e0b7131.css",revision:null},{url:"assets/App.675991cf.js",revision:null},{url:"assets/Footer.41e268d0.css",revision:null},{url:"assets/Footer.a96b7cc5.js",revision:null},{url:"assets/index.050dbb19.css",revision:null},{url:"assets/index.175ca634.js",revision:null},{url:"assets/index.2ece20bc.js",revision:null},{url:"assets/index.4795bbfe.css",revision:null},{url:"assets/index.82e4013b.js",revision:null},{url:"assets/index.903cf3a1.js",revision:null},{url:"assets/index.9e19c976.js",revision:null},{url:"assets/index.c0c8b951.js",revision:null},{url:"assets/index.ea819715.js",revision:null},{url:"assets/index.fb36b0a2.css",revision:null},{url:"assets/index.module.9603997b.js",revision:null},{url:"assets/pathseg.7140b611.js",revision:null},{url:"assets/Root.f80c9553.js",revision:null},{url:"assets/tiny-warning.esm.e9370219.js",revision:null},{url:"index.html",revision:"1cf3dffa59e18344269a437d558d9c84"},{url:"47th-street-logo.png",revision:"85e2f41d3bee35d8505cab8443ee308d"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"assets/mui.3fef0fab.svg",revision:null},{url:"assets/pwa.0d28f369.svg",revision:null},{url:"assets/react_ed.bc50972b.svg",revision:null},{url:"assets/recoil.c6c3cc8f.svg",revision:null},{url:"assets/rr.c079b359.svg",revision:null},{url:"assets/ts.849f5fbf.svg",revision:null},{url:"assets/vite.17e50649.svg",revision:null},{url:"audit.png",revision:"4e06993eed49427f321924f5441942bf"},{url:"backdraft-logo.svg",revision:"908cdedab94c231774fc1f7c685b4b7c"},{url:"blockdust-icon.png",revision:"1ce7d03cb985e90eae5b45020580cf99"},{url:"bloodgate-logo.svg",revision:"ffd00876996cde993a1401a104ea818e"},{url:"bundle.png",revision:"9f0f2831f95d176ff29e2ef2ef94d0ed"},{url:"cover.png",revision:"1df4043c45d5bb3e7cfaa413f24ec0f2"},{url:"demo-dark.png",revision:"02bd120430604874b8daa043b5305edf"},{url:"demo-light.png",revision:"2d500252e78cdb3d463788942aab219b"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"file-folder-structure.png",revision:"6d40a900cc13f62f95701d7fb58dd1d6"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"pwa-reload.png",revision:"0b6b77eb7dbc9ee80eb9e7054731e0d6"},{url:"reaver-logo.svg",revision:"e8effe8167b04e22af7650dc5ab24375"},{url:"schmoozer-logo.svg",revision:"b42e9143ba3c3ac08f985bb2363bca3c"},{url:"use-template.png",revision:"22633ffac72d95c35b8f2a6ee15df6b2"},{url:"favicon.svg",revision:"1d63cc3476f55e13ee57fff67a6fd741"},{url:"favicon.ico",revision:"eb5b87164c9be3cb704a1ac547f2c51d"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"410d328b07c46ddbe9a2e7cb29aa70da"},{url:"pwa-192x192.png",revision:"3b6265c5e75ae1c1fd666d575f33884b"},{url:"pwa-512x512.png",revision:"e571b86ade2a8bda44002d5903cae102"},{url:"manifest.webmanifest",revision:"76f2ef01d9fb80bea6a4ccd971066e3d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
