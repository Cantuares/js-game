!function(t){var e={};function s(i){if(e[i])return e[i].exports;var h=e[i]={i:i,l:!1,exports:{}};return t[i].call(h.exports,h,h.exports,s),h.l=!0,h.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var h in t)s.d(i,h,function(e){return t[e]}.bind(null,h));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var i=class{constructor(){this.lastTime=Date.now()}getDt(){return this.dt}run(t){this.now=Date.now(),this.dt=(this.now-this.lastTime)/1e3,this.lastTime=this.now,t(this.dt),window.requestAnimationFrame(()=>this.run(t))}};var h=class{constructor(){this.setCanvas(),this.setCtx(),document.body.appendChild(this.getCanvas())}setCtx(){this.ctx=this.canvas.getContext("2d")}getCtx(){return this.ctx}setCanvas(){this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=768}getCanvas(){return this.canvas}getWidth(){return this.canvas.width}getHeight(){return this.canvas.height}render(){this.getCtx().fillStyle="blue",this.getCtx().fillRect(0,0,this.getWidth(),this.getHeight())}};var n=class{constructor(t,e,s){this.game=t,this.map=e,this.engine=s,this.setX(1),this.setY(1),this.setVx(1),this.setVy(1),this.setGravity(.8),this.setDebounce(-.8)}setGravity(t){this.gravity=t}getGravity(){return this.gravity}setVx(t){this.vx=t}getVx(){return this.vx}setVy(t){this.vy=t}getVy(){return this.vy}setRadius(t){this.radius=t}getRadius(){return this.radius}setX(t){this.x=t}getX(){return this.x}setY(t){this.y=t}getY(){return this.y}setDebounce(t){this.debounce=t}getDebounce(){return this.debounce}checkOverflowMapX(){this.getX()>this.map.getWidth()-this.getRadius()&&(this.setX(this.map.getWidth()-this.getRadius()),this.setVx(this.getVx()*this.getDebounce())),this.getX()<0&&(this.setX(0),this.setVx(this.getVx()*this.getDebounce()))}checkOverflowMapY(){this.getY()>this.map.getHeight()-this.getRadius()&&(this.setY(this.map.getHeight()-this.getRadius()),this.setVy(this.getVy()*this.getDebounce())),this.getY()<0&&(this.setY(0),this.setVy(this.getVy()*this.getDebounce()))}};var r=class extends n{constructor(t,e,s){super(t,e,s),this.setRadius(20)}onKeyPress(){}onKeyUp(){}update(){this.setVy(this.getVy()+this.getGravity()),this.setY(this.getY()+this.getVy()),this.setX(0),this.checkOverflowMapY()}render(){this.map.getCtx().beginPath(),this.map.getCtx().fillStyle="white",this.map.getCtx().arc(this.map.getWidth()/2,this.getY(),this.getRadius(),0,2*Math.PI),this.map.getCtx().fill(),this.map.getCtx().closePath()}};var a=class extends n{constructor(t,e,s){super(t,e,s),this.setRadius(30),this.setDebounce(-.1)}onKeyPress(){}onKeyUp(t){this.game.getKeyCode()!==t&&(this.setVx(1),this.setVy(1))}update(){switch(this.game.getKeyCode()){case"right":this.setVx(this.getVx()+this.getGravity()),this.setX(this.getX()+this.getVx());break;case"left":this.setVx(this.getVx()+this.getGravity()),this.setX(this.getX()-this.getVx());break;case"top":this.setVy(this.getVy()+this.getGravity()),this.setY(this.getY()-this.getVy());break;case"bottom":this.setVy(this.getVy()+this.getGravity()),this.setY(this.getY()+this.getVy())}this.checkOverflowMapX(),this.checkOverflowMapY()}render(){this.map.getCtx().beginPath(),this.map.getCtx().fillStyle="red",this.map.getCtx().fillRect(this.getX(),this.getY(),30,30),this.map.getCtx().closePath()}};new class{constructor(){this.engine=new i,this.map=new h,this.entities=[new a(this,this.map,this.engine),new r(this,this.map,this.engine)],this.startKeyboardEvents(),this.engine.run(this.start.bind(this))}setKeyCode(t){this.keyCode=t}getKeyCode(){return console.log(this.keyCode),this.keyCode}update(){this.entities.forEach(t=>t.update())}render(){this.map.render(),this.entities.forEach(t=>t.render())}start(){this.update(),this.render()}startKeyboardEvents(){window.addEventListener("keyup",t=>{const e={37:"left",39:"right",38:"top",40:"bottom"};"string"==typeof e[t.keyCode]&&(this.entities.forEach(s=>s.onKeyUp(e[t.keyCode])),this.setKeyCode(e[t.keyCode]))}),window.addEventListener("keypress",t=>{const e={32:"space"};this.handleInput(e[t.keyCode]),this.entities.forEach(s=>s.onKeyPress(e[t.keyCode]))})}}}]);