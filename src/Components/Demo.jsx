import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

export default function LiveDemoSide() {
    const [messages, setMessages] = useState([
        { text: "Hi! I’m Flourish AI. Ask me about features or integrations.", sender: "bot" },
    ]);
    const [lastBotReply, setLastBotReply] = useState(
        "Hi! I’m Flourish AI. Ask me about features or integrations."
    );
    const [recognizing, setRecognizing] = useState(false);

    const chatBodyRef = useRef(null);
    const inputRef = useRef(null);
    const recognitionRef = useRef(null);

    const appendMsg = (text, sender) => {
        setMessages(prev => [...prev, { text, sender }]);
        setTimeout(() => {
            if (chatBodyRef.current) {
                chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
            }
        }, 100);
    };

    const botReply = (user) => {
        const u = user.toLowerCase();
        if (u.includes("feature") || u.includes("capab"))
            return "We handle FAQs, lead capture, WhatsApp, voice assistant, and integrations — all brand-trained.";
        if (u.includes("demo") || u.includes("trial") || u.includes("book"))
            return "Drop your email in the form below — we’ll book your free demo and tailor it to your use-case.";
        if (u.includes("integration") || u.includes("crm") || u.includes("whatsapp"))
            return "Yes! We integrate with WhatsApp and push leads to your CRM or Google Sheets.";
        if (u.includes("hello") || u.includes("hi"))
            return "Hello! How can I help you explore Flourish chatbots today?";
        return "Great question! Tell me if you want details on features or integrations — or book a free demo below.";
    };

    const sendMessage = useCallback(() => {
        const text = inputRef.current.value.trim();
        if (!text) return;
        appendMsg(text, "user");
        const reply = botReply(text);
        setLastBotReply(reply);
        setTimeout(() => appendMsg(reply, "bot"), 300);
        inputRef.current.value = "";
        inputRef.current.focus();
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    useEffect(() => {
        if ("webkitSpeechRecognition" in window) {
            recognitionRef.current = new window.webkitSpeechRecognition();
            recognitionRef.current.lang = "en-US";
            recognitionRef.current.interimResults = false;
            recognitionRef.current.maxAlternatives = 1;
            recognitionRef.current.onresult = (event) => {
                const text = event.results[0][0].transcript;
                inputRef.current.value = text;
                sendMessage();
            };
            recognitionRef.current.onend = () => setRecognizing(false);
        }
    }, [sendMessage]);

    const handleVoiceClick = () => {
        if (!recognitionRef.current) return alert("Voice not supported");
        if (!recognizing) {
            setRecognizing(true);
            recognitionRef.current.start();
        }
    };

    const handleTTS = () => {
        if (!("speechSynthesis" in window)) return alert("Speech synthesis not supported");
        const utter = new SpeechSynthesisUtterance(lastBotReply);
        utter.lang = "en-US";
        window.speechSynthesis.speak(utter);
    };

    return (
        <section className="py-20 bg-gray-50">
            <motion.div
                id="demo"
                className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6 items-start"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Demo Chat Box */}
                <motion.div
                    className="flex flex-col w-full"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div
                        ref={chatBodyRef}
                        className="border rounded-lg p-4 h-96 overflow-y-auto bg-white shadow-md mb-4"
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`mb-2 p-2 rounded-lg max-w-[75%] sm:max-w-xs break-words ${
                                    msg.sender === "bot"
                                        ? "bg-blue-100 self-start"
                                        : "bg-green-100 self-end ml-auto"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input + Buttons (Responsive) */}
                    <div className="flex flex-col sm:flex-row gap-2 w-full">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Type your message..."
                            className="flex-1 w-full sm:w-auto min-w-[120px] border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            onClick={handleVoiceClick}
                            className="w-full sm:w-auto bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
                        >
                            🎤
                        </button>
                        <button
                            onClick={handleTTS}
                            className="w-full sm:w-auto bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
                        >
                            🔊
                        </button>
                        <button
                            onClick={sendMessage}
                            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </div>
                </motion.div>

                {/* Side Content */}
                <motion.div
                    className="flex flex-col justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl sm:text-3xl text-black font-bold mb-4">
                        See Your AI Assistant in Action
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Type or speak to the demo. We’ll show how your customers get delightful,
                        instant answers—then capture the lead.
                    </p>
                    <ul className="space-y-3 mb-6 list-disc list-inside text-gray-700">
                        <li>Supports text & voice interactions</li>
                        <li>Friendly tone + brand-trained knowledge</li>
                        <li>Easy website & WhatsApp embed</li>
                    </ul>
                    <a href="#contact">
                        <button className="bg-gradient-to-r from-blue-600 to-sky-400 text-white px-5 py-2 rounded-lg hover:opacity-90 transition w-full sm:w-auto">
                            Book a Free Demo
                        </button>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}


