import { Particles } from "@/components/magicui/particles";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import LocomotiveScroll from "locomotive-scroll";
const Contact = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Particles */}
      <div className="absolute inset-0 w-full z-0 opacity-30">
        <Particles className="w-full h-full" quantity={50} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Social Links */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-zinc-500 pb-4 inline-block">
              Connect With Me
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-zinc-400 transition-all transform hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <FaGithub className="w-6 h-6 mr-4" />
              <span className="text-lg">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-zinc-400 transition-all transform hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaLinkedin className="w-6 h-6 mr-4" />
              <span className="text-lg">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-zinc-400 transition-all transform hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaTwitter className="w-6 h-6 mr-4" />
              <span className="text-lg">Twitter</span>
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-zinc-400 transition-all transform hover:translate-x-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FaInstagram className="w-6 h-6 mr-4" />
              <span className="text-lg">Instagram</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="md:w-2/3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-zinc-500 pb-4 inline-block">
              Get In Touch
            </h2>
          </div>
          <form className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-200 mb-2"
                >
                  Name
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-lg bg-zinc-950/30 border border-zinc-500/20 text-white shadow-sm focus:border-zinc-400 focus:ring-zinc-400 transition-all px-4 py-3"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-200 mb-2"
                >
                  Email
                </label>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-lg bg-zinc-950/30 border border-zinc-500/20 text-white shadow-sm focus:border-zinc-400 focus:ring-zinc-400 transition-all px-4 py-3"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-200 mb-2"
                >
                  Message
                </label>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-lg bg-zinc-950/30 border border-zinc-500/20 text-white shadow-sm focus:border-zinc-400 focus:ring-zinc-400 transition-all px-4 py-3"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-zinc-600 text-white py-3 px-6 rounded-lg hover:bg-zinc-500 transition-all transform hover:scale-[1.02] font-medium text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
