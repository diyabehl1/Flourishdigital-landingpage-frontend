

import { motion } from "framer-motion";

const testimonials = [
    { text: "Flourish Digital's chatbot transformed our customer support. Response times dropped by 60% and our customer satisfaction has never been higher", name: "Sarah • E-commerce" },
    { text: "The AI integration helped us streamline communication and boosted our sales by 45%.", name: "Rahul • Services" },
    { text: "A seamless experience for both our team and customers, thanks to Flourish Digital's solutions.", name: "Martin • SaaS" },
];

export default function Testimonials() {
    return (
        <section className="py-20">
            <div className="container bg-gray-800 rounded-xl p-10 mx-auto px-6">
                {/* Heading Animation */}
                <motion.h2
                    className="text-3xl font-bold text-white text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    What Customers Say
                </motion.h2>

                {/* Testimonials Animation */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-600 text-white border-l-4 border-blue-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }} // stagger effect
                        >
                            <p className="text-white font-bold mb-4">“{t.text}”</p>
                            <div className="font-semibold text-white">{t.name}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}