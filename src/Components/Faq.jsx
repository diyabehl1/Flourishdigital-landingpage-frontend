

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is a Chatbot AI?",
    answer:
      "A Chatbot AI is a virtual assistant that can communicate with customers via text or voice, answer queries, guide them through processes, and even complete transactions automatically."
  },
  {
    question: "Do you offer both voice and chat assistants?",
    answer:
      "Yes, we provide both AI-powered chat assistants for text-based interaction and voice assistants that can handle calls or voice commands in real time."
  },
  {
    question: "Can the chatbot generate hashtags for social media?",
    answer:
      "Absolutely! Our chatbot can create trending, relevant, and SEO-friendly hashtags based on your content or target audience."
  },
  {
    question: "Can it write product descriptions?",
    answer:
      "Yes, our AI can generate engaging, professional, and SEO-optimized product descriptions to boost your sales and improve search rankings."
  },
  {
    question: "Can it integrate with my website or app?",
    answer:
      "Our chatbot and voice assistant can be integrated into websites, mobile apps, CRMs, and social media platforms seamlessly."
  },
  {
    question: "Does it work 24/7?",
    answer:
      "Yes, once set up, the AI assistant is available 24/7 to engage with customers, answer questions, and capture leads."
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">{openIndex === idx ? "−" : "+"}</span>
              </div>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.p
                    className="mt-3 text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}