"use client";

import React, { useEffect, useState } from "react";
import "./StarryBackground.css";

const StarryBackground = () => {
    const [stars, setStars] = useState([]);
    const [comets, setComets] = useState([]);

    useEffect(() => {
        // Generate static stars
        const newStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
        setStars(newStars);

        // Generate comets periodically
        const generateComet = () => {
            const newComet = {
                id: Date.now(),
                top: Math.random() * 80, // Random vertical start
                left: Math.random() * 100 + 50, // Start slightly off-screen right
                delay: Math.random() * 10 // Random delay
            };

            setComets(prev => [...prev.slice(-2), newComet]); // Keep only last few comets
        };

        const interval = setInterval(generateComet, 12000); // New comet every 12s (less frequent)
        generateComet(); // Initial comet

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="starry-background">
            <div className="nebula-layer"></div>
            <div className="stars-wrapper">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            "--duration": `${star.duration}s`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Comets Layer - separate from rotation so they fly straight */}
            {comets.map((comet) => (
                <div
                    key={comet.id}
                    className="comet"
                    style={{
                        top: `${comet.top}%`,
                        left: `${comet.left}%`,
                        animationDelay: `0s` // Trigger immediately upon creation
                    }}
                />
            ))}
        </div>
    );
};

export default StarryBackground;
