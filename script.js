(() => {
  "use strict";

  const MONO_FONT = "'JetBrains Mono', Menlo, monospace";
  const SANS_FONT = "'Inter', system-ui, sans-serif";
  const FALLBACK_USD_BRL = 5.80;
  const AWESOME_API_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
  const BASE = window.BENCHMARK_BASE;
  const REDUCED_MOTION = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Paleta Arcade Pop para o gráfico
  const PALETTE = {
    bg: "#FFFFFF",
    ink: "#11131A",
    grey: "#64748B",
    hair: "#E2E8F0",
    tipBg: "#FFFFFF",
    tipBorder: "#11131A",
    tipShadow: "3px 3px 0 #11131A",
    paretoBg: "rgba(37, 99, 235, 0.12)",
    paretoText: "#2563EB",
    paretoBorder: "rgba(37, 99, 235, 0.36)"
  };

  const CONTAIN = { outerBounds: { left: 10, right: 4, top: 2, bottom: 4 }, outerBoundsContain: "all" };
  const state = { currency: "BRL", rate: FALLBACK_USD_BRL, liveRate: null, rateMode: "loading", family: "all", paretoOnly: false };

  /* ========================================================================
     PIXEL DUST NA GALERIA (LEVE PARA CPU: 24 FPS, QUADRADO INTEIRO FILLRECT)
     ======================================================================== */
  function initGalleryPixelDust() {
    const canvas = document.getElementById("bg-canvas-gallery");
    if (!canvas || REDUCED_MOTION) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const COLORS = ["#38BDF8", "#FF5A36", "#FACC15", "#4ADE80"];
    const FPS_MS = 1000 / 24;
    const COUNT = 22;
    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;
    let lastDraw = 0;

    function seedParticles() {
      particles = Array.from({ length: COUNT }, (_, i) => ({
        x: Math.random() * Math.max(width, 320),
        y: Math.random() * Math.max(height, 240),
        vy: -(0.18 + (i % 5) * 0.08),
        vx: ((i % 3) - 1) * 0.08,
        size: i % 4 === 0 ? 4 : i % 2 === 0 ? 3 : 2,
        color: COLORS[i % COLORS.length],
        alpha: 0.14 + (i % 4) * 0.05
      }));
    }

    function measure() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth || 0;
      const h = parent.clientHeight || 0;
      if (w !== width || h !== height) {
        width = w;
        height = h;
        canvas.width = w;
        canvas.height = h;
        seedParticles();
      }
    }

    function frame(now) {
      rafId = requestAnimationFrame(frame);
      if (now - lastDraw < FPS_MS) return;
      const dtScale = lastDraw ? Math.min(2.5, (now - lastDraw) / 41.6) : 1;
      lastDraw = now;
      if (!width || !height) return;

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx * dtScale;
        p.y += p.vy * dtScale;
        if (p.y < -8) p.y = height + 6;
        if (p.x < -8) p.x = width + 6;
        if (p.x > width + 8) p.x = -6;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x | 0, p.y | 0, p.size, p.size);
      }
      ctx.globalAlpha = 1;
    }

    function syncVisibility() {
      if (document.hidden) {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        return;
      }
      measure();
      if (!rafId) {
        lastDraw = 0;
        rafId = requestAnimationFrame(frame);
      }
    }

    if ("ResizeObserver" in window && canvas.parentElement) {
      new ResizeObserver(() => measure()).observe(canvas.parentElement);
    }
    document.addEventListener("visibilitychange", syncVisibility);
    syncVisibility();
  }

  /* ========================================================================
     COREOGRAFIA DE ENTRADA ONE-SHOT (PARA APÓS CARREGAR; REPETE NO F5)
     ======================================================================== */
  function animateNumber(el, target, pad, duration, delay) {
    if (!el) return;
    const formatVal = (v) => String(Math.round(v)).padStart(pad, "0");
    if (REDUCED_MOTION) {
      el.textContent = formatVal(target);
      return;
    }
    el.textContent = formatVal(0);
    const startAt = performance.now() + delay;
    function tick(now) {
      if (now < startAt) {
        requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - startAt) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatVal(eased * target);
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = formatVal(target);
      }
    }
    requestAnimationFrame(tick);
  }

  function initEntrance() {
    const enterNodes = Array.from(document.querySelectorAll("[data-enter]"));
    if (!enterNodes.length) return;

    function triggerNode(el) {
      if (el.classList.contains("is-entered")) return;

      const stepMs = Number(el.dataset.staggerStep || 115);
      const staggerItems = Array.from(el.querySelectorAll("[data-stagger-item]"));
      let maxDelay = 0;

      staggerItems.forEach((item, idx) => {
        const itemDelay = idx * stepMs;
        if (itemDelay > maxDelay) maxDelay = itemDelay;
        item.style.setProperty("--enter-delay", `${itemDelay}ms`);
        item.querySelectorAll("[data-count-to]").forEach((numEl) => {
          const target = Number(numEl.dataset.countTo || 0);
          const pad = Number(numEl.dataset.pad || 2);
          animateNumber(numEl, target, pad, 500, itemDelay + 50);
        });
      });

      if (!staggerItems.length) {
        el.querySelectorAll("[data-count-to]").forEach((numEl) => {
          const target = Number(numEl.dataset.countTo || 0);
          const pad = Number(numEl.dataset.pad || 2);
          animateNumber(numEl, target, pad, 500, 60);
        });
      }

      el.classList.add("is-entered");

      if (el.classList.contains("mag-grid") || el.classList.contains("klein-act")) {
        setTimeout(() => {
          el.classList.add("is-settled");
        }, maxDelay + 640);
      }
    }

    if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
      enterNodes.forEach(triggerNode);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          triggerNode(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -24px 0px" }
    );

    requestAnimationFrame(() => {
      const vh = window.innerHeight || 900;
      enterNodes.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.94 && rect.bottom > 0) {
          requestAnimationFrame(() => triggerNode(el));
        } else {
          observer.observe(el);
        }
      });
    });
  }

  /* ========================================================================
     BENCHMARK DE IA (ECHARTS 6.1.0 + AWESOMEAPI)
     ======================================================================== */
  function formatCompactNumber(v, useComma) {
    const a = Math.abs(v);
    let n;
    if (a >= 1000) n = +(v / 1000).toFixed(a >= 10000 ? 0 : 1) + "k";
    else if (a >= 100) n = String(Math.round(v));
    else if (a >= 10) n = v.toFixed(1);
    else n = String(+v.toPrecision(2));
    return useComma ? n.replace(".", ",") : n;
  }

  function compactAxisFormatter(currency) {
    return (v) => (!Number.isFinite(v) ? "" : currency === "BRL" ? "R$ " + formatCompactNumber(v, true) : "$" + formatCompactNumber(v, false));
  }

  function formatDecimalCost(val) {
    const abs = Math.abs(val);
    let decimals = 2;
    if (abs < 0.001) decimals = 5;
    else if (abs < 0.01) decimals = 4;
    else if (abs < 0.1) decimals = 3;
    return val.toFixed(decimals);
  }

  function formatTaskCost(val, currency) {
    if (!Number.isFinite(val)) return "—";
    const fixed = formatDecimalCost(val);
    return currency === "BRL" ? `R$ ${fixed.replace(".", ",")}/tarefa` : `$${fixed}/task`;
  }

  function formatAxisExactCost(val, currency) {
    if (!Number.isFinite(val)) return "—";
    const fixed = formatDecimalCost(val);
    return currency === "BRL" ? `R$ ${fixed.replace(".", ",")}` : `$${fixed}`;
  }

  function formatRateBR(rate) { return rate.toFixed(2).replace(".", ","); }

  function parseRateInput(raw) {
    const cleaned = String(raw || "").trim().replace(/\s+/g, "").replace(",", ".");
    const num = Number(cleaned);
    return Number.isFinite(num) && num > 0.01 && num <= 100 ? num : null;
  }

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function matchesFamily(m, family) {
    if (family === "all") return true;
    if (family === "claude") return m.startsWith("claude-");
    if (family === "gemini") return m.startsWith("gemini-");
    if (family === "gpt") return m.startsWith("gpt-");
    if (family === "others") return m.startsWith("deepseek-") || m.startsWith("grok-") || m.startsWith("glm-");
    return true;
  }

  function createScatterLabels(getWidth, getHeight, getLeftBound, getShowFlags, getPixels) {
    let seen = new Set(), placed = [];
    return (o) => {
      const showFlags = getShowFlags();
      const d = o.dataIndex ?? -1;
      if (seen.has(d)) { placed = []; seen = new Set(); }
      seen.add(d);
      const c = getWidth(), h = getHeight(), leftBound = getLeftBound(), m = o.labelRect, u = { hideOverlap: true };
      if (c && m.x + m.width > c - 4 && o.rect.x - 7 - m.width >= leftBound) { u.x = o.rect.x - 7; u.align = "right"; }
      if (!showFlags[d]) return u;
      const x = m.width * 1.08, g = m.height, v = x + 12, b = g + 8;
      const y = { x: o.rect.x + o.rect.width / 2, y: o.rect.y + o.rect.height / 2 };
      const w = (getPixels?.() ?? []).filter((e) => Number.isFinite(e.x) && Number.isFinite(e.y) && Math.hypot(e.x - y.x, e.y - y.y) > 4);
      const j = Math.max(12, b / 2);
      const k = Array.from({ length: 2 * (h ? Math.ceil(h / j) : 20) + 1 }, (_, t) => (t === 0 ? 0 : Math.ceil(t / 2) * (t % 2 ? -1 : 1) * j));
      for (const e of [true, false]) {
        for (const t of k) {
          for (const a of [true, false]) {
            const r = a ? o.rect.x + o.rect.width + 7 : o.rect.x - 7;
            const i = o.rect.y + o.rect.height / 2 + t;
            const l = { x: a ? r - 6 : r - x - 6, y: i - b / 2, width: v, height: b };
            if (l.x < leftBound || (c && l.x + l.width > c - 4) || l.y < 24 || (h && l.y + l.height > h - 40)) continue;
            if (placed.some((pl) => l.x < pl.x + pl.width + 3 && l.x + l.width + 3 > pl.x && l.y < pl.y + pl.height + 3 && l.y + l.height + 3 > pl.y)) continue;
            if (e && w.some((pt) => pt.x + 5 > l.x && pt.x - 5 < l.x + l.width && pt.y + 5 > l.y && pt.y - 5 < l.y + l.height)) continue;
            placed.push(l);
            return { x: r, y: i, align: a ? "left" : "right", verticalAlign: "middle", hideOverlap: false };
          }
        }
      }
      return { x: -1e4, y: -1e4, hideOverlap: true };
    };
  }

  function initBenchmark() {
    const chartEl = document.getElementById("benchmark-chart");
    if (!chartEl) return;
    if (typeof window.echarts === "undefined" || !BASE) {
      chartEl.innerHTML = "<div class=\"chart-fallback\">Não foi possível carregar o gráfico interativo. Verifique sua conexão e recarregue a página.</div>";
      return;
    }
    const chart = window.echarts.init(chartEl, null, { renderer: "svg" });
    const multiplier = () => (state.currency === "BRL" ? state.rate : 1);
    let lastGuidesKey = "", currentOrder = [], currentShowFlags = [], isInitialDraw = true;
    let hoveredId = null;
    const pinnedIds = new Set();
    const MAX_PINS = 6;
    const fmtCompact = () => compactAxisFormatter(state.currency);
    const pointColor = (o) => o.c;
    const dimColor = (o) => o.dc;
    const clearPinsBtn = document.getElementById("clear-pins");

    function updateClearPinsBtn() {
      if (!clearPinsBtn) return;
      clearPinsBtn.hidden = pinnedIds.size === 0;
      const span = clearPinsBtn.querySelector("span");
      if (span) span.textContent = `Limpar fixados (${pinnedIds.size})`;
    }

    const scatterLabels = createScatterLabels(
      () => chart.getWidth(),
      () => chart.getHeight(),
      () => {
        const r = chart.getModel()?.getComponent("grid", 0)?.coordinateSystem?.getRect();
        return r ? Math.max(4, r.x + 2) : (chart.getWidth() < 560 ? 48 : 54);
      },
      () => currentShowFlags,
      () => { try { return currentOrder.map((p) => { const q = chart.convertToPixel({ xAxisIndex: 0, yAxisIndex: 0 }, p.scaledV); return { x: q[0], y: q[1] }; }); } catch (_) { return undefined; } }
    );

    function renderGuides() {
      const grid = chart.getModel()?.getComponent("grid", 0)?.coordinateSystem?.getRect();
      if (!grid) return;
      const bottom = Math.round(grid.y + grid.height) + 0.5;
      const leftEdge = Math.round(grid.x) + 0.5;
      const badge = { fontSize: 10.5, fontFamily: MONO_FONT, fontWeight: 600, fill: "#FFFFFF", padding: [3, 5], borderRadius: 0 };

      const activeList = currentOrder.filter((p) => pinnedIds.has(p.id) || p.id === hoveredId).slice(0, MAX_PINS + 1);
      const placed = activeList
        .map((p) => ({ p, px: chart.convertToPixel({ seriesId: "marks" }, p.scaledV) }))
        .filter((g) => g.px && Number.isFinite(g.px[0]) && Number.isFinite(g.px[1]));

      const W = chart.getWidth();
      const xs = placed.map(({ p, px }) => {
        const text = formatAxisExactCost(p.scaledV[0], state.currency);
        return { text, at: px[0], size: text.length * 6.6 + 12 };
      });
      const ys = placed.map(({ p, px }) => {
        const text = p.scaledV[1].toFixed(1);
        return { text, at: px[1], size: 18 };
      });
      const spread = (items, lo, hi) => {
        const idx = items.map((_, i) => i).sort((i, j) => items[i].at - items[j].at), pos = items.map((it) => it.at);
        for (let k = 0; k < idx.length; k++) { const i = idx[k], prev = idx[k - 1]; pos[i] = Math.max(pos[i], lo + items[i].size / 2, prev == null ? -Infinity : pos[prev] + (items[prev].size + items[i].size) / 2 + 3); }
        for (let k = idx.length - 1; k >= 0; k--) { const i = idx[k], next = idx[k + 1]; pos[i] = Math.min(pos[i], hi - items[i].size / 2, next == null ? Infinity : pos[next] - (items[next].size + items[i].size) / 2 - 3); }
        return pos;
      };
      const xAt = spread(xs, 2, W - 2), yAt = spread(ys, grid.y - 6, bottom + 6);
      const children = placed.flatMap(({ p, px }, i) => {
        const col = pointColor(p);
        const cx = Math.round(px[0]) + 0.5;
        const cy = Math.round(px[1]) + 0.5;
        const dash = { stroke: col, lineDash: [4, 3], lineWidth: 1.2, opacity: 0.92 };
        return [
          { type: "line", shape: { x1: cx, y1: cy, x2: cx, y2: bottom }, style: dash, z: 3 },
          { type: "line", shape: { x1: leftEdge, y1: cy, x2: cx, y2: cy }, style: dash, z: 3 },
          { type: "text", x: Math.round(xAt[i]), y: Math.round(bottom + 4), style: { ...badge, text: xs[i].text, backgroundColor: col, align: "center", verticalAlign: "top" }, z: 20 },
          { type: "text", x: Math.round(leftEdge - 5), y: Math.round(yAt[i]), style: { ...badge, text: ys[i].text, backgroundColor: col, align: "right", verticalAlign: "middle" }, z: 20 }
        ];
      });
      const key = JSON.stringify(children);
      if (key === lastGuidesKey) return;
      lastGuidesKey = key;
      chart.setOption({ graphic: [{ id: "guides", type: "group", silent: true, z: 3, children }] }, { replaceMerge: ["graphic"] });
    }

    chart.on("finished", renderGuides);

    function buildScatterData(active, paretoOnly, fontScale) {
      return currentOrder.map((p) => {
        const isPinned = pinnedIds.has(p.id);
        return {
          value: p.scaledV,
          name: p.n,
          id: p.id,
          title: p.title,
          effort: p.e,
          score: p.scaledV[1],
          costUsd: p.v[0],
          costConverted: p.scaledV[0],
          isFrontier: p.f,
          swatchColor: pointColor(p),
          symbolSize: isPinned ? 12 : active ? (p.a ? 12 : 9) : p.f ? 11 : 9,
          itemStyle: {
            color: active && !p.h && !isPinned ? dimColor(p) : pointColor(p),
            borderColor: isPinned ? PALETTE.ink : active ? (p.h ? PALETTE.ink : PALETTE.bg) : p.f ? PALETTE.ink : PALETTE.bg,
            borderWidth: isPinned ? 2.2 : active ? (p.h ? (p.a ? 1.8 : 1.2) : 1) : 1.5,
            opacity: active && !p.h && !isPinned ? 0.45 : active || p.s || p.f || isPinned ? 1 : 0.88
          },
          label: paretoOnly && !active
            ? { show: true, formatter: p.n, fontWeight: 500, color: PALETTE.ink }
            : active
              ? (p.a
                  ? { show: true, formatter: p.n, fontWeight: 600, color: PALETTE.ink }
                  : { show: p.h && p.e !== "default", formatter: p.e.toUpperCase(), fontSize: 9 * fontScale, color: PALETTE.grey, backgroundColor: "transparent", textBorderColor: PALETTE.bg, textBorderWidth: 1.5, distance: 5 })
              : { show: p.s, formatter: p.l ?? p.n }
        };
      });
    }

    function updatePinnedMarksAndGuides() {
      const active = state.family !== "all";
      const scatterData = buildScatterData(active, state.paretoOnly, BASE.labelScale);
      chart.setOption({
        series: [{ id: "marks", data: scatterData }]
      });
      lastGuidesKey = "";
      renderGuides();
    }

    function renderChart({ skipAnimation = false } = {}) {
      const mult = multiplier(), currency = state.currency, fmt = fmtCompact(), hasFamilyFilter = state.family !== "all", paretoOnly = state.paretoOnly;
      const filteredBase = paretoOnly ? BASE.points.filter((p) => p.f) : BASE.points;
      const prepared = filteredBase.map((p) => {
        const inFamily = matchesFamily(p.m, state.family);
        return { ...p, h: hasFamilyFilter ? inFamily : false, a: hasFamilyFilter ? inFamily && p.s : false, scaledV: [p.v[0] * mult, p.v[1]] };
      });
      currentOrder = [...prepared].sort((a, b) => Number(a.h) - Number(b.h));
      currentShowFlags = currentOrder.map((p) => (paretoOnly && !hasFamilyFilter ? true : hasFamilyFilter ? p.h && (p.s || p.f || p.e !== "default") : p.s));
      const scaledFrontier = BASE.frontier.map(([x, y]) => [x * mult, y]);
      const linksSource = paretoOnly && !hasFamilyFilter ? [] : BASE.links;
      const scaledLinks = linksSource.map((l) => ({ ...l, h: hasFamilyFilter ? matchesFamily(l.m, state.family) : false, p: l.p.map(([x, y]) => [x * mult, y]) }));

      const axisCommon = { axisLine: { show: false }, axisTick: { show: false }, splitLine: { show: true, lineStyle: { color: PALETTE.hair } }, axisLabel: { color: PALETTE.grey, fontFamily: MONO_FONT, fontSize: 11 } };
      const xAxisTitle = currency === "BRL" ? "Custo por tarefa na assinatura (R$, escala log)" : "Subscription cost per task ($, log)";
      const yAxisTitle = currency === "BRL" ? "Score do índice (IRT)" : "Index score (IRT ability)";
      const fontScale = BASE.labelScale, active = hasFamilyFilter, isMobile = chart.getWidth() < 560;

      const scatterData = buildScatterData(active, paretoOnly, fontScale);

      const allowAnim = !REDUCED_MOTION && !skipAnimation;
      const initialDraw = isInitialDraw && allowAnim;
      lastGuidesKey = "";
      chart.setOption({
        animation: allowAnim,
        animationDuration: !allowAnim ? 0 : initialDraw ? 720 : 220,
        animationDurationUpdate: !allowAnim ? 0 : 220,
        animationEasing: "cubicOut",
        textStyle: { fontFamily: SANS_FONT, color: PALETTE.ink },
        grid: { left: isMobile ? 48 : 54, right: isMobile ? 16 : 130, top: 30, bottom: isMobile ? 54 : 46, ...CONTAIN },
        tooltip: {
          confine: true,
          trigger: "item",
          transitionDuration: 0,
          position: (point, _params, _dom, _rect, size) => {
            const boxW = size?.contentSize?.[0] || 220;
            const boxH = size?.contentSize?.[1] || 90;
            const viewW = size?.viewSize?.[0] || chart.getWidth();
            const viewH = size?.viewSize?.[1] || chart.getHeight();
            let x = point[0] + 14;
            if (x + boxW + 10 > viewW) x = point[0] - boxW - 14;
            x = Math.max(8, Math.min(viewW - boxW - 10, x));
            let y = point[1] - boxH - 12;
            if (y < 8) y = point[1] + 14;
            y = Math.max(8, Math.min(viewH - boxH - 10, y));
            return [Math.round(x), Math.round(y)];
          },
          backgroundColor: PALETTE.tipBg,
          borderColor: PALETTE.tipBorder,
          borderWidth: 1,
          padding: [10, 12],
          extraCssText: `box-shadow: ${PALETTE.tipShadow}; border-radius: 0; max-width: calc(100% - 20px); white-space: normal; overflow-wrap: break-word; box-sizing: border-box;`,
          textStyle: { color: PALETTE.ink, fontSize: 12 },
          formatter: (params) => {
            const d = params?.data;
            if (!d || typeof d.costConverted !== "number") return "";
            const primaryCost = formatTaskCost(d.costConverted, currency);
            const secondaryCost = currency === "BRL" ? `Base USD: ${formatTaskCost(d.costUsd, "USD")}` : `Equiv. BRL: ${formatTaskCost(d.costUsd * state.rate, "BRL")}`;
            const frontierBadge = d.isFrontier ? `<span style="display:inline-block;padding:1px 6px;border-radius:0;font-family:${MONO_FONT};font-size:10px;background:${PALETTE.paretoBg};color:${PALETTE.paretoText};border:1px solid ${PALETTE.paretoBorder};flex-shrink:0;">Pareto</span>` : "";
            return `<div style="min-width:160px;max-width:100%;line-height:1.35;"><div style="display:flex;flex-wrap:wrap;align-items:center;gap:4px 7px;margin-bottom:6px;"><span style="width:8px;height:8px;border-radius:50%;background:${escapeHtml(d.swatchColor)};display:inline-block;flex-shrink:0;"></span><strong style="font-size:12.5px;color:${PALETTE.ink};">${escapeHtml(d.title)}</strong>${frontierBadge}</div><div style="font-family:${MONO_FONT};font-size:12px;color:${PALETTE.ink};margin-bottom:3px;word-break:break-word;">${d.score.toFixed(1)} pts · ${escapeHtml(primaryCost)}</div><div style="font-family:${MONO_FONT};font-size:10.5px;color:${PALETTE.grey};word-break:break-word;">Esforço ${escapeHtml(String(d.effort).toUpperCase())} · ${escapeHtml(secondaryCost)}</div></div>`;
          }
        },
        xAxis: {
          ...axisCommon, type: "log", name: xAxisTitle, nameLocation: isMobile ? "middle" : "end", nameGap: isMobile ? 28 : 8,
          nameTextStyle: isMobile ? { color: PALETTE.grey, fontFamily: MONO_FONT, fontSize: 9, align: "center" } : { color: PALETTE.grey, fontFamily: MONO_FONT, fontSize: 10.5, align: "right", verticalAlign: "top", padding: [26, 0, 0, 0] },
          axisLabel: { ...axisCommon.axisLabel, hideOverlap: true, formatter: fmt }, min: (e) => e.min / 1.5, max: (e) => e.max * 1.8
        },
        yAxis: { ...axisCommon, type: "value", name: yAxisTitle, min: BASE.yMin, max: BASE.yMax, nameTextStyle: { color: PALETTE.grey, fontFamily: MONO_FONT, fontSize: 10.5, align: "left", padding: [0, 0, 0, -34] } },
        series: [
          ...scaledLinks.map((l) => ({ type: "line", data: l.p, showSymbol: false, silent: true, animationDuration: !allowAnim ? 0 : initialDraw ? 780 : 220, animationDelay: initialDraw ? 120 : 0, lineStyle: { color: active && !l.h ? dimColor(l) : pointColor(l), width: l.h ? 2 : 1, opacity: l.h ? 0.95 : active ? 0.22 : 0.35 }, z: l.h ? 4 : 1 })),
          ...(scaledFrontier.length > 1 ? [{ type: "line", data: scaledFrontier, showSymbol: false, silent: true, animationDuration: !allowAnim ? 0 : initialDraw ? 920 : 220, animationDelay: initialDraw ? 220 : 0, lineStyle: { color: PALETTE.ink, width: paretoOnly ? 1.8 : 1.4, opacity: active ? 0.30 : 1 }, z: 2 }] : []),
          {
            type: "scatter",
            id: "marks",
            z: 5,
            data: scatterData,
            animationDuration: !allowAnim ? 0 : initialDraw ? 460 : 220,
            animationDelay: initialDraw ? (idx) => 100 + idx * 7 : 0,
            label: { position: "right", formatter: "{b}", fontSize: (isMobile ? 9.5 : 11.5) * fontScale, color: PALETTE.ink, distance: isMobile ? 5 : 7, textBorderColor: PALETTE.bg, textBorderWidth: 2 },
            labelLayout: scatterLabels,
            emphasis: { scale: 1.35, itemStyle: { borderColor: PALETTE.ink, borderWidth: 2 } }
          }
        ]
      }, true);
      isInitialDraw = false;
      lastGuidesKey = "";
      renderGuides();
    }

    chart.on("mouseover", { seriesId: "marks" }, (params) => {
      const id = params?.data?.id || null;
      if (id === hoveredId) return;
      hoveredId = id;
      renderGuides();
    });

    chart.on("mouseout", { seriesId: "marks" }, () => {
      if (hoveredId === null) return;
      hoveredId = null;
      renderGuides();
    });

    chart.getZr().on("globalout", () => {
      if (hoveredId === null) return;
      hoveredId = null;
      renderGuides();
    });

    chart.on("click", { seriesId: "marks" }, (params) => {
      const id = params?.data?.id;
      if (!id) return;
      if (pinnedIds.has(id)) {
        pinnedIds.delete(id);
      } else {
        if (pinnedIds.size >= MAX_PINS) {
          const oldest = pinnedIds.values().next().value;
          pinnedIds.delete(oldest);
        }
        pinnedIds.add(id);
      }
      updateClearPinsBtn();
      updatePinnedMarksAndGuides();
    });

    chart.getZr().on("click", (e) => {
      if (!e.target && pinnedIds.size > 0) {
        pinnedIds.clear();
        updateClearPinsBtn();
        updatePinnedMarksAndGuides();
      }
    });

    if (clearPinsBtn) {
      clearPinsBtn.addEventListener("click", () => {
        pinnedIds.clear();
        hoveredId = null;
        updateClearPinsBtn();
        updatePinnedMarksAndGuides();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && pinnedIds.size > 0) {
        pinnedIds.clear();
        hoveredId = null;
        updateClearPinsBtn();
        updatePinnedMarksAndGuides();
      }
    });

    const currencySwitch = document.querySelector(".currency-switch");
    const currencyBtns = Array.from(document.querySelectorAll(".currency-btn[data-currency]"));
    currencyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.dataset.currency;
        if (next === state.currency) return;
        state.currency = next;
        if (currencySwitch) currencySwitch.setAttribute("data-active", next);
        currencyBtns.forEach((b) => { const act = b.dataset.currency === next; b.classList.toggle("is-active", act); b.setAttribute("aria-pressed", String(act)); });
        renderChart();
      });
    });

    const rateInput = document.getElementById("rate-input"), rateBadge = document.getElementById("rate-status"), rateResetBtn = document.getElementById("rate-reset");
    let rateAnimRaf = null, rateUserTouched = false;
    function stopRateAnimation() {
      if (rateAnimRaf) { cancelAnimationFrame(rateAnimRaf); rateAnimRaf = null; }
      rateUserTouched = true;
    }
    function animateRateOnce() {
      if (!rateInput || !rateInput.hasAttribute("data-animate-rate") || REDUCED_MOTION || rateUserTouched) {
        if (rateInput) rateInput.value = formatRateBR(state.rate);
        return;
      }
      const start = performance.now(), dur = 520;
      const step = (now) => {
        if (rateUserTouched) return;
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        rateInput.value = formatRateBR(eased * state.rate);
        if (t < 1) { rateAnimRaf = requestAnimationFrame(step); }
        else { rateInput.value = formatRateBR(state.rate); rateAnimRaf = null; }
      };
      rateAnimRaf = requestAnimationFrame(step);
    }
    function updateRateUI() {
      if (rateBadge) { rateBadge.setAttribute("data-mode", state.rateMode); rateBadge.textContent = { loading: "BUSCANDO", live: "AO VIVO", fallback: "FALLBACK", manual: "MANUAL" }[state.rateMode] || "COTAÇÃO"; }
      if (rateResetBtn) rateResetBtn.hidden = state.rateMode !== "manual";
    }
    if (rateInput) {
      animateRateOnce();
      rateInput.addEventListener("focus", stopRateAnimation);
      rateInput.addEventListener("input", () => { stopRateAnimation(); const p = parseRateInput(rateInput.value); if (p !== null) { state.rate = p; state.rateMode = "manual"; updateRateUI(); if (state.currency === "BRL") renderChart(); } });
      rateInput.addEventListener("blur", () => { rateInput.value = formatRateBR(state.rate); });
    }
    if (rateResetBtn) {
      rateResetBtn.addEventListener("click", () => { stopRateAnimation(); state.rate = state.liveRate || FALLBACK_USD_BRL; state.rateMode = state.liveRate ? "live" : "fallback"; if (rateInput) rateInput.value = formatRateBR(state.rate); updateRateUI(); renderChart(); });
    }

    (async function fetchRate() {
      const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 5000);
      try {
        const res = await fetch(AWESOME_API_URL, { signal: controller.signal }); clearTimeout(timer);
        const bid = Number((await res.json())?.USDBRL?.bid);
        if (!Number.isFinite(bid) || bid <= 0) throw new Error("invalid");
        state.liveRate = bid;
        if (state.rateMode !== "manual") {
          state.rate = bid;
          state.rateMode = "live";
          if (rateInput && !rateAnimRaf) rateInput.value = formatRateBR(bid);
          updateRateUI();
          renderChart();
        }
      } catch (_) { clearTimeout(timer); if (state.rateMode !== "manual") { state.rateMode = "fallback"; updateRateUI(); } }
    })();

    const filterBtns = Array.from(document.querySelectorAll(".filter-btn[data-family]"));
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = btn.dataset.family;
        if (next === state.family) return;
        state.family = next;
        filterBtns.forEach((b) => { const act = b.dataset.family === next; b.classList.toggle("is-active", act); b.setAttribute("aria-pressed", String(act)); });
        renderChart();
      });
    });

    const paretoBtn = document.getElementById("pareto-toggle");
    if (paretoBtn) paretoBtn.addEventListener("click", () => { state.paretoOnly = !state.paretoOnly; paretoBtn.setAttribute("aria-pressed", String(state.paretoOnly)); renderChart(); });

    let resizeRaf = null, lastIsMobile = chart.getWidth() < 560;
    const onResize = () => {
      chart.resize();
      const nowMobile = chart.getWidth() < 560;
      if (nowMobile !== lastIsMobile) { lastIsMobile = nowMobile; chart.clear(); renderChart({ skipAnimation: true }); return; }
      lastGuidesKey = ""; renderGuides();
    };
    const scheduleResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(onResize);
    };
    if ("ResizeObserver" in window) new ResizeObserver(scheduleResize).observe(chartEl);
    window.addEventListener("resize", scheduleResize);

    updateRateUI();
    renderChart();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initGalleryPixelDust();
    initEntrance();
    initBenchmark();
  });
})();
