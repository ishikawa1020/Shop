if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const d=e=>a(e,n),t={module:{uri:n},exports:r,require:d};s[n]=Promise.all(c.map((e=>t[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-kgGGR0wpSvzYXRy80UYgz.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/MT-36475-01.webp",revision:"de21ca87bc57b4794c2d8311e7b6cf30"},{url:"/TR-0293-008-11-03.webp",revision:"5d8f883f8bf8fa3a173678feecc865c3"},{url:"/_next/static/chunks/1307-725b64bf69c813ca.js",revision:"725b64bf69c813ca"},{url:"/_next/static/chunks/1545.adfe54a1fdcc3156.js",revision:"adfe54a1fdcc3156"},{url:"/_next/static/chunks/1b8dab7b-bce25ef553c45d1c.js",revision:"bce25ef553c45d1c"},{url:"/_next/static/chunks/1bfc9850-c0d947158260da0f.js",revision:"c0d947158260da0f"},{url:"/_next/static/chunks/228771e0-c58d9de9cafb3511.js",revision:"c58d9de9cafb3511"},{url:"/_next/static/chunks/3078-fd5fbd184601d86c.js",revision:"fd5fbd184601d86c"},{url:"/_next/static/chunks/31664189-ef19981d2d279cce.js",revision:"ef19981d2d279cce"},{url:"/_next/static/chunks/3297-de2c36c2fcd00197.js",revision:"de2c36c2fcd00197"},{url:"/_next/static/chunks/3844-92110836a76b635a.js",revision:"92110836a76b635a"},{url:"/_next/static/chunks/4347-874a4a741df0306c.js",revision:"874a4a741df0306c"},{url:"/_next/static/chunks/464.b7eadf5a237cbaac.js",revision:"b7eadf5a237cbaac"},{url:"/_next/static/chunks/5353-796b5562c681a6cd.js",revision:"796b5562c681a6cd"},{url:"/_next/static/chunks/5455-6c39be6a9c94ceeb.js",revision:"6c39be6a9c94ceeb"},{url:"/_next/static/chunks/545f34e4-b76f3671e9237e80.js",revision:"b76f3671e9237e80"},{url:"/_next/static/chunks/5e2a4920-fb4877d34d4fe058.js",revision:"fb4877d34d4fe058"},{url:"/_next/static/chunks/6250-269a80411b464366.js",revision:"269a80411b464366"},{url:"/_next/static/chunks/6311-13344aba06d8d0b2.js",revision:"13344aba06d8d0b2"},{url:"/_next/static/chunks/65291039-1b59d9c74e1bf2ba.js",revision:"1b59d9c74e1bf2ba"},{url:"/_next/static/chunks/6728d85a-08f159d5550a4bb6.js",revision:"08f159d5550a4bb6"},{url:"/_next/static/chunks/7136-f0d543ef3274dd25.js",revision:"f0d543ef3274dd25"},{url:"/_next/static/chunks/7366-e08510aab90eac64.js",revision:"e08510aab90eac64"},{url:"/_next/static/chunks/8114-bc8f3fd2630544b5.js",revision:"bc8f3fd2630544b5"},{url:"/_next/static/chunks/8211-e459e8dbb15bad86.js",revision:"e459e8dbb15bad86"},{url:"/_next/static/chunks/9014-036238546cfe201c.js",revision:"036238546cfe201c"},{url:"/_next/static/chunks/9157-fd797e3de97c54a1.js",revision:"fd797e3de97c54a1"},{url:"/_next/static/chunks/9571-056b7baa958fb5d1.js",revision:"056b7baa958fb5d1"},{url:"/_next/static/chunks/ae51ba48-6ab6bb7aef3f4e19.js",revision:"6ab6bb7aef3f4e19"},{url:"/_next/static/chunks/c7773329-408a1ad4fd83f483.js",revision:"408a1ad4fd83f483"},{url:"/_next/static/chunks/c9184924-f97cfe4ccbfdb901.js",revision:"f97cfe4ccbfdb901"},{url:"/_next/static/chunks/d0c16330-9a8bbf8a3e8a487a.js",revision:"9a8bbf8a3e8a487a"},{url:"/_next/static/chunks/framework-353dac0233342c57.js",revision:"353dac0233342c57"},{url:"/_next/static/chunks/main-fae90d64cf8551bd.js",revision:"fae90d64cf8551bd"},{url:"/_next/static/chunks/pages/404-18c42f76ecef8e64.js",revision:"18c42f76ecef8e64"},{url:"/_next/static/chunks/pages/_app-e41211638af0cccf.js",revision:"e41211638af0cccf"},{url:"/_next/static/chunks/pages/_error-22b4b50b70253e43.js",revision:"22b4b50b70253e43"},{url:"/_next/static/chunks/pages/_offline-27f1acf21d4f4a30.js",revision:"27f1acf21d4f4a30"},{url:"/_next/static/chunks/pages/about-us-bc5d562be93dd804.js",revision:"bc5d562be93dd804"},{url:"/_next/static/chunks/pages/auth/forget-password-073f39fa59c634d4.js",revision:"073f39fa59c634d4"},{url:"/_next/static/chunks/pages/auth/login-c743b0819295caf8.js",revision:"c743b0819295caf8"},{url:"/_next/static/chunks/pages/auth/signup-12198475d0d2f4da.js",revision:"12198475d0d2f4da"},{url:"/_next/static/chunks/pages/checkout-526ae595563c73fa.js",revision:"526ae595563c73fa"},{url:"/_next/static/chunks/pages/contact-us-6ad70d0de03f4366.js",revision:"6ad70d0de03f4366"},{url:"/_next/static/chunks/pages/faq-25aaddb986b721a3.js",revision:"25aaddb986b721a3"},{url:"/_next/static/chunks/pages/index-18f93b9d694ca41c.js",revision:"18f93b9d694ca41c"},{url:"/_next/static/chunks/pages/offer-29b9bc99a852f8bd.js",revision:"29b9bc99a852f8bd"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-393e905462903396.js",revision:"393e905462903396"},{url:"/_next/static/chunks/pages/privacy-policy-e6d1560beaa939e9.js",revision:"e6d1560beaa939e9"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-9be6b50569da7c15.js",revision:"9be6b50569da7c15"},{url:"/_next/static/chunks/pages/search-8a559dbeac08ef68.js",revision:"8a559dbeac08ef68"},{url:"/_next/static/chunks/pages/terms-and-conditions-f135839820b95a6b.js",revision:"f135839820b95a6b"},{url:"/_next/static/chunks/pages/user/add-shipping-address-f20cc47c3addf736.js",revision:"f20cc47c3addf736"},{url:"/_next/static/chunks/pages/user/change-password-d1e657decc53a0b4.js",revision:"d1e657decc53a0b4"},{url:"/_next/static/chunks/pages/user/dashboard-e78e01fcd6d1e108.js",revision:"e78e01fcd6d1e108"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-290ed7c1d8a6d7a5.js",revision:"290ed7c1d8a6d7a5"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-54ccc403d0b56442.js",revision:"54ccc403d0b56442"},{url:"/_next/static/chunks/pages/user/my-account-c180af4af98f6b86.js",revision:"c180af4af98f6b86"},{url:"/_next/static/chunks/pages/user/my-orders-1b9b405dec9f530c.js",revision:"1b9b405dec9f530c"},{url:"/_next/static/chunks/pages/user/recent-order-2b05897e50d28a73.js",revision:"2b05897e50d28a73"},{url:"/_next/static/chunks/pages/user/update-profile-01b22bcd2ec7df7f.js",revision:"01b22bcd2ec7df7f"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-4a143a004888f0a9.js",revision:"4a143a004888f0a9"},{url:"/_next/static/css/13b0ceca057c98fb.css",revision:"13b0ceca057c98fb"},{url:"/_next/static/css/9a3ccf408d171ae5.css",revision:"9a3ccf408d171ae5"},{url:"/_next/static/css/f0d86668ae3befc4.css",revision:"f0d86668ae3befc4"},{url:"/_next/static/css/fe3ca4aa668b6f4f.css",revision:"fe3ca4aa668b6f4f"},{url:"/_next/static/kgGGR0wpSvzYXRy80UYgz/_buildManifest.js",revision:"0b3d23d06ce58f73f46d6529098de303"},{url:"/_next/static/kgGGR0wpSvzYXRy80UYgz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"kgGGR0wpSvzYXRy80UYgz"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"0a668853fee7423c27bb93b947a6fc1c"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"0033e08ea1185a9ef4ddea787f470df5"},{url:"/flags/de.svg",revision:"a491da9c1549a36b293a6a391739dfda"},{url:"/flags/us.svg",revision:"8886b28b10e3ec0756a9935a216d5bba"},{url:"/icon-192x192.png",revision:"47e2812c3e78f1903ccd46f0545f5d48"},{url:"/icon-256x256.png",revision:"5cfadd2f4679b3d86f1d994297809226"},{url:"/icon-384x384.png",revision:"e793bffd9497800be7d461caa873b96b"},{url:"/icon-512x512.png",revision:"b9df59369ad910b5d3e338e9076fd944"},{url:"/icon_material.webp",revision:"7e7122f68328ceec6a12f7ad80ea7b1c"},{url:"/img_credit_card.webp",revision:"6eedd3e124e7a6d2b3e300c00ba9f4d3"},{url:"/kachabazar-store-min.png",revision:"6bf12cd3f0a8d7ccf8285ea0672bf182"},{url:"/loader/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/logo/12345.jpg",revision:"e91248011f58f7ebd3e27af4dec642ce"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/logo/logo-color.png",revision:"7e1f1b87606b9cb1d2105c6f3c7935e8"},{url:"/logo/logo-color.svg",revision:"f2c3303938e7b9cca49300f117c81a8f"},{url:"/logo/logo-dark-2.svg",revision:"cbf80aa22a320f8f39592451d2c63452"},{url:"/logo/logo-dark.svg",revision:"1a559c3647eeef8d225ccbf69432d993"},{url:"/logo/logo-light-2.svg",revision:"0442b9c27a91129a62325b84de50031e"},{url:"/logo/logo-light.svg",revision:"90dc8a4e7c5a2d9fa9e9551a55de952e"},{url:"/manifest.json",revision:"b898b3d1af8a0763b0f6a7b52d656ec2"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"},{url:"/slider/slider3.webp",revision:"53fc9b3773c5c3ba90fd7fa94065e370"},{url:"/slider/slider4.webp",revision:"b58be250dde87e1f770158d25dba495e"},{url:"/slider/slider5.webp",revision:"4ceb99df588c9249e7d1fe1c85b833c6"},{url:"/slider/slider6.webp",revision:"746d2c06f3c681e6bead1c4d2a849da6"},{url:"/slider/slider7.webp",revision:"e9636d2a56f15b246b5f2ce02d62b127"},{url:"/sw.js",revision:"3babca1d969f2ec8e3f712ae338713de"},{url:"/team/team-1.jpg",revision:"e318a12728d39d01c926be7fbbcd6876"},{url:"/team/team-2.jpg",revision:"ba945720d060272d028634a8729b7d2b"},{url:"/team/team-3.jpg",revision:"dfa429c7e964aa5a8ea01c3959710529"},{url:"/team/team-4.jpg",revision:"490ae645f676543ef728fc2548a6bd3f"},{url:"/team/team-5.jpg",revision:"a345363d59da88084c7fd6de76cc978c"},{url:"/team/team-6.jpg",revision:"39e8a23ea2ae4bc88316d1ddad73132c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
