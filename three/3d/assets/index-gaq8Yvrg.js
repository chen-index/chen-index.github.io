import{r as d,j as l}from"./index-zY1TaND_.js";import{g as _,P as x,h as f,O as g,y as v,T as E,d as M,p as u,M as b}from"./OrbitControls-DsYs44LZ.js";const j="_container_cxzs9_1",y="_container_three_cxzs9_9",h={container:j,container_three:y},C=()=>{const e=d.useRef();return d.useEffect(()=>{let a=new _;const t=new x(75,e.current.clientWidth/e.current.clientHeight,.1,1e3);t.position.set(0,1.5,6);let n=new f({antialias:!0});n.setSize(e.current.clientWidth,e.current.clientHeight),e.current.appendChild(n.domElement);const m=new g(t,n.domElement),o=()=>{requestAnimationFrame(o),n.render(a,t),m.update()};o(),window.onresize=function(){n.setSize(window.innerWidth,window.innerHeight),t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()};const w=new v(10,10,10);var p=["4_l","4_r","4_u","4_d","4_b","4_f"],i=[];p.forEach(s=>{let r=new E().load(`./imgs/living/${s}.jpg`);s==="4_u"||s==="4_d"?(r.rotation=Math.PI,r.center=new M(.5,.5),i.push(new u({map:r}))):i.push(new u({map:r}))});const c=new b(w,i);return c.geometry.scale(1,1,-1),a.add(c),()=>{n.dispose(),e.current.removeChild(n.domElement)}},[]),l.jsx("div",{className:h.container,children:l.jsx("div",{ref:e,className:h.container_three})})};export{C as default};
