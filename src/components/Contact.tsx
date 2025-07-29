'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MessageCircle, Linkedin, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import WhatsAppModal from './WhatsAppModal';
import EmailModal from './EmailModal';
import { trackContactForm } from '@/lib/gtag';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        reset();

        // Track successful form submission
        trackContactForm('contact_form');

        // Show success toast
        toast.success(
          'Message sent successfully! I\'ll get back to you soon.',
          {
            duration: 5000,
            style: {
              background: '#1A1C26',
              color: '#64FFDA',
              border: '1px solid #64FFDA',
              borderRadius: '12px',
              padding: '16px 20px',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow: '0 10px 40px rgba(100, 255, 218, 0.1)',
            },
            iconTheme: {
              primary: '#64FFDA',
              secondary: '#1A1C26',
            },
          }
        );

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Show error toast
        toast.error(
          result.error || 'Failed to send message. Please try again.',
          {
            duration: 5000,
            style: {
              background: '#1A1C26',
              color: '#FF6B6B',
              border: '1px solid #FF6B6B',
              borderRadius: '12px',
              padding: '16px 20px',
              fontSize: '15px',
              fontWeight: '500',
              boxShadow: '0 10px 40px rgba(255, 107, 107, 0.1)',
            },
            iconTheme: {
              primary: '#FF6B6B',
              secondary: '#1A1C26',
            },
          }
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(
        'Network error. Please check your connection and try again.',
        {
          duration: 5000,
          style: {
            background: '#1A1C26',
            color: '#FF6B6B',
            border: '1px solid #FF6B6B',
            borderRadius: '12px',
            padding: '16px 20px',
            fontSize: '15px',
            fontWeight: '500',
            boxShadow: '0 10px 40px rgba(255, 107, 107, 0.1)',
          },
          iconTheme: {
            primary: '#FF6B6B',
            secondary: '#1A1C26',
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-[#64FFDA] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tell Me What&apos;s <span className="text-[#64FFDA]">On Your Mind</span>
          </h2>
          <p className="text-xl text-[#A0AEC0] max-w-2xl mx-auto">
            Ready to turn your vision into reality? Let&apos;s brew something magical together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1A1C26] p-8 rounded-2xl border border-[#2A2D3A]"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-[#64FFDA] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#64FFDA] mb-2">Message Sent!</h3>
                <p className="text-[#A0AEC0]">Thanks for reaching out. I&apos;ll get back to you soon!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <motion.input
                    {...register('name')}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-[#0F111A] border border-[#2A2D3A] rounded-lg focus:border-[#64FFDA] focus:outline-none transition-colors text-white placeholder-[#A0AEC0]"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.name && (
                    <p className="text-[#FF6B6B] text-sm mt-2">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <motion.input
                    {...register('email')}
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-4 bg-[#0F111A] border border-[#2A2D3A] rounded-lg focus:border-[#64FFDA] focus:outline-none transition-colors text-white placeholder-[#A0AEC0]"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.email && (
                    <p className="text-[#FF6B6B] text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <motion.textarea
                    {...register('message')}
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-4 bg-[#0F111A] border border-[#2A2D3A] rounded-lg focus:border-[#64FFDA] focus:outline-none transition-colors text-white placeholder-[#A0AEC0] resize-none"
                    whileFocus={{ scale: 1.02 }}
                  />
                  {errors.message && (
                    <p className="text-[#FF6B6B] text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#64FFDA] text-[#0F111A] py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#4FD1C7] hover:shadow-[0_0_30px_#64FFDA] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#0F111A] border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
              <p className="text-[#A0AEC0] leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore possibilities,
                We&apos;re here to help bring your digital dreams to life. Every great project starts with a conversation.
              </p>
            </div>

            <div className="space-y-6">
              <motion.button
                onClick={() => setIsEmailModalOpen(true)}
                className="w-full flex items-center p-4 bg-[#1A1C26] rounded-lg border border-[#2A2D3A] hover:border-[#64FFDA]/30 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-[#64FFDA] mr-4" />
                <div>
                  <p className="font-medium text-start">Email</p>
                  <p className="text-[#A0AEC0] group-hover:text-[#64FFDA] transition-colors">Choose email address</p>
                </div>
              </motion.button>

              <motion.a
                href="https://linkedin.com/in/yourname"
                className="flex items-center p-4 bg-[#1A1C26] rounded-lg border border-[#2A2D3A] hover:border-[#64FFDA]/30 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <Linkedin className="w-6 h-6 text-[#64FFDA] mr-4" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-[#A0AEC0] group-hover:text-[#64FFDA] transition-colors">Connect with me</p>
                </div>
              </motion.a>

              <motion.button
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="w-full flex items-center p-4 bg-[#1A1C26] rounded-lg border border-[#2A2D3A] hover:border-[#64FFDA]/30 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <MessageCircle className="w-6 h-6 text-[#64FFDA] mr-4" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-[#A0AEC0] group-hover:text-[#64FFDA] transition-colors">Quick chat</p>
                </div>
              </motion.button>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-[#64FFDA]/10 to-[#FF6B6B]/10 rounded-lg border border-[#64FFDA]/20">
              <p className="text-[#64FFDA] font-medium mb-2">Response Time</p>
              <p className="text-[#A0AEC0]">We typically respond within 24 hours. For urgent projects, feel free to reach out via WhatsApp.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      {/* Email Modal */}
      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
      />
    </section>
  );
};

export default Contact;