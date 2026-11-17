// Troque pelo número real da clínica: DDI + DDD + número, só dígitos
var WHATS="5577000000000";
var T=[["Reposição de dentes com planejamento cuidadoso, para devolver função, conforto e confiança ao sorrir.","Implantes dentários"],
["Lentes de porcelana transformam o sorriso com mínimo desgaste, alta durabilidade e resultado elegante e natural.","Lentes e facetas"],
["Clareamento para dentes mais claros e uniformes, com acompanhamento profissional.","Clareamento dental"],
["Soluções integradas para a saúde e a estética do seu sorriso, reunidas em um só plano de tratamento.","Odontologia integrada"]];
var Q=["Cada detalhe do tratamento é planejado sob medida para garantir um resultado bonito, equilibrado e natural.","Sua saúde bucal é nossa prioridade. Atendimento de excelência e humanizado.","Soluções integradas para a saúde e a estética do seu sorriso."];
var $=function(s){return document.querySelector(s)};
function wa(m){return "https://wa.me/"+WHATS+"?text="+encodeURIComponent(m)}
$("#wa").href=wa("Olá! Gostaria de agendar uma avaliação na Oral Ágape.");
// tratamentos
var bs=document.querySelectorAll(".sv");
function pick(i){bs.forEach(function(b,k){b.setAttribute("aria-pressed",k==i)});$("#dt").textContent=T[i][0];$("#dl").href=wa("Olá! Tenho interesse em: "+T[i][1]+".")}
bs.forEach(function(b){b.onclick=function(){pick(+b.dataset.i)}});pick(0);
// galeria
document.querySelectorAll(".ph").forEach(function(b){b.onclick=function(){var l=$("#lb");l.querySelector("img").src=b.dataset.s;l.hidden=false;$("#lx").focus()}});
function cl(){$("#lb").hidden=true}$("#lx").onclick=cl;$("#lb").onclick=function(e){if(e.target.id=="lb")cl()};addEventListener("keydown",function(e){if(e.key=="Escape")cl()});
// frases
var ds=$("#ds"),qi=0,tm;
Q.forEach(function(_,i){var b=document.createElement("button");b.setAttribute("aria-label","Frase "+(i+1));b.onclick=function(){show(i,1)};ds.appendChild(b)});
function show(i,reset){qi=i;var q=$("#qq");q.style.opacity=0;setTimeout(function(){q.textContent=Q[i];q.style.opacity=1},250);
[].forEach.call(ds.children,function(b,k){b.setAttribute("aria-current",k==i)});if(reset){clearInterval(tm);tm=setInterval(nx,6000)}}
function nx(){show((qi+1)%Q.length)}
show(0);tm=setInterval(nx,6000);
// formulário
$("#fm").onsubmit=function(e){e.preventDefault();var f=e.target;
var m="Olá! Meu nome é "+f.n.value+". Gostaria de agendar uma avaliação para: "+f.s.value+". Meu telefone: "+f.t.value+".";
$("#ok").textContent="Abrindo o WhatsApp...";window.open(wa(m),"_blank")};
// cabeçalho e revelação
addEventListener("scroll",function(){$("#hd").classList.toggle("s",scrollY>10)},{passive:true});
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");io.unobserve(x.target)}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});
// contador
var n=$("[data-n]"),cio=new IntersectionObserver(function(a){if(a[0].isIntersecting){var t=+n.dataset.n,c=0,s=setInterval(function(){n.textContent=++c;if(c>=t)clearInterval(s)},220);cio.disconnect()}});cio.observe(n);
