'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Compass,
  Gauge,
  Mail,
  MessageCircle,
  Play,
  ShieldCheck,
  UserCog,
} from 'lucide-react';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/motion';
import { contactFormSchema, type ContactFormValues } from '@/lib/contact-schema';
import { studioContact } from '@/data/site-contact';

const OFFICE_IMAGE =
  'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1400';

const trustCards = [
  {
    title: 'Design First',
    icon: Compass,
  },
  {
    title: 'Precision Engineering',
    icon: UserCog,
  },
  {
    title: 'Agile Delivery',
    icon: Gauge,
  },
  {
    title: 'Proven Reliability',
    icon: ShieldCheck,
  },
] as const;

export default function ContactPageContent() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle',
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { fullName: '', email: '', scope: '' },
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

  const fieldShell =
    'mt-2 w-full rounded-md border border-buildrix-steel/20 bg-buildrix-base/80 px-4 py-3 text-sm text-buildrix-ivory placeholder:text-buildrix-steel/45 transition-buildrix focus:border-buildrix-clay/60 focus:outline-none focus:ring-1 focus:ring-buildrix-clay/35';

  return (
    <div className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left — copy, channels, office */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <h1 className="text-3xl font-bold tracking-[-0.03em] text-buildrix-ivory sm:text-4xl lg:text-[2.5rem] lg:leading-[1.12]">
                Tell us what you want to build.
              </h1>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="max-w-lg text-base leading-relaxed text-buildrix-steel sm:text-lg">
                Our studio specializes in high-precision development and architectural
                software design. Let&apos;s discuss your next project.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-4">
              <a
                href={`mailto:${studioContact.email}`}
                className="group flex items-center gap-4 rounded-lg border border-buildrix-steel/15 bg-buildrix-surface/50 p-4 transition-buildrix hover:border-buildrix-clay/35 hover:bg-buildrix-surface"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-buildrix-clay/25 bg-buildrix-base/80 text-buildrix-clay transition-buildrix group-hover:border-buildrix-clay/50">
                  <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 text-left">
                  <span className="text-metadata block text-buildrix-steel">Email Us</span>
                  <span className="mt-1 block truncate text-sm font-medium text-buildrix-ivory transition-buildrix group-hover:text-buildrix-clay">
                    {studioContact.email}
                  </span>
                </span>
              </a>
              <a
                href={studioContact.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-buildrix-steel/15 bg-buildrix-surface/50 p-4 transition-buildrix hover:border-buildrix-clay/35 hover:bg-buildrix-surface"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-buildrix-clay/25 bg-buildrix-base/80 text-buildrix-clay transition-buildrix group-hover:border-buildrix-clay/50">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 text-left">
                  <span className="text-metadata block text-buildrix-steel">WhatsApp</span>
                  <span className="mt-1 block text-sm font-medium text-buildrix-ivory transition-buildrix group-hover:text-buildrix-clay">
                    {studioContact.whatsAppDisplay}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={0.14} className="flex flex-col gap-4">
              <p className="text-metadata text-buildrix-steel">Office location</p>
              <div className="relative aspect-[21/10] w-full overflow-hidden rounded-xl border border-buildrix-steel/15">
                <Image
                  src={OFFICE_IMAGE}
                  alt="City skyline at night"
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-buildrix-base/70 to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
          </div>

          {/* Right — form card */}
          <Reveal delay={0.08} y={28}>
            <div className="rounded-lg border border-buildrix-steel/15 border-l-[3px] border-l-buildrix-clay bg-buildrix-surface/90 p-6 shadow-buildrix-panel sm:p-8 lg:p-10">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
                <div>
                  <label htmlFor="contact-fullName" className="text-metadata text-buildrix-steel">
                    Full name
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    className={fieldShell}
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-400/90" role="alert">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-metadata text-buildrix-steel">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    className={fieldShell}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400/90" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-scope" className="text-metadata text-buildrix-steel">
                    Project details
                  </label>
                  <textarea
                    id="contact-scope"
                    rows={5}
                    placeholder="Tell us about the project requirements, timeline, and goals..."
                    className={`${fieldShell} min-h-[140px] resize-y`}
                    {...register('scope')}
                  />
                  {errors.scope && (
                    <p className="mt-2 text-sm text-red-400/90" role="alert">
                      {errors.scope.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-buildrix-clay px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      'Sending…'
                    ) : (
                      <>
                        Send inquiry
                        <Play className="h-4 w-4 fill-current" aria-hidden />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-buildrix-steel">
                    Typical response time: Within 24 business hours.
                  </p>
                  {status === 'success' && (
                    <p className="text-center text-sm text-buildrix-steel" role="status">
                      Message received. We&apos;ll be in touch shortly.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-center text-sm text-red-400/90" role="alert">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Feature strip */}
        <motion.ul
          className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-5"
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
          variants={staggerContainer(0.1, 0.08)}
        >
          {trustCards.map(({ title, icon: Icon }) => (
            <motion.li key={title} variants={fadeUpItem}>
              <div className="flex h-full flex-col rounded-lg border border-buildrix-steel/15 bg-buildrix-surface/70 p-6 shadow-buildrix-subtle transition-buildrix hover:border-buildrix-clay/25">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-buildrix-clay/30 text-buildrix-clay">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <p className="mt-4 text-sm font-semibold tracking-[-0.01em] text-buildrix-ivory">
                  {title}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
