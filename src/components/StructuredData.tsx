'use client';

import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Buildrix",
    "alternateName": "Buildrix Development Team",
    "description": "Expert full-stack development team crafting digital experiences with React, Next.js, WordPress, and modern web technologies.",
    "url": "https://buildrix.co",
    "logo": "https://buildrix.co/images/logo.png",
    "image": "https://buildrix.co/images/buildrix-site.png",
    "email": "buildrix@gmail.com",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Global"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1234567890",
      "contactType": "customer service",
      "email": "buildrix@gmail.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://linkedin.com/company/buildrix",
      "https://github.com/buildrix",
      "https://twitter.com/buildrix"
    ],
    "serviceType": [
      "Web Development",
      "Full Stack Development",
      "React Development",
      "Next.js Development",
      "WordPress Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Development"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Buildrix",
    "url": "https://buildrix.co",
    "description": "Premium web development and digital solutions by expert full-stack development team",
    "publisher": {
      "@type": "Organization",
      "name": "Buildrix"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://buildrix.co/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Buildrix Web Development Services",
    "description": "Professional web development services including React, Next.js, WordPress, and full-stack solutions",
    "provider": {
      "@type": "Organization",
      "name": "Buildrix"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development",
    "offers": {
      "@type": "Offer",
      "description": "Custom web development solutions",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
};

export default StructuredData;