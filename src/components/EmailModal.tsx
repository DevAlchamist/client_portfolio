'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Briefcase, Code, Headphones } from 'lucide-react';
import { trackEmailClick } from '@/lib/gtag';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const emailAddresses = [
  {
    id: 1,
    name: 'General Inquiries',
    email: 'hello@yourcompany.com',
    description: 'General questions & project discussions',
    icon: User,
    color: '#64FFDA',
    purpose: 'New projects & partnerships'
  },
  {
    id: 2,
    name: 'Business & Sales',
    email: 'business@yourcompany.com',
    description: 'Quotes, proposals & business partnerships',
    icon: Briefcase,
    color: '#FF6B6B',
    purpose: 'Commercial inquiries'
  },
  {
    id: 3,
    name: 'Technical Support',
    email: 'support@yourcompany.com',
    description: 'Technical issues & maintenance requests',
    icon: Code,
    color: '#4ECDC4',
    purpose: 'Existing project support'
  },
  {
    id: 4,
    name: 'Customer Service',
    email: 'service@yourcompany.com',
    description: 'Customer support & service inquiries',
    icon: Headphones,
    color: '#FFE66D',
    purpose: 'Post-delivery assistance'
  }
];

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const handleEmailClick = (email: string, name: string) => {
    // Track email click
    trackEmailClick(name);
    
    const subject = encodeURIComponent(`Inquiry from Portfolio Website - ${name}`);
    const body = encodeURIComponent(`Hi there!\n\nI'm reaching out via your ${name} email from your portfolio website.\n\nI'd like to discuss:\n\n[Please describe your inquiry here]\n\nBest regards,\n[Your name]`);
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
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
                <Mail className="w-6 h-6 text-[#64FFDA] mr-3" />
                <h3 className="text-xl font-semibold text-white">Choose Email</h3>
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
              Select the most appropriate email for your inquiry. Each address is monitored by specialists for faster response times.
            </p>

            {/* Email Options */}
            <div className="space-y-3">
              {emailAddresses.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.button
                    key={contact.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleEmailClick(contact.email, contact.name)}
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
                            {contact.purpose}
                          </span>
                        </div>
                        <p className="text-sm text-[#A0AEC0] mb-2">
                          {contact.description}
                        </p>
                        <p className="text-xs text-[#64FFDA] font-mono">
                          {contact.email}
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
                📧 <strong className="text-[#64FFDA]">Tip:</strong> Your email client will open with a pre-filled professional template
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;