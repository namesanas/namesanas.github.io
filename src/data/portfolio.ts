/**
 * ============================================================================
 *  PORTFOLIO CONFIG — single source of truth
 *  Edit this file to update everything on the site: name, bio, links,
 *  skills, projects, journey, certifications and contact details.
 *  Nothing else needs to change.
 * ============================================================================
 */

export type IconName =
  | "cpu"
  | "radio"
  | "circuit"
  | "terminal"
  | "scan"
  | "waypoints"
  | "antenna"
  | "server"
  | "plug"
  | "gauge";

export type ProjectStatus =
  | "shipped"
  | "experience"
  | "in-development"
  | "exploring";

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "linkedin" | "mail";
}

export interface NavItem {
  id: string;
  label: string;
}

export interface Capability {
  title: string;
  icon: IconName;
  blurb: string;
  items: string[];
  status?: "exploring";
}

export interface StackNode {
  id: string;
  label: string;
  sublabel: string;
  kind: "io" | "core" | "exploring";
  icon: IconName;
  note: string;
}

export interface JourneyStage {
  title: string;
  meta?: string;
  description: string;
  status: "done" | "current" | "exploring";
}

export interface Project {
  id: string;
  title: string;
  kind: string;
  status: ProjectStatus;
  summary: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  highlights: string[];
  tags: string[];
  repo?: string;
  meta?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  href: string;
}

/* --------------------------------------------------------------------------
 *  Identity
 * ----------------------------------------------------------------------- */
export const site = {
  name: "Anas Khan",
  role: "Embedded Systems & Firmware Engineer",
  location: "New Delhi, India",
  availability: "Open to embedded & firmware roles",
  email: "namesanass@gmail.com",
  // Where the resume PDF lives if you add one to /public (optional).
  resumeHref: "",
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/namesanas",
    handle: "@namesanas",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/namesanas",
    handle: "in/namesanas",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:namesanass@gmail.com",
    handle: "namesanass@gmail.com",
    icon: "mail",
  },
];

export const nav: NavItem[] = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "stack", label: "Signal Path" },
  { id: "journey", label: "Journey" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

/* --------------------------------------------------------------------------
 *  Hero
 * ----------------------------------------------------------------------- */
export const hero = {
  kicker: "Embedded Systems & Firmware Engineer",
  headlineLead: "I build firmware from the",
  headlineAccent: "register level",
  headlineTail: "up.",
  subhead:
    "Working across hardware, microcontrollers and bare-metal firmware — STM32 peripheral drivers written straight from datasheet register maps, communication protocols debugged on the wire, and RFID reader firmware in development.",
  primaryCta: { label: "View Work", href: "#work" },
  secondaryCta: { label: "Let's Connect", href: "#contact" },
};

/* --------------------------------------------------------------------------
 *  About
 * ----------------------------------------------------------------------- */
export const about = {
  lead: "I work close to the metal.",
  paragraphs: [
    "Most of my firmware is written at the register level. I read the datasheet, map the peripheral, and bring it up without HAL or vendor abstractions — because that's where you actually understand what the silicon is doing.",
    "My core is STM32 on ARM Cortex-M3/M4: peripheral drivers for GPIO, SPI, I²C and UART built from register maps, inter-MCU links debugged from logic-analyzer captures, and small real-time systems like an RTC-driven clock display. Alongside that I spent six months on drone firmware and hardware at ENORD — tuning ArduPilot, calibrating IMU, compass and GPS, and doing the soldering and bring-up that turns a bare frame into a flying system.",
    "Now I'm extending that hardware-up approach toward RFID reader firmware, and eventually custom reader hardware and PCB design — moving from writing drivers to designing the boards they run on. Those pieces are in development, and I'm building them the way I learned everything else: from the signal up.",
  ],
  facts: [
    { label: "Based in", value: "New Delhi, India" },
    { label: "Focus", value: "Bare-metal firmware" },
    { label: "Foundation", value: "Electronics Engineering" },
    { label: "Currently", value: "RFID reader firmware" },
  ],
};

/* --------------------------------------------------------------------------
 *  Expertise — capability clusters (no percentage bars)
 * ----------------------------------------------------------------------- */
export const capabilities: Capability[] = [
  {
    title: "Embedded & Firmware",
    icon: "cpu",
    blurb: "Bare-metal STM32 on ARM Cortex-M — no HAL, straight from register maps.",
    items: [
      "Bare-metal / register-level",
      "STM32 · Cortex-M3/M4",
      "Peripheral drivers",
      "Interrupts & timers",
      "Memory-mapped I/O",
      "RTC & LCD interfacing",
    ],
  },
  {
    title: "Communication & Protocols",
    icon: "waypoints",
    blurb: "Moving bytes between devices — and debugging them on the wire.",
    items: [
      "UART",
      "SPI · master/slave",
      "I²C · master/slave",
      "Inter-MCU links",
      "Framing & ACK/NACK",
      "Logic-analyzer debugging",
    ],
  },
  {
    title: "Hardware & Bring-up",
    icon: "circuit",
    blurb: "From soldering iron to signal integrity.",
    items: [
      "Soldering & rework",
      "Continuity / wiring checks",
      "Circuit troubleshooting",
      "Drone assembly & bring-up",
      "Schematic reading",
      "PCB design · in dev",
    ],
  },
  {
    title: "Software & Tooling",
    icon: "terminal",
    blurb: "The tools around the firmware.",
    items: [
      "C / Embedded C",
      "Python",
      "STM32CubeIDE",
      "Logic analyzer",
      "Mission Planner · ArduPilot",
      "Git & GitHub",
    ],
  },
  {
    title: "RFID & Readers",
    icon: "radio",
    status: "exploring",
    blurb: "Applying the same register-level approach to RFID readers.",
    items: [
      "Reader firmware",
      "Impinj E310",
      "Silion SIM3500",
      "Command/response frames",
      "Protocol parsing",
      "Custom reader architecture",
    ],
  },
];

/* --------------------------------------------------------------------------
 *  Signal Path — the embedded stack (architecture diagram)
 * ----------------------------------------------------------------------- */
export const stack = {
  intro:
    "The stack I work across — from a physical signal, up through the microcontroller and firmware, out to the host application. The RFID module is the layer I'm building toward now.",
  nodes: [
    {
      id: "peripherals",
      label: "Peripherals & Sensors",
      sublabel: "RTC · LCD · Keypad · IMU",
      kind: "io",
      icon: "gauge",
      note: "Sensors and displays I drive directly — a DS1307 RTC, LCD, matrix keypad, and IMUs on the drone side.",
    },
    {
      id: "rfid",
      label: "RFID Module",
      sublabel: "Impinj E310 · Silion SIM3500",
      kind: "exploring",
      icon: "antenna",
      note: "Reader modules I'm integrating next — studied at the command/response level. In development.",
    },
    {
      id: "mcu",
      label: "STM32 Microcontroller",
      sublabel: "ARM Cortex-M3/M4",
      kind: "core",
      icon: "cpu",
      note: "The core — an STM32 on ARM Cortex-M3/M4 — where every driver and control loop runs.",
    },
    {
      id: "firmware",
      label: "Firmware & Drivers",
      sublabel: "Register-level · no HAL",
      kind: "core",
      icon: "circuit",
      note: "Peripheral drivers written straight from the register maps — no HAL, no vendor libraries.",
    },
    {
      id: "bus",
      label: "Communication Interfaces",
      sublabel: "UART · SPI · I²C · USB",
      kind: "core",
      icon: "waypoints",
      note: "How the parts talk — UART, SPI and I²C between chips, and USB out to the host.",
    },
    {
      id: "host",
      label: "Host & Application",
      sublabel: "Python tooling · desktop",
      kind: "io",
      icon: "server",
      note: "Desktop and Python tooling on the other end of the link, driving and reading the device.",
    },
  ] as StackNode[],
};

/* --------------------------------------------------------------------------
 *  Journey / timeline
 * ----------------------------------------------------------------------- */
export const journey: JourneyStage[] = [
  {
    title: "Electronics Foundations",
    meta: "Diploma · Jamia Millia Islamia · 2021–2024",
    description:
      "Electronic devices and circuits, microprocessors and microcontrollers, embedded systems — the groundwork for working close to the hardware.",
    status: "done",
  },
  {
    title: "Bare-Metal Firmware",
    description:
      "Began writing STM32 peripheral drivers straight from register maps — GPIO, SPI, I²C, UART — with no HAL. Just the reference manual and the datasheet.",
    status: "done",
  },
  {
    title: "Communication & Protocols",
    description:
      "Built inter-MCU links and traced clock-polarity, ACK/NACK and baud-mismatch issues from logic-analyzer captures until they were solid.",
    status: "done",
  },
  {
    title: "Drone Firmware & Hardware",
    meta: "ENORD · CIE, Jamia Millia Islamia · Jan–Jul 2026",
    description:
      "Configured and tuned ArduPilot, calibrated IMU, compass and GPS, integrated flight controllers, ESCs, motors and GPS, and handled soldering, bring-up and troubleshooting.",
    status: "done",
  },
  {
    title: "RFID & Reader Firmware",
    description:
      "Applying the same register-level approach to RFID reader modules — MCU init, UART links, and command/response protocol handling.",
    status: "current",
  },
  {
    title: "PCB & Custom Hardware",
    description:
      "Learning to design the boards my firmware runs on: schematic capture, component selection, routing, power distribution and signal integrity.",
    status: "exploring",
  },
];

/* --------------------------------------------------------------------------
 *  Projects
 *  NOTE: add the exact repo URL for each project below to turn its card link
 *  into a direct deep-link. While a `repo` is empty, the card links to your
 *  GitHub profile instead. Suggested slugs to verify on github.com/namesanas:
 *    Inter-MCU comms → e.g. /Com_protocols
 *    RTC on LCD      → e.g. /RTC_on_LCD
 *    Matrix keypad   → e.g. /Keypad_interfacing
 * ----------------------------------------------------------------------- */
export const projects: Project[] = [
  {
    id: "com-protocols",
    title: "Inter-MCU Communication over SPI, I²C & UART",
    kind: "Bare-metal drivers",
    status: "shipped",
    summary:
      "Custom SPI, I²C and UART drivers built from datasheet register maps — no HAL, no vendor libraries — moving data between two microcontrollers.",
    problem:
      "Vendor HALs hide what a peripheral is actually doing. I wanted drivers I understood completely, down to each register write.",
    approach:
      "Wrote the SPI, I²C and UART drivers from the register maps. Set one MCU as master and another as slave for SPI and I²C, and used UART as a point-to-point link between them.",
    outcome:
      "Reliable inter-MCU transfers, with clock-polarity, ACK/NACK and baud-mismatch issues traced and fixed by stepping through logic-analyzer captures.",
    highlights: [
      "Register-level SPI / I²C / UART",
      "Master–slave configuration",
      "Logic-analyzer debugging",
      "No HAL or vendor libraries",
    ],
    tags: ["C", "STM32", "SPI", "I²C", "UART", "Bare-metal"],
    repo: "",
  },
  {
    id: "rtc-lcd",
    title: "Real-Time Clock Display on LCD",
    kind: "Peripheral integration",
    status: "shipped",
    summary:
      "A DS1307 real-time clock driven over a hand-written I²C driver, with live time and date rendered on an LCD.",
    problem:
      "Reading a real-time clock and driving a display both cleanly means owning the I²C timing and the refresh loop yourself.",
    approach:
      "Wrote the I²C driver from scratch to talk to the DS1307, then handled LCD refresh timing carefully to keep the display flicker-free.",
    outcome:
      "A steady live clock and date on the LCD, driven entirely by register-level code with no HAL libraries.",
    highlights: [
      "Custom I²C driver",
      "DS1307 over I²C",
      "Flicker-free LCD refresh",
      "Register-level, no HAL",
    ],
    tags: ["C", "STM32", "I²C", "RTC", "LCD"],
    repo: "",
  },
  {
    id: "keypad",
    title: "4×4 Matrix Keypad Interfacing",
    kind: "GPIO & input",
    status: "shipped",
    summary:
      "A matrix-keypad driver using GPIO row/column scanning with software debouncing, mapping presses to characters on an LCD.",
    problem:
      "Matrix keypads register false presses without debouncing, and need efficient scanning to stay responsive.",
    approach:
      "Scanned the 4×4 matrix with GPIO row/column polling and added software debouncing to filter false key presses, then mapped each key to a character.",
    outcome:
      "Clean, debounced key input mapped to characters and displayed on an LCD in real time.",
    highlights: [
      "GPIO row/column scanning",
      "Software debouncing",
      "Key → character mapping",
      "Live LCD output",
    ],
    tags: ["C", "STM32", "GPIO", "LCD"],
    repo: "",
  },
  {
    id: "enord-drones",
    title: "Drone Firmware & Assembly",
    kind: "Firmware & hardware · ENORD",
    status: "experience",
    summary:
      "Six months configuring and tuning ArduPilot firmware and assembling drone hardware at ENORD (CIE, Jamia Millia Islamia).",
    approach:
      "Configured and tuned ArduPilot on drone frames, calibrated IMU, compass and GPS before test flights, and integrated flight controllers, ESCs, motors and GPS during assembly.",
    outcome:
      "Hands-on across the full loop — soldering, continuity testing and wiring inspection through to system testing, maintenance and field-test practices.",
    highlights: [
      "ArduPilot config & tuning",
      "IMU / compass / GPS calibration",
      "Flight controller, ESC & motor integration",
      "Soldering, wiring & fault diagnosis",
    ],
    tags: ["ArduPilot", "Mission Planner", "Drones", "Hardware bring-up"],
    meta: "Jan – Jul 2026 · New Delhi",
  },
];

/**
 * Exploration track — work that is genuinely in progress or being explored.
 * Kept separate and clearly labelled so nothing is overstated.
 */
export const exploration: Project[] = [
  {
    id: "rfid-firmware",
    title: "RFID Reader Firmware",
    kind: "STM32 firmware",
    status: "in-development",
    summary:
      "Extending my bare-metal driver work toward firmware for an STM32-based RFID reader — MCU init, UART links to the reader module, GPIO control and interrupt handling.",
    highlights: [
      "MCU init & clocking",
      "UART to reader module",
      "GPIO & interrupt handling",
      "Command/response handling",
    ],
    tags: ["STM32", "C", "UART", "RFID"],
  },
  {
    id: "rfid-modules",
    title: "RFID Module Integration & Protocols",
    kind: "Protocol study",
    status: "exploring",
    summary:
      "Studying reader modules such as the Impinj E310 and Silion SIM3500 — their command/response frames, protocol parsing and reader state.",
    highlights: [
      "Command/response frames",
      "Protocol parsing",
      "Module configuration",
      "Reader state management",
    ],
    tags: ["Impinj E310", "Silion SIM3500", "RFID", "UART"],
  },
  {
    id: "custom-reader",
    title: "Custom RFID Reader Architecture",
    kind: "System design",
    status: "exploring",
    summary:
      "A design exploration of a full reader stack — antenna → RFID IC/module → STM32 → USB/Ethernet → host — rather than relying entirely on off-the-shelf electronics.",
    highlights: [
      "End-to-end reader stack",
      "Antenna → module → MCU",
      "USB / Ethernet host link",
      "Hardware + firmware co-design",
    ],
    tags: ["RFID", "STM32", "PCB Design", "USB", "Ethernet"],
  },
  {
    id: "pcb-hardware",
    title: "PCB Design & Embedded Hardware",
    kind: "Hardware",
    status: "exploring",
    summary:
      "Learning to design the boards my firmware runs on — schematic capture, component selection, routing, power distribution, grounding and signal integrity.",
    highlights: [
      "Schematic capture",
      "Component selection",
      "Routing & power",
      "Grounding & signal integrity",
    ],
    tags: ["PCB Design", "Electronics", "STM32", "Hardware"],
  },
];

/* --------------------------------------------------------------------------
 *  Engineering philosophy
 * ----------------------------------------------------------------------- */
export const philosophy = {
  tenets: [
    "Understand the signal.",
    "Understand the hardware.",
    "Understand the protocol.",
    "Then build the system.",
  ],
  body: "I don't reach for an abstraction until I understand what it's hiding. The habit started with bare-metal firmware — read the reference manual, write to the register, watch it on a logic analyzer — and it's how I approach every layer since. Learn the thing from the bottom, then build up. Slower at first, far more durable after.",
};

/* --------------------------------------------------------------------------
 *  Certifications (verifiable)
 * ----------------------------------------------------------------------- */
export const certifications: Certification[] = [
  {
    title: "Mastering Microcontroller & Embedded Driver Development",
    issuer: "FastBit Embedded Brain Academy · Udemy",
    href: "https://ude.my/UC-85af5ab4-99aa-4aa4-bd5d-33c16968bd3e",
  },
  {
    title: "Embedded Systems Programming on ARM Cortex-M3/M4",
    issuer: "FastBit Embedded Brain Academy · Udemy",
    href: "https://ude.my/UC-45c42522-2af0-4774-9d1d-d30466dad80e",
  },
  {
    title: "Microcontroller Embedded C Programming",
    issuer: "FastBit Embedded Brain Academy · Udemy",
    href: "https://ude.my/UC-5e308626-f7b8-4c39-811f-18c3f42fb98b/",
  },
  {
    title: "Crash Course on Python",
    issuer: "Google · Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/RI325WZ6LYCL",
  },
  {
    title: "C for Everyone",
    issuer: "UC Santa Cruz · Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/WJDORHZBYCYQ",
  },
];

/* --------------------------------------------------------------------------
 *  Contact
 * ----------------------------------------------------------------------- */
export const contact = {
  headline: "Let's build something real.",
  blurb:
    "Open to embedded, firmware and hardware roles — and to interesting problems close to the metal. The fastest way to reach me is email.",
};
