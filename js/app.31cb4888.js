(function(t){function e(e){for(var r,s,c=e[0],o=e[1],u=e[2],f=0,m=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/tictactoe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"scoreboard"},[n("span",[t._v("O ha "+t._s(t.wins.O)+" vittorie")]),n("h2",[t._v("PUNTEGGIO")]),n("span",[t._v("X ha "+t._s(t.wins.X)+" vittorie")])]),n("div",{attrs:{id:"app"}},[t._m(0),n("grid"),n("button",{staticClass:"restart",on:{click:t.restart}},[t._v("Restart")])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title"}},[n("h1",[t._v("Tic Tac Toe")])])}],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"statusGame",class:t.colorStatusGame},[t._v(" "+t._s(t.messageStatusGame)+" ")]),n("table",{staticClass:"grid"},[n("tr",[n("cell",{attrs:{name:"1"}}),n("cell",{attrs:{name:"2"}}),n("cell",{attrs:{name:"3"}})],1),n("tr",[n("cell",{attrs:{name:"4"}}),n("cell",{attrs:{name:"5"}}),n("cell",{attrs:{name:"6"}})],1),n("tr",[n("cell",{attrs:{name:"7"}}),n("cell",{attrs:{name:"8"}}),n("cell",{attrs:{name:"9"}})],1)])])},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{staticClass:"cell",on:{click:t.strike}},[t._v(t._s(t.marker))])},u=[],l=(n("b0c0"),{props:["name"],data:function(){return{frozen:!1,marker:""}},methods:{strike:function(){this.frozen||(this.marker=this.$parent.activePlayer,this.frozen=!0,Event.$emit("strike",this.name))}},created:function(){var t=this;Event.$on("clearCell",(function(){t.marker="",t.frozen=!1})),Event.$on("freeze",(function(){return t.frozen=!0}))}}),f=l,m=(n("e3d1"),n("2877")),v=Object(m["a"])(f,o,u,!1,null,null,null),d=v.exports,h={components:{Cell:d},data:function(){return{activePlayer:"O",statusGame:"turn",messageStatusGame:"Fai la tua mossa",colorStatusGame:"turnStatus",moves:0,cells:{1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:"",9:""},conditionsWin:[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]}},computed:{nonActivePlayer:function(){return"O"===this.activePlayer?"X":"O"}},watch:{statusGame:function(){if("win"!==this.statusGame)return"draw"===this.statusGame?(this.colorStatusGame="drawStatus",void(this.messageStatusGame="Pareggio !")):void(this.messageStatusGame="Fai la tua mossa");this.colorStatusGame="winStatus"}},methods:{changePlayer:function(){this.activePlayer=this.nonActivePlayer},gameWin:function(){return Event.$emit("win",this.activePlayer),this.messageStatusGame="".concat(this.activePlayer," vince !"),Event.$emit("freeze"),"win"},changeStatusGame:function(){return this.checkWin()?this.gameWin():9===this.moves?"draw":"turn"},equal:function(){for(var t=arguments.length,e=1;e<t;e++)if(""===arguments[e]||arguments[e]!==arguments[e-1])return!1;return!0}},created:function(){var t=this;Event.$on("strike",(function(e){t.cells[e]=t.activePlayer,t.moves++,t.statusGame=t.changeStatusGame(),t.changePlayer()})),Event.$on("gridReset",(function(){Object.assign(t.$data,t.$options.data())}))}},p=h,g=(n("9f4b"),Object(m["a"])(p,s,c,!1,null,null,null)),b=g.exports,y={components:{Grid:b},name:"app",data:function(){return{wins:{O:0,X:0}}},methods:{restart:function(){Event.$emit("clearCell"),Event.$emit("gridReset")}},created:function(){var t=this;Event.$on("win",(function(e){return t.wins[e]++}))}},w=y,_=(n("034f"),Object(m["a"])(w,a,i,!1,null,null,null)),O=_.exports;window.Event=new r["a"],r["a"].mixin({methods:{checkWin:function(){for(var t=0;t<this.conditionsWin.length;t++){var e=this.conditionsWin[t],n=this.cells;if(this.equal(n[e[0]],n[e[1]],n[e[2]]))return!0}return!1}}}),new r["a"]({el:"#app",render:function(t){return t(O)}})},"85ec":function(t,e,n){},"9f4b":function(t,e,n){"use strict";n("c48a")},c48a:function(t,e,n){},cdd4:function(t,e,n){},e3d1:function(t,e,n){"use strict";n("cdd4")}});
//# sourceMappingURL=app.31cb4888.js.map