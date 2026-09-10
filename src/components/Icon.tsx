import {
  Cpu,
  Radio,
  CircuitBoard,
  Terminal,
  ScanLine,
  Waypoints,
  RadioTower,
  Server,
  Plug,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/portfolio";

const MAP: Record<IconName, LucideIcon> = {
  cpu: Cpu,
  radio: Radio,
  circuit: CircuitBoard,
  terminal: Terminal,
  scan: ScanLine,
  waypoints: Waypoints,
  antenna: RadioTower,
  server: Server,
  plug: Plug,
  gauge: Gauge,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}
