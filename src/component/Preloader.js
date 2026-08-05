// import React, { useState, useEffect } from "react";
// import "./Preloader.css";

// const Preloader = ({ onComplete }) => {
//   const [lines, setLines] = useState([]);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     // Personalized Engineering Boot Sequence
//     const bootSequence = [
//       "INIT_KERNEL: Noman_OS v.2.4.1",
//       "MOUNTING SOLIDWORKS 3D RENDER ENGINE... [OK]",
//       "LOADING MODULE: STM32_Firmware_Interface.sys",
//       "CALIBRATING SN21 VTOL FLIGHT DYNAMICS... [OK]",
//       "ESTABLISHING SECURE TELEMETRY LINK TO SERVER...",
//       "DECRYPTING ALTIUM PCB SCHEMATICS...",
//       "USER IDENTIFIED: NURUL ISLAM NOMAN",
//       "SYSTEM BOOT // INITIALIZING UI..."
//     ];

//     let currentLine = 0;
//     let currentProgress = 0;

//     const lineInterval = setInterval(() => {
//       if (currentLine < bootSequence.length) {
//         setLines((prev) => [...prev, bootSequence[currentLine]]);
//         currentLine++;
//       }
//     }, 350); 

//     const progressInterval = setInterval(() => {
//       currentProgress += Math.floor(Math.random() * 12) + 2; 
      
//       if (currentProgress >= 100) {
//         currentProgress = 100;
//         clearInterval(progressInterval);
//         clearInterval(lineInterval);
//         setTimeout(onComplete, 1200); 
//       }
//       setProgress(currentProgress);
//     }, 150); 

//     return () => {
//       clearInterval(lineInterval);
//       clearInterval(progressInterval);
//     };
//   }, [onComplete]);

//   const randomHex = () => "0x" + Math.random().toString(16).slice(2, 10).toUpperCase();

//   const renderProgressBar = () => {
//     const filledBlocks = Math.floor(progress / 4); 
//     const emptyBlocks = 25 - filledBlocks;
//     return `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}] ${progress}%`;
//   };

//   return (
//     <div className="preloader">
//       <div className="scanlines"></div>
      
//       <div className="terminal-box">
//         <div className="term-bracket top-left"></div>
//         <div className="term-bracket bottom-right"></div>
        
//         {lines.map((line, index) => (
//           <div key={index} className="terminal-line">
//             <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
//             <span className="log-text">
//               {/* Colorizing the [OK] tags for a true terminal feel */}
//               {line.includes('[OK]') ? (
//                 <>
//                   {line.split('[OK]')[0]} <span className="log-sys">[OK]</span>
//                 </>
//               ) : (
//                 line
//               )}
//             </span>
//           </div>
//         ))}

//         {progress < 100 && (
//           <div className="terminal-line memory-scan">
//             <span className="timestamp">[{new Date().toISOString().split('T')[1].slice(0, 8)}]</span>
//             <span className="log-text"> SCANNING RAM: {randomHex()} {randomHex()}</span>
//           </div>
//         )}

//         <div className="terminal-progress">
//           <div className="progress-bar">{renderProgressBar()}</div>
//           {progress === 100 && <div className="blink-cursor">_</div>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;
import React, { useState, useEffect } from "react";
import "./Preloader.css";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5; 
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);
        setTimeout(onComplete, 600); 
      }
      setProgress(currentProgress);
    }, 120); 

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="loader-card">
        <div className="loader-header">
          <span className="loader-title">Nurul Islam Noman</span>
          <span className="loader-subtitle">Embedded Systems & Hardware Portfolio</span>
        </div>

        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="loader-footer">
          <span className="loading-text">Loading Experience...</span>
          <span className="percentage">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;