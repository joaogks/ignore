(() => {
  const data = window.PRIORS;
  if (!data) return;
  const NS = 'http://www.w3.org/2000/svg';
  const modes = {low:'Baixo', medium:'Médio', high:'Alto', xhigh:'Muito alto', max:'Máximo'};
  const number = (n, decimals) => n.toLocaleString('pt-BR', {minimumFractionDigits:decimals, maximumFractionDigits:decimals});
  const vendor = p => ({claude:'Anthropic', gemini:'Google', gpt:'OpenAI', deepseek:'DeepSeek', grok:'xAI', glm:'Z.ai'})[p.m.split('-')[0]] || 'Outros';
  const colors = {Anthropic:'#f2a487', Google:'#77baff', OpenAI:'#d5dee9', DeepSeek:'#9eaaff', xAI:'#c8a2ff', 'Z.ai':'#91b9ae'};
  const denomination = (n, unit) => (unit === 'BRL' ? 'R$ ' : 'US$ ') + number(n, n < .001 ? 5 : n < .01 ? 4 : n < .1 ? 3 : 2);
  const make = (tag, attrs = {}) => { const el = document.createElementNS(NS, tag); Object.entries(attrs).forEach(([k,v]) => el.setAttribute(k,v)); return el; };
  for (const host of document.querySelectorAll('[data-priors]')) {
    host.innerHTML = `<style>
    .pr-panel{color:var(--chart-ink,#eff5ff);background:var(--chart-bg,#101b2a);border:1px solid var(--chart-line,#364a63);padding:clamp(12px,2.4vw,26px);min-width:0;font:normal 14px/1.5 system-ui,sans-serif;text-align:left}
    .pr-panel *{box-sizing:border-box}.pr-panel a{color:var(--chart-accent,#9bd8ff);text-decoration:underline}.pr-controls{display:flex;flex-wrap:wrap;gap:8px 15px;align-items:center}.pr-controls label{display:flex;flex-wrap:wrap;align-items:center;gap:7px}.pr-controls select{max-width:100%;background:var(--chart-bg,#101b2a);color:inherit;border:1px solid var(--chart-line,#364a63);padding:8px}.pr-panel :focus-visible{outline:2px solid var(--chart-accent,#9bd8ff);outline-offset:3px}.pr-panel input{accent-color:var(--chart-accent,#9bd8ff)}.pr-legend{display:flex;flex-wrap:wrap;gap:4px 12px;color:var(--chart-muted,#b9c8da);font-size:11px;margin:14px 0 0}.pr-legend i{display:inline-block;border-radius:50%;width:8px;height:8px;background:var(--dot);margin-right:5px}.pr-svg{display:block;width:100%;height:clamp(270px,37vw,440px);overflow:visible;margin:8px 0}.pr-svg text{fill:var(--chart-muted,#b9c8da);font:11px system-ui,sans-serif}.pr-svg .pr-grid{stroke:var(--chart-line,#364a63);stroke-opacity:.75}.pr-svg .pr-dot{cursor:pointer;stroke:var(--chart-bg,#101b2a);stroke-width:1.4px}.pr-svg .pr-dot:hover,.pr-svg .pr-dot:focus{stroke:#fff;stroke-width:2.5px;outline:none}.pr-readout{min-height:47px;padding:9px 11px;border:1px solid var(--chart-line,#364a63);font-size:13px}.pr-notes{margin:10px 0 0;color:var(--chart-muted,#b9c8da);font-size:12px}.pr-tablewrap{overflow:auto;max-height:400px}.pr-tablewrap table{width:100%;border-collapse:collapse;color:inherit;font-size:12px}.pr-tablewrap :is(th,td){text-align:left;padding:7px;border-bottom:1px solid var(--chart-line,#364a63)}.pr-data summary{cursor:pointer;margin-top:12px}.pr-panel button{font:inherit;color:inherit}</style>
    <div class="pr-panel"><div class="pr-controls"><label>Moeda <select aria-label="Moeda"><option value="BRL">Real (R$)</option><option value="USD">Dólar (US$)</option></select></label><label>Fornecedor <select aria-label="Fornecedor"><option value="">Todos</option>${Object.keys(colors).map(v=>`<option>${v}</option>`).join('')}</select></label><label><input type="checkbox" checked> Rota eficiente</label></div>
    <div class="pr-legend" aria-hidden="true">${Object.entries(colors).map(([name,c])=>`<span><i style="--dot:${c}"></i>${name}</span>`).join('')}</div><svg class="pr-svg" role="group" aria-label="Gráfico interativo de custo por tarefa e pontuação Priors"></svg><div class="pr-readout" aria-live="polite"></div><p class="pr-notes">A rota eficiente destaca configurações sem alternativa de pontuação igual ou maior que custe menos. Eixo de custo em escala logarítmica.</p><p class="pr-notes">Dados: <a href="https://mypriors.com/">Priors</a>. Câmbio de referência: US$ 1 = R$ ${number(data.fx,4)} em ${data.fxDate} (<a href="https://api.bcb.gov.br/dados/serie/bcdata.sgs.1/dados?formato=json&amp;dataInicial=${data.fxDate}&amp;dataFinal=${data.fxDate}">Banco Central, série 1</a>). Conversão estimada, não preço oficial da assinatura no Brasil.</p><details class="pr-data"><summary>Consultar dados em tabela</summary><div class="pr-tablewrap" tabindex="0" aria-label="Tabela de configurações"><table><thead><tr><th scope="col">Configuração</th><th scope="col">Custo por tarefa</th><th scope="col">Pontuação Priors</th></tr></thead><tbody></tbody></table></div></details></div>`;
    const [currency, filter] = host.querySelectorAll('select');
    const route = host.querySelector('input');
    const svg = host.querySelector('svg');
    const readout = host.querySelector('.pr-readout');
    const tbody = host.querySelector('tbody');
    const label = p => `${p.l} · ${modes[p.e] || p.e}`;
    const plot = () => {
      const width = svg.clientWidth, height = svg.clientHeight;
      if (width < 100 || height < 100) return;
      const fmt = usd => denomination(usd * (currency.value === 'BRL' ? data.fx : 1), currency.value);
      const factor = currency.value === 'BRL' ? data.fx : 1;
      const active = data.points.filter(p => !filter.value || vendor(p) === filter.value);
      const small = width < 540, pad = {left:small?32:43,right:small?13:28,top:32,bottom:52};
      const domain = [0.00015,0.66];
      const x = n => pad.left + Math.log(n/domain[0])/Math.log(domain[1]/domain[0])*(width-pad.left-pad.right);
      const y = n => height-pad.bottom-(n-5)/70*(height-pad.top-pad.bottom);
      const add = (tag,attrs,txt) => { const node=make(tag,attrs); if(txt)node.textContent=txt; svg.append(node); return node; };
      const segments = pts => pts.map(v=>`${x(v[0])},${y(v[1])}`).join(' ');
      svg.setAttribute('viewBox',`0 0 ${width} ${height}`); svg.replaceChildren();
      for (const n of [10,20,30,40,50,60,70]) {
        add('line',{class:'pr-grid',x1:pad.left,x2:width-pad.right,y1:y(n),y2:y(n)});
        add('text',{x:pad.left-8,y:y(n)+4,'text-anchor':'end'},String(n));
      }
      const moneyTicks = small ? [.001,.01,.1,1] : [.0002,.001,.005,.01,.05,.1,.5,1,2];
      let prev = -Infinity;
      for(const tick of moneyTicks){ const cx=x(tick/factor); if(cx<pad.left+24||cx>width-pad.right-26||cx-prev<(small?58:69)) continue; prev=cx;
        add('line',{class:'pr-grid',x1:cx,x2:cx,y1:pad.top,y2:height-pad.bottom});
        add('text',{x:cx,y:height-pad.bottom+17,'text-anchor':'middle'},denomination(tick,currency.value));
      }
      add('text',{x:pad.left,y:15},'Pontuação Priors');
      add('text',{x:width-pad.right,y:height-5,'text-anchor':'end'},`Custo por tarefa (${currency.value === 'BRL' ? 'R$' : 'US$'}, log)`);
      for (const link of data.links) {
        const p = active.find(item=>item.m===link.m);
        if(p) add('polyline',{points:segments(link.p),fill:'none',stroke:colors[vendor(p)],'stroke-opacity':'.3','aria-hidden':'true'});
      }
      if (route.checked) add('polyline', {points:segments(data.frontier),fill:'none',stroke:'var(--chart-accent,#9bd8ff)','stroke-width':2,'stroke-dasharray':filter.value?'5 4':'none','aria-hidden':'true'});
      readout.textContent = filter.value && route.checked ? 'Selecione um ponto. A linha tracejada mantém a referência de todos os fornecedores.' : 'Passe o mouse, toque ou navegue com Tab para explorar os pontos.';
      for (const p of active) {
        const text = `${label(p)} — ${fmt(p.v[0])} por tarefa · ${number(p.v[1],1)} pontos`;
        const dot = add('circle',{class:'pr-dot',cx:x(p.v[0]),cy:y(p.v[1]),r:route.checked&&p.f?5.4:4.3,fill:colors[vendor(p)],role:'button',tabindex:0,'aria-label':text});
        const show=()=>{readout.textContent=text;};
        for(const e of ['focus','click','pointerenter']) dot.addEventListener(e,show);
        dot.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show();}});
      }
      tbody.replaceChildren(...active.map(p=>{const tr=document.createElement('tr'); for(const t of [label(p),fmt(p.v[0]),number(p.v[1],1)]) tr.insertCell().textContent=t; return tr;}));
    };
    for(const ctrl of [currency,filter,route])ctrl.addEventListener('change',plot);
    let pending=0;
    new ResizeObserver(()=>{cancelAnimationFrame(pending);pending=requestAnimationFrame(plot);}).observe(svg);
    plot();
  }
})();
