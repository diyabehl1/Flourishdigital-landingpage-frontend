
import { motion } from 'framer-motion';

const Feature = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="features" className="py-20 bg-gradient-to-r from-gray-100 to-purple-100">
            <div className="container mx-auto bg-gray-800 rounded-xl p-10 text-white px-6">
                <motion.h2
                    className="text-4xl  text-center  font-bold mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Why Flourish Digital Chatbots?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Always-On Support", desc: "Never miss a lead. AI answers instantly on web, WhatsApp, and more." },
                        { title: "Text & Voice Ready", desc: "From chat bubbles to natural conversation with microphone & TTS." },
                        { title: "Custom AI Training", desc: "We fine‑tune your bot with your brand, FAQs, and knowledge base." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="p-6 bg-gray-600 text-white border-l-4 border-blue-400 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300  rounded-lg shadow"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;