import { useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Clear error if all fields are now filled
    if (form.name && form.email && form.subject && form.message) {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    const emailSuccess = "Sent! Expect a response soon.";

    // Send email via EmailJS
    emailjs
      .send("service_m4cz4fp", "template_kvm7spi", form, "gTOf0GyUg4A7Ob0xJ")
      .then(() => {
        setSuccess(emailSuccess);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSuccess(""), 3000);
      })
      .catch(() => {
        setError("Failed to send message. Try again.");
        setTimeout(() => setError(""), 3000);
      });
  };

  return createPortal(
    <div className="fixed inset-0 bg-white/25 flex justify-center items-baseline-last z-50">
      <div
        className=" p-6 rounded-t-xl w-[95%] md:w-[330px] relative"
        style={{
          backgroundColor: "var(--color-modalBg)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red"
        >
          <AiOutlineClose size={20} />
        </button>

        <h2 className="text-xl font-bold mt-2 mb-4 text-center">
          Send me a message
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject of message"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message"
            className="border border-gray-300 rounded-md px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2"
          />

          {error && <p className="text-red text-sm">{error}</p>}
          {success && <p className="text-success text-sm">{success}</p>}

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium mb-2">Or reach me via:</p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:mhayreejhaine@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail color="#ff6666" size={28} />
            </a>
            <a
              href="https://x.com/Mhayree_Jhaine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/maryjane-ashinedu-ngozi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoLinkedin size={28} className="text-blue" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
