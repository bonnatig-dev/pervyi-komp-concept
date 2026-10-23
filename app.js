const b=document.querySelector('.burger'),n=document.getElementById('nav');
b.onclick=()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)};
n.querySelectorAll('a').forEach(a=>a.onclick=()=>{n.classList.remove('open');b.setAttribute('aria-expanded',false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}});
document.querySelectorAll('[data-req]').forEach(x=>x.addEventListener('click',e=>{document.getElementById('product').value=x.dataset.req;if(x.tagName==='BUTTON'){e.preventDefault();document.getElementById('form').scrollIntoView({behavior:'smooth'})}}));
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{document.querySelectorAll('.chip').forEach(z=>z.classList.toggle('on',z===c));document.querySelectorAll('.pc').forEach(p=>p.hidden=!(c.dataset.f==='all'||p.dataset.b===c.dataset.f))});
const f=document.querySelector('.form');f.addEventListener('submit',e=>{e.preventDefault();const t=f.elements.tel,a=f.elements.agree,er=f.querySelector('.err'),m=[];
t.classList.remove('invalid');if(!/^375\d{9}$/.test(t.value.replace(/\D/g,''))){m.push('укажите телефон в формате +375 (29) 123-45-67');t.classList.add('invalid')}
if(!a.checked)m.push('нужно согласие на обработку персональных данных');er.textContent=m.length?'Пожалуйста, '+m.join('; ')+'.':'';if(!m.length){f.querySelector('.ok').hidden=false;f.querySelector('[type=submit]').disabled=true}});
const ck=document.getElementById('ck');if(!localStorage.getItem('ck'))ck.hidden=false;
ck.addEventListener('click',e=>{const v=e.target.dataset.ck;if(!v)return;if(v==='set'){ck.querySelector('.ckset').hidden=false;return}
localStorage.setItem('ck',v==='all'?'all':v==='save'&&document.getElementById('cka').checked?'all':'necessary');ck.hidden=true});
document.getElementById('ckset').onclick=()=>{ck.hidden=false;ck.querySelector('.ckset').hidden=false};
