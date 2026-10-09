const assert=require('node:assert/strict');const {stepBubble}=require('./physics.js');
const make=()=>({x:100,y:100,r:20,vx:0,vy:0,phase:0});
let b=make();stepBubble(b,{x:80,y:100,active:true},400,300,.016,0);assert.ok(b.vx>0,'Bubble flees pointer');
b=make();stepBubble(b,{x:100,y:100,active:true},400,300,.016,0);assert.ok(Number.isFinite(b.x)&&Number.isFinite(b.vx),'Coincident pointer remains finite');
b={...make(),x:1,vx:-100};stepBubble(b,{active:false},400,300,.016,0);assert.equal(b.x,20);assert.ok(b.vx>0,'Wall reflects velocity');
b={...make(),vx:10000};stepBubble(b,{active:false},400,300,.016,0);assert.ok(Math.hypot(b.vx,b.vy)<=360.001);
for(let i=0;i<600;i++)stepBubble(b,{x:100,y:100,active:true},320,200,1/60,i/60);assert.ok(b.x>=b.r&&b.x<=320-b.r&&b.y>=b.r&&b.y<=200-b.r);
console.log('Passed pointer repulsion, coincident positions, wall bounce, speed limit and sustained bounds.');