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
    "revision": "e8b6a24b61667f16221f22af93c8b27d"
  },
  {
    "url": "assets/css/0.styles.c05d4d8a.css",
    "revision": "6d4aabd17c0741ebd18b8c1de538e820"
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
    "url": "assets/js/10.32c039a1.js",
    "revision": "d212f2917acbaafc75418a3ae387bb25"
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
    "url": "assets/js/14.5b1d5d2c.js",
    "revision": "5a84a9bff25a91c87d2be72dc497782a"
  },
  {
    "url": "assets/js/15.25547e1d.js",
    "revision": "fccd28bb17d16376431e75c47dcea3d8"
  },
  {
    "url": "assets/js/16.2ecdd188.js",
    "revision": "4e6cd601992fe12f1e1f631b19630829"
  },
  {
    "url": "assets/js/17.c96e4cca.js",
    "revision": "9f9df7f7834d99534a0cd7f40ccc9207"
  },
  {
    "url": "assets/js/18.4f7936c0.js",
    "revision": "e9d0b47cccfbabd5f9298cfd6bf8cf88"
  },
  {
    "url": "assets/js/19.aea6404e.js",
    "revision": "2fc32e423b28bb35d22c832ca1f2e8d2"
  },
  {
    "url": "assets/js/2.41992ace.js",
    "revision": "7338f38a5405aa85aea5efa512c34f0f"
  },
  {
    "url": "assets/js/20.39c172fa.js",
    "revision": "5b3e003d6d892c54eda0462d8c3807ec"
  },
  {
    "url": "assets/js/21.d4cdfc73.js",
    "revision": "7650aa8ac574b8577f9048746eccf876"
  },
  {
    "url": "assets/js/22.33a7f2eb.js",
    "revision": "89caf74c8f78274413d8978988b011ed"
  },
  {
    "url": "assets/js/23.2661fec1.js",
    "revision": "d923fb30d9ae1a830395161936f39a0f"
  },
  {
    "url": "assets/js/24.9e2760be.js",
    "revision": "02842acc06596c2aad5ec7db5f8141ba"
  },
  {
    "url": "assets/js/25.c9b1c6fd.js",
    "revision": "e0cdfed1815ce2b6f338fd83a4004093"
  },
  {
    "url": "assets/js/26.82130bf6.js",
    "revision": "cd1d9a6ac7444acc50de1875c596fc27"
  },
  {
    "url": "assets/js/27.49176953.js",
    "revision": "1ef1899b6870b3a4e806ed35e3b52c4f"
  },
  {
    "url": "assets/js/28.8ce3caee.js",
    "revision": "efa4cb730a626ec68ac041108b6d1a04"
  },
  {
    "url": "assets/js/29.ae5200be.js",
    "revision": "87ed5fd19814dfc93a7940686b4e1650"
  },
  {
    "url": "assets/js/3.bb1fe890.js",
    "revision": "2b195bbb7c4ef0db419f81d309b047fc"
  },
  {
    "url": "assets/js/30.c4d4d10c.js",
    "revision": "53c3a3b028bfa6448a2cb8236a70c3cf"
  },
  {
    "url": "assets/js/31.f3bfa1ff.js",
    "revision": "d4584c412f4f568b7bc16441bf348077"
  },
  {
    "url": "assets/js/32.f9b4f568.js",
    "revision": "953c86694a77866613162c50c8c4939f"
  },
  {
    "url": "assets/js/33.e78b8ed3.js",
    "revision": "2d81e7219ae125da300428ec526bfb3a"
  },
  {
    "url": "assets/js/34.f67790c7.js",
    "revision": "b9f5a499d05d18ede228fa56dda7407f"
  },
  {
    "url": "assets/js/35.9cf13d82.js",
    "revision": "093fbcb7ce863c0378aa37c39a9b8b14"
  },
  {
    "url": "assets/js/36.e7679437.js",
    "revision": "051609c6053dd59dfaa7f06d48bbf4ea"
  },
  {
    "url": "assets/js/37.893942e7.js",
    "revision": "7c4c907ae430b8bf5eb6aa27d7032dfa"
  },
  {
    "url": "assets/js/38.025fb00b.js",
    "revision": "cb9ac012360889dcdcc2a353faa7c3b6"
  },
  {
    "url": "assets/js/4.6a46c57b.js",
    "revision": "0a14a87187682c23faad51210d99982b"
  },
  {
    "url": "assets/js/5.e46eb46b.js",
    "revision": "7a8b600d473954f2726dd596cf87ba14"
  },
  {
    "url": "assets/js/6.909feed0.js",
    "revision": "6bb7f8cc37f535d29d144d9347a1ebe9"
  },
  {
    "url": "assets/js/7.f9347e7f.js",
    "revision": "f52470f478ebf8fc7c7ebc4545ad6e3b"
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
    "url": "assets/js/app.0158b0b4.js",
    "revision": "dac6f033a65604832199b0325eba3d1b"
  },
  {
    "url": "hello-world/index.html",
    "revision": "24094edc69dba8fc00a4ed70f656fa72"
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
    "revision": "83ae9bd3d94fd5d5e37e6a47e53aaf15"
  },
  {
    "url": "views/about/index.html",
    "revision": "d80e0e017d4c92c60adb757517658f26"
  },
  {
    "url": "views/blog/angular/blog001.html",
    "revision": "cb5e5f66fe9e9b88948588e77ba67d79"
  },
  {
    "url": "views/blog/angular/blog002.html",
    "revision": "aec7588aaf52a8ec023643c09d387ba8"
  },
  {
    "url": "views/blog/angular/blog003.html",
    "revision": "9439e4e3e0154ac462207f2187ced8cf"
  },
  {
    "url": "views/blog/angular/index.html",
    "revision": "7e8b4ae355270763d7322d5ca695fbe2"
  },
  {
    "url": "views/blog/index.html",
    "revision": "12d39a24778be6d7ef7623b9a718f6c6"
  },
  {
    "url": "views/blog/js/blog001.html",
    "revision": "603392d4f58822dae648bde4ce293f97"
  },
  {
    "url": "views/blog/js/blog002.html",
    "revision": "1e9cd492277fb511b9cfa2443e79020c"
  },
  {
    "url": "views/blog/js/blog003.html",
    "revision": "9c76e3f9cf013d46aa95ee3005a14cab"
  },
  {
    "url": "views/blog/js/index.html",
    "revision": "21c9423df362c9e1ee59e20721165a98"
  },
  {
    "url": "views/blog/miniprogram/blog001.html",
    "revision": "b3f5cafec6b3fbf64c590b90425870d9"
  },
  {
    "url": "views/blog/miniprogram/index.html",
    "revision": "71ce3fa1b176eb3ffe04e10e2b9a88e8"
  },
  {
    "url": "views/blog/nb/blog001.html",
    "revision": "612f2cd6a31a5e7840b1ec4cf03ed1b9"
  },
  {
    "url": "views/blog/nb/index.html",
    "revision": "7c828aae2885d92afecdb98863223277"
  },
  {
    "url": "views/blog/next/blog001.html",
    "revision": "c9d262a08deef2bc2c9caea541c27189"
  },
  {
    "url": "views/blog/next/index.html",
    "revision": "abca94067502c202b3e6cdf10689b1f8"
  },
  {
    "url": "views/blog/other/blog002.html",
    "revision": "ce18396d8ff2144139c5bc68509cac53"
  },
  {
    "url": "views/blog/other/blog003.html",
    "revision": "3f5883823c845fd42c38999aa79a405c"
  },
  {
    "url": "views/blog/other/index.html",
    "revision": "28e33fe2b4e5f05c5d703ef6b67e375f"
  },
  {
    "url": "views/blog/react/blog001.html",
    "revision": "87f35b13fa060d7a6da30f1e2237d3b2"
  },
  {
    "url": "views/blog/react/index.html",
    "revision": "0ea2e0f3cf6710b1c1f4c074673a09eb"
  },
  {
    "url": "views/blog/vue/blog001.html",
    "revision": "08c5a44f9fe603d614a1222b5ac144f6"
  },
  {
    "url": "views/blog/vue/index.html",
    "revision": "c0d5ab1fe59b5bc1c70db5acf26286f4"
  },
  {
    "url": "views/blog/vuepress/blog001.html",
    "revision": "25ab6b090e610b910cb47c812e4b2539"
  },
  {
    "url": "views/contact/index.html",
    "revision": "9cdd3a32011780c5b494e188b61fa49a"
  },
  {
    "url": "views/tools/index.html",
    "revision": "d5fe2cd8ea2ae0e5463961bc6d6ca5e0"
  },
  {
    "url": "views/tools/tools001.html",
    "revision": "ba8bde6b22eed98e2d3936b172939b83"
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
