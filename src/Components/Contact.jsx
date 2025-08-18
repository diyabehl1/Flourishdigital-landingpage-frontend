

import React from 'react'
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91"); // default India
    const [email, setEmail] = useState("");
    const [business, setBusiness] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.endsWith("@gmail.com")) {
            alert("❌ Please enter a valid Gmail address.");
            return;
        }

        const phoneDigits = phone.replace(/\D/g, "");
        if (phoneDigits.length !== 10) {
            alert("❌ Please enter a 10-digit phone number.");
            return;
        }

        const formData = {
            name,
            phone: countryCode + phoneDigits,
            email,
            business,
            message,
        };

        try {
            const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.success) {
                alert("✅ Thanks! We will contact you shortly.");
                setName("");
                setPhone("");
                setEmail("");
                setBusiness("");
                setMessage("");
            } else {
                alert("❌ Error saving data.");
            }
        } catch (err) {
            alert("❌ Network error.");
        }
    };

    return (
        <section className="py-20 bg-gradient-to-r from-gray-100 to-purple-100">
            <div className="container mx-auto px-6 max-w-3xl bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-3 text-black">
                    Your Customers Are Waiting. Let AI Answer.
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Book a free demo and get your chatbot live fast.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-4 rounded-lg border"
                    />

                    {/* Single box with country code */}
                    <div className="relative flex items-center rounded-lg border overflow-hidden">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="bg-gray-100 p-4 border-r focus:outline-none"
                        >
                            <option value="+91">+91</option>
                            <option value="+1">+1</option>
                            <option value="+44">+44</option>
                            <option value="+61">+61</option>
                        </select>
                        <input
                            type="tel"
                            required
                            placeholder="10-digit Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="flex-1 p-4 focus:outline-none"
                        />
                    </div>

                    <input
                        type="email"
                        required
                        placeholder="Gmail Only"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 rounded-lg border md:col-span-2"
                    />

                    <input
                        type="text"
                        placeholder="Business Name (optional)"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        className="p-4 rounded-lg border md:col-span-2"
                    />

                    <textarea
                        required
                        placeholder="Describe Your Requirements"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="4"
                        className="md:col-span-2 p-4 rounded-lg border"
                    ></textarea>

                    <button
                        type="submit"
                        className="md:col-span-2 bg-gradient-to-r from-blue-600 to-sky-400 text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition"
                    >
                        Book My Free Demo
                    </button>
                </form>
            </div>
        </section>
    );
}