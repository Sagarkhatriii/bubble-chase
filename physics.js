'use strict';
function stepBubble(b,p,w,h,dt,time){
 const dx=b.x-p.x,dy=b.y-p.y,d=Math.hypot(dx,dy),reach=150;
 if(p.active&&d<reach){const angle=d<.001?b.phase:Math.atan2(dy,dx);const force=(1-d/reach)*1050;b.vx+=Math.cos(angle)*force*dt;b.vy+=Math.sin(angle)*force*dt;}
 b.vx+=Math.sin(time*.7+b.phase)*10*dt;b.vy+=Math.cos(time*.6+b.phase)*10*dt;
 const drag=Math.exp(-1.2*dt);b.vx*=drag;b.vy*=drag;
 const speed=Math.hypot(b.vx,b.vy);if(speed>360){b.vx*=360/speed;b.vy*=360/speed;}
 b.x+=b.vx*dt;b.y+=b.vy*dt;
 const r=Math.min(b.r,w/2,h/2);if(b.x<r){b.x=r;b.vx=Math.abs(b.vx)*.85;}if(b.x>w-r){b.x=w-r;b.vx=-Math.abs(b.vx)*.85;}
 if(b.y<r){b.y=r;b.vy=Math.abs(b.vy)*.85;}if(b.y>h-r){b.y=h-r;b.vy=-Math.abs(b.vy)*.85;}return b;
}
if(typeof module!=='undefined')module.exports={stepBubble};
