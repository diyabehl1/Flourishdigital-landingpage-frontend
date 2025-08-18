
import { motion } from "framer-motion";
import Demo from './Demo'
import About from './About'
import Testimonials from "./Testimonials";
import Contact from './Contact'
import Feature from "./Feature";
import Faq from "./Faq";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Home = () => {
    return (
        <>
            <section className="bg-gradient-to-r from-gray-100 to-purple-100 py-20">

                <div className="container mx-auto grid md:grid-cols-2 gap-25 items-center px-12">
                    {/* Text Content */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >


                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                            Text & Voice AI • 24/7
                        </span>
                        <h1 className="text-4xl md:text-5xl  text-black font-bold mt-4">
                            Smart AI Chatbots that Talk—and Sell—for You
                        </h1>
                        <p className="mt-4 text-gray-700">
                            Capture leads, answer instantly, and delight customers with custom-trained AI bots across web, WhatsApp, and voice channels.
                        </p>
                        <div className="flex gap-4 mt-6 flex-wrap">
                            <a href="#demo" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
                            >
                                See Live Demo
                            </a>

                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-4 rounded-xl shadow-lg"
                    >
                        <img src="./images/im3.png" alt="Chatbot illustration" className="w-auto h-150" />
                    </motion.div>
                </div>
            </section>

            <section>

                <Feature></Feature>
            </section>
            <div>
                <Demo></Demo>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Faq></Faq>
            </div>

            <Testimonials></Testimonials>
            <div id="contact"> <Contact></Contact></div>
        </>

    );
};

export default Home;