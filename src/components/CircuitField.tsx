"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Node {
  x: number;
  y: number;
}
interface Edge {
  a: number;
  b: number;
}
interface Packet {
  edge: number;
  t: number;
  speed: number;
}

const ACCENT = "56,189,248";
const SPACING = 66;

/**
 * Ambient PCB-trace field: a jittered node grid wired with Manhattan traces,
 * with a few signal packets travelling along them. Deliberately quiet — this
 * is the one living element on the page. Static single frame under reduced motion.
 */
export function CircuitField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let packets: Packet[] = [];
    let last = 0;

    const build = () => {
      const parent = canvas.parentElement ?? canvas;
      const rect = parent.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const idx = (c: number, r: number) => r * cols + c;
      const jitter = SPACING * 0.18;

      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: c * SPACING + (Math.random() * 2 - 1) * jitter,
            y: r * SPACING + (Math.random() * 2 - 1) * jitter,
          });
        }
      }

      edges = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const i = idx(c, r);
          if (c + 1 < cols && Math.random() < 0.55)
            edges.push({ a: i, b: idx(c + 1, r) });
          if (r + 1 < rows && Math.random() < 0.5)
            edges.push({ a: i, b: idx(c, r + 1) });
        }
      }

      const count = Math.min(20, Math.floor(edges.length * 0.05) + 6);
      packets = [];
      for (let k = 0; k < count && edges.length > 0; k++) {
        packets.push({
          edge: Math.floor(Math.random() * edges.length),
          t: Math.random(),
          speed: 0.14 + Math.random() * 0.34,
        });
      }
    };

    const drawBase = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      for (const e of edges) {
        const a = nodes[e.a];
        const b = nodes[e.b];
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const frame = (ts: number) => {
      const dt = last ? Math.min((ts - last) / 1000, 0.05) : 0;
      last = ts;
      drawBase();

      for (const p of packets) {
        const e = edges[p.edge];
        if (!e) continue;
        const a = nodes[e.a];
        const b = nodes[e.b];
        if (!a || !b) continue;

        p.t += p.speed * dt;
        if (p.t >= 1) {
          p.t = 0;
          p.edge = Math.floor(Math.random() * edges.length);
          continue;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const tailT = Math.max(0, p.t - 0.2);

        ctx.strokeStyle = `rgba(${ACCENT},0.45)`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(a.x + (b.x - a.x) * tailT, a.y + (b.y - a.y) * tailT);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.fillStyle = `rgba(${ACCENT},0.95)`;
        ctx.shadowColor = `rgba(${ACCENT},0.9)`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
    };

    build();
    if (reduce) {
      drawBase();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(() => {
      build();
      if (reduce) drawBase();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [reduce]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
