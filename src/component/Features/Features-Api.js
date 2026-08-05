const data = [
  {
    id: 1,
    iconClass: "fas fa-microchip",
    title: "Multi-Layer PCB & Signal Integrity",
    desc: "Designing production-ready circuit boards with strict impedance control and schematic capture for complex embedded hardware.",
    specs: [
      "Rigid-Flex & multi-layer stackups in Altium Designer & KiCad",
      "Power Delivery Network (PDN) decoupling & thermal relief",
      "Signal integrity, EMI shielding & high-speed trace routing"
    ],
    tags: ["Altium Designer", "KiCad", "Signal Integrity", "Schematics", "IPC-2221"]
  },
  {
    id: 2,
    iconClass: "fas fa-plane-up",
    title: "Aerospace & VTOL Flight Systems",
    desc: "Engineering UAV tilt-rotor dynamics and transwing aerodynamics that smoothly transition between hover and forward flight.",
    specs: [
      "Transwing folding-wing kinematics & center-of-gravity (CG) tuning",
      "ArduPilot integration & custom telemetry communication",
      "Flight dynamics optimization & payload weight distribution"
    ],
    tags: ["VTOL Drones", "ArduPilot", "UAV Kinematics", "Flight Control"]
  },
  {
    id: 3,
    iconClass: "fas fa-code",
    title: "Embedded & Bare-Metal Firmware",
    desc: "Writing deterministic C/C++ firmware to interface directly with microcontroller registers for ultra-low latency execution.",
    specs: [
      "ARM Cortex-M (STM32) & Espressif (ESP32) architecture setups",
      "Low-level drivers for SPI, I2C, UART, CAN, and audio/haptic feedback",
      "Hardware-in-the-Loop (HIL) simulation & register debugging"
    ],
    tags: ["STM32", "ESP32", "Embedded C++", "FreeRTOS", "Linux"]
  },
  {
    id: 4,
    iconClass: "fas fa-glasses",
    title: "Full-Lifecycle Assistive Wearables",
    desc: "Executing end-to-end product development for assistive technologies, integrating micro-cameras and sensory navigation.",
    specs: [
      "Micro-camera routing & flexible circuit assembly for Smart Glass",
      "Real-time audio & haptic feedback loops for intelligent white canes",
      "Enclosure optimization & system-wide bottleneck troubleshooting"
    ],
    tags: ["Smart Glass", "Assistive Tech", "Flex PCB", "Drishti", "System Integration"]
  },
  {
    id: 5,
    iconClass: "fas fa-cube",
    title: "3D CAD, FEA & Rapid Prototyping",
    desc: "Modeling structural mechanical assemblies in SOLIDWORKS to optimize strength-to-weight ratio for flight and wearable chassis.",
    specs: [
      "Airframe structural optimization & volumetric clearance checks",
      "Finite Element Analysis (FEA) stress, strain & thermal testing",
      "Precision FDM slicing, tolerances, and custom 3D enclosure fabrication"
    ],
    tags: ["SOLIDWORKS", "3D CAD", "FEA Analysis", "FDM Fabrication"]
  },
  {
    id: 6,
    iconClass: "fas fa-robot",
    title: "Autonomous Robotics & Edge Vision",
    desc: "Building high-speed autonomous rovers and manipulators using ROS, computer vision, and real-time PID feedback.",
    specs: [
      "Track navigation & dynamic obstacle avoidance algorithms",
      "High-density optical sensor array calibration & PID loop tuning",
      "Real-time motor encoder kinematic feedback & camera integration"
    ],
    tags: ["ROS", "Python", "Computer Vision", "WRO Global", "PID Control"]
  }
];

export default data;