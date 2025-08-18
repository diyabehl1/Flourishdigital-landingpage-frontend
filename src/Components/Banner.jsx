
import React, { useEffect, useState } from "react";

export default function Banner() {
    const [offerEnd] = useState(new Date().getTime() + 10 * 24 * 60 * 60 * 1000);

    const [timeLeft, setTimeLeft] = useState({
        days: "10",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = offerEnd - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
            } else {
                const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
                const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
                const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
                const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");

                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [offerEnd]);

    return (
        <div className="w-full bg-black text-white px-4 py-3">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                {/* Offer text */}
                <span className="text-sm sm:text-base md:text-lg font-semibold">
                    🚀 Limited Time Deal! Get your AI Chatbot now!
                </span>

                {/* Timer */}
                <span className="flex gap-2 text-sm sm:text-base md:text-lg font-mono">
                    <span>{timeLeft.days}d</span>:
                    <span>{timeLeft.hours}h</span>:
                    <span>{timeLeft.minutes}m</span>:
                    <span>{timeLeft.seconds}s</span>
                </span>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="bg-white text-black px-4 py-2 rounded-md font-semibold text-sm sm:text-base hover:bg-gray-200 transition"
                >
                    Book Now
                </a>
            </div>
        </div>
    );
}