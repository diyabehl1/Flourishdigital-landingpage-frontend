
import { motion } from "framer-motion";

export default function About() {
    const steps = [
        {
            title: "Step 1: Setup",
            desc: "Sign up and connect your website or WhatsApp channel to Flourish AI.",
        },
        {
            title: "Step 2: Customize",
            desc: "Train the assistant with your brand knowledge and FAQs.",
        },
        {
            title: "Step 3: Go Live",
            desc: "Start engaging customers with instant AI-powered responses.",
        },
        {
            title: "Step 4: Capture Leads",
            desc: "All interactions are logged, and leads are sent to your CRM.",
        },
    ];

    return (
        <section
            id="about"
            className="py-20 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="container mx-auto px-6 text-center bg-gray-800 rounded-xl p-10">
                {/* Title */}
                <motion.h2
                    className="text-4xl  text-white md:text-5xl font-bold mb-4 "
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    How It Works
                </motion.h2>

                <motion.p
                    className="text-gray-200 mb-12 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Setting up your AI assistant is simple and intuitive.
                </motion.p>

                {/* Steps */}
                <div className="grid md:grid-cols-4 gap-8 text-left">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-600 text-white border-l-4 border-blue-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 "
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                        >
                            <div className="text-white font-bold text-lg mb-2">
                                {step.title}
                            </div>
                            <p className="text-white">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}