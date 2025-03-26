"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-10 px-6 text-center">
      <h2 className="text-center text-4xl font-bold mt-10 mb-10">CONTACT</h2>
      <p className="text-secondary text-xl mb-8">
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </p>

      <div className="flex justify-center">
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
              href="https://www.linkedin.com/in/dushan-beligala-360252196/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/dushan-beligala
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

      <div className="max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-3">Send Message</h3>
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <textarea
            name="message"
            placeholder="message"
            rows="4"
            className="w-full p-3 bg-neutral rounded-sm shadow-md"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-2 bg-secondary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-sm shadow-md transition"
            >
              Send
            </button>
          </div>

          {status === "loading" && (
            <p className="text-blue-500 mt-3">Sending...</p>
          )}
          {status === "success" && (
            <p className="text-green-500 mt-3">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500 mt-3">
              Something went wrong. Try again!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
