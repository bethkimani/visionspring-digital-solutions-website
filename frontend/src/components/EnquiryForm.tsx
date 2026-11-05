"use client";
import React, { useId } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlertIcon, CircleCheckIcon, InfoIcon, LoaderCircleIcon, MailIcon, SendIcon } from 'lucide-react';
import { services } from '../data/services';
import { formatEnquiry, serviceLabel, useEnquiryForm, type EnquiryValues } from '../hooks/useEnquiryForm';
import { buttonClasses } from '../utils/buttonStyles';
import { mailtoLink, whatsappLink } from '../utils/whatsapp';
import { WhatsAppIcon } from './WhatsAppIcon';

interface EnquiryFormProps {
  defaultService?: string;
  packageName?: string;
}

const inputBase =
  'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy-800 placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4';

export function EnquiryForm({ defaultService = '', packageName }: EnquiryFormProps) {
  const idPrefix = useId().replace(/:/g, '');
  const { values, errors, status, setField, handleSubmit, setStatus } = useEnquiryForm(defaultService, packageName);

  const fieldClass = (field: keyof EnquiryValues) =>
    `${inputBase} ${
      errors[field]
        ? 'border-red-500 focus:border-red-500 focus:ring-red-100'
        : 'border-line focus:border-ocean focus:ring-sky-soft'
    }`;

  const describedBy = (field: keyof EnquiryValues) =>
    errors[field] ? `${idPrefix}-${field}-error` : undefined;

  const label = (field: keyof EnquiryValues, text: string, required = false) => (
    <label htmlFor={`${idPrefix}-${field}`} className="text-sm font-semibold text-navy-800">
      {text}
      {required ? <span className="text-red-600"> *</span> : <span className="font-normal text-muted"> (optional)</span>}
    </label>
  );

  const error = (field: keyof EnquiryValues) =>
    errors[field] ? (
      <p id={`${idPrefix}-${field}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
        <CircleAlertIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {errors[field]}
      </p>
    ) : null;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="rounded-3xl border border-growth/30 bg-growth-soft p-8 text-center"
        role="status"
      >
        <CircleCheckIcon className="mx-auto h-12 w-12 text-growth-dark" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-extrabold text-navy-800">Enquiry Received</h3>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Thank you — your enquiry has been sent to our team. We’ll call or message you promptly with tailored recommendations.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className={buttonClasses('outline', 'md', 'mt-6')}
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  const enquiryText = formatEnquiry(values, packageName);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-describedby={`${idPrefix}-required-note`}>
      <p id={`${idPrefix}-required-note`} className="text-sm text-muted">
        Fields marked <span className="text-red-600">*</span> are required.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('fullName', 'Full name', true)}
          <input
            id={`${idPrefix}-fullName`}
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => setField('fullName', e.target.value)}
            className={fieldClass('fullName')}
            aria-invalid={!!errors.fullName}
            aria-describedby={describedBy('fullName')}
            placeholder="e.g. Jane Wanjiku"
          />
          {error('fullName')}
        </div>

        <div>
          {label('phone', 'Phone number', true)}
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField('phone', e.target.value)}
            className={fieldClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            placeholder="e.g. +254 712 345 678"
          />
          {error('phone')}
        </div>

        <div>
          {label('email', 'Email address', true)}
          <input
            id={`${idPrefix}-email`}
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField('email', e.target.value)}
            className={fieldClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={describedBy('email')}
            placeholder="name@business.com"
          />
          {error('email')}
        </div>

        <div>
          {label('organization', 'Business or organization')}
          <input
            id={`${idPrefix}-organization`}
            type="text"
            autoComplete="organization"
            value={values.organization}
            onChange={(e) => setField('organization', e.target.value)}
            className={fieldClass('organization')}
            placeholder="Your business name"
          />
        </div>
      </div>

      <div>
        {label('service', 'Service required', true)}
        <select
          id={`${idPrefix}-service`}
          value={values.service}
          onChange={(e) => setField('service', e.target.value)}
          className={fieldClass('service')}
          aria-invalid={!!errors.service}
          aria-describedby={describedBy('service')}
        >
          <option value="">Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="not-sure">Not sure yet — I need advice</option>
        </select>
        {error('service')}
      </div>

      <div>
        {label('description', 'Project description', true)}
        <textarea
          id={`${idPrefix}-description`}
          rows={5}
          value={values.description}
          onChange={(e) => setField('description', e.target.value)}
          className={`${fieldClass('description')} resize-y`}
          aria-invalid={!!errors.description}
          aria-describedby={describedBy('description')}
          placeholder="What would you like to achieve? Tell us about your goals, timelines, or current website/app."
        />
        {error('description')}
      </div>

      <AnimatePresence>
        {status === 'not-configured' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-sky/30 bg-sky-soft p-5"
            role="alert"
          >
            <p className="flex items-start gap-2 text-sm font-semibold text-navy-800">
              <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-ocean" aria-hidden="true" />
              Online form delivery isn’t connected yet, so your enquiry has not been sent.
            </p>
            <p className="mt-1 pl-6 text-sm text-muted">
              Send the details you entered directly — they’re already filled in for you.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 pl-6">
              <a
                href={whatsappLink(enquiryText)}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses('whatsapp', 'sm')}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Send via WhatsApp
              </a>
              <a
                href={mailtoLink(`Project enquiry: ${serviceLabel(values.service)}`, enquiryText)}
                className={buttonClasses('outline', 'sm')}
              >
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                Send via email
              </a>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-2xl border border-red-200 bg-red-50 p-5"
            role="alert"
          >
            <p className="flex items-start gap-2 text-sm font-semibold text-red-700">
              <CircleAlertIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              We couldn’t send your enquiry. Please try again, or reach us on WhatsApp.
            </p>
            <a
              href={whatsappLink(enquiryText)}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses('whatsapp', 'sm', 'ml-6 mt-3')}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Send via WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={buttonClasses('primary', 'lg', 'sm:min-w-[220px]')}
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <SendIcon className="h-4 w-4" aria-hidden="true" />
              Send Project Enquiry
            </>
          )}
        </button>

        <a
          href={whatsappLink(
            values.service && values.service !== 'not-sure'
              ? services.find((s) => s.slug === values.service)?.whatsappMessage
              : undefined
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses('outline', 'lg')}
        >
          <WhatsAppIcon className="h-4 w-4 text-growth-dark" />
          Chat With Us on WhatsApp
        </a>
      </div>
    </form>
  );
}
