"use client";

import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const formRef = useRef(null);
  // Animation refs
  const contactRef1 = useRef(null);
  const contactRef2 = useRef(null);
  const contactRef3 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [contactRef1.current, contactRef2.current, contactRef3.current],
      { y: "10%", scale: 0.8, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 0.6,
          markers: false,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // From environment variables
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          email: formRef.current.email.value,
          name: formRef.current.name.value,
          time: new Date().toLocaleString(),
          message: formRef.current.message.value,
          title: "New Contact Form Submission",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 text-center h-screen" ref={containerRef}>
      <h2 className="text-center text-4xl font-bold mt-10 mb-10">CONTACT</h2>
      <p className="text-secondary text-xl mb-8" ref={contactRef1}>
        Have a question or want to work together? Leave your details and
        I&apos;ll get back to you as soon as possible.
      </p>

      <div className="flex justify-center" ref={contactRef2}>
        <div className="flex flex-col items-start space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-primary text-xl" />
            <span>dushanmadushankabeligala9@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-primary text-xl" />
            <span>+94-767-771-005</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaLinkedin className="text-primary text-xl" />
            <a
              href="https://www.linkedin.com/in/dushan-madushanka-360252196"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/dushan-madushanka
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub className="text-primary text-xl" />
            <a
              href="https://github.com/dushaDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/dushaDev
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto" ref={contactRef3}>
        <h3 className="text-lg font-semibold mb-3">Send Message</h3>
        <form
          ref={formRef}
          className="flex flex-col space-y-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            required
          />
          <textarea
            name="message"
            placeholder="message"
            rows="3"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            required
            autoComplete="off"
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-2 bg-secondary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-sm shadow-md transition"
            >
              {loading ? "Sending.." : "Send"}
            </button>
          </div>
        </form>
        {success !== null && (
          <p className={`mt-2 ${success ? "text-green-600" : "text-red-600"}`}>
            {success ? "Message sent successfully!" : "Failed to send message."}
          </p>
        )}
      </div>
    </section>
  );
}
