// ===== Toast =====
let toastTimer = null;
export function toast(msg){
  let t = document.getElementById("toast");
  if(!t){
    t = document.createElement("div");
    t.id = "toast";
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.bottom = "18px";
    t.style.transform = "translateX(-50%)";
    t.style.padding = "10px 14px";
    t.style.border = "1px solid rgba(94,234,212,.35)";
    t.style.background = "rgba(15,20,34,.92)";
    t.style.color = "#eaf1ff";
    t.style.borderRadius = "14px";
    t.style.boxShadow = "0 12px 30px rgba(0,0,0,.35)";
    t.style.zIndex = "999";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ t.style.opacity="0"; }, 1700);
}

export async function copyText(text){
  try{
    await navigator.clipboard.writeText(text);
    toast("Copied ✅");
  }catch{
    toast("Copy blocked 😅");
  }
}

export function setYear(){
  const y = document.getElementById("year");
  if(y) y.textContent = new Date().getFullYear();
}

export function fmtBytes(b){
  if(!b || b<=0) return "-";
  const units = ["B","KB","MB","GB"];
  let i=0, v=b;
  while(v>=1024 && i<units.length-1){ v/=1024; i++; }
  return `${v.toFixed(i===0?0:2)} ${units[i]}`;
}