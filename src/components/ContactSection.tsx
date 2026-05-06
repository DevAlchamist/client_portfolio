'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SECTION, fadeUpItem } from '@/components/motion';
import { contactFormSchema, type ContactFormValues } from '@/lib/contact-schema';

export default function ContactSection() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );

  const headerVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : DURATION_SECTION,
        ease: EASE_BUILDRIX,
      },
    },
  };

  const formList = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      scope: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          message: data.scope,
        }),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full border-0 border-b border-buildrix-steel/35 bg-transparent pb-3 text-buildrix-ivory placeholder:text-buildrix-steel/45 transition-buildrix focus:border-buildrix-clay focus:outline-none focus:ring-0';

  return (
    <section
      id="contact"
      className="scroll-mt-[4.5rem] border-t border-buildrix-steel/10 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.header
            className="max-w-lg lg:pt-2"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-3xl">
              Initiate a Build.
            </h2>
            <p className="mt-6 leading-relaxed text-buildrix-steel">
              For inquiries regarding architectural consultations or new projects,
              please submit your brief below.
            </p>
          </motion.header>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl lg:justify-self-end"
            noValidate
            variants={formList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="space-y-12">
              <motion.div variants={fadeUpItem}>
                <label
                  htmlFor="fullName"
                  className="text-metadata text-buildrix-clay"
                >
                  Full name
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  className={`${inputClass} mt-4`}
                  {...register('fullName')}
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400/90" role="alert">
                    {errors.fullName.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <label
                  htmlFor="email"
                  className="text-metadata text-buildrix-clay"
                >
                  Professional email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email@address.com"
                  className={`${inputClass} mt-4`}
                  {...register('email')}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400/90" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={fadeUpItem}>
                <label
                  htmlFor="scope"
                  className="text-metadata text-buildrix-clay"
                >
                  Project scope
                </label>
                <textarea
                  id="scope"
                  rows={4}
                  placeholder="Briefly describe the architectural needs of your project..."
                  className={`${inputClass} mt-4 resize-y`}
                  {...register('scope')}
                />
                {errors.scope && (
                  <p className="mt-2 text-sm text-red-400/90" role="alert">
                    {errors.scope.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="flex flex-col gap-4 pt-2" variants={fadeUpItem}>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex w-fit items-center justify-center rounded-sm bg-buildrix-clay px-10 py-4 text-xs font-bold uppercase tracking-[0.12em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' ? 'Sending…' : 'Submit brief'}
                </button>

                {status === 'success' && (
                  <p className="text-sm text-buildrix-steel" role="status">
                    Brief received. We&apos;ll respond shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400/90" role="alert">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
