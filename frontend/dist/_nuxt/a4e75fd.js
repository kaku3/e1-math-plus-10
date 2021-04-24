(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{745:function(t,n,e){"use strict";e.r(n),e.d(n,"MAP_OBJECT",(function(){return r})),e.d(n,"Maze",(function(){return E}));e(42),e(24),e(30),e(52),e(41),e(8),e(50),e(57),e(43);var r,o=e(25),h=e(34),c=(e(289),e(9),e(94),function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:88675123;Object(o.a)(this,t),this.x=123456789,this.y=362436069,this.z=521288629,this.w=n}return Object(h.a)(t,[{key:"next",value:function(){var t;return t=this.x^this.x<<11,this.x=this.y,this.y=this.z,this.z=this.w,this.w=this.w^this.w>>>19^t^t>>>8}},{key:"nextInt",value:function(t,n){return t+Math.abs(this.next())%(n+1-t)}},{key:"nextFloat1",value:function(){return this.nextInt(0,100)/100}}]),t}());function O(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return h=t.done,t},e:function(t){c=!0,o=t},f:function(){try{h||null==e.return||e.return()}finally{if(c)throw o}}}}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}!function(t){t[t.FLOOR=0]="FLOOR",t[t.WALL=1]="WALL",t[t.COIN=10]="COIN",t[t.KEY1=11]="KEY1",t[t.KEY2=12]="KEY2",t[t.PLUS0_PORTION=13]="PLUS0_PORTION",t[t.RANDOM0_PORTION=14]="RANDOM0_PORTION",t[t.MATTOCK=20]="MATTOCK",t[t.SWORD=21]="SWORD",t[t.PLUS_PORTION=22]="PLUS_PORTION",t[t.CHEST1=30]="CHEST1",t[t.CHEST2=31]="CHEST2",t[t.PEAK=40]="PEAK",t[t.DOOR=50]="DOOR",t[t.ENEMY0=128]="ENEMY0",t[t.ENEMY1=129]="ENEMY1",t[t.ENEMY2=130]="ENEMY2",t[t.ENEMY3=131]="ENEMY3",t[t.ENEMY4=132]="ENEMY4"}(r||(r={}));var l=[{o:r.COIN,c:"coin"},{o:r.KEY1,c:"key1"},{o:r.KEY2,c:"key2"},{o:r.PLUS0_PORTION,c:"plus0-portion"},{o:r.RANDOM0_PORTION,c:"random0-portion"},{o:r.MATTOCK,c:"mattock"},{o:r.SWORD,c:"sword"},{o:r.PLUS_PORTION,c:"plus-portion"},{o:r.CHEST1,c:"chest1"},{o:r.CHEST2,c:"chest2"},{o:r.PEAK,c:"peak"},{o:r.DOOR,c:"door"},{o:r.ENEMY0,c:"e0"},{o:r.ENEMY1,c:"e1"},{o:r.ENEMY2,c:"e2"},{o:r.ENEMY3,c:"e3"},{o:r.ENEMY4,c:"e4"}],E=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(o.a)(this,t),this.random=new c(n)}return Object(h.a)(t,[{key:"generateFloor",value:function(t){if(0===t){var n=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];return n[1][3]=r.COIN,n[1][4]=r.PEAK,n[1][5]=r.PLUS0_PORTION,n[1][6]=r.PLUS_PORTION,n[1][7]=r.RANDOM0_PORTION,n[1][9]=r.COIN,n[1][10]=r.KEY1,n[1][11]=r.CHEST1,n[1][13]=r.MATTOCK,n[2][13]=r.DOOR,n[2][15]=r.KEY2,n}var e=[7,9,7,5,11,7,9,7,5,11,13,11,15,13,11,7,15,19,13,21],o=(t-1)%e.length,h=e[o],c=[7,7,9,15,11,7,9,13,7,15,13,11,15,13,11,7,15,19,13,21][o],O=this.generate(h,c);return this.setObjects(t,h,c,O),O}},{key:"setObjects",value:function(t,n,e,o){console.log({floor:t,sx:n,sy:e,maze:o});var h=this.random;for(o[e-2][n-2]=r.DOOR;;){var c=h.nextInt(2,n-2),f=h.nextInt(2,e-2);if(0===o[f][c]){o[f][c]=r.KEY2;break}}for(var l=[[r.PLUS_PORTION,Math.max(.01,.02-.001*t)],[r.PLUS0_PORTION,Math.max(.01,.05-.001*t)],[r.RANDOM0_PORTION,Math.max(.01,.05-.001*t)],[r.CHEST2,Math.max(.05,.1-.005*t)],[r.CHEST1,Math.max(.02,.1-.005*t)],[r.MATTOCK,Math.max(.02,.04-.001*t)],[r.SWORD,Math.max(.03,.05-.001*t)],[r.COIN,Math.max(.2,.5-.01*t)],[r.KEY1,Math.max(.01,.1-.005*t)],[r.PEAK,Math.min(.6,.3+.03*t)]],E=[[r.ENEMY0,Math.max(0,1-.1*t)],[r.ENEMY1,Math.max(0,t>=7?1-.1*t:0)],[r.ENEMY2,Math.max(0,t>=12?.4-.1*t:0)],[r.ENEMY3,Math.max(0,t>=15?.4-.1*t:0)],[r.ENEMY4,Math.max(0,t>=18?.6-.1*t:0)]],M=1;M<e-1;M++)for(var v=1;v<n-1;v++)if(o[M][v]===r.FLOOR){var N,y=O(l);try{for(y.s();!(N=y.n()).done;){var P=N.value;if(P[1]>h.nextFloat1()){o[M][v]=P[0];break}}}catch(t){y.e(t)}finally{y.f()}}if(t>=5)for(var T=1;T<e-1;T++)for(var x=1;x<n-1;x++)if(o[T][x]===r.PEAK&&h.nextFloat1()>.5){var R,m=O(E);try{for(m.s();!(R=m.n()).done;){var A=R.value;if(A[1]>h.nextFloat1()){o[T][x]=A[0];break}}}catch(t){m.e(t)}finally{m.f()}}o[1][1]=r.FLOOR}},{key:"generate",value:function(t,n){for(var e=Array(n),o=0;o<e.length;o++)e[o]=Array(t).fill(r.FLOOR);for(var h=1;h<e.length-1;h++)e[h].fill(r.WALL,1,t-1);this.dig(e,[],1,1),e[0]=Array(t).fill(1),e[n-1]=Array(t).fill(1);for(var c=1;c<e.length;c++)e[c][0]=r.WALL,e[c][t-1]=r.WALL;return e}},{key:"dig",value:function(t,n,e,r){for(var o=this,h=this.random;;){var c=[];if(t[r-1][e]&&t[r-2][e]&&c.push(0),t[r][e+1]&&t[r][e+2]&&c.push(1),t[r+1][e]&&t[r+2][e]&&c.push(2),t[r][e-1]&&t[r][e-2]&&c.push(3),0===c.length)break;switch(this.setPath(t,n,e,r),c[h.nextInt(0,c.length-1)]){case 0:this.setPath(t,n,e,--r),this.setPath(t,n,e,--r);break;case 1:this.setPath(t,n,++e,r),this.setPath(t,n,++e,r);break;case 2:this.setPath(t,n,e,++r),this.setPath(t,n,e,++r);break;case 3:this.setPath(t,n,--e,r),this.setPath(t,n,--e,r)}n.length>0&&function(){var e=h.nextInt(0,n.length-1),r=n[e];n=n.filter((function(t,i){return i!==e})),o.dig(t,n,r.x,r.y)}()}}},{key:"setPath",value:function(t,n,e,r){t[r][e]=0,1==(1&e)&&1==(1&r)&&n.push({x:e,y:r})}}],[{key:"getObjectClass",value:function(t){var n;return(null===(n=l.find((function(n){return n.o===t})))||void 0===n?void 0:n.c)||null}}]),t}()}}]);