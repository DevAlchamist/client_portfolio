'use client';

import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: '#1A1C26',
          color: '#ffffff',
          border: '1px solid #2A2D3A',
          borderRadius: '12px',
          padding: '16px',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          style: {
            background: '#1A1C26',
            color: '#64FFDA',
            border: '1px solid #64FFDA',
          },
          iconTheme: {
            primary: '#64FFDA',
            secondary: '#1A1C26',
          },
        },
        error: {
          style: {
            background: '#1A1C26',
            color: '#FF6B6B',
            border: '1px solid #FF6B6B',
          },
          iconTheme: {
            primary: '#FF6B6B',
            secondary: '#1A1C26',
          },
        },
        loading: {
          style: {
            background: '#1A1C26',
            color: '#A0AEC0',
            border: '1px solid #2A2D3A',
          },
          iconTheme: {
            primary: '#64FFDA',
            secondary: '#1A1C26',
          },
        },
      }}
    />
  );
};

export default ToastProvider;