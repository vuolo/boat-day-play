(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();const Pp="179",uM=0,G_=1,fM=2,rx=1,hM=2,xa=3,or=0,$n=1,Li=2,ar=0,js=1,Id=2,V_=3,k_=4,dM=5,Pr=100,pM=101,mM=102,gM=103,_M=104,vM=200,xM=201,yM=202,SM=203,Fd=204,Hd=205,MM=206,bM=207,EM=208,TM=209,AM=210,wM=211,RM=212,CM=213,DM=214,Gd=0,Vd=1,kd=2,Qs=3,Xd=4,Wd=5,qd=6,Yd=7,Bp=0,UM=1,LM=2,rr=0,NM=1,OM=2,zM=3,PM=4,BM=5,IM=6,FM=7,sx=300,Js=301,$s=302,jd=303,Zd=304,Ou=306,Kd=1e3,Fr=1001,Qd=1002,zi=1003,HM=1004,Hc=1005,Wi=1006,Wh=1007,Hr=1008,Yi=1009,ox=1010,lx=1011,ml=1012,Ip=1013,Gr=1014,ya=1015,Al=1016,Fp=1017,Hp=1018,gl=1020,cx=35902,ux=1021,fx=1022,Ni=1023,_l=1026,vl=1027,hx=1028,Gp=1029,dx=1030,Vp=1031,kp=1033,mu=33776,gu=33777,_u=33778,vu=33779,Jd=35840,$d=35841,tp=35842,ep=35843,np=36196,ip=37492,ap=37496,rp=37808,sp=37809,op=37810,lp=37811,cp=37812,up=37813,fp=37814,hp=37815,dp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xu=36492,xp=36494,yp=36495,px=36283,Sp=36284,Mp=36285,bp=36286,GM=3200,VM=3201,mx=0,kM=1,ir="",Jn="srgb",to="srgb-linear",Mu="linear",Xe="srgb",ws=7680,X_=519,XM=512,WM=513,qM=514,gx=515,YM=516,jM=517,ZM=518,KM=519,Ep=35044,W_="300 es",qi=2e3,bu=2001;class no{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const r=n[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=Math.PI/180,Tp=180/Math.PI;function sr(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function Ae(a,t,n){return Math.max(t,Math.min(n,a))}function QM(a,t){return(a%t+t)%t}function Yh(a,t,n){return(1-n)*a+n*t}function Xi(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function We(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class le{constructor(t=0,n=0){le.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wl{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,c,f,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const x=c[f+0],y=c[f+1],b=c[f+2],E=c[f+3];if(h===0){t[n+0]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g;return}if(h===1){t[n+0]=x,t[n+1]=y,t[n+2]=b,t[n+3]=E;return}if(g!==E||m!==x||p!==y||_!==b){let M=1-h;const v=m*x+p*y+_*b+g*E,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const H=Math.sqrt(D),I=Math.atan2(H,v*L);M=Math.sin(M*I)/H,h=Math.sin(h*I)/H}const T=h*L;if(m=m*M+x*T,p=p*M+y*T,_=_*M+b*T,g=g*M+E*T,M===1-h){const H=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=H,p*=H,_*=H,g*=H}}t[n]=m,t[n+1]=p,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[f],x=c[f+1],y=c[f+2],b=c[f+3];return t[n]=h*b+_*g+m*y-p*x,t[n+1]=m*b+_*x+p*g-h*y,t[n+2]=p*b+_*y+h*x-m*g,t[n+3]=_*b-h*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"YXZ":this._x=x*_*g+p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"ZXY":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g-x*y*b;break;case"ZYX":this._x=x*_*g-p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g+x*y*b;break;case"YZX":this._x=x*_*g+p*y*b,this._y=p*y*g+x*_*b,this._z=p*_*b-x*y*g,this._w=p*_*g-x*y*b;break;case"XZY":this._x=x*_*g-p*y*b,this._y=p*y*g-x*_*b,this._z=p*_*b+x*y*g,this._w=p*_*g+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],_=n[6],g=n[10],x=r+h+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,_=n._w;return this._x=r*_+f*h+l*p-c*m,this._y=l*_+f*m+c*h-r*p,this._z=c*_+f*p+r*m-l*h,this._w=f*_-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),g=Math.sin((1-n)*_)/p,x=Math.sin(n*_)/p;return this._w=f*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,n=0,r=0){nt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(q_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(q_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*r),_=2*(h*n-c*l),g=2*(c*r-f*n);return this.x=n+m*p+f*g-h*_,this.y=r+m*_+h*p-c*g,this.z=l+m*g+c*_-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return jh.copy(this).projectOnVector(t),this.sub(jh)}reflect(t){return this.sub(jh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jh=new nt,q_=new wl;class de{constructor(t,n,r,l,c,f,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,m,p)}set(t,n,r,l,c,f,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=n,_[4]=c,_[5]=m,_[6]=r,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],y=r[5],b=r[8],E=l[0],M=l[3],v=l[6],L=l[1],D=l[4],T=l[7],H=l[2],I=l[5],O=l[8];return c[0]=f*E+h*L+m*H,c[3]=f*M+h*D+m*I,c[6]=f*v+h*T+m*O,c[1]=p*E+_*L+g*H,c[4]=p*M+_*D+g*I,c[7]=p*v+_*T+g*O,c[2]=x*E+y*L+b*H,c[5]=x*M+y*D+b*I,c[8]=x*v+y*T+b*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return n*f*_-n*h*p-r*c*_+r*h*m+l*c*p-l*f*m}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*f-h*p,x=h*m-_*c,y=p*c-f*m,b=n*g+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=g*E,t[1]=(l*p-_*r)*E,t[2]=(h*r-l*f)*E,t[3]=x*E,t[4]=(_*n-l*m)*E,t[5]=(l*c-h*n)*E,t[6]=y*E,t[7]=(r*m-p*n)*E,t[8]=(f*n-r*c)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Zh.makeScale(t,n)),this}rotate(t){return this.premultiply(Zh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zh=new de;function _x(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function xl(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function JM(){const a=xl("canvas");return a.style.display="block",a}const Y_={};function Zs(a){a in Y_||(Y_[a]=!0,console.warn(a))}function $M(a,t,n){return new Promise(function(r,l){function c(){switch(a.clientWaitSync(t,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const j_=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tb(){const a={enabled:!0,workingColorSpace:to,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Xe&&(l.r=Sa(l.r),l.g=Sa(l.g),l.b=Sa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Xe&&(l.r=Ks(l.r),l.g=Ks(l.g),l.b=Ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ir?Mu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[to]:{primaries:t,whitePoint:r,transfer:Mu,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:j_,fromXYZ:Z_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),a}const Oe=tb();function Sa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ks(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Rs;class eb{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Rs===void 0&&(Rs=xl("canvas")),Rs.width=t.width,Rs.height=t.height;const l=Rs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Rs}return r.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=xl("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Sa(n[r]/255)*255):n[r]=Sa(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nb=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Kh(l[f].image)):c.push(Kh(l[f]))}else c=Kh(l);r.url=c}return n||(t.images[this.uuid]=r),r}}function Kh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?eb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ib=0;const Qh=new nt;class Fn extends no{constructor(t=Fn.DEFAULT_IMAGE,n=Fn.DEFAULT_MAPPING,r=Fr,l=Fr,c=Wi,f=Hr,h=Ni,m=Yi,p=Fn.DEFAULT_ANISOTROPY,_=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=sr(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kd:t.x=t.x-Math.floor(t.x);break;case Fr:t.x=t.x<0?0:1;break;case Qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kd:t.y=t.y-Math.floor(t.y);break;case Fr:t.y=t.y<0?0:1;break;case Qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=sx;Fn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,r=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],y=m[5],b=m[9],E=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-E)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+E)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,T=(y+1)/2,H=(v+1)/2,I=(_+x)/4,O=(g+E)/4,z=(b+M)/4;return D>T&&D>H?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=I/r,c=O/r):T>H?T<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(T),r=I/l,c=z/l):H<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),r=O/c,l=z/c),this.set(r,l,c,n),this}let L=Math.sqrt((M-b)*(M-b)+(g-E)*(g-E)+(x-_)*(x-_));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(g-E)/L,this.z=(x-_)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ab extends no{constructor(t=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const l={width:t,height:n,depth:r.depth},c=new Fn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const n={minFilter:Wi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},t.textures[n].image);this.textures[n].source=new Xp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends ab{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class vx extends Fn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends Fn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=zi,this.minFilter=zi,this.wrapR=Fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rl{constructor(t=new nt(1/0,1/0,1/0),n=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(Ci.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(Ci.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=Ci.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gc.copy(r.boundingBox)),Gc.applyMatrix4(t.matrixWorld),this.union(Gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Vc.subVectors(this.max,Ko),Cs.subVectors(t.a,Ko),Ds.subVectors(t.b,Ko),Us.subVectors(t.c,Ko),Ka.subVectors(Ds,Cs),Qa.subVectors(Us,Ds),wr.subVectors(Cs,Us);let n=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-wr.z,wr.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,wr.z,0,-wr.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-wr.y,wr.x,0];return!Jh(n,Cs,Ds,Us,Vc)||(n=[1,0,0,0,1,0,0,0,1],!Jh(n,Cs,Ds,Us,Vc))?!1:(kc.crossVectors(Ka,Qa),n=[kc.x,kc.y,kc.z],Jh(n,Cs,Ds,Us,Vc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(da),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const da=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ci=new nt,Gc=new Rl,Cs=new nt,Ds=new nt,Us=new nt,Ka=new nt,Qa=new nt,wr=new nt,Ko=new nt,Vc=new nt,kc=new nt,Rr=new nt;function Jh(a,t,n,r,l){for(let c=0,f=a.length-3;c<=f;c+=3){Rr.fromArray(a,c);const h=l.x*Math.abs(Rr.x)+l.y*Math.abs(Rr.y)+l.z*Math.abs(Rr.z),m=t.dot(Rr),p=n.dot(Rr),_=r.dot(Rr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const sb=new Rl,Qo=new nt,$h=new nt;class Wp{constructor(t=new nt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):sb.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(Qo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add($h)),this.expandByPoint(Qo.copy(t.center).sub($h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pa=new nt,td=new nt,Xc=new nt,Ja=new nt,ed=new nt,Wc=new nt,nd=new nt;class ob{constructor(t=new nt,n=new nt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=pa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){td.copy(t).add(n).multiplyScalar(.5),Xc.copy(n).sub(t).normalize(),Ja.copy(this.origin).sub(td);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Xc),h=Ja.dot(this.direction),m=-Ja.dot(Xc),p=Ja.lengthSq(),_=Math.abs(1-f*f);let g,x,y,b;if(_>0)if(g=f*m-h,x=f*h-m,b=c*_,g>=0)if(x>=-b)if(x<=b){const E=1/_;g*=E,x*=E,y=g*(g+f*x+2*h)+x*(f*g+x+2*m)+p}else x=c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*c+h)),x=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(g=Math.max(0,-(f*c+h)),x=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+x*(x+2*m)+p);else x=f>0?-c:c,g=Math.max(0,-(f*x+h)),y=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(td).addScaledVector(Xc,x),y}intersectSphere(t,n){pa.subVectors(t.center,this.origin);const r=pa.dot(this.direction),l=pa.dot(pa)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,c,f,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(h=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,n,r,l,c){ed.subVectors(n,t),Wc.subVectors(r,t),nd.crossVectors(ed,Wc);let f=this.direction.dot(nd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ja.subVectors(this.origin,t);const m=h*this.direction.dot(Wc.crossVectors(Ja,Wc));if(m<0)return null;const p=h*this.direction.dot(ed.cross(Ja));if(p<0||m+p>f)return null;const _=-h*Ja.dot(nd);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(t,n,r,l,c,f,h,m,p,_,g,x,y,b,E,M){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,m,p,_,g,x,y,b,E,M)}set(t,n,r,l,c,f,h,m,p,_,g,x,y,b,E,M){const v=this.elements;return v[0]=t,v[4]=n,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=y,v[7]=b,v[11]=E,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/Ls.setFromMatrixColumn(t,0).length(),c=1/Ls.setFromMatrixColumn(t,1).length(),f=1/Ls.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=f*_,y=f*g,b=h*_,E=h*g;n[0]=m*_,n[4]=-m*g,n[8]=p,n[1]=y+b*p,n[5]=x-E*p,n[9]=-h*m,n[2]=E-x*p,n[6]=b+y*p,n[10]=f*m}else if(t.order==="YXZ"){const x=m*_,y=m*g,b=p*_,E=p*g;n[0]=x+E*h,n[4]=b*h-y,n[8]=f*p,n[1]=f*g,n[5]=f*_,n[9]=-h,n[2]=y*h-b,n[6]=E+x*h,n[10]=f*m}else if(t.order==="ZXY"){const x=m*_,y=m*g,b=p*_,E=p*g;n[0]=x-E*h,n[4]=-f*g,n[8]=b+y*h,n[1]=y+b*h,n[5]=f*_,n[9]=E-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const x=f*_,y=f*g,b=h*_,E=h*g;n[0]=m*_,n[4]=b*p-y,n[8]=x*p+E,n[1]=m*g,n[5]=E*p+x,n[9]=y*p-b,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=h*m,E=h*p;n[0]=m*_,n[4]=E-x*g,n[8]=b*g+y,n[1]=g,n[5]=f*_,n[9]=-h*_,n[2]=-p*_,n[6]=y*g+b,n[10]=x-E*g}else if(t.order==="XZY"){const x=f*m,y=f*p,b=h*m,E=h*p;n[0]=m*_,n[4]=-g,n[8]=p*_,n[1]=x*g+E,n[5]=f*_,n[9]=y*g-b,n[2]=b*g-y,n[6]=h*_,n[10]=E*g+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lb,t,cb)}lookAt(t,n,r){const l=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),$a.crossVectors(r,ci),$a.lengthSq()===0&&(Math.abs(r.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),$a.crossVectors(r,ci)),$a.normalize(),qc.crossVectors(ci,$a),l[0]=$a.x,l[4]=qc.x,l[8]=ci.x,l[1]=$a.y,l[5]=qc.y,l[9]=ci.y,l[2]=$a.z,l[6]=qc.z,l[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],y=r[13],b=r[2],E=r[6],M=r[10],v=r[14],L=r[3],D=r[7],T=r[11],H=r[15],I=l[0],O=l[4],z=l[8],A=l[12],R=l[1],P=l[5],q=l[9],$=l[13],et=l[2],dt=l[6],B=l[10],tt=l[14],Y=l[3],J=l[7],pt=l[11],N=l[15];return c[0]=f*I+h*R+m*et+p*Y,c[4]=f*O+h*P+m*dt+p*J,c[8]=f*z+h*q+m*B+p*pt,c[12]=f*A+h*$+m*tt+p*N,c[1]=_*I+g*R+x*et+y*Y,c[5]=_*O+g*P+x*dt+y*J,c[9]=_*z+g*q+x*B+y*pt,c[13]=_*A+g*$+x*tt+y*N,c[2]=b*I+E*R+M*et+v*Y,c[6]=b*O+E*P+M*dt+v*J,c[10]=b*z+E*q+M*B+v*pt,c[14]=b*A+E*$+M*tt+v*N,c[3]=L*I+D*R+T*et+H*Y,c[7]=L*O+D*P+T*dt+H*J,c[11]=L*z+D*q+T*B+H*pt,c[15]=L*A+D*$+T*tt+H*N,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],y=t[14],b=t[3],E=t[7],M=t[11],v=t[15];return b*(+c*m*g-l*p*g-c*h*x+r*p*x+l*h*y-r*m*y)+E*(+n*m*y-n*p*x+c*f*x-l*f*y+l*p*_-c*m*_)+M*(+n*p*g-n*h*y-c*f*g+r*f*y+c*h*_-r*p*_)+v*(-l*h*_-n*m*g+n*h*x+l*f*g-r*f*x+r*m*_)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],y=t[11],b=t[12],E=t[13],M=t[14],v=t[15],L=g*M*p-E*x*p+E*m*y-h*M*y-g*m*v+h*x*v,D=b*x*p-_*M*p-b*m*y+f*M*y+_*m*v-f*x*v,T=_*E*p-b*g*p+b*h*y-f*E*y-_*h*v+f*g*v,H=b*g*m-_*E*m-b*h*x+f*E*x+_*h*M-f*g*M,I=n*L+r*D+l*T+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return t[0]=L*O,t[1]=(E*x*c-g*M*c-E*l*y+r*M*y+g*l*v-r*x*v)*O,t[2]=(h*M*c-E*m*c+E*l*p-r*M*p-h*l*v+r*m*v)*O,t[3]=(g*m*c-h*x*c-g*l*p+r*x*p+h*l*y-r*m*y)*O,t[4]=D*O,t[5]=(_*M*c-b*x*c+b*l*y-n*M*y-_*l*v+n*x*v)*O,t[6]=(b*m*c-f*M*c-b*l*p+n*M*p+f*l*v-n*m*v)*O,t[7]=(f*x*c-_*m*c+_*l*p-n*x*p-f*l*y+n*m*y)*O,t[8]=T*O,t[9]=(b*g*c-_*E*c-b*r*y+n*E*y+_*r*v-n*g*v)*O,t[10]=(f*E*c-b*h*c+b*r*p-n*E*p-f*r*v+n*h*v)*O,t[11]=(_*h*c-f*g*c-_*r*p+n*g*p+f*r*y-n*h*y)*O,t[12]=H*O,t[13]=(_*E*l-b*g*l+b*r*x-n*E*x-_*r*M+n*g*M)*O,t[14]=(b*h*l-f*E*l-b*r*m+n*E*m+f*r*M-n*h*M)*O,t[15]=(f*g*l-_*h*l+_*r*m-n*g*m-f*r*x+n*h*x)*O,this}scale(t){const n=this.elements,r=t.x,l=t.y,c=t.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=t.x,h=t.y,m=t.z,p=c*f,_=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*f,0,p*m-l*h,_*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,_=f+f,g=h+h,x=c*p,y=c*_,b=c*g,E=f*_,M=f*g,v=h*g,L=m*p,D=m*_,T=m*g,H=r.x,I=r.y,O=r.z;return l[0]=(1-(E+v))*H,l[1]=(y+T)*H,l[2]=(b-D)*H,l[3]=0,l[4]=(y-T)*I,l[5]=(1-(x+v))*I,l[6]=(M+L)*I,l[7]=0,l[8]=(b+D)*O,l[9]=(M-L)*O,l[10]=(1-(x+E))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let c=Ls.set(l[0],l[1],l[2]).length();const f=Ls.set(l[4],l[5],l[6]).length(),h=Ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Di.copy(this);const p=1/c,_=1/f,g=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,n.setFromRotationMatrix(Di),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,l,c,f,h=qi,m=!1){const p=this.elements,_=2*c/(n-t),g=2*c/(r-l),x=(n+t)/(n-t),y=(r+l)/(r-l);let b,E;if(m)b=c/(f-c),E=f*c/(f-c);else if(h===qi)b=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===bu)b=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,l,c,f,h=qi,m=!1){const p=this.elements,_=2/(n-t),g=2/(r-l),x=-(n+t)/(n-t),y=-(r+l)/(r-l);let b,E;if(m)b=1/(f-c),E=f/(f-c);else if(h===qi)b=-2/(f-c),E=-(f+c)/(f-c);else if(h===bu)b=-1/(f-c),E=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const Ls=new nt,Di=new ln,lb=new nt(0,0,0),cb=new nt(1,1,1),$a=new nt,qc=new nt,ci=new nt,K_=new ln,Q_=new wl;class ji{constructor(t=0,n=0,r=0,l=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class xx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ub=0;const J_=new nt,Ns=new wl,ma=new ln,Yc=new nt,Jo=new nt,fb=new nt,hb=new wl,$_=new nt(1,0,0),tv=new nt(0,1,0),ev=new nt(0,0,1),nv={type:"added"},db={type:"removed"},Os={type:"childadded",child:null},id={type:"childremoved",child:null};class Nn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new nt,n=new ji,r=new wl,l=new nt(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new de}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,n){return Ns.setFromAxisAngle(t,n),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis($_,t)}rotateY(t){return this.rotateOnAxis(tv,t)}rotateZ(t){return this.rotateOnAxis(ev,t)}translateOnAxis(t,n){return J_.copy(t).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis($_,t)}translateY(t){return this.translateOnAxis(tv,t)}translateZ(t){return this.translateOnAxis(ev,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Yc.copy(t):Yc.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(Jo,Yc,this.up):ma.lookAt(Yc,Jo,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(ma),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nv),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(db),id.child=t,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nv),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,fb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),_=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new nt(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new nt,ga=new nt,ad=new nt,_a=new nt,zs=new nt,Ps=new nt,iv=new nt,rd=new nt,sd=new nt,od=new nt,ld=new on,cd=new on,ud=new on;class Ei{constructor(t=new nt,n=new nt,r=new nt){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),Ui.subVectors(t,n),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,r,l,c){Ui.subVectors(l,n),ga.subVectors(r,n),ad.subVectors(t,n);const f=Ui.dot(Ui),h=Ui.dot(ga),m=Ui.dot(ad),p=ga.dot(ga),_=ga.dot(ad),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const x=1/g,y=(p*m-h*_)*x,b=(f*_-h*m)*x;return c.set(1-y-b,b,y)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(t,n,r,l,c,f,h,m){return this.getBarycoord(t,n,r,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(t,n,r,l,c,f){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(t,n),cd.fromBufferAttribute(t,r),ud.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ld,c.x),f.addScaledVector(cd,c.y),f.addScaledVector(ud,c.z),f}static isFrontFacing(t,n,r,l){return Ui.subVectors(r,n),ga.subVectors(t,n),Ui.cross(ga).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ui.cross(ga).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ei.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,n,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,c=this.c;let f,h;zs.subVectors(l,r),Ps.subVectors(c,r),rd.subVectors(t,r);const m=zs.dot(rd),p=Ps.dot(rd);if(m<=0&&p<=0)return n.copy(r);sd.subVectors(t,l);const _=zs.dot(sd),g=Ps.dot(sd);if(_>=0&&g<=_)return n.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return f=m/(m-_),n.copy(r).addScaledVector(zs,f);od.subVectors(t,c);const y=zs.dot(od),b=Ps.dot(od);if(b>=0&&y<=b)return n.copy(c);const E=y*p-m*b;if(E<=0&&p>=0&&b<=0)return h=p/(p-b),n.copy(r).addScaledVector(Ps,h);const M=_*b-y*g;if(M<=0&&g-_>=0&&y-b>=0)return iv.subVectors(c,l),h=(g-_)/(g-_+(y-b)),n.copy(l).addScaledVector(iv,h);const v=1/(M+E+x);return f=E*v,h=x*v,n.copy(r).addScaledVector(zs,f).addScaledVector(Ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},jc={h:0,s:0,l:0};function fd(a,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(t-a)*6*n:n<1/2?t:n<2/3?a+(t-a)*6*(2/3-n):a}class ge{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Oe.colorSpaceToWorking(this,n),this}setRGB(t,n,r,l=Oe.workingColorSpace){return this.r=t,this.g=n,this.b=r,Oe.colorSpaceToWorking(this,l),this}setHSL(t,n,r,l=Oe.workingColorSpace){if(t=QM(t,1),n=Ae(n,0,1),r=Ae(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=fd(f,c,t+1/3),this.g=fd(f,c,t),this.b=fd(f,c,t-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(t,n=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Jn){const r=yx[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return Oe.workingToColorSpace(Pn.copy(this),t),Math.round(Ae(Pn.r*255,0,255))*65536+Math.round(Ae(Pn.g*255,0,255))*256+Math.round(Ae(Pn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Oe.workingColorSpace){Oe.workingToColorSpace(Pn.copy(this),n);const r=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const _=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=_<=.5?g/(f+h):g/(2-f-h),f){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,n=Oe.workingColorSpace){return Oe.workingToColorSpace(Pn.copy(this),n),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=Jn){Oe.workingToColorSpace(Pn.copy(this),t);const n=Pn.r,r=Pn.g,l=Pn.b;return t!==Jn?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+n,tr.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(tr),t.getHSL(jc);const r=Yh(tr.h,jc.h,n),l=Yh(tr.s,jc.s,n),c=Yh(tr.l,jc.l,n);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ge;ge.NAMES=yx;let pb=0;class io extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=js,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Hd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Fd&&(r.blendSrc=this.blendSrc),this.blendDst!==Hd&&(r.blendDst=this.blendDst),this.blendEquation!==Pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vr extends io{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _n=new nt,Zc=new le;let mb=0;class Pi{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=Ep,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Zc.fromBufferAttribute(this,n),Zc.applyMatrix3(t),this.setXY(n,Zc.x,Zc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=We(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xi(n,this.array)),n}setX(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xi(n,this.array)),n}setY(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xi(n,this.array)),n}setW(t,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),r=We(r,this.array),l=We(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t*=this.itemSize,this.normalized&&(n=We(n,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ep&&(t.usage=this.usage),t}}class Sx extends Pi{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Mx extends Pi{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class $e extends Pi{constructor(t,n,r){super(new Float32Array(t),n,r)}}let gb=0;const yi=new ln,hd=new Nn,Bs=new nt,ui=new Rl,$o=new Rl,An=new nt;class ti extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_x(t)?Mx:Sx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new de().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,r){return yi.makeTranslation(t,n,r),this.applyMatrix4(yi),this}scale(t,n,r){return yi.makeScale(t,n,r),this.applyMatrix4(yi),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new $e(r,3))}else{const r=Math.min(t.length,n.count);for(let l=0;l<r;l++){const c=t[l];n.setXYZ(l,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const r=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];$o.setFromBufferAttribute(h),this.morphTargetsRelative?(An.addVectors(ui.min,$o.min),ui.expandByPoint(An),An.addVectors(ui.max,$o.max),ui.expandByPoint(An)):(ui.expandByPoint($o.min),ui.expandByPoint($o.max))}ui.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)An.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(An));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)An.fromBufferAttribute(h,p),m&&(Bs.fromBufferAttribute(t,p),An.add(Bs)),l=Math.max(l,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let z=0;z<r.count;z++)h[z]=new nt,m[z]=new nt;const p=new nt,_=new nt,g=new nt,x=new le,y=new le,b=new le,E=new nt,M=new nt;function v(z,A,R){p.fromBufferAttribute(r,z),_.fromBufferAttribute(r,A),g.fromBufferAttribute(r,R),x.fromBufferAttribute(c,z),y.fromBufferAttribute(c,A),b.fromBufferAttribute(c,R),_.sub(p),g.sub(p),y.sub(x),b.sub(x);const P=1/(y.x*b.y-b.x*y.y);isFinite(P)&&(E.copy(_).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(P),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(P),h[z].add(E),h[A].add(E),h[R].add(E),m[z].add(M),m[A].add(M),m[R].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let z=0,A=L.length;z<A;++z){const R=L[z],P=R.start,q=R.count;for(let $=P,et=P+q;$<et;$+=3)v(t.getX($+0),t.getX($+1),t.getX($+2))}const D=new nt,T=new nt,H=new nt,I=new nt;function O(z){H.fromBufferAttribute(l,z),I.copy(H);const A=h[z];D.copy(A),D.sub(H.multiplyScalar(H.dot(A))).normalize(),T.crossVectors(I,A);const P=T.dot(m[z])<0?-1:1;f.setXYZW(z,D.x,D.y,D.z,P)}for(let z=0,A=L.length;z<A;++z){const R=L[z],P=R.start,q=R.count;for(let $=P,et=P+q;$<et;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new nt,c=new nt,f=new nt,h=new nt,m=new nt,p=new nt,_=new nt,g=new nt;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),E=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),h.add(_),m.add(_),p.add(_),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(E,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)l.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)An.fromBufferAttribute(t,n),An.normalize(),t.setXYZ(n,An.x,An.y,An.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let E=0,M=m.length;E<M;E++){h.isInterleavedBufferAttribute?y=m[E]*h.data.stride+h.offset:y=m[E]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new Pi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let _=0,g=p.length;_<g;_++){const x=p[_],y=t(x,r);m.push(y)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(n))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let x=0,y=g.length;x<y;x++)_.push(g[x].clone(n));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const av=new ln,Cr=new ob,Kc=new Wp,rv=new nt,Qc=new nt,Jc=new nt,$c=new nt,dd=new nt,tu=new nt,sv=new nt,eu=new nt;class jt extends Nn{constructor(t=new ti,n=new Vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){tu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=h[m],g=c[m];_!==0&&(dd.fromBufferAttribute(g,t),f?tu.addScaledVector(dd,_):tu.addScaledVector(dd.sub(n),_))}n.add(tu)}return n}raycast(t,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(c),Cr.copy(t.ray).recast(t.near),!(Kc.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Kc,rv)===null||Cr.origin.distanceToSquared(rv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Cr.copy(t.ray).applyMatrix4(av),!(r.boundingBox!==null&&Cr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,Cr)))}_computeIntersections(t,n,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const M=x[b],v=f[M.materialIndex],L=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let T=L,H=D;T<H;T+=3){const I=h.getX(T),O=h.getX(T+1),z=h.getX(T+2);l=nu(this,v,t,r,p,_,g,I,O,z),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const L=h.getX(M),D=h.getX(M+1),T=h.getX(M+2);l=nu(this,f,t,r,p,_,g,L,D,T),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,E=x.length;b<E;b++){const M=x[b],v=f[M.materialIndex],L=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let T=L,H=D;T<H;T+=3){const I=T,O=T+1,z=T+2;l=nu(this,v,t,r,p,_,g,I,O,z),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const b=Math.max(0,y.start),E=Math.min(m.count,y.start+y.count);for(let M=b,v=E;M<v;M+=3){const L=M,D=M+1,T=M+2;l=nu(this,f,t,r,p,_,g,L,D,T),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function _b(a,t,n,r,l,c,f,h){let m;if(t.side===$n?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,t.side===or,h),m===null)return null;eu.copy(h),eu.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(eu);return p<n.near||p>n.far?null:{distance:p,point:eu.clone(),object:a}}function nu(a,t,n,r,l,c,f,h,m,p){a.getVertexPosition(h,Qc),a.getVertexPosition(m,Jc),a.getVertexPosition(p,$c);const _=_b(a,t,n,r,Qc,Jc,$c,sv);if(_){const g=new nt;Ei.getBarycoord(sv,Qc,Jc,$c,g),l&&(_.uv=Ei.getInterpolatedAttribute(l,h,m,p,g,new le)),c&&(_.uv1=Ei.getInterpolatedAttribute(c,h,m,p,g,new le)),f&&(_.normal=Ei.getInterpolatedAttribute(f,h,m,p,g,new nt),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new nt,materialIndex:0};Ei.getNormal(Qc,Jc,$c,x.normal),_.face=x,_.barycoord=g}return _}class De extends ti{constructor(t=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,r,n,t,f,c,0),b("z","y","x",1,-1,r,n,-t,f,c,1),b("x","z","y",1,1,t,r,n,l,f,2),b("x","z","y",1,-1,t,r,-n,l,f,3),b("x","y","z",1,-1,t,n,r,l,c,4),b("x","y","z",-1,-1,t,n,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new $e(p,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2));function b(E,M,v,L,D,T,H,I,O,z,A){const R=T/O,P=H/z,q=T/2,$=H/2,et=I/2,dt=O+1,B=z+1;let tt=0,Y=0;const J=new nt;for(let pt=0;pt<B;pt++){const N=pt*P-$;for(let Z=0;Z<dt;Z++){const at=Z*R-q;J[E]=at*L,J[M]=N*D,J[v]=et,p.push(J.x,J.y,J.z),J[E]=0,J[M]=0,J[v]=I>0?1:-1,_.push(J.x,J.y,J.z),g.push(Z/O),g.push(1-pt/z),tt+=1}}for(let pt=0;pt<z;pt++)for(let N=0;N<O;N++){const Z=x+N+dt*pt,at=x+N+dt*(pt+1),lt=x+(N+1)+dt*(pt+1),X=x+(N+1)+dt*pt;m.push(Z,at,X),m.push(at,lt,X),Y+=6}h.addGroup(y,Y,A),y+=Y,x+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eo(a){const t={};for(const n in a){t[n]={};for(const r in a[n]){const l=a[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function Xn(a){const t={};for(let n=0;n<a.length;n++){const r=eo(a[n]);for(const l in r)t[l]=r[l]}return t}function vb(a){const t=[];for(let n=0;n<a.length;n++)t.push(a[n].clone());return t}function bx(a){const t=a.getRenderTarget();return t===null?a.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Oe.workingColorSpace}const xb={clone:eo,merge:Xn};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ea extends io{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=vb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ex extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const er=new nt,ov=new le,lv=new le;class bi extends Ex{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tp*2*Math.atan(Math.tan(qh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,n){return this.getViewBounds(t,ov,lv),n.subVectors(lv,ov)}setViewOffset(t,n,r,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qh*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,n-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Fs=1;class Mb extends Nn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Is,Fs,t,n);l.layers=this.layers,this.add(l);const c=new bi(Is,Fs,t,n);c.layers=this.layers,this.add(c);const f=new bi(Is,Fs,t,n);f.layers=this.layers,this.add(f);const h=new bi(Is,Fs,t,n);h.layers=this.layers,this.add(h);const m=new bi(Is,Fs,t,n);m.layers=this.layers,this.add(m);const p=new bi(Is,Fs,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===bu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,c),t.setRenderTarget(r,1,l),t.render(n,f),t.setRenderTarget(r,2,l),t.render(n,h),t.setRenderTarget(r,3,l),t.render(n,m),t.setRenderTarget(r,4,l),t.render(n,p),r.texture.generateMipmaps=E,t.setRenderTarget(r,5,l),t.render(n,_),t.setRenderTarget(g,x,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Tx extends Fn{constructor(t=[],n=Js,r,l,c,f,h,m,p,_){super(t,n,r,l,c,f,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bb extends ba{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Tx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new De(5,5,5),c=new Ea({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:ar});c.uniforms.tEquirect.value=n;const f=new jt(l,c),h=n.minFilter;return n.minFilter===Hr&&(n.minFilter=Wi),new Mb(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,l);t.setRenderTarget(c)}}class In extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const E of t.hand.values()){const M=n.getJointPose(E,r),v=this._getHandJoint(p,E);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new In;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}class qp{constructor(t,n=1,r=1e3){this.isFog=!0,this.name="",this.color=new ge(t),this.near=n,this.far=r}clone(){return new qp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ax extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Tb{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Ep,this.updateRanges=[],this.version=0,this.uuid=sr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,r){t*=this.stride,r*=n.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=n.array[r+l];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new nt;class Eu{constructor(t,n,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,r=this.data.count;n<r;n++)kn.fromBufferAttribute(this,n),kn.applyMatrix4(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)kn.fromBufferAttribute(this,n),kn.applyNormalMatrix(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)kn.fromBufferAttribute(this,n),kn.transformDirection(t),this.setXYZ(n,kn.x,kn.y,kn.z);return this}getComponent(t,n){let r=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(r=Xi(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=We(r,this.array)),this.data.array[t*this.data.stride+this.offset+n]=r,this}setX(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Xi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Xi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Xi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Xi(n,this.array)),n}setXY(t,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),r=We(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this}setXYZ(t,n,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),r=We(r,this.array),l=We(l,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(n=We(n,this.array),r=We(r,this.array),l=We(l,this.array),c=We(c,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return new Pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)n.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zu extends io{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const tl=new nt,Gs=new nt,Vs=new nt,ks=new le,el=new le,wx=new ln,iu=new nt,nl=new nt,au=new nt,cv=new le,md=new le,uv=new le;class Yp extends Nn{constructor(t=new zu){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new ti;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Tb(n,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new Eu(r,3,0,!1)),Hs.setAttribute("uv",new Eu(r,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new le(.5,.5),this.count=1}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),wx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const f=this.center;ru(iu.set(-.5,-.5,0),Vs,f,Gs,l,c),ru(nl.set(.5,-.5,0),Vs,f,Gs,l,c),ru(au.set(.5,.5,0),Vs,f,Gs,l,c),cv.set(0,0),md.set(1,0),uv.set(1,1);let h=t.ray.intersectTriangle(iu,nl,au,!1,tl);if(h===null&&(ru(nl.set(-.5,.5,0),Vs,f,Gs,l,c),md.set(0,1),h=t.ray.intersectTriangle(iu,au,nl,!1,tl),h===null))return;const m=t.ray.origin.distanceTo(tl);m<t.near||m>t.far||n.push({distance:m,point:tl.clone(),uv:Ei.getInterpolation(tl,iu,nl,au,cv,md,uv,new le),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ru(a,t,n,r,l,c){ks.subVectors(a,n).addScalar(.5).multiply(r),l!==void 0?(el.x=c*ks.x-l*ks.y,el.y=l*ks.x+c*ks.y):el.copy(ks),a.copy(t),a.x+=el.x,a.y+=el.y,a.applyMatrix4(wx)}const gd=new nt,Ab=new nt,wb=new de;class Or{constructor(t=new nt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=gd.subVectors(r,n).cross(Ab.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(gd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||wb.getNormalMatrix(t),l=this.coplanarPoint(gd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Wp,Rb=new le(.5,.5),su=new nt;class jp{constructor(t=new Or,n=new Or,r=new Or,l=new Or,c=new Or,f=new Or){this.planes=[t,n,r,l,c,f]}set(t,n,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=qi,r=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],_=c[4],g=c[5],x=c[6],y=c[7],b=c[8],E=c[9],M=c[10],v=c[11],L=c[12],D=c[13],T=c[14],H=c[15];if(l[0].setComponents(p-f,y-_,v-b,H-L).normalize(),l[1].setComponents(p+f,y+_,v+b,H+L).normalize(),l[2].setComponents(p+h,y+g,v+E,H+D).normalize(),l[3].setComponents(p-h,y-g,v-E,H-D).normalize(),r)l[4].setComponents(m,x,M,T).normalize(),l[5].setComponents(p-m,y-x,v-M,H-T).normalize();else if(l[4].setComponents(p-m,y-x,v-M,H-T).normalize(),n===qi)l[5].setComponents(p+m,y+x,v+M,H+T).normalize();else if(n===bu)l[5].setComponents(m,x,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);const n=Rb.distanceTo(t.center);return Dr.radius=.7071067811865476+n,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(su.x=l.normal.x>0?t.max.x:t.min.x,su.y=l.normal.y>0?t.max.y:t.min.y,su.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(su)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rx extends Fn{constructor(t,n,r,l,c,f,h,m,p){super(t,n,r,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cx extends Fn{constructor(t,n,r=Gr,l,c,f,h=zi,m=zi,p,_=_l,g=1){if(_!==_l&&_!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:n,depth:g};super(x,l,c,f,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zp extends ti{constructor(t=1,n=32,r=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:r,thetaLength:l},n=Math.max(3,n);const c=[],f=[],h=[],m=[],p=new nt,_=new le;f.push(0,0,0),h.push(0,0,1),m.push(.5,.5);for(let g=0,x=3;g<=n;g++,x+=3){const y=r+g/n*l;p.x=t*Math.cos(y),p.y=t*Math.sin(y),f.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(f[x]/t+1)/2,_.y=(f[x+1]/t+1)/2,m.push(_.x,_.y)}for(let g=1;g<=n;g++)c.push(g,g+1,0);this.setIndex(c),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ta extends ti{constructor(t=1,n=1,r=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],x=[],y=[];let b=0;const E=[],M=r/2;let v=0;L(),f===!1&&(t>0&&D(!0),n>0&&D(!1)),this.setIndex(_),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(x,3)),this.setAttribute("uv",new $e(y,2));function L(){const T=new nt,H=new nt;let I=0;const O=(n-t)/r;for(let z=0;z<=c;z++){const A=[],R=z/c,P=R*(n-t)+t;for(let q=0;q<=l;q++){const $=q/l,et=$*m+h,dt=Math.sin(et),B=Math.cos(et);H.x=P*dt,H.y=-R*r+M,H.z=P*B,g.push(H.x,H.y,H.z),T.set(dt,O,B).normalize(),x.push(T.x,T.y,T.z),y.push($,1-R),A.push(b++)}E.push(A)}for(let z=0;z<l;z++)for(let A=0;A<c;A++){const R=E[A][z],P=E[A+1][z],q=E[A+1][z+1],$=E[A][z+1];(t>0||A!==0)&&(_.push(R,P,$),I+=3),(n>0||A!==c-1)&&(_.push(P,q,$),I+=3)}p.addGroup(v,I,0),v+=I}function D(T){const H=b,I=new le,O=new nt;let z=0;const A=T===!0?t:n,R=T===!0?1:-1;for(let q=1;q<=l;q++)g.push(0,M*R,0),x.push(0,R,0),y.push(.5,.5),b++;const P=b;for(let q=0;q<=l;q++){const et=q/l*m+h,dt=Math.cos(et),B=Math.sin(et);O.x=A*B,O.y=M*R,O.z=A*dt,g.push(O.x,O.y,O.z),x.push(0,R,0),I.x=dt*.5+.5,I.y=B*.5*R+.5,y.push(I.x,I.y),b++}for(let q=0;q<l;q++){const $=H+q,et=P+q;T===!0?_.push(et,et+1,$):_.push(et+1,et,$),z+=3}p.addGroup(v,z,T===!0?1:2),v+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kp extends Ta{constructor(t=1,n=1,r=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,n,r,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new Kp(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qp extends ti{constructor(t=[],n=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:r,detail:l};const c=[],f=[];h(l),p(r),_(),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(c.slice(),3)),this.setAttribute("uv",new $e(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const D=new nt,T=new nt,H=new nt;for(let I=0;I<n.length;I+=3)y(n[I+0],D),y(n[I+1],T),y(n[I+2],H),m(D,T,H,L)}function m(L,D,T,H){const I=H+1,O=[];for(let z=0;z<=I;z++){O[z]=[];const A=L.clone().lerp(T,z/I),R=D.clone().lerp(T,z/I),P=I-z;for(let q=0;q<=P;q++)q===0&&z===I?O[z][q]=A:O[z][q]=A.clone().lerp(R,q/P)}for(let z=0;z<I;z++)for(let A=0;A<2*(I-z)-1;A++){const R=Math.floor(A/2);A%2===0?(x(O[z][R+1]),x(O[z+1][R]),x(O[z][R])):(x(O[z][R+1]),x(O[z+1][R+1]),x(O[z+1][R]))}}function p(L){const D=new nt;for(let T=0;T<c.length;T+=3)D.x=c[T+0],D.y=c[T+1],D.z=c[T+2],D.normalize().multiplyScalar(L),c[T+0]=D.x,c[T+1]=D.y,c[T+2]=D.z}function _(){const L=new nt;for(let D=0;D<c.length;D+=3){L.x=c[D+0],L.y=c[D+1],L.z=c[D+2];const T=M(L)/2/Math.PI+.5,H=v(L)/Math.PI+.5;f.push(T,1-H)}b(),g()}function g(){for(let L=0;L<f.length;L+=6){const D=f[L+0],T=f[L+2],H=f[L+4],I=Math.max(D,T,H),O=Math.min(D,T,H);I>.9&&O<.1&&(D<.2&&(f[L+0]+=1),T<.2&&(f[L+2]+=1),H<.2&&(f[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function y(L,D){const T=L*3;D.x=t[T+0],D.y=t[T+1],D.z=t[T+2]}function b(){const L=new nt,D=new nt,T=new nt,H=new nt,I=new le,O=new le,z=new le;for(let A=0,R=0;A<c.length;A+=9,R+=6){L.set(c[A+0],c[A+1],c[A+2]),D.set(c[A+3],c[A+4],c[A+5]),T.set(c[A+6],c[A+7],c[A+8]),I.set(f[R+0],f[R+1]),O.set(f[R+2],f[R+3]),z.set(f[R+4],f[R+5]),H.copy(L).add(D).add(T).divideScalar(3);const P=M(H);E(I,R+0,L,P),E(O,R+2,D,P),E(z,R+4,T,P)}}function E(L,D,T,H){H<0&&L.x===1&&(f[D]=L.x-1),T.x===0&&T.z===0&&(f[D]=H/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qp(t.vertices,t.indices,t.radius,t.details)}}class Pu extends Qp{constructor(t=1,n=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,l,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Pu(t.radius,t.detail)}}class kr extends ti{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,x=n/m,y=[],b=[],E=[],M=[];for(let v=0;v<_;v++){const L=v*x-f;for(let D=0;D<p;D++){const T=D*g-c;b.push(T,-L,0),E.push(0,0,1),M.push(D/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const D=L+p*v,T=L+p*(v+1),H=L+1+p*(v+1),I=L+1+p*v;y.push(D,T,I),y.push(T,H,I)}this.setIndex(y),this.setAttribute("position",new $e(b,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tu extends ti{constructor(t=1,n=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const _=[],g=new nt,x=new nt,y=[],b=[],E=[],M=[];for(let v=0;v<=r;v++){const L=[],D=v/r;let T=0;v===0&&f===0?T=.5/n:v===r&&m===Math.PI&&(T=-.5/n);for(let H=0;H<=n;H++){const I=H/n;g.x=-t*Math.cos(l+I*c)*Math.sin(f+D*h),g.y=t*Math.cos(f+D*h),g.z=t*Math.sin(l+I*c)*Math.sin(f+D*h),b.push(g.x,g.y,g.z),x.copy(g).normalize(),E.push(x.x,x.y,x.z),M.push(I+T,1-D),L.push(p++)}_.push(L)}for(let v=0;v<r;v++)for(let L=0;L<n;L++){const D=_[v][L+1],T=_[v][L],H=_[v+1][L],I=_[v+1][L+1];(v!==0||f>0)&&y.push(D,T,I),(v!==r-1||m<Math.PI)&&y.push(T,H,I)}this.setIndex(y),this.setAttribute("position",new $e(b,3)),this.setAttribute("normal",new $e(E,3)),this.setAttribute("uv",new $e(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jp extends ti{constructor(t=1,n=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const f=[],h=[],m=[],p=[],_=new nt,g=new nt,x=new nt;for(let y=0;y<=r;y++)for(let b=0;b<=l;b++){const E=b/l*c,M=y/r*Math.PI*2;g.x=(t+n*Math.cos(M))*Math.cos(E),g.y=(t+n*Math.cos(M))*Math.sin(E),g.z=n*Math.sin(M),h.push(g.x,g.y,g.z),_.x=t*Math.cos(E),_.y=t*Math.sin(E),x.subVectors(g,_).normalize(),m.push(x.x,x.y,x.z),p.push(b/l),p.push(y/r)}for(let y=1;y<=r;y++)for(let b=1;b<=l;b++){const E=(l+1)*y+b-1,M=(l+1)*(y-1)+b-1,v=(l+1)*(y-1)+b,L=(l+1)*y+b;f.push(E,M,L),f.push(M,v,L)}this.setIndex(f),this.setAttribute("position",new $e(h,3)),this.setAttribute("normal",new $e(m,3)),this.setAttribute("uv",new $e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jp(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ue extends io{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mx,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cb extends io{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Db extends io{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const _d={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Ub{constructor(t,n,r){const l=this;let c=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=r,this.abortController=new AbortController,this.itemStart=function(_){h++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,h),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,h),f===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Lb=new Ub;class $p{constructor(t){this.manager=t!==void 0?t:Lb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const r=this;return new Promise(function(l,c){r.load(t,l,n,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}$p.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xs=new WeakMap;class Nb extends $p{constructor(t){super(t)}load(t,n,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=_d.get(`image:${t}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(t),setTimeout(function(){n&&n(f),c.manager.itemEnd(t)},0);else{let g=Xs.get(f);g===void 0&&(g=[],Xs.set(f,g)),g.push({onLoad:n,onError:l})}return f}const h=xl("img");function m(){_(),n&&n(this);const g=Xs.get(this)||[];for(let x=0;x<g.length;x++){const y=g[x];y.onLoad&&y.onLoad(this)}Xs.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),_d.remove(`image:${t}`);const x=Xs.get(this)||[];for(let y=0;y<x.length;y++){const b=x[y];b.onError&&b.onError(g)}Xs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),_d.add(`image:${t}`,h),c.manager.itemStart(t),h.src=t,h}}class Ob extends $p{constructor(t){super(t)}load(t,n,r,l){const c=new Fn,f=new Nb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(h){c.image=h,c.needsUpdate=!0,n!==void 0&&n(c)},r,l),c}}class Dx extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const vd=new ln,fv=new nt,hv=new nt;class zb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jp,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;fv.setFromMatrixPosition(t.matrixWorld),n.position.copy(fv),hv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(hv),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tm extends Ex{constructor(t=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Pb extends zb{constructor(){super(new tm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bb extends Dx{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Pb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ib extends Dx{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fb extends bi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function dv(a,t,n,r){const l=Hb(r);switch(n){case ux:return a*t;case hx:return a*t/l.components*l.byteLength;case Gp:return a*t/l.components*l.byteLength;case dx:return a*t*2/l.components*l.byteLength;case Vp:return a*t*2/l.components*l.byteLength;case fx:return a*t*3/l.components*l.byteLength;case Ni:return a*t*4/l.components*l.byteLength;case kp:return a*t*4/l.components*l.byteLength;case mu:case gu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case _u:case vu:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case $d:case ep:return Math.max(a,16)*Math.max(t,8)/4;case Jd:case tp:return Math.max(a,8)*Math.max(t,8)/2;case np:case ip:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*8;case ap:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((a+3)/4)*Math.floor((t+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((t+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((t+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((t+4)/5)*16;case cp:return Math.floor((a+5)/6)*Math.floor((t+5)/6)*16;case up:return Math.floor((a+7)/8)*Math.floor((t+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((t+5)/6)*16;case hp:return Math.floor((a+7)/8)*Math.floor((t+7)/8)*16;case dp:return Math.floor((a+9)/10)*Math.floor((t+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((t+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((t+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((t+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((t+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((t+11)/12)*16;case xu:case xp:case yp:return Math.ceil(a/4)*Math.ceil(t/4)*16;case px:case Sp:return Math.ceil(a/4)*Math.ceil(t/4)*8;case Mp:case bp:return Math.ceil(a/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hb(a){switch(a){case Yi:case ox:return{byteLength:1,components:1};case ml:case lx:case Al:return{byteLength:2,components:1};case Fp:case Hp:return{byteLength:2,components:4};case Gr:case Ip:case ya:return{byteLength:4,components:1};case cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);function Ux(){let a=null,t=!1,n=null,r=null;function l(c,f){n(c,f),r=a.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=a.requestAnimationFrame(l),t=!0)},stop:function(){a.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){a=c}}}function Gb(a){const t=new WeakMap;function n(h,m){const p=h.array,_=h.usage,g=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=a.SHORT;else if(p instanceof Uint32Array)y=a.UNSIGNED_INT;else if(p instanceof Int32Array)y=a.INT;else if(p instanceof Int8Array)y=a.BYTE;else if(p instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(a.bindBuffer(p,h),g.length===0)a.bufferSubData(p,0,_);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],E=g[y];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,g[x]=E)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const E=g[y];a.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(a.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ME=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,OE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:Vb,alphahash_pars_fragment:kb,alphamap_fragment:Xb,alphamap_pars_fragment:Wb,alphatest_fragment:qb,alphatest_pars_fragment:Yb,aomap_fragment:jb,aomap_pars_fragment:Zb,batching_pars_vertex:Kb,batching_vertex:Qb,begin_vertex:Jb,beginnormal_vertex:$b,bsdfs:tE,iridescence_fragment:eE,bumpmap_pars_fragment:nE,clipping_planes_fragment:iE,clipping_planes_pars_fragment:aE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:sE,color_fragment:oE,color_pars_fragment:lE,color_pars_vertex:cE,color_vertex:uE,common:fE,cube_uv_reflection_fragment:hE,defaultnormal_vertex:dE,displacementmap_pars_vertex:pE,displacementmap_vertex:mE,emissivemap_fragment:gE,emissivemap_pars_fragment:_E,colorspace_fragment:vE,colorspace_pars_fragment:xE,envmap_fragment:yE,envmap_common_pars_fragment:SE,envmap_pars_fragment:ME,envmap_pars_vertex:bE,envmap_physical_pars_fragment:OE,envmap_vertex:EE,fog_vertex:TE,fog_pars_vertex:AE,fog_fragment:wE,fog_pars_fragment:RE,gradientmap_pars_fragment:CE,lightmap_pars_fragment:DE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:LE,lights_pars_begin:NE,lights_toon_fragment:zE,lights_toon_pars_fragment:PE,lights_phong_fragment:BE,lights_phong_pars_fragment:IE,lights_physical_fragment:FE,lights_physical_pars_fragment:HE,lights_fragment_begin:GE,lights_fragment_maps:VE,lights_fragment_end:kE,logdepthbuf_fragment:XE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:qE,logdepthbuf_vertex:YE,map_fragment:jE,map_pars_fragment:ZE,map_particle_fragment:KE,map_particle_pars_fragment:QE,metalnessmap_fragment:JE,metalnessmap_pars_fragment:$E,morphinstance_vertex:t1,morphcolor_vertex:e1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:a1,normal_fragment_begin:r1,normal_fragment_maps:s1,normal_pars_fragment:o1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:h1,clearcoat_pars_fragment:d1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:_1,project_vertex:v1,dithering_fragment:x1,dithering_pars_fragment:y1,roughnessmap_fragment:S1,roughnessmap_pars_fragment:M1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:E1,shadowmap_vertex:T1,shadowmask_pars_fragment:A1,skinbase_vertex:w1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:D1,specularmap_fragment:U1,specularmap_pars_fragment:L1,tonemapping_fragment:N1,tonemapping_pars_fragment:O1,transmission_fragment:z1,transmission_pars_fragment:P1,uv_pars_fragment:B1,uv_pars_vertex:I1,uv_vertex:F1,worldpos_vertex:H1,background_vert:G1,background_frag:V1,backgroundCube_vert:k1,backgroundCube_frag:X1,cube_vert:W1,cube_frag:q1,depth_vert:Y1,depth_frag:j1,distanceRGBA_vert:Z1,distanceRGBA_frag:K1,equirect_vert:Q1,equirect_frag:J1,linedashed_vert:$1,linedashed_frag:tT,meshbasic_vert:eT,meshbasic_frag:nT,meshlambert_vert:iT,meshlambert_frag:aT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:lT,meshphong_vert:cT,meshphong_frag:uT,meshphysical_vert:fT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:pT,points_vert:mT,points_frag:gT,shadow_vert:_T,shadow_frag:vT,sprite_vert:xT,sprite_frag:yT},zt={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ki={basic:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ge(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Xn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Xn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Xn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ge(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Xn([zt.points,zt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Xn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Xn([zt.common,zt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Xn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Xn([zt.sprite,zt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Xn([zt.common,zt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Xn([zt.lights,zt.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ki.physical={uniforms:Xn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const ou={r:0,b:0,g:0},Ur=new ji,ST=new ln;function MT(a,t,n,r,l,c,f){const h=new ge(0);let m=c===!0?0:1,p,_,g=null,x=0,y=null;function b(D){let T=D.isScene===!0?D.background:null;return T&&T.isTexture&&(T=(D.backgroundBlurriness>0?n:t).get(T)),T}function E(D){let T=!1;const H=b(D);H===null?v(h,m):H&&H.isColor&&(v(H,1),T=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||T)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(D,T){const H=b(T);H&&(H.isCubeTexture||H.mapping===Ou)?(_===void 0&&(_=new jt(new De(1,1,1),new Ea({name:"BackgroundCubeMaterial",uniforms:eo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(I,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ur.copy(T.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Ur)),_.material.toneMapped=Oe.getTransfer(H.colorSpace)!==Xe,(g!==H||x!==H.version||y!==a.toneMapping)&&(_.material.needsUpdate=!0,g=H,x=H.version,y=a.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new jt(new kr(2,2),new Ea({name:"BackgroundMaterial",uniforms:eo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,p.material.toneMapped=Oe.getTransfer(H.colorSpace)!==Xe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||y!==a.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,y=a.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,T){D.getRGB(ou,bx(a)),r.buffers.color.setClear(ou.r,ou.g,ou.b,T,f)}function L(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,T=1){h.set(D),m=T,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:E,addToRenderList:M,dispose:L}}function bT(a,t){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function h(R,P,q,$,et){let dt=!1;const B=g($,q,P);c!==B&&(c=B,p(c.object)),dt=y(R,$,q,et),dt&&b(R,$,q,et),et!==null&&t.update(et,a.ELEMENT_ARRAY_BUFFER),(dt||f)&&(f=!1,T(R,P,q,$),et!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function m(){return a.createVertexArray()}function p(R){return a.bindVertexArray(R)}function _(R){return a.deleteVertexArray(R)}function g(R,P,q){const $=q.wireframe===!0;let et=r[R.id];et===void 0&&(et={},r[R.id]=et);let dt=et[P.id];dt===void 0&&(dt={},et[P.id]=dt);let B=dt[$];return B===void 0&&(B=x(m()),dt[$]=B),B}function x(R){const P=[],q=[],$=[];for(let et=0;et<n;et++)P[et]=0,q[et]=0,$[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:q,attributeDivisors:$,object:R,attributes:{},index:null}}function y(R,P,q,$){const et=c.attributes,dt=P.attributes;let B=0;const tt=q.getAttributes();for(const Y in tt)if(tt[Y].location>=0){const pt=et[Y];let N=dt[Y];if(N===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),pt===void 0||pt.attribute!==N||N&&pt.data!==N.data)return!0;B++}return c.attributesNum!==B||c.index!==$}function b(R,P,q,$){const et={},dt=P.attributes;let B=0;const tt=q.getAttributes();for(const Y in tt)if(tt[Y].location>=0){let pt=dt[Y];pt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor));const N={};N.attribute=pt,pt&&pt.data&&(N.data=pt.data),et[Y]=N,B++}c.attributes=et,c.attributesNum=B,c.index=$}function E(){const R=c.newAttributes;for(let P=0,q=R.length;P<q;P++)R[P]=0}function M(R){v(R,0)}function v(R,P){const q=c.newAttributes,$=c.enabledAttributes,et=c.attributeDivisors;q[R]=1,$[R]===0&&(a.enableVertexAttribArray(R),$[R]=1),et[R]!==P&&(a.vertexAttribDivisor(R,P),et[R]=P)}function L(){const R=c.newAttributes,P=c.enabledAttributes;for(let q=0,$=P.length;q<$;q++)P[q]!==R[q]&&(a.disableVertexAttribArray(q),P[q]=0)}function D(R,P,q,$,et,dt,B){B===!0?a.vertexAttribIPointer(R,P,q,et,dt):a.vertexAttribPointer(R,P,q,$,et,dt)}function T(R,P,q,$){E();const et=$.attributes,dt=q.getAttributes(),B=P.defaultAttributeValues;for(const tt in dt){const Y=dt[tt];if(Y.location>=0){let J=et[tt];if(J===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const pt=J.normalized,N=J.itemSize,Z=t.get(J);if(Z===void 0)continue;const at=Z.buffer,lt=Z.type,X=Z.bytesPerElement,ot=lt===a.INT||lt===a.UNSIGNED_INT||J.gpuType===Ip;if(J.isInterleavedBufferAttribute){const mt=J.data,Lt=mt.stride,Ut=J.offset;if(mt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<Y.locationSize;Jt++)v(Y.location+Jt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Jt=0;Jt<Y.locationSize;Jt++)M(Y.location+Jt);a.bindBuffer(a.ARRAY_BUFFER,at);for(let Jt=0;Jt<Y.locationSize;Jt++)D(Y.location+Jt,N/Y.locationSize,lt,pt,Lt*X,(Ut+N/Y.locationSize*Jt)*X,ot)}else{if(J.isInstancedBufferAttribute){for(let mt=0;mt<Y.locationSize;mt++)v(Y.location+mt,J.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<Y.locationSize;mt++)M(Y.location+mt);a.bindBuffer(a.ARRAY_BUFFER,at);for(let mt=0;mt<Y.locationSize;mt++)D(Y.location+mt,N/Y.locationSize,lt,pt,N*X,N/Y.locationSize*mt*X,ot)}}else if(B!==void 0){const pt=B[tt];if(pt!==void 0)switch(pt.length){case 2:a.vertexAttrib2fv(Y.location,pt);break;case 3:a.vertexAttrib3fv(Y.location,pt);break;case 4:a.vertexAttrib4fv(Y.location,pt);break;default:a.vertexAttrib1fv(Y.location,pt)}}}}L()}function H(){z();for(const R in r){const P=r[R];for(const q in P){const $=P[q];for(const et in $)_($[et].object),delete $[et];delete P[q]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const P=r[R.id];for(const q in P){const $=P[q];for(const et in $)_($[et].object),delete $[et];delete P[q]}delete r[R.id]}function O(R){for(const P in r){const q=r[P];if(q[R.id]===void 0)continue;const $=q[R.id];for(const et in $)_($[et].object),delete $[et];delete q[R.id]}}function z(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:z,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:M,disableUnusedAttributes:L}}function ET(a,t,n){let r;function l(p){r=p}function c(p,_){a.drawArrays(r,p,_),n.update(_,r,1)}function f(p,_,g){g!==0&&(a.drawArraysInstanced(r,p,_,g),n.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let b=0;b<g;b++)y+=_[b];n.update(y,r,1)}function m(p,_,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=_[E]*x[E];n.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function TT(a,t,n,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ni&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const z=O===Al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Yi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ya&&!z)}function m(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),v=a.getParameter(a.MAX_VERTEX_ATTRIBS),L=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),D=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,I=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:T,vertexTextures:H,maxSamples:I}}function AT(a){const t=this;let n=null,r=0,l=!1,c=!1;const f=new Or,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||r!==0||l;return l=x,r=g.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){n=_(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,E=g.clipIntersection,M=g.clipShadows,v=a.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const L=c?0:r,D=L*4;let T=v.clippingState||null;m.value=T,T=_(b,x,D,y);for(let H=0;H!==D;++H)T[H]=n[H];v.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,y,b){const E=g!==null?g.length:0;let M=null;if(E!==0){if(M=m.value,b!==!0||M===null){const v=y+E*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,T=y;D!==E;++D,T+=4)f.copy(g[D]).applyMatrix4(L,h),f.normal.toArray(M,T),M[T+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function wT(a){let t=new WeakMap;function n(f,h){return h===jd?f.mapping=Js:h===Zd&&(f.mapping=$s),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===jd||h===Zd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new bb(m.height);return p.fromEquirectangularTexture(a,f),t.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ys=4,pv=[.125,.215,.35,.446,.526,.582],Br=20,xd=new tm,mv=new ge;let yd=null,Sd=0,Md=0,bd=!1;const zr=(1+Math.sqrt(5))/2,Ws=1/zr,gv=[new nt(-zr,Ws,0),new nt(zr,Ws,0),new nt(-Ws,0,zr),new nt(Ws,0,zr),new nt(0,zr,-Ws),new nt(0,zr,Ws),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],RT=new nt;class _v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100,c={}){const{size:f=256,position:h=RT}=c;yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yd,Sd,Md),this._renderer.xr.enabled=bd,t.scissorTest=!1,lu(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Js||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:Al,format:Ni,colorSpace:to,depthBuffer:!1},l=vv(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CT(c)),this._blurMaterial=DT(c,t,n)}return l}_compileMaterial(t){const n=new jt(this._lodPlanes[0],t);this._renderer.compile(n,xd)}_sceneToCubeUV(t,n,r,l,c){const m=new bi(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(mv),g.toneMapping=rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const E=new Vr({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),M=new jt(new De,E);let v=!1;const L=t.background;L?L.isColor&&(E.color.copy(L),t.background=null,v=!0):(E.color.copy(mv),v=!0);for(let D=0;D<6;D++){const T=D%3;T===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[D],c.y,c.z)):T===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[D]));const H=this._cubeSize;lu(l,T*H,D>2?H:0,H,H),g.setRenderTarget(l),v&&g.render(M,m),g.render(t,m)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=y,g.autoClear=x,t.background=L}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===Js||t.mapping===$s;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new jt(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;lu(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,xd)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=gv[(l-c-1)%gv.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,n,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new jt(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Br-1),E=c/b,M=isFinite(c)?1+Math.floor(_*E):Br;M>Br&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Br}`);const v=[];let L=0;for(let O=0;O<Br;++O){const z=O/E,A=Math.exp(-z*z/2);v.push(A),O===0?L+=A:O<M&&(L+=2*A)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=b,x.mipInt.value=D-r;const T=this._sizeLods[l],H=3*T*(l>D-Ys?l-D+Ys:0),I=4*(this._cubeSize-T);lu(n,H,I,3*T,2*T),m.setRenderTarget(n),m.render(g,xd)}}function CT(a){const t=[],n=[],r=[];let l=a;const c=a-Ys+1+pv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>a-Ys?m=pv[f-a+Ys-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,b=6,E=3,M=2,v=1,L=new Float32Array(E*b*y),D=new Float32Array(M*b*y),T=new Float32Array(v*b*y);for(let I=0;I<y;I++){const O=I%3*2/3-1,z=I>2?0:-1,A=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];L.set(A,E*b*I),D.set(x,M*b*I);const R=[I,I,I,I,I,I];T.set(R,v*b*I)}const H=new ti;H.setAttribute("position",new Pi(L,E)),H.setAttribute("uv",new Pi(D,M)),H.setAttribute("faceIndex",new Pi(T,v)),t.push(H),l>Ys&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function vv(a,t,n){const r=new ba(a,t,n);return r.texture.mapping=Ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function lu(a,t,n,r,l){a.viewport.set(t,n,r,l),a.scissor.set(t,n,r,l)}function DT(a,t,n){const r=new Float32Array(Br),l=new nt(0,1,0);return new Ea({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function xv(){return new Ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function yv(){return new Ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:em(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function em(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UT(a){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===jd||m===Zd,_=m===Js||m===$s;if(p||_){let g=t.get(h);const x=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new _v(a)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new _v(a)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function LT(a){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Zs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function NT(a,t,n,r){const l={},c=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=c.get(x);y&&(t.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],a.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let E=0;if(y!==null){const L=y.array;E=y.version;for(let D=0,T=L.length;D<T;D+=3){const H=L[D+0],I=L[D+1],O=L[D+2];x.push(H,I,I,O,O,H)}}else if(b!==void 0){const L=b.array;E=b.version;for(let D=0,T=L.length/3-1;D<T;D+=3){const H=D+0,I=D+1,O=D+2;x.push(H,I,I,O,O,H)}}else return;const M=new(_x(x)?Mx:Sx)(x,1);M.version=E;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function OT(a,t,n){let r;function l(x){r=x}let c,f;function h(x){c=x.type,f=x.bytesPerElement}function m(x,y){a.drawElements(r,y,c,x*f),n.update(y,r,1)}function p(x,y,b){b!==0&&(a.drawElementsInstanced(r,y,c,x*f,b),n.update(y,r,b))}function _(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];n.update(M,r,1)}function g(x,y,b,E){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/f,y[v],E[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,E,0,b);let v=0;for(let L=0;L<b;L++)v+=y[L]*E[L];n.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function zT(a){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(c/3);break;case a.LINES:n.lines+=h*(c/2);break;case a.LINE_STRIP:n.lines+=h*(c-1);break;case a.LINE_LOOP:n.lines+=h*c;break;case a.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function PT(a,t,n){const r=new WeakMap,l=new on;function c(f,h,m){const p=f.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(h);if(x===void 0||x.count!==g){let A=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",A)};x!==void 0&&x.texture.dispose();const y=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],v=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;y===!0&&(D=1),b===!0&&(D=2),E===!0&&(D=3);let T=h.attributes.position.count*D,H=1;T>t.maxTextureSize&&(H=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const I=new Float32Array(T*H*4*g),O=new vx(I,T,H,g);O.type=ya,O.needsUpdate=!0;const z=D*4;for(let R=0;R<g;R++){const P=M[R],q=v[R],$=L[R],et=T*H*4*R;for(let dt=0;dt<P.count;dt++){const B=dt*z;y===!0&&(l.fromBufferAttribute(P,dt),I[et+B+0]=l.x,I[et+B+1]=l.y,I[et+B+2]=l.z,I[et+B+3]=0),b===!0&&(l.fromBufferAttribute(q,dt),I[et+B+4]=l.x,I[et+B+5]=l.y,I[et+B+6]=l.z,I[et+B+7]=0),E===!0&&(l.fromBufferAttribute($,dt),I[et+B+8]=l.x,I[et+B+9]=l.y,I[et+B+10]=l.z,I[et+B+11]=$.itemSize===4?l.w:1)}}x={count:g,texture:O,size:new le(T,H)},r.set(h,x),h.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let y=0;for(let E=0;E<p.length;E++)y+=p[E];const b=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:c}}function BT(a,t,n,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const Lx=new Fn,Sv=new Cx(1,1),Nx=new vx,Ox=new rb,zx=new Tx,Mv=[],bv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),Av=new Float32Array(4);function ao(a,t,n){const r=a[0];if(r<=0||r>0)return a;const l=t*n;let c=Mv[l];if(c===void 0&&(c=new Float32Array(l),Mv[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,a[f].toArray(c,h)}return c}function Mn(a,t){if(a.length!==t.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==t[n])return!1;return!0}function bn(a,t){for(let n=0,r=t.length;n<r;n++)a[n]=t[n]}function Bu(a,t){let n=bv[t];n===void 0&&(n=new Int32Array(t),bv[t]=n);for(let r=0;r!==t;++r)n[r]=a.allocateTextureUnit();return n}function IT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1f(this.addr,t),n[0]=t)}function FT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;a.uniform2fv(this.addr,t),bn(n,t)}}function HT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;a.uniform3fv(this.addr,t),bn(n,t)}}function GT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;a.uniform4fv(this.addr,t),bn(n,t)}}function VT(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;a.uniformMatrix2fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,r))return;Av.set(r),a.uniformMatrix2fv(this.addr,!1,Av),bn(n,r)}}function kT(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;a.uniformMatrix3fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,r))return;Tv.set(r),a.uniformMatrix3fv(this.addr,!1,Tv),bn(n,r)}}function XT(a,t){const n=this.cache,r=t.elements;if(r===void 0){if(Mn(n,t))return;a.uniformMatrix4fv(this.addr,!1,t),bn(n,t)}else{if(Mn(n,r))return;Ev.set(r),a.uniformMatrix4fv(this.addr,!1,Ev),bn(n,r)}}function WT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1i(this.addr,t),n[0]=t)}function qT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;a.uniform2iv(this.addr,t),bn(n,t)}}function YT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;a.uniform3iv(this.addr,t),bn(n,t)}}function jT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;a.uniform4iv(this.addr,t),bn(n,t)}}function ZT(a,t){const n=this.cache;n[0]!==t&&(a.uniform1ui(this.addr,t),n[0]=t)}function KT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;a.uniform2uiv(this.addr,t),bn(n,t)}}function QT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;a.uniform3uiv(this.addr,t),bn(n,t)}}function JT(a,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;a.uniform4uiv(this.addr,t),bn(n,t)}}function $T(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let c;this.type===a.SAMPLER_2D_SHADOW?(Sv.compareFunction=gx,c=Sv):c=Lx,n.setTexture2D(t||c,l)}function tA(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||Ox,l)}function eA(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||zx,l)}function nA(a,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||Nx,l)}function iA(a){switch(a){case 5126:return IT;case 35664:return FT;case 35665:return HT;case 35666:return GT;case 35674:return VT;case 35675:return kT;case 35676:return XT;case 5124:case 35670:return WT;case 35667:case 35671:return qT;case 35668:case 35672:return YT;case 35669:case 35673:return jT;case 5125:return ZT;case 36294:return KT;case 36295:return QT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}function aA(a,t){a.uniform1fv(this.addr,t)}function rA(a,t){const n=ao(t,this.size,2);a.uniform2fv(this.addr,n)}function sA(a,t){const n=ao(t,this.size,3);a.uniform3fv(this.addr,n)}function oA(a,t){const n=ao(t,this.size,4);a.uniform4fv(this.addr,n)}function lA(a,t){const n=ao(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function cA(a,t){const n=ao(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function uA(a,t){const n=ao(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function fA(a,t){a.uniform1iv(this.addr,t)}function hA(a,t){a.uniform2iv(this.addr,t)}function dA(a,t){a.uniform3iv(this.addr,t)}function pA(a,t){a.uniform4iv(this.addr,t)}function mA(a,t){a.uniform1uiv(this.addr,t)}function gA(a,t){a.uniform2uiv(this.addr,t)}function _A(a,t){a.uniform3uiv(this.addr,t)}function vA(a,t){a.uniform4uiv(this.addr,t)}function xA(a,t,n){const r=this.cache,l=t.length,c=Bu(n,l);Mn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||Lx,c[f])}function yA(a,t,n){const r=this.cache,l=t.length,c=Bu(n,l);Mn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||Ox,c[f])}function SA(a,t,n){const r=this.cache,l=t.length,c=Bu(n,l);Mn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||zx,c[f])}function MA(a,t,n){const r=this.cache,l=t.length,c=Bu(n,l);Mn(r,c)||(a.uniform1iv(this.addr,c),bn(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||Nx,c[f])}function bA(a){switch(a){case 5126:return aA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}class EA{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=iA(n.type)}}class TA{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bA(n.type)}}class AA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],r)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function wv(a,t){a.seq.push(t),a.map[t.id]=t}function wA(a,t,n){const r=a.name,l=r.length;for(Ed.lastIndex=0;;){const c=Ed.exec(r),f=Ed.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){wv(n,p===void 0?new EA(h,a,t):new TA(h,a,t));break}else{let g=n.map[h];g===void 0&&(g=new AA(h),wv(n,g)),n=g}}}class yu{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);wA(c,f,this)}}setValue(t,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&r.push(f)}return r}}function Rv(a,t,n){const r=a.createShader(t);return a.shaderSource(r,n),a.compileShader(r),r}const RA=37297;let CA=0;function DA(a,t){const n=a.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const Cv=new de;function UA(a){Oe._getMatrix(Cv,Oe.workingColorSpace,a);const t=`mat3( ${Cv.elements.map(n=>n.toFixed(4))} )`;switch(Oe.getTransfer(a)){case Mu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[t,"LinearTransferOETF"]}}function Dv(a,t,n){const r=a.getShaderParameter(t,a.COMPILE_STATUS),c=(a.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+DA(a.getShaderSource(t),h)}else return c}function LA(a,t){const n=UA(t);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function NA(a,t){let n;switch(t){case NM:n="Linear";break;case OM:n="Reinhard";break;case zM:n="Cineon";break;case PM:n="ACESFilmic";break;case IM:n="AgX";break;case FM:n="Neutral";break;case BM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cu=new nt;function OA(){Oe.getLuminanceCoefficients(cu);const a=cu.x.toFixed(4),t=cu.y.toFixed(4),n=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zA(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function PA(a){const t=[];for(const n in a){const r=a[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function BA(a,t){const n={},r=a.getProgramParameter(t,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=a.getActiveAttrib(t,l),f=c.name;let h=1;c.type===a.FLOAT_MAT2&&(h=2),c.type===a.FLOAT_MAT3&&(h=3),c.type===a.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:a.getAttribLocation(t,f),locationSize:h}}return n}function ul(a){return a!==""}function Uv(a,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lv(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ap(a){return a.replace(IA,HA)}const FA=new Map;function HA(a,t){let n=pe[t];if(n===void 0){const r=FA.get(t);if(r!==void 0)n=pe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ap(n)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(a){return a.replace(GA,VA)}function VA(a,t,n,r){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ov(a){let t=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kA(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===rx?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===hM?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function XA(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Js:case $s:t="ENVMAP_TYPE_CUBE";break;case Ou:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WA(a){let t="ENVMAP_MODE_REFLECTION";return a.envMap&&a.envMapMode===$s&&(t="ENVMAP_MODE_REFRACTION"),t}function qA(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Bp:t="ENVMAP_BLENDING_MULTIPLY";break;case UM:t="ENVMAP_BLENDING_MIX";break;case LM:t="ENVMAP_BLENDING_ADD";break}return t}function YA(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function jA(a,t,n,r){const l=a.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=kA(n),p=XA(n),_=WA(n),g=qA(n),x=YA(n),y=zA(n),b=PA(c),E=l.createProgram();let M,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(ul).join(`
`),v.length>0&&(v+=`
`)):(M=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),v=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?pe.tonemapping_pars_fragment:"",n.toneMapping!==rr?NA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,LA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),f=Ap(f),f=Uv(f,n),f=Lv(f,n),h=Ap(h),h=Uv(h,n),h=Lv(h,n),f=Nv(f),h=Nv(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",n.glslVersion===W_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+M+f,T=L+v+h,H=Rv(l,l.VERTEX_SHADER,D),I=Rv(l,l.FRAGMENT_SHADER,T);l.attachShader(E,H),l.attachShader(E,I),n.index0AttributeName!==void 0?l.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function O(P){if(a.debug.checkShaderErrors){const q=l.getProgramInfoLog(E)||"",$=l.getShaderInfoLog(H)||"",et=l.getShaderInfoLog(I)||"",dt=q.trim(),B=$.trim(),tt=et.trim();let Y=!0,J=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,E,H,I);else{const pt=Dv(l,H,"vertex"),N=Dv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+dt+`
`+pt+`
`+N)}else dt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",dt):(B===""||tt==="")&&(J=!1);J&&(P.diagnostics={runnable:Y,programLog:dt,vertexShader:{log:B,prefix:M},fragmentShader:{log:tt,prefix:v}})}l.deleteShader(H),l.deleteShader(I),z=new yu(l,E),A=BA(l,E)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(E,RA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=I,this}let ZA=0;class KA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new QA(t),n.set(t,r)),r}}class QA{constructor(t){this.id=ZA++,this.code=t,this.usedTimes=0}}function JA(a,t,n,r,l,c,f){const h=new xx,m=new KA,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,R,P,q,$){const et=q.fog,dt=$.geometry,B=A.isMeshStandardMaterial?q.environment:null,tt=(A.isMeshStandardMaterial?n:t).get(A.envMap||B),Y=tt&&tt.mapping===Ou?tt.image.height:null,J=b[A.type];A.precision!==null&&(y=l.getMaxPrecision(A.precision),y!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const pt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,N=pt!==void 0?pt.length:0;let Z=0;dt.morphAttributes.position!==void 0&&(Z=1),dt.morphAttributes.normal!==void 0&&(Z=2),dt.morphAttributes.color!==void 0&&(Z=3);let at,lt,X,ot;if(J){const Re=ki[J];at=Re.vertexShader,lt=Re.fragmentShader}else at=A.vertexShader,lt=A.fragmentShader,m.update(A),X=m.getVertexShaderID(A),ot=m.getFragmentShaderID(A);const mt=a.getRenderTarget(),Lt=a.state.buffers.depth.getReversed(),Ut=$.isInstancedMesh===!0,Jt=$.isBatchedMesh===!0,Ze=!!A.map,_e=!!A.matcap,V=!!tt,we=!!A.aoMap,ne=!!A.lightMap,Ee=!!A.bumpMap,$t=!!A.normalMap,qe=!!A.displacementMap,Ht=!!A.emissiveMap,ce=!!A.metalnessMap,nn=!!A.roughnessMap,en=A.anisotropy>0,F=A.clearcoat>0,w=A.dispersion>0,st=A.iridescence>0,vt=A.sheen>0,bt=A.transmission>0,gt=en&&!!A.anisotropyMap,Kt=F&&!!A.clearcoatMap,Rt=F&&!!A.clearcoatNormalMap,qt=F&&!!A.clearcoatRoughnessMap,Yt=st&&!!A.iridescenceMap,Tt=st&&!!A.iridescenceThicknessMap,Ct=vt&&!!A.sheenColorMap,Qt=vt&&!!A.sheenRoughnessMap,Bt=!!A.specularMap,Nt=!!A.specularColorMap,ue=!!A.specularIntensityMap,W=bt&&!!A.transmissionMap,At=bt&&!!A.thicknessMap,Dt=!!A.gradientMap,Ft=!!A.alphaMap,Et=A.alphaTest>0,St=!!A.alphaHash,Gt=!!A.extensions;let se=rr;A.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(se=a.toneMapping);const Ie={shaderID:J,shaderType:A.type,shaderName:A.name,vertexShader:at,fragmentShader:lt,defines:A.defines,customVertexShaderID:X,customFragmentShaderID:ot,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Jt,batchingColor:Jt&&$._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&$.instanceColor!==null,instancingMorph:Ut&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:mt===null?a.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:to,alphaToCoverage:!!A.alphaToCoverage,map:Ze,matcap:_e,envMap:V,envMapMode:V&&tt.mapping,envMapCubeUVHeight:Y,aoMap:we,lightMap:ne,bumpMap:Ee,normalMap:$t,displacementMap:x&&qe,emissiveMap:Ht,normalMapObjectSpace:$t&&A.normalMapType===kM,normalMapTangentSpace:$t&&A.normalMapType===mx,metalnessMap:ce,roughnessMap:nn,anisotropy:en,anisotropyMap:gt,clearcoat:F,clearcoatMap:Kt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:qt,dispersion:w,iridescence:st,iridescenceMap:Yt,iridescenceThicknessMap:Tt,sheen:vt,sheenColorMap:Ct,sheenRoughnessMap:Qt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:ue,transmission:bt,transmissionMap:W,thicknessMap:At,gradientMap:Dt,opaque:A.transparent===!1&&A.blending===js&&A.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Et,alphaHash:St,combine:A.combine,mapUv:Ze&&E(A.map.channel),aoMapUv:we&&E(A.aoMap.channel),lightMapUv:ne&&E(A.lightMap.channel),bumpMapUv:Ee&&E(A.bumpMap.channel),normalMapUv:$t&&E(A.normalMap.channel),displacementMapUv:qe&&E(A.displacementMap.channel),emissiveMapUv:Ht&&E(A.emissiveMap.channel),metalnessMapUv:ce&&E(A.metalnessMap.channel),roughnessMapUv:nn&&E(A.roughnessMap.channel),anisotropyMapUv:gt&&E(A.anisotropyMap.channel),clearcoatMapUv:Kt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&E(A.sheenRoughnessMap.channel),specularMapUv:Bt&&E(A.specularMap.channel),specularColorMapUv:Nt&&E(A.specularColorMap.channel),specularIntensityMapUv:ue&&E(A.specularIntensityMap.channel),transmissionMapUv:W&&E(A.transmissionMap.channel),thicknessMapUv:At&&E(A.thicknessMap.channel),alphaMapUv:Ft&&E(A.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&($t||en),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!dt.attributes.uv&&(Ze||Ft),fog:!!et,useFog:A.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Lt,skinning:$.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:se,decodeVideoTexture:Ze&&A.map.isVideoTexture===!0&&Oe.getTransfer(A.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ht&&A.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(A.emissiveMap.colorSpace)===Xe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Li,flipSided:A.side===$n,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Gt&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&A.extensions.multiDraw===!0||Jt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function v(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)R.push(P),R.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(L(R,A),D(R,A),R.push(a.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function L(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function D(A,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),A.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),A.push(h.mask)}function T(A){const R=b[A.type];let P;if(R){const q=ki[R];P=xb.clone(q.uniforms)}else P=A.uniforms;return P}function H(A,R){let P;for(let q=0,$=_.length;q<$;q++){const et=_[q];if(et.cacheKey===R){P=et,++P.usedTimes;break}}return P===void 0&&(P=new jA(a,R,A,c),_.push(P)),P}function I(A){if(--A.usedTimes===0){const R=_.indexOf(A);_[R]=_[_.length-1],_.pop(),A.destroy()}}function O(A){m.remove(A)}function z(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:T,acquireProgram:H,releaseProgram:I,releaseShaderCache:O,programs:_,dispose:z}}function $A(){let a=new WeakMap;function t(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function c(){a=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:c}}function t2(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function zv(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function Pv(){const a=[];let t=0;const n=[],r=[],l=[];function c(){t=0,n.length=0,r.length=0,l.length=0}function f(g,x,y,b,E,M){let v=a[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:E,group:M},a[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=g.renderOrder,v.z=E,v.group=M),t++,v}function h(g,x,y,b,E,M){const v=f(g,x,y,b,E,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):n.push(v)}function m(g,x,y,b,E,M){const v=f(g,x,y,b,E,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):n.unshift(v)}function p(g,x){n.length>1&&n.sort(g||t2),r.length>1&&r.sort(x||zv),l.length>1&&l.sort(x||zv)}function _(){for(let g=t,x=a.length;g<x;g++){const y=a[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:_,sort:p}}function e2(){let a=new WeakMap;function t(r,l){const c=a.get(r);let f;return c===void 0?(f=new Pv,a.set(r,[f])):l>=c.length?(f=new Pv,c.push(f)):f=c[l],f}function n(){a=new WeakMap}return{get:t,dispose:n}}function n2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new nt,color:new ge};break;case"SpotLight":n={position:new nt,direction:new nt,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new nt,color:new ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new nt,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":n={color:new ge,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return a[t.id]=n,n}}}function i2(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=n,n}}}let a2=0;function r2(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function s2(a){const t=new n2,n=i2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new nt);const l=new nt,c=new ln,f=new ln;function h(p){let _=0,g=0,x=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let y=0,b=0,E=0,M=0,v=0,L=0,D=0,T=0,H=0,I=0,O=0;p.sort(r2);for(let A=0,R=p.length;A<R;A++){const P=p[A],q=P.color,$=P.intensity,et=P.distance,dt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)_+=q.r*$,g+=q.g*$,x+=q.b*$;else if(P.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(P.sh.coefficients[B],$);O++}else if(P.isDirectionalLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,Y=n.get(P);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=P.shadow.matrix,L++}r.directional[y]=B,y++}else if(P.isSpotLight){const B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(q).multiplyScalar($),B.distance=et,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,r.spot[E]=B;const tt=P.shadow;if(P.map&&(r.spotLightMap[H]=P.map,H++,tt.updateMatrices(P),P.castShadow&&I++),r.spotLightMatrix[E]=tt.matrix,P.castShadow){const Y=n.get(P);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,r.spotShadow[E]=Y,r.spotShadowMap[E]=dt,T++}E++}else if(P.isRectAreaLight){const B=t.get(P);B.color.copy(q).multiplyScalar($),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),r.rectArea[M]=B,M++}else if(P.isPointLight){const B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const tt=P.shadow,Y=n.get(P);Y.shadowIntensity=tt.intensity,Y.shadowBias=tt.bias,Y.shadowNormalBias=tt.normalBias,Y.shadowRadius=tt.radius,Y.shadowMapSize=tt.mapSize,Y.shadowCameraNear=tt.camera.near,Y.shadowCameraFar=tt.camera.far,r.pointShadow[b]=Y,r.pointShadowMap[b]=dt,r.pointShadowMatrix[b]=P.shadow.matrix,D++}r.point[b]=B,b++}else if(P.isHemisphereLight){const B=t.get(P);B.skyColor.copy(P.color).multiplyScalar($),B.groundColor.copy(P.groundColor).multiplyScalar($),r.hemi[v]=B,v++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const z=r.hash;(z.directionalLength!==y||z.pointLength!==b||z.spotLength!==E||z.rectAreaLength!==M||z.hemiLength!==v||z.numDirectionalShadows!==L||z.numPointShadows!==D||z.numSpotShadows!==T||z.numSpotMaps!==H||z.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=E,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=T+H-I,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,z.directionalLength=y,z.pointLength=b,z.spotLength=E,z.rectAreaLength=M,z.hemiLength=v,z.numDirectionalShadows=L,z.numPointShadows=D,z.numSpotShadows=T,z.numSpotMaps=H,z.numLightProbes=O,r.version=a2++)}function m(p,_){let g=0,x=0,y=0,b=0,E=0;const M=_.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const D=p[v];if(D.isDirectionalLight){const T=r.directional[g];T.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),g++}else if(D.isSpotLight){const T=r.spot[y];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const T=r.rectArea[b];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(M),f.identity(),c.copy(D.matrixWorld),c.premultiply(M),f.extractRotation(c),T.halfWidth.set(D.width*.5,0,0),T.halfHeight.set(0,D.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),b++}else if(D.isPointLight){const T=r.point[x];T.position.setFromMatrixPosition(D.matrixWorld),T.position.applyMatrix4(M),x++}else if(D.isHemisphereLight){const T=r.hemi[E];T.direction.setFromMatrixPosition(D.matrixWorld),T.direction.transformDirection(M),E++}}}return{setup:h,setupView:m,state:r}}function Bv(a){const t=new s2(a),n=[],r=[];function l(_){p.camera=_,n.length=0,r.length=0}function c(_){n.push(_)}function f(_){r.push(_)}function h(){t.setup(n)}function m(_){t.setupView(n,_)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function o2(a){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new Bv(a),t.set(l,[h])):c>=f.length?(h=new Bv(a),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u2(a,t,n){let r=new jp;const l=new le,c=new le,f=new on,h=new Cb({depthPacking:VM}),m=new Db,p={},_=n.maxTextureSize,g={[or]:$n,[$n]:or,[Li]:Li},x=new Ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:l2,fragmentShader:c2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new ti;b.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new jt(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let v=this.type;this.render=function(I,O,z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;const A=a.getRenderTarget(),R=a.getActiveCubeFace(),P=a.getActiveMipmapLevel(),q=a.state;q.setBlending(ar),q.buffers.depth.getReversed()?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const $=v!==xa&&this.type===xa,et=v===xa&&this.type!==xa;for(let dt=0,B=I.length;dt<B;dt++){const tt=I[dt],Y=tt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const J=Y.getFrameExtents();if(l.multiply(J),c.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/J.x),l.x=c.x*J.x,Y.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/J.y),l.y=c.y*J.y,Y.mapSize.y=c.y)),Y.map===null||$===!0||et===!0){const N=this.type!==xa?{minFilter:zi,magFilter:zi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ba(l.x,l.y,N),Y.map.texture.name=tt.name+".shadowMap",Y.camera.updateProjectionMatrix()}a.setRenderTarget(Y.map),a.clear();const pt=Y.getViewportCount();for(let N=0;N<pt;N++){const Z=Y.getViewport(N);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),q.viewport(f),Y.updateMatrices(tt,N),r=Y.getFrustum(),T(O,z,Y.camera,tt,this.type)}Y.isPointLightShadow!==!0&&this.type===xa&&L(Y,z),Y.needsUpdate=!1}v=this.type,M.needsUpdate=!1,a.setRenderTarget(A,R,P)};function L(I,O){const z=t.update(E);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ba(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,a.setRenderTarget(I.mapPass),a.clear(),a.renderBufferDirect(O,null,z,x,E,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,a.setRenderTarget(I.map),a.clear(),a.renderBufferDirect(O,null,z,y,E,null)}function D(I,O,z,A){let R=null;const P=z.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)R=P;else if(R=z.isPointLight===!0?m:h,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const q=R.uuid,$=O.uuid;let et=p[q];et===void 0&&(et={},p[q]=et);let dt=et[$];dt===void 0&&(dt=R.clone(),et[$]=dt,O.addEventListener("dispose",H)),R=dt}if(R.visible=O.visible,R.wireframe=O.wireframe,A===xa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:g[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const q=a.properties.get(R);q.light=z}return R}function T(I,O,z,A,R){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===xa)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,I.matrixWorld);const $=t.update(I),et=I.material;if(Array.isArray(et)){const dt=$.groups;for(let B=0,tt=dt.length;B<tt;B++){const Y=dt[B],J=et[Y.materialIndex];if(J&&J.visible){const pt=D(I,J,A,R);I.onBeforeShadow(a,I,O,z,$,pt,Y),a.renderBufferDirect(z,null,$,pt,I,Y),I.onAfterShadow(a,I,O,z,$,pt,Y)}}}else if(et.visible){const dt=D(I,et,A,R);I.onBeforeShadow(a,I,O,z,$,dt,null),a.renderBufferDirect(z,null,$,dt,I,null),I.onAfterShadow(a,I,O,z,$,dt,null)}}const q=I.children;for(let $=0,et=q.length;$<et;$++)T(q[$],O,z,A,R)}function H(I){I.target.removeEventListener("dispose",H);for(const z in p){const A=p[z],R=I.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const f2={[Gd]:Vd,[kd]:qd,[Xd]:Yd,[Qs]:Wd,[Vd]:Gd,[qd]:kd,[Yd]:Xd,[Wd]:Qs};function h2(a,t){function n(){let W=!1;const At=new on;let Dt=null;const Ft=new on(0,0,0,0);return{setMask:function(Et){Dt!==Et&&!W&&(a.colorMask(Et,Et,Et,Et),Dt=Et)},setLocked:function(Et){W=Et},setClear:function(Et,St,Gt,se,Ie){Ie===!0&&(Et*=se,St*=se,Gt*=se),At.set(Et,St,Gt,se),Ft.equals(At)===!1&&(a.clearColor(Et,St,Gt,se),Ft.copy(At))},reset:function(){W=!1,Dt=null,Ft.set(-1,0,0,0)}}}function r(){let W=!1,At=!1,Dt=null,Ft=null,Et=null;return{setReversed:function(St){if(At!==St){const Gt=t.get("EXT_clip_control");St?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),At=St;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return At},setTest:function(St){St?mt(a.DEPTH_TEST):Lt(a.DEPTH_TEST)},setMask:function(St){Dt!==St&&!W&&(a.depthMask(St),Dt=St)},setFunc:function(St){if(At&&(St=f2[St]),Ft!==St){switch(St){case Gd:a.depthFunc(a.NEVER);break;case Vd:a.depthFunc(a.ALWAYS);break;case kd:a.depthFunc(a.LESS);break;case Qs:a.depthFunc(a.LEQUAL);break;case Xd:a.depthFunc(a.EQUAL);break;case Wd:a.depthFunc(a.GEQUAL);break;case qd:a.depthFunc(a.GREATER);break;case Yd:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ft=St}},setLocked:function(St){W=St},setClear:function(St){Et!==St&&(At&&(St=1-St),a.clearDepth(St),Et=St)},reset:function(){W=!1,Dt=null,Ft=null,Et=null,At=!1}}}function l(){let W=!1,At=null,Dt=null,Ft=null,Et=null,St=null,Gt=null,se=null,Ie=null;return{setTest:function(Re){W||(Re?mt(a.STENCIL_TEST):Lt(a.STENCIL_TEST))},setMask:function(Re){At!==Re&&!W&&(a.stencilMask(Re),At=Re)},setFunc:function(Re,Hn,fi){(Dt!==Re||Ft!==Hn||Et!==fi)&&(a.stencilFunc(Re,Hn,fi),Dt=Re,Ft=Hn,Et=fi)},setOp:function(Re,Hn,fi){(St!==Re||Gt!==Hn||se!==fi)&&(a.stencilOp(Re,Hn,fi),St=Re,Gt=Hn,se=fi)},setLocked:function(Re){W=Re},setClear:function(Re){Ie!==Re&&(a.clearStencil(Re),Ie=Re)},reset:function(){W=!1,At=null,Dt=null,Ft=null,Et=null,St=null,Gt=null,se=null,Ie=null}}}const c=new n,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,y=[],b=null,E=!1,M=null,v=null,L=null,D=null,T=null,H=null,I=null,O=new ge(0,0,0),z=0,A=!1,R=null,P=null,q=null,$=null,et=null;const dt=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,tt=0;const Y=a.getParameter(a.VERSION);Y.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=tt>=1):Y.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=tt>=2);let J=null,pt={};const N=a.getParameter(a.SCISSOR_BOX),Z=a.getParameter(a.VIEWPORT),at=new on().fromArray(N),lt=new on().fromArray(Z);function X(W,At,Dt,Ft){const Et=new Uint8Array(4),St=a.createTexture();a.bindTexture(W,St),a.texParameteri(W,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(W,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Gt=0;Gt<Dt;Gt++)W===a.TEXTURE_3D||W===a.TEXTURE_2D_ARRAY?a.texImage3D(At,0,a.RGBA,1,1,Ft,0,a.RGBA,a.UNSIGNED_BYTE,Et):a.texImage2D(At+Gt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Et);return St}const ot={};ot[a.TEXTURE_2D]=X(a.TEXTURE_2D,a.TEXTURE_2D,1),ot[a.TEXTURE_CUBE_MAP]=X(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[a.TEXTURE_2D_ARRAY]=X(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ot[a.TEXTURE_3D]=X(a.TEXTURE_3D,a.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),mt(a.DEPTH_TEST),f.setFunc(Qs),Ee(!1),$t(G_),mt(a.CULL_FACE),we(ar);function mt(W){_[W]!==!0&&(a.enable(W),_[W]=!0)}function Lt(W){_[W]!==!1&&(a.disable(W),_[W]=!1)}function Ut(W,At){return g[W]!==At?(a.bindFramebuffer(W,At),g[W]=At,W===a.DRAW_FRAMEBUFFER&&(g[a.FRAMEBUFFER]=At),W===a.FRAMEBUFFER&&(g[a.DRAW_FRAMEBUFFER]=At),!0):!1}function Jt(W,At){let Dt=y,Ft=!1;if(W){Dt=x.get(At),Dt===void 0&&(Dt=[],x.set(At,Dt));const Et=W.textures;if(Dt.length!==Et.length||Dt[0]!==a.COLOR_ATTACHMENT0){for(let St=0,Gt=Et.length;St<Gt;St++)Dt[St]=a.COLOR_ATTACHMENT0+St;Dt.length=Et.length,Ft=!0}}else Dt[0]!==a.BACK&&(Dt[0]=a.BACK,Ft=!0);Ft&&a.drawBuffers(Dt)}function Ze(W){return b!==W?(a.useProgram(W),b=W,!0):!1}const _e={[Pr]:a.FUNC_ADD,[pM]:a.FUNC_SUBTRACT,[mM]:a.FUNC_REVERSE_SUBTRACT};_e[gM]=a.MIN,_e[_M]=a.MAX;const V={[vM]:a.ZERO,[xM]:a.ONE,[yM]:a.SRC_COLOR,[Fd]:a.SRC_ALPHA,[AM]:a.SRC_ALPHA_SATURATE,[EM]:a.DST_COLOR,[MM]:a.DST_ALPHA,[SM]:a.ONE_MINUS_SRC_COLOR,[Hd]:a.ONE_MINUS_SRC_ALPHA,[TM]:a.ONE_MINUS_DST_COLOR,[bM]:a.ONE_MINUS_DST_ALPHA,[wM]:a.CONSTANT_COLOR,[RM]:a.ONE_MINUS_CONSTANT_COLOR,[CM]:a.CONSTANT_ALPHA,[DM]:a.ONE_MINUS_CONSTANT_ALPHA};function we(W,At,Dt,Ft,Et,St,Gt,se,Ie,Re){if(W===ar){E===!0&&(Lt(a.BLEND),E=!1);return}if(E===!1&&(mt(a.BLEND),E=!0),W!==dM){if(W!==M||Re!==A){if((v!==Pr||T!==Pr)&&(a.blendEquation(a.FUNC_ADD),v=Pr,T=Pr),Re)switch(W){case js:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Id:a.blendFunc(a.ONE,a.ONE);break;case V_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case k_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case js:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Id:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case V_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,D=null,H=null,I=null,O.set(0,0,0),z=0,M=W,A=Re}return}Et=Et||At,St=St||Dt,Gt=Gt||Ft,(At!==v||Et!==T)&&(a.blendEquationSeparate(_e[At],_e[Et]),v=At,T=Et),(Dt!==L||Ft!==D||St!==H||Gt!==I)&&(a.blendFuncSeparate(V[Dt],V[Ft],V[St],V[Gt]),L=Dt,D=Ft,H=St,I=Gt),(se.equals(O)===!1||Ie!==z)&&(a.blendColor(se.r,se.g,se.b,Ie),O.copy(se),z=Ie),M=W,A=!1}function ne(W,At){W.side===Li?Lt(a.CULL_FACE):mt(a.CULL_FACE);let Dt=W.side===$n;At&&(Dt=!Dt),Ee(Dt),W.blending===js&&W.transparent===!1?we(ar):we(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ft=W.stencilWrite;h.setTest(Ft),Ft&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ht(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?mt(a.SAMPLE_ALPHA_TO_COVERAGE):Lt(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(W){R!==W&&(W?a.frontFace(a.CW):a.frontFace(a.CCW),R=W)}function $t(W){W!==uM?(mt(a.CULL_FACE),W!==P&&(W===G_?a.cullFace(a.BACK):W===fM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Lt(a.CULL_FACE),P=W}function qe(W){W!==q&&(B&&a.lineWidth(W),q=W)}function Ht(W,At,Dt){W?(mt(a.POLYGON_OFFSET_FILL),($!==At||et!==Dt)&&(a.polygonOffset(At,Dt),$=At,et=Dt)):Lt(a.POLYGON_OFFSET_FILL)}function ce(W){W?mt(a.SCISSOR_TEST):Lt(a.SCISSOR_TEST)}function nn(W){W===void 0&&(W=a.TEXTURE0+dt-1),J!==W&&(a.activeTexture(W),J=W)}function en(W,At,Dt){Dt===void 0&&(J===null?Dt=a.TEXTURE0+dt-1:Dt=J);let Ft=pt[Dt];Ft===void 0&&(Ft={type:void 0,texture:void 0},pt[Dt]=Ft),(Ft.type!==W||Ft.texture!==At)&&(J!==Dt&&(a.activeTexture(Dt),J=Dt),a.bindTexture(W,At||ot[W]),Ft.type=W,Ft.texture=At)}function F(){const W=pt[J];W!==void 0&&W.type!==void 0&&(a.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{a.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function st(){try{a.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{a.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{a.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{a.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{a.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{a.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{a.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(){try{a.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{a.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ct(W){at.equals(W)===!1&&(a.scissor(W.x,W.y,W.z,W.w),at.copy(W))}function Qt(W){lt.equals(W)===!1&&(a.viewport(W.x,W.y,W.z,W.w),lt.copy(W))}function Bt(W,At){let Dt=p.get(At);Dt===void 0&&(Dt=new WeakMap,p.set(At,Dt));let Ft=Dt.get(W);Ft===void 0&&(Ft=a.getUniformBlockIndex(At,W.name),Dt.set(W,Ft))}function Nt(W,At){const Ft=p.get(At).get(W);m.get(At)!==Ft&&(a.uniformBlockBinding(At,Ft,W.__bindingPointIndex),m.set(At,Ft))}function ue(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),_={},J=null,pt={},g={},x=new WeakMap,y=[],b=null,E=!1,M=null,v=null,L=null,D=null,T=null,H=null,I=null,O=new ge(0,0,0),z=0,A=!1,R=null,P=null,q=null,$=null,et=null,at.set(0,0,a.canvas.width,a.canvas.height),lt.set(0,0,a.canvas.width,a.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:mt,disable:Lt,bindFramebuffer:Ut,drawBuffers:Jt,useProgram:Ze,setBlending:we,setMaterial:ne,setFlipSided:Ee,setCullFace:$t,setLineWidth:qe,setPolygonOffset:Ht,setScissorTest:ce,activeTexture:nn,bindTexture:en,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:st,texImage2D:Yt,texImage3D:Tt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Rt,texStorage3D:qt,texSubImage2D:vt,texSubImage3D:bt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Kt,scissor:Ct,viewport:Qt,reset:ue}}function d2(a,t,n,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new le,_=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,w){return y?new OffscreenCanvas(F,w):xl("canvas")}function E(F,w,st){let vt=1;const bt=en(F);if((bt.width>st||bt.height>st)&&(vt=st/Math.max(bt.width,bt.height)),vt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const gt=Math.floor(vt*bt.width),Kt=Math.floor(vt*bt.height);g===void 0&&(g=b(gt,Kt));const Rt=w?b(gt,Kt):g;return Rt.width=gt,Rt.height=Kt,Rt.getContext("2d").drawImage(F,0,0,gt,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+gt+"x"+Kt+")."),Rt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),F;return F}function M(F){return F.generateMipmaps}function v(F){a.generateMipmap(F)}function L(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function D(F,w,st,vt,bt=!1){if(F!==null){if(a[F]!==void 0)return a[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let gt=w;if(w===a.RED&&(st===a.FLOAT&&(gt=a.R32F),st===a.HALF_FLOAT&&(gt=a.R16F),st===a.UNSIGNED_BYTE&&(gt=a.R8)),w===a.RED_INTEGER&&(st===a.UNSIGNED_BYTE&&(gt=a.R8UI),st===a.UNSIGNED_SHORT&&(gt=a.R16UI),st===a.UNSIGNED_INT&&(gt=a.R32UI),st===a.BYTE&&(gt=a.R8I),st===a.SHORT&&(gt=a.R16I),st===a.INT&&(gt=a.R32I)),w===a.RG&&(st===a.FLOAT&&(gt=a.RG32F),st===a.HALF_FLOAT&&(gt=a.RG16F),st===a.UNSIGNED_BYTE&&(gt=a.RG8)),w===a.RG_INTEGER&&(st===a.UNSIGNED_BYTE&&(gt=a.RG8UI),st===a.UNSIGNED_SHORT&&(gt=a.RG16UI),st===a.UNSIGNED_INT&&(gt=a.RG32UI),st===a.BYTE&&(gt=a.RG8I),st===a.SHORT&&(gt=a.RG16I),st===a.INT&&(gt=a.RG32I)),w===a.RGB_INTEGER&&(st===a.UNSIGNED_BYTE&&(gt=a.RGB8UI),st===a.UNSIGNED_SHORT&&(gt=a.RGB16UI),st===a.UNSIGNED_INT&&(gt=a.RGB32UI),st===a.BYTE&&(gt=a.RGB8I),st===a.SHORT&&(gt=a.RGB16I),st===a.INT&&(gt=a.RGB32I)),w===a.RGBA_INTEGER&&(st===a.UNSIGNED_BYTE&&(gt=a.RGBA8UI),st===a.UNSIGNED_SHORT&&(gt=a.RGBA16UI),st===a.UNSIGNED_INT&&(gt=a.RGBA32UI),st===a.BYTE&&(gt=a.RGBA8I),st===a.SHORT&&(gt=a.RGBA16I),st===a.INT&&(gt=a.RGBA32I)),w===a.RGB&&st===a.UNSIGNED_INT_5_9_9_9_REV&&(gt=a.RGB9_E5),w===a.RGBA){const Kt=bt?Mu:Oe.getTransfer(vt);st===a.FLOAT&&(gt=a.RGBA32F),st===a.HALF_FLOAT&&(gt=a.RGBA16F),st===a.UNSIGNED_BYTE&&(gt=Kt===Xe?a.SRGB8_ALPHA8:a.RGBA8),st===a.UNSIGNED_SHORT_4_4_4_4&&(gt=a.RGBA4),st===a.UNSIGNED_SHORT_5_5_5_1&&(gt=a.RGB5_A1)}return(gt===a.R16F||gt===a.R32F||gt===a.RG16F||gt===a.RG32F||gt===a.RGBA16F||gt===a.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function T(F,w){let st;return F?w===null||w===Gr||w===gl?st=a.DEPTH24_STENCIL8:w===ya?st=a.DEPTH32F_STENCIL8:w===ml&&(st=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gr||w===gl?st=a.DEPTH_COMPONENT24:w===ya?st=a.DEPTH_COMPONENT32F:w===ml&&(st=a.DEPTH_COMPONENT16),st}function H(F,w){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==zi&&F.minFilter!==Wi?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function I(F){const w=F.target;w.removeEventListener("dispose",I),z(w),w.isVideoTexture&&_.delete(w)}function O(F){const w=F.target;w.removeEventListener("dispose",O),R(w)}function z(F){const w=r.get(F);if(w.__webglInit===void 0)return;const st=F.source,vt=x.get(st);if(vt){const bt=vt[w.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&A(F),Object.keys(vt).length===0&&x.delete(st)}r.remove(F)}function A(F){const w=r.get(F);a.deleteTexture(w.__webglTexture);const st=F.source,vt=x.get(st);delete vt[w.__cacheKey],f.memory.textures--}function R(F){const w=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(w.__webglFramebuffer[vt]))for(let bt=0;bt<w.__webglFramebuffer[vt].length;bt++)a.deleteFramebuffer(w.__webglFramebuffer[vt][bt]);else a.deleteFramebuffer(w.__webglFramebuffer[vt]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[vt])}else{if(Array.isArray(w.__webglFramebuffer))for(let vt=0;vt<w.__webglFramebuffer.length;vt++)a.deleteFramebuffer(w.__webglFramebuffer[vt]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let vt=0;vt<w.__webglColorRenderbuffer.length;vt++)w.__webglColorRenderbuffer[vt]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[vt]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const st=F.textures;for(let vt=0,bt=st.length;vt<bt;vt++){const gt=r.get(st[vt]);gt.__webglTexture&&(a.deleteTexture(gt.__webglTexture),f.memory.textures--),r.remove(st[vt])}r.remove(F)}let P=0;function q(){P=0}function $(){const F=P;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),P+=1,F}function et(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function dt(F,w){const st=r.get(F);if(F.isVideoTexture&&ce(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&st.__version!==F.version){const vt=F.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(st,F,w);return}}else F.isExternalTexture&&(st.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,st.__webglTexture,a.TEXTURE0+w)}function B(F,w){const st=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){ot(st,F,w);return}n.bindTexture(a.TEXTURE_2D_ARRAY,st.__webglTexture,a.TEXTURE0+w)}function tt(F,w){const st=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){ot(st,F,w);return}n.bindTexture(a.TEXTURE_3D,st.__webglTexture,a.TEXTURE0+w)}function Y(F,w){const st=r.get(F);if(F.version>0&&st.__version!==F.version){mt(st,F,w);return}n.bindTexture(a.TEXTURE_CUBE_MAP,st.__webglTexture,a.TEXTURE0+w)}const J={[Kd]:a.REPEAT,[Fr]:a.CLAMP_TO_EDGE,[Qd]:a.MIRRORED_REPEAT},pt={[zi]:a.NEAREST,[HM]:a.NEAREST_MIPMAP_NEAREST,[Hc]:a.NEAREST_MIPMAP_LINEAR,[Wi]:a.LINEAR,[Wh]:a.LINEAR_MIPMAP_NEAREST,[Hr]:a.LINEAR_MIPMAP_LINEAR},N={[XM]:a.NEVER,[KM]:a.ALWAYS,[WM]:a.LESS,[gx]:a.LEQUAL,[qM]:a.EQUAL,[ZM]:a.GEQUAL,[YM]:a.GREATER,[jM]:a.NOTEQUAL};function Z(F,w){if(w.type===ya&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Wi||w.magFilter===Wh||w.magFilter===Hc||w.magFilter===Hr||w.minFilter===Wi||w.minFilter===Wh||w.minFilter===Hc||w.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,J[w.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,J[w.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,J[w.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,pt[w.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,pt[w.minFilter]),w.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===zi||w.minFilter!==Hc&&w.minFilter!==Hr||w.type===ya&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");a.texParameterf(F,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function at(F,w){let st=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",I));const vt=w.source;let bt=x.get(vt);bt===void 0&&(bt={},x.set(vt,bt));const gt=et(w);if(gt!==F.__cacheKey){bt[gt]===void 0&&(bt[gt]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,st=!0),bt[gt].usedTimes++;const Kt=bt[F.__cacheKey];Kt!==void 0&&(bt[F.__cacheKey].usedTimes--,Kt.usedTimes===0&&A(w)),F.__cacheKey=gt,F.__webglTexture=bt[gt].texture}return st}function lt(F,w,st){return Math.floor(Math.floor(F/st)/w)}function X(F,w,st,vt){const gt=F.updateRanges;if(gt.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,st,vt,w.data);else{gt.sort((Tt,Ct)=>Tt.start-Ct.start);let Kt=0;for(let Tt=1;Tt<gt.length;Tt++){const Ct=gt[Kt],Qt=gt[Tt],Bt=Ct.start+Ct.count,Nt=lt(Qt.start,w.width,4),ue=lt(Ct.start,w.width,4);Qt.start<=Bt+1&&Nt===ue&&lt(Qt.start+Qt.count-1,w.width,4)===Nt?Ct.count=Math.max(Ct.count,Qt.start+Qt.count-Ct.start):(++Kt,gt[Kt]=Qt)}gt.length=Kt+1;const Rt=a.getParameter(a.UNPACK_ROW_LENGTH),qt=a.getParameter(a.UNPACK_SKIP_PIXELS),Yt=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let Tt=0,Ct=gt.length;Tt<Ct;Tt++){const Qt=gt[Tt],Bt=Math.floor(Qt.start/4),Nt=Math.ceil(Qt.count/4),ue=Bt%w.width,W=Math.floor(Bt/w.width),At=Nt,Dt=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ue),a.pixelStorei(a.UNPACK_SKIP_ROWS,W),n.texSubImage2D(a.TEXTURE_2D,0,ue,W,At,Dt,st,vt,w.data)}F.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Rt),a.pixelStorei(a.UNPACK_SKIP_PIXELS,qt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Yt)}}function ot(F,w,st){let vt=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(vt=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(vt=a.TEXTURE_3D);const bt=at(F,w),gt=w.source;n.bindTexture(vt,F.__webglTexture,a.TEXTURE0+st);const Kt=r.get(gt);if(gt.version!==Kt.__version||bt===!0){n.activeTexture(a.TEXTURE0+st);const Rt=Oe.getPrimaries(Oe.workingColorSpace),qt=w.colorSpace===ir?null:Oe.getPrimaries(w.colorSpace),Yt=w.colorSpace===ir||Rt===qt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Tt=E(w.image,!1,l.maxTextureSize);Tt=nn(w,Tt);const Ct=c.convert(w.format,w.colorSpace),Qt=c.convert(w.type);let Bt=D(w.internalFormat,Ct,Qt,w.colorSpace,w.isVideoTexture);Z(vt,w);let Nt;const ue=w.mipmaps,W=w.isVideoTexture!==!0,At=Kt.__version===void 0||bt===!0,Dt=gt.dataReady,Ft=H(w,Tt);if(w.isDepthTexture)Bt=T(w.format===vl,w.type),At&&(W?n.texStorage2D(a.TEXTURE_2D,1,Bt,Tt.width,Tt.height):n.texImage2D(a.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Ct,Qt,null));else if(w.isDataTexture)if(ue.length>0){W&&At&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let Et=0,St=ue.length;Et<St;Et++)Nt=ue[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Ct,Qt,Nt.data):n.texImage2D(a.TEXTURE_2D,Et,Bt,Nt.width,Nt.height,0,Ct,Qt,Nt.data);w.generateMipmaps=!1}else W?(At&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Tt.width,Tt.height),Dt&&X(w,Tt,Ct,Qt)):n.texImage2D(a.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Ct,Qt,Tt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&At&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Bt,ue[0].width,ue[0].height,Tt.depth);for(let Et=0,St=ue.length;Et<St;Et++)if(Nt=ue[Et],w.format!==Ni)if(Ct!==null)if(W){if(Dt)if(w.layerUpdates.size>0){const Gt=dv(Nt.width,Nt.height,w.format,w.type);for(const se of w.layerUpdates){const Ie=Nt.data.subarray(se*Gt/Nt.data.BYTES_PER_ELEMENT,(se+1)*Gt/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,se,Nt.width,Nt.height,1,Ct,Ie)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,Tt.depth,Ct,Nt.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Et,Bt,Nt.width,Nt.height,Tt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Et,0,0,0,Nt.width,Nt.height,Tt.depth,Ct,Qt,Nt.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Et,Bt,Nt.width,Nt.height,Tt.depth,0,Ct,Qt,Nt.data)}else{W&&At&&n.texStorage2D(a.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let Et=0,St=ue.length;Et<St;Et++)Nt=ue[Et],w.format!==Ni?Ct!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Ct,Nt.data):n.compressedTexImage2D(a.TEXTURE_2D,Et,Bt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Nt.width,Nt.height,Ct,Qt,Nt.data):n.texImage2D(a.TEXTURE_2D,Et,Bt,Nt.width,Nt.height,0,Ct,Qt,Nt.data)}else if(w.isDataArrayTexture)if(W){if(At&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Ft,Bt,Tt.width,Tt.height,Tt.depth),Dt)if(w.layerUpdates.size>0){const Et=dv(Tt.width,Tt.height,w.format,w.type);for(const St of w.layerUpdates){const Gt=Tt.data.subarray(St*Et/Tt.data.BYTES_PER_ELEMENT,(St+1)*Et/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,St,Tt.width,Tt.height,1,Ct,Qt,Gt)}w.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Qt,Tt.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Bt,Tt.width,Tt.height,Tt.depth,0,Ct,Qt,Tt.data);else if(w.isData3DTexture)W?(At&&n.texStorage3D(a.TEXTURE_3D,Ft,Bt,Tt.width,Tt.height,Tt.depth),Dt&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Qt,Tt.data)):n.texImage3D(a.TEXTURE_3D,0,Bt,Tt.width,Tt.height,Tt.depth,0,Ct,Qt,Tt.data);else if(w.isFramebufferTexture){if(At)if(W)n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Tt.width,Tt.height);else{let Et=Tt.width,St=Tt.height;for(let Gt=0;Gt<Ft;Gt++)n.texImage2D(a.TEXTURE_2D,Gt,Bt,Et,St,0,Ct,Qt,null),Et>>=1,St>>=1}}else if(ue.length>0){if(W&&At){const Et=en(ue[0]);n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Et.width,Et.height)}for(let Et=0,St=ue.length;Et<St;Et++)Nt=ue[Et],W?Dt&&n.texSubImage2D(a.TEXTURE_2D,Et,0,0,Ct,Qt,Nt):n.texImage2D(a.TEXTURE_2D,Et,Bt,Ct,Qt,Nt);w.generateMipmaps=!1}else if(W){if(At){const Et=en(Tt);n.texStorage2D(a.TEXTURE_2D,Ft,Bt,Et.width,Et.height)}Dt&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Ct,Qt,Tt)}else n.texImage2D(a.TEXTURE_2D,0,Bt,Ct,Qt,Tt);M(w)&&v(vt),Kt.__version=gt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function mt(F,w,st){if(w.image.length!==6)return;const vt=at(F,w),bt=w.source;n.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+st);const gt=r.get(bt);if(bt.version!==gt.__version||vt===!0){n.activeTexture(a.TEXTURE0+st);const Kt=Oe.getPrimaries(Oe.workingColorSpace),Rt=w.colorSpace===ir?null:Oe.getPrimaries(w.colorSpace),qt=w.colorSpace===ir||Kt===Rt?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,Tt=w.image[0]&&w.image[0].isDataTexture,Ct=[];for(let St=0;St<6;St++)!Yt&&!Tt?Ct[St]=E(w.image[St],!0,l.maxCubemapSize):Ct[St]=Tt?w.image[St].image:w.image[St],Ct[St]=nn(w,Ct[St]);const Qt=Ct[0],Bt=c.convert(w.format,w.colorSpace),Nt=c.convert(w.type),ue=D(w.internalFormat,Bt,Nt,w.colorSpace),W=w.isVideoTexture!==!0,At=gt.__version===void 0||vt===!0,Dt=bt.dataReady;let Ft=H(w,Qt);Z(a.TEXTURE_CUBE_MAP,w);let Et;if(Yt){W&&At&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ue,Qt.width,Qt.height);for(let St=0;St<6;St++){Et=Ct[St].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];w.format!==Ni?Bt!==null?W?Dt&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,se.width,se.height,Bt,se.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,0,0,se.width,se.height,Bt,Nt,se.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt,ue,se.width,se.height,0,Bt,Nt,se.data)}}}else{if(Et=w.mipmaps,W&&At){Et.length>0&&Ft++;const St=en(Ct[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Ft,ue,St.width,St.height)}for(let St=0;St<6;St++)if(Tt){W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ct[St].width,Ct[St].height,Bt,Nt,Ct[St].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,Ct[St].width,Ct[St].height,0,Bt,Nt,Ct[St].data);for(let Gt=0;Gt<Et.length;Gt++){const Ie=Et[Gt].image[St].image;W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,Ie.width,Ie.height,Bt,Nt,Ie.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,ue,Ie.width,Ie.height,0,Bt,Nt,Ie.data)}}else{W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Bt,Nt,Ct[St]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ue,Bt,Nt,Ct[St]);for(let Gt=0;Gt<Et.length;Gt++){const se=Et[Gt];W?Dt&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,0,0,Bt,Nt,se.image[St]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+St,Gt+1,ue,Bt,Nt,se.image[St])}}}M(w)&&v(a.TEXTURE_CUBE_MAP),gt.__version=bt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function Lt(F,w,st,vt,bt,gt){const Kt=c.convert(st.format,st.colorSpace),Rt=c.convert(st.type),qt=D(st.internalFormat,Kt,Rt,st.colorSpace),Yt=r.get(w),Tt=r.get(st);if(Tt.__renderTarget=w,!Yt.__hasExternalTextures){const Ct=Math.max(1,w.width>>gt),Qt=Math.max(1,w.height>>gt);bt===a.TEXTURE_3D||bt===a.TEXTURE_2D_ARRAY?n.texImage3D(bt,gt,qt,Ct,Qt,w.depth,0,Kt,Rt,null):n.texImage2D(bt,gt,qt,Ct,Qt,0,Kt,Rt,null)}n.bindFramebuffer(a.FRAMEBUFFER,F),Ht(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,vt,bt,Tt.__webglTexture,0,qe(w)):(bt===a.TEXTURE_2D||bt>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,vt,bt,Tt.__webglTexture,gt),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Ut(F,w,st){if(a.bindRenderbuffer(a.RENDERBUFFER,F),w.depthBuffer){const vt=w.depthTexture,bt=vt&&vt.isDepthTexture?vt.type:null,gt=T(w.stencilBuffer,bt),Kt=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Rt=qe(w);Ht(w)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Rt,gt,w.width,w.height):st?a.renderbufferStorageMultisample(a.RENDERBUFFER,Rt,gt,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,gt,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Kt,a.RENDERBUFFER,F)}else{const vt=w.textures;for(let bt=0;bt<vt.length;bt++){const gt=vt[bt],Kt=c.convert(gt.format,gt.colorSpace),Rt=c.convert(gt.type),qt=D(gt.internalFormat,Kt,Rt,gt.colorSpace),Yt=qe(w);st&&Ht(w)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Yt,qt,w.width,w.height):Ht(w)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Yt,qt,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,qt,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Jt(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(w.depthTexture);vt.__renderTarget=w,(!vt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),dt(w.depthTexture,0);const bt=vt.__webglTexture,gt=qe(w);if(w.depthTexture.format===_l)Ht(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,bt,0,gt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,bt,0);else if(w.depthTexture.format===vl)Ht(w)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,bt,0,gt):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function Ze(F){const w=r.get(F),st=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const vt=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),vt){const bt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,vt.removeEventListener("dispose",bt)};vt.addEventListener("dispose",bt),w.__depthDisposeCallback=bt}w.__boundDepthTexture=vt}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const vt=F.texture.mipmaps;vt&&vt.length>0?Jt(w.__webglFramebuffer[0],F):Jt(w.__webglFramebuffer,F)}else if(st){w.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[vt]),w.__webglDepthbuffer[vt]===void 0)w.__webglDepthbuffer[vt]=a.createRenderbuffer(),Ut(w.__webglDepthbuffer[vt],F,!1);else{const bt=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer[vt];a.bindRenderbuffer(a.RENDERBUFFER,gt),a.framebufferRenderbuffer(a.FRAMEBUFFER,bt,a.RENDERBUFFER,gt)}}else{const vt=F.texture.mipmaps;if(vt&&vt.length>0?n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),Ut(w.__webglDepthbuffer,F,!1);else{const bt=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,gt=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,gt),a.framebufferRenderbuffer(a.FRAMEBUFFER,bt,a.RENDERBUFFER,gt)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function _e(F,w,st){const vt=r.get(F);w!==void 0&&Lt(vt.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),st!==void 0&&Ze(F)}function V(F){const w=F.texture,st=r.get(F),vt=r.get(w);F.addEventListener("dispose",O);const bt=F.textures,gt=F.isWebGLCubeRenderTarget===!0,Kt=bt.length>1;if(Kt||(vt.__webglTexture===void 0&&(vt.__webglTexture=a.createTexture()),vt.__version=w.version,f.memory.textures++),gt){st.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer[Rt]=[];for(let qt=0;qt<w.mipmaps.length;qt++)st.__webglFramebuffer[Rt][qt]=a.createFramebuffer()}else st.__webglFramebuffer[Rt]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){st.__webglFramebuffer=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)st.__webglFramebuffer[Rt]=a.createFramebuffer()}else st.__webglFramebuffer=a.createFramebuffer();if(Kt)for(let Rt=0,qt=bt.length;Rt<qt;Rt++){const Yt=r.get(bt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=a.createTexture(),f.memory.textures++)}if(F.samples>0&&Ht(F)===!1){st.__webglMultisampledFramebuffer=a.createFramebuffer(),st.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Rt=0;Rt<bt.length;Rt++){const qt=bt[Rt];st.__webglColorRenderbuffer[Rt]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,st.__webglColorRenderbuffer[Rt]);const Yt=c.convert(qt.format,qt.colorSpace),Tt=c.convert(qt.type),Ct=D(qt.internalFormat,Yt,Tt,qt.colorSpace,F.isXRRenderTarget===!0),Qt=qe(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,Qt,Ct,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Rt,a.RENDERBUFFER,st.__webglColorRenderbuffer[Rt])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(st.__webglDepthRenderbuffer=a.createRenderbuffer(),Ut(st.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(gt){n.bindTexture(a.TEXTURE_CUBE_MAP,vt.__webglTexture),Z(a.TEXTURE_CUBE_MAP,w);for(let Rt=0;Rt<6;Rt++)if(w.mipmaps&&w.mipmaps.length>0)for(let qt=0;qt<w.mipmaps.length;qt++)Lt(st.__webglFramebuffer[Rt][qt],F,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,qt);else Lt(st.__webglFramebuffer[Rt],F,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(w)&&v(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Rt=0,qt=bt.length;Rt<qt;Rt++){const Yt=bt[Rt],Tt=r.get(Yt);let Ct=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ct,Tt.__webglTexture),Z(Ct,Yt),Lt(st.__webglFramebuffer,F,Yt,a.COLOR_ATTACHMENT0+Rt,Ct,0),M(Yt)&&v(Ct)}n.unbindTexture()}else{let Rt=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Rt=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Rt,vt.__webglTexture),Z(Rt,w),w.mipmaps&&w.mipmaps.length>0)for(let qt=0;qt<w.mipmaps.length;qt++)Lt(st.__webglFramebuffer[qt],F,w,a.COLOR_ATTACHMENT0,Rt,qt);else Lt(st.__webglFramebuffer,F,w,a.COLOR_ATTACHMENT0,Rt,0);M(w)&&v(Rt),n.unbindTexture()}F.depthBuffer&&Ze(F)}function we(F){const w=F.textures;for(let st=0,vt=w.length;st<vt;st++){const bt=w[st];if(M(bt)){const gt=L(F),Kt=r.get(bt).__webglTexture;n.bindTexture(gt,Kt),v(gt),n.unbindTexture()}}}const ne=[],Ee=[];function $t(F){if(F.samples>0){if(Ht(F)===!1){const w=F.textures,st=F.width,vt=F.height;let bt=a.COLOR_BUFFER_BIT;const gt=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Kt=r.get(F),Rt=w.length>1;if(Rt)for(let Yt=0;Yt<w.length;Yt++)n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Yt,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Yt,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const qt=F.texture.mipmaps;qt&&qt.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Yt=0;Yt<w.length;Yt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(bt|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(bt|=a.STENCIL_BUFFER_BIT)),Rt){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Tt=r.get(w[Yt]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Tt,0)}a.blitFramebuffer(0,0,st,vt,0,0,st,vt,bt,a.NEAREST),m===!0&&(ne.length=0,Ee.length=0,ne.push(a.COLOR_ATTACHMENT0+Yt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ne.push(gt),Ee.push(gt),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Ee)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<w.length;Yt++){n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Yt,a.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Tt=r.get(w[Yt]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Kt.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Yt,a.TEXTURE_2D,Tt,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const w=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function qe(F){return Math.min(l.maxSamples,F.samples)}function Ht(F){const w=r.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ce(F){const w=f.render.frame;_.get(F)!==w&&(_.set(F,w),F.update())}function nn(F,w){const st=F.colorSpace,vt=F.format,bt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||st!==to&&st!==ir&&(Oe.getTransfer(st)===Xe?(vt!==Ni||bt!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),w}function en(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=q,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=tt,this.setTextureCube=Y,this.rebindTextures=_e,this.setupRenderTarget=V,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ht}function p2(a,t){function n(r,l=ir){let c;const f=Oe.getTransfer(l);if(r===Yi)return a.UNSIGNED_BYTE;if(r===Fp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Hp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===cx)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ox)return a.BYTE;if(r===lx)return a.SHORT;if(r===ml)return a.UNSIGNED_SHORT;if(r===Ip)return a.INT;if(r===Gr)return a.UNSIGNED_INT;if(r===ya)return a.FLOAT;if(r===Al)return a.HALF_FLOAT;if(r===ux)return a.ALPHA;if(r===fx)return a.RGB;if(r===Ni)return a.RGBA;if(r===_l)return a.DEPTH_COMPONENT;if(r===vl)return a.DEPTH_STENCIL;if(r===hx)return a.RED;if(r===Gp)return a.RED_INTEGER;if(r===dx)return a.RG;if(r===Vp)return a.RG_INTEGER;if(r===kp)return a.RGBA_INTEGER;if(r===mu||r===gu||r===_u||r===vu)if(f===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===$d||r===tp||r===ep)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ep)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===np||r===ip||r===ap)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===np||r===ip)return f===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ap)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rp||r===sp||r===op||r===lp||r===cp||r===up||r===fp||r===hp||r===dp||r===pp||r===mp||r===gp||r===_p||r===vp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===op)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===up)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return f===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xu||r===xp||r===yp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===xu)return f===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===px||r===Sp||r===Mp||r===bp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===xu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Sp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}class Px extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const m2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const r=new Px(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new Ea({vertexShader:m2,fragmentShader:g2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new jt(new kr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends no{constructor(t,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,_=null,g=null,x=null,y=null,b=null;const E=new _2,M={},v=n.getContextAttributes();let L=null,D=null;const T=[],H=[],I=new le;let O=null;const z=new bi;z.viewport=new on;const A=new bi;A.viewport=new on;const R=[z,A],P=new Fb;let q=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=T[X];return ot===void 0&&(ot=new pd,T[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=T[X];return ot===void 0&&(ot=new pd,T[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=T[X];return ot===void 0&&(ot=new pd,T[X]=ot),ot.getHandSpace()};function et(X){const ot=H.indexOf(X.inputSource);if(ot===-1)return;const mt=T[ot];mt!==void 0&&(mt.update(X.inputSource,X.frame,p||f),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function dt(){l.removeEventListener("select",et),l.removeEventListener("selectstart",et),l.removeEventListener("selectend",et),l.removeEventListener("squeeze",et),l.removeEventListener("squeezestart",et),l.removeEventListener("squeezeend",et),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",B);for(let X=0;X<T.length;X++){const ot=H[X];ot!==null&&(H[X]=null,T[X].disconnect(ot))}q=null,$=null,E.reset();for(const X in M)delete M[X];t.setRenderTarget(L),y=null,x=null,g=null,l=null,D=null,lt.stop(),r.isPresenting=!1,t.setPixelRatio(O),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",et),l.addEventListener("selectstart",et),l.addEventListener("selectend",et),l.addEventListener("squeeze",et),l.addEventListener("squeezestart",et),l.addEventListener("squeezeend",et),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,n)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Lt=null,Ut=null;v.depth&&(Ut=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,mt=v.stencil?vl:_l,Lt=v.stencil?gl:Gr);const Jt={colorFormat:n.RGBA8,depthFormat:Ut,scaleFactor:c};x=g.createProjectionLayer(Jt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new ba(x.textureWidth,x.textureHeight,{format:Ni,type:Yi,depthTexture:new Cx(x.textureWidth,x.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const mt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new ba(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function B(X){for(let ot=0;ot<X.removed.length;ot++){const mt=X.removed[ot],Lt=H.indexOf(mt);Lt>=0&&(H[Lt]=null,T[Lt].disconnect(mt))}for(let ot=0;ot<X.added.length;ot++){const mt=X.added[ot];let Lt=H.indexOf(mt);if(Lt===-1){for(let Jt=0;Jt<T.length;Jt++)if(Jt>=H.length){H.push(mt),Lt=Jt;break}else if(H[Jt]===null){H[Jt]=mt,Lt=Jt;break}if(Lt===-1)break}const Ut=T[Lt];Ut&&Ut.connect(mt)}}const tt=new nt,Y=new nt;function J(X,ot,mt){tt.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(mt.matrixWorld);const Lt=tt.distanceTo(Y),Ut=ot.projectionMatrix.elements,Jt=mt.projectionMatrix.elements,Ze=Ut[14]/(Ut[10]-1),_e=Ut[14]/(Ut[10]+1),V=(Ut[9]+1)/Ut[5],we=(Ut[9]-1)/Ut[5],ne=(Ut[8]-1)/Ut[0],Ee=(Jt[8]+1)/Jt[0],$t=Ze*ne,qe=Ze*Ee,Ht=Lt/(-ne+Ee),ce=Ht*-ne;if(ot.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(Ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ut[10]===-1)X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const nn=Ze+Ht,en=_e+Ht,F=$t-ce,w=qe+(Lt-ce),st=V*_e/en*nn,vt=we*_e/en*nn;X.projectionMatrix.makePerspective(F,w,st,vt,nn,en),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pt(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let ot=X.near,mt=X.far;E.texture!==null&&(E.depthNear>0&&(ot=E.depthNear),E.depthFar>0&&(mt=E.depthFar)),P.near=A.near=z.near=ot,P.far=A.far=z.far=mt,(q!==P.near||$!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),q=P.near,$=P.far),P.layers.mask=X.layers.mask|6,z.layers.mask=P.layers.mask&3,A.layers.mask=P.layers.mask&5;const Lt=X.parent,Ut=P.cameras;pt(P,Lt);for(let Jt=0;Jt<Ut.length;Jt++)pt(Ut[Jt],Lt);Ut.length===2?J(P,z,A):P.projectionMatrix.copy(z.projectionMatrix),N(X,P,Lt)};function N(X,ot,mt){mt===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Tp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(X){m=X,x!==null&&(x.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(P)},this.getCameraTexture=function(X){return M[X]};let Z=null;function at(X,ot){if(_=ot.getViewerPose(p||f),b=ot,_!==null){const mt=_.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Lt=!1;mt.length!==P.cameras.length&&(P.cameras.length=0,Lt=!0);for(let _e=0;_e<mt.length;_e++){const V=mt[_e];let we=null;if(y!==null)we=y.getViewport(V);else{const Ee=g.getViewSubImage(x,V);we=Ee.viewport,_e===0&&(t.setRenderTargetTextures(D,Ee.colorTexture,Ee.depthStencilTexture),t.setRenderTarget(D))}let ne=R[_e];ne===void 0&&(ne=new bi,ne.layers.enable(_e),ne.viewport=new on,R[_e]=ne),ne.matrix.fromArray(V.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(V.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(we.x,we.y,we.width,we.height),_e===0&&(P.matrix.copy(ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Lt===!0&&P.cameras.push(ne)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const _e=g.getDepthInformation(mt[0]);_e&&_e.isValid&&_e.texture&&E.init(_e,l.renderState)}if(Ut&&Ut.includes("camera-access")&&(t.state.unbindTexture(),g))for(let _e=0;_e<mt.length;_e++){const V=mt[_e].camera;if(V){let we=M[V];we||(we=new Px,M[V]=we);const ne=g.getCameraImage(V);we.sourceTexture=ne}}}for(let mt=0;mt<T.length;mt++){const Lt=H[mt],Ut=T[mt];Lt!==null&&Ut!==void 0&&Ut.update(Lt,ot,p||f)}Z&&Z(X,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),b=null}const lt=new Ux;lt.setAnimationLoop(at),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}const Lr=new ji,x2=new ln;function y2(a,t){function n(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,bx(a)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,L,D,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,T)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),E(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(f(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,L,D):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,n(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===$n&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,n(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===$n&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,n(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,n(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const L=t.get(v),D=L.envMap,T=L.envMapRotation;D&&(M.envMap.value=D,Lr.copy(T),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),M.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(Lr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,M.aoMapTransform))}function f(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,L,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*L,M.scale.value=D*.5,v.map&&(M.map.value=v.map,n(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,n(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,n(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,L){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===$n&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function E(M,v){const L=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function S2(a,t,n,r){let l={},c={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const T=D.program;r.uniformBlockBinding(L,T)}function p(L,D){let T=l[L.id];T===void 0&&(b(L),T=_(L),l[L.id]=T,L.addEventListener("dispose",M));const H=D.program;r.updateUBOMapping(L,H);const I=t.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function _(L){const D=g();L.__bindingPointIndex=D;const T=a.createBuffer(),H=L.__size,I=L.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,H,I),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,D,T),T}function g(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],T=L.uniforms,H=L.__cache;a.bindBuffer(a.UNIFORM_BUFFER,D);for(let I=0,O=T.length;I<O;I++){const z=Array.isArray(T[I])?T[I]:[T[I]];for(let A=0,R=z.length;A<R;A++){const P=z[A];if(y(P,I,A,H)===!0){const q=P.__offset,$=Array.isArray(P.value)?P.value:[P.value];let et=0;for(let dt=0;dt<$.length;dt++){const B=$[dt],tt=E(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,q+et,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,et),et+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,q,P.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(L,D,T,H){const I=L.value,O=D+"_"+T;if(H[O]===void 0)return typeof I=="number"||typeof I=="boolean"?H[O]=I:H[O]=I.clone(),!0;{const z=H[O];if(typeof I=="number"||typeof I=="boolean"){if(z!==I)return H[O]=I,!0}else if(z.equals(I)===!1)return z.copy(I),!0}return!1}function b(L){const D=L.uniforms;let T=0;const H=16;for(let O=0,z=D.length;O<z;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,P=A.length;R<P;R++){const q=A[R],$=Array.isArray(q.value)?q.value:[q.value];for(let et=0,dt=$.length;et<dt;et++){const B=$[et],tt=E(B),Y=T%H,J=Y%tt.boundary,pt=Y+J;T+=J,pt!==0&&H-pt<tt.storage&&(T+=H-pt),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=T,T+=tt.storage}}}const I=T%H;return I>0&&(T+=H-I),L.__size=T,L.__cache={},this}function E(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function M(L){const D=L.target;D.removeEventListener("dispose",M);const T=f.indexOf(D.__bindingPointIndex);f.splice(T,1),a.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const L in l)a.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}class M2{constructor(t={}){const{canvas:n=JM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const b=new Uint32Array(4),E=new Int32Array(4);let M=null,v=null;const L=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let H=!1;this._outputColorSpace=Jn;let I=0,O=0,z=null,A=-1,R=null;const P=new on,q=new on;let $=null;const et=new ge(0);let dt=0,B=n.width,tt=n.height,Y=1,J=null,pt=null;const N=new on(0,0,B,tt),Z=new on(0,0,B,tt);let at=!1;const lt=new jp;let X=!1,ot=!1;const mt=new ln,Lt=new nt,Ut=new on,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function _e(){return z===null?Y:1}let V=r;function we(U,j){return n.getContext(U,j)}try{const U={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",Dt,!1),n.addEventListener("webglcontextrestored",Ft,!1),n.addEventListener("webglcontextcreationerror",Et,!1),V===null){const j="webgl2";if(V=we(j,U),V===null)throw we(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let ne,Ee,$t,qe,Ht,ce,nn,en,F,w,st,vt,bt,gt,Kt,Rt,qt,Yt,Tt,Ct,Qt,Bt,Nt,ue;function W(){ne=new LT(V),ne.init(),Bt=new p2(V,ne),Ee=new TT(V,ne,t,Bt),$t=new h2(V,ne),Ee.reversedDepthBuffer&&x&&$t.buffers.depth.setReversed(!0),qe=new zT(V),Ht=new $A,ce=new d2(V,ne,$t,Ht,Ee,Bt,qe),nn=new wT(T),en=new UT(T),F=new Gb(V),Nt=new bT(V,F),w=new NT(V,F,qe,Nt),st=new BT(V,w,F,qe),Tt=new PT(V,Ee,ce),Rt=new AT(Ht),vt=new JA(T,nn,en,ne,Ee,Nt,Rt),bt=new y2(T,Ht),gt=new e2,Kt=new o2(ne),Yt=new MT(T,nn,en,$t,st,y,m),qt=new u2(T,st,Ee),ue=new S2(V,qe,Ee,$t),Ct=new ET(V,ne,qe),Qt=new OT(V,ne,qe),qe.programs=vt.programs,T.capabilities=Ee,T.extensions=ne,T.properties=Ht,T.renderLists=gt,T.shadowMap=qt,T.state=$t,T.info=qe}W();const At=new v2(T,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=ne.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=ne.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(U){U!==void 0&&(Y=U,this.setSize(B,tt,!1))},this.getSize=function(U){return U.set(B,tt)},this.setSize=function(U,j,ut=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,tt=j,n.width=Math.floor(U*Y),n.height=Math.floor(j*Y),ut===!0&&(n.style.width=U+"px",n.style.height=j+"px"),this.setViewport(0,0,U,j)},this.getDrawingBufferSize=function(U){return U.set(B*Y,tt*Y).floor()},this.setDrawingBufferSize=function(U,j,ut){B=U,tt=j,Y=ut,n.width=Math.floor(U*ut),n.height=Math.floor(j*ut),this.setViewport(0,0,U,j)},this.getCurrentViewport=function(U){return U.copy(P)},this.getViewport=function(U){return U.copy(N)},this.setViewport=function(U,j,ut,ft){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,j,ut,ft),$t.viewport(P.copy(N).multiplyScalar(Y).round())},this.getScissor=function(U){return U.copy(Z)},this.setScissor=function(U,j,ut,ft){U.isVector4?Z.set(U.x,U.y,U.z,U.w):Z.set(U,j,ut,ft),$t.scissor(q.copy(Z).multiplyScalar(Y).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(U){$t.setScissorTest(at=U)},this.setOpaqueSort=function(U){J=U},this.setTransparentSort=function(U){pt=U},this.getClearColor=function(U){return U.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(U=!0,j=!0,ut=!0){let ft=0;if(U){let K=!1;if(z!==null){const Mt=z.texture.format;K=Mt===kp||Mt===Vp||Mt===Gp}if(K){const Mt=z.texture.type,Ot=Mt===Yi||Mt===Gr||Mt===ml||Mt===gl||Mt===Fp||Mt===Hp,kt=Yt.getClearColor(),Pt=Yt.getClearAlpha(),te=kt.r,re=kt.g,ee=kt.b;Ot?(b[0]=te,b[1]=re,b[2]=ee,b[3]=Pt,V.clearBufferuiv(V.COLOR,0,b)):(E[0]=te,E[1]=re,E[2]=ee,E[3]=Pt,V.clearBufferiv(V.COLOR,0,E))}else ft|=V.COLOR_BUFFER_BIT}j&&(ft|=V.DEPTH_BUFFER_BIT),ut&&(ft|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Dt,!1),n.removeEventListener("webglcontextrestored",Ft,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),Yt.dispose(),gt.dispose(),Kt.dispose(),Ht.dispose(),nn.dispose(),en.dispose(),st.dispose(),Nt.dispose(),ue.dispose(),vt.dispose(),At.dispose(),At.removeEventListener("sessionstart",fi),At.removeEventListener("sessionend",ro),Bi.stop()};function Dt(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const U=qe.autoReset,j=qt.enabled,ut=qt.autoUpdate,ft=qt.needsUpdate,K=qt.type;W(),qe.autoReset=U,qt.enabled=j,qt.autoUpdate=ut,qt.needsUpdate=ft,qt.type=K}function Et(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function St(U){const j=U.target;j.removeEventListener("dispose",St),Gt(j)}function Gt(U){se(U),Ht.remove(U)}function se(U){const j=Ht.get(U).programs;j!==void 0&&(j.forEach(function(ut){vt.releaseProgram(ut)}),U.isShaderMaterial&&vt.releaseShaderCache(U))}this.renderBufferDirect=function(U,j,ut,ft,K,Mt){j===null&&(j=Jt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,kt=Aa(U,j,ut,ft,K);$t.setMaterial(ft,Ot);let Pt=ut.index,te=1;if(ft.wireframe===!0){if(Pt=w.getWireframeAttribute(ut),Pt===void 0)return;te=2}const re=ut.drawRange,ee=ut.attributes.position;let me=re.start*te,Pe=(re.start+re.count)*te;Mt!==null&&(me=Math.max(me,Mt.start*te),Pe=Math.min(Pe,(Mt.start+Mt.count)*te)),Pt!==null?(me=Math.max(me,0),Pe=Math.min(Pe,Pt.count)):ee!=null&&(me=Math.max(me,0),Pe=Math.min(Pe,ee.count));const Ye=Pe-me;if(Ye<0||Ye===1/0)return;Nt.setup(K,ft,kt,ut,Pt);let Be,ve=Ct;if(Pt!==null&&(Be=F.get(Pt),ve=Qt,ve.setIndex(Be)),K.isMesh)ft.wireframe===!0?($t.setLineWidth(ft.wireframeLinewidth*_e()),ve.setMode(V.LINES)):ve.setMode(V.TRIANGLES);else if(K.isLine){let Xt=ft.linewidth;Xt===void 0&&(Xt=1),$t.setLineWidth(Xt*_e()),K.isLineSegments?ve.setMode(V.LINES):K.isLineLoop?ve.setMode(V.LINE_LOOP):ve.setMode(V.LINE_STRIP)}else K.isPoints?ve.setMode(V.POINTS):K.isSprite&&ve.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ve.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,Ke=K._multiDrawCounts,Ce=K._multiDrawCount,Rn=Pt?F.get(Pt).bytesPerElement:1,Zi=Ht.get(ft).currentProgram.getUniforms();for(let En=0;En<Ce;En++)Zi.setValue(V,"_gl_DrawID",En),ve.render(Xt[En]/Rn,Ke[En])}else if(K.isInstancedMesh)ve.renderInstances(me,Ye,K.count);else if(ut.isInstancedBufferGeometry){const Xt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ke=Math.min(ut.instanceCount,Xt);ve.renderInstances(me,Ye,Ke)}else ve.render(me,Ye)};function Ie(U,j,ut){U.transparent===!0&&U.side===Li&&U.forceSinglePass===!1?(U.side=$n,U.needsUpdate=!0,ei(U,j,ut),U.side=or,U.needsUpdate=!0,ei(U,j,ut),U.side=Li):ei(U,j,ut)}this.compile=function(U,j,ut=null){ut===null&&(ut=U),v=Kt.get(ut),v.init(j),D.push(v),ut.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),U!==ut&&U.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const ft=new Set;return U.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let Ot=0;Ot<Mt.length;Ot++){const kt=Mt[Ot];Ie(kt,ut,K),ft.add(kt)}else Ie(Mt,ut,K),ft.add(Mt)}),v=D.pop(),ft},this.compileAsync=function(U,j,ut=null){const ft=this.compile(U,j,ut);return new Promise(K=>{function Mt(){if(ft.forEach(function(Ot){Ht.get(Ot).currentProgram.isReady()&&ft.delete(Ot)}),ft.size===0){K(U);return}setTimeout(Mt,10)}ne.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Re=null;function Hn(U){Re&&Re(U)}function fi(){Bi.stop()}function ro(){Bi.start()}const Bi=new Ux;Bi.setAnimationLoop(Hn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(U){Re=U,At.setAnimationLoop(U),U===null?Bi.stop():Bi.start()},At.addEventListener("sessionstart",fi),At.addEventListener("sessionend",ro),this.render=function(U,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(j),j=At.getCamera()),U.isScene===!0&&U.onBeforeRender(T,U,j,z),v=Kt.get(U,D.length),v.init(j),D.push(v),mt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),lt.setFromProjectionMatrix(mt,qi,j.reversedDepth),ot=this.localClippingEnabled,X=Rt.init(this.clippingPlanes,ot),M=gt.get(U,L.length),M.init(),L.push(M),At.enabled===!0&&At.isPresenting===!0){const Mt=T.xr.getDepthSensingMesh();Mt!==null&&Wr(Mt,j,-1/0,T.sortObjects)}Wr(U,j,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(J,pt),Ze=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Ze&&Yt.addToRenderList(M,U),this.info.render.frame++,X===!0&&Rt.beginShadows();const ut=v.state.shadowsArray;qt.render(ut,U,j),X===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,K=M.transmissive;if(v.setupLights(),j.isArrayCamera){const Mt=j.cameras;if(K.length>0)for(let Ot=0,kt=Mt.length;Ot<kt;Ot++){const Pt=Mt[Ot];Yr(ft,K,U,Pt)}Ze&&Yt.render(U);for(let Ot=0,kt=Mt.length;Ot<kt;Ot++){const Pt=Mt[Ot];qr(M,U,Pt,Pt.viewport)}}else K.length>0&&Yr(ft,K,U,j),Ze&&Yt.render(U),qr(M,U,j);z!==null&&O===0&&(ce.updateMultisampleRenderTarget(z),ce.updateRenderTargetMipmap(z)),U.isScene===!0&&U.onAfterRender(T,U,j),Nt.resetDefaultState(),A=-1,R=null,D.pop(),D.length>0?(v=D[D.length-1],X===!0&&Rt.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Wr(U,j,ut,ft){if(U.visible===!1)return;if(U.layers.test(j.layers)){if(U.isGroup)ut=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(j);else if(U.isLight)v.pushLight(U),U.castShadow&&v.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||lt.intersectsSprite(U)){ft&&Ut.setFromMatrixPosition(U.matrixWorld).applyMatrix4(mt);const Ot=st.update(U),kt=U.material;kt.visible&&M.push(U,Ot,kt,ut,Ut.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||lt.intersectsObject(U))){const Ot=st.update(U),kt=U.material;if(ft&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ut.copy(U.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Ut.copy(Ot.boundingSphere.center)),Ut.applyMatrix4(U.matrixWorld).applyMatrix4(mt)),Array.isArray(kt)){const Pt=Ot.groups;for(let te=0,re=Pt.length;te<re;te++){const ee=Pt[te],me=kt[ee.materialIndex];me&&me.visible&&M.push(U,Ot,me,ut,Ut.z,ee)}}else kt.visible&&M.push(U,Ot,kt,ut,Ut.z,null)}}const Mt=U.children;for(let Ot=0,kt=Mt.length;Ot<kt;Ot++)Wr(Mt[Ot],j,ut,ft)}function qr(U,j,ut,ft){const K=U.opaque,Mt=U.transmissive,Ot=U.transparent;v.setupLightsView(ut),X===!0&&Rt.setGlobalState(T.clippingPlanes,ut),ft&&$t.viewport(P.copy(ft)),K.length>0&&lr(K,j,ut),Mt.length>0&&lr(Mt,j,ut),Ot.length>0&&lr(Ot,j,ut),$t.buffers.depth.setTest(!0),$t.buffers.depth.setMask(!0),$t.buffers.color.setMask(!0),$t.setPolygonOffset(!1)}function Yr(U,j,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ft.id]===void 0&&(v.state.transmissionRenderTarget[ft.id]=new ba(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Al:Yi,minFilter:Hr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Mt=v.state.transmissionRenderTarget[ft.id],Ot=ft.viewport||P;Mt.setSize(Ot.z*T.transmissionResolutionScale,Ot.w*T.transmissionResolutionScale);const kt=T.getRenderTarget(),Pt=T.getActiveCubeFace(),te=T.getActiveMipmapLevel();T.setRenderTarget(Mt),T.getClearColor(et),dt=T.getClearAlpha(),dt<1&&T.setClearColor(16777215,.5),T.clear(),Ze&&Yt.render(ut);const re=T.toneMapping;T.toneMapping=rr;const ee=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),v.setupLightsView(ft),X===!0&&Rt.setGlobalState(T.clippingPlanes,ft),lr(U,ut,ft),ce.updateMultisampleRenderTarget(Mt),ce.updateRenderTargetMipmap(Mt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Pe=0,Ye=j.length;Pe<Ye;Pe++){const Be=j[Pe],ve=Be.object,Xt=Be.geometry,Ke=Be.material,Ce=Be.group;if(Ke.side===Li&&ve.layers.test(ft.layers)){const Rn=Ke.side;Ke.side=$n,Ke.needsUpdate=!0,so(ve,ut,ft,Xt,Ke,Ce),Ke.side=Rn,Ke.needsUpdate=!0,me=!0}}me===!0&&(ce.updateMultisampleRenderTarget(Mt),ce.updateRenderTargetMipmap(Mt))}T.setRenderTarget(kt,Pt,te),T.setClearColor(et,dt),ee!==void 0&&(ft.viewport=ee),T.toneMapping=re}function lr(U,j,ut){const ft=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Mt=U.length;K<Mt;K++){const Ot=U[K],kt=Ot.object,Pt=Ot.geometry,te=Ot.group;let re=Ot.material;re.allowOverride===!0&&ft!==null&&(re=ft),kt.layers.test(ut.layers)&&so(kt,j,ut,Pt,re,te)}}function so(U,j,ut,ft,K,Mt){U.onBeforeRender(T,j,ut,ft,K,Mt),U.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),K.onBeforeRender(T,j,ut,ft,U,Mt),K.transparent===!0&&K.side===Li&&K.forceSinglePass===!1?(K.side=$n,K.needsUpdate=!0,T.renderBufferDirect(ut,j,ft,K,U,Mt),K.side=or,K.needsUpdate=!0,T.renderBufferDirect(ut,j,ft,K,U,Mt),K.side=Li):T.renderBufferDirect(ut,j,ft,K,U,Mt),U.onAfterRender(T,j,ut,ft,K,Mt)}function ei(U,j,ut){j.isScene!==!0&&(j=Jt);const ft=Ht.get(U),K=v.state.lights,Mt=v.state.shadowsArray,Ot=K.state.version,kt=vt.getParameters(U,K.state,Mt,j,ut),Pt=vt.getProgramCacheKey(kt);let te=ft.programs;ft.environment=U.isMeshStandardMaterial?j.environment:null,ft.fog=j.fog,ft.envMap=(U.isMeshStandardMaterial?en:nn).get(U.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&U.envMap===null?j.environmentRotation:U.envMapRotation,te===void 0&&(U.addEventListener("dispose",St),te=new Map,ft.programs=te);let re=te.get(Pt);if(re!==void 0){if(ft.currentProgram===re&&ft.lightsStateVersion===Ot)return wn(U,kt),re}else kt.uniforms=vt.getUniforms(U),U.onBeforeCompile(kt,T),re=vt.acquireProgram(kt,Pt),te.set(Pt,re),ft.uniforms=kt.uniforms;const ee=ft.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(ee.clippingPlanes=Rt.uniform),wn(U,kt),ft.needsLights=Iu(U),ft.lightsStateVersion=Ot,ft.needsLights&&(ee.ambientLightColor.value=K.state.ambient,ee.lightProbe.value=K.state.probe,ee.directionalLights.value=K.state.directional,ee.directionalLightShadows.value=K.state.directionalShadow,ee.spotLights.value=K.state.spot,ee.spotLightShadows.value=K.state.spotShadow,ee.rectAreaLights.value=K.state.rectArea,ee.ltc_1.value=K.state.rectAreaLTC1,ee.ltc_2.value=K.state.rectAreaLTC2,ee.pointLights.value=K.state.point,ee.pointLightShadows.value=K.state.pointShadow,ee.hemisphereLights.value=K.state.hemi,ee.directionalShadowMap.value=K.state.directionalShadowMap,ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ee.spotShadowMap.value=K.state.spotShadowMap,ee.spotLightMatrix.value=K.state.spotLightMatrix,ee.spotLightMap.value=K.state.spotLightMap,ee.pointShadowMap.value=K.state.pointShadowMap,ee.pointShadowMatrix.value=K.state.pointShadowMatrix),ft.currentProgram=re,ft.uniformsList=null,re}function hn(U){if(U.uniformsList===null){const j=U.currentProgram.getUniforms();U.uniformsList=yu.seqWithValue(j.seq,U.uniforms)}return U.uniformsList}function wn(U,j){const ut=Ht.get(U);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function Aa(U,j,ut,ft,K){j.isScene!==!0&&(j=Jt),ce.resetTextureUnits();const Mt=j.fog,Ot=ft.isMeshStandardMaterial?j.environment:null,kt=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:to,Pt=(ft.isMeshStandardMaterial?en:nn).get(ft.envMap||Ot),te=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,re=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ee=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,Pe=!!ut.morphAttributes.color;let Ye=rr;ft.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ye=T.toneMapping);const Be=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ve=Be!==void 0?Be.length:0,Xt=Ht.get(ft),Ke=v.state.lights;if(X===!0&&(ot===!0||U!==R)){const xn=U===R&&ft.id===A;Rt.setState(ft,U,xn)}let Ce=!1;ft.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ke.state.version||Xt.outputColorSpace!==kt||K.isBatchedMesh&&Xt.batching===!1||!K.isBatchedMesh&&Xt.batching===!0||K.isBatchedMesh&&Xt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xt.instancing===!1||!K.isInstancedMesh&&Xt.instancing===!0||K.isSkinnedMesh&&Xt.skinning===!1||!K.isSkinnedMesh&&Xt.skinning===!0||K.isInstancedMesh&&Xt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xt.instancingMorph===!1&&K.morphTexture!==null||Xt.envMap!==Pt||ft.fog===!0&&Xt.fog!==Mt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Rt.numPlanes||Xt.numIntersection!==Rt.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==re||Xt.morphTargets!==ee||Xt.morphNormals!==me||Xt.morphColors!==Pe||Xt.toneMapping!==Ye||Xt.morphTargetsCount!==ve)&&(Ce=!0):(Ce=!0,Xt.__version=ft.version);let Rn=Xt.currentProgram;Ce===!0&&(Rn=ei(ft,j,K));let Zi=!1,En=!1,ur=!1;const Se=Rn.getUniforms(),On=Xt.uniforms;if($t.useProgram(Rn.program)&&(Zi=!0,En=!0,ur=!0),ft.id!==A&&(A=ft.id,En=!0),Zi||R!==U){$t.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Se.setValue(V,"projectionMatrix",U.projectionMatrix),Se.setValue(V,"viewMatrix",U.matrixWorldInverse);const cn=Se.map.cameraPosition;cn!==void 0&&cn.setValue(V,Lt.setFromMatrixPosition(U.matrixWorld)),Ee.logarithmicDepthBuffer&&Se.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Se.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,En=!0,ur=!0)}if(K.isSkinnedMesh){Se.setOptional(V,K,"bindMatrix"),Se.setOptional(V,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Se.setValue(V,"boneTexture",xn.boneTexture,ce))}K.isBatchedMesh&&(Se.setOptional(V,K,"batchingTexture"),Se.setValue(V,"batchingTexture",K._matricesTexture,ce),Se.setOptional(V,K,"batchingIdTexture"),Se.setValue(V,"batchingIdTexture",K._indirectTexture,ce),Se.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Se.setValue(V,"batchingColorTexture",K._colorsTexture,ce));const Gn=ut.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&Tt.update(K,ut,Rn),(En||Xt.receiveShadow!==K.receiveShadow)&&(Xt.receiveShadow=K.receiveShadow,Se.setValue(V,"receiveShadow",K.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(On.envMap.value=Pt,On.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&j.environment!==null&&(On.envMapIntensity.value=j.environmentIntensity),En&&(Se.setValue(V,"toneMappingExposure",T.toneMappingExposure),Xt.needsLights&&oo(On,ur),Mt&&ft.fog===!0&&bt.refreshFogUniforms(On,Mt),bt.refreshMaterialUniforms(On,ft,Y,tt,v.state.transmissionRenderTarget[U.id]),yu.upload(V,hn(Xt),On,ce)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(yu.upload(V,hn(Xt),On,ce),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Se.setValue(V,"center",K.center),Se.setValue(V,"modelViewMatrix",K.modelViewMatrix),Se.setValue(V,"normalMatrix",K.normalMatrix),Se.setValue(V,"modelMatrix",K.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const xn=ft.uniformsGroups;for(let cn=0,jr=xn.length;cn<jr;cn++){const Ii=xn[cn];ue.update(Ii,Rn),ue.bind(Ii,Rn)}}return Rn}function oo(U,j){U.ambientLightColor.needsUpdate=j,U.lightProbe.needsUpdate=j,U.directionalLights.needsUpdate=j,U.directionalLightShadows.needsUpdate=j,U.pointLights.needsUpdate=j,U.pointLightShadows.needsUpdate=j,U.spotLights.needsUpdate=j,U.spotLightShadows.needsUpdate=j,U.rectAreaLights.needsUpdate=j,U.hemisphereLights.needsUpdate=j}function Iu(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(U,j,ut){const ft=Ht.get(U);ft.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Ht.get(U.texture).__webglTexture=j,Ht.get(U.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,j){const ut=Ht.get(U);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0};const Fu=V.createFramebuffer();this.setRenderTarget=function(U,j=0,ut=0){z=U,I=j,O=ut;let ft=!0,K=null,Mt=!1,Ot=!1;if(U){const Pt=Ht.get(U);if(Pt.__useDefaultFramebuffer!==void 0)$t.bindFramebuffer(V.FRAMEBUFFER,null),ft=!1;else if(Pt.__webglFramebuffer===void 0)ce.setupRenderTarget(U);else if(Pt.__hasExternalTextures)ce.rebindTextures(U,Ht.get(U.texture).__webglTexture,Ht.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const ee=U.depthTexture;if(Pt.__boundDepthTexture!==ee){if(ee!==null&&Ht.has(ee)&&(U.width!==ee.image.width||U.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(U)}}const te=U.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const re=Ht.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(re[j])?K=re[j][ut]:K=re[j],Mt=!0):U.samples>0&&ce.useMultisampledRTT(U)===!1?K=Ht.get(U).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[ut]:K=re,P.copy(U.viewport),q.copy(U.scissor),$=U.scissorTest}else P.copy(N).multiplyScalar(Y).floor(),q.copy(Z).multiplyScalar(Y).floor(),$=at;if(ut!==0&&(K=Fu),$t.bindFramebuffer(V.FRAMEBUFFER,K)&&ft&&$t.drawBuffers(U,K),$t.viewport(P),$t.scissor(q),$t.setScissorTest($),Mt){const Pt=Ht.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pt.__webglTexture,ut)}else if(Ot){const Pt=j;for(let te=0;te<U.textures.length;te++){const re=Ht.get(U.textures[te]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+te,re.__webglTexture,ut,Pt)}}else if(U!==null&&ut!==0){const Pt=Ht.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,ut)}A=-1},this.readRenderTargetPixels=function(U,j,ut,ft,K,Mt,Ot,kt=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ht.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(Pt=Pt[Ot]),Pt){$t.bindFramebuffer(V.FRAMEBUFFER,Pt);try{const te=U.textures[kt],re=te.format,ee=te.type;if(!Ee.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=U.width-ft&&ut>=0&&ut<=U.height-K&&(U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(j,ut,ft,K,Bt.convert(re),Bt.convert(ee),Mt))}finally{const te=z!==null?Ht.get(z).__webglFramebuffer:null;$t.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(U,j,ut,ft,K,Mt,Ot,kt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ht.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ot!==void 0&&(Pt=Pt[Ot]),Pt)if(j>=0&&j<=U.width-ft&&ut>=0&&ut<=U.height-K){$t.bindFramebuffer(V.FRAMEBUFFER,Pt);const te=U.textures[kt],re=te.format,ee=te.type;if(!Ee.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,me),V.bufferData(V.PIXEL_PACK_BUFFER,Mt.byteLength,V.STREAM_READ),U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+kt),V.readPixels(j,ut,ft,K,Bt.convert(re),Bt.convert(ee),0);const Pe=z!==null?Ht.get(z).__webglFramebuffer:null;$t.bindFramebuffer(V.FRAMEBUFFER,Pe);const Ye=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await $M(V,Ye,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,me),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Mt),V.deleteBuffer(me),V.deleteSync(Ye),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,j=null,ut=0){const ft=Math.pow(2,-ut),K=Math.floor(U.image.width*ft),Mt=Math.floor(U.image.height*ft),Ot=j!==null?j.x:0,kt=j!==null?j.y:0;ce.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,ut,0,0,Ot,kt,K,Mt),$t.unbindTexture()};const Dl=V.createFramebuffer(),cr=V.createFramebuffer();this.copyTextureToTexture=function(U,j,ut=null,ft=null,K=0,Mt=null){Mt===null&&(K!==0?(Zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=K,K=0):Mt=0);let Ot,kt,Pt,te,re,ee,me,Pe,Ye;const Be=U.isCompressedTexture?U.mipmaps[Mt]:U.image;if(ut!==null)Ot=ut.max.x-ut.min.x,kt=ut.max.y-ut.min.y,Pt=ut.isBox3?ut.max.z-ut.min.z:1,te=ut.min.x,re=ut.min.y,ee=ut.isBox3?ut.min.z:0;else{const Gn=Math.pow(2,-K);Ot=Math.floor(Be.width*Gn),kt=Math.floor(Be.height*Gn),U.isDataArrayTexture?Pt=Be.depth:U.isData3DTexture?Pt=Math.floor(Be.depth*Gn):Pt=1,te=0,re=0,ee=0}ft!==null?(me=ft.x,Pe=ft.y,Ye=ft.z):(me=0,Pe=0,Ye=0);const ve=Bt.convert(j.format),Xt=Bt.convert(j.type);let Ke;j.isData3DTexture?(ce.setTexture3D(j,0),Ke=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ce.setTexture2DArray(j,0),Ke=V.TEXTURE_2D_ARRAY):(ce.setTexture2D(j,0),Ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);const Ce=V.getParameter(V.UNPACK_ROW_LENGTH),Rn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zi=V.getParameter(V.UNPACK_SKIP_PIXELS),En=V.getParameter(V.UNPACK_SKIP_ROWS),ur=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Be.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Be.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,re),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ee);const Se=U.isDataArrayTexture||U.isData3DTexture,On=j.isDataArrayTexture||j.isData3DTexture;if(U.isDepthTexture){const Gn=Ht.get(U),xn=Ht.get(j),cn=Ht.get(Gn.__renderTarget),jr=Ht.get(xn.__renderTarget);$t.bindFramebuffer(V.READ_FRAMEBUFFER,cn.__webglFramebuffer),$t.bindFramebuffer(V.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Ii=0;Ii<Pt;Ii++)Se&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.get(U).__webglTexture,K,ee+Ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ht.get(j).__webglTexture,Mt,Ye+Ii)),V.blitFramebuffer(te,re,Ot,kt,me,Pe,Ot,kt,V.DEPTH_BUFFER_BIT,V.NEAREST);$t.bindFramebuffer(V.READ_FRAMEBUFFER,null),$t.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||U.isRenderTargetTexture||Ht.has(U)){const Gn=Ht.get(U),xn=Ht.get(j);$t.bindFramebuffer(V.READ_FRAMEBUFFER,Dl),$t.bindFramebuffer(V.DRAW_FRAMEBUFFER,cr);for(let cn=0;cn<Pt;cn++)Se?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gn.__webglTexture,K,ee+cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gn.__webglTexture,K),On?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,Mt,Ye+cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,Mt),K!==0?V.blitFramebuffer(te,re,Ot,kt,me,Pe,Ot,kt,V.COLOR_BUFFER_BIT,V.NEAREST):On?V.copyTexSubImage3D(Ke,Mt,me,Pe,Ye+cn,te,re,Ot,kt):V.copyTexSubImage2D(Ke,Mt,me,Pe,te,re,Ot,kt);$t.bindFramebuffer(V.READ_FRAMEBUFFER,null),$t.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else On?U.isDataTexture||U.isData3DTexture?V.texSubImage3D(Ke,Mt,me,Pe,Ye,Ot,kt,Pt,ve,Xt,Be.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(Ke,Mt,me,Pe,Ye,Ot,kt,Pt,ve,Be.data):V.texSubImage3D(Ke,Mt,me,Pe,Ye,Ot,kt,Pt,ve,Xt,Be):U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Mt,me,Pe,Ot,kt,ve,Xt,Be.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Mt,me,Pe,Be.width,Be.height,ve,Be.data):V.texSubImage2D(V.TEXTURE_2D,Mt,me,Pe,Ot,kt,ve,Xt,Be);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ce),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zi),V.pixelStorei(V.UNPACK_SKIP_ROWS,En),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ur),Mt===0&&j.generateMipmaps&&V.generateMipmap(Ke),$t.unbindTexture()},this.copyTextureToTexture3D=function(U,j,ut=null,ft=null,K=0){return Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,j,ut,ft,K)},this.initRenderTarget=function(U){Ht.get(U).__webglFramebuffer===void 0&&ce.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ce.setTextureCube(U,0):U.isData3DTexture?ce.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ce.setTexture2DArray(U,0):ce.setTexture2D(U,0),$t.unbindTexture()},this.resetState=function(){I=0,O=0,z=null,$t.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Oe._getUnpackColorSpace()}}var Td={exports:{}},il={},Ad={exports:{}},wd={};var Iv;function b2(){return Iv||(Iv=1,(function(a){function t(B,tt){var Y=B.length;B.push(tt);t:for(;0<Y;){var J=Y-1>>>1,pt=B[J];if(0<l(pt,tt))B[J]=tt,B[Y]=pt,Y=J;else break t}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var tt=B[0],Y=B.pop();if(Y!==tt){B[0]=Y;t:for(var J=0,pt=B.length,N=pt>>>1;J<N;){var Z=2*(J+1)-1,at=B[Z],lt=Z+1,X=B[lt];if(0>l(at,Y))lt<pt&&0>l(X,at)?(B[J]=X,B[lt]=Y,J=lt):(B[J]=at,B[Z]=Y,J=Z);else if(lt<pt&&0>l(X,Y))B[J]=X,B[lt]=Y,J=lt;else break t}}return tt}function l(B,tt){var Y=B.sortIndex-tt.sortIndex;return Y!==0?Y:B.id-tt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;a.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],_=1,g=null,x=3,y=!1,b=!1,E=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function T(B){for(var tt=n(p);tt!==null;){if(tt.callback===null)r(p);else if(tt.startTime<=B)r(p),tt.sortIndex=tt.expirationTime,t(m,tt);else break;tt=n(p)}}function H(B){if(E=!1,T(B),!b)if(n(m)!==null)b=!0,I||(I=!0,q());else{var tt=n(p);tt!==null&&dt(H,tt.startTime-B)}}var I=!1,O=-1,z=5,A=-1;function R(){return M?!0:!(a.unstable_now()-A<z)}function P(){if(M=!1,I){var B=a.unstable_now();A=B;var tt=!0;try{t:{b=!1,E&&(E=!1,L(O),O=-1),y=!0;var Y=x;try{e:{for(T(B),g=n(m);g!==null&&!(g.expirationTime>B&&R());){var J=g.callback;if(typeof J=="function"){g.callback=null,x=g.priorityLevel;var pt=J(g.expirationTime<=B);if(B=a.unstable_now(),typeof pt=="function"){g.callback=pt,T(B),tt=!0;break e}g===n(m)&&r(m),T(B)}else r(m);g=n(m)}if(g!==null)tt=!0;else{var N=n(p);N!==null&&dt(H,N.startTime-B),tt=!1}}break t}finally{g=null,x=Y,y=!1}tt=void 0}}finally{tt?q():I=!1}}}var q;if(typeof D=="function")q=function(){D(P)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,et=$.port2;$.port1.onmessage=P,q=function(){et.postMessage(null)}}else q=function(){v(P,0)};function dt(B,tt){O=v(function(){B(a.unstable_now())},tt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(B){switch(x){case 1:case 2:case 3:var tt=3;break;default:tt=x}var Y=x;x=tt;try{return B()}finally{x=Y}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(B,tt){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return tt()}finally{x=Y}},a.unstable_scheduleCallback=function(B,tt,Y){var J=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?J+Y:J):Y=J,B){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=Y+pt,B={id:_++,callback:tt,priorityLevel:B,startTime:Y,expirationTime:pt,sortIndex:-1},Y>J?(B.sortIndex=Y,t(p,B),n(m)===null&&B===n(p)&&(E?(L(O),O=-1):E=!0,dt(H,Y-J))):(B.sortIndex=pt,t(m,B),b||y||(b=!0,I||(I=!0,q()))),B},a.unstable_shouldYield=R,a.unstable_wrapCallback=function(B){var tt=x;return function(){var Y=x;x=tt;try{return B.apply(this,arguments)}finally{x=Y}}}})(wd)),wd}var Fv;function E2(){return Fv||(Fv=1,Ad.exports=b2()),Ad.exports}var Rd={exports:{}},oe={};var Hv;function T2(){if(Hv)return oe;Hv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function v(N,Z,at){this.props=N,this.context=Z,this.refs=M,this.updater=at||b}v.prototype.isReactComponent={},v.prototype.setState=function(N,Z){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Z,"setState")},v.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function L(){}L.prototype=v.prototype;function D(N,Z,at){this.props=N,this.context=Z,this.refs=M,this.updater=at||b}var T=D.prototype=new L;T.constructor=D,E(T,v.prototype),T.isPureReactComponent=!0;var H=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function A(N,Z,at){var lt=at.ref;return{$$typeof:a,type:N,key:Z,ref:lt!==void 0?lt:null,props:at}}function R(N,Z){return A(N.type,Z,N.props)}function P(N){return typeof N=="object"&&N!==null&&N.$$typeof===a}function q(N){var Z={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(at){return Z[at]})}var $=/\/+/g;function et(N,Z){return typeof N=="object"&&N!==null&&N.key!=null?q(""+N.key):Z.toString(36)}function dt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(I,I):(N.status="pending",N.then(function(Z){N.status==="pending"&&(N.status="fulfilled",N.value=Z)},function(Z){N.status==="pending"&&(N.status="rejected",N.reason=Z)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,Z,at,lt,X){var ot=typeof N;(ot==="undefined"||ot==="boolean")&&(N=null);var mt=!1;if(N===null)mt=!0;else switch(ot){case"bigint":case"string":case"number":mt=!0;break;case"object":switch(N.$$typeof){case a:case t:mt=!0;break;case _:return mt=N._init,B(mt(N._payload),Z,at,lt,X)}}if(mt)return X=X(N),mt=lt===""?"."+et(N,0):lt,H(X)?(at="",mt!=null&&(at=mt.replace($,"$&/")+"/"),B(X,Z,at,"",function(Jt){return Jt})):X!=null&&(P(X)&&(X=R(X,at+(X.key==null||N&&N.key===X.key?"":(""+X.key).replace($,"$&/")+"/")+mt)),Z.push(X)),1;mt=0;var Lt=lt===""?".":lt+":";if(H(N))for(var Ut=0;Ut<N.length;Ut++)lt=N[Ut],ot=Lt+et(lt,Ut),mt+=B(lt,Z,at,ot,X);else if(Ut=y(N),typeof Ut=="function")for(N=Ut.call(N),Ut=0;!(lt=N.next()).done;)lt=lt.value,ot=Lt+et(lt,Ut++),mt+=B(lt,Z,at,ot,X);else if(ot==="object"){if(typeof N.then=="function")return B(dt(N),Z,at,lt,X);throw Z=String(N),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return mt}function tt(N,Z,at){if(N==null)return N;var lt=[],X=0;return B(N,lt,"","",function(ot){return Z.call(at,ot,X++)}),lt}function Y(N){if(N._status===-1){var Z=N._result;Z=Z(),Z.then(function(at){(N._status===0||N._status===-1)&&(N._status=1,N._result=at)},function(at){(N._status===0||N._status===-1)&&(N._status=2,N._result=at)}),N._status===-1&&(N._status=0,N._result=Z)}if(N._status===1)return N._result.default;throw N._result}var J=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pt={map:tt,forEach:function(N,Z,at){tt(N,function(){Z.apply(this,arguments)},at)},count:function(N){var Z=0;return tt(N,function(){Z++}),Z},toArray:function(N){return tt(N,function(Z){return Z})||[]},only:function(N){if(!P(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return oe.Activity=g,oe.Children=pt,oe.Component=v,oe.Fragment=n,oe.Profiler=l,oe.PureComponent=D,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,oe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(N,Z,at){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var lt=E({},N.props),X=N.key;if(Z!=null)for(ot in Z.key!==void 0&&(X=""+Z.key),Z)!z.call(Z,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&Z.ref===void 0||(lt[ot]=Z[ot]);var ot=arguments.length-2;if(ot===1)lt.children=at;else if(1<ot){for(var mt=Array(ot),Lt=0;Lt<ot;Lt++)mt[Lt]=arguments[Lt+2];lt.children=mt}return A(N.type,X,lt)},oe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},oe.createElement=function(N,Z,at){var lt,X={},ot=null;if(Z!=null)for(lt in Z.key!==void 0&&(ot=""+Z.key),Z)z.call(Z,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(X[lt]=Z[lt]);var mt=arguments.length-2;if(mt===1)X.children=at;else if(1<mt){for(var Lt=Array(mt),Ut=0;Ut<mt;Ut++)Lt[Ut]=arguments[Ut+2];X.children=Lt}if(N&&N.defaultProps)for(lt in mt=N.defaultProps,mt)X[lt]===void 0&&(X[lt]=mt[lt]);return A(N,ot,X)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:h,render:N}},oe.isValidElement=P,oe.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:Y}},oe.memo=function(N,Z){return{$$typeof:p,type:N,compare:Z===void 0?null:Z}},oe.startTransition=function(N){var Z=O.T,at={};O.T=at;try{var lt=N(),X=O.S;X!==null&&X(at,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(I,J)}catch(ot){J(ot)}finally{Z!==null&&at.types!==null&&(Z.types=at.types),O.T=Z}},oe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},oe.use=function(N){return O.H.use(N)},oe.useActionState=function(N,Z,at){return O.H.useActionState(N,Z,at)},oe.useCallback=function(N,Z){return O.H.useCallback(N,Z)},oe.useContext=function(N){return O.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,Z){return O.H.useDeferredValue(N,Z)},oe.useEffect=function(N,Z){return O.H.useEffect(N,Z)},oe.useEffectEvent=function(N){return O.H.useEffectEvent(N)},oe.useId=function(){return O.H.useId()},oe.useImperativeHandle=function(N,Z,at){return O.H.useImperativeHandle(N,Z,at)},oe.useInsertionEffect=function(N,Z){return O.H.useInsertionEffect(N,Z)},oe.useLayoutEffect=function(N,Z){return O.H.useLayoutEffect(N,Z)},oe.useMemo=function(N,Z){return O.H.useMemo(N,Z)},oe.useOptimistic=function(N,Z){return O.H.useOptimistic(N,Z)},oe.useReducer=function(N,Z,at){return O.H.useReducer(N,Z,at)},oe.useRef=function(N){return O.H.useRef(N)},oe.useState=function(N){return O.H.useState(N)},oe.useSyncExternalStore=function(N,Z,at){return O.H.useSyncExternalStore(N,Z,at)},oe.useTransition=function(){return O.H.useTransition()},oe.version="19.2.8",oe}var Gv;function nm(){return Gv||(Gv=1,Rd.exports=T2()),Rd.exports}var Cd={exports:{}},Bn={};var Vv;function A2(){if(Vv)return Bn;Vv=1;var a=nm();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=f.T,_=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=_,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Bn.version="19.2.8",Bn}var kv;function w2(){if(kv)return Cd.exports;kv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Cd.exports=A2(),Cd.exports}var Xv;function R2(){if(Xv)return il;Xv=1;var a=E2(),t=nm(),n=w2();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(r(188));return i!==e?null:e}for(var s=e,o=i;;){var u=s.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){s=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===s)return m(u),e;if(d===o)return m(u),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=u,o=d;else{for(var S=!1,C=u.child;C;){if(C===s){S=!0,s=u,o=d;break}if(C===o){S=!0,o=u,s=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===s){S=!0,s=d,o=u;break}if(C===o){S=!0,o=d,s=u;break}C=C.sibling}if(!S)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function et(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case T:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:et(e.type)||"Memo";case z:i=e._payload,e=e._init;try{return et(e(i))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},J=[],pt=-1;function N(e){return{current:e}}function Z(e){0>pt||(e.current=J[pt],J[pt]=null,pt--)}function at(e,i){pt++,J[pt]=e.current,e.current=i}var lt=N(null),X=N(null),ot=N(null),mt=N(null);function Lt(e,i){switch(at(ot,i),at(X,e),at(lt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=u_(i),e=f_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(lt),at(lt,e)}function Ut(){Z(lt),Z(X),Z(ot)}function Jt(e){e.memoizedState!==null&&at(mt,e);var i=lt.current,s=f_(i,e.type);i!==s&&(at(X,e),at(lt,s))}function Ze(e){X.current===e&&(Z(lt),Z(X)),mt.current===e&&(Z(mt),qo._currentValue=Y)}var _e,V;function we(e){if(_e===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);_e=i&&i[1]||"",V=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+e+V}var ne=!1;function Ee(e,i){if(!e||ne)return"";ne=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var ct=ht}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(ht){ct=ht}e.call(yt.prototype)}}else{try{throw Error()}catch(ht){ct=ht}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&ct&&typeof ht.stack=="string")return[ht.stack,ct.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var G=S.split(`
`),rt=C.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===rt.length)for(o=G.length-1,u=rt.length-1;1<=o&&0<=u&&G[o]!==rt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==rt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==rt[u]){var _t=`
`+G[o].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=o&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?we(s):""}function $t(e,i){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we("Lazy");case 13:return e.child!==i&&i!==null?we("Suspense Fallback"):we("Suspense");case 19:return we("SuspenseList");case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we("Activity");default:return""}}function qe(e){try{var i="",s=null;do i+=$t(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ht=Object.prototype.hasOwnProperty,ce=a.unstable_scheduleCallback,nn=a.unstable_cancelCallback,en=a.unstable_shouldYield,F=a.unstable_requestPaint,w=a.unstable_now,st=a.unstable_getCurrentPriorityLevel,vt=a.unstable_ImmediatePriority,bt=a.unstable_UserBlockingPriority,gt=a.unstable_NormalPriority,Kt=a.unstable_LowPriority,Rt=a.unstable_IdlePriority,qt=a.log,Yt=a.unstable_setDisableYieldValue,Tt=null,Ct=null;function Qt(e){if(typeof qt=="function"&&Yt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,e)}catch{}}var Bt=Math.clz32?Math.clz32:W,Nt=Math.log,ue=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Nt(e)/ue|0)|0}var At=256,Dt=262144,Ft=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function St(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~d,o!==0?u=Et(o):(S&=C,S!==0?u=Et(S):s||(s=C&~e,s!==0&&(u=Et(s))))):(C=o&~d,C!==0?u=Et(C):S!==0?u=Et(S):s||(s=o&~e,s!==0&&(u=Et(s)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:u}function Gt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function se(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Re(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Hn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fi(e,i,s,o,u,d){var S=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var C=e.entanglements,G=e.expirationTimes,rt=e.hiddenUpdates;for(s=S&~s;0<s;){var _t=31-Bt(s),yt=1<<_t;C[_t]=0,G[_t]=-1;var ct=rt[_t];if(ct!==null)for(rt[_t]=null,_t=0;_t<ct.length;_t++){var ht=ct[_t];ht!==null&&(ht.lane&=-536870913)}s&=~yt}o!==0&&ro(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function ro(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Bt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function Bi(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Bt(s),u=1<<o;u&i|e[o]&i&&(e[o]|=i),s&=~u}}function Wr(e,i){var s=i&-i;return s=(s&42)!==0?1:qr(s),(s&(e.suspendedLanes|i))!==0?0:s}function qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lr(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:O_(e.type))}function so(e,i){var s=tt.p;try{return tt.p=e,i()}finally{tt.p=s}}var ei=Math.random().toString(36).slice(2),hn="__reactFiber$"+ei,wn="__reactProps$"+ei,Aa="__reactContainer$"+ei,oo="__reactEvents$"+ei,Iu="__reactListeners$"+ei,Fu="__reactHandles$"+ei,Dl="__reactResources$"+ei,cr="__reactMarker$"+ei;function U(e){delete e[hn],delete e[wn],delete e[oo],delete e[Iu],delete e[Fu]}function j(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Aa]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=v_(e);e!==null;){if(s=e[hn])return s;e=v_(e)}return i}e=s,s=e.parentNode}return null}function ut(e){if(e=e[hn]||e[Aa]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ft(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function K(e){var i=e[Dl];return i||(i=e[Dl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Mt(e){e[cr]=!0}var Ot=new Set,kt={};function Pt(e,i){te(e,i),te(e+"Capture",i)}function te(e,i){for(kt[e]=i,e=0;e<i.length;e++)Ot.add(i[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},me={};function Pe(e){return Ht.call(me,e)?!0:Ht.call(ee,e)?!1:re.test(e)?me[e]=!0:(ee[e]=!0,!1)}function Ye(e,i,s){if(Pe(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Be(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function ve(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ce(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Rn(e){if(!e._valueTracker){var i=Ke(e)?"checked":"value";e._valueTracker=Ce(e,i,""+e[i])}}function Zi(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=Ke(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ur=/[\n"\\]/g;function Se(e){return e.replace(ur,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function On(e,i,s,o,u,d,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Xt(i)):e.value!==""+Xt(i)&&(e.value=""+Xt(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?xn(e,S,Xt(i)):s!=null?xn(e,S,Xt(s)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Xt(C):e.removeAttribute("name")}function Gn(e,i,s,o,u,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Rn(e);return}s=s!=null?""+Xt(s):"",i=i!=null?""+Xt(i):s,C||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Rn(e)}function xn(e,i,s){i==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function cn(e,i,s,o){if(e=e.options,i){i={};for(var u=0;u<s.length;u++)i["$"+s[u]]=!0;for(s=0;s<e.length;s++)u=i.hasOwnProperty("$"+e[s].value),e[s].selected!==u&&(e[s].selected=u),u&&o&&(e[s].defaultSelected=!0)}else{for(s=""+Xt(s),i=null,u=0;u<e.length;u++){if(e[u].value===s){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function jr(e,i,s){if(i!=null&&(i=""+Xt(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+Xt(s):""}function Ii(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(dt(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=Xt(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),Rn(e)}function Zr(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var ry=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function om(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||ry.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function lm(e,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&s[u]!==o&&om(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&om(e,d,i[d])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ki(){}var Gu=null;function Vu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,Qr=null;function cm(e){var i=ut(e);if(i&&(e=i.stateNode)){var s=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(On(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Se(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var u=o[wn]||null;if(!u)throw Error(r(90));On(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&Zi(o)}break t;case"textarea":jr(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&cn(e,!!s.multiple,i,!1)}}}var ku=!1;function um(e,i,s){if(ku)return e(i,s);ku=!0;try{var o=e(i);return o}finally{if(ku=!1,(Kr!==null||Qr!==null)&&(vc(),Kr&&(i=Kr,e=Qr,Qr=Kr=null,cm(i),e)))for(i=0;i<e.length;i++)cm(e[i])}}function lo(e,i){var s=e.stateNode;if(s===null)return null;var o=s[wn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=!1;if(Qi)try{var co={};Object.defineProperty(co,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",co,co),window.removeEventListener("test",co,co)}catch{Xu=!1}var wa=null,Wu=null,Ll=null;function fm(){if(Ll)return Ll;var e,i=Wu,s=i.length,o,u="value"in wa?wa.value:wa.textContent,d=u.length;for(e=0;e<s&&i[e]===u[e];e++);var S=s-e;for(o=1;o<=S&&i[s-o]===u[d-o];o++);return Ll=u.slice(e,1<o?1-o:void 0)}function Nl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ol(){return!0}function hm(){return!1}function qn(e){function i(s,o,u,d,S){this._reactName=s,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(s=e[C],this[C]=s?s(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ol:hm,this.isPropagationStopped=hm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ol)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ol)},persist:function(){},isPersistent:Ol}),i}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=qn(fr),uo=g({},fr,{view:0,detail:0}),ly=qn(uo),qu,Yu,fo,Pl=g({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(qu=e.screenX-fo.screenX,Yu=e.screenY-fo.screenY):Yu=qu=0,fo=e),qu)},movementY:function(e){return"movementY"in e?e.movementY:Yu}}),dm=qn(Pl),cy=g({},Pl,{dataTransfer:0}),uy=qn(cy),fy=g({},uo,{relatedTarget:0}),ju=qn(fy),hy=g({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),dy=qn(hy),py=g({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),my=qn(py),gy=g({},fr,{data:0}),pm=qn(gy),_y={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=xy[e])?!!i[e]:!1}function Zu(){return yy}var Sy=g({},uo,{key:function(e){if(e.key){var i=_y[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=qn(Sy),by=g({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=qn(by),Ey=g({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),Ty=qn(Ey),Ay=g({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wy=qn(Ay),Ry=g({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=qn(Ry),Dy=g({},fr,{newState:0,oldState:0}),Uy=qn(Dy),Ly=[9,13,27,32],Ku=Qi&&"CompositionEvent"in window,ho=null;Qi&&"documentMode"in document&&(ho=document.documentMode);var Ny=Qi&&"TextEvent"in window&&!ho,gm=Qi&&(!Ku||ho&&8<ho&&11>=ho),_m=" ",vm=!1;function xm(e,i){switch(e){case"keyup":return Ly.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ym(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Oy(e,i){switch(e){case"compositionend":return ym(i);case"keypress":return i.which!==32?null:(vm=!0,_m);case"textInput":return e=i.data,e===_m&&vm?null:e;default:return null}}function zy(e,i){if(Jr)return e==="compositionend"||!Ku&&xm(e,i)?(e=fm(),Ll=Wu=wa=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gm&&i.locale!=="ko"?null:i.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Py[e.type]:i==="textarea"}function Mm(e,i,s,o){Kr?Qr?Qr.push(o):Qr=[o]:Kr=o,i=Tc(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var po=null,mo=null;function By(e){a_(e,0)}function Bl(e){var i=ft(e);if(Zi(i))return e}function bm(e,i){if(e==="change")return i}var Em=!1;if(Qi){var Qu;if(Qi){var Ju="oninput"in document;if(!Ju){var Tm=document.createElement("div");Tm.setAttribute("oninput","return;"),Ju=typeof Tm.oninput=="function"}Qu=Ju}else Qu=!1;Em=Qu&&(!document.documentMode||9<document.documentMode)}function Am(){po&&(po.detachEvent("onpropertychange",wm),mo=po=null)}function wm(e){if(e.propertyName==="value"&&Bl(mo)){var i=[];Mm(i,mo,e,Vu(e)),um(By,i)}}function Iy(e,i,s){e==="focusin"?(Am(),po=i,mo=s,po.attachEvent("onpropertychange",wm)):e==="focusout"&&Am()}function Fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(mo)}function Hy(e,i){if(e==="click")return Bl(i)}function Gy(e,i){if(e==="input"||e==="change")return Bl(i)}function Vy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ni=typeof Object.is=="function"?Object.is:Vy;function go(e,i){if(ni(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var u=s[o];if(!Ht.call(i,u)||!ni(e[u],i[u]))return!1}return!0}function Rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cm(e,i){var s=Rm(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=Rm(s)}}function Dm(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Dm(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Um(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=En(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=En(e.document)}return i}function $u(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var ky=Qi&&"documentMode"in document&&11>=document.documentMode,$r=null,tf=null,_o=null,ef=!1;function Lm(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;ef||$r==null||$r!==En(o)||(o=$r,"selectionStart"in o&&$u(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&go(_o,o)||(_o=o,o=Tc(tf,"onSelect"),0<o.length&&(i=new zl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=$r)))}function hr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var ts={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},nf={},Nm={};Qi&&(Nm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function dr(e){if(nf[e])return nf[e];if(!ts[e])return e;var i=ts[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in Nm)return nf[e]=i[s];return e}var Om=dr("animationend"),zm=dr("animationiteration"),Pm=dr("animationstart"),Xy=dr("transitionrun"),Wy=dr("transitionstart"),qy=dr("transitioncancel"),Bm=dr("transitionend"),Im=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function Ai(e,i){Im.set(e,i),Pt(i,[e])}var Il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],es=0,rf=0;function Fl(){for(var e=es,i=rf=es=0;i<e;){var s=hi[i];hi[i++]=null;var o=hi[i];hi[i++]=null;var u=hi[i];hi[i++]=null;var d=hi[i];if(hi[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&Fm(s,u,d)}}function Hl(e,i,s,o){hi[es++]=e,hi[es++]=i,hi[es++]=s,hi[es++]=o,rf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function sf(e,i,s,o){return Hl(e,i,s,o),Gl(e)}function pr(e,i){return Hl(e,null,null,i),Gl(e)}function Fm(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var u=!1,d=e.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Bt(s),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[i]:o.push(i),i.lane=s|536870912),d):null}function Gl(e){if(50<Fo)throw Fo=0,mh=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ns={};function Yy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,i,s,o){return new Yy(e,i,s,o)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ji(e,i){var s=e.alternate;return s===null?(s=ii(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Hm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Vl(e,i,s,o,u,d){var S=0;if(o=e,typeof e=="function")of(e)&&(S=1);else if(typeof e=="string")S=JS(e,s,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=ii(31,s,i,u),e.elementType=A,e.lanes=d,e;case E:return mr(s.children,u,d,i);case M:S=8,u|=24;break;case v:return e=ii(12,s,i,u|2),e.elementType=v,e.lanes=d,e;case H:return e=ii(13,s,i,u),e.elementType=H,e.lanes=d,e;case I:return e=ii(19,s,i,u),e.elementType=I,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case L:S=9;break t;case T:S=11;break t;case O:S=14;break t;case z:S=16,o=null;break t}S=29,s=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=ii(S,s,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function mr(e,i,s,o){return e=ii(7,e,o,i),e.lanes=s,e}function lf(e,i,s){return e=ii(6,e,null,i),e.lanes=s,e}function Gm(e){var i=ii(18,null,null,0);return i.stateNode=e,i}function cf(e,i,s){return i=ii(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Vm=new WeakMap;function di(e,i){if(typeof e=="object"&&e!==null){var s=Vm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:qe(i)},Vm.set(e,i),i)}return{value:e,source:i,stack:qe(i)}}var is=[],as=0,kl=null,vo=0,pi=[],mi=0,Ra=null,Fi=1,Hi="";function $i(e,i){is[as++]=vo,is[as++]=kl,kl=e,vo=i}function km(e,i,s){pi[mi++]=Fi,pi[mi++]=Hi,pi[mi++]=Ra,Ra=e;var o=Fi;e=Hi;var u=32-Bt(o)-1;o&=~(1<<u),s+=1;var d=32-Bt(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Fi=1<<32-Bt(i)+u|s<<u|o,Hi=d+e}else Fi=1<<d|s<<u|o,Hi=e}function uf(e){e.return!==null&&($i(e,1),km(e,1,0))}function ff(e){for(;e===kl;)kl=is[--as],is[as]=null,vo=is[--as],is[as]=null;for(;e===Ra;)Ra=pi[--mi],pi[mi]=null,Hi=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null}function Xm(e,i){pi[mi++]=Fi,pi[mi++]=Hi,pi[mi++]=Ra,Fi=i.id,Hi=i.overflow,Ra=e}var Cn=null,Qe=null,Te=!1,Ca=null,gi=!1,hf=Error(r(519));function Da(e){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xo(di(i,e)),hf}function Wm(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[hn]=e,i[wn]=o,s){case"dialog":ye("cancel",i),ye("close",i);break;case"iframe":case"object":case"embed":ye("load",i);break;case"video":case"audio":for(s=0;s<Go.length;s++)ye(Go[s],i);break;case"source":ye("error",i);break;case"img":case"image":case"link":ye("error",i),ye("load",i);break;case"details":ye("toggle",i);break;case"input":ye("invalid",i),Gn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ye("invalid",i);break;case"textarea":ye("invalid",i),Ii(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||l_(i.textContent,s)?(o.popover!=null&&(ye("beforetoggle",i),ye("toggle",i)),o.onScroll!=null&&ye("scroll",i),o.onScrollEnd!=null&&ye("scrollend",i),o.onClick!=null&&(i.onclick=Ki),i=!0):i=!1,i||Da(e,!0)}function qm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Cn=Cn.return}}function rs(e){if(e!==Cn)return!1;if(!Te)return qm(e),Te=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Dh(e.type,e.memoizedProps)),s=!s),s&&Qe&&Da(e),qm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=__(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=__(e)}else i===27?(i=Qe,Xa(e.type)?(e=zh,zh=null,Qe=e):Qe=i):Qe=Cn?vi(e.stateNode.nextSibling):null;return!0}function gr(){Qe=Cn=null,Te=!1}function df(){var e=Ca;return e!==null&&(Kn===null?Kn=e:Kn.push.apply(Kn,e),Ca=null),e}function xo(e){Ca===null?Ca=[e]:Ca.push(e)}var pf=N(null),_r=null,ta=null;function Ua(e,i,s){at(pf,i._currentValue),i._currentValue=s}function ea(e){e._currentValue=pf.current,Z(pf)}function mf(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function gf(e,i,s,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=u;for(var G=0;G<i.length;G++)if(C.context===i[G]){d.lanes|=s,C=d.alternate,C!==null&&(C.lanes|=s),mf(d.return,s,e),o||(S=null);break t}d=C.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=s,d=S.alternate,d!==null&&(d.lanes|=s),mf(S,s,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function ss(e,i,s,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=u.type;ni(u.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(u===mt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(qo):e=[qo])}u=u.return}e!==null&&gf(i,e,s,o),i.flags|=262144}function Xl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vr(e){_r=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Ym(_r,e)}function Wl(e,i){return _r===null&&vr(e),Ym(e,i)}function Ym(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ta===null){if(e===null)throw Error(r(308));ta=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else ta=ta.next=i;return s}var jy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Zy=a.unstable_scheduleCallback,Ky=a.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new jy,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&Zy(Ky,function(){e.controller.abort()})}var So=null,vf=0,os=0,ls=null;function Qy(e,i){if(So===null){var s=So=[];vf=0,os=Sh(),ls={status:"pending",value:void 0,then:function(o){s.push(o)}}}return vf++,i.then(jm,jm),i}function jm(){if(--vf===0&&So!==null){ls!==null&&(ls.status="fulfilled");var e=So;So=null,os=0,ls=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Jy(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(u){s.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<s.length;u++)(0,s[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<s.length;u++)(0,s[u])(void 0)}),o}var Zm=B.S;B.S=function(e,i){Lg=w(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Qy(e,i),Zm!==null&&Zm(e,i)};var xr=N(null);function xf(){var e=xr.current;return e!==null?e:je.pooledCache}function ql(e,i){i===null?at(xr,xr.current):at(xr,i.pool)}function Km(){var e=xf();return e===null?null:{parent:dn._currentValue,pool:e}}var cs=Error(r(460)),yf=Error(r(474)),Yl=Error(r(542)),jl={then:function(){}};function Qm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Ki,Ki),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,t0(e),e;default:if(typeof i.status=="string")i.then(Ki,Ki);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,t0(e),e}throw Sr=i,cs}}function yr(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Sr=s,cs):s}}var Sr=null;function $m(){if(Sr===null)throw Error(r(459));var e=Sr;return Sr=null,e}function t0(e){if(e===cs||e===Yl)throw Error(r(483))}var us=null,Mo=0;function Zl(e){var i=Mo;return Mo+=1,us===null&&(us=[]),Jm(us,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Kl(e,i){throw i.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function e0(e){function i(Q,k){if(e){var it=Q.deletions;it===null?(Q.deletions=[k],Q.flags|=16):it.push(k)}}function s(Q,k){if(!e)return null;for(;k!==null;)i(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Ji(Q,k),Q.index=0,Q.sibling=null,Q}function d(Q,k,it){return Q.index=it,e?(it=Q.alternate,it!==null?(it=it.index,it<k?(Q.flags|=67108866,k):it):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function S(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,k,it,xt){return k===null||k.tag!==6?(k=lf(it,Q.mode,xt),k.return=Q,k):(k=u(k,it),k.return=Q,k)}function G(Q,k,it,xt){var ie=it.type;return ie===E?_t(Q,k,it.props.children,xt,it.key):k!==null&&(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===z&&yr(ie)===k.type)?(k=u(k,it.props),bo(k,it),k.return=Q,k):(k=Vl(it.type,it.key,it.props,null,Q.mode,xt),bo(k,it),k.return=Q,k)}function rt(Q,k,it,xt){return k===null||k.tag!==4||k.stateNode.containerInfo!==it.containerInfo||k.stateNode.implementation!==it.implementation?(k=cf(it,Q.mode,xt),k.return=Q,k):(k=u(k,it.children||[]),k.return=Q,k)}function _t(Q,k,it,xt,ie){return k===null||k.tag!==7?(k=mr(it,Q.mode,xt,ie),k.return=Q,k):(k=u(k,it),k.return=Q,k)}function yt(Q,k,it){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=lf(""+k,Q.mode,it),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return it=Vl(k.type,k.key,k.props,null,Q.mode,it),bo(it,k),it.return=Q,it;case b:return k=cf(k,Q.mode,it),k.return=Q,k;case z:return k=yr(k),yt(Q,k,it)}if(dt(k)||q(k))return k=mr(k,Q.mode,it,null),k.return=Q,k;if(typeof k.then=="function")return yt(Q,Zl(k),it);if(k.$$typeof===D)return yt(Q,Wl(Q,k),it);Kl(Q,k)}return null}function ct(Q,k,it,xt){var ie=k!==null?k.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return ie!==null?null:C(Q,k,""+it,xt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case y:return it.key===ie?G(Q,k,it,xt):null;case b:return it.key===ie?rt(Q,k,it,xt):null;case z:return it=yr(it),ct(Q,k,it,xt)}if(dt(it)||q(it))return ie!==null?null:_t(Q,k,it,xt,null);if(typeof it.then=="function")return ct(Q,k,Zl(it),xt);if(it.$$typeof===D)return ct(Q,k,Wl(Q,it),xt);Kl(Q,it)}return null}function ht(Q,k,it,xt,ie){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Q=Q.get(it)||null,C(k,Q,""+xt,ie);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return Q=Q.get(xt.key===null?it:xt.key)||null,G(k,Q,xt,ie);case b:return Q=Q.get(xt.key===null?it:xt.key)||null,rt(k,Q,xt,ie);case z:return xt=yr(xt),ht(Q,k,it,xt,ie)}if(dt(xt)||q(xt))return Q=Q.get(it)||null,_t(k,Q,xt,ie,null);if(typeof xt.then=="function")return ht(Q,k,it,Zl(xt),ie);if(xt.$$typeof===D)return ht(Q,k,it,Wl(k,xt),ie);Kl(k,xt)}return null}function Vt(Q,k,it,xt){for(var ie=null,Le=null,Wt=k,he=k=0,be=null;Wt!==null&&he<it.length;he++){Wt.index>he?(be=Wt,Wt=null):be=Wt.sibling;var Ne=ct(Q,Wt,it[he],xt);if(Ne===null){Wt===null&&(Wt=be);break}e&&Wt&&Ne.alternate===null&&i(Q,Wt),k=d(Ne,k,he),Le===null?ie=Ne:Le.sibling=Ne,Le=Ne,Wt=be}if(he===it.length)return s(Q,Wt),Te&&$i(Q,he),ie;if(Wt===null){for(;he<it.length;he++)Wt=yt(Q,it[he],xt),Wt!==null&&(k=d(Wt,k,he),Le===null?ie=Wt:Le.sibling=Wt,Le=Wt);return Te&&$i(Q,he),ie}for(Wt=o(Wt);he<it.length;he++)be=ht(Wt,Q,he,it[he],xt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?he:be.key),k=d(be,k,he),Le===null?ie=be:Le.sibling=be,Le=be);return e&&Wt.forEach(function(Za){return i(Q,Za)}),Te&&$i(Q,he),ie}function ae(Q,k,it,xt){if(it==null)throw Error(r(151));for(var ie=null,Le=null,Wt=k,he=k=0,be=null,Ne=it.next();Wt!==null&&!Ne.done;he++,Ne=it.next()){Wt.index>he?(be=Wt,Wt=null):be=Wt.sibling;var Za=ct(Q,Wt,Ne.value,xt);if(Za===null){Wt===null&&(Wt=be);break}e&&Wt&&Za.alternate===null&&i(Q,Wt),k=d(Za,k,he),Le===null?ie=Za:Le.sibling=Za,Le=Za,Wt=be}if(Ne.done)return s(Q,Wt),Te&&$i(Q,he),ie;if(Wt===null){for(;!Ne.done;he++,Ne=it.next())Ne=yt(Q,Ne.value,xt),Ne!==null&&(k=d(Ne,k,he),Le===null?ie=Ne:Le.sibling=Ne,Le=Ne);return Te&&$i(Q,he),ie}for(Wt=o(Wt);!Ne.done;he++,Ne=it.next())Ne=ht(Wt,Q,he,Ne.value,xt),Ne!==null&&(e&&Ne.alternate!==null&&Wt.delete(Ne.key===null?he:Ne.key),k=d(Ne,k,he),Le===null?ie=Ne:Le.sibling=Ne,Le=Ne);return e&&Wt.forEach(function(cM){return i(Q,cM)}),Te&&$i(Q,he),ie}function ke(Q,k,it,xt){if(typeof it=="object"&&it!==null&&it.type===E&&it.key===null&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case y:t:{for(var ie=it.key;k!==null;){if(k.key===ie){if(ie=it.type,ie===E){if(k.tag===7){s(Q,k.sibling),xt=u(k,it.props.children),xt.return=Q,Q=xt;break t}}else if(k.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===z&&yr(ie)===k.type){s(Q,k.sibling),xt=u(k,it.props),bo(xt,it),xt.return=Q,Q=xt;break t}s(Q,k);break}else i(Q,k);k=k.sibling}it.type===E?(xt=mr(it.props.children,Q.mode,xt,it.key),xt.return=Q,Q=xt):(xt=Vl(it.type,it.key,it.props,null,Q.mode,xt),bo(xt,it),xt.return=Q,Q=xt)}return S(Q);case b:t:{for(ie=it.key;k!==null;){if(k.key===ie)if(k.tag===4&&k.stateNode.containerInfo===it.containerInfo&&k.stateNode.implementation===it.implementation){s(Q,k.sibling),xt=u(k,it.children||[]),xt.return=Q,Q=xt;break t}else{s(Q,k);break}else i(Q,k);k=k.sibling}xt=cf(it,Q.mode,xt),xt.return=Q,Q=xt}return S(Q);case z:return it=yr(it),ke(Q,k,it,xt)}if(dt(it))return Vt(Q,k,it,xt);if(q(it)){if(ie=q(it),typeof ie!="function")throw Error(r(150));return it=ie.call(it),ae(Q,k,it,xt)}if(typeof it.then=="function")return ke(Q,k,Zl(it),xt);if(it.$$typeof===D)return ke(Q,k,Wl(Q,it),xt);Kl(Q,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,k!==null&&k.tag===6?(s(Q,k.sibling),xt=u(k,it),xt.return=Q,Q=xt):(s(Q,k),xt=lf(it,Q.mode,xt),xt.return=Q,Q=xt),S(Q)):s(Q,k)}return function(Q,k,it,xt){try{Mo=0;var ie=ke(Q,k,it,xt);return us=null,ie}catch(Wt){if(Wt===cs||Wt===Yl)throw Wt;var Le=ii(29,Wt,null,Q.mode);return Le.lanes=xt,Le.return=Q,Le}}}var Mr=e0(!0),n0=e0(!1),La=!1;function Sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ze&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=Gl(e),Fm(e,null,s),i}return Hl(e,o,i,s),Gl(e)}function Eo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Bi(e,s)}}function bf(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var u=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var S={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,s=s.next}while(s!==null);d===null?u=d=i:d=d.next=i}else u=d=i;s={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Ef=!1;function To(){if(Ef){var e=ls;if(e!==null)throw e}}function Ao(e,i,s,o){Ef=!1;var u=e.updateQueue;La=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var G=C,rt=G.next;G.next=null,S===null?d=rt:S.next=rt,S=G;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,C=_t.lastBaseUpdate,C!==S&&(C===null?_t.firstBaseUpdate=rt:C.next=rt,_t.lastBaseUpdate=G))}if(d!==null){var yt=u.baseState;S=0,_t=rt=G=null,C=d;do{var ct=C.lane&-536870913,ht=ct!==C.lane;if(ht?(Me&ct)===ct:(o&ct)===ct){ct!==0&&ct===os&&(Ef=!0),_t!==null&&(_t=_t.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Vt=e,ae=C;ct=i;var ke=s;switch(ae.tag){case 1:if(Vt=ae.payload,typeof Vt=="function"){yt=Vt.call(ke,yt,ct);break t}yt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ae.payload,ct=typeof Vt=="function"?Vt.call(ke,yt,ct):Vt,ct==null)break t;yt=g({},yt,ct);break t;case 2:La=!0}}ct=C.callback,ct!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ct]:ht.push(ct))}else ht={lane:ct,tag:C.tag,payload:C.payload,callback:C.callback,next:null},_t===null?(rt=_t=ht,G=yt):_t=_t.next=ht,S|=ct;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ht=C,C=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);_t===null&&(G=yt),u.baseState=G,u.firstBaseUpdate=rt,u.lastBaseUpdate=_t,d===null&&(u.shared.lanes=0),Fa|=S,e.lanes=S,e.memoizedState=yt}}function i0(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function a0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)i0(s[e],i)}var fs=N(null),Ql=N(0);function r0(e,i){e=ua,at(Ql,e),at(fs,i),ua=e|i.baseLanes}function Tf(){at(Ql,ua),at(fs,fs.current)}function Af(){ua=Ql.current,Z(fs),Z(Ql)}var ai=N(null),_i=null;function za(e){var i=e.alternate;at(un,un.current&1),at(ai,e),_i===null&&(i===null||fs.current!==null||i.memoizedState!==null)&&(_i=e)}function wf(e){at(un,un.current),at(ai,e),_i===null&&(_i=e)}function s0(e){e.tag===22?(at(un,un.current),at(ai,e),_i===null&&(_i=e)):Pa()}function Pa(){at(un,un.current),at(ai,ai.current)}function ri(e){Z(ai),_i===e&&(_i=null),Z(un)}var un=N(0);function Jl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Nh(s)||Oh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var na=0,fe=null,Ge=null,pn=null,$l=!1,hs=!1,br=!1,tc=0,wo=0,ds=null,$y=0;function an(){throw Error(r(321))}function Rf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ni(e[s],i[s]))return!1;return!0}function Cf(e,i,s,o,u,d){return na=d,fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?k0:Xf,br=!1,d=s(o,u),br=!1,hs&&(d=l0(i,s,o,u)),o0(e),d}function o0(e){B.H=Do;var i=Ge!==null&&Ge.next!==null;if(na=0,pn=Ge=fe=null,$l=!1,wo=0,ds=null,i)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&Xl(e)&&(mn=!0))}function l0(e,i,s,o){fe=e;var u=0;do{if(hs&&(ds=null),wo=0,hs=!1,25<=u)throw Error(r(301));if(u+=1,pn=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=X0,d=i(s,o)}while(hs);return d}function tS(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Ro(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(fe.flags|=1024),i}function Df(){var e=tc!==0;return tc=0,e}function Uf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Lf(e){if($l){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}$l=!1}na=0,pn=Ge=fe=null,hs=!1,wo=tc=0,ds=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?fe.memoizedState=pn=e:pn=pn.next=e,pn}function fn(){if(Ge===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=pn===null?fe.memoizedState:pn.next;if(i!==null)pn=i,Ge=e;else{if(e===null)throw fe.alternate===null?Error(r(467)):Error(r(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},pn===null?fe.memoizedState=pn=e:pn=pn.next=e}return pn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(e){var i=wo;return wo+=1,ds===null&&(ds=[]),e=Jm(ds,e,i),i=fe,(pn===null?i.memoizedState:pn.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?k0:Xf),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ro(e);if(e.$$typeof===D)return Dn(e)}throw Error(r(438,String(e)))}function Nf(e){var i=null,s=fe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ec(),fe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=R;return i.index++,s}function ia(e,i){return typeof i=="function"?i(e):i}function ic(e){var i=fn();return Of(i,Ge,e)}function Of(e,i,s){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var C=S=null,G=null,rt=i,_t=!1;do{var yt=rt.lane&-536870913;if(yt!==rt.lane?(Me&yt)===yt:(na&yt)===yt){var ct=rt.revertLane;if(ct===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),yt===os&&(_t=!0);else if((na&ct)===ct){rt=rt.next,ct===os&&(_t=!0);continue}else yt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(C=G=yt,S=d):G=G.next=yt,fe.lanes|=ct,Fa|=ct;yt=rt.action,br&&s(d,yt),d=rt.hasEagerState?rt.eagerState:s(d,yt)}else ct={lane:yt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(C=G=ct,S=d):G=G.next=ct,fe.lanes|=yt,Fa|=yt;rt=rt.next}while(rt!==null&&rt!==i);if(G===null?S=d:G.next=C,!ni(d,e.memoizedState)&&(mn=!0,_t&&(s=ls,s!==null)))throw s;e.memoizedState=d,e.baseState=S,e.baseQueue=G,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function zf(e){var i=fn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=e;var o=s.dispatch,u=s.pending,d=i.memoizedState;if(u!==null){s.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);ni(d,i.memoizedState)||(mn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function c0(e,i,s){var o=fe,u=fn(),d=Te;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var S=!ni((Ge||u).memoizedState,s);if(S&&(u.memoizedState=s,mn=!0),u=u.queue,If(h0.bind(null,o,u,e),[e]),u.getSnapshot!==i||S||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,ps(9,{destroy:void 0},f0.bind(null,o,u,s,i),null),je===null)throw Error(r(349));d||(na&127)!==0||u0(o,i,s)}return s}function u0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=fe.updateQueue,i===null?(i=ec(),fe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function f0(e,i,s,o){i.value=s,i.getSnapshot=o,d0(i)&&p0(e)}function h0(e,i,s){return s(function(){d0(i)&&p0(e)})}function d0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ni(e,s)}catch{return!0}}function p0(e){var i=pr(e,2);i!==null&&Qn(i,e,2)}function Pf(e){var i=Vn();if(typeof e=="function"){var s=e;if(e=s(),br){Qt(!0);try{s()}finally{Qt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:e},i}function m0(e,i,s,o){return e.baseState=s,Of(e,Ge,typeof o=="function"?o:ia)}function eS(e,i,s,o,u){if(sc(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};B.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,g0(i,d)):(d.next=s.next,i.pending=s.next=d)}}function g0(e,i){var s=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=B.T,S={};B.T=S;try{var C=s(u,o),G=B.S;G!==null&&G(S,C),_0(e,i,C)}catch(rt){Bf(e,i,rt)}finally{d!==null&&S.types!==null&&(d.types=S.types),B.T=d}}else try{d=s(u,o),_0(e,i,d)}catch(rt){Bf(e,i,rt)}}function _0(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){v0(e,i,o)},function(o){return Bf(e,i,o)}):v0(e,i,s)}function v0(e,i,s){i.status="fulfilled",i.value=s,x0(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,g0(e,s)))}function Bf(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,x0(i),i=i.next;while(i!==o)}e.action=null}function x0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function y0(e,i){return i}function S0(e,i){if(Te){var s=je.formState;if(s!==null){t:{var o=fe;if(Te){if(Qe){e:{for(var u=Qe,d=gi;u.nodeType!==8;){if(!d){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qe=vi(u.nextSibling),o=u.data==="F!";break t}}Da(o)}o=!1}o&&(i=s[0])}}return s=Vn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:y0,lastRenderedState:i},s.queue=o,s=H0.bind(null,fe,o),o.dispatch=s,o=Pf(!1),d=kf.bind(null,fe,!1,o.queue),o=Vn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,s=eS.bind(null,fe,u,d,s),u.dispatch=s,o.memoizedState=e,[i,s,!1]}function M0(e){var i=fn();return b0(i,Ge,e)}function b0(e,i,s){if(i=Of(e,i,y0)[0],e=ic(ia)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ro(i)}catch(S){throw S===cs?Yl:S}else o=i;i=fn();var u=i.queue,d=u.dispatch;return s!==i.memoizedState&&(fe.flags|=2048,ps(9,{destroy:void 0},nS.bind(null,u,s),null)),[o,d,e]}function nS(e,i){e.action=i}function E0(e){var i=fn(),s=Ge;if(s!==null)return b0(i,s,e);fn(),i=i.memoizedState,s=fn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function ps(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=fe.updateQueue,i===null&&(i=ec(),fe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function T0(){return fn().memoizedState}function ac(e,i,s,o){var u=Vn();fe.flags|=e,u.memoizedState=ps(1|i,{destroy:void 0},s,o===void 0?null:o)}function rc(e,i,s,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Ge!==null&&o!==null&&Rf(o,Ge.memoizedState.deps)?u.memoizedState=ps(i,d,s,o):(fe.flags|=e,u.memoizedState=ps(1|i,d,s,o))}function A0(e,i){ac(8390656,8,e,i)}function If(e,i){rc(2048,8,e,i)}function iS(e){fe.flags|=4;var i=fe.updateQueue;if(i===null)i=ec(),fe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function w0(e){var i=fn().memoizedState;return iS({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function R0(e,i){return rc(4,2,e,i)}function C0(e,i){return rc(4,4,e,i)}function D0(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function U0(e,i,s){s=s!=null?s.concat([e]):null,rc(4,4,D0.bind(null,i,e),s)}function Ff(){}function L0(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&Rf(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function N0(e,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&Rf(i,o[1]))return o[0];if(o=e(),br){Qt(!0);try{e()}finally{Qt(!1)}}return s.memoizedState=[o,i],o}function Hf(e,i,s){return s===void 0||(na&1073741824)!==0&&(Me&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=Og(),fe.lanes|=e,Fa|=e,s)}function O0(e,i,s,o){return ni(s,i)?s:fs.current!==null?(e=Hf(e,s,o),ni(e,i)||(mn=!0),e):(na&42)===0||(na&1073741824)!==0&&(Me&261930)===0?(mn=!0,e.memoizedState=s):(e=Og(),fe.lanes|=e,Fa|=e,i)}function z0(e,i,s,o,u){var d=tt.p;tt.p=d!==0&&8>d?d:8;var S=B.T,C={};B.T=C,kf(e,!1,i,s);try{var G=u(),rt=B.S;if(rt!==null&&rt(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _t=Jy(G,o);Co(e,i,_t,li(e))}else Co(e,i,o,li(e))}catch(yt){Co(e,i,{then:function(){},status:"rejected",reason:yt},li())}finally{tt.p=d,S!==null&&C.types!==null&&(S.types=C.types),B.T=S}}function aS(){}function Gf(e,i,s,o){if(e.tag!==5)throw Error(r(476));var u=P0(e).queue;z0(e,u,i,Y,s===null?aS:function(){return B0(e),s(o)})}function P0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function B0(e){var i=P0(e);i.next===null&&(i=e.alternate.memoizedState),Co(e,i.next.queue,{},li())}function Vf(){return Dn(qo)}function I0(){return fn().memoizedState}function F0(){return fn().memoizedState}function rS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();e=Na(s);var o=Oa(i,e,s);o!==null&&(Qn(o,i,s),Eo(o,i,s)),i={cache:_f()},e.payload=i;return}i=i.return}}function sS(e,i,s){var o=li();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},sc(e)?G0(i,s):(s=sf(e,i,s,o),s!==null&&(Qn(s,e,o),V0(s,i,o)))}function H0(e,i,s){var o=li();Co(e,i,s,o)}function Co(e,i,s,o){var u={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(sc(e))G0(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,C=d(S,s);if(u.hasEagerState=!0,u.eagerState=C,ni(C,S))return Hl(e,i,u,0),je===null&&Fl(),!1}catch{}if(s=sf(e,i,u,o),s!==null)return Qn(s,e,o),V0(s,i,o),!0}return!1}function kf(e,i,s,o){if(o={lane:2,revertLane:Sh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(i)throw Error(r(479))}else i=sf(e,s,o,2),i!==null&&Qn(i,e,2)}function sc(e){var i=e.alternate;return e===fe||i!==null&&i===fe}function G0(e,i){hs=$l=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function V0(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,Bi(e,s)}}var Do={readContext:Dn,use:nc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};Do.useEffectEvent=an;var k0={readContext:Dn,use:nc,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:A0,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,ac(4194308,4,D0.bind(null,i,e),s)},useLayoutEffect:function(e,i){return ac(4194308,4,e,i)},useInsertionEffect:function(e,i){ac(4,2,e,i)},useMemo:function(e,i){var s=Vn();i=i===void 0?null:i;var o=e();if(br){Qt(!0);try{e()}finally{Qt(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=Vn();if(s!==void 0){var u=s(i);if(br){Qt(!0);try{s(i)}finally{Qt(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=sS.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=Pf(e);var i=e.queue,s=H0.bind(null,fe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Ff,useDeferredValue:function(e,i){var s=Vn();return Hf(s,e,i)},useTransition:function(){var e=Pf(!1);return e=z0.bind(null,fe,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=fe,u=Vn();if(Te){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),je===null)throw Error(r(349));(Me&127)!==0||u0(o,i,s)}u.memoizedState=s;var d={value:s,getSnapshot:i};return u.queue=d,A0(h0.bind(null,o,d,e),[e]),o.flags|=2048,ps(9,{destroy:void 0},f0.bind(null,o,d,s,i),null),s},useId:function(){var e=Vn(),i=je.identifierPrefix;if(Te){var s=Hi,o=Fi;s=(o&~(1<<32-Bt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=tc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=$y++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Vf,useFormState:S0,useActionState:S0,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=kf.bind(null,fe,!0,s),s.dispatch=i,[e,i]},useMemoCache:Nf,useCacheRefresh:function(){return Vn().memoizedState=rS.bind(null,fe)},useEffectEvent:function(e){var i=Vn(),s={impl:e};return i.memoizedState=s,function(){if((ze&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Xf={readContext:Dn,use:nc,useCallback:L0,useContext:Dn,useEffect:If,useImperativeHandle:U0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:N0,useReducer:ic,useRef:T0,useState:function(){return ic(ia)},useDebugValue:Ff,useDeferredValue:function(e,i){var s=fn();return O0(s,Ge.memoizedState,e,i)},useTransition:function(){var e=ic(ia)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:c0,useId:I0,useHostTransitionStatus:Vf,useFormState:M0,useActionState:M0,useOptimistic:function(e,i){var s=fn();return m0(s,Ge,e,i)},useMemoCache:Nf,useCacheRefresh:F0};Xf.useEffectEvent=w0;var X0={readContext:Dn,use:nc,useCallback:L0,useContext:Dn,useEffect:If,useImperativeHandle:U0,useInsertionEffect:R0,useLayoutEffect:C0,useMemo:N0,useReducer:zf,useRef:T0,useState:function(){return zf(ia)},useDebugValue:Ff,useDeferredValue:function(e,i){var s=fn();return Ge===null?Hf(s,e,i):O0(s,Ge.memoizedState,e,i)},useTransition:function(){var e=zf(ia)[0],i=fn().memoizedState;return[typeof e=="boolean"?e:Ro(e),i]},useSyncExternalStore:c0,useId:I0,useHostTransitionStatus:Vf,useFormState:E0,useActionState:E0,useOptimistic:function(e,i){var s=fn();return Ge!==null?m0(s,Ge,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Nf,useCacheRefresh:F0};X0.useEffectEvent=w0;function Wf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var qf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=li(),u=Na(o);u.payload=i,s!=null&&(u.callback=s),i=Oa(e,u,o),i!==null&&(Qn(i,e,o),Eo(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=li(),u=Na(o);u.tag=1,u.payload=i,s!=null&&(u.callback=s),i=Oa(e,u,o),i!==null&&(Qn(i,e,o),Eo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=li(),o=Na(s);o.tag=2,i!=null&&(o.callback=i),i=Oa(e,o,s),i!==null&&(Qn(i,e,s),Eo(i,e,s))}};function W0(e,i,s,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!go(s,o)||!go(u,d):!0}function q0(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&qf.enqueueReplaceState(i,i.state,null)}function Er(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var u in e)s[u]===void 0&&(s[u]=e[u])}return s}function Y0(e){Il(e)}function j0(e){console.error(e)}function Z0(e){Il(e)}function oc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function K0(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Yf(e,i,s){return s=Na(s),s.tag=3,s.payload={element:null},s.callback=function(){oc(e,i)},s}function Q0(e){return e=Na(e),e.tag=3,e}function J0(e,i,s,o){var u=s.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){K0(i,s,o)}}var S=s.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){K0(i,s,o),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function oS(e,i,s,o,u){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&ss(i,s,u,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return _i===null?xc():s.alternate===null&&rn===0&&(rn=3),s.flags&=-257,s.flags|=65536,s.lanes=u,o===jl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),vh(e,o,u)),!1;case 22:return s.flags|=65536,o===jl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),vh(e,o,u)),!1}throw Error(r(435,s.tag))}return vh(e,o,u),xc(),!1}if(Te)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==hf&&(e=Error(r(422),{cause:o}),xo(di(e,s)))):(o!==hf&&(i=Error(r(423),{cause:o}),xo(di(i,s))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,s),u=Yf(e.stateNode,o,u),bf(e,u),rn!==4&&(rn=2)),!1;var d=Error(r(520),{cause:o});if(d=di(d,s),Io===null?Io=[d]:Io.push(d),rn!==4&&(rn=2),i===null)return!0;o=di(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=u&-u,s.lanes|=e,e=Yf(s.stateNode,o,e),bf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ha===null||!Ha.has(d))))return s.flags|=65536,u&=-u,s.lanes|=u,u=Q0(u),J0(u,e,s,o),bf(s,u),!1}s=s.return}while(s!==null);return!1}var jf=Error(r(461)),mn=!1;function Un(e,i,s,o){i.child=e===null?n0(i,null,s,o):Mr(i,e.child,s,o)}function $0(e,i,s,o,u){s=s.render;var d=i.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return vr(i),o=Cf(e,i,s,S,d,u),C=Df(),e!==null&&!mn?(Uf(e,i,u),aa(e,i,u)):(Te&&C&&uf(i),i.flags|=1,Un(e,i,o,u),i.child)}function tg(e,i,s,o,u){if(e===null){var d=s.type;return typeof d=="function"&&!of(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,eg(e,i,d,o,u)):(e=Vl(s.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!nh(e,u)){var S=d.memoizedProps;if(s=s.compare,s=s!==null?s:go,s(S,o)&&e.ref===i.ref)return aa(e,i,u)}return i.flags|=1,e=Ji(d,o),e.ref=i.ref,e.return=i,i.child=e}function eg(e,i,s,o,u){if(e!==null){var d=e.memoizedProps;if(go(d,o)&&e.ref===i.ref)if(mn=!1,i.pendingProps=o=d,nh(e,u))(e.flags&131072)!==0&&(mn=!0);else return i.lanes=e.lanes,aa(e,i,u)}return Zf(e,i,s,o,u)}function ng(e,i,s,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(o=i.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,i.child=null;return ig(e,i,d,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ql(i,d!==null?d.cachePool:null),d!==null?r0(i,d):Tf(),s0(i);else return o=i.lanes=536870912,ig(e,i,d!==null?d.baseLanes|s:s,s,o)}else d!==null?(ql(i,d.cachePool),r0(i,d),Pa(),i.memoizedState=null):(e!==null&&ql(i,null),Tf(),Pa());return Un(e,i,u,s),i.child}function Uo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ig(e,i,s,o,u){var d=xf();return d=d===null?null:{parent:dn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&ql(i,null),Tf(),s0(i),e!==null&&ss(e,i,o,!0),i.childLanes=u,null}function lc(e,i){return i=uc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function ag(e,i,s){return Mr(i,e.child,null,s),e=lc(i,i.pendingProps),e.flags|=2,ri(i),i.memoizedState=null,e}function lS(e,i,s){var o=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=lc(i,o),i.lanes=536870912,Uo(null,e);if(wf(i),(e=Qe)?(e=g_(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=Gm(e),s.return=i,i.child=s,Cn=i,Qe=null)):e=null,e===null)throw Da(i);return i.lanes=536870912,null}return lc(i,o)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(wf(i),u)if(i.flags&256)i.flags&=-257,i=ag(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(r(558));else if(mn||ss(e,i,s,!1),u=(s&e.childLanes)!==0,mn||u){if(o=je,o!==null&&(S=Wr(o,s),S!==0&&S!==d.retryLane))throw d.retryLane=S,pr(e,S),Qn(o,e,S),jf;xc(),i=ag(e,i,s)}else e=d.treeContext,Qe=vi(S.nextSibling),Cn=i,Te=!0,Ca=null,gi=!1,e!==null&&Xm(i,e),i=lc(i,o),i.flags|=4096;return i}return e=Ji(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function cc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Zf(e,i,s,o,u){return vr(i),s=Cf(e,i,s,o,void 0,u),o=Df(),e!==null&&!mn?(Uf(e,i,u),aa(e,i,u)):(Te&&o&&uf(i),i.flags|=1,Un(e,i,s,u),i.child)}function rg(e,i,s,o,u,d){return vr(i),i.updateQueue=null,s=l0(i,o,s,u),o0(e),o=Df(),e!==null&&!mn?(Uf(e,i,d),aa(e,i,d)):(Te&&o&&uf(i),i.flags|=1,Un(e,i,s,d),i.child)}function sg(e,i,s,o,u){if(vr(i),i.stateNode===null){var d=ns,S=s.contextType;typeof S=="object"&&S!==null&&(d=Dn(S)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=qf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Sf(i),S=s.contextType,d.context=typeof S=="object"&&S!==null?Dn(S):ns,d.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(Wf(i,s,S,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&qf.enqueueReplaceState(d,d.state,null),Ao(i,o,d,u),To(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var C=i.memoizedProps,G=Er(s,C);d.props=G;var rt=d.context,_t=s.contextType;S=ns,typeof _t=="object"&&_t!==null&&(S=Dn(_t));var yt=s.getDerivedStateFromProps;_t=typeof yt=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,_t||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||rt!==S)&&q0(i,d,o,S),La=!1;var ct=i.memoizedState;d.state=ct,Ao(i,o,d,u),To(),rt=i.memoizedState,C||ct!==rt||La?(typeof yt=="function"&&(Wf(i,s,yt,o),rt=i.memoizedState),(G=La||W0(i,s,G,o,ct,rt,S))?(_t||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=rt),d.props=o,d.state=rt,d.context=S,o=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Mf(e,i),S=i.memoizedProps,_t=Er(s,S),d.props=_t,yt=i.pendingProps,ct=d.context,rt=s.contextType,G=ns,typeof rt=="object"&&rt!==null&&(G=Dn(rt)),C=s.getDerivedStateFromProps,(rt=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==yt||ct!==G)&&q0(i,d,o,G),La=!1,ct=i.memoizedState,d.state=ct,Ao(i,o,d,u),To();var ht=i.memoizedState;S!==yt||ct!==ht||La||e!==null&&e.dependencies!==null&&Xl(e.dependencies)?(typeof C=="function"&&(Wf(i,s,C,o),ht=i.memoizedState),(_t=La||W0(i,s,_t,o,ct,ht,G)||e!==null&&e.dependencies!==null&&Xl(e.dependencies))?(rt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ht,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ht,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ht),d.props=o,d.state=ht,d.context=G,o=_t):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ct===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,cc(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Mr(i,e.child,null,u),i.child=Mr(i,null,s,u)):Un(e,i,s,u),i.memoizedState=d.state,e=i.child):e=aa(e,i,u),e}function og(e,i,s,o){return gr(),i.flags|=256,Un(e,i,s,o),i.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(e){return{baseLanes:e,cachePool:Km()}}function Jf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=oi),e}function lg(e,i,s){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Te){if(u?za(i):Pa(),(e=Qe)?(e=g_(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},s=Gm(e),s.return=i,i.child=s,Cn=i,Qe=null)):e=null,e===null)throw Da(i);return Oh(e)?i.lanes=32:i.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Pa(),u=i.mode,C=uc({mode:"hidden",children:C},u),o=mr(o,u,s,null),C.return=i,o.return=i,C.sibling=o,i.child=C,o=i.child,o.memoizedState=Qf(s),o.childLanes=Jf(e,S,s),i.memoizedState=Kf,Uo(null,o)):(za(i),$f(i,C))}var G=e.memoizedState;if(G!==null&&(C=G.dehydrated,C!==null)){if(d)i.flags&256?(za(i),i.flags&=-257,i=th(e,i,s)):i.memoizedState!==null?(Pa(),i.child=e.child,i.flags|=128,i=null):(Pa(),C=o.fallback,u=i.mode,o=uc({mode:"visible",children:o.children},u),C=mr(C,u,s,null),C.flags|=2,o.return=i,C.return=i,o.sibling=C,i.child=o,Mr(i,e.child,null,s),o=i.child,o.memoizedState=Qf(s),o.childLanes=Jf(e,S,s),i.memoizedState=Kf,i=Uo(null,o));else if(za(i),Oh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var rt=S.dgst;S=rt,o=Error(r(419)),o.stack="",o.digest=S,xo({value:o,source:null,stack:null}),i=th(e,i,s)}else if(mn||ss(e,i,s,!1),S=(s&e.childLanes)!==0,mn||S){if(S=je,S!==null&&(o=Wr(S,s),o!==0&&o!==G.retryLane))throw G.retryLane=o,pr(e,o),Qn(S,e,o),jf;Nh(C)||xc(),i=th(e,i,s)}else Nh(C)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,Qe=vi(C.nextSibling),Cn=i,Te=!0,Ca=null,gi=!1,e!==null&&Xm(i,e),i=$f(i,o.children),i.flags|=4096);return i}return u?(Pa(),C=o.fallback,u=i.mode,G=e.child,rt=G.sibling,o=Ji(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,rt!==null?C=Ji(rt,C):(C=mr(C,u,s,null),C.flags|=2),C.return=i,o.return=i,o.sibling=C,i.child=o,Uo(null,o),o=i.child,C=e.child.memoizedState,C===null?C=Qf(s):(u=C.cachePool,u!==null?(G=dn._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Km(),C={baseLanes:C.baseLanes|s,cachePool:u}),o.memoizedState=C,o.childLanes=Jf(e,S,s),i.memoizedState=Kf,Uo(e.child,o)):(za(i),s=e.child,e=s.sibling,s=Ji(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=s,i.memoizedState=null,s)}function $f(e,i){return i=uc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function uc(e,i){return e=ii(22,e,null,i),e.lanes=0,e}function th(e,i,s){return Mr(i,e.child,null,s),e=$f(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function cg(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),mf(e.return,i,s)}function eh(e,i,s,o,u,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:u,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=s,S.tailMode=u,S.treeForkCount=d)}function ug(e,i,s){var o=i.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=un.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,at(un,S),Un(e,i,o,s),o=Te?vo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cg(e,s,i);else if(e.tag===19)cg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(s=i.child,u=null;s!==null;)e=s.alternate,e!==null&&Jl(e)===null&&(u=s),s=s.sibling;s=u,s===null?(u=i.child,i.child=null):(u=s.sibling,s.sibling=null),eh(i,!1,u,s,d,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Jl(e)===null){i.child=u;break}e=u.sibling,u.sibling=s,s=u,u=e}eh(i,!0,s,null,d,o);break;case"together":eh(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function aa(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Fa|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ss(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,s=Ji(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Ji(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function nh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Xl(e)))}function cS(e,i,s){switch(i.tag){case 3:Lt(i,i.stateNode.containerInfo),Ua(i,dn,e.memoizedState.cache),gr();break;case 27:case 5:Jt(i);break;case 4:Lt(i,i.stateNode.containerInfo);break;case 10:Ua(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,wf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(za(i),i.flags|=128,null):(s&i.child.childLanes)!==0?lg(e,i,s):(za(i),e=aa(e,i,s),e!==null?e.sibling:null);za(i);break;case 19:var u=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(ss(e,i,s,!1),o=(s&i.childLanes)!==0),u){if(o)return ug(e,i,s);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),at(un,un.current),o)break;return null;case 22:return i.lanes=0,ng(e,i,s,i.pendingProps);case 24:Ua(i,dn,e.memoizedState.cache)}return aa(e,i,s)}function fg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)mn=!0;else{if(!nh(e,s)&&(i.flags&128)===0)return mn=!1,cS(e,i,s);mn=(e.flags&131072)!==0}else mn=!1,Te&&(i.flags&1048576)!==0&&km(i,vo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=yr(i.elementType),i.type=e,typeof e=="function")of(e)?(o=Er(e,o),i.tag=1,i=sg(null,i,e,o,s)):(i.tag=0,i=Zf(null,i,e,o,s));else{if(e!=null){var u=e.$$typeof;if(u===T){i.tag=11,i=$0(null,i,e,o,s);break t}else if(u===O){i.tag=14,i=tg(null,i,e,o,s);break t}}throw i=et(e)||e,Error(r(306,i,""))}}return i;case 0:return Zf(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,u=Er(o,i.pendingProps),sg(e,i,o,u,s);case 3:t:{if(Lt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;u=d.element,Mf(e,i),Ao(i,o,null,s);var S=i.memoizedState;if(o=S.cache,Ua(i,dn,o),o!==d.cache&&gf(i,[dn],s,!0),To(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=og(e,i,o,s);break t}else if(o!==u){u=di(Error(r(424)),i),xo(u),i=og(e,i,o,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=vi(e.firstChild),Cn=i,Te=!0,Ca=null,gi=!0,s=n0(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(gr(),o===u){i=aa(e,i,s);break t}Un(e,i,o,s)}i=i.child}return i;case 26:return cc(e,i),e===null?(s=M_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Te||(s=i.type,e=i.pendingProps,o=Ac(ot.current).createElement(s),o[hn]=i,o[wn]=e,Ln(o,s,e),Mt(o),i.stateNode=o):i.memoizedState=M_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Jt(i),e===null&&Te&&(o=i.stateNode=x_(i.type,i.pendingProps,ot.current),Cn=i,gi=!0,u=Qe,Xa(i.type)?(zh=u,Qe=vi(o.firstChild)):Qe=u),Un(e,i,i.pendingProps.children,s),cc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Te&&((u=o=Qe)&&(o=FS(o,i.type,i.pendingProps,gi),o!==null?(i.stateNode=o,Cn=i,Qe=vi(o.firstChild),gi=!1,u=!0):u=!1),u||Da(i)),Jt(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,Dh(u,d)?o=null:S!==null&&Dh(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=Cf(e,i,tS,null,null,s),qo._currentValue=u),cc(e,i),Un(e,i,o,s),i.child;case 6:return e===null&&Te&&((e=s=Qe)&&(s=HS(s,i.pendingProps,gi),s!==null?(i.stateNode=s,Cn=i,Qe=null,e=!0):e=!1),e||Da(i)),null;case 13:return lg(e,i,s);case 4:return Lt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Mr(i,null,o,s):Un(e,i,o,s),i.child;case 11:return $0(e,i,i.type,i.pendingProps,s);case 7:return Un(e,i,i.pendingProps,s),i.child;case 8:return Un(e,i,i.pendingProps.children,s),i.child;case 12:return Un(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ua(i,i.type,o.value),Un(e,i,o.children,s),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,vr(i),u=Dn(u),o=o(u),i.flags|=1,Un(e,i,o,s),i.child;case 14:return tg(e,i,i.type,i.pendingProps,s);case 15:return eg(e,i,i.type,i.pendingProps,s);case 19:return ug(e,i,s);case 31:return lS(e,i,s);case 22:return ng(e,i,s,i.pendingProps);case 24:return vr(i),o=Dn(dn),e===null?(u=xf(),u===null&&(u=je,d=_f(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=s),u=d),i.memoizedState={parent:o,cache:u},Sf(i),Ua(i,dn,u)):((e.lanes&s)!==0&&(Mf(e,i),Ao(i,null,null,s),To()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Ua(i,dn,o)):(o=d.cache,Ua(i,dn,o),o!==u.cache&&gf(i,[dn],s,!0))),Un(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ra(e){e.flags|=4}function ih(e,i,s,o,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ig())e.flags|=8192;else throw Sr=jl,yf}else e.flags&=-16777217}function hg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!w_(i))if(Ig())e.flags|=8192;else throw Sr=jl,yf}function fc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,vs|=i)}function Lo(e,i){if(!Te)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Je(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)s|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function uS(e,i,s){var o=i.pendingProps;switch(ff(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(i),null;case 1:return Je(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),ea(dn),Ut(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rs(i)?ra(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,df())),Je(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(ra(i),d!==null?(Je(i),hg(i,d)):(Je(i),ih(i,u,null,o,s))):d?d!==e.memoizedState?(ra(i),Je(i),hg(i,d)):(Je(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&ra(i),Je(i),ih(i,u,e,o,s)),null;case 27:if(Ze(i),s=ot.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ra(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Je(i),null}e=lt.current,rs(i)?Wm(i):(e=x_(u,o,s),i.stateNode=e,ra(i))}return Je(i),null;case 5:if(Ze(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ra(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Je(i),null}if(d=lt.current,rs(i))Wm(i);else{var S=Ac(ot.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[hn]=i,d[wn]=o;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Ln(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ra(i)}}return Je(i),ih(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ra(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=ot.current,rs(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||l_(e.nodeValue,s)),e||Da(i,!0)}else e=Ac(e).createTextNode(o),e[hn]=i,i.stateNode=e}return Je(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=rs(i),s!==null){if(e===null){if(!o)throw Error(r(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[hn]=i}else gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),e=!1}else s=df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(r(558))}return Je(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[hn]=i}else gr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Je(i),u=!1}else u=df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),fc(i,i.updateQueue),Je(i),null);case 4:return Ut(),e===null&&Th(i.stateNode.containerInfo),Je(i),null;case 10:return ea(i.type),Je(i),null;case 19:if(Z(un),o=i.memoizedState,o===null)return Je(i),null;if(u=(i.flags&128)!==0,d=o.rendering,d===null)if(u)Lo(o,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Jl(e),d!==null){for(i.flags|=128,Lo(o,!1),e=d.updateQueue,i.updateQueue=e,fc(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)Hm(s,e),s=s.sibling;return at(un,un.current&1|2),Te&&$i(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&w()>gc&&(i.flags|=128,u=!0,Lo(o,!1),i.lanes=4194304)}else{if(!u)if(e=Jl(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,fc(i,e),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Te)return Je(i),null}else 2*w()-o.renderingStartTime>gc&&s!==536870912&&(i.flags|=128,u=!0,Lo(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=w(),e.sibling=null,s=un.current,at(un,u?s&1|2:s&1),Te&&$i(i,o.treeForkCount),e):(Je(i),null);case 22:case 23:return ri(i),Af(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Je(i),i.subtreeFlags&6&&(i.flags|=8192)):Je(i),s=i.updateQueue,s!==null&&fc(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&Z(xr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ea(dn),Je(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function fS(e,i){switch(ff(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ea(dn),Ut(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ze(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(r(340));gr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ri(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));gr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Z(un),null;case 4:return Ut(),null;case 10:return ea(i.type),null;case 22:case 23:return ri(i),Af(),e!==null&&Z(xr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ea(dn),null;case 25:return null;default:return null}}function dg(e,i){switch(ff(i),i.tag){case 3:ea(dn),Ut();break;case 26:case 27:case 5:Ze(i);break;case 4:Ut();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:Z(un);break;case 10:ea(i.type);break;case 22:case 23:ri(i),Af(),e!==null&&Z(xr);break;case 24:ea(dn)}}function No(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var u=o.next;s=u;do{if((s.tag&e)===e){o=void 0;var d=s.create,S=s.inst;o=d(),S.destroy=o}s=s.next}while(s!==u)}}catch(C){He(i,i.return,C)}}function Ba(e,i,s){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,u=i;var G=s,rt=C;try{rt()}catch(_t){He(u,G,_t)}}}o=o.next}while(o!==d)}}catch(_t){He(i,i.return,_t)}}function pg(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{a0(i,s)}catch(o){He(e,e.return,o)}}}function mg(e,i,s){s.props=Er(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){He(e,i,o)}}function Oo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(u){He(e,i,u)}}function Gi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(u){He(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(u){He(e,i,u)}else s.current=null}function gg(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(u){He(e,e.return,u)}}function ah(e,i,s){try{var o=e.stateNode;NS(o,e.type,s,i),o[wn]=i}catch(u){He(e,e.return,u)}}function _g(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function rh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sh(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ki));else if(o!==4&&(o===27&&Xa(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(sh(e,i,s),e=e.sibling;e!==null;)sh(e,i,s),e=e.sibling}function hc(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Xa(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(hc(e,i,s),e=e.sibling;e!==null;)hc(e,i,s),e=e.sibling}function vg(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Ln(i,o,s),i[hn]=e,i[wn]=s}catch(d){He(e,e.return,d)}}var sa=!1,gn=!1,oh=!1,xg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function hS(e,i){if(e=e.containerInfo,Rh=Nc,e=Um(e),$u(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var S=0,C=-1,G=-1,rt=0,_t=0,yt=e,ct=null;e:for(;;){for(var ht;yt!==s||u!==0&&yt.nodeType!==3||(C=S+u),yt!==d||o!==0&&yt.nodeType!==3||(G=S+o),yt.nodeType===3&&(S+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)ct=yt,yt=ht;for(;;){if(yt===e)break e;if(ct===s&&++rt===u&&(C=S),ct===d&&++_t===o&&(G=S),(ht=yt.nextSibling)!==null)break;yt=ct,ct=yt.parentNode}yt=ht}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ch={focusedElem:e,selectionRange:s},Nc=!1,Tn=i;Tn!==null;)if(i=Tn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Tn=e;else for(;Tn!==null;){switch(i=Tn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)u=e[s],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,u=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var Vt=Er(s.type,u);e=o.getSnapshotBeforeUpdate(Vt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){He(s,s.return,ae)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Lh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,Tn=e;break}Tn=i.return}}function yg(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:la(e,s),o&4&&No(5,s);break;case 1:if(la(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(S){He(s,s.return,S)}else{var u=Er(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(s,s.return,S)}}o&64&&pg(s),o&512&&Oo(s,s.return);break;case 3:if(la(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{a0(e,i)}catch(S){He(s,s.return,S)}}break;case 27:i===null&&o&4&&vg(s);case 26:case 5:la(e,s),i===null&&o&4&&gg(s),o&512&&Oo(s,s.return);break;case 12:la(e,s);break;case 31:la(e,s),o&4&&bg(e,s);break;case 13:la(e,s),o&4&&Eg(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=SS.bind(null,s),GS(e,s))));break;case 22:if(o=s.memoizedState!==null||sa,!o){i=i!==null&&i.memoizedState!==null||gn,u=sa;var d=gn;sa=o,(gn=i)&&!d?ca(e,s,(s.subtreeFlags&8772)!==0):la(e,s),sa=u,gn=d}break;case 30:break;default:la(e,s)}}function Sg(e){var i=e.alternate;i!==null&&(e.alternate=null,Sg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&U(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Yn=!1;function oa(e,i,s){for(s=s.child;s!==null;)Mg(e,i,s),s=s.sibling}function Mg(e,i,s){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,s)}catch{}switch(s.tag){case 26:gn||Gi(s,i),oa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:gn||Gi(s,i);var o=tn,u=Yn;Xa(s.type)&&(tn=s.stateNode,Yn=!1),oa(e,i,s),ko(s.stateNode),tn=o,Yn=u;break;case 5:gn||Gi(s,i);case 6:if(o=tn,u=Yn,tn=null,oa(e,i,s),tn=o,Yn=u,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(s.stateNode)}catch(d){He(s,i,d)}else try{tn.removeChild(s.stateNode)}catch(d){He(s,i,d)}break;case 18:tn!==null&&(Yn?(e=tn,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),As(e)):p_(tn,s.stateNode));break;case 4:o=tn,u=Yn,tn=s.stateNode.containerInfo,Yn=!0,oa(e,i,s),tn=o,Yn=u;break;case 0:case 11:case 14:case 15:Ba(2,s,i),gn||Ba(4,s,i),oa(e,i,s);break;case 1:gn||(Gi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&mg(s,i,o)),oa(e,i,s);break;case 21:oa(e,i,s);break;case 22:gn=(o=gn)||s.memoizedState!==null,oa(e,i,s),gn=o;break;default:oa(e,i,s)}}function bg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{As(e)}catch(s){He(i,i.return,s)}}}function Eg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{As(e)}catch(s){He(i,i.return,s)}}function dS(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new xg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new xg),i;default:throw Error(r(435,e.tag))}}function dc(e,i){var s=dS(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var u=MS.bind(null,e,o);o.then(u,u)}})}function jn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var u=s[o],d=e,S=i,C=S;t:for(;C!==null;){switch(C.tag){case 27:if(Xa(C.type)){tn=C.stateNode,Yn=!1;break t}break;case 5:tn=C.stateNode,Yn=!1;break t;case 3:case 4:tn=C.stateNode.containerInfo,Yn=!0;break t}C=C.return}if(tn===null)throw Error(r(160));Mg(d,S,u),tn=null,Yn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Tg(i,e),i=i.sibling}var wi=null;function Tg(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(i,e),Zn(e),o&4&&(Ba(3,e,e.return),No(3,e),Ba(5,e,e.return));break;case 1:jn(i,e),Zn(e),o&512&&(gn||s===null||Gi(s,s.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var u=wi;if(jn(i,e),Zn(e),o&512&&(gn||s===null||Gi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[cr]||d[hn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Ln(d,o,s),d[hn]=e,Mt(d),o=d;break t;case"link":var S=T_("link","href",u).get(o+(s.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){S.splice(C,1);break e}}d=u.createElement(o),Ln(d,o,s),u.head.appendChild(d);break;case"meta":if(S=T_("meta","content",u).get(o+(s.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){S.splice(C,1);break e}}d=u.createElement(o),Ln(d,o,s),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[hn]=e,Mt(d),o=d}e.stateNode=o}else A_(u,e.type,e.stateNode);else e.stateNode=E_(u,o,e.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?A_(u,e.type,e.stateNode):E_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ah(e,e.memoizedProps,s.memoizedProps)}break;case 27:jn(i,e),Zn(e),o&512&&(gn||s===null||Gi(s,s.return)),s!==null&&o&4&&ah(e,e.memoizedProps,s.memoizedProps);break;case 5:if(jn(i,e),Zn(e),o&512&&(gn||s===null||Gi(s,s.return)),e.flags&32){u=e.stateNode;try{Zr(u,"")}catch(Vt){He(e,e.return,Vt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ah(e,u,s!==null?s.memoizedProps:u)),o&1024&&(oh=!0);break;case 6:if(jn(i,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Vt){He(e,e.return,Vt)}}break;case 3:if(Cc=null,u=wi,wi=wc(i.containerInfo),jn(i,e),wi=u,Zn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{As(i.containerInfo)}catch(Vt){He(e,e.return,Vt)}oh&&(oh=!1,Ag(e));break;case 4:o=wi,wi=wc(e.stateNode.containerInfo),jn(i,e),Zn(e),wi=o;break;case 12:jn(i,e),Zn(e);break;case 31:jn(i,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 13:jn(i,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(mc=w()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 22:u=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,rt=sa,_t=gn;if(sa=rt||u,gn=_t||G,jn(i,e),gn=_t,sa=rt,Zn(e),o&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(s===null||G||sa||gn||Tr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(d=G.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=G.stateNode;var yt=G.memoizedProps.style,ct=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;C.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Vt){He(G,G.return,Vt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Vt){He(G,G.return,Vt)}}}else if(i.tag===18){if(s===null){G=i;try{var ht=G.stateNode;u?m_(ht,!0):m_(G.stateNode,!1)}catch(Vt){He(G,G.return,Vt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,dc(e,s))));break;case 19:jn(i,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,dc(e,o)));break;case 30:break;case 21:break;default:jn(i,e),Zn(e)}}function Zn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(_g(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var u=s.stateNode,d=rh(e);hc(e,d,u);break;case 5:var S=s.stateNode;s.flags&32&&(Zr(S,""),s.flags&=-33);var C=rh(e);hc(e,C,S);break;case 3:case 4:var G=s.stateNode.containerInfo,rt=rh(e);sh(e,rt,G);break;default:throw Error(r(161))}}catch(_t){He(e,e.return,_t)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ag(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function la(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)yg(e,i.alternate,i),i=i.sibling}function Tr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ba(4,i,i.return),Tr(i);break;case 1:Gi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&mg(i,i.return,s),Tr(i);break;case 27:ko(i.stateNode);case 26:case 5:Gi(i,i.return),Tr(i);break;case 22:i.memoizedState===null&&Tr(i);break;case 30:Tr(i);break;default:Tr(i)}e=e.sibling}}function ca(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:ca(u,d,s),No(4,d);break;case 1:if(ca(u,d,s),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){He(o,o.return,rt)}if(o=d,u=o.updateQueue,u!==null){var C=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)i0(G[u],C)}catch(rt){He(o,o.return,rt)}}s&&S&64&&pg(d),Oo(d,d.return);break;case 27:vg(d);case 26:case 5:ca(u,d,s),s&&o===null&&S&4&&gg(d),Oo(d,d.return);break;case 12:ca(u,d,s);break;case 31:ca(u,d,s),s&&S&4&&bg(u,d);break;case 13:ca(u,d,s),s&&S&4&&Eg(u,d);break;case 22:d.memoizedState===null&&ca(u,d,s),Oo(d,d.return);break;case 30:break;default:ca(u,d,s)}i=i.sibling}}function lh(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&yo(s))}function ch(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&yo(e))}function Ri(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wg(e,i,s,o),i=i.sibling}function wg(e,i,s,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(e,i,s,o),u&2048&&No(9,i);break;case 1:Ri(e,i,s,o);break;case 3:Ri(e,i,s,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&yo(e)));break;case 12:if(u&2048){Ri(e,i,s,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){He(i,i.return,G)}}else Ri(e,i,s,o);break;case 31:Ri(e,i,s,o);break;case 13:Ri(e,i,s,o);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ri(e,i,s,o):zo(e,i):d._visibility&2?Ri(e,i,s,o):(d._visibility|=2,ms(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),u&2048&&lh(S,i);break;case 24:Ri(e,i,s,o),u&2048&&ch(i.alternate,i);break;default:Ri(e,i,s,o)}}function ms(e,i,s,o,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,C=s,G=o,rt=S.flags;switch(S.tag){case 0:case 11:case 15:ms(d,S,C,G,u),No(8,S);break;case 23:break;case 22:var _t=S.stateNode;S.memoizedState!==null?_t._visibility&2?ms(d,S,C,G,u):zo(d,S):(_t._visibility|=2,ms(d,S,C,G,u)),u&&rt&2048&&lh(S.alternate,S);break;case 24:ms(d,S,C,G,u),u&&rt&2048&&ch(S.alternate,S);break;default:ms(d,S,C,G,u)}i=i.sibling}}function zo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,u=o.flags;switch(o.tag){case 22:zo(s,o),u&2048&&lh(o.alternate,o);break;case 24:zo(s,o),u&2048&&ch(o.alternate,o);break;default:zo(s,o)}i=i.sibling}}var Po=8192;function gs(e,i,s){if(e.subtreeFlags&Po)for(e=e.child;e!==null;)Rg(e,i,s),e=e.sibling}function Rg(e,i,s){switch(e.tag){case 26:gs(e,i,s),e.flags&Po&&e.memoizedState!==null&&$S(s,wi,e.memoizedState,e.memoizedProps);break;case 5:gs(e,i,s);break;case 3:case 4:var o=wi;wi=wc(e.stateNode.containerInfo),gs(e,i,s),wi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,gs(e,i,s),Po=o):gs(e,i,s));break;default:gs(e,i,s)}}function Cg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Bo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,Ug(o,e)}Cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:Bo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Bo(e);break;case 12:Bo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,pc(e)):Bo(e);break;default:Bo(e)}}function pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Tn=o,Ug(o,e)}Cg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ba(8,i,i.return),pc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,pc(i));break;default:pc(i)}e=e.sibling}}function Ug(e,i){for(;Tn!==null;){var s=Tn;switch(s.tag){case 0:case 11:case 15:Ba(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Tn=o;else t:for(s=e;Tn!==null;){o=Tn;var u=o.sibling,d=o.return;if(Sg(o),o===s){Tn=null;break t}if(u!==null){u.return=d,Tn=u;break t}Tn=d}}}var pS={getCacheForType:function(e){var i=Dn(dn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Dn(dn).controller.signal}},mS=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,xe=null,Me=0,Fe=0,si=null,Ia=!1,_s=!1,uh=!1,ua=0,rn=0,Fa=0,Ar=0,fh=0,oi=0,vs=0,Io=null,Kn=null,hh=!1,mc=0,Lg=0,gc=1/0,_c=null,Ha=null,yn=0,Ga=null,xs=null,fa=0,dh=0,ph=null,Ng=null,Fo=0,mh=null;function li(){return(ze&2)!==0&&Me!==0?Me&-Me:B.T!==null?Sh():lr()}function Og(){if(oi===0)if((Me&536870912)===0||Te){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function Qn(e,i,s){(e===je&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(ys(e,0),Va(e,Me,oi,!1)),Hn(e,s),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(Ar|=s),rn===4&&Va(e,Me,oi,!1)),Vi(e))}function zg(e,i,s){if((ze&6)!==0)throw Error(r(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Gt(e,i),u=o?vS(e,i):_h(e,i,!0),d=o;do{if(u===0){_s&&!o&&Va(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!gS(s)){u=_h(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var C=e;u=Io;var G=C.current.memoizedState.isDehydrated;if(G&&(ys(C,S).flags|=256),S=_h(C,S,!1),S!==2){if(uh&&!G){C.errorRecoveryDisabledLanes|=d,Ar|=d,u=4;break t}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){ys(e,0),Va(e,i,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Va(o,i,oi,!Ia);break t;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(u=mc+300-w(),10<u)){if(Va(o,i,oi,!Ia),St(o,0,!0)!==0)break t;fa=i,o.timeoutHandle=h_(Pg.bind(null,o,s,Kn,_c,hh,i,oi,Ar,vs,Ia,d,"Throttled",-0,0),u);break t}Pg(o,s,Kn,_c,hh,i,oi,Ar,vs,Ia,d,null,-0,0)}}break}while(!0);Vi(e)}function Pg(e,i,s,o,u,d,S,C,G,rt,_t,yt,ct,ht){if(e.timeoutHandle=-1,yt=i.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},Rg(i,d,yt);var Vt=(d&62914560)===d?mc-w():(d&4194048)===d?Lg-w():0;if(Vt=tM(yt,Vt),Vt!==null){fa=d,e.cancelPendingCommit=Vt(Xg.bind(null,e,i,d,s,o,u,S,C,G,_t,yt,null,ct,ht)),Va(e,d,S,!rt);return}}Xg(e,i,d,s,o,u,S,C,G)}function gS(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var u=s[o],d=u.getSnapshot;u=u.value;try{if(!ni(d(),u))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Va(e,i,s,o){i&=~fh,i&=~Ar,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-Bt(u),S=1<<d;o[d]=-1,u&=~S}s!==0&&ro(e,s,i)}function vc(){return(ze&6)===0?(Ho(0),!1):!0}function gh(){if(xe!==null){if(Fe===0)var e=xe.return;else e=xe,ta=_r=null,Lf(e),us=null,Mo=0,e=xe;for(;e!==null;)dg(e.alternate,e),e=e.return;xe=null}}function ys(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,PS(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),fa=0,gh(),je=e,xe=s=Ji(e.current,null),Me=i,Fe=0,si=null,Ia=!1,_s=Gt(e,i),uh=!1,vs=oi=fh=Ar=Fa=rn=0,Kn=Io=null,hh=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-Bt(o),d=1<<u;i|=e[u],o&=~d}return ua=i,Fl(),s}function Bg(e,i){fe=null,B.H=Do,i===cs||i===Yl?(i=$m(),Fe=3):i===yf?(i=$m(),Fe=4):Fe=i===jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,xe===null&&(rn=1,oc(e,di(i,e.current)))}function Ig(){var e=ai.current;return e===null?!0:(Me&4194048)===Me?_i===null:(Me&62914560)===Me||(Me&536870912)!==0?e===_i:!1}function Fg(){var e=B.H;return B.H=Do,e===null?Do:e}function Hg(){var e=B.A;return B.A=pS,e}function xc(){rn=4,Ia||(Me&4194048)!==Me&&ai.current!==null||(_s=!0),(Fa&134217727)===0&&(Ar&134217727)===0||je===null||Va(je,Me,oi,!1)}function _h(e,i,s){var o=ze;ze|=2;var u=Fg(),d=Hg();(je!==e||Me!==i)&&(_c=null,ys(e,i)),i=!1;var S=rn;t:do try{if(Fe!==0&&xe!==null){var C=xe,G=si;switch(Fe){case 8:gh(),S=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var rt=Fe;if(Fe=0,si=null,Ss(e,C,G,rt),s&&_s){S=0;break t}break;default:rt=Fe,Fe=0,si=null,Ss(e,C,G,rt)}}_S(),S=rn;break}catch(_t){Bg(e,_t)}while(!0);return i&&e.shellSuspendCounter++,ta=_r=null,ze=o,B.H=u,B.A=d,xe===null&&(je=null,Me=0,Fl()),S}function _S(){for(;xe!==null;)Gg(xe)}function vS(e,i){var s=ze;ze|=2;var o=Fg(),u=Hg();je!==e||Me!==i?(_c=null,gc=w()+500,ys(e,i)):_s=Gt(e,i);t:do try{if(Fe!==0&&xe!==null){i=xe;var d=si;e:switch(Fe){case 1:Fe=0,si=null,Ss(e,i,d,1);break;case 2:case 9:if(Qm(d)){Fe=0,si=null,Vg(i);break}i=function(){Fe!==2&&Fe!==9||je!==e||(Fe=7),Vi(e)},d.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Qm(d)?(Fe=0,si=null,Vg(i)):(Fe=0,si=null,Ss(e,i,d,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var C=xe;if(S?w_(S):C.stateNode.complete){Fe=0,si=null;var G=C.sibling;if(G!==null)xe=G;else{var rt=C.return;rt!==null?(xe=rt,yc(rt)):xe=null}break e}}Fe=0,si=null,Ss(e,i,d,5);break;case 6:Fe=0,si=null,Ss(e,i,d,6);break;case 8:gh(),rn=6;break t;default:throw Error(r(462))}}xS();break}catch(_t){Bg(e,_t)}while(!0);return ta=_r=null,B.H=o,B.A=u,ze=s,xe!==null?0:(je=null,Me=0,Fl(),rn)}function xS(){for(;xe!==null&&!en();)Gg(xe)}function Gg(e){var i=fg(e.alternate,e,ua);e.memoizedProps=e.pendingProps,i===null?yc(e):xe=i}function Vg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=rg(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=rg(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Lf(i);default:dg(s,i),i=xe=Hm(i,ua),i=fg(s,i,ua)}e.memoizedProps=e.pendingProps,i===null?yc(e):xe=i}function Ss(e,i,s,o){ta=_r=null,Lf(i),us=null,Mo=0;var u=i.return;try{if(oS(e,u,i,s,Me)){rn=1,oc(e,di(s,e.current)),xe=null;return}}catch(d){if(u!==null)throw xe=u,d;rn=1,oc(e,di(s,e.current)),xe=null;return}i.flags&32768?(Te||o===1?e=!0:_s||(Me&536870912)!==0?e=!1:(Ia=e=!0,(o===2||o===9||o===3||o===6)&&(o=ai.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(i,e)):yc(i)}function yc(e){var i=e;do{if((i.flags&32768)!==0){kg(i,Ia);return}e=i.return;var s=uS(i.alternate,i,ua);if(s!==null){xe=s;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);rn===0&&(rn=5)}function kg(e,i){do{var s=fS(e.alternate,e);if(s!==null){s.flags&=32767,xe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=s}while(e!==null);rn=6,xe=null}function Xg(e,i,s,o,u,d,S,C,G){e.cancelPendingCommit=null;do Sc();while(yn!==0);if((ze&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=rf,fi(e,s,d,S,C,G),e===je&&(xe=je=null,Me=0),xs=i,Ga=e,fa=s,dh=d,ph=u,Ng=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bS(gt,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=tt.p,tt.p=2,S=ze,ze|=4;try{hS(e,i,s)}finally{ze=S,tt.p=u,B.T=o}}yn=1,Wg(),qg(),Yg()}}function Wg(){if(yn===1){yn=0;var e=Ga,i=xs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var o=tt.p;tt.p=2;var u=ze;ze|=4;try{Tg(i,e);var d=Ch,S=Um(e.containerInfo),C=d.focusedElem,G=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&Dm(C.ownerDocument.documentElement,C)){if(G!==null&&$u(C)){var rt=G.start,_t=G.end;if(_t===void 0&&(_t=rt),"selectionStart"in C)C.selectionStart=rt,C.selectionEnd=Math.min(_t,C.value.length);else{var yt=C.ownerDocument||document,ct=yt&&yt.defaultView||window;if(ct.getSelection){var ht=ct.getSelection(),Vt=C.textContent.length,ae=Math.min(G.start,Vt),ke=G.end===void 0?ae:Math.min(G.end,Vt);!ht.extend&&ae>ke&&(S=ke,ke=ae,ae=S);var Q=Cm(C,ae),k=Cm(C,ke);if(Q&&k&&(ht.rangeCount!==1||ht.anchorNode!==Q.node||ht.anchorOffset!==Q.offset||ht.focusNode!==k.node||ht.focusOffset!==k.offset)){var it=yt.createRange();it.setStart(Q.node,Q.offset),ht.removeAllRanges(),ae>ke?(ht.addRange(it),ht.extend(k.node,k.offset)):(it.setEnd(k.node,k.offset),ht.addRange(it))}}}}for(yt=[],ht=C;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<yt.length;C++){var xt=yt[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Nc=!!Rh,Ch=Rh=null}finally{ze=u,tt.p=o,B.T=s}}e.current=i,yn=2}}function qg(){if(yn===2){yn=0;var e=Ga,i=xs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var o=tt.p;tt.p=2;var u=ze;ze|=4;try{yg(e,i.alternate,i)}finally{ze=u,tt.p=o,B.T=s}}yn=3}}function Yg(){if(yn===4||yn===3){yn=0,F();var e=Ga,i=xs,s=fa,o=Ng;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,xs=Ga=null,jg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ha=null),Yr(s),i=i.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,u=tt.p,tt.p=2,B.T=null;try{for(var d=e.onRecoverableError,S=0;S<o.length;S++){var C=o[S];d(C.value,{componentStack:C.stack})}}finally{B.T=i,tt.p=u}}(fa&3)!==0&&Sc(),Vi(e),u=e.pendingLanes,(s&261930)!==0&&(u&42)!==0?e===mh?Fo++:(Fo=0,mh=e):Fo=0,Ho(0)}}function jg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,yo(i)))}function Sc(){return Wg(),qg(),Yg(),Zg()}function Zg(){if(yn!==5)return!1;var e=Ga,i=dh;dh=0;var s=Yr(fa),o=B.T,u=tt.p;try{tt.p=32>s?32:s,B.T=null,s=ph,ph=null;var d=Ga,S=fa;if(yn=0,xs=Ga=null,fa=0,(ze&6)!==0)throw Error(r(331));var C=ze;if(ze|=4,Dg(d.current),wg(d,d.current,S,s),ze=C,Ho(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,d)}catch{}return!0}finally{tt.p=u,B.T=o,jg(e,i)}}function Kg(e,i,s){i=di(s,i),i=Yf(e.stateNode,i,2),e=Oa(e,i,2),e!==null&&(Hn(e,2),Vi(e))}function He(e,i,s){if(e.tag===3)Kg(e,e,s);else for(;i!==null;){if(i.tag===3){Kg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ha===null||!Ha.has(o))){e=di(s,e),s=Q0(2),o=Oa(i,s,2),o!==null&&(J0(s,o,i,e),Hn(o,2),Vi(o));break}}i=i.return}}function vh(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new mS;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(s)||(uh=!0,u.add(s),e=yS.bind(null,e,i,s),i.then(e,e))}function yS(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,je===e&&(Me&s)===s&&(rn===4||rn===3&&(Me&62914560)===Me&&300>w()-mc?(ze&2)===0&&ys(e,0):fh|=s,vs===Me&&(vs=0)),Vi(e)}function Qg(e,i){i===0&&(i=Ie()),e=pr(e,i),e!==null&&(Hn(e,i),Vi(e))}function SS(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Qg(e,s)}function MS(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(s=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),Qg(e,s)}function bS(e,i){return ce(e,i)}var Mc=null,Ms=null,xh=!1,bc=!1,yh=!1,ka=0;function Vi(e){e!==Ms&&e.next===null&&(Ms===null?Mc=Ms=e:Ms=Ms.next=e),bc=!0,xh||(xh=!0,TS())}function Ho(e,i){if(!yh&&bc){yh=!0;do for(var s=!1,o=Mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,C=o.pingedLanes;d=(1<<31-Bt(42|e)+1)-1,d&=u&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,e_(o,d))}else d=Me,d=St(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Gt(o,d)||(s=!0,e_(o,d));o=o.next}while(s);yh=!1}}function ES(){Jg()}function Jg(){bc=xh=!1;var e=0;ka!==0&&zS()&&(e=ka);for(var i=w(),s=null,o=Mc;o!==null;){var u=o.next,d=$g(o,i);d===0?(o.next=null,s===null?Mc=u:s.next=u,u===null&&(Ms=s)):(s=o,(e!==0||(d&3)!==0)&&(bc=!0)),o=u}yn!==0&&yn!==5||Ho(e),ka!==0&&(ka=0)}function $g(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Bt(d),C=1<<S,G=u[S];G===-1?((C&s)===0||(C&o)!==0)&&(u[S]=se(C,i)):G<=i&&(e.expiredLanes|=C),d&=~C}if(i=je,s=Me,s=St(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&nn(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Gt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&nn(o),Yr(s)){case 2:case 8:s=bt;break;case 32:s=gt;break;case 268435456:s=Rt;break;default:s=gt}return o=t_.bind(null,e),s=ce(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&nn(o),e.callbackPriority=2,e.callbackNode=null,2}function t_(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Sc()&&e.callbackNode!==s)return null;var o=Me;return o=St(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(zg(e,o,i),$g(e,w()),e.callbackNode!=null&&e.callbackNode===s?t_.bind(null,e):null)}function e_(e,i){if(Sc())return null;zg(e,i,!0)}function TS(){BS(function(){(ze&6)!==0?ce(vt,ES):Jg()})}function Sh(){if(ka===0){var e=os;e===0&&(e=At,At<<=1,(At&261888)===0&&(At=256)),ka=e}return ka}function n_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function i_(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function AS(e,i,s,o,u){if(i==="submit"&&s&&s.stateNode===u){var d=n_((u[wn]||null).action),S=o.submitter;S&&(i=(i=S[wn]||null)?n_(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var C=new zl("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ka!==0){var G=S?i_(u,S):new FormData(u);Gf(s,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(C.preventDefault(),G=S?i_(u,S):new FormData(u),Gf(s,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var Mh=0;Mh<af.length;Mh++){var bh=af[Mh],wS=bh.toLowerCase(),RS=bh[0].toUpperCase()+bh.slice(1);Ai(wS,"on"+RS)}Ai(Om,"onAnimationEnd"),Ai(zm,"onAnimationIteration"),Ai(Pm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Xy,"onTransitionRun"),Ai(Wy,"onTransitionStart"),Ai(qy,"onTransitionCancel"),Ai(Bm,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function a_(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var C=o[S],G=C.instance,rt=C.currentTarget;if(C=C.listener,G!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=rt;try{d(u)}catch(_t){Il(_t)}u.currentTarget=null,d=G}else for(S=0;S<o.length;S++){if(C=o[S],G=C.instance,rt=C.currentTarget,C=C.listener,G!==d&&u.isPropagationStopped())break t;d=C,u.currentTarget=rt;try{d(u)}catch(_t){Il(_t)}u.currentTarget=null,d=G}}}}function ye(e,i){var s=i[oo];s===void 0&&(s=i[oo]=new Set);var o=e+"__bubble";s.has(o)||(r_(i,e,2,!1),s.add(o))}function Eh(e,i,s){var o=0;i&&(o|=4),r_(s,e,o,i)}var Ec="_reactListening"+Math.random().toString(36).slice(2);function Th(e){if(!e[Ec]){e[Ec]=!0,Ot.forEach(function(s){s!=="selectionchange"&&(CS.has(s)||Eh(s,!1,e),Eh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ec]||(i[Ec]=!0,Eh("selectionchange",!1,i))}}function r_(e,i,s,o){switch(O_(i)){case 2:var u=iM;break;case 8:u=aM;break;default:u=Hh}s=u.bind(null,i,s,e),u=void 0,!Xu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,s,{capture:!0,passive:u}):e.addEventListener(i,s,!0):u!==void 0?e.addEventListener(i,s,{passive:u}):e.addEventListener(i,s,!1)}function Ah(e,i,s,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===u)break;if(S===4)for(S=o.return;S!==null;){var G=S.tag;if((G===3||G===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;C!==null;){if(S=j(C),S===null)return;if(G=S.tag,G===5||G===6||G===26||G===27){o=d=S;continue t}C=C.parentNode}}o=o.return}um(function(){var rt=d,_t=Vu(s),yt=[];t:{var ct=Im.get(e);if(ct!==void 0){var ht=zl,Vt=e;switch(e){case"keypress":if(Nl(s)===0)break t;case"keydown":case"keyup":ht=My;break;case"focusin":Vt="focus",ht=ju;break;case"focusout":Vt="blur",ht=ju;break;case"beforeblur":case"afterblur":ht=ju;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Ty;break;case Om:case zm:case Pm:ht=dy;break;case Bm:ht=wy;break;case"scroll":case"scrollend":ht=ly;break;case"wheel":ht=Cy;break;case"copy":case"cut":case"paste":ht=my;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=mm;break;case"toggle":case"beforetoggle":ht=Uy}var ae=(i&4)!==0,ke=!ae&&(e==="scroll"||e==="scrollend"),Q=ae?ct!==null?ct+"Capture":null:ct;ae=[];for(var k=rt,it;k!==null;){var xt=k;if(it=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||it===null||Q===null||(xt=lo(k,Q),xt!=null&&ae.push(Vo(k,xt,it))),ke)break;k=k.return}0<ae.length&&(ct=new ht(ct,Vt,null,s,_t),yt.push({event:ct,listeners:ae}))}}if((i&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ct&&s!==Gu&&(Vt=s.relatedTarget||s.fromElement)&&(j(Vt)||Vt[Aa]))break t;if((ht||ct)&&(ct=_t.window===_t?_t:(ct=_t.ownerDocument)?ct.defaultView||ct.parentWindow:window,ht?(Vt=s.relatedTarget||s.toElement,ht=rt,Vt=Vt?j(Vt):null,Vt!==null&&(ke=c(Vt),ae=Vt.tag,Vt!==ke||ae!==5&&ae!==27&&ae!==6)&&(Vt=null)):(ht=null,Vt=rt),ht!==Vt)){if(ae=dm,xt="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ae=mm,xt="onPointerLeave",Q="onPointerEnter",k="pointer"),ke=ht==null?ct:ft(ht),it=Vt==null?ct:ft(Vt),ct=new ae(xt,k+"leave",ht,s,_t),ct.target=ke,ct.relatedTarget=it,xt=null,j(_t)===rt&&(ae=new ae(Q,k+"enter",Vt,s,_t),ae.target=it,ae.relatedTarget=ke,xt=ae),ke=xt,ht&&Vt)e:{for(ae=DS,Q=ht,k=Vt,it=0,xt=Q;xt;xt=ae(xt))it++;xt=0;for(var ie=k;ie;ie=ae(ie))xt++;for(;0<it-xt;)Q=ae(Q),it--;for(;0<xt-it;)k=ae(k),xt--;for(;it--;){if(Q===k||k!==null&&Q===k.alternate){ae=Q;break e}Q=ae(Q),k=ae(k)}ae=null}else ae=null;ht!==null&&s_(yt,ct,ht,ae,!1),Vt!==null&&ke!==null&&s_(yt,ke,Vt,ae,!0)}}t:{if(ct=rt?ft(rt):window,ht=ct.nodeName&&ct.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ct.type==="file")var Le=bm;else if(Sm(ct))if(Em)Le=Gy;else{Le=Fy;var Wt=Iy}else ht=ct.nodeName,!ht||ht.toLowerCase()!=="input"||ct.type!=="checkbox"&&ct.type!=="radio"?rt&&Hu(rt.elementType)&&(Le=bm):Le=Hy;if(Le&&(Le=Le(e,rt))){Mm(yt,Le,s,_t);break t}Wt&&Wt(e,ct,rt),e==="focusout"&&rt&&ct.type==="number"&&rt.memoizedProps.value!=null&&xn(ct,"number",ct.value)}switch(Wt=rt?ft(rt):window,e){case"focusin":(Sm(Wt)||Wt.contentEditable==="true")&&($r=Wt,tf=rt,_o=null);break;case"focusout":_o=tf=$r=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Lm(yt,s,_t);break;case"selectionchange":if(ky)break;case"keydown":case"keyup":Lm(yt,s,_t)}var he;if(Ku)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Jr?xm(e,s)&&(be="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(be="onCompositionStart");be&&(gm&&s.locale!=="ko"&&(Jr||be!=="onCompositionStart"?be==="onCompositionEnd"&&Jr&&(he=fm()):(wa=_t,Wu="value"in wa?wa.value:wa.textContent,Jr=!0)),Wt=Tc(rt,be),0<Wt.length&&(be=new pm(be,e,null,s,_t),yt.push({event:be,listeners:Wt}),he?be.data=he:(he=ym(s),he!==null&&(be.data=he)))),(he=Ny?Oy(e,s):zy(e,s))&&(be=Tc(rt,"onBeforeInput"),0<be.length&&(Wt=new pm("onBeforeInput","beforeinput",null,s,_t),yt.push({event:Wt,listeners:be}),Wt.data=he)),AS(yt,e,rt,s,_t)}a_(yt,i)})}function Vo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Tc(e,i){for(var s=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=lo(e,s),u!=null&&o.unshift(Vo(e,u,d)),u=lo(e,i),u!=null&&o.push(Vo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function DS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function s_(e,i,s,o,u){for(var d=i._reactName,S=[];s!==null&&s!==o;){var C=s,G=C.alternate,rt=C.stateNode;if(C=C.tag,G!==null&&G===o)break;C!==5&&C!==26&&C!==27||rt===null||(G=rt,u?(rt=lo(s,d),rt!=null&&S.unshift(Vo(s,rt,G))):u||(rt=lo(s,d),rt!=null&&S.push(Vo(s,rt,G)))),s=s.return}S.length!==0&&e.push({event:i,listeners:S})}var US=/\r\n?/g,LS=/\u0000|\uFFFD/g;function o_(e){return(typeof e=="string"?e:""+e).replace(US,`
`).replace(LS,"")}function l_(e,i){return i=o_(i),o_(e)===i}function Ve(e,i,s,o,u,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Zr(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Zr(e,""+o);break;case"className":Be(e,"class",o);break;case"tabIndex":Be(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Be(e,s,o);break;case"style":lm(e,o,d);break;case"data":if(i!=="object"){Be(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ul(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ve(e,i,"name",u.name,u,null),Ve(e,i,"formEncType",u.formEncType,u,null),Ve(e,i,"formMethod",u.formMethod,u,null),Ve(e,i,"formTarget",u.formTarget,u,null)):(Ve(e,i,"encType",u.encType,u,null),Ve(e,i,"method",u.method,u,null),Ve(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=Ul(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=Ul(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Ye(e,"popover",o);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=sy.get(s)||s,Ye(e,s,o))}}function wh(e,i,s,o,u,d){switch(s){case"style":lm(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Zr(e,o):(typeof o=="number"||typeof o=="bigint")&&Zr(e,""+o);break;case"onScroll":o!=null&&ye("scroll",e);break;case"onScrollEnd":o!=null&&ye("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(u=s.endsWith("Capture"),i=s.slice(2,u?s.length-7:void 0),d=e[wn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,u);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):Ye(e,s,o)}}}function Ln(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var o=!1,u=!1,d;for(d in s)if(s.hasOwnProperty(d)){var S=s[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ve(e,i,d,S,s,null)}}u&&Ve(e,i,"srcSet",s.srcSet,s,null),o&&Ve(e,i,"src",s.src,s,null);return;case"input":ye("invalid",e);var C=d=S=u=null,G=null,rt=null;for(o in s)if(s.hasOwnProperty(o)){var _t=s[o];if(_t!=null)switch(o){case"name":u=_t;break;case"type":S=_t;break;case"checked":G=_t;break;case"defaultChecked":rt=_t;break;case"value":d=_t;break;case"defaultValue":C=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(r(137,i));break;default:Ve(e,i,o,_t,s,null)}}Gn(e,d,C,G,rt,S,u,!1);return;case"select":ye("invalid",e),o=S=d=null;for(u in s)if(s.hasOwnProperty(u)&&(C=s[u],C!=null))switch(u){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:Ve(e,i,u,C,s,null)}i=d,s=S,e.multiple=!!o,i!=null?cn(e,!!o,i,!1):s!=null&&cn(e,!!o,s,!0);return;case"textarea":ye("invalid",e),d=u=o=null;for(S in s)if(s.hasOwnProperty(S)&&(C=s[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":u=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ve(e,i,S,C,s,null)}Ii(e,o,u,d);return;case"option":for(G in s)s.hasOwnProperty(G)&&(o=s[G],o!=null)&&(G==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,i,G,o,s,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(o=0;o<Go.length;o++)ye(Go[o],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in s)if(s.hasOwnProperty(rt)&&(o=s[rt],o!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ve(e,i,rt,o,s,null)}return;default:if(Hu(i)){for(_t in s)s.hasOwnProperty(_t)&&(o=s[_t],o!==void 0&&wh(e,i,_t,o,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(o=s[C],o!=null&&Ve(e,i,C,o,s,null))}function NS(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,C=null,G=null,rt=null,_t=null;for(ht in s){var yt=s[ht];if(s.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":G=yt;default:o.hasOwnProperty(ht)||Ve(e,i,ht,null,o,yt)}}for(var ct in o){var ht=o[ct];if(yt=s[ct],o.hasOwnProperty(ct)&&(ht!=null||yt!=null))switch(ct){case"type":d=ht;break;case"name":u=ht;break;case"checked":rt=ht;break;case"defaultChecked":_t=ht;break;case"value":S=ht;break;case"defaultValue":C=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,i));break;default:ht!==yt&&Ve(e,i,ct,ht,o,yt)}}On(e,S,C,G,rt,_t,d,u);return;case"select":ht=S=C=ct=null;for(d in s)if(G=s[d],s.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":ht=G;default:o.hasOwnProperty(d)||Ve(e,i,d,null,o,G)}for(u in o)if(d=o[u],G=s[u],o.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":ct=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==G&&Ve(e,i,u,d,o,G)}i=C,s=S,o=ht,ct!=null?cn(e,!!s,ct,!1):!!o!=!!s&&(i!=null?cn(e,!!s,i,!0):cn(e,!!s,s?[]:"",!1));return;case"textarea":ht=ct=null;for(C in s)if(u=s[C],s.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ve(e,i,C,null,o,u)}for(S in o)if(u=o[S],d=s[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":ct=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Ve(e,i,S,u,o,d)}jr(e,ct,ht);return;case"option":for(var Vt in s)ct=s[Vt],s.hasOwnProperty(Vt)&&ct!=null&&!o.hasOwnProperty(Vt)&&(Vt==="selected"?e.selected=!1:Ve(e,i,Vt,null,o,ct));for(G in o)ct=o[G],ht=s[G],o.hasOwnProperty(G)&&ct!==ht&&(ct!=null||ht!=null)&&(G==="selected"?e.selected=ct&&typeof ct!="function"&&typeof ct!="symbol":Ve(e,i,G,ct,o,ht));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in s)ct=s[ae],s.hasOwnProperty(ae)&&ct!=null&&!o.hasOwnProperty(ae)&&Ve(e,i,ae,null,o,ct);for(rt in o)if(ct=o[rt],ht=s[rt],o.hasOwnProperty(rt)&&ct!==ht&&(ct!=null||ht!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,i));break;default:Ve(e,i,rt,ct,o,ht)}return;default:if(Hu(i)){for(var ke in s)ct=s[ke],s.hasOwnProperty(ke)&&ct!==void 0&&!o.hasOwnProperty(ke)&&wh(e,i,ke,void 0,o,ct);for(_t in o)ct=o[_t],ht=s[_t],!o.hasOwnProperty(_t)||ct===ht||ct===void 0&&ht===void 0||wh(e,i,_t,ct,o,ht);return}}for(var Q in s)ct=s[Q],s.hasOwnProperty(Q)&&ct!=null&&!o.hasOwnProperty(Q)&&Ve(e,i,Q,null,o,ct);for(yt in o)ct=o[yt],ht=s[yt],!o.hasOwnProperty(yt)||ct===ht||ct==null&&ht==null||Ve(e,i,yt,ct,o,ht)}function c_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var u=s[o],d=u.transferSize,S=u.initiatorType,C=u.duration;if(d&&C&&c_(S)){for(S=0,C=u.responseEnd,o+=1;o<s.length;o++){var G=s[o],rt=G.startTime;if(rt>C)break;var _t=G.transferSize,yt=G.initiatorType;_t&&c_(yt)&&(G=G.responseEnd,S+=_t*(G<C?1:(C-rt)/(G-rt)))}if(--o,i+=8*(d+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Rh=null,Ch=null;function Ac(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Dh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uh=null;function zS(){var e=window.event;return e&&e.type==="popstate"?e===Uh?!1:(Uh=e,!0):(Uh=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,BS=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(IS)}:h_;function IS(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function p_(e,i){var s=i,o=0;do{var u=s.nextSibling;if(e.removeChild(s),u&&u.nodeType===8)if(s=u.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(u),As(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")ko(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,ko(s);for(var d=s.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[cr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=S}}else s==="body"&&ko(e.ownerDocument.body);s=u}while(s);As(i)}function m_(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function Lh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Lh(s),U(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function FS(e,i,s,o){for(;e.nodeType===1;){var u=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[cr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function HS(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=vi(e.nextSibling),e===null))return null;return e}function g_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=vi(e.nextSibling),e===null))return null;return e}function Nh(e){return e.data==="$?"||e.data==="$~"}function Oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function GS(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var zh=null;function __(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return vi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function v_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function x_(e,i,s){switch(i=Ac(s),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ko(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);U(e)}var xi=new Map,y_=new Set;function wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=tt.d;tt.d={f:VS,r:kS,D:XS,C:WS,L:qS,m:YS,X:ZS,S:jS,M:KS};function VS(){var e=ha.f(),i=vc();return e||i}function kS(e){var i=ut(e);i!==null&&i.tag===5&&i.type==="form"?B0(i):ha.r(e)}var bs=typeof document>"u"?null:document;function S_(e,i,s){var o=bs;if(o&&typeof i=="string"&&i){var u=Se(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof s=="string"&&(u+='[crossorigin="'+s+'"]'),y_.has(u)||(y_.add(u),e={rel:e,crossOrigin:s,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),Ln(i,"link",e),Mt(i),o.head.appendChild(i)))}}function XS(e){ha.D(e),S_("dns-prefetch",e,null)}function WS(e,i){ha.C(e,i),S_("preconnect",e,i)}function qS(e,i,s){ha.L(e,i,s);var o=bs;if(o&&e&&i){var u='link[rel="preload"][as="'+Se(i)+'"]';i==="image"&&s&&s.imageSrcSet?(u+='[imagesrcset="'+Se(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(u+='[imagesizes="'+Se(s.imageSizes)+'"]')):u+='[href="'+Se(e)+'"]';var d=u;switch(i){case"style":d=Es(e);break;case"script":d=Ts(e)}xi.has(d)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),xi.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(Xo(d))||i==="script"&&o.querySelector(Wo(d))||(i=o.createElement("link"),Ln(i,"link",e),Mt(i),o.head.appendChild(i)))}}function YS(e,i){ha.m(e,i);var s=bs;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+Se(o)+'"][href="'+Se(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ts(e)}if(!xi.has(d)&&(e=g({rel:"modulepreload",href:e},i),xi.set(d,e),s.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wo(d)))return}o=s.createElement("link"),Ln(o,"link",e),Mt(o),s.head.appendChild(o)}}}function jS(e,i,s){ha.S(e,i,s);var o=bs;if(o&&e){var u=K(o).hoistableStyles,d=Es(e);i=i||"default";var S=u.get(d);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(Xo(d)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=xi.get(d))&&Ph(e,s);var G=S=o.createElement("link");Mt(G),Ln(G,"link",e),G._p=new Promise(function(rt,_t){G.onload=rt,G.onerror=_t}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Rc(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:C},u.set(d,S)}}}function ZS(e,i){ha.X(e,i);var s=bs;if(s&&e){var o=K(s).hoistableScripts,u=Ts(e),d=o.get(u);d||(d=s.querySelector(Wo(u)),d||(e=g({src:e,async:!0},i),(i=xi.get(u))&&Bh(e,i),d=s.createElement("script"),Mt(d),Ln(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function KS(e,i){ha.M(e,i);var s=bs;if(s&&e){var o=K(s).hoistableScripts,u=Ts(e),d=o.get(u);d||(d=s.querySelector(Wo(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=xi.get(u))&&Bh(e,i),d=s.createElement("script"),Mt(d),Ln(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function M_(e,i,s,o){var u=(u=ot.current)?wc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Es(s.href),s=K(u).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Es(s.href);var d=K(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(Xo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),xi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},xi.set(e,s),d||QS(u,e,s,S.state))),i&&o===null)throw Error(r(528,""));return S}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ts(s),s=K(u).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Es(e){return'href="'+Se(e)+'"'}function Xo(e){return'link[rel="stylesheet"]['+e+"]"}function b_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function QS(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ln(i,"link",s),Mt(i),e.head.appendChild(i))}function Ts(e){return'[src="'+Se(e)+'"]'}function Wo(e){return"script[async]"+e}function E_(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Se(s.href)+'"]');if(o)return i.instance=o,Mt(o),o;var u=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Mt(o),Ln(o,"style",u),Rc(o,s.precedence,e),i.instance=o;case"stylesheet":u=Es(s.href);var d=e.querySelector(Xo(u));if(d)return i.state.loading|=4,i.instance=d,Mt(d),d;o=b_(s),(u=xi.get(u))&&Ph(o,u),d=(e.ownerDocument||e).createElement("link"),Mt(d);var S=d;return S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Ln(d,"link",o),i.state.loading|=4,Rc(d,s.precedence,e),i.instance=d;case"script":return d=Ts(s.src),(u=e.querySelector(Wo(d)))?(i.instance=u,Mt(u),u):(o=s,(u=xi.get(d))&&(o=g({},s),Bh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Mt(u),Ln(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Rc(o,s.precedence,e));return i.instance}function Rc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===i)d=C;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Ph(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Bh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Cc=null;function T_(e,i,s){if(Cc===null){var o=new Map,u=Cc=new Map;u.set(s,o)}else u=Cc,o=u.get(s),o||(o=new Map,u.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),u=0;u<s.length;u++){var d=s[u];if(!(d[cr]||d[hn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var C=o.get(S);C?C.push(d):o.set(S,[d])}}return o}function A_(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function JS(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function w_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function $S(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var u=Es(o.href),d=i.querySelector(Xo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Dc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,Mt(d);return}d=i.ownerDocument||i,o=b_(o),(u=xi.get(u))&&Ph(o,u),d=d.createElement("link"),Mt(d);var S=d;S._p=new Promise(function(C,G){S.onload=C,S.onerror=G}),Ln(d,"link",o),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Dc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Ih=0;function tM(e,i){return e.stylesheets&&e.count===0&&Lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Ih===0&&(Ih=62500*OS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ih?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Uc=null;function Lc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uc=new Map,i.forEach(eM,e),Uc=null,Dc.call(e))}function eM(e,i){if(!(i.state.loading&4)){var s=Uc.get(e);if(s)var o=s.get(null);else{s=new Map,Uc.set(e,s);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(s.set(S.dataset.precedence,S),o=S)}o&&s.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=s.get(S)||o,d===o&&s.set(null,u),s.set(S,u),this.count++,o=Dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var qo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function nM(e,i,s,o,u,d,S,C,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function R_(e,i,s,o,u,d,S,C,G,rt,_t,yt){return e=new nM(e,i,s,S,G,rt,_t,yt,C),i=1,d===!0&&(i|=24),d=ii(3,null,null,i),e.current=d,d.stateNode=e,i=_f(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Sf(d),e}function C_(e){return e?(e=ns,e):ns}function D_(e,i,s,o,u,d){u=C_(u),o.context===null?o.context=u:o.pendingContext=u,o=Na(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Oa(e,o,i),s!==null&&(Qn(s,e,i),Eo(s,e,i))}function U_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Fh(e,i){U_(e,i),(e=e.alternate)&&U_(e,i)}function L_(e){if(e.tag===13||e.tag===31){var i=pr(e,67108864);i!==null&&Qn(i,e,67108864),Fh(e,67108864)}}function N_(e){if(e.tag===13||e.tag===31){var i=li();i=qr(i);var s=pr(e,i);s!==null&&Qn(s,e,i),Fh(e,i)}}var Nc=!0;function iM(e,i,s,o){var u=B.T;B.T=null;var d=tt.p;try{tt.p=2,Hh(e,i,s,o)}finally{tt.p=d,B.T=u}}function aM(e,i,s,o){var u=B.T;B.T=null;var d=tt.p;try{tt.p=8,Hh(e,i,s,o)}finally{tt.p=d,B.T=u}}function Hh(e,i,s,o){if(Nc){var u=Gh(o);if(u===null)Ah(e,i,o,Oc,s),z_(e,o);else if(sM(u,e,i,s,o))o.stopPropagation();else if(z_(e,o),i&4&&-1<rM.indexOf(e)){for(;u!==null;){var d=ut(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Et(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var G=1<<31-Bt(S);C.entanglements[1]|=G,S&=~G}Vi(d),(ze&6)===0&&(gc=w()+500,Ho(0))}}break;case 31:case 13:C=pr(d,2),C!==null&&Qn(C,d,2),vc(),Fh(d,2)}if(d=Gh(o),d===null&&Ah(e,i,o,Oc,s),d===u)break;u=d}u!==null&&o.stopPropagation()}else Ah(e,i,o,null,s)}}function Gh(e){return e=Vu(e),Vh(e)}var Oc=null;function Vh(e){if(Oc=null,e=j(e),e!==null){var i=c(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=f(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Oc=e,null}function O_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case vt:return 2;case bt:return 8;case gt:case Kt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var kh=!1,Wa=null,qa=null,Ya=null,Yo=new Map,jo=new Map,ja=[],rM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function z_(e,i){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(i.pointerId)}}function Zo(e,i,s,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=ut(i),i!==null&&L_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function sM(e,i,s,o,u){switch(i){case"focusin":return Wa=Zo(Wa,e,i,s,o,u),!0;case"dragenter":return qa=Zo(qa,e,i,s,o,u),!0;case"mouseover":return Ya=Zo(Ya,e,i,s,o,u),!0;case"pointerover":var d=u.pointerId;return Yo.set(d,Zo(Yo.get(d)||null,e,i,s,o,u)),!0;case"gotpointercapture":return d=u.pointerId,jo.set(d,Zo(jo.get(d)||null,e,i,s,o,u)),!0}return!1}function P_(e){var i=j(e.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){e.blockedOn=i,so(e.priority,function(){N_(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,so(e.priority,function(){N_(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Gh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);Gu=o,s.target.dispatchEvent(o),Gu=null}else return i=ut(s),i!==null&&L_(i),e.blockedOn=s,!1;i.shift()}return!0}function B_(e,i,s){zc(e)&&s.delete(i)}function oM(){kh=!1,Wa!==null&&zc(Wa)&&(Wa=null),qa!==null&&zc(qa)&&(qa=null),Ya!==null&&zc(Ya)&&(Ya=null),Yo.forEach(B_),jo.forEach(B_)}function Pc(e,i){e.blockedOn===i&&(e.blockedOn=null,kh||(kh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,oM)))}var Bc=null;function I_(e){Bc!==e&&(Bc=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Bc===e&&(Bc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(Vh(o||s)===null)continue;break}var d=ut(s);d!==null&&(e.splice(i,3),i-=3,Gf(d,{pending:!0,data:u,method:s.method,action:o},o,u))}}))}function As(e){function i(G){return Pc(G,e)}Wa!==null&&Pc(Wa,e),qa!==null&&Pc(qa,e),Ya!==null&&Pc(Ya,e),Yo.forEach(i),jo.forEach(i);for(var s=0;s<ja.length;s++){var o=ja[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ja.length&&(s=ja[0],s.blockedOn===null);)P_(s),s.blockedOn===null&&ja.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var u=s[o],d=s[o+1],S=u[wn]||null;if(typeof d=="function")S||I_(s);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[wn]||null)C=S.formAction;else if(Vh(u)!==null)continue}else C=S.action;typeof C=="function"?s[o+1]=C:(s.splice(o,3),o-=3),I_(s)}}}function F_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function Xh(e){this._internalRoot=e}Ic.prototype.render=Xh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=li();D_(s,o,e,i,null,null)},Ic.prototype.unmount=Xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;D_(e.current,2,null,e,null,null),vc(),i[Aa]=null}};function Ic(e){this._internalRoot=e}Ic.prototype.unstable_scheduleHydration=function(e){if(e){var i=lr();e={blockedOn:null,target:e,priority:i};for(var s=0;s<ja.length&&i!==0&&i<ja[s].priority;s++);ja.splice(s,0,e),s===0&&P_(e)}};var H_=t.version;if(H_!=="19.2.8")throw Error(r(527,H_,"19.2.8"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var lM={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{Tt=Fc.inject(lM),Ct=Fc}catch{}}return il.createRoot=function(e,i){if(!l(e))throw Error(r(299));var s=!1,o="",u=Y0,d=j0,S=Z0;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=R_(e,1,!1,null,null,s,o,null,u,d,S,F_),e[Aa]=i.current,Th(e),new Xh(i)},il.hydrateRoot=function(e,i,s){if(!l(e))throw Error(r(299));var o=!1,u="",d=Y0,S=j0,C=Z0,G=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(S=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=R_(e,1,!0,i,s??null,o,u,G,d,S,C,F_),i.context=C_(null),s=i.current,o=li(),o=qr(o),u=Na(o),u.callback=null,Oa(s,u,o),s=o,i.current.lanes=s,Hn(i,s),Vi(i),e[Aa]=i.current,Th(e),new Ic(i)},il.version="19.2.8",il}var Wv;function C2(){if(Wv)return Td.exports;Wv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(t){console.error(t)}}return a(),Td.exports=R2(),Td.exports}var D2=C2(),Oi=nm();const U2=60,uu=1/U2,qv=.25;function L2(a){let t=performance.now(),n=0,r=!0,l=!1;function c(f){if(!r)return;let h=(f-t)/1e3;if(t=f,h>qv&&(h=qv),!l)for(n+=h;n>=uu;)a.simulate(uu),n-=uu;a.render(n/uu),requestAnimationFrame(c)}return requestAnimationFrame(c),{stop(){r=!1},setPaused(f){l=f},get paused(){return l}}}function N2(a){const t=new Set;window.addEventListener("keydown",f=>{f.repeat||(t.add(f.code),f.code==="KeyE"&&a("interact"),f.code==="KeyP"&&a("togglePhone"),f.code==="KeyM"&&a("muteToggle"))}),window.addEventListener("keyup",f=>t.delete(f.code)),window.addEventListener("blur",()=>t.clear());let n=0,r=1,l=!1;window.addEventListener("mousedown",f=>{(f.button===0||f.button===2)&&(l=!0)}),window.addEventListener("mouseup",()=>{l=!1}),window.addEventListener("mousemove",f=>{l&&(n+=f.movementX*.006)}),window.addEventListener("contextmenu",f=>f.preventDefault()),window.addEventListener("wheel",f=>{r=Math.min(2.2,Math.max(.55,r+f.deltaY*.0012))},{passive:!0});let c=0;return{read(){const f=(t.has("KeyW")||t.has("ArrowUp")?1:0)+(t.has("KeyS")||t.has("ArrowDown")?-1:0),h=(t.has("KeyD")||t.has("ArrowRight")?1:0)+(t.has("KeyA")||t.has("ArrowLeft")?-1:0);return{forward:f,steer:h,sprint:t.has("ShiftLeft")||t.has("ShiftRight"),camYaw:c}},setCamYaw(f){c=f},consumeOrbit(){const f=n;return n=0,f},get zoom(){return r}}}function O2(a){window.__game=a}var Dd={exports:{}},al={};var Yv;function z2(){if(Yv)return al;Yv=1;var a=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:c}}return al.Fragment=t,al.jsx=n,al.jsxs=n,al}var jv;function P2(){return jv||(jv=1,Dd.exports=z2()),Dd.exports}var Zt=P2();function B2(a){const t=a.pois.places,n=t.mayla,r=t.morea,l=t.blakes,c=t.blakes_dock;return{timeHours:7,day:"saturday",mode:"foot",player:{x:n.x+10,z:n.z+6,heading:Math.PI,speed:0},car:{x:n.x+20,z:n.z+10,heading:0,speed:0},boat:{x:c.waterX??c.x,z:c.waterZ??c.z,heading:Math.PI/2,speed:0},autopilot:null,npcs:{rafe:{name:"Rafe",color:13975436,x:r.x,z:r.z+8,heading:0,speed:0,activity:"idle",travelSpeed:1.6,waypoints:[],wpIndex:0},blake:{name:"Blake",color:14510880,x:l.x+6,z:l.z,heading:0,speed:0,activity:"idle",travelSpeed:1.6,waypoints:[],wpIndex:0},jonny:{name:"Jonny",color:3711337,x:l.x-6,z:l.z+4,heading:0,speed:0,activity:"idle",travelSpeed:1.6,waypoints:[],wpIndex:0},justin:{name:"Justin",color:10451690,x:r.x-8,z:r.z+12,heading:0,speed:0,activity:"idle",travelSpeed:1.6,waypoints:[],wpIndex:0},homeless:{name:"Dale",color:7438486,x:t.publix.x+80,z:t.publix.z+40,heading:0,speed:0,activity:"idle",travelSpeed:1.4,waypoints:[],wpIndex:0}},phone:{open:!1,app:"chat",unread:0,messages:[],choices:[]},quests:{},inventory:{},flags:{},timers:{},cart:null,traffic:{cars:[],peds:[]},score:0,floatie:null,yacht:null,ambient:[],ending:null}}function yl(a){return a.mode==="car"?a.car:a.mode==="boat"?a.boat:a.player}function Bx(a){const t=Math.floor(a)%24,n=Math.floor(a%1*60),r=t>=12?"PM":"AM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}async function I2(){const[a,t,n,r,l,c,f,h,m]=await Promise.all(["meta","roads","buildings","water","green","pois","navwater","navland","graph"].map(p=>fetch(`/boat-day-play/world/${p}.json`).then(_=>{if(!_.ok)throw new Error(`world data missing: ${p}.json (run npm run geo:bake)`);return _.json()})));return{meta:a,roads:t,buildings:n,water:r,green:l,pois:c,nav:f,navland:h,graph:m}}function Au(a){const t=Uint8Array.from(atob(a.bits),r=>r.charCodeAt(0));if(!a.packed)return t;const n=new Uint8Array(a.w*a.h);for(let r=0;r<n.length;r++)n[r]=t[r>>3]>>(r&7)&1;return n}let Ix=null;function F2(a){Ix=a}function Fx(){return Ix}function H2(a){const t=a.meta.bounds,n=252,r=378,l=Math.min(n/(t.maxX-t.minX),r/(t.maxZ-t.minZ)),c=(n-(t.maxX-t.minX)*l)/2,f=(r-(t.maxZ-t.minZ)*l)/2,h=E=>(E-t.minX)*l+c,m=E=>(E-t.minZ)*l+f,p=document.createElement("canvas");p.width=n,p.height=r;const _=p.getContext("2d");_.fillStyle="#101820",_.fillRect(0,0,n,r);const g=a.nav,x=Au(g),y=3;_.fillStyle="#22415c";const b=Math.max(1,g.cell*y*l);for(let E=0;E<g.h;E+=y)for(let M=0;M<g.w;M+=y)x[E*g.w+M]&&_.fillRect(h(g.minX+M*g.cell),m(g.minZ+E*g.cell),b,b);for(const E of[{cls:"street",color:"#2c3844",w:.6},{cls:"major",color:"#4d5c6b",w:1.4}]){_.strokeStyle=E.color,_.lineWidth=E.w,_.beginPath();for(const M of a.roads.roads)if(M.cls===E.cls){_.moveTo(h(M.pts[0]),m(M.pts[1]));for(let v=2;v<M.pts.length;v+=2)_.lineTo(h(M.pts[v]),m(M.pts[v+1]))}_.stroke()}return{draw(E,M,v){return E.clearRect(0,0,M,v),E.drawImage(p,0,0,M,v),{X:h,Z:m}}}}const wp={rafe:{label:"Rafe",color:"#ed64a6"},blake:{label:"Blake",color:"#f6ad55"},jonny:{label:"Jonny",color:"#68d391"},justin:{label:"Justin",color:"#b794f4"},homeless:{label:"Dale",color:"#a0aec0"},mike:{label:"you",color:"#63b3ed"},system:{label:"",color:"#718096"}};function G2({m:a}){if(a.from==="system")return Zt.jsx("div",{style:{textAlign:"center",color:"#8fa3b8",fontSize:11,margin:"6px 0"},children:a.text});const t=a.from==="mike",n=wp[a.from]??wp.system,r=`/boat-day-play/avatars/${a.from==="homeless"?"dale":a.from}.png`;return Zt.jsxs("div",{style:{display:"flex",justifyContent:t?"flex-end":"flex-start",margin:"3px 0",gap:6},children:[!t&&Zt.jsx("img",{src:r,alt:"",style:{width:24,height:24,borderRadius:12,alignSelf:"flex-end",border:`1.5px solid ${n.color}`}}),Zt.jsxs("div",{style:{maxWidth:"74%"},children:[!t&&Zt.jsx("div",{style:{fontSize:10,color:n.color,margin:"0 0 1px 8px"},children:n.label}),Zt.jsx("div",{style:{background:t?"#2b6cb0":"#2d3748",color:"#f0f4f8",borderRadius:14,padding:"6px 10px",fontSize:12.5,lineHeight:1.3},children:a.text})]})]})}function V2({s:a,act:t}){const n=Oi.useRef(null);return Oi.useEffect(()=>{n.current?.scrollTo(0,n.current.scrollHeight)},[a.phone.messages.length]),Zt.jsxs(Zt.Fragment,{children:[Zt.jsxs("div",{ref:n,style:{flex:1,overflowY:"auto",padding:"8px 10px"},children:[a.phone.messages.length===0&&Zt.jsx("div",{style:{textAlign:"center",color:"#718096",fontSize:12,marginTop:40},children:"the crew is asleep..."}),a.phone.messages.map((r,l)=>Zt.jsx(G2,{m:r},l))]}),a.phone.choices.length>0&&Zt.jsx("div",{style:{padding:8,borderTop:"1px solid #2d3748",display:"flex",flexDirection:"column",gap:6},children:a.phone.choices.map(r=>Zt.jsx("button",{"data-choice":r.id,onClick:()=>t.choose(r.id),style:{background:"#234e78",border:"1px solid #3182ce",color:"#e6f0fa",borderRadius:12,padding:"7px 10px",fontSize:12.5,cursor:"pointer",textAlign:"left"},children:r.text},r.id))})]})}function k2({s:a,act:t}){const n=Object.entries(a.quests),r=c=>c==="done"?"✅":c==="failed"?"❌":"🔸",l=(c,f,h)=>Zt.jsx("button",{"data-save-btn":h,onClick:f,style:{flex:1,background:"#234e78",border:"1px solid #3182ce",color:"#e6f0fa",borderRadius:10,padding:"7px 0",fontSize:11.5,cursor:"pointer"},children:c});return Zt.jsxs("div",{style:{flex:1,overflowY:"auto",padding:10,display:"flex",flexDirection:"column"},children:[Zt.jsxs("div",{style:{color:"#8fa3b8",fontSize:11,marginBottom:8},children:["DAY SCORE: ",a.score]}),Zt.jsxs("div",{style:{flex:1},children:[n.length===0&&Zt.jsx("div",{style:{color:"#718096",fontSize:12},children:"nothing yet. check the group chat."}),n.map(([c,f])=>f.status==="hidden"?null:Zt.jsxs("div",{style:{marginBottom:10,background:"#2d3748",borderRadius:10,padding:"8px 10px"},children:[Zt.jsxs("div",{style:{fontSize:12.5,color:"#f0f4f8"},children:[r(f.status)," ",f.title]}),Zt.jsx("div",{style:{fontSize:11,color:"#a8bccc",marginTop:3},children:f.hint})]},c))]}),Zt.jsxs("div",{style:{display:"flex",gap:6,marginTop:8},children:[l("💾 Save day",()=>t.save(),"save"),l("↩️ Load save",()=>t.load(),"load")]})]})}function X2({s:a}){const t=Oi.useRef(null);return Oi.useEffect(()=>{const n=t.current,r=Fx();if(!n||!r)return;const l=n.getContext("2d"),{X:c,Z:f}=r.draw(l,n.width,n.height),h=(m,p,_,g)=>{l.fillStyle=_,l.beginPath(),l.arc(c(m),f(p),4.5,0,7),l.fill(),l.strokeStyle="#0e1620",l.lineWidth=1.5,l.stroke(),l.fillStyle="#dbe7f0",l.font="bold 9px -apple-system, sans-serif",l.fillText(g,c(m)+7,f(p)+3)};for(const[m,p]of Object.entries(a.npcs))h(p.x,p.z,wp[m]?.color??"#fff",p.name);h(a.player.x,a.player.z,"#63b3ed","you")}),Zt.jsx("canvas",{ref:t,width:252,height:378,style:{flex:1,borderRadius:4}})}function W2({s:a,act:t}){const n=(r,l,c)=>Zt.jsxs("button",{"data-app":r,onClick:()=>t.setApp(r),style:{flex:1,background:a.phone.app===r?"#2b6cb0":"transparent",color:"#dbe7f0",border:"none",padding:"7px 0",fontSize:11.5,cursor:"pointer",borderRadius:8},children:[l,c]});return Zt.jsxs("div",{"data-phone":!0,style:{position:"absolute",right:18,bottom:18,width:270,height:480,background:"#141c26",borderRadius:26,border:"4px solid #ffffff",boxShadow:"0 18px 50px rgba(0,0,0,0.55)",display:"flex",flexDirection:"column",fontFamily:'"Arial Rounded MT Bold", ui-rounded, "Comic Sans MS", sans-serif',overflow:"hidden"},children:[Zt.jsxs("div",{style:{padding:"10px 14px 8px",display:"flex",justifyContent:"space-between",alignItems:"center",background:"linear-gradient(90deg,#ff5b7f,#ff9a3d)",borderBottom:"2px solid #ffffff"},children:[Zt.jsx("div",{style:{color:"#fff",fontSize:13.5,fontWeight:900,textShadow:"0 1px 0 rgba(120,30,50,0.5)"},children:a.phone.app==="chat"?"boat day 🚤 (4)":a.phone.app==="map"?"Find My Friends":"Quests"}),Zt.jsx("div",{style:{color:"#fff",fontSize:11.5,fontWeight:800},children:Bx(a.timeHours)})]}),Zt.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0},children:[a.phone.app==="chat"&&Zt.jsx(V2,{s:a,act:t}),a.phone.app==="map"&&Zt.jsx(X2,{s:a}),a.phone.app==="quests"&&Zt.jsx(k2,{s:a,act:t})]}),Zt.jsxs("div",{style:{display:"flex",gap:4,padding:6,borderTop:"1px solid #2d3748"},children:[n("chat","💬"),n("map","📍"),n("quests","📋"),Zt.jsx("button",{"data-phone-close":!0,onClick:t.close,style:{flex:1,background:"transparent",color:"#8fa3b8",border:"none",fontSize:11.5,cursor:"pointer"},children:"✕"})]})]})}function q2({s:a,objective:t}){const n=Oi.useRef(null);return Oi.useEffect(()=>{const r=n.current,l=Fx();if(!r||!l)return;const c=r.getContext("2d"),{X:f,Z:h}=l.draw(c,r.width,r.height);for(const _ of Object.values(a.npcs))c.fillStyle="#8fa3b8",c.beginPath(),c.arc(f(_.x),h(_.z),2,0,7),c.fill();if(t){const _=f(t.x),g=h(t.z);c.strokeStyle="#ffd166",c.lineWidth=1.6,c.beginPath(),c.moveTo(_-5,g),c.lineTo(_+5,g),c.moveTo(_,g-5),c.lineTo(_,g+5),c.stroke()}const m=f(a.player.x),p=h(a.player.z);c.save(),c.translate(m,p),c.rotate(a.player.heading+Math.PI/2),c.fillStyle="#63b3ed",c.beginPath(),c.moveTo(0,-5),c.lineTo(3.5,4),c.lineTo(-3.5,4),c.closePath(),c.fill(),c.strokeStyle="#0e1620",c.lineWidth=1,c.stroke(),c.restore()}),Zt.jsx("canvas",{ref:n,width:132,height:198,"data-hud-map":!0,style:{position:"absolute",top:14,left:14,borderRadius:10,border:"1px solid rgba(50,64,79,0.8)",background:"rgba(10,18,26,0.6)"}})}function Y2({version:a,getSnapshot:t,getPrompt:n,getObjective:r,actions:l}){const[c,f]=Oi.useState(t),[h,m]=Oi.useState(null),[p,_]=Oi.useState(null);return Oi.useEffect(()=>{const g=setInterval(()=>{f(t()),m(n()),_(r())},200);return()=>clearInterval(g)},[t,n,r]),c.flags.day_started?Zt.jsxs("div",{style:{position:"absolute",inset:0,fontFamily:'"Arial Rounded MT Bold", ui-rounded, "Comic Sans MS", -apple-system, sans-serif'},children:[Zt.jsxs("div",{style:{position:"absolute",top:14,right:18,background:"#fffdf5",color:"#153a5e",borderRadius:14,padding:"7px 14px",fontSize:15,fontWeight:800,letterSpacing:.5,border:"3px solid #fff",boxShadow:"0 4px 14px rgba(20,20,60,0.35)",transform:"rotate(1.2deg)"},children:[Bx(c.timeHours)," ",Zt.jsx("span",{style:{color:"#e2654f",fontWeight:800,fontSize:11},children:"SAT"})]}),!c.ending&&Zt.jsx(q2,{s:c,objective:p}),p&&!c.ending&&Zt.jsxs("div",{"data-objective":!0,style:{position:"absolute",top:14,left:"50%",transform:"translateX(-50%) rotate(-0.8deg)",background:"linear-gradient(180deg,#ffe66d,#ffc233)",color:"#153a5e",borderRadius:14,padding:"8px 16px",fontSize:13.5,fontWeight:800,maxWidth:"46vw",border:"3px solid #fff",boxShadow:"0 4px 14px rgba(20,20,60,0.35)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["⭐ ",p.label,Zt.jsxs("span",{style:{color:"#7a5a12",fontWeight:700,marginLeft:8},children:[Math.round(Math.hypot(p.x-c.player.x,p.z-c.player.z))," m"]})]}),h&&!c.phone.open&&Zt.jsx("div",{"data-prompt":!0,style:{position:"absolute",bottom:90,left:"50%",transform:"translateX(-50%) rotate(0.6deg)",background:"#fffdf5",color:"#d0342c",borderRadius:14,padding:"9px 18px",fontSize:14.5,fontWeight:800,border:"3px solid #fff",boxShadow:"0 4px 14px rgba(20,20,60,0.35)"},children:h}),!c.phone.open&&Zt.jsxs("button",{"data-phone-open":!0,onClick:l.togglePhone,style:{position:"absolute",right:18,bottom:18,width:52,height:52,borderRadius:16,background:"rgba(20,28,38,0.88)",border:"1px solid #32404f",fontSize:22,cursor:"pointer"},children:["📱",c.phone.unread>0&&Zt.jsx("span",{"data-unread":!0,style:{position:"absolute",top:-6,right:-6,background:"#e53e3e",color:"#fff",borderRadius:9,minWidth:18,height:18,fontSize:11,lineHeight:"18px",fontWeight:700},children:c.phone.unread})]}),c.phone.open&&Zt.jsx(W2,{s:c,act:l}),c.ending&&Zt.jsx("div",{"data-ending":!0,style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"linear-gradient(160deg, #1c9ea4 0%, #ff9a3d 55%, #ff5b7f 100%)"},children:Zt.jsxs("div",{style:{position:"relative",width:"min(78vw, 860px)",background:"#fffdf5",border:"14px solid #fffdf5",borderRadius:10,transform:"rotate(-1.6deg)",boxShadow:"0 30px 80px rgba(20,10,30,0.55)"},children:[Zt.jsx("div",{style:{paddingTop:"52%",backgroundImage:`url(/boat-day-play/endings/${c.ending.id}.png)`,backgroundSize:"cover",backgroundPosition:"center",borderRadius:4}}),Zt.jsx("div",{style:{position:"absolute",top:-26,left:-30,transform:"rotate(-7deg)",background:"linear-gradient(180deg,#ffe66d,#ffc233)",color:"#153a5e",border:"4px solid #fff",borderRadius:16,padding:"8px 18px",fontSize:17,fontWeight:900,boxShadow:"0 8px 20px rgba(20,20,60,0.4)"},children:"Greetings from Lake Boca!"}),Zt.jsx("div",{style:{position:"absolute",top:-18,right:-14,transform:"rotate(5deg)",background:"#fff",border:"3px dashed #c05e6e",borderRadius:6,padding:"6px 10px",fontSize:11,fontWeight:800,color:"#c05e6e",letterSpacing:1},children:"FL · AUG 2026"}),Zt.jsxs("div",{style:{textAlign:"center",padding:"16px 26px 20px"},children:[Zt.jsxs("div",{style:{fontSize:36,fontWeight:900,color:"#153a5e",letterSpacing:.5},children:[c.ending.id==="yacht"?"🛥️ ":c.ending.id==="solid"?"😎 ":"💀 ",c.ending.title]}),Zt.jsx("div",{style:{fontSize:14.5,color:"#41586e",marginTop:8,lineHeight:1.5},children:c.ending.blurb}),Zt.jsxs("div",{style:{fontSize:13,color:"#c05e6e",fontWeight:900,marginTop:12,letterSpacing:2},children:["FINAL SCORE: ",c.score," · SATURDAY 8:00 PM"]}),Zt.jsx("button",{"data-restart":!0,onClick:l.restart,style:{marginTop:14,background:"linear-gradient(180deg,#ff9a3d,#ff5b7f)",color:"#fff",border:"4px solid #fff",borderRadius:20,padding:"12px 34px",fontSize:16,fontWeight:900,cursor:"pointer",transform:"rotate(1deg)",textShadow:"0 2px 0 rgba(160,40,60,0.45)"},children:"RUN IT BACK 🔁"})]})]})}),Zt.jsxs("div",{style:{position:"absolute",bottom:8,left:12,color:"#7fa8c9",font:"11px monospace",opacity:.7},children:["boat day v",a," · WASD move · Shift sprint · E interact · P phone"]})]}):Zt.jsxs("div",{"data-title-screen":!0,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:"9vh",fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif",backgroundImage:"linear-gradient(rgba(8,14,22,0.15), rgba(8,14,22,0.55)), url(/boat-day-play/title.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#0c1826"},children:[Zt.jsx("button",{"data-start":!0,onClick:l.startDay,style:{marginTop:26,background:"linear-gradient(180deg,#ff9a3d,#ff5b7f)",color:"#fff",border:"4px solid #fff",borderRadius:22,padding:"15px 46px",fontSize:20,fontWeight:900,letterSpacing:1,cursor:"pointer",boxShadow:"0 10px 30px rgba(0,0,0,0.5)",transform:"rotate(-1.5deg)",textShadow:"0 2px 0 rgba(160,40,60,0.45)",fontFamily:'"Arial Rounded MT Bold", ui-rounded, "Comic Sans MS", sans-serif'},children:"START THE DAY"}),Zt.jsx("div",{style:{fontSize:13,color:"#f0f6fa",marginTop:14,textShadow:"0 2px 10px rgba(0,0,0,0.8)"},children:"you are MIKE · saturday 7:00 AM · pompano beach → lake boca · the crew is waiting"})]})}function Hx(a,t){const n=l=>{const c=t.pois.places[l];return{x:c.waterX??c.x,z:c.waterZ??c.z}},r=l=>a.quests[l]?.status==="active";if(r("publix_run"))return{...n("publix"),label:"Hit Publix: ice, subs, sunscreen",questId:"publix_run"};if(r("scoop_jonny")&&a.quests.publix_run?.status!=="active")return{x:a.npcs.jonny.x,z:a.npcs.jonny.z,label:"Scoop Jonny at Blake's curb",questId:"scoop_jonny"};if(r("get_to_blakes"))return{...n("blakes"),label:"Get to Blake's crib by 10:00 AM",questId:"get_to_blakes"};if(r("boat_up"))return{...n("blakes_dock"),label:"Boat up at the dock (E near the water)",questId:"boat_up"};if(r("lake_boca_run"))return{...n("lake_boca"),label:"Cruise the ICW north to Lake Boca",questId:"lake_boca_run"};if(r("anchor_spot"))return{...n("lake_boca"),label:"Stop the boat on the sandbar marker",questId:"anchor_spot"};if(r("floatie_rescue")&&a.floatie&&!a.floatie.collected)return{x:a.floatie.x,z:a.floatie.z,label:"Grab the runaway flamingo floatie",questId:"floatie_rescue"};if(r("big_papi")){const l=a.ambient.find(c=>c.kind==="pizza");if(l)return{x:l.x,z:l.z,label:"Flag down the Big Papi pizza boat",questId:"big_papi"}}if(r("daiquiri_barge")){const l=a.ambient.find(c=>c.kind==="foodboat");if(l)return{x:l.x,z:l.z,label:"Pull up to the snack barge",questId:"daiquiri_barge"}}return r("yacht_party")&&a.yacht?{x:a.yacht.x,z:a.yacht.z,label:"See what the yacht vibe is",questId:"yacht_party"}:r("bring_dale")?{...n("lake_boca"),label:"Get Dale to Lake Boca",questId:"bring_dale"}:!a.ending&&Object.values(a.quests).some(l=>l.status==="done")&&a.timeHours<20?{...n("lake_boca"),label:"Enjoy the day. Sundown verdict at 8 PM",questId:"vibes"}:null}const Sl=new Set;let Rp=!1;function Gx(a,t,n=2){const r=t&&t.length,l=r?t[0]*n:a.length;Sl.size&&Sl.clear();let c=Vx(a,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h=0,m=0,p=0;if(r&&(c=J2(a,t,c,n)),a.length>80*n){h=a[0],m=a[1];let _=h,g=m;for(let x=n;x<l;x+=n){const y=a[x],b=a[x+1];y<h&&(h=y),b<m&&(m=b),y>_&&(_=y),b>g&&(g=b)}p=Math.max(_-h,g-m),p=p!==0?32767/p:0}return Cp(c,f,h,m,p),f}function Vx(a,t,n,r,l){let c=null;if(l===fw(a,t,n,r)>0)for(let f=t;f<n;f+=r)c=Qv(f/r|0,a[f],a[f+1],c);else for(let f=n-r;f>=t;f-=r)c=Qv(f/r|0,a[f],a[f+1],c);return c&&Ml(c,c.next)&&(El(c),c=c.next),c}function Xr(a,t=a){const n=t===a;let r=a,l;do l=!1,r!==r.next&&(Sl.size===0||!Sl.has(r))&&(Ml(r,r.next)||vn(r.prev,r,r.next)===0)?((n||r===t)&&(t=r.prev),Rp=!0,El(r),r=r.prev,l=!0):(n||r!==t)&&(r=r.next,l=!n);while(l||r!==t);return t}function Cp(a,t,n,r,l){l&&rw(a,n,r,l);let c=a,f=!1;for(;a.prev!==a.next;){const h=a.prev,m=a.next;if(vn(h,a,m)<0&&(l?Z2(a,n,r,l):j2(a))){t.push(h.i,a.i,m.i),El(a),a=m,c=m;continue}if(a=m,a===c){if(Rp=!1,a=Xr(a),Rp){c=a;continue}if(!f){a=K2(a,t),c=a,f=!0;continue}Q2(a,t,n,r,l);break}}}function j2(a){const t=a.prev,n=a,r=a.next,l=t.x,c=n.x,f=r.x,h=t.y,m=n.y,p=r.y,_=Math.min(l,c,f),g=Math.min(h,m,p),x=Math.max(l,c,f),y=Math.max(h,m,p);let b=r.next;for(;b!==t;){if(b.x>=_&&b.x<=x&&b.y>=g&&b.y<=y&&!(l===b.x&&h===b.y)&&Ru(l,h,c,m,f,p,b.x,b.y)&&vn(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function Z2(a,t,n,r){const l=a.prev,c=a,f=a.next,h=l.x,m=c.x,p=f.x,_=l.y,g=c.y,x=f.y,y=Math.min(h,m,p),b=Math.min(_,g,x),E=Math.max(h,m,p),M=Math.max(_,g,x),v=Np(y,b,t,n,r),L=Np(E,M,t,n,r);let D=a.prevZ;for(;D&&D.z>=v;){if(D.x>=y&&D.x<=E&&D.y>=b&&D.y<=M&&D!==f&&!(h===D.x&&_===D.y)&&Ru(h,_,m,g,p,x,D.x,D.y)&&vn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}let T=a.nextZ;for(;T&&T.z<=L;){if(T.x>=y&&T.x<=E&&T.y>=b&&T.y<=M&&T!==f&&!(h===T.x&&_===T.y)&&Ru(h,_,m,g,p,x,T.x,T.y)&&vn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function K2(a,t){let n=a,r=!1;do{const l=n.prev,c=n.next.next;Wx(l,n,n.next,c,!1)&&bl(l,c)&&bl(c,l)&&(t.push(l.i,n.i,c.i),El(n),El(n.next),n=a=c,r=!0),n=n.next}while(n!==a);return r?Xr(n):n}function Q2(a,t,n,r,l){let c=a;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&lw(c,f)){let h=qx(c,f);c=Xr(c,c.next),h=Xr(h,h.next),Cp(c,t,n,r,l),Cp(h,t,n,r,l);return}f=f.next}c=c.next}while(c!==a)}let Dp=!1;function J2(a,t,n,r){const l=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*r,m=c<f-1?t[c+1]*r:a.length,p=Vx(a,h,m,r,!1);p===p.next&&Sl.add(p),l.push(ow(p))}l.sort($2),ew(a.length/r,t.length),Xx(n,n),Dp=!0;for(let c=0;c<l.length;c++)n=tw(l[c],n);return Dp=!1,Xr(n)}function $2(a,t){return a.x-t.x||a.y-t.y||(a.next.y-a.y)/(a.next.x-a.x)-(t.next.y-t.y)/(t.next.x-t.x)}function tw(a,t){const n=iw(a,t);if(!n)return t;const r=qx(n,a),l=r.next;return Xx(n,l.next),Xr(r,r.next),Xr(n,n.next)}const kx=16;let sn=new Float64Array(0),wu=0;const Up=[],Lp=[];function ew(a,t){const n=Math.ceil((a+2*t)/kx)+t+2;sn.length<n*4&&(sn=new Float64Array(n*4)),wu=0}function Xx(a,t){let n=a;do{const r=wu++;Up[r]=n;let l=1/0,c=1/0,f=-1/0,h=-1/0,m=0;do{const _=n.next;n.z=r,n.x<l&&(l=n.x),n.x>f&&(f=n.x),n.y<c&&(c=n.y),n.y>h&&(h=n.y),_.x<l&&(l=_.x),_.x>f&&(f=_.x),_.y<c&&(c=_.y),_.y>h&&(h=_.y),n=_}while(++m<kx&&n!==t);Lp[r]=n;const p=r*4;sn[p]=l,sn[p+1]=c,sn[p+2]=f,sn[p+3]=h}while(n!==t)}function nw(a,t){const n=a.z*4;t.x<sn[n]&&(sn[n]=t.x),t.y<sn[n+1]&&(sn[n+1]=t.y),t.x>sn[n+2]&&(sn[n+2]=t.x),t.y>sn[n+3]&&(sn[n+3]=t.y)}function Zv(a){let t=Lp[a];for(;t.prev.next!==t;)t=t.next;return Lp[a]=t,t}function Kv(a){let t=Up[a];for(;t.prev.next!==t;)t=t.next;return Up[a]=t,t}function iw(a,t){let n=t;const r=a.x,l=a.y;let c=-1/0,f;if(Ml(a,n))return n;for(let x=0,y=0;x<wu;x++,y+=4){if(l<sn[y+1]||l>sn[y+3]||sn[y]>r||sn[y+2]<=c)continue;const b=Zv(x);n=Kv(x);do{if(n.prev.next===n){if(Ml(a,n.next))return n.next;if(l<=n.y&&l>=n.next.y&&n.next.y!==n.y){const E=n.x+(l-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(E<=r&&E>c&&(c=E,f=n.x<n.next.x?n:n.next,E===r))return f}}n=n.next}while(n!==b)}if(!f)return null;const h=f.x,m=f.y,p=Math.min(l,m),_=Math.max(l,m);let g=1/0;for(let x=0,y=0;x<wu;x++,y+=4){if(sn[y+2]<h||sn[y]>r||sn[y+3]<p||sn[y+1]>_)continue;const b=Zv(x);n=Kv(x);do{if(n.prev.next===n&&r>=n.x&&n.x>=h&&r!==n.x&&Ru(l<m?r:c,l,h,m,l<m?c:r,l,n.x,n.y)){const E=Math.abs(l-n.y)/(r-n.x);(bl(n,a)||n.y===l&&n.next.y===l&&n.next.x>r)&&(E<g||E===g&&(n.x>f.x||n.x===f.x&&aw(f,n)))&&(f=n,g=E)}n=n.next}while(n!==b)}return f}function aw(a,t){return vn(a.prev,a,t.prev)<0&&vn(t.next,a,a.next)<0}const Mi=[];let rl=[],Nr=new Uint32Array(0),sl=new Uint32Array(0);const ol=new Uint32Array(256);function rw(a,t,n,r){let l=a,c=0;do l.z=Np(l.x,l.y,t,n,r),Mi[c++]=l,l=l.next;while(l!==a);sw(c);let f=null;for(let h=0;h<c;h++){const m=Mi[h];m.prevZ=f,f&&(f.nextZ=m),f=m}f.nextZ=null}function sw(a){if(a<=32){for(let t=1;t<a;t++){const n=Mi[t],r=n.z;let l=t-1;for(;l>=0&&Mi[l].z>r;)Mi[l+1]=Mi[l],l--;Mi[l+1]=n}return}Nr.length<a&&(Nr=new Uint32Array(a),sl=new Uint32Array(a),rl=new Array(a));for(let t=0;t<a;t++)Nr[t]=Mi[t].z;fu(a,Mi,Nr,rl,sl,0),fu(a,rl,sl,Mi,Nr,8),fu(a,Mi,Nr,rl,sl,16),fu(a,rl,sl,Mi,Nr,24)}function fu(a,t,n,r,l,c){ol.fill(0);for(let h=0;h<a;h++)ol[n[h]>>>c&255]++;let f=0;for(let h=0;h<256;h++){const m=ol[h];ol[h]=f,f+=m}for(let h=0;h<a;h++){const m=n[h],p=ol[m>>>c&255]++;r[p]=t[h],l[p]=m}}function Np(a,t,n,r,l){return a=(a-n)*l|0,t=(t-r)*l|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function ow(a){let t=a,n=a;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==a);return n}function Ru(a,t,n,r,l,c,f,h){return(l-f)*(t-h)>=(a-f)*(c-h)&&(a-f)*(r-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(r-h)}function lw(a,t){const n=Ml(a,t)&&vn(a.prev,a,a.next)>0&&vn(t.prev,t,t.next)>0;return a.next.i!==t.i&&(n||bl(a,t)&&bl(t,a)&&(vn(a.prev,a,t.prev)!==0||vn(a,t.prev,t)!==0))&&!cw(a,t)&&(n||uw(a,t))}function vn(a,t,n){return(t.y-a.y)*(n.x-t.x)-(t.x-a.x)*(n.y-t.y)}function Ml(a,t){return a.x===t.x&&a.y===t.y}function Wx(a,t,n,r,l=!0){const c=vn(a,t,n),f=vn(a,t,r),h=vn(n,r,a),m=vn(n,r,t);return(c>0&&f<0||c<0&&f>0)&&(h>0&&m<0||h<0&&m>0)?!0:l?!!(c===0&&hu(a,n,t)||f===0&&hu(a,r,t)||h===0&&hu(n,a,r)||m===0&&hu(n,t,r)):!1}function hu(a,t,n){return t.x<=Math.max(a.x,n.x)&&t.x>=Math.min(a.x,n.x)&&t.y<=Math.max(a.y,n.y)&&t.y>=Math.min(a.y,n.y)}function cw(a,t){const n=Math.min(a.x,t.x),r=Math.max(a.x,t.x),l=Math.min(a.y,t.y),c=Math.max(a.y,t.y);let f=a;do{const h=f.next;if(f.x>r&&h.x>r||f.x<n&&h.x<n||f.y>c&&h.y>c||f.y<l&&h.y<l){f=h;continue}if(f.i!==a.i&&h.i!==a.i&&f.i!==t.i&&h.i!==t.i&&Wx(f,h,a,t))return!0;f=h}while(f!==a);return!1}function bl(a,t){return vn(a.prev,a,a.next)<0?vn(a,t,a.next)>=0&&vn(a,a.prev,t)>=0:vn(a,t,a.prev)<0||vn(a,a.next,t)<0}function uw(a,t){let n=a,r=!1;const l=(a.x+t.x)/2,c=(a.y+t.y)/2;do{const f=n.next;n.y>c!=f.y>c&&l<(f.x-n.x)*(c-n.y)/(f.y-n.y)+n.x&&(r=!r),n=f}while(n!==a);return r}function qx(a,t){const n=Op(a.i,a.x,a.y),r=Op(t.i,t.x,t.y),l=a.next,c=t.prev;return a.next=t,t.prev=a,n.next=l,l.prev=n,r.next=n,n.prev=r,c.next=r,r.prev=c,r}function Qv(a,t,n,r){const l=Op(a,t,n);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function El(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ),Dp&&nw(a.prev,a.next)}function Op(a,t,n){return{i:a,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null}}function fw(a,t,n,r){let l=0;for(let c=t,f=n-r;c<n;c+=r)l+=(a[f]-a[c])*(a[c+1]+a[f+1]),f=c;return l}const Si={sea:.05,green:.06,pier:.35,road:.12,path:.09,bridge:6};class ll{pos=[];norm=[];col=[];tri(t,n,r,l,c,f,h,m,p,_,g,x){const y=l-t,b=c-n,E=f-r,M=h-t,v=m-n,L=p-r;let D=b*L-E*v,T=E*M-y*L,H=y*v-b*M;const I=Math.hypot(D,T,H)||1;D/=I,T/=I,H/=I,T<0&&(D=-D,T=-T,H=-H),this.pos.push(t,n,r,l,c,f,h,m,p);for(let O=0;O<3;O++)this.norm.push(D,T,H),this.col.push(_,g,x)}build(){const t=new ti;return t.setAttribute("position",new $e(this.pos,3)),t.setAttribute("normal",new $e(this.norm,3)),t.setAttribute("color",new $e(this.col,3)),t}}function Ud(a,t,n,r,l,c,f){const h=[...t],m=[];for(const _ of n)m.push(h.length/2),h.push(..._);const p=Gx(h,m.length?m:void 0,2);for(let _=0;_<p.length;_+=3){const g=p[_]*2,x=p[_+1]*2,y=p[_+2]*2;a.tri(h[g],r,h[g+1],h[x],r,h[x+1],h[y],r,h[y+1],l,c,f)}}function hw(a,t,n,r,l,c,f){const h=n/2;for(let m=0;m+3<t.length;m+=2){const p=t[m],_=t[m+1],g=t[m+2],x=t[m+3],y=g-p,b=x-_,E=Math.hypot(y,b);if(E<.01)continue;const M=-b/E*h,v=y/E*h;a.tri(p+M,r,_+v,g+M,r,x+v,g-M,r,x-v,l,c,f),a.tri(p+M,r,_+v,g-M,r,x-v,p-M,r,_-v,l,c,f)}}function dw(a,t,n,r,l,c){const f=Gx(t,void 0,2);for(let g=0;g<f.length;g+=3){const x=f[g]*2,y=f[g+1]*2,b=f[g+2]*2;a.tri(t[x],n,t[x+1],t[y],n,t[y+1],t[b],n,t[b+1],r,l,c)}const h=r*.82,m=l*.82,p=c*.82,_=t.length/2;for(let g=0;g<_;g++){const x=(g+1)%_,y=t[2*g],b=t[2*g+1],E=t[2*x],M=t[2*x+1];a.tri(y,0,b,E,0,M,E,n,M,h,m,p),a.tri(y,0,b,E,n,M,y,n,b,h,m,p)}}function pw(a){const t=new In,n=(O=!0)=>new Ue({vertexColors:!0,flatShading:O,side:Li}),r=a.meta.bounds,l=new jt(new kr(r.maxX-r.minX+3e3,r.maxZ-r.minZ+3e3),new Ue({color:15522228}));l.rotation.x=-Math.PI/2,l.position.set((r.minX+r.maxX)/2,0,(r.minZ+r.maxZ)/2),t.add(l);const c=new ll,f=Au(a.nav),{cell:h,minX:m,minZ:p,w:_,h:g}=a.nav,x=.16,y=.74,b=.76;for(let O=0;O<g;O++){let z=-1;for(let A=0;A<=_;A++){const R=A<_&&f[O*_+A];if(R&&z<0&&(z=A),!R&&z>=0){const P=m+z*h,q=m+A*h,$=p+O*h,et=$+h;c.tri(P,Si.sea,$,q,Si.sea,$,q,Si.sea,et,x,y,b),c.tri(P,Si.sea,$,q,Si.sea,et,P,Si.sea,et,x,y,b),z=-1}}}t.add(new jt(c.build(),n()));const E=new ll;for(const O of a.water.polys)Ud(E,O.outer,O.holes,Si.sea,.19,.71,.74);t.add(new jt(E.build(),n()));const M=new ll;for(const O of a.green.green)Ud(M,O,[],Si.green,.55,.82,.6);for(const O of a.green.piers)Ud(M,O,[],Si.pier,.75,.72,.66);t.add(new jt(M.build(),n()));const v=new ll,L={major:[.45,.45,.48],street:[.55,.55,.58],service:[.62,.62,.64],path:[.78,.72,.58]};for(const O of a.roads.roads){const[z,A,R]=L[O.cls]??[.5,.5,.5],P=O.bridge?Si.bridge:O.cls==="path"?Si.path:Si.road;hw(v,O.pts,O.w,P,z,A,R)}t.add(new jt(v.build(),n()));const D=new ll,T=[[.95,.66,.62],[.97,.9,.76],[.73,.9,.83],[.68,.85,.92],[.97,.93,.62],[.85,.78,.93],[.96,.83,.7]];if(a.buildings.buildings.forEach((O,z)=>{const A=T[(z*2654435761>>>0)%T.length],R=.92+(z*40503>>>0)%100/1e3;dw(D,O.pts,O.h,A[0]*R,A[1]*R,A[2]*R)}),t.add(new jt(D.build(),n())),a.pois.trees.length){const O=new Ta(.14,.22,5.2,5),z=new Ue({color:9071178}),A=new kr(3.2,.9),R=new Ue({color:5081674,side:Li});for(let P=0;P<a.pois.trees.length;P+=2){const q=a.pois.trees[P],$=a.pois.trees[P+1],et=new jt(O,z);et.position.set(q,2.6,$),et.rotation.z=(P*37%10-5)*.012,t.add(et);for(let dt=0;dt<6;dt++){const B=new jt(A,R);B.position.set(q,5.3,$),B.rotation.y=dt/6*Math.PI*2+P*.7,B.rotation.z=.42,t.add(B)}}}const H=new Vr({color:16765286,transparent:!0,opacity:.28,depthWrite:!1}),I=new Vr({color:14721064});for(const O of Object.values(a.pois.places)){const z=new jt(new Ta(.9,.9,42,8),H);z.position.set(O.x,21,O.z);const A=new jt(new Pu(1.4),I);A.position.set(O.x,14,O.z),t.add(z,A)}return t}function mw(a){const t=a.nav,n=Au(t),{cell:r,minX:l,minZ:c,w:f,h}=t,m=a.navland,p=Au(m),_=(z,A)=>{const R=Math.floor((z-m.minX)/m.cell),P=Math.floor((A-m.minZ)/m.cell);return R<0||P<0||R>=m.w||P>=m.h?!1:p[P*m.w+R]===1},g=(z,A)=>{const R=Math.floor((z-l)/r),P=Math.floor((A-c)/r);return R<0||P<0||R>=f||P>=h?-1:P*f+R},x=(z,A)=>{const R=g(z,A);return R>=0&&n[R]===1},y=z=>[l+z%f*r+r/2,c+Math.floor(z/f)*r+r/2];function b(z,A,R,P){const q=Math.hypot(R-z,P-A),$=Math.max(1,Math.ceil(q/(r/2)));for(let et=0;et<=$;et++)if(!x(z+(R-z)*et/$,A+(P-A)*et/$))return!1;return!0}function E(z,A,R,P){const q=g(z,A),$=g(R,P);if(q<0||$<0||!n[q]||!n[$])return null;const et=new Int32Array(f*h).fill(-2);et[q]=-1;let dt=[q],B=!1;for(;dt.length&&!B;){const Z=[];for(const at of dt){if(at===$){B=!0;break}const lt=Math.floor(at/f),X=at%f;for(const[ot,mt]of[[1,0],[-1,0],[0,1],[0,-1]]){const Lt=X+ot,Ut=lt+mt;if(Lt<0||Ut<0||Lt>=f||Ut>=h)continue;const Jt=Ut*f+Lt;et[Jt]!==-2||!n[Jt]||(et[Jt]=at,Z.push(Jt))}}dt=Z}if(!B&&et[$]===-2)return null;const tt=[];for(let Z=$;Z!==-1;Z=et[Z])tt.push(Z);tt.reverse();const Y=[z,A];let J=z,pt=A,N=0;for(;N<tt.length-1;){let Z=N+1;for(let X=tt.length-1;X>N;X--){const[ot,mt]=y(tt[X]);if(b(J,pt,ot,mt)){Z=X;break}}const[at,lt]=y(tt[Z]);Y.push(at,lt),J=at,pt=lt,N=Z}return Y.push(R,P),Y}const M=a.graph.nodes,v=M.length/2,L=Array.from({length:v},()=>[]);for(let z=0;z+2<a.graph.edges.length;z+=3){const A=a.graph.edges[z],R=a.graph.edges[z+1];a.graph.edges[z+2]&&(L[A].push(R),L[R].push(A))}const D=z=>M[2*z],T=z=>M[2*z+1];function H(z,A){let R=-1,P=1/0;for(let q=0;q<v;q++){if(!L[q].length)continue;const $=(D(q)-z)**2+(T(q)-A)**2;$<P&&(P=$,R=q)}return R}function I(z,A,R,P){const q=H(z,A),$=H(R,P);if(q<0||$<0)return null;const et=new Float64Array(v).fill(1/0),dt=new Float64Array(v).fill(1/0),B=new Int32Array(v).fill(-1),tt=new Set([q]),Y=N=>Math.hypot(D(N)-D($),T(N)-T($));for(et[q]=0,dt[q]=Y(q);tt.size;){let N=-1,Z=1/0;for(const at of tt)dt[at]<Z&&(Z=dt[at],N=at);if(N===$)break;tt.delete(N);for(const at of L[N]){const lt=et[N]+Math.hypot(D(at)-D(N),T(at)-T(N));lt<et[at]&&(B[at]=N,et[at]=lt,dt[at]=lt+Y(at),tt.add(at))}}if(B[$]===-1&&$!==q)return null;const J=[];for(let N=$;N!==-1;N=B[N])J.push(N);J.reverse();const pt=[z,A];for(const N of J)pt.push(D(N),T(N));return pt}function O(z,A,R=120){if(!_(z,A)&&!x(z,A))return[z,A];const P=m.cell;for(let q=P;q<=R;q+=P)for(let $=0;$<Math.PI*2;$+=Math.PI/12){const et=z+Math.cos($)*q,dt=A+Math.sin($)*q;if(!_(et,dt)&&!x(et,dt))return[et,dt]}return[z,A]}return{isWater:x,isBlocked:_,freeSpot:O,waterPath:E,roadPath:I,nearestRoadNode:(z,A)=>{const R=H(z,A);return[D(R),T(R)]}}}const Ld={foot:{accel:30,maxSpeed:4.2,sprintMax:7.5,turn:10,drag:12},car:{accel:9,maxSpeed:22,sprintMax:30,turn:1.9,drag:1.4},boat:{accel:4.5,maxSpeed:13,sprintMax:17,turn:1.1,drag:.55}};function Jv(a,t,n,r,l){const c=t.sprint?r.sprintMax:r.maxSpeed;a.speed+=t.forward*r.accel*n;const f=r.drag*n;a.speed>0?a.speed=Math.max(0,a.speed-f*(t.forward>0?.2:1)*Math.max(1,a.speed*.15)):a.speed<0&&(a.speed=Math.min(0,a.speed+f*Math.max(1,-a.speed*.15))),a.speed=Math.max(-c*.4,Math.min(c,a.speed));const h=r.turn>5?1:Math.min(1,Math.abs(a.speed)/6+.15);a.heading+=t.steer*r.turn*h*n*(a.speed<0?-1:1);const m=a.x+Math.cos(a.heading)*a.speed*n,p=a.z+Math.sin(a.heading)*a.speed*n;l(m,p)?(a.x=m,a.z=p):l(m,a.z)?(a.x=m,a.speed*=.6):l(a.x,p)?(a.z=p,a.speed*=.6):a.speed=0}function gw(a,t){const n=a.autopilot;if(!n||!n.active)return{forward:0,steer:0,sprint:!1};const r=a.mode==="boat"?22:a.mode==="car"?12:3;for(;n.wpIndex<n.waypoints.length/2;){const x=n.waypoints[2*n.wpIndex],y=n.waypoints[2*n.wpIndex+1];if(Math.hypot(x-t.x,y-t.z)>r)break;n.wpIndex++}if(n.wpIndex>=n.waypoints.length/2)return n.active=!1,t.speed=0,{forward:0,steer:0,sprint:!1};const l=n.waypoints[2*n.wpIndex],c=n.waypoints[2*n.wpIndex+1],f=Math.hypot(l-t.x,c-t.z);let m=Math.atan2(c-t.z,l-t.x)-t.heading;for(;m>Math.PI;)m-=2*Math.PI;for(;m<-Math.PI;)m+=2*Math.PI;const p=Math.max(-1,Math.min(1,m*2.2));let _=Math.abs(m)>1.2?.25:Math.abs(m)>.5?.6:1;const g=n.wpIndex===n.waypoints.length/2-1;if(g){const x=Math.max(1.5,f*.35);t.speed>x?_=-.8:_=Math.min(_,.4)}return{forward:_,steer:p,sprint:Math.abs(m)<.2&&!g}}function _w(a,t,n,r){a.timeHours+=n/60*5/60;const l=a.mode==="car"?a.car:a.mode==="boat"?a.boat:a.player;let c=a.autopilot?.active?gw(a,l):t;if(!a.autopilot?.active&&a.mode==="foot"&&t.camYaw!==void 0&&(t.forward!==0||t.steer!==0)){const f=t.camYaw,h=t.forward*Math.cos(f)+t.steer*Math.cos(f+Math.PI/2),m=t.forward*Math.sin(f)+t.steer*Math.sin(f+Math.PI/2),p=Math.min(1,Math.hypot(h,m));p>.01&&(l.heading=Math.atan2(m,h),c={forward:p,steer:0,sprint:t.sprint})}a.mode==="boat"?Jv(l,c,n,Ld.boat,(f,h)=>r.isWater(f,h)):Jv(l,c,n,a.mode==="car"?Ld.car:Ld.foot,(f,h)=>!r.isWater(f,h)&&!r.isBlocked(f,h)),a.mode!=="foot"&&(a.player.x=l.x,a.player.z=l.z,a.player.heading=l.heading)}function vw(a,t){for(;a.wpIndex<a.waypoints.length/2;){const n=a.waypoints[2*a.wpIndex],r=a.waypoints[2*a.wpIndex+1],l=Math.hypot(n-a.x,r-a.z);if(l>2.5){a.heading=Math.atan2(r-a.z,n-a.x);const c=Math.min(l,a.travelSpeed*t);a.x+=Math.cos(a.heading)*c,a.z+=Math.sin(a.heading)*c,a.speed=a.travelSpeed;return}a.wpIndex++}a.speed=0,a.activity="idle"}function xw(a,t,n){const r=yl(a);let l=0;for(const c of Object.values(a.npcs))if(c.activity==="travel")vw(c,t);else if(c.activity==="follow"){const f=Math.hypot(r.x-c.x,r.z-c.z);if(f>4){c.heading=Math.atan2(r.z-c.z,r.x-c.x);const h=f>12?c.travelSpeed*3.2:c.travelSpeed*1.6,m=c.x+Math.cos(c.heading)*h*t,p=c.z+Math.sin(c.heading)*h*t;!n.isWater(m,p)&&!n.isBlocked(m,p)&&(c.x=m,c.z=p,c.speed=h)}else c.speed=0}else if(c.activity==="riding"){const f=l%2===0?1:-1,h=Math.floor(l/2)+1;c.x=r.x-Math.cos(r.heading)*h*1.4+Math.cos(r.heading+Math.PI/2)*f*1.1,c.z=r.z-Math.sin(r.heading)*h*1.4+Math.sin(r.heading+Math.PI/2)*f*1.1,c.heading=r.heading,c.speed=r.speed,l++}}function fl(a,t,n,r,l){const c=t.roadPath(a.x,a.z,n,r)??[a.x,a.z,n,r];c.push(n,r),a.waypoints=c,a.wpIndex=0,a.travelSpeed=l,a.activity="travel"}function It(a,t,n){a.phone.messages.push({at:a.timeHours,from:t,text:n}),t!=="mike"&&a.phone.unread++}function du(a,t){a.phone.choices=t}function nr(a,t){return a.flags[`chose_${t}`]===!0}function va(a,t,n,r){const l=t.pois.places[n];return l?Math.hypot((l.waterX??l.x)-a.player.x,(l.waterZ??l.z)-a.player.z)<r:!1}const cl=(a,t)=>a.timeHours>=t,yw=[{id:"wakeup_chat",when:a=>cl(a,7.03),run:a=>{It(a,"rafe","yooo BOAT DAY 🍻🚤"),It(a,"blake","boat leaves my dock at 10, dont be late"),It(a,"justin","crashed at rafes, we got our own publix run 🛒 see yall at blakes"),It(a,"rafe","mike u up??"),du(a,[{id:"up_lets_go",text:"been up. LET'S GO 🔥"},{id:"up_5more",text:"5 more min..."}])}},{id:"blake_list",when:a=>nr(a,"up_lets_go")||nr(a,"up_5more")||cl(a,7.3),run:a=>{It(a,"blake","somebody hit publix: ICE, pub subs, sunscreen. i got the cooler"),a.quests.publix_run={status:"active",title:"The Publix Run",hint:"Get ice, pub subs and sunscreen at Publix (2511 E Atlantic Blvd)"},It(a,"system","New quest: The Publix Run")}},{id:"jonny_scoop_ask",when:a=>(a.quests.publix_run?.status??"hidden")!=="hidden"&&cl(a,7.12),run:a=>{It(a,"jonny","yo mike im at blakes already... scoop me on ur way? 🙏"),du(a,[{id:"scoop_yes",text:"say less, omw after publix"},{id:"scoop_no",text:"nah walk lol"}])}},{id:"scoop_accepted",when:a=>nr(a,"scoop_yes"),run:a=>{It(a,"jonny","preciate u 🫡 ill be out front"),a.quests.scoop_jonny={status:"active",title:"Scoop Jonny",hint:"Jonny's waiting out front at Blake's (3100 NE 48th Ct)"},It(a,"system","New quest: Scoop Jonny")}},{id:"scoop_declined",when:a=>nr(a,"scoop_no"),run:a=>{It(a,"jonny","cold world. COLD world 🥶"),a.score-=5}},{id:"jonny_boards",when:(a,t)=>a.quests.scoop_jonny?.status==="active"&&a.mode==="car"&&Math.hypot(a.npcs.jonny.x-a.car.x,a.npcs.jonny.z-a.car.z)<15&&!!t,run:a=>{a.npcs.jonny.activity="riding",a.quests.scoop_jonny.status="done",a.score+=10,It(a,"jonny","AYYY lets ride 🚗💨"),It(a,"system","Quest complete: Scoop Jonny (+10)")}},{id:"publix_arrive_hint",when:(a,t)=>a.quests.publix_run?.status==="active"&&va(a,t.world,"publix",90),run:a=>{It(a,"system","Walk up to Publix and press E to shop")}},{id:"boat_time_reminder",when:a=>cl(a,9.75)&&a.mode!=="boat",run:a=>{It(a,"blake","yall better be close. boat leaves at 10 SHARP")}},{id:"blake_dock_greeting",when:(a,t)=>va(a,t.world,"blakes",60),run:a=>{It(a,"blake","in the back, hop on when ready 🤙"),a.quests.publix_run?.status==="active"&&It(a,"blake","WAIT. tell me u got the ice..."),a.quests.boat_up={status:"active",title:"Boat up",hint:"Hop on the boat at Blake's dock (E near the water)"},It(a,"system","New quest: Boat up")}},{id:"crew_aboard",when:(a,t)=>a.mode==="boat"&&va(a,t.world,"blakes_dock",120),run:a=>{const t=n=>Math.hypot(n.x-a.boat.x,n.z-a.boat.z)<150;a.npcs.blake.activity="riding",t(a.npcs.rafe)&&(a.npcs.rafe.activity="riding"),t(a.npcs.justin)&&(a.npcs.justin.activity="riding"),(a.quests.scoop_jonny?.status==="done"||t(a.npcs.jonny))&&(a.npcs.jonny.activity="riding"),a.quests.boat_up?.status==="active"&&(a.quests.boat_up.status="done",a.score+=10),It(a,"system","The crew is aboard. Lake Boca is north up the Intracoastal."),It(a,"blake","THROTTLE UP 🌊 lake boca or bust"),a.quests.lake_boca_run={status:"active",title:"To the sandbar",hint:"Cruise the ICW north to Lake Boca"},It(a,"system","New quest: To the sandbar")}},{id:"cruise_hillsboro",when:(a,t)=>a.mode==="boat"&&a.quests.lake_boca_run?.status==="active"&&va(a,t.world,"hillsboro_inlet",400),run:a=>{It(a,"rafe","passing hillsboro?? sandbar gonna be PACKED today 🏝️"),It(a,"jonny","somebody hand me a sub 🥪")}},{id:"lake_arrival",when:(a,t)=>a.quests.lake_boca_run?.status==="active"&&va(a,t.world,"lake_boca",250),run:(a,t)=>{a.quests.lake_boca_run.status="done",a.score+=20,It(a,"system","Quest complete: To the sandbar (+20)"),It(a,"blake","WELCOME TO LAKE BOCA BABY 🎉"),It(a,"rafe","its POPPIN. jetskis everywhere, whole flotilla out 🤯"),It(a,"jonny","yo the BIG PAPI boat is out here?? we eating good"),a.quests.big_papi={status:"active",title:"Big Papi Delivery",hint:"Flag down the Big Papi pizza boat doing laps around the anchorage"},a.quests.daiquiri_barge={status:"active",title:"The snack barge",hint:"Pull up to the ice cream / daiquiri barge by the sandbar"},a.quests.jetski_brushback={status:"active",title:"Jetski brushback",hint:"Trade wakes with one of the jetskis ripping laps (get close at speed)"},a.quests.meet_neighbors={status:"active",title:"Meet the neighbors",hint:"Cruise past 3 different raft-ups and say whats up"},It(a,"system","New quests: Big Papi Delivery, The snack barge, Jetski brushback, Meet the neighbors");const n=t.world.pois.places.lake_boca,r=n.waterX??n.x,l=n.waterZ??n.z;a.quests.anchor_spot={status:"active",title:"Claim the spot",hint:"Stop the boat right on the sandbar marker"};let c=r,f=l;for(const[h,m]of[[180,140],[140,100],[100,60],[-140,100],[0,160],[120,-80]])if(t.nav.isWater(r+h,l+m)){c=r+h,f=l+m;break}a.floatie={x:c,z:f,collected:!1},a.quests.floatie_rescue={status:"active",title:"Floatie overboard",hint:"Someone's flamingo floatie is drifting east. Grab it"},It(a,"system","New quests: Claim the spot, Floatie overboard")}},{id:"anchor_claimed",when:(a,t)=>a.quests.anchor_spot?.status==="active"&&a.mode==="boat"&&va(a,t.world,"lake_boca",30)&&Math.abs(a.boat.speed)<.5,run:a=>{a.quests.anchor_spot.status="done",a.score+=15,It(a,"system","Quest complete: Claim the spot (+15)"),It(a,"rafe","PRIME real estate 🤌")}},{id:"floatie_grabbed",when:a=>a.quests.floatie_rescue?.status==="active"&&a.floatie!==null&&a.mode==="boat"&&Math.hypot(a.floatie.x-a.boat.x,a.floatie.z-a.boat.z)<26,run:a=>{a.floatie.collected=!0,a.quests.floatie_rescue.status="done",a.inventory.flamingo_floatie=1,a.score+=10,It(a,"system","Quest complete: Floatie overboard (+10)"),It(a,"jonny","flamingo SECURED 🦩")}},{id:"yacht_appears",when:a=>a.quests.anchor_spot?.status==="done"&&a.quests.floatie_rescue?.status==="done",run:(a,t)=>{const n=t.world.pois.places.lake_boca,r=n.waterX??n.x,l=n.waterZ??n.z;let c=r-60,f=l-40;for(const[h,m]of[[-160,-120],[-120,-80],[-80,-140],[100,-120],[-60,-40]])if(t.nav.isWater(r+h,l+m)&&t.nav.isWater(r+h+30,l+m+10)){c=r+h,f=l+m;break}a.yacht={x:c,z:f,heading:.4},It(a,"rafe","yo... whose yacht just pulled in 👀"),a.quests.yacht_party={status:"active",title:"The yacht",hint:"Pull up to the yacht and see what the vibe is"},It(a,"system","New quest: The yacht")}},{id:"yacht_invite",when:a=>a.quests.yacht_party?.status==="active"&&a.yacht!==null&&a.mode==="boat"&&Math.hypot(a.yacht.x-a.boat.x,a.yacht.z-a.boat.z)<60,run:a=>{It(a,"system",'The yacht owner waves you over: "Great day right? Party at sundown, you all in?"'),du(a,[{id:"yacht_yes",text:"we are SO in 🛥️"},{id:"yacht_no",text:"nah we good, crew day"}])}},{id:"yacht_accepted",when:a=>nr(a,"yacht_yes"),run:a=>{a.quests.yacht_party.status="done",a.score+=20,It(a,"system","Quest complete: The yacht (+20). Sundown plans: secured."),It(a,"blake","do NOT let rafe near the captain 💀")}},{id:"yacht_declined",when:a=>nr(a,"yacht_no"),run:a=>{a.quests.yacht_party.status="done",a.score+=8,It(a,"system","Crew-only day it is (+8).")}},{id:"dale_at_lake_bonus",when:(a,t)=>a.quests.bring_dale?.status==="active"&&a.npcs.homeless.activity==="riding"&&va(a,t.world,"lake_boca",250),run:a=>{a.quests.bring_dale.status="done",a.score+=20,It(a,"system","Quest complete: Boat Day for Dale (+20)"),It(a,"system",'Dale: "best day of my whole life, no cap"'),It(a,"rafe","DALE IS HIM 🐐")}},{id:"sunset_on_water",when:a=>a.timeHours>=18.7&&a.mode==="boat",run:a=>{a.score+=10,It(a,"system","Golden hour on the water (+10)"),It(a,"jonny","nobody talk. look at that sunset 🌅")}},{id:"big_papi_pizza",when:a=>{if(a.quests.big_papi?.status!=="active"||a.mode!=="boat")return!1;const t=a.ambient.find(n=>n.kind==="pizza");return!!t&&Math.hypot(t.x-a.boat.x,t.z-a.boat.z)<45},run:a=>{a.quests.big_papi.status="done",a.inventory.big_papi_pie=1,a.score+=12,It(a,"system","Quest complete: Big Papi Delivery (+12)"),It(a,"system",'Big Papi hands over a whole pie. "Full menu available!"'),It(a,"rafe","pizza on the water hits DIFFERENT 🍕")}},{id:"daiquiri_barge_snacks",when:a=>{if(a.quests.daiquiri_barge?.status!=="active"||a.mode!=="boat")return!1;const t=a.ambient.find(n=>n.kind==="foodboat");return!!t&&Math.hypot(t.x-a.boat.x,t.z-a.boat.z)<40},run:a=>{a.quests.daiquiri_barge.status="done",a.inventory.ice_cream=4,a.inventory.daiquiri=4,a.score+=8,It(a,"system","Quest complete: The snack barge (+8)"),It(a,"jonny","daiquiris AND ice cream. day = made 🍦"),It(a,"system","Dale got the biggest cone they sell.")}},{id:"rafe_justin_convoy",when:a=>cl(a,7.3),run:(a,t)=>{It(a,"rafe","me n just are rolling out 🏁 publix stop first");const n=t.world.pois.places.publix;fl(a.npcs.rafe,t.nav,n.x+40,n.z+50,12),fl(a.npcs.justin,t.nav,n.x+44,n.z+54,12)}},{id:"convoy_publix_stop",when:(a,t)=>a.flags.rule_rafe_justin_convoy===!0&&Math.hypot(a.npcs.rafe.x-(t.world.pois.places.publix.x+40),a.npcs.rafe.z-(t.world.pois.places.publix.z+50))<25,run:(a,t)=>{It(a,"justin","rafe made me carry all 4 cases 😤"),It(a,"rafe","character building. otw to blakes 🫡");const n=t.world.pois.places.blakes;fl(a.npcs.rafe,t.nav,n.x+10,n.z+6,12),fl(a.npcs.justin,t.nav,n.x+14,n.z+10,12)}},{id:"celsius_morning",when:(a,t)=>a.mode==="foot"&&a.timeHours<7.75&&va(a,t.world,"publix",90),run:a=>{a.inventory.celsius=1,a.score+=3,It(a,"system","Early Celsius from your local Publix secured ⚡ (+3)"),It(a,"mike","celsius acquired. im a machine today")}},{id:"limes_callback",when:a=>a.timers.shopped_at!==void 0&&a.timeHours>a.timers.shopped_at+10/60&&a.timeHours<10.5,run:a=>{It(a,"rafe","WAIT. did anyone get limes?? 😭🍋"),du(a,[{id:"limes_yes",text:"ugh. ill loop back"},{id:"limes_no",text:"no limes. we ball"}])}},{id:"limes_run_started",when:a=>nr(a,"limes_yes"),run:a=>{a.quests.limes_run={status:"active",title:"The lime run",hint:"Swing back by Publix for limes. The crew is helpless"},It(a,"system","New quest: The lime run")}},{id:"limes_secured",when:(a,t)=>a.quests.limes_run?.status==="active"&&a.mode==="foot"&&va(a,t.world,"publix",90),run:a=>{a.quests.limes_run.status="done",a.inventory.limes=6,a.score+=8,It(a,"system","Quest complete: The lime run (+8)"),It(a,"mike","limes secured 🍋 yall owe me"),It(a,"rafe","HERO")}},{id:"limes_declined",when:a=>nr(a,"limes_no"),run:a=>{It(a,"rafe","savage. corona w no lime it is 💀")}},{id:"end_day",when:a=>a.timeHours>=20,run:a=>Yx(a)}];function Sw(a){a.inventory.ice=(a.inventory.ice??0)+2,a.inventory.pub_subs=(a.inventory.pub_subs??0)+4,a.inventory.sunscreen=(a.inventory.sunscreen??0)+1,a.quests.publix_run?.status==="active"&&(a.quests.publix_run.status="done",a.score+=15,a.timers.shopped_at=a.timeHours,It(a,"system","Quest complete: The Publix Run (+15)"),a.timeHours<8&&(a.score+=5,It(a,"system","Beat the deli line before the Saturday rush (+5)")),It(a,"mike","publix handled ✅ ice, subs, sunscreen"),It(a,"blake","MVP 🐐"),a.cart={x:a.player.x+9,z:a.player.z+5,returned:!1},It(a,"system","A stray cart rolls across the lot... (E to return it)"))}function Mw(a){!a.cart||a.cart.returned||(a.cart.returned=!0,a.score+=5,It(a,"system","Returned the stray cart like an absolute legend (+5)"),It(a,"rafe","cart narc 😭 respect tho"))}function bw(a,t){const n=t.world.pois.places.blakes,[r,l]=t.nav.nearestRoadNode(n.x,n.z);fl(a.npcs.jonny,t.nav,r,l,1.8)}function Ew(a){a.npcs.homeless.activity="follow",a.quests.bring_dale={status:"active",title:"Boat Day for Dale",hint:"Dale has never been on a boat. Today that changes. Get him to Lake Boca"},It(a,"system",'Dale: "a BOAT day? aint nobody ever invited me to nothing"'),It(a,"system","Dale is rolling with you now."),It(a,"system","New quest: Boat Day for Dale"),It(a,"rafe","wait who is dale 😭")}function Yx(a){if(a.ending)return;const t=a.flags.chose_yacht_yes===!0,n=Object.values(a.quests).filter(r=>r.status==="done").length;t&&a.score>=80?a.ending={id:"yacht",title:"BED ON A YACHT",blurb:`You wake up Sunday on someone else's yacht. ${n} quests done, ${a.score} points. Endless possibilities.`}:a.score>=45?a.ending={id:"solid",title:"A SOLID DAY",blurb:`Sunburnt, broke, happy. ${n} quests done, ${a.score} points. The group chat will talk about this one.`}:a.ending={id:"loser",title:"HOME A LOSER",blurb:`The day happened around you. ${n} quests done, ${a.score} points. Rafe is already planning the rematch.`}}function im(a,t){for(const n of yw){const r=`rule_${n.id}`;a.flags[r]||n.when(a,t)&&(a.flags[r]=!0,n.run(a,t))}Tw(a)}function Tw(a){if(!(a.mode!=="boat"||!a.flags.rule_lake_arrival)){if(a.quests.jetski_brushback?.status==="active"&&Math.abs(a.boat.speed)>6){for(const t of a.ambient)if(t.kind==="jetski"&&Math.hypot(t.x-a.boat.x,t.z-a.boat.z)<14){a.quests.jetski_brushback.status="done",a.score+=6,a.phone.messages.push({at:a.timeHours,from:"system",text:"Quest complete: Jetski brushback (+6). That was NOT 100 feet."}),a.phone.messages.push({at:a.timeHours,from:"rafe",text:"that jetski guy SCREAMED 😭"}),a.phone.unread++;break}}if(a.quests.meet_neighbors?.status==="active"){let t=0;a.ambient.forEach((n,r)=>{const l=`nb_${r}`;n.kind!=="anchored"&&n.kind!=="partyboat"&&n.kind!=="miniyacht"||(!a.flags[l]&&Math.hypot(n.x-a.boat.x,n.z-a.boat.z)<35&&(a.flags[l]=!0),a.flags[l]&&t++)}),t>=3&&(a.quests.meet_neighbors.status="done",a.score+=8,a.phone.messages.push({at:a.timeHours,from:"system",text:"Quest complete: Meet the neighbors (+8). Three raft-ups greeted."}),a.phone.messages.push({at:a.timeHours,from:"jonny",text:"the pontoon people gave us jello shots 🤝"}),a.phone.unread++)}}}function Aw(a,t,n){const r=a.phone.choices.find(l=>l.id===n);r&&(a.flags[`chose_${n}`]=!0,a.phone.messages.push({at:a.timeHours,from:"mike",text:r.text}),a.phone.choices=[],n==="scoop_yes"&&bw(a,t),im(a,t))}const jx=a=>`boatday_save_${a}`;function Zx(a,t="auto"){localStorage.setItem(jx(t),JSON.stringify({v:1,state:a}))}function Kx(a="auto"){const t=localStorage.getItem(jx(a));if(!t)return null;try{const n=JSON.parse(t);return n?.v!==1||!n.state?null:n.state}catch{return null}}function Qx(a,t){for(const n of Object.keys(a))delete a[n];Object.assign(a,structuredClone(t))}function Jx(a){let t=a>>>0;return{next(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296},range(n,r){return n+this.next()*(r-n)},int(n,r){return Math.floor(this.range(n,r+1))}}}function ww(a,t,n){const r=Jx(45223),l=[],c=(h,m)=>a.isWater(h,m),f=(h,m,p,_=0,g=0,x=0)=>{for(let y=0;y<24;y++){const b=r.range(0,Math.PI*2),E=r.range(m,p),M=t+Math.cos(b)*E,v=n+Math.sin(b)*E*.8;if(c(M,v)){l.push({kind:h,x:M,z:v,heading:r.range(0,Math.PI*2),cx:M,cz:v,rx:g,rz:x,phase:r.range(0,Math.PI*2),speed:_,hue:r.next()});return}}};for(let h=0;h<9;h++)f("anchored",35,150);f("partyboat",50,120),f("partyboat",60,140),f("miniyacht",90,170),f("miniyacht",100,180);for(let h=0;h<3;h++)for(let m=0;m<24;m++){const p=r.range(0,Math.PI*2),_=r.range(60,130),g=t+Math.cos(p)*_,x=n+Math.sin(p)*_*.7,y=r.range(25,45);if(!(!c(g,x)||!c(g+y,x)||!c(g-y,x)||!c(g,x+y)||!c(g,x-y))){l.push({kind:"jetski",x:g+y,z:x,heading:0,cx:g,cz:x,rx:y,rz:y,phase:r.range(0,Math.PI*2),speed:r.range(.35,.6),hue:r.next()});break}}{let h=150,m=190;for(;h>40&&!(c(t+h,n)&&c(t-h,n)&&c(t,n+m)&&c(t,n-m));)h-=15,m-=15;l.push({kind:"pizza",x:t+h,z:n,heading:0,cx:t,cz:n,rx:h,rz:m,phase:0,speed:.035,hue:0})}for(const[h,m]of[[45,30],[60,0],[0,55],[-50,25],[30,-40]])if(c(t+h,n+m)){l.push({kind:"foodboat",x:t+h,z:n+m,heading:1.1,cx:t+h,cz:n+m,rx:0,rz:0,phase:0,speed:0,hue:.3});break}return l}function Rw(a,t){for(const n of a){if(n.speed===0)continue;n.phase+=n.speed*t;const r=n.cx+Math.cos(n.phase)*n.rx,l=n.cz+Math.sin(n.phase)*n.rz;n.heading=Math.atan2(l-n.z,r-n.x),n.x=r,n.z=l}}const $v=new Map;function am(a,t){let n=$v.get(t);if(!n){const r=a.roads.roads[t].pts,l=[];let c=0;for(let f=0;f+3<r.length;f+=2){const h=Math.hypot(r[f+2]-r[f],r[f+3]-r[f+1]);l.push(h),c+=h}n={segs:l,total:c},$v.set(t,n)}return n}function Cw(a,t,n){const r=a.roads.roads[t].pts,{segs:l,total:c}=am(a,t);let f=Math.max(0,Math.min(1,n))*c;for(let h=0;h<l.length;h++){if(f<=l[h]||h===l.length-1){const m=l[h]>0?f/l[h]:0,p=r[2*h],_=r[2*h+1],g=r[2*h+2],x=r[2*h+3];return[p+(g-p)*m,_+(x-_)*m,Math.atan2(x-_,g-p)]}f-=l[h]}return[r[0],r[1],0]}function Dw(a){const t=Jx(8060700),n=[],r=[],l=[];a.roads.roads.forEach((h,m)=>{h.cls==="major"&&am(a,m).total>900&&l.push(m)});for(let h=0;h<12&&l.length;h++){const m=l[t.int(0,l.length-1)];n.push({roadIdx:m,t:t.next(),dir:t.next()>.5?1:-1,speed:t.range(9,14),hue:t.next()})}const c=a.pois.places.publix,f=[[c.x-40,c.z+60],[c.x+70,c.z+30],[c.x-90,c.z-40],[c.x+640,c.z],[c.x+660,c.z-260],[c.x+620,c.z+300],[c.x-200,c.z+150],[c.x+120,c.z-180]];for(const[h,m]of f)r.push({cx:h,cz:m,r:t.range(8,22),phase:t.range(0,Math.PI*2),speed:t.range(.06,.12),hue:t.next()});return{cars:n,peds:r}}function Uw(a,t,n){for(const r of a.traffic.cars){const{total:l}=am(n,r.roadIdx);r.t+=r.speed*t*r.dir/l,r.t>1&&(r.t=1,r.dir=-1),r.t<0&&(r.t=0,r.dir=1)}for(const r of a.traffic.peds)r.phase+=r.speed*t}function Lw(){let a=null,t=null,n=!1,r=null,l=null,c=null,f=null,h=null,m=0,p=0,_=!1,g=4,x=0;function y(L,D,T=!1){const H=L.createBuffer(1,L.sampleRate*D,L.sampleRate),I=H.getChannelData(0);let O=0;for(let z=0;z<I.length;z++){const A=Math.random()*2-1;O=T?O*.97+A*.03:A,I[z]=T?O*8:A}return H}function b(){if(a)return;a=new AudioContext,t=a.createGain(),t.gain.value=.5,t.connect(a.destination),r=a.createOscillator(),r.type="sawtooth",r.frequency.value=50;const L=a.createBiquadFilter();L.type="lowpass",L.frequency.value=320,l=a.createGain(),l.gain.value=0,r.connect(L).connect(l).connect(t),r.start(),c=a.createBufferSource(),c.buffer=y(a,3,!0),c.loop=!0;const D=a.createBiquadFilter();D.type="lowpass",D.frequency.value=500,f=a.createGain(),f.gain.value=0,c.connect(D).connect(f).connect(t),c.start();const T=a.createBufferSource();T.buffer=y(a,4,!0),T.loop=!0;const H=a.createBiquadFilter();H.type="bandpass",H.frequency.value=800,H.Q.value=.4,h=a.createGain(),h.gain.value=.015,T.connect(H).connect(h).connect(t),T.start(),x=performance.now()}function E(L,D,T="sine",H=.2,I){if(!a||!t)return;const O=a.createOscillator();O.type=T,O.frequency.value=L,I&&O.frequency.exponentialRampToValueAtTime(I,a.currentTime+D);const z=a.createGain();z.gain.setValueAtTime(H,a.currentTime),z.gain.exponentialRampToValueAtTime(.001,a.currentTime+D),O.connect(z).connect(t),O.start(),O.stop(a.currentTime+D+.05)}function M(){E(1500,.28,"triangle",.05,900),setTimeout(()=>E(1650,.22,"triangle",.04,1e3),260)}function v(L){if(!a||!r||!l||!f)return;const D=performance.now(),T=Math.min(.2,(D-x)/1e3);x=D;const H=Math.abs(L.mode==="car"?L.car.speed:L.mode==="boat"?L.boat.speed:0),I=L.mode!=="foot";r.frequency.value=(L.mode==="boat"?42:55)+H*(L.mode==="boat"?5:7),l.gain.value=I?Math.min(.12,.03+H*.004):0,f.gain.value=L.mode==="boat"?Math.min(.14,.04+H*.007):0,L.phone.unread>m&&E(880,.09,"square",.12,660),m=L.phone.unread,L.score>p&&(E(660,.12,"sine",.16),setTimeout(()=>E(990,.18,"sine",.16),110)),p=L.score,L.ending&&!_&&(E(523,.4,"sine",.2),setTimeout(()=>E(784,.6,"sine",.2),350)),_=!!L.ending,g-=T,g<=0&&(M(),g=6+D%9)}return{init:b,update:v,toggleMute(){return n=!n,t&&(t.gain.value=n?0:.5),n},get ready(){return!!a}}}const Nw=`
uniform sampler2D tDiffuse;
uniform vec2 uRes;
uniform float uTime;
uniform float uAmount; // 0 = off, 1 = full postcard
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = vUv;
  vec2 centered = uv - 0.5;

  // chromatic fringe grows toward the edges
  float ca = 0.0014 * uAmount * dot(centered, centered) * 4.0;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + centered * ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - centered * ca).b;

  // punchy saturation + contrast
  float luma = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(luma), col, 1.0 + 0.26 * uAmount);
  col = (col - 0.5) * (1.0 + 0.07 * uAmount) + 0.5;

  // postcard grade: teal shadows, peach highlights
  col += uAmount * (1.0 - luma) * vec3(-0.018, 0.012, 0.03);
  col += uAmount * luma * vec3(0.028, 0.012, -0.015);

  // VHS scanlines + sparkle grain
  float scan = sin(uv.y * uRes.y * 3.14159) * 0.5 + 0.5;
  col *= 1.0 - 0.032 * uAmount * scan;
  float grain = hash(uv * uRes * 0.35 + fract(uTime) * 37.0);
  col += (grain - 0.5) * 0.02 * uAmount;
  float sparkle = step(0.9975, hash(uv * uRes * 0.5 + floor(uTime * 6.0)));
  col += sparkle * 0.22 * uAmount;

  // warm vignette
  float vig = smoothstep(0.95, 0.35, length(centered));
  col *= mix(1.0, 0.82 + 0.18 * vig, uAmount);
  col += uAmount * (1.0 - vig) * vec3(0.03, 0.01, -0.01);

  gl_FragColor = vec4(col, 1.0);
}
`,Ow=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;function zw(a){let t=new ba(window.innerWidth,window.innerHeight,{samples:4});const n=new Ax,r=new tm(-1,1,1,-1,0,1),l=new Ea({uniforms:{tDiffuse:{value:t.texture},uRes:{value:new le(window.innerWidth,window.innerHeight)},uTime:{value:0},uAmount:{value:1}},vertexShader:Ow,fragmentShader:Nw,depthTest:!1,depthWrite:!1});return n.add(new jt(new kr(2,2),l)),{render(c,f,h){if(l.uniforms.uAmount.value<=0){a.render(c,f);return}l.uniforms.uTime.value=h%1e3,a.setRenderTarget(t),a.render(c,f),a.setRenderTarget(null),a.render(n,r)},resize(c,f){t.dispose(),t=new ba(c,f,{samples:4}),l.uniforms.tDiffuse.value=t.texture,l.uniforms.uRes.value.set(c,f)},setAmount(c){l.uniforms.uAmount.value=c}}}function rm(a,t,n,r){if(a.mode==="foot"){if(a.cart&&!a.cart.returned&&Math.hypot(a.cart.x-a.player.x,a.cart.z-a.player.z)<5)return{label:"E: return the stray cart",act:()=>Mw(a)};const l=a.npcs.homeless;if(!a.quests.bring_dale&&l.activity==="idle"&&Math.hypot(l.x-a.player.x,l.z-a.player.z)<8)return{label:"E: talk to Dale",act:()=>Ew(a)};const c=t.pois.places.publix;return Math.hypot(c.x-a.player.x,c.z-a.player.z)<90&&a.quests.publix_run?.status==="active"?{label:"E: shop at Publix",act:()=>Sw(a)}:Math.hypot(a.car.x-a.player.x,a.car.z-a.player.z)<6?{label:"E: drive",act:r}:Math.hypot(a.boat.x-a.player.x,a.boat.z-a.player.z)<12?{label:"E: hop on the boat",act:r}:null}return{label:a.mode==="car"?"E: get out":"E: hop off",act:r}}const Nd={mike:{skin:15318420,hair:9071173,shirt:14837071,shorts:4152179},rafe:{skin:13208926,hair:2365970,shirt:1712172,shorts:8426149,tall:1.07},blake:{skin:15649186,hair:13349482,shirt:10142904,shorts:4674921,beard:12163927},jonny:{skin:11895631,hair:1512208,shirt:2963272,shorts:6583435,beard:1512208},justin:{skin:14726284,hair:5981744,shirt:2369839,shorts:5395035,beard:4995624},homeless:{skin:13280126,hair:10133667,shirt:9080209,shorts:7035717,beard:10133667,hat:7306595}};function Od(a){const t=new In,n=a.tall??1,r=E=>new Ue({color:E}),l=new In;l.position.y=.92*n,t.add(l);const c=E=>{const M=new In;M.position.set(E*.15,0,0);const v=new jt(new De(.24,.9*n,.24),r(a.shorts));return v.position.y=-.45*n,M.add(v),l.add(M),M},f=c(1),h=c(-1),m=new jt(new De(.56,.62*n,.34),r(a.shirt));m.position.y=(.92+.31)*n,t.add(m);const p=E=>{const M=new In;M.position.set(E*.36,(.92+.55)*n,0);const v=new jt(new De(.16,.66*n,.16),r(a.skin));return v.position.y=-.3*n,M.add(v),t.add(M),M},_=p(1),g=p(-1),x=new jt(new Tu(.24,10,10),r(a.skin));x.position.y=(.92+.62+.28)*n,t.add(x);const y=new jt(new Tu(.25,10,6,0,Math.PI*2,0,Math.PI/2.3),r(a.hair));if(y.position.copy(x.position),y.position.y+=.045,t.add(y),a.beard!==void 0){const E=new jt(new De(.3,.16,.2),r(a.beard));E.position.set(0,x.position.y-.11,.16),t.add(E)}if(a.hat!==void 0){const E=new jt(new Ta(.34,.38,.06,10),r(a.hat));E.position.copy(x.position),E.position.y+=.12;const M=new jt(new Ta(.24,.26,.16,10),r(a.hat));M.position.copy(x.position),M.position.y+=.22,t.add(E,M)}function b(E,M,v){if(v){f.rotation.x=Math.PI/2.3,h.rotation.x=Math.PI/2.3,_.rotation.x=.35,g.rotation.x=.35,t.position.y=-.45*n;return}t.position.y=0;const L=Math.min(1,Math.abs(M)/3.2)*.65,D=E*7;f.rotation.x=0,h.rotation.x=0,_.rotation.x=0,g.rotation.x=0,f.rotation.x=Math.sin(D)*L,h.rotation.x=-Math.sin(D)*L,_.rotation.x=-Math.sin(D)*L*.7,g.rotation.x=Math.sin(D)*L*.7}return{group:t,animate:b}}const tx=new Ob;function ex(a,t,n=2.05){let r=null,l=null,c=.5,f=1;tx.load(`/boat-day-play/cutouts/${t}-stand.png`,m=>{m.colorSpace=Jn,c=m.image.width/m.image.height,r=m},void 0,()=>{}),tx.load(`/boat-day-play/cutouts/${t}-sit.png`,m=>{m.colorSpace=Jn,f=m.image.width/m.image.height,l=m},void 0,()=>{});const h=new Yp(new zu({transparent:!0,alphaTest:.35}));return h.visible=!1,a.add(h),{update(m,p,_,g){const x=_==="sit"?l??r:r;if(_==="hidden"||!x)return h.visible=!1,!1;const y=_==="sit"?n*.72:n,b=_==="sit"&&l?f:c;return h.material.map=x,h.material.needsUpdate=!0,h.scale.set(y*b,y,1),h.position.set(m,y/2+g,p),h.visible=!0,!0}}}function Pw(a,t){const n=Od(Nd.mike),r=n.group,l=ex(a,"mike"),c=new Map,f={rafe:2.2,justin:2.1,homeless:2},h=new In,m=new jt(new De(4.6,1.1,1.9),new Ue({color:12922928}));m.position.y=.75;const p=new jt(new De(2.2,.85,1.7),new Ue({color:1712172}));p.position.set(-.2,1.6,0),h.add(m,p);const _=new In,g=new jt(new De(7.5,1,2.6),new Ue({color:16251644}));g.position.y=.5;const x=new jt(new Kp(1.3,2.2,4),new Ue({color:16251644}));x.rotation.z=-Math.PI/2,x.rotation.y=Math.PI/4,x.position.set(4.7,.5,0);const y=new jt(new De(1.2,1.1,1.2),new Ue({color:4871528}));y.position.set(.3,1.5,0),_.add(g,x,y),a.add(r,h,_);const b=new jt(new Jp(1.6,.55,8,14),new Ue({color:16156595}));b.rotation.x=-Math.PI/2,b.position.y=.4,b.visible=!1;const E=new In,M=new jt(new De(28,3.5,7.5),new Ue({color:16251644}));M.position.y=1.75;const v=new jt(new De(16,3,6),new Ue({color:14870768}));v.position.set(-2,4.8,0);const L=new jt(new De(7,2.6,5),new Ue({color:2904706}));L.position.set(-4,7.4,0),E.add(M,v,L),E.visible=!1,a.add(b,E);function D(J,pt,N){const Z=document.createElement("canvas");Z.width=512,Z.height=128;const at=Z.getContext("2d");at.fillStyle="#ffffff",at.beginPath(),at.roundRect(4,4,504,120,22),at.fill(),at.fillStyle=pt,at.beginPath(),at.roundRect(14,14,484,100,16),at.fill(),at.fillStyle=N,at.font='900 62px "Arial Rounded MT Bold", "Arial Black", sans-serif',at.textAlign="center",at.textBaseline="middle",at.fillText(J,256,68);const lt=new Yp(new zu({map:new Rx(Z),transparent:!0,fog:!1}));return lt.scale.set(10,2.5,1),lt}const T=[];function H(J,pt){const N=new In,Z=new ge().setHSL(pt,.45,.62);if(J==="jetski"){const at=new jt(new De(2.6,.7,1),new Ue({color:Z}));at.position.y=.4,N.add(at)}else if(J==="pizza"){const at=new jt(new De(7,1.1,2.6),new Ue({color:15023678}));at.position.y=.55;const lt=new jt(new De(3,1.6,2.2),new Ue({color:16775920}));lt.position.set(-.5,1.9,0);const X=new jt(new De(2.6,.9,.15),new Ue({color:16503693}));X.position.set(-.5,3.1,0);const ot=D("PIZZA BOAT","#ffffff","#d0342c");ot.position.y=6.2,N.add(at,lt,X,ot)}else if(J==="foodboat"){const at=new jt(new De(9,1.4,4),new Ue({color:8513241}));at.position.y=.7;const lt=new jt(new De(5,2.4,3),new Ue({color:16445577}));lt.position.set(0,2.6,0);const X=new jt(new De(.1,1.4,1.8),new Ue({color:16548225}));X.position.set(3.5,4.2,0);const ot=D("DAIQUIRI BARGE","#f9ee59","#1a202c");ot.position.y=6.6,N.add(at,lt,X,ot)}else if(J==="miniyacht"){const at=new jt(new De(14,2.2,4.4),new Ue({color:16251644}));at.position.y=1.1;const lt=new jt(new De(7,1.8,3.6),new Ue({color:13358560}));lt.position.set(-1,3,0),N.add(at,lt)}else if(J==="partyboat"){const at=new jt(new De(9,1,3.6),new Ue({color:Z}));at.position.y=.6;const lt=new jt(new De(6,.2,3.2),new Ue({color:10151604}));lt.position.set(0,2.6,0);for(const X of[-2.5,2.5]){const ot=new jt(new Ta(.06,.06,2,6),new Ue({color:7438486}));ot.position.set(X,1.6,1.4),N.add(ot)}N.add(at,lt)}else{const at=new jt(new De(6.4,.9,2.3),new Ue({color:Z}));at.position.y=.5;const lt=new jt(new De(1.1,1,1.1),new Ue({color:4871528}));lt.position.set(.3,1.4,0),N.add(at,lt)}return a.add(N),N}const I=new In;{const J=new jt(new De(.9,.6,.6),new Ue({color:10990525}));J.position.y=.75;const pt=new jt(new De(.8,.08,.5),new Ue({color:8688801}));pt.position.y=.32;const N=new jt(new De(.08,.08,.66),new Ue({color:12922928}));N.position.set(-.55,1.02,0),I.add(J,pt,N),I.visible=!1,a.add(I)}const O=[];function z(J){const pt=new In,N=new ge().setHSL(J,.5,.55),Z=new jt(new De(4.4,1,1.8),new Ue({color:N}));Z.position.y=.7;const at=new jt(new De(2,.8,1.6),new Ue({color:2963272}));return at.position.set(-.2,1.5,0),pt.add(Z,at),a.add(pt),pt}const A=[];function R(J){const pt=new ge().setHSL(J,.5,.6).getHex(),N=Od({skin:J>.5?13208926:15254428,hair:3812898,shirt:pt,shorts:6583435});return a.add(N.group),N}const P=16,q=[],$=()=>new Vr({color:16777215,transparent:!0,opacity:0,depthWrite:!1});for(let J=0;J<P;J++){const pt=new jt(new Zp(.9,8),$());pt.rotation.x=-Math.PI/2,pt.position.y=.14,a.add(pt),q.push({mesh:pt,born:-999})}let et=0,dt=0;const B=new Map;function tt(J){const pt=Od(Nd[J]??Nd.mike);return a.add(pt.group),pt}function Y(J){const pt=J.timeHours*3600;r.position.set(J.player.x,.05,J.player.z),r.rotation.y=-J.player.heading+Math.PI/2;const N=Math.abs(Math.sin(pt*7))*Math.min(1,Math.abs(J.player.speed)/3)*.06,Z=l.update(J.player.x,J.player.z,J.mode==="foot"?"stand":"hidden",N);r.visible=J.mode==="foot"&&!Z,n.animate(pt,J.player.speed,!1),h.position.set(J.car.x,.1,J.car.z),h.rotation.y=-J.car.heading;const at=J.timeHours*3600;_.position.set(J.boat.x,.12+Math.sin(at*.4)*.09,J.boat.z),_.rotation.y=-J.boat.heading,_.rotation.x=Math.sin(at*.31)*.02,_.rotation.z=Math.sin(at*.53)*.025+(J.mode==="boat"?-J.boat.speed*.004:0);for(const[lt,X]of Object.entries(J.npcs)){let ot=B.get(lt);ot||(ot=tt(lt),B.set(lt,ot));let mt=c.get(lt);mt||(mt=ex(a,lt==="homeless"?"dale":lt,f[lt]??2.05),c.set(lt,mt));const Lt=X.activity==="riding",Ut=Lt?.55:Math.abs(Math.sin((pt+X.x*.13)*7))*Math.min(1,Math.abs(X.speed)/3)*.06,Jt=mt.update(X.x,X.z,Lt?"sit":"stand",Ut);ot.group.visible=!Jt,ot.group.position.set(X.x,Lt?1:.05,X.z),ot.group.rotation.y=-X.heading+Math.PI/2,ot.animate(pt+X.x*.13,X.speed,Lt)}if(J.ambient.forEach((lt,X)=>{let ot=T[X];ot||(ot=H(lt.kind,lt.hue),T[X]=ot),ot.position.set(lt.x,0,lt.z),ot.rotation.y=-lt.heading}),b.visible=!!J.floatie&&!J.floatie.collected,J.floatie&&b.position.set(J.floatie.x,.4,J.floatie.z),E.visible=!!J.yacht,J.yacht&&(E.position.set(J.yacht.x,0,J.yacht.z),E.rotation.y=-J.yacht.heading),I.visible=!!J.cart&&!J.cart.returned,J.cart&&I.position.set(J.cart.x,0,J.cart.z),J.traffic.cars.forEach((lt,X)=>{let ot=O[X];ot||(ot=z(lt.hue),O[X]=ot);const[mt,Lt,Ut]=Cw(t,lt.roadIdx,lt.t);ot.position.set(mt,.1,Lt),ot.rotation.y=-Ut+(lt.dir<0?Math.PI:0)}),J.traffic.peds.forEach((lt,X)=>{let ot=A[X];ot||(ot=R(lt.hue),A[X]=ot);const mt=lt.cx+Math.cos(lt.phase)*lt.r,Lt=lt.cz+Math.sin(lt.phase)*lt.r*.7;ot.group.position.set(mt,.05,Lt),ot.group.rotation.y=-(lt.phase+Math.PI/2)+Math.PI/2,ot.animate(pt+X,1.4,!1)}),J.mode==="boat"&&Math.abs(J.boat.speed)>4&&pt-dt>.14){dt=pt;const lt=q[et%P];et++,lt.born=pt,lt.mesh.position.set(J.boat.x-Math.cos(J.boat.heading)*4.2,.14,J.boat.z-Math.sin(J.boat.heading)*4.2)}for(const lt of q){const X=pt-lt.born,ot=2.2,mt=lt.mesh.material;if(X<0||X>ot){mt.opacity=0;continue}mt.opacity=.5*(1-X/ot),lt.mesh.scale.setScalar(1+X*2.2)}}return{player:r,car:h,boat:_,sync:Y}}const $x="0.4.0",Bw=document.getElementById("app"),Cl=new M2({antialias:!0});Cl.setSize(window.innerWidth,window.innerHeight);Cl.setPixelRatio(Math.min(window.devicePixelRatio,2));Bw.appendChild(Cl.domElement);const Ti=new Ax;Ti.background=new ge(10473711);Ti.fog=new qp(10473711,1500,7e3);const Ma=new bi(60,window.innerWidth/window.innerHeight,.5,2e4),hl=new Bb(16773853,2);Ti.add(hl);const ty=new Ib(15332088,.9);Ti.add(ty);const Cu=zw(Cl),zd=(()=>{const a=document.createElement("canvas");a.width=a.height=256;const t=a.getContext("2d"),n=t.createRadialGradient(128,128,20,128,128,128);n.addColorStop(0,"rgba(255,236,170,1)"),n.addColorStop(.35,"rgba(255,190,92,0.9)"),n.addColorStop(.7,"rgba(255,140,80,0.35)"),n.addColorStop(1,"rgba(255,120,80,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const r=new Yp(new zu({map:new Rx(a),transparent:!0,depthWrite:!1,fog:!1,blending:Id}));return r.scale.setScalar(2600),Ti.add(r),r})();window.addEventListener("resize",()=>{Ma.aspect=window.innerWidth/window.innerHeight,Ma.updateProjectionMatrix(),Cl.setSize(window.innerWidth,window.innerHeight),Cu.resize(window.innerWidth,window.innerHeight)});const pu=[[6,16107914],[8,11064558],[12,10473711],[17.5,10864360],[19,16751222],[19.8,9067130],[20.5,2766160],[24,1713208]],Pd=new ge;function Tl(a){const t=Math.min(1,Math.max(0,(a-6)/14));hl.position.set(Math.cos(Math.PI*t)*1200,150+Math.sin(Math.PI*t)*1100,350),hl.intensity=1+Math.sin(Math.PI*t)*1.5,ty.intensity=.74+Math.sin(Math.PI*t)*.32;const n=1-Math.sin(Math.PI*t);hl.color.setRGB(1,.95-n*.25,.87-n*.4);let r=0;for(;r<pu.length-2&&a>pu[r+1][0];)r++;const[l,c]=pu[r],[f,h]=pu[r+1],m=Math.min(1,Math.max(0,(a-l)/(f-l)));Pd.setHex(c).lerp(new ge(h),m),Ti.background=Pd,Ti.fog.color.copy(Pd),zd.position.copy(hl.position).normalize().multiplyScalar(9e3),zd.position.y=Math.max(zd.position.y,120)}const Sn=await I2();Ti.add(pw(Sn));const Wn=mw(Sn),sm={nav:Wn,world:Sn},wt=B2(Sn);{const a=Sn.pois.places.lake_boca;wt.ambient=ww(Wn,a.waterX??a.x,a.waterZ??a.z),wt.traffic=Dw(Sn)}[wt.car.x,wt.car.z]=Wn.nearestRoadNode(wt.player.x,wt.player.z);[wt.player.x,wt.player.z]=Wn.freeSpot(wt.player.x,wt.player.z);for(const a of Object.values(wt.npcs))[a.x,a.z]=Wn.freeSpot(a.x,a.z);const ey=Pw(Ti,Sn),dl=Lw();F2(H2(Sn));Tl(wt.timeHours);const pl=new In;{const a=new jt(new Ta(1.6,1.6,60,10),new Vr({color:16765286,transparent:!0,opacity:.22,depthWrite:!1}));a.position.y=30;const t=new jt(new Pu(2.4),new Vr({color:16761395}));t.position.y=18,t.name="gem",pl.add(a,t),Ti.add(pl)}function ny(){const a=wt.flags.day_started&&!wt.ending?Hx(wt,Sn):null;pl.visible=!!a,a&&(pl.position.set(a.x,0,a.z),pl.getObjectByName("gem").rotation.y=wt.timeHours*3600*.8)}let qs="follow";const nx={foot:[11,5],car:[18,8],boat:[34,15]};let Du=Math.PI;function Ir(a=!1){const t=yl(wt),n=Su?.zoom??1,r=nx[wt.mode][0]*n,l=nx[wt.mode][1]*n;Du+=Su?.consumeOrbit()??0;const c=wt.mode==="foot"?Du:t.heading+Math.PI,f=t.x+Math.cos(c)*r,h=t.z+Math.sin(c)*r,m=new nt(f,l,h);a?Ma.position.copy(m):Ma.position.lerp(m,.08),Ma.lookAt(t.x,1.5,t.z),Su?.setCamYaw(c+Math.PI)}function zp(){for(const a of Object.values(wt.npcs))a.activity==="follow"&&(a.activity="riding")}function ix(){for(const a of Object.values(wt.npcs))a.activity==="riding"&&(a.activity="follow")}function Uu(){if(wt.mode!=="foot"){const n=yl(wt);if(wt.mode==="boat"){for(let r=5;r<=50;r+=5)for(let l=0;l<Math.PI*2;l+=Math.PI/8){const c=n.x+Math.cos(l)*r,f=n.z+Math.sin(l)*r;if(!Wn.isWater(c,f)&&!Wn.isBlocked(c,f)){wt.player.x=c,wt.player.z=f,wt.mode="foot",Du=n.heading+Math.PI,ix();return}}return}[wt.player.x,wt.player.z]=Wn.freeSpot(n.x+Math.cos(n.heading+Math.PI/2)*3,n.z+Math.sin(n.heading+Math.PI/2)*3,30),wt.mode="foot",Du=n.heading+Math.PI,ix();return}const a=Math.hypot(wt.car.x-wt.player.x,wt.car.z-wt.player.z),t=Math.hypot(wt.boat.x-wt.player.x,wt.boat.z-wt.player.z);a<6&&a<=t?(wt.mode="car",zp()):t<12&&(wt.mode="boat",zp())}function iy(){rm(wt,Sn,Wn,Uu)?.act(),im(wt,sm)}const Su=N2(a=>{dl.ready||dl.init(),a==="interact"&&iy(),a==="togglePhone"&&Lu.togglePhone(),a==="muteToggle"&&dl.toggleMute()});function ay(a){_w(wt,Su.read(),a,Wn),xw(wt,a,Wn),Rw(wt.ambient,a),Uw(wt,a,Sn),im(wt,sm),Tl(wt.timeHours)}let ax=!0;const Iw=L2({simulate:ay,render(){qs==="follow"&&Ir(),ey.sync(wt),ny(),dl.update(wt),Cu.render(Ti,Ma,wt.timeHours*3600),ax&&(ax=!1,Nu.ready=!0)}});function Bd(a){if(Array.isArray(a))return[a[0],a[1],"coords"];const t=Sn.pois.places[a];return t?[t.waterX??t.x,t.waterZ??t.z,a]:null}new URLSearchParams(location.search).has("e2e")&&(wt.flags.day_started=!0);const Lu={choose:a=>Aw(wt,sm,a),setApp:a=>{wt.phone.app=a},close:()=>{wt.phone.open=!1},togglePhone:()=>{wt.phone.open=!wt.phone.open,wt.phone.open&&(wt.phone.unread=0)},startDay:()=>{wt.flags.day_started=!0,dl.init()},restart:()=>{location.reload()},save:()=>Zx(wt,"auto"),load:()=>{const a=Kx("auto");return a?(Qx(wt,a),Tl(wt.timeHours),Ir(!0),!0):!1}},Nu={ready:!1,version:$x,getState:()=>({...structuredClone(wt),camMode:qs,world:{...Sn.meta.stats,icwConnected:Sn.meta.icwConnected},places:Object.fromEntries(Object.entries(Sn.pois.places).map(([a,t])=>[a,{x:t.waterX??t.x,z:t.waterZ??t.z,label:t.label}])),prompt:rm(wt,Sn,Wn,Uu)?.label??null}),teleport:a=>{const t=Bd(a);if(!t)return!1;qs="fly";const n=Sn.pois.places[a];return Nu.flyTo(t[0],t[1],n.kind==="water_poi"?450:250),!0},flyTo:(a,t,n=250)=>{qs="fly",Ma.position.set(a,n,t+n*.85),Ma.lookAt(a,0,t)},follow:()=>{qs="follow",Ir(!0)},warp:a=>{const t=Bd(a);if(!t)return!1;const n=yl(wt);return n.x=t[0],n.z=t[1],n.speed=0,wt.mode!=="foot"&&(wt.player.x=n.x,wt.player.z=n.z),Ir(!0),!0},enterVehicle:a=>{const t=a==="car"?wt.car:wt.boat;return wt.player.x=t.x,wt.player.z=t.z,wt.mode=a,zp(),Ir(!0),!0},exitVehicle:()=>Uu(),interact:()=>iy(),phone:{toggle:()=>Lu.togglePhone(),open:a=>{wt.phone.open=!0,wt.phone.app=a,wt.phone.unread=0},choose:a=>Lu.choose(a)},autopilotTo:a=>{const t=Bd(a);if(!t)return!1;const n=yl(wt),r=wt.mode==="boat"?Wn.waterPath(n.x,n.z,t[0],t[1]):wt.mode==="car"?Wn.roadPath(n.x,n.z,t[0],t[1]):[n.x,n.z,t[0],t[1]];return r?(wt.autopilot={active:!0,waypoints:r,wpIndex:0,targetLabel:t[2]},!0):!1},simStep:a=>{for(let t=0;t<a;t++)ay(1/60);qs==="follow"&&Ir(!0),ey.sync(wt),ny(),Cu.render(Ti,Ma,wt.timeHours*3600)},setTime:a=>{wt.timeHours=a,Tl(a)},setCamera:a=>{a==="follow"&&Nu.follow()},freeze:a=>Iw.setPaused(a),setFX:a=>Cu.setAmount(a),endDay:()=>{Yx(wt)},save:(a="auto")=>Zx(wt,a),load:(a="auto")=>{const t=Kx(a);return t?(Qx(wt,t),Tl(wt.timeHours),Ir(!0),!0):!1}};O2(Nu);D2.createRoot(document.getElementById("overlay")).render(Oi.createElement(Y2,{version:$x,getSnapshot:()=>({...wt,phone:{...wt.phone}}),getPrompt:()=>rm(wt,Sn,Wn,Uu)?.label??null,getObjective:()=>Hx(wt,Sn),actions:Lu}));
