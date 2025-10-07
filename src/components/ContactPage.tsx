import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, MessageSquare, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  urgency: 'low' | 'medium' | 'high';
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    urgency: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-d642e30c/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          urgency: 'medium'
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you and learn about your challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl text-white mb-6 flex items-center space-x-3"
            >
              <MessageSquare className="text-cyan-400" />
              <span>Send Message</span>
            </motion.h2>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-green-400">Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
              >
                <span className="text-red-400">There was an error sending your message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-zinc-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-zinc-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-zinc-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm text-cyan-400 mb-2">Priority</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Project discussion</option>
                    <option value="high">High - Urgent matter</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm text-cyan-400 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and how I can help..."
                />
              </motion.div>

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-zinc-900 rounded-lg hover:from-cyan-300 hover:to-teal-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-zinc-900"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
            >
              <h3 className="text-2xl text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg">
                    <Mail className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Email</p>
                    <p className="text-white">matthew.shaw@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg">
                    <Phone className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Phone</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg">
                    <MapPin className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Location</p>
                    <p className="text-white">United States</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg">
                    <Clock className="text-zinc-900" size={20} />
                  </div>
                  <div>
                    <p className="text-zinc-400 text-sm">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
            >
              <h3 className="text-2xl text-white mb-6">Availability</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-300">New Projects</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">Available</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-300">Consultations</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm">Available</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-300">Emergency Support</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm">Limited</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-800 rounded-2xl p-8 border border-zinc-700"
            >
              <h3 className="text-2xl text-white mb-6">Services I Offer</h3>
              
              <div className="space-y-3">
                {[
                  "System Architecture Design",
                  "Cloud Migration & Optimization",
                  "Cybersecurity Assessment",
                  "Infrastructure Automation",
                  "Team Leadership & Training",
                  "Technical Consulting"
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"></div>
                    <span className="text-zinc-300">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}