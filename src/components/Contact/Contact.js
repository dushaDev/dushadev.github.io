"use client";

import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [mounted, setMounted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
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

  if (!mounted) {
    return (
      <section className="px-6 py-20 bg-slate-50 min-h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full flex flex-col items-center md:items-start">
          <h2 className="text-center md:text-left text-4xl md:text-5xl font-black mb-6 tracking-tight w-full animate-pulse">
            CONTACT
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-20 bg-slate-50 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full flex flex-col items-center md:items-start">
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-black mb-6 tracking-tight w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            CONTACT
          </span>
        </h2>
        <p className="text-slate-600 text-lg md:text-xl text-center md:text-left mb-12 max-w-2xl md:mx-0">
          Have a question or want to work together? Leave your details and
          I&apos;ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-slate-100 p-8 md:p-12 rounded-3xl shadow-sm">
          {/* Info Details */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Get in Touch</h3>
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaEnvelope size={18} />
              </div>
              <span className="break-all font-medium text-sm md:text-base">dushanmadushankabeligala9@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaPhone size={18} />
              </div>
              <span className="font-medium text-sm md:text-base">+94-767-771-005</span>
            </div>
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaLinkedin size={18} />
              </div>
              <a
                href="https://www.linkedin.com/in/dushan-madushanka-360252196"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline font-medium text-sm md:text-base"
              >
                linkedin.com/dushan-madushanka
              </a>
            </div>
            <div className="flex items-center space-x-4 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FaGithub size={18} />
              </div>
              <a
                href="https://github.com/dushaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline font-medium text-sm md:text-base"
              >
                github.com/dushaDev
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <form
              ref={formRef}
              className="flex flex-col space-y-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/50 text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/50 text-sm"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary/50 text-sm resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition duration-300 disabled:bg-slate-300"
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </form>
            {success !== null && (
              <p className={`mt-4 text-sm font-semibold ${success ? "text-green-600" : "text-red-600"}`}>
                {success ? "Message sent successfully!" : "Failed to send message."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
