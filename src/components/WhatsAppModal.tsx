'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Phone, User, Briefcase, Clock } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/gtag';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const whatsappNumbers = [
  {
    id: 1,
    name: 'Nitin - Sr. Full Stack Dev',
    number: '+91 9310176922',
    description: 'React, Next.js, Node.js & Full Stack Solutions',
    icon: User,
    color: '#64FFDA',
    availability: '9 AM - 6 PM'
  },
  {
    id: 2,
    name: 'Shubhanshu - Sr. Full Stack Dev',
    number: '+91 8287762253',
    description: 'Full Stack Development & API Design',
    icon: Briefcase,
    color: '#FF6B6B',
    availability: '10 AM - 8 PM'
  },
  {
    id: 3,
    name: 'Navneet Kumar - Sr. WordPress Dev',
    number: '+91 8766254833',
    description: 'WordPress, Custom Themes & Plugin Development',
    icon: Phone,
    color: '#4ECDC4',
    availability: '9 AM - 7 PM'
  },
  {
    id: 4,
    name: 'Pradeep Mahapatra - Sr. WordPress Dev',
    number: '+91 7503177590',
    description: 'WordPress, Elementor & Performance Optimization',
    icon: Clock,
    color: '#FFE66D',
    availability: '9 AM - 6 PM'
  }
];

const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const handleWhatsAppClick = (number: string, name: string) => {
    // Track WhatsApp click
    trackWhatsAppClick(name);

    const message = encodeURIComponent(`Hi! I'm reaching out via your ${name} WhatsApp from your portfolio website.`);
    const whatsappUrl = `https://wa.me/${number.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-[#1A1C26] border border-[#2A2D3A] rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <MessageCircle className="w-6 h-6 text-[#64FFDA] mr-3" />
                <h3 className="text-xl font-semibold text-white">Choose WhatsApp</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#2A2D3A] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#A0AEC0]" />
              </button>
            </div>

            {/* Description */}
            <p className="text-[#A0AEC0] mb-6 text-sm">
              Select the most appropriate number for your inquiry. Each number is optimized for different types of conversations.
            </p>

            {/* WhatsApp Options */}
            <div className="space-y-3">
              {whatsappNumbers.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.button
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleWhatsAppClick(contact.number, contact.name)}
                    className="w-full p-4 bg-[#0F111A] border border-[#2A2D3A] rounded-lg hover:border-[#64FFDA]/30 transition-all duration-300 group text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start">
                      <div
                        className="p-2 rounded-lg mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${contact.color}20` }}
                      >
                        <IconComponent
                          className="w-5 h-5"
                          style={{ color: contact.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white group-hover:text-[#64FFDA] transition-colors">
                            {contact.name}
                          </h4>
                          <span className="text-xs text-[#A0AEC0] bg-[#2A2D3A] px-2 py-1 rounded">
                            {contact.availability}
                          </span>
                        </div>
                        <p className="text-sm text-[#A0AEC0] mb-2">
                          {contact.description}
                        </p>
                        <p className="text-xs text-[#64FFDA] font-mono">
                          {contact.number}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-6 p-4 bg-gradient-to-r from-[#64FFDA]/10 to-[#FF6B6B]/10 rounded-lg border border-[#64FFDA]/20">
              <p className="text-xs text-[#A0AEC0] text-center">
                💡 <strong className="text-[#64FFDA]">Tip:</strong> Choose the right number for faster response times
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;