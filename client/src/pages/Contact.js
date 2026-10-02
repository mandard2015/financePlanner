import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const serviceOptions = [
  'Financial Planning',
  'Life Insurance / LIC',
  'Health Insurance / Mediclaim',
  'General Insurance',
  'Mutual Funds / Investments',
  'General Enquiry',
];

const serviceMap = {
  'life-insurance': 'Life Insurance / LIC',
  'health-insurance': 'Health Insurance / Mediclaim',
  'general-insurance': 'General Insurance',
  'mutual-funds': 'Mutual Funds / Investments',
  'financial-planning': 'Financial Planning',
};

const initialForm = {
  fullName: '',
  mobile: '',
  email: '',
  service: 'General Enquiry',
  message: '',
  website: '',
};

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const queryService = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const raw = params.get('service');
    return raw ? serviceMap[raw] || raw : 'General Enquiry';
  }, [location.search]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: queryService || prev.service }));
  }, [queryService]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!formData.fullName.trim()) nextErrors.fullName = 'Full name is required.';
    if (!formData.mobile.trim()) {
      nextErrors.mobile = 'Mobile number is required.';
    } else if (!/^(\+91|91)?[6-9]\d{9}$/.test(formData.mobile.replace(/\s+/g, ''))) {
      nextErrors.mobile = 'Please enter a valid Indian mobile number.';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.service) nextErrors.service = 'Please select a service.';
    if (formData.website) nextErrors.website = 'Unexpected value detected.';
    return nextErrors;
  };

  const trackEvent = (eventName, extra = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...extra,
        page_location: window.location.pathname,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitState('error');
      setStatusMessage('Please fix the highlighted fields and try again.');
      trackEvent('contact_form_error', { service: formData.service || 'general' });
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');
    setStatusMessage('');
    trackEvent('contact_form_start', { service: formData.service || 'general' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          mobile: formData.mobile.trim(),
          email: formData.email.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || 'Unable to send your enquiry right now.');
      }

      setSubmitState('success');
      setStatusMessage('Your enquiry has been sent successfully. We will get back to you soon.');
      setFormData({ ...initialForm, service: formData.service || 'General Enquiry' });
      trackEvent('contact_form_success', { service: formData.service || 'general' });
    } catch (error) {
      setSubmitState('error');
      setStatusMessage(error.message || 'Something went wrong while sending your enquiry. Please try again later.');
      trackEvent('contact_form_error', { service: formData.service || 'general' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="section-label">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Discuss Your Requirements</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Connect with Anand Deshmukh for guidance around insurance, financial planning and investment conversations.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
              <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200" placeholder="Enter your full name" aria-invalid={Boolean(errors.fullName)} />
              {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="mobile" className="mb-2 block text-sm font-semibold text-slate-700">Mobile Number *</label>
              <input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200" placeholder="e.g. 9876543210" aria-invalid={Boolean(errors.mobile)} />
              {errors.mobile && <p className="mt-2 text-sm text-red-600">{errors.mobile}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200" placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-700">Service / Area of Interest *</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200" aria-invalid={Boolean(errors.service)}>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-200" placeholder="Tell us about your requirement or the kind of guidance you are looking for." />
            </div>

            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50 p-4 text-sm leading-6 text-slate-700">
            By submitting this form, you agree that the information you provide may be used to respond to your enquiry and arrange a consultation.
          </div>

          {statusMessage && (
            <div className={`mt-6 rounded-xl border px-4 py-3 text-sm ${submitState === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-700'}`}>
              {statusMessage}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="submit" disabled={isSubmitting} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
            <a href="https://wa.me/9011094170?text=Hello%20Anand%2C%20I%20want%20to%20discuss%20my%20financial%20and%20insurance%20needs." onClick={() => trackEvent('whatsapp_click', { source: 'contact_form' })} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Prefer WhatsApp?
            </a>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">Direct Contact</h2>
            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <a href="tel:8698405919" onClick={() => trackEvent('phone_click', { source: 'contact_page' })} className="flex items-center gap-3 hover:text-brand-700"><span className="font-semibold">Phone:</span> +91-8698405919</a>
              <a href="tel:9011094170" onClick={() => trackEvent('phone_click', { source: 'contact_page' })} className="flex items-center gap-3 hover:text-brand-700"><span className="font-semibold">Phone:</span> 9011094170</a>
              <a href="mailto:licanand1@gmail.com" onClick={() => trackEvent('email_click', { source: 'contact_page' })} className="flex items-center gap-3 hover:text-brand-700"><span className="font-semibold">Email:</span> licanand1@gmail.com</a>
              <p className="flex items-center gap-3"><span className="font-semibold">Location:</span> Pimpri, Pune - 411017</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Need help choosing the right conversation?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              You can discuss protection, health cover, general insurance, investment planning or a broader financial goal with Anand.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-700">
              <Link to="/services" className="block font-medium text-brand-700 hover:text-brand-800">Explore services</Link>
              <Link to="/about" className="block font-medium text-brand-700 hover:text-brand-800">About Anand</Link>
              <Link to="/privacy-policy" className="block font-medium text-brand-700 hover:text-brand-800">Privacy Policy</Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
