import WRO_V11 from '../pic/WRO_V11.jpg';
import WRO_V3 from '../pic/WRO_V3.jpg';
import WRO_V2 from '../pic/WRO_V2.jpg';
import WRO_V1 from '../pic/WRO_V1.jpg';
import wing_PT from '../pic/Wing printing.jpg';
import V002 from '../pic/V002.jpg';
import TDriver from '../pic/testing_Driver.jpg';
import ST_indrustry from '../pic/Steel-Tech_indrustry.jpg';
import sn21 from '../pic/SN-21.jpg';
import sensor from '../pic/Sensor.jpg';
import ricshaw1 from '../pic/RICSHAW1.jpg';
import plane_crash from '../pic/PLANE CRASH.jpg';
import pimg10 from '../pic/pimg10.jpg';
import pimg9 from '../pic/pimg9.jpg';
import pimg8 from '../pic/pimg8.jpg';
import pcb_rg from '../pic/PCB_RG.jpg';
import pcb from '../pic/PCB.png';
import motordriver from '../pic/Motor_driver.jpg';
import lfr from '../pic/LFR.jpg';
import indrousty from '../pic/INDROUSTRY.jpg';
import indrousty1 from '../pic/INDROUSTRIAL AUTOMATION.jpg';
import id9 from '../pic/id9.jpg';
import id8 from '../pic/id8.jpg';
import id7 from '../pic/id7.png';
import glass3d from '../pic/GLASS MODEL.jpg';
import glass from '../pic/GLASS.jpg';
import robotGathering from '../pic/GATHERING.jpg';
import espcamr from '../pic/ESPCAM.jpg';
import espcam from '../pic/ESP CAM.jpg';
import printer3d from '../pic/3D_printer.jpg';

const Portfolio_data = [
  {
    id: 1,
    category: "Robotics",
    totalLike: "470",
    title: "48-Hour BDRO Competition Prototype",
    description: "Designed and assembled an autonomous differential-drive robot in just two days for the BDRO INIT camp's Creative Category.",
    techStack: ["Telemetry", "Computer Vision", "Differential Kinematics"],
    image: pimg8,
  },
  {
    id: 2,
    category: "Hardware Design",
    totalLike: "350",
    title: "Robot Gathering Platform Test",
    description: "Built and tested a multi-sensor robot platform focused on reliable microcontroller communication and low-latency motor control.",
    techStack: ["I2C/SPI", "Hardware Arch", "PCB Routing"],
    image: pimg9,
  },
  {
    id: 3,
    category: "Robotics",
    totalLike: "480",
    title: "BUET Campus Trash Collector Bot",
    description: "Ran real-world field trials with a mobile manipulator at BUET campus to test gripper actuation and terrain traction.",
    techStack: ["PID Tuning", "Actuator Control", "Field Testing"],
    image: pimg10,
  },
  {
    id: 4,
    category: "Robotics",
    totalLike: "630",
    title: "My First Custom WRO Future Engineers Rover",
    description: "Hand-built my first autonomous rover for WRO Future Engineers, pairing a Raspberry Pi with ultrasonic sensors for spatial awareness.",
    techStack: ["Raspberry Pi", "Ultrasonic Arrays", "Python"],
    image: id9,
  },
  {
    id: 5,
    category: "Robotics",
    totalLike: "550",
    title: "First WRO Competition Entry",
    description: "My debut robot for WRO—engineered for chassis durability, stable power distribution under load, and smooth motor control.",
    techStack: ["PDN Stability", "High-Torque Drive", "Systems Arch"],
    image: id7,
  },
  {
    id: 6,
    category: "Robotics",
    totalLike: "840",
    title: "IRO Competition Robot Gathering Platform",
    description: "Prepared a specialized robot for the International Robot Olympiad featuring custom 3D-printed end effectors and a high-capacity power setup.",
    techStack: ["End Effectors", "LiPo Power Arch", "3D Printing"],
    image: robotGathering,
  },
  {
    id: 7,
    category: "Robotics",
    totalLike: "450",
    title: "WRO Autonomous Rover V2",
    description: "Rapidly prototyped a second-generation WRO chassis using 3D printing to improve frame stiffness and simplify sensor wiring.",
    techStack: ["FDM Fabrication", "Structural Rigidity", "WRO Specs"],
    image: WRO_V1,
  },
  {
    id: 8,
    category: "Prototype",
    totalLike: "690",
    title: "Drishti Smart Glass Final Assembly",
    description: "Assembled the physical prototype for the Drishti Smart Glass wearable, routing micro camera cables inside a compact frame.",
    techStack: ["Wearables", "Micro-Assembly", "Optics"],
    image: glass,
  },
  {
    id: 9,
    category: "3D Design",
    totalLike: "450",
    title: "Parametric Rickshaw 3D Print",
    description: "Modeled and 3D-printed a detailed traditional Bangladeshi rickshaw, fine-tuning slicer tolerances for delicate spoke geometries.",
    techStack: ["G-Code Slicing", "FDM", "Tolerance Testing"],
    image: ricshaw1,
  },
  {
    id: 10,
    category: "Product Design",
    totalLike: "500",
    title: "Steel-Tech Industrial On-Site Deployment",
    description: "Installed custom hardware directly onto the factory floor at Steel-Tech BD, ensuring reliable signal isolation in noisy environments.",
    techStack: ["EMC/EMI Shielding", "Fault Tolerance", "Industrial Design"],
    image: indrousty,
  },
  {
    id: 11,
    category: "Product Design",
    totalLike: "520",
    title: "Industrial IoT Automation Hub V3",
    description: "Completed the third iteration of an industrial automation enclosure featuring a high-contrast display and ruggedized connectors.",
    techStack: ["IP-Rating Design", "Signal Integrity", "HMI"],
    image: indrousty1,
  },
  {
    id: 12,
    category: "Product Design",
    totalLike: "610",
    title: "Steel-Tech Industrial IoT Node",
    description: "Deployed an Industrial IoT edge node to capture live load-cell telemetry and track factory floor production metrics.",
    techStack: ["IIoT", "Telemetry", "Data Acquisition"],
    image: ST_indrustry,
  },
  {
    id: 13,
    category: "PCB",
    totalLike: "590",
    title: "ABHASH Custom Audio IoT PCB",
    description: "Designed a production-ready ESP8266 PCB equipped with onboard audio amplification, power regulation, and optimized antenna layout.",
    techStack: ["ESP8266", "Audio Amplification", "RF Clearance"],
    image: pcb,
  },
  {
    id: 14,
    category: "Prototype",
    totalLike: "910",
    title: "ESP32-CAM Micro-Soldering Bypass",
    description: "Performed sub-millimeter jumper soldering on an ESP32-CAM module to reroute camera signals for a tight vision project.",
    techStack: ["SMD Soldering", "ESP32", "Circuit Bypass"],
    image: espcam,
  },
  {
    id: 15,
    category: "Prototype",
    totalLike: "880",
    title: "Smart Glass Camera Ribbon Soldering",
    description: "Hand-soldered fragile flex ribbon cables to integrate a miniature camera module into wearable smart glasses.",
    techStack: ["FPC Soldering", "Optical Integrity", "Hardware Repair"],
    image: espcamr,
  },
  {
    id: 16,
    category: "Prototype",
    totalLike: "490",
    title: "Custom 3D Printer Assembly & Calibration",
    description: "Built my first custom 3D printer platform, aligning linear rails and tuning motion mechanics to eliminate print vibrations.",
    techStack: ["CoreXY", "Linear Kinematics", "Resonance Damping"],
    image: printer3d,
  },
  {
    id: 17,
    category: "Robotics",
    totalLike: "750",
    title: "SUST Championship Line Follower (Team Dynamic Spark)",
    description: "The championship-winning robot built with Team AUST Dynamic Spark at SUST, featuring custom high-density logic boards and low-latency code.",
    techStack: ["Low-Latency Polling", "CG Optimization", "C++"],
    image: id8,
  },
  {
    id: 18,
    category: "Hardware Design",
    totalLike: "850",
    title: "High-Density IR Sensor Array Board",
    description: "Designed a custom high-density IR sensor PCB array in Altium to maximize line-detection accuracy for competitive robotics.",
    techStack: ["IR Sensor Fusion", "Altium Design", "PCB Footprints"],
    image: sensor,
  },
  {
    id: 19,
    category: "PCB",
    totalLike: "710",
    title: "STM32 Motor Controller Board (IRO Robot)",
    description: "Routed a multi-layer motor driver PCB using an STM32 Cortex-M3 controller specifically designed for the IRO competition robot.",
    techStack: ["STM32", "Impedance Matching", "EDA Routing"],
    image: pcb_rg,
  },
  {
    id: 20,
    category: "3D Design",
    totalLike: "540",
    title: "WRO Echo Drift Full CAD Model V2",
    description: "Created a full 3D assembly in SOLIDWORKS for the Echo Drift rover to double-check component clearances before printing.",
    techStack: ["SOLIDWORKS", "Interference Checking", "Modular Design"],
    image: WRO_V11,
  },
  {
    id: 21,
    category: "Robotics",
    totalLike: "610",
    title: "Echo Drift Hardware Iteration",
    description: "Assembled the physical Echo Drift rover prototype to test stacked logic boards and camera mast stability in real-world driving.",
    techStack: ["Kinematics Validation", "PCB Stacking", "Targeting Systems"],
    image: WRO_V2,
  },
  {
    id: 22,
    category: "Aviation",
    totalLike: "500",
    title: "RC Plane Flight Failure Analysis",
    description: "Analyzed structural fracture points after my first 3D-printed RC plane crash to improve infill settings and wall thickness for the next build.",
    techStack: ["Failure Analysis", "Stress Testing", "Aerospace Materials"],
    image: plane_crash,
  },
  {
    id: 23,
    category: "Aviation",
    totalLike: "610",
    title: "NACA 4412 3D-Printed Airfoil",
    description: "Printed and tested NACA 4412 wing sections with internal lattice structures to optimize strength-to-weight ratio for RC aircraft.",
    techStack: ["Aerodynamics", "Lattice Structures", "FDM"],
    image: wing_PT,
  },
  {
    id: 24,
    category: "Hardware Design",
    totalLike: "720",
    title: "Spark Motor High-Current PCB",
    description: "Designed a high-current motor driver PCB with extra-wide copper traces and heavy power connectors to handle motor current surges.",
    techStack: ["Power Delivery Network", "High-Current PCB", "Thermal Dissipation"],
    image: motordriver,
  },
  {
    id: 25,
    category: "Hardware Design",
    totalLike: "680",
    title: "Handmade Motor Driver Testing Rig",
    description: "Etched and assembled a prototype motor driver board by hand to test PWM responses and motor load behavior on the bench.",
    techStack: ["HIL Testing", "PWM Control", "Thrust Validation"],
    image: TDriver,
  },
  {
    id: 26,
    category: "Robotics",
    totalLike: "380",
    title: "Dynamic Spark High-Speed LFR V2",
    description: "Updated our team's line follower with custom copper-etched control boards and high-grip tires for high-speed cornering.",
    techStack: ["Kinematic Optimization", "Traction Dynamics", "Custom Logic"],
    image: lfr,
  },
  {
    id: 29,
    category: "3D Design",
    totalLike: "690",
    title: "Drishti Smart Glass 3D CAD Render",
    description: "Designed and rendered realistic 3D models of the Drishti Smart Glass to refine comfort, aesthetics, and camera placement.",
    techStack: ["Volumetric Optimization", "Thermal Design", "CAD Rendering"],
    image: glass3d,
  },
  {
    id: 30,
    category: "Robotics",
    totalLike: "820",
    title: "WRO International Finalist Rover (Team Echo Drift)",
    description: "Built the optical sensing system for our rover at WRO Future Engineers in Singapore, placing 29th globally.",
    techStack: ["Optical Filtration", "Wavelength Isolation", "WRO Global"],
    image: WRO_V3,
  },
  {
    id: 31,
    category: "Aviation",
    totalLike: "1.2k",
    title: "SN-21 Autonomous Transwing VTOL",
    description: "Led development on the DynamicSpark SN-21 VTOL aircraft, featuring a tilt-rotor mechanism and ArduPilot flight control integration.",
    techStack: ["ArduPilot", "Tilt-Rotor Aero", "Flight Control"],
    image: sn21,
  },
  {
    id: 32,
    category: "PCB",
    totalLike: "950",
    title: "High-Speed Control Logic Board V1",
    description: "Designed a multi-layer STM32 PCB featuring high-density component layout and trace length matching for stable data buses.",
    techStack: ["Length-Matching", "High-Speed Bus", "Altium Designer"],
    image: V002,
  }
];

export default Portfolio_data;