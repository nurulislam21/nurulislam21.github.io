import React, { useState, useRef, useEffect } from "react";
import "./Chatbot.css";

const INITIAL_CHIPS = [
  "Core Skills",
  "SN-21 VTOL Project",
  "Drishti Smart Glass",
  "Hiring / Freelance",
];

const BOT_KNOWLEDGE = {
  "Core Skills": {
    reply: "Noman specializes in Hardware Engineering: Altium multi-layer PCB design, STM32 bare-metal C/C++, SOLIDWORKS CAD, and autonomous robotics (ArduPilot/ROS).",
    nextChips: ["SN-21 VTOL Project", "View PCB Experience", "Contact Info"]
  },
  "SN-21 VTOL Project": {
    reply: "The DynamicSpark SN-21 is a Transwing Vertical Take-Off & Landing aircraft featuring tilt-rotor aerodynamics and ArduPilot flight control integration.",
    nextChips: ["Drishti Smart Glass", "WRO Competitions", "Contact Info"]
  },
  "Drishti Smart Glass": {
    reply: "Drishti is a wearable smart glass prototype featuring micro-camera assembly, flex ribbon circuit routing, and custom CAD enclosure design.",
    nextChips: ["Core Skills", "Hiring / Freelance", "Contact Info"]
  },
  "View PCB Experience": {
    reply: "Noman has designed multi-layer PCBs for industrial IoT edge nodes, high-current motor drivers with heat dissipation, and ESP32 audio/vision modules.",
    nextChips: ["SN-21 VTOL Project", "Hiring / Freelance"]
  },
  "WRO Competitions": {
    reply: "Represented Bangladesh at the WRO Singapore International Finals (29th globally) with Team Echo Drift, engineering custom optical filtering systems.",
    nextChips: ["Core Skills", "Contact Info"]
  },
  "Hiring / Freelance": {
    reply: "Noman is open for full-time robotics/hardware roles, as well as freelance PCB layout and firmware development projects.",
    nextChips: ["Send Message", "Email Directly"]
  },
  "Contact Info": {
    reply: "You can reach Noman at noman1272003@gmail.com, call +880 1823-395901, or leave a message right here!",
    nextChips: ["Send Message", "Hiring / Freelance"]
  },
  "Email Directly": {
    reply: "Direct email address: noman1272003@gmail.com. Feel free to send over project details or job specifications!",
    nextChips: ["Core Skills", "SN-21 VTOL Project"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [activeChips, setActiveChips] = useState(INITIAL_CHIPS);
  const [showContactInput, setShowContactInput] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am Noman's automated technical assistant. How can I help you today?" }
  ]);
  
  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSelectOption = (questionText) => {
    if (questionText === "Send Message") {
      setShowContactInput(true);
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: questionText },
        { sender: "bot", text: "Please enter your email below and Noman will follow up directly:" }
      ]);
      return;
    }

    const userMsg = { sender: "user", text: questionText };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const data = BOT_KNOWLEDGE[questionText] || {
        reply: "For specific technical inquiries, feel free to submit your email below or reach out directly.",
        nextChips: INITIAL_CHIPS
      };

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
      setActiveChips(data.nextChips || INITIAL_CHIPS);
      setIsTyping(false);
    }, 500);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!userEmail) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userEmail },
      { sender: "bot", text: "Email logged. Noman will respond to your inquiry shortly." }
    ]);
    setUserEmail("");
    setShowContactInput(false);
    setActiveChips(INITIAL_CHIPS);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="chatbot-wrapper">
      <button className="chat-trigger-btn" onClick={toggleChat} aria-label="Toggle Technical Assistant">
        <i className={`fas ${isOpen ? "fa-times" : "fa-comments"}`}></i>
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">N</div>
            <div>
              <h3>Technical Assistant</h3>
              <span className="online-indicator"><span className="dot"></span> Online</span>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Assistant">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble bot typing">
                <span></span><span></span><span></span>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          <div className="chat-footer">
            {showContactInput ? (
              <form onSubmit={handleEmailSubmit} className="chat-email-form">
                <input
                  type="email"
                  placeholder="Enter email address..."
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Submit Email"><i className="far fa-paper-plane"></i></button>
              </form>
            ) : (
              <>
                <p className="chip-label">Suggested Queries:</p>
                <div className="chips-container">
                  {activeChips.map((chip, i) => (
                    <button key={i} className="chip-btn" onClick={() => handleSelectOption(chip)}>
                      {chip}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;