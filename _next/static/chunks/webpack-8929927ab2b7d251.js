(()=>{"use strict";var e={},f={};function a(d){var c=f[d];if(void 0!==c)return c.exports;var b=f[d]={exports:{}},t=!0;try{e[d](b,b.exports,a),t=!1}finally{t&&delete f[d]}return b.exports}a.m=e,(()=>{var e=[];a.O=(f,d,c,b)=>{if(d){b=b||0;for(var t=e.length;t>0&&e[t-1][2]>b;t--)e[t]=e[t-1];e[t]=[d,c,b];return}for(var r=1/0,t=0;t<e.length;t++){for(var[d,c,b]=e[t],o=!0,n=0;n<d.length;n++)(!1&b||r>=b)&&Object.keys(a.O).every(e=>a.O[e](d[n]))?d.splice(n--,1):(o=!1,b<r&&(r=b));if(o){e.splice(t--,1);var i=c();void 0!==i&&(f=i)}}return f}})(),a.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return a.d(f,{a:f}),f},(()=>{var e,f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(d,c){if(1&c&&(d=this(d)),8&c||"object"==typeof d&&d&&(4&c&&d.__esModule||16&c&&"function"==typeof d.then))return d;var b=Object.create(null);a.r(b);var t={};e=e||[null,f({}),f([]),f(f)];for(var r=2&c&&d;"object"==typeof r&&!~e.indexOf(r);r=f(r))Object.getOwnPropertyNames(r).forEach(e=>t[e]=()=>d[e]);return t.default=()=>d,a.d(b,t),b}})(),a.d=(e,f)=>{for(var d in f)a.o(f,d)&&!a.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:f[d]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((f,d)=>(a.f[d](e,f),f),[])),a.u=e=>"static/chunks/"+(({622:"a110fc30",2020:"ce685e2a",5049:"069699d7",5648:"fd0967e2",6981:"7acfcd8d",7461:"71904438",8156:"08c63962",9594:"5645e9c2",9861:"6d90fd1b"})[e]||e)+"."+({71:"e0b6c039c6cec750",75:"60f20ba030874bff",99:"dd3dc39a125163d2",122:"3eb8a7dd4de2ecb4",126:"29092d7e9939fa8a",178:"c9ab94d16a6d5613",194:"b0dc4f3d3e4ac593",240:"20748df3f469e08f",244:"9de31a563dd6f36d",332:"48198d879831aee2",358:"40e783addf9352c4",389:"a90699931e457f74",434:"32b97e51d4ecbc89",444:"e6c69c1688b92731",493:"217546c4a8e58b2e",622:"a1568c90a2abdc4a",625:"6bf8fe9743598ab9",682:"921547b8085ab9a2",722:"578b262c351a4bce",741:"3c22636a63c431f9",797:"944be9a5ed930994",868:"e383935e723ea3b5",874:"2edbfb749d25cb74",1e3:"9d97bca6a9459035",1070:"e363cd8ba23e38b0",1086:"b8b2f9e25b97ec6b",1122:"dce86392665c177b",1239:"82f276477c193969",1250:"633b44304e0b4984",1255:"653bd98d63d9e627",1299:"59f101b6ea4335c4",1309:"f15109d922d466b8",1378:"cc6ec12a19784065",1585:"37d69e8aeb99d913",1597:"ac8ae34b0a90cdeb",1669:"15df6d021c665265",1685:"bcd4a96fb3448366",1764:"3ac104c0c79aba7f",1769:"8efc89105aa04e2f",1803:"7e18f6446f35b46a",1859:"4f6fe7ae489cbd9b",1989:"6347492c626a5dac",1993:"f5dd4646766d7444",2020:"99f0a67cfd5d7487",2151:"cb82b83f25a0c8f4",2163:"bc58914f0bcfdb9e",2189:"7ceae0587d059c7a",2196:"38211e60cb03f57d",2276:"ac0053af8c76593e",2287:"f83b89c396b31018",2343:"65134aba9630432a",2411:"011c00771dca507a",2425:"db58db376f453983",2445:"60efe701c4dbb2dc",2466:"84cbfd32cb2baede",2476:"66ab5c291090cf24",2761:"db3d7d2484db696e",2916:"c63eb9dc30bb39fa",2998:"2734c08ec2d310ad",3050:"caad9946db93f11a",3101:"c748af4693ec3b67",3134:"0573950b56803bb3",3211:"c437d7ad8f94e4f7",3226:"bd50151faba28227",3327:"0262847732b7bf3a",3361:"263198c6df59a0e5",3526:"1f50a585597d3731",3532:"8951029159e325fe",3572:"fb90d6a125942b00",3582:"bbcf6b46964a0673",3686:"dbad2be8a5874fe7",3810:"c4408c63dde23f64",3850:"e0d904aa90ce91e5",3898:"a5dbc54c37e2f67c",4007:"8a589ec18cbdd47d",4025:"779b566e0e63ea27",4037:"1ac89370e315354a",4103:"081e00affbca9df6",4147:"8318d4099f4470bd",4255:"7513568d8033dd2d",4290:"57888daac4c16456",4323:"2c89b0a3aab62789",4480:"5959ba4d3f2a565d",4523:"ea958edca4b798f7",4524:"17fff1fe67f851f6",4575:"48e991f4621ea6cc",4646:"ff133e84e8457a56",4688:"72a741889df92e35",4697:"5a6c230db976772d",4818:"c90167c25c41cc0f",4821:"a7594a0548edd790",4963:"c3c5cbf93007cde7",5001:"4185edc762d124f7",5029:"4dddd993b87ae642",5049:"b1054740840da2b5",5171:"620febaa4aad4f33",5187:"f50e09cac6deed85",5215:"0eb5a46ec4e2e5ac",5243:"75a522ae8e777f3c",5282:"04b470edfbcb2b70",5295:"d5bec59c7dc63c52",5301:"4ffcc68ac1000b06",5312:"955e3fde1dd15b74",5350:"72fd1e5580da5569",5370:"87d0d50d96375a4c",5458:"56492ce04a952170",5486:"5f92e6d05ba411c4",5570:"620f9a266da4bee7",5627:"475177026967d2f1",5648:"45d608a0303f4557",5722:"47d346ac4f88d3d8",5736:"33cae9ce11578958",5776:"a402068726c52805",5796:"4eea3852a5307eda",5819:"3339418ef475e881",5836:"9105549edb981cae",5845:"8c7132d70df126e3",5871:"f7264b85bf56d68c",5903:"9872f121bdf9b1e8",5983:"4da48bf71f9dd06b",6027:"d382d1c40af0535e",6074:"d4a51d014ec4c209",6140:"bb757a190b3ed885",6208:"f3cfa14e6c28dca8",6217:"e7fd83ea982f2725",6231:"c6ee834b545911a1",6257:"abb043232710c9e4",6271:"b5452762c79bf51b",6417:"d7f59a32538d44fe",6418:"5416e96c25ed5700",6429:"e267572ae8994296",6431:"4020ba3211d31950",6542:"36c4813ec0ed27b0",6599:"7bd87970a627f6f2",6600:"66271c5312cf56b4",6621:"7a44b76b4a8d2d31",6655:"e6981c40949943bc",6688:"15c340ca68ba1909",6715:"a6f1deb178042510",6779:"3c4c4f9451145d3f",6804:"7ef79f36b934cd3c",6823:"84c9f119fefd14fd",6873:"b0a6249c0aa41253",6926:"ce3b09efbb6a23d8",6930:"5fbebffd1ede5d79",6981:"9508b5d8030dc43b",6985:"10f8cb3a9389d413",6987:"da6d8dff533d8cbf",7063:"f686bc2e7a34d47f",7104:"e9df7e4f5f19a273",7131:"f0516eb0354abdec",7224:"27e17c654769a9a6",7226:"ebc4d6e7fd37bcbe",7273:"4f06f0d94bbd167f",7300:"28235b43c0a3ae86",7326:"d702d73c50ed6e3b",7365:"2c924b232ebe400d",7390:"ae4a10f69f14cd87",7417:"ae025a454196c2f9",7455:"165b50e25155a244",7461:"dedd4fbe793be77a",7604:"65cecc806d7df2d5",7668:"44075fbe187559d0",7679:"492cfec3cd7eeca2",7703:"a1f763b2d6064601",7738:"bfa06348df5bb3bf",7786:"dcb4f3a206cf47ec",7860:"c1c4bc46df80196f",7872:"46fa8f6041d34624",7878:"b989300a4e43939d",7946:"f7f11367d038c6bc",7961:"d20356770ab879a6",7977:"98084b8794429e14",8123:"15816e28bb977fd7",8153:"0b6ddba0e37b4597",8156:"0ff3dfcb99c4d7f3",8168:"0c08b478698f9f69",8180:"efa401b58705fb9f",8284:"ba6ff8224f7c37c2",8289:"218fedbc9f180656",8347:"ac93679a87260e57",8391:"f223d73923bec666",8506:"4e0a1e024bf6ced1",8520:"80105f0fb3794fc4",8531:"bfe3e0966dedbd1b",8588:"0746f214c27291ca",8628:"c04add036f1cb4eb",8629:"002e618ce1d6b56d",8643:"72d5ae3bbc456b52",8706:"a7d3ff8f935ec109",8708:"b77391cdbaf09e70",8850:"7920fc57d89f8a77",8870:"1228720c51cc39e8",8942:"ede09482c1374521",8999:"07851e302acbae74",9004:"44fd0b4c78893aa3",9037:"128b984345be9b63",9065:"cb5fd84e2888bcca",9191:"331fb627621c63ac",9205:"c3b40ca08444cc66",9266:"ab60f4254fc24964",9310:"f9765d461a47b0da",9495:"927f4a9161548953",9594:"36cae57333b1b450",9619:"6a702c2b60184bc9",9650:"2555e26110f61dd1",9705:"850d6a45afb73d4c",9730:"d335ec224d367e89",9759:"b17b8b78c70818dd",9861:"06cef02baace2c17",9902:"33a321530177e293",9908:"aaf36c65c1141e60",9953:"2277a4c8823d605b",9957:"6755ba47f9b3aa6a",9959:"1fc8c85bc61e4932",9994:"cd810c1de55bab7e"})[e]+".js",a.miniCssF=e=>{},a.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),(()=>{var e={},f="_N_E:";a.l=(d,c,b,t)=>{if(e[d]){e[d].push(c);return}if(void 0!==b)for(var r,o,n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==d||u.getAttribute("data-webpack")==f+b){r=u;break}}r||(o=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",f+b),r.src=a.tu(d)),e[d]=[c];var l=(f,a)=>{r.onerror=r.onload=null,clearTimeout(s);var c=e[d];if(delete e[d],r.parentNode&&r.parentNode.removeChild(r),c&&c.forEach(e=>e(a)),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),o&&document.head.appendChild(r)}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:e=>e},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("nextjs#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="/mantine-reflection/_next/",(()=>{var e={8068:0};a.f.j=(f,d)=>{var c=a.o(e,f)?e[f]:void 0;if(0!==c){if(c)d.push(c[2]);else if(8068!=f){var b=new Promise((a,d)=>c=e[f]=[a,d]);d.push(c[2]=b);var t=a.p+a.u(f),r=Error();a.l(t,d=>{if(a.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;r.message="Loading chunk "+f+" failed.\n("+b+": "+t+")",r.name="ChunkLoadError",r.type=b,r.request=t,c[1](r)}},"chunk-"+f,f)}else e[f]=0}},a.O.j=f=>0===e[f];var f=(f,d)=>{var c,b,[t,r,o]=d,n=0;if(t.some(f=>0!==e[f])){for(c in r)a.o(r,c)&&(a.m[c]=r[c]);if(o)var i=o(a)}for(f&&f(d);n<t.length;n++)b=t[n],a.o(e,b)&&e[b]&&e[b][0](),e[b]=0;return a.O(i)},d=self.webpackChunk_N_E=self.webpackChunk_N_E||[];d.forEach(f.bind(null,0)),d.push=f.bind(null,d.push.bind(d))})(),a.nc=void 0})();