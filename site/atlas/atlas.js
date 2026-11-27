(() => {
  const data = window.PRIORS;
  const layer = document.getElementById('benchmark-sky');
  const empty = document.getElementById('sky-empty');
  if (!data?.points?.length) {
    empty.textContent = 'Dados do benchmark indisponíveis.';
    document.querySelector('[data-priors]').textContent = 'Não foi possível carregar os dados do benchmark.';
    return;
  }

  // Use the same domains as the detailed chart to preserve its log-cost geometry.
  const x = cost => 42 + Math.log(cost / .00015) / Math.log(.66 / .00015) * 471;
  const y = score => 340 - (score - 5) / 70 * 318;
  const svg = (tag, attributes, parent = layer) => {
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
    parent.append(node);
    return node;
  };
  for (const link of data.links) {
    svg('polyline', {
      points: link.p.map(([cost, score]) => `${x(cost)},${y(score)}`).join(' '),
      fill: 'none', stroke: '#95aaff', 'stroke-opacity': '.19'
    });
  }
  const route = data.frontier.map(([cost, score]) => `${x(cost)},${y(score)}`).join(' ');
  svg('polyline', { points: route, fill: 'none', stroke: '#f5cf9f', 'stroke-width': 5, 'stroke-opacity': '.12', 'stroke-linejoin': 'round' });
  svg('polyline', { points: route, fill: 'none', stroke: '#f5cf9f', 'stroke-width': 1.2, 'stroke-linejoin': 'round' });

  for (const point of [...data.points.filter(point => !point.f), ...data.points.filter(point => point.f)]) {
    const [cost, score] = point.v;
    const cx = x(cost), cy = y(score);
    const star = svg('g', { transform: `translate(${cx} ${cy})` });
    if (point.f) {
      svg('circle', { r: 13, fill: 'url(#halo)' }, star);
      svg('path', { d: 'M0 -6Q1 -1 6 0Q1 1 0 6Q-1 1 -6 0Q-1 -1 0 -6Z', fill: '#ffdfb5' }, star);
    } else {
      svg('circle', { r: 2.2, fill: '#c2d0ff', 'fill-opacity': '.79' }, star);
    }
  }
  empty.hidden = true;
})();
