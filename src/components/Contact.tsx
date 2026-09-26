"use client"

import * as React from "react"
import { useState } from "react"
import { Mail, Code, Link, Send, AlertCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import MagneticButton from "./MagneticButton"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "validation_error" | "server_error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("validation_error")
      return
    }
    
    setStatus("sending")
    
    try {
      const response = await fetch('https://wrmosik6xpuwytwanpi2y3c5sy0wmmzi.lambda-url.ap-south-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setStatus("idle"), 3000)
      } else {
        setStatus("server_error")
        setTimeout(() => setStatus("idle"), 3000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus("server_error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === "validation_error" || status === "server_error") setStatus("idle")
  }

  return (
    <section id="contact" className="relative z-10 w-full py-32 px-4 md:px-8 border-t border-border bg-gradient-to-b from-transparent to-accent/5">
      
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading title="Initiate Comms" subtitle="06 // Contact" align="center" />
        
        <div className="text-center mb-16 -mt-8">
          <p className="text-secondary font-sans text-lg max-w-2xl mx-auto">
            I'm always interested in learning, building, and collaborating on meaningful technology projects. 
            Whether you have a question or just want to say hi, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-6">
            <a 
              href="mailto:abishekjeyaraj334@gmail.com" 
              className="group glass p-6 rounded-3xl hover:border-accent/50 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors text-muted border border-border group-hover:border-accent/30">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold font-sans">Email</span>
                <span className="text-secondary text-sm font-sans mt-1">abishekjeyaraj334@gmail.com</span>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/abishek-jeyaraj-67d/" 
              target="_blank" rel="noopener noreferrer"
              className="group glass p-6 rounded-3xl hover:border-accent/50 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors text-muted border border-border group-hover:border-accent/30">
                <Link className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold font-sans">LinkedIn</span>
                <span className="text-secondary text-sm font-sans mt-1">Let's connect</span>
              </div>
            </a>

            <a 
              href="https://github.com/AbishekJeyaraj" 
              target="_blank" rel="noopener noreferrer"
              className="group glass p-6 rounded-3xl hover:border-accent/50 transition-all duration-300 flex items-center gap-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 group-hover:text-accent transition-colors text-muted border border-border group-hover:border-accent/30">
                <Code className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-bold font-sans">GitHub</span>
                <span className="text-secondary text-sm font-sans mt-1">View repositories</span>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-8 glass p-6 md:p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted font-bold ml-4">Name</label>
                  <input 
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange}
                    className="bg-black/20 border border-border rounded-full px-6 py-4 text-primary font-sans text-sm outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted font-bold ml-4">Email</label>
                  <input 
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange}
                    className="bg-black/20 border border-border rounded-full px-6 py-4 text-primary font-sans text-sm outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted font-bold ml-4">Subject</label>
                <input 
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange}
                  className="bg-black/20 border border-border rounded-full px-6 py-4 text-primary font-sans text-sm outline-none focus:border-accent/50 focus:bg-white/5 transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted font-bold ml-4">Message</label>
                <textarea 
                  id="message" name="message" rows={5}
                  value={formData.message} onChange={handleChange}
                  className="bg-black/20 border border-border rounded-3xl px-6 py-5 text-primary font-sans text-sm outline-none focus:border-accent/50 focus:bg-white/5 transition-all resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
                <div className="flex items-center gap-2 h-6">
                  {status === "validation_error" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold">
                      <AlertCircle className="w-4 h-4" /> Required fields missing.
                    </motion.div>
                  )}
                  {status === "server_error" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold">
                      <AlertCircle className="w-4 h-4" /> Failed to send message.
                    </motion.div>
                  )}
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" /> Transmission successful.
                    </motion.div>
                  )}
                </div>

                <MagneticButton 
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="group relative bg-primary text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto overflow-hidden disabled:opacity-50 disabled:hover:scale-100"
                >
                  <span className="relative z-10 font-mono tracking-widest text-xs uppercase">
                    {status === "sending" ? "Encrypting..." : status === "success" ? "Sent" : "Send Message"}
                  </span>
                  <Send className={`w-4 h-4 relative z-10 ${status === "sending" ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                </MagneticButton>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
