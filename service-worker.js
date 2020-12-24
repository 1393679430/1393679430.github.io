/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bbc59c70e2ac074472125e5c642f9fd2"
  },
  {
    "url": "assets/css/0.styles.84fa5a65.css",
    "revision": "0f325844029ffa8fdb9a24365789a38c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/banner.2baf3e56.jpg",
    "revision": "2baf3e5661abb5da7828846881493969"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0571d57f.js",
    "revision": "9cb3fd24810de6d4a49004b454b4f1bb"
  },
  {
    "url": "assets/js/11.468913bc.js",
    "revision": "4b348a498d300db9437c12f756dbd904"
  },
  {
    "url": "assets/js/12.0e325fe5.js",
    "revision": "bece19e3b9a3d465327267e3f28553e8"
  },
  {
    "url": "assets/js/13.3b0a9968.js",
    "revision": "216041b53ab784bb92ab081a59482b8b"
  },
  {
    "url": "assets/js/14.37f865c5.js",
    "revision": "240a0f9cfb2b0fa2f1835145ea5a0af2"
  },
  {
    "url": "assets/js/15.c04fe8cd.js",
    "revision": "ca4e3b2b5de3c2f1dc1cacc4f45202b5"
  },
  {
    "url": "assets/js/16.e2a4f9fb.js",
    "revision": "14e88ddd98f917ed536e9f10e87f4d8f"
  },
  {
    "url": "assets/js/17.35522021.js",
    "revision": "df6717f04cf16d6202e9f4dc9354684d"
  },
  {
    "url": "assets/js/18.a3e57585.js",
    "revision": "03520f02d3e4e3d869d644b36722429b"
  },
  {
    "url": "assets/js/19.be63e822.js",
    "revision": "24030ff5814da7d93776db5be96d5aa8"
  },
  {
    "url": "assets/js/2.41992ace.js",
    "revision": "7338f38a5405aa85aea5efa512c34f0f"
  },
  {
    "url": "assets/js/20.a8d9f795.js",
    "revision": "a3ac76f43aed105776f0cf01c099dc69"
  },
  {
    "url": "assets/js/21.6b4c7915.js",
    "revision": "89faadea06a95742cbabb48e4979f2f3"
  },
  {
    "url": "assets/js/22.81247231.js",
    "revision": "ff4e0b8106248d7e34dec444242d8f05"
  },
  {
    "url": "assets/js/23.6795fc6e.js",
    "revision": "f89bf16171ca36d6c7fe4daf33823ef1"
  },
  {
    "url": "assets/js/24.e8717d22.js",
    "revision": "44e8145c663e0d3be53eb233adf5250f"
  },
  {
    "url": "assets/js/25.eb745997.js",
    "revision": "c0b11e2478fba0708d547fe4acd693c8"
  },
  {
    "url": "assets/js/26.fe43baff.js",
    "revision": "489646b727c8c1c8369be4a00f896a8e"
  },
  {
    "url": "assets/js/27.569a8501.js",
    "revision": "37e8e696ece7e3baeeec1896dcf66d3b"
  },
  {
    "url": "assets/js/28.af0adbdb.js",
    "revision": "0aca87beeffbeb390637751e46476f25"
  },
  {
    "url": "assets/js/29.e82ffe2f.js",
    "revision": "c2638ea2b2bebff7988a26b3a6fbd22f"
  },
  {
    "url": "assets/js/3.bb1fe890.js",
    "revision": "2b195bbb7c4ef0db419f81d309b047fc"
  },
  {
    "url": "assets/js/30.9d23605c.js",
    "revision": "23d96a7e675864e538c58b0034b1e3bd"
  },
  {
    "url": "assets/js/31.dc9a33ee.js",
    "revision": "4459c553cc4f6e547cfa76f0c1433320"
  },
  {
    "url": "assets/js/32.55500671.js",
    "revision": "c578e1aa13f6ecfa1a2883758bf7f5e5"
  },
  {
    "url": "assets/js/33.67a35e83.js",
    "revision": "6f8c21353270cc0584c6fc2ed8da4957"
  },
  {
    "url": "assets/js/34.ca54da57.js",
    "revision": "7ed526d128c61706f7f70b0198086c5a"
  },
  {
    "url": "assets/js/35.783917de.js",
    "revision": "6d11c93b27ace89ae98cf46ec15ad3a5"
  },
  {
    "url": "assets/js/36.59c84be8.js",
    "revision": "af59a21646ec248b760bc44d71a02b5f"
  },
  {
    "url": "assets/js/4.b349af62.js",
    "revision": "e26ce18f0117a30fed5ebb5c3d686915"
  },
  {
    "url": "assets/js/5.aa0aba37.js",
    "revision": "6146f21207ead5fcd2b6863606fadc7f"
  },
  {
    "url": "assets/js/6.12bc0f92.js",
    "revision": "042d662f7ec5e18dd30ee0c150def75c"
  },
  {
    "url": "assets/js/7.ac2d5abc.js",
    "revision": "0426dd11398530e0c1e08ff9f9555527"
  },
  {
    "url": "assets/js/8.5de1c4d1.js",
    "revision": "3e78cf7d9d2c28981c4caeb4b0322467"
  },
  {
    "url": "assets/js/9.1ccb05d0.js",
    "revision": "5e36dcc7f575a1c748c0f46b8a7ebd09"
  },
  {
    "url": "assets/js/app.dd851c2d.js",
    "revision": "e9067e3ae241a0641442191ee36ed61a"
  },
  {
    "url": "hello-world/index.html",
    "revision": "cbb0bc08512d04950448c98127a33f7a"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "f8bbc4e8b26ac39e05ae368716462738"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "208d9b430d1b89d4ede18fea0417ee59"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "853bb4b08a15e6582bc63876745e86a6"
  },
  {
    "url": "images/banner.jpg",
    "revision": "2baf3e5661abb5da7828846881493969"
  },
  {
    "url": "images/logo.png",
    "revision": "552787e44f87673d11894e5b2cf2c226"
  },
  {
    "url": "index.html",
    "revision": "f65f38f87bea832898ef5335245ee3ca"
  },
  {
    "url": "views/about/index.html",
    "revision": "885f86974526397a2cd70d3ed1cd1d01"
  },
  {
    "url": "views/blog/angular/blog001.html",
    "revision": "bc4c3dead6ffb6c5d8a3d0bb1aab26fc"
  },
  {
    "url": "views/blog/angular/blog002.html",
    "revision": "3c79979b1ee99fee7e3f7606bccc8ecf"
  },
  {
    "url": "views/blog/angular/blog003.html",
    "revision": "d363b963b75e3b0f4560eb285fb8f4a0"
  },
  {
    "url": "views/blog/angular/index.html",
    "revision": "f4625101821f7366647b32f6cdf54723"
  },
  {
    "url": "views/blog/index.html",
    "revision": "98aa1f7e6ba3a605374ddab81dbb041a"
  },
  {
    "url": "views/blog/js/blog001.html",
    "revision": "8089ebcaa50ee04be042a2403e492c1f"
  },
  {
    "url": "views/blog/js/blog002.html",
    "revision": "9fd028253dbc7fcd04bbd87cf155ee52"
  },
  {
    "url": "views/blog/js/blog003.html",
    "revision": "fbb48e6c34a36d506f6a850629e652e9"
  },
  {
    "url": "views/blog/js/index.html",
    "revision": "3d805501fbd0687e78a9c2d477740f38"
  },
  {
    "url": "views/blog/miniprogram/blog001.html",
    "revision": "9bfa906280c99a6e837ade9772d5096b"
  },
  {
    "url": "views/blog/miniprogram/index.html",
    "revision": "6f2ad24185a1a9f66c2e1757793fff43"
  },
  {
    "url": "views/blog/nb/blog001.html",
    "revision": "ffd2a6ab9af527bc8654a58d358f253f"
  },
  {
    "url": "views/blog/nb/index.html",
    "revision": "b6536e4667582ebb429a23c73a6e1da0"
  },
  {
    "url": "views/blog/other/blog002.html",
    "revision": "4dc661896a1cc57ff9c5b605b3b4d60e"
  },
  {
    "url": "views/blog/other/blog003.html",
    "revision": "c1804495a0692852ded5764e9cc9fa62"
  },
  {
    "url": "views/blog/other/index.html",
    "revision": "019928c5f61b9b96f1ce10a655f6dd33"
  },
  {
    "url": "views/blog/react/blog001.html",
    "revision": "8384b720cab79dd27a4f69e26b668285"
  },
  {
    "url": "views/blog/react/index.html",
    "revision": "bcdf95f342ab8385f42cc8107cb7b50e"
  },
  {
    "url": "views/blog/vue/blog001.html",
    "revision": "c628ab05f1bd3e5ee4c15c1ea98b6822"
  },
  {
    "url": "views/blog/vue/index.html",
    "revision": "f513c85d0c559d37c84d378a8b82fff2"
  },
  {
    "url": "views/blog/vuepress/blog001.html",
    "revision": "87e25f5887a630a02d29b9eeeb1f7f40"
  },
  {
    "url": "views/contact/index.html",
    "revision": "5e63613900ae9147e82f6e47ba414c4b"
  },
  {
    "url": "views/tools/index.html",
    "revision": "e87ea7fd8b0bd5f860c59477cefbca58"
  },
  {
    "url": "views/tools/tools001.html",
    "revision": "ab7cd0637f1bfb80fc9644f586365ef8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
