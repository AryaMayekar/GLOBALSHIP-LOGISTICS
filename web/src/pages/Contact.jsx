import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Headphones, PackageSearch, ShieldAlert, Sparkles } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { COMPANY_PROFILE } from '../constants/data';

const QUERY_CATEGORIES = [
  {
    id: 'tracking',
    label: 'Tracking & Delivery Status',
    description: 'Get updates on your shipment location and delivery progress.',
    icon: PackageSearch,
  },
  {
    id: 'booking',
    label: 'Booking & Freight Inquiry',
    description: 'Discuss shipment bookings, freight options, and delivery requirements.',
    icon: Headphones,
  },
  {
    id: 'gifting',
    label: 'Corporate Gifting & Custom Packaging',
    description: 'Explore tailored gifting solutions and packaging for your business.',
    icon: Sparkles,
  },
  {
    id: 'complaint',
    label: 'Issue Resolution & Claims',
    description: 'Report shipment concerns and get support with claims or resolutions.',
    icon: ShieldAlert,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    shipmentId: '',
    company: '',
    subject: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (value) => {
    if (!value) {
      return 'Phone number is required.';
    }

    if (!isValidPhoneNumber(value)) {
      return 'Phone number is not valid for the selected country.';
    }

    return '';
  };

  const validateField = (field, value) => {
    const trimmedValue = value.trim();

    if (['fullName', 'email', 'subject', 'message'].includes(field) && !trimmedValue) {
      return `${field === 'fullName' ? 'Full name' : field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
    }

    if (field === 'fullName' && !/^[a-zA-Z\s.'-]+$/.test(trimmedValue)) {
      return 'Full name can contain letters, spaces, apostrophes, and hyphens only.';
    }

    if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return 'Email address is not valid.';
    }

    if (field === 'subject' && trimmedValue.length < 3) {
      return 'Subject must be at least 3 characters.';
    }

    if (field === 'message' && trimmedValue.length < 10) {
      return 'Message must be at least 10 characters.';
    }

    if (field === 'shipmentId' && trimmedValue && !/^[a-zA-Z0-9-]+$/.test(trimmedValue)) {
      return 'Shipment ID can contain letters, numbers, and hyphens only.';
    }

    return '';
  };

  const updateField = (field, value) => {
    setFormData((currentData) => ({ ...currentData, [field]: value }));
    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [field]: validateField(field, value),
    }));
  };

  const requiredFields = ['fullName', 'email', 'subject', 'message'];
  const hasMissingRequiredField = requiredFields.some((field) => !formData[field].trim())
    || !formData.phone;
  const hasFormErrors = Boolean(phoneError)
    || hasMissingRequiredField
    || Object.values(fieldErrors).some(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validatePhone(formData.phone);
    const nextFieldErrors = Object.fromEntries(
      Object.entries(formData).map(([field, value]) => [field, validateField(field, value)])
    );

    setPhoneError(validationError);
    setFieldErrors(nextFieldErrors);

    if (validationError || Object.values(nextFieldErrors).some(Boolean)) {
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        shipmentId: '',
        company: '',
        subject: '',
        message: ''
      });
      setPhoneError('');
      setFieldErrors({});
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen"
    >
      {/* Top Section Title & Quick Support Channels */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-surface-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-10 text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 leading-tight">
              Customer Care &amp; <br />
              <span className="relative inline-block pb-1.5">
                Support
                <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
              </span>
            </h1>
            <p className="text-slate-600 font-sans text-sm sm:text-base md:text-lg mt-2 sm:mt-3 max-w-2xl">
              These are the types of inquiries our team handles with care. Fill in the request form below and our customer support desk will assist you promptly.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {QUERY_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-left border border-[#081935] flex flex-col justify-between bg-[#081935] text-white"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0 rounded-lg sm:rounded-xl flex items-center justify-center bg-gold-400 text-navy-950">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold leading-snug text-gold-400">
                      {cat.label}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs leading-relaxed hidden sm:block text-slate-200">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Main Form & Contact Info Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* Left Column: Inquiry / Customer Care Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-50 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                    How Can We Help?
                  </h2>
                  <p className="text-slate-600 text-sm font-sans">
                    Please provide your details and query below. Our support team will get back to you promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                    <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-3" />
                    <h3 className="font-serif text-2xl font-bold text-green-950">Query Registered!</h3>
                    <p className="text-green-800 text-sm mt-2 leading-relaxed">
                      Thank you for contacting GlobalShip Logistics. A support representative will review your message and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    
                    {/* Row 1: Full Name & Mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-serif">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors ${
                            fieldErrors.fullName ? 'border-red-500 focus:border-red-600' : 'border-slate-200 focus:border-gold-500'
                          }`}
                        />
                        {fieldErrors.fullName && <p className="mt-2 text-sm font-semibold text-red-600" role="alert">{fieldErrors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-serif">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <div className={`rounded-xl bg-white border-2 focus-within:border-gold-500 transition-colors ${
                          phoneError ? 'border-red-500' : 'border-slate-200'
                        }`}>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            withCountryCallingCode
                            countryCallingCodeEditable={false}
                            value={formData.phone || undefined}
                            onChange={(nextPhone) => {
                              setFormData({ ...formData, phone: nextPhone || '' });
                              setPhoneError(nextPhone ? validatePhone(nextPhone) : '');
                            }}
                            aria-invalid={Boolean(phoneError)}
                            aria-describedby={phoneError ? 'contact-phone-error' : undefined}
                            className="contact-phone-input min-h-[48px]"
                          />
                        </div>
                        {phoneError && (
                          <p
                            id="contact-phone-error"
                            role="alert"
                            className="mt-2 text-sm font-semibold text-red-600"
                          >
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Shipment ID / Order ID (Not Required) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-serif">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="email@company.com"
                          className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors ${
                            fieldErrors.email ? 'border-red-500 focus:border-red-600' : 'border-slate-200 focus:border-gold-500'
                          }`}
                        />
                        {fieldErrors.email && <p className="mt-2 text-sm font-semibold text-red-600" role="alert">{fieldErrors.email}</p>}
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-serif">
                            Shipment ID / Order ID
                          </label>
                          <span className="text-[11px] text-slate-400 italic">Optional</span>
                        </div>
                        <input
                          type="text"
                          value={formData.shipmentId}
                          onChange={(e) => updateField('shipmentId', e.target.value)}
                          placeholder="e.g. GSL-982341 or AWB No."
                          className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors placeholder:text-slate-400 ${
                            fieldErrors.shipmentId ? 'border-red-500 focus:border-red-600' : 'border-slate-200 focus:border-gold-500'
                          }`}
                        />
                        {fieldErrors.shipmentId && <p className="mt-2 text-sm font-semibold text-red-600" role="alert">{fieldErrors.shipmentId}</p>}
                      </div>
                    </div>

                    {/* Row 3: Company Name (Optional) & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 font-serif">
                            Company / Organization
                          </label>
                          <span className="text-[11px] text-slate-400 italic">Optional</span>
                        </div>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => updateField('company', e.target.value)}
                          placeholder="Company Name"
                          className="w-full bg-white border-2 border-slate-200 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-serif">
                          Subject / Topic <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => updateField('subject', e.target.value)}
                          placeholder="Brief topic of inquiry"
                          className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors ${
                            fieldErrors.subject ? 'border-red-500 focus:border-red-600' : 'border-slate-200 focus:border-gold-500'
                          }`}
                        />
                        {fieldErrors.subject && <p className="mt-2 text-sm font-semibold text-red-600" role="alert">{fieldErrors.subject}</p>}
                      </div>
                    </div>

                    {/* Row 4: Detailed Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-serif">
                        Detailed Message / Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Please elaborate your query, origin/destination pincodes, parcel details, or specific requirements..."
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3 text-sm text-navy-900 focus:outline-none transition-colors ${
                          fieldErrors.message ? 'border-red-500 focus:border-red-600' : 'border-slate-200 focus:border-gold-500'
                        }`}
                      ></textarea>
                      {fieldErrors.message && <p className="mt-2 text-sm font-semibold text-red-600" role="alert">{fieldErrors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={hasFormErrors}
                      className="site-button w-full bg-gold-400 hover:bg-gold-500 active:scale-[0.98] text-navy-950 font-serif font-bold text-base py-4 px-5 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-row flex-nowrap items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:hover:bg-slate-300 disabled:hover:translate-y-0"
                    >
                      <span className="whitespace-nowrap">Submit Request</span>
                      <Send size={18} className="shrink-0" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Verified Office Location & Contact Matrix */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                  <span className="relative inline-block pb-1.5">
                    Contact & Support
                    <span className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gold-500 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-slate-600 font-sans mt-3 text-sm">
                  Visit our head office or contact our logistics customer assistance desk.
                </p>
              </div>

              <div className="bg-surface-50 p-8 rounded-3xl border border-slate-200 space-y-6 shadow-sm">
                {/* Office Address */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#081935] flex items-center justify-center text-gold-400 flex-shrink-0 shadow">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">Head Office</h3>
                    <p className="text-slate-700 font-sans text-sm mt-1 leading-relaxed">
                      {COMPANY_PROFILE.address}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-[#081935] flex items-center justify-center text-gold-400 flex-shrink-0 shadow">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">Support Working Hours</h3>
                    <p className="text-slate-700 font-sans text-sm mt-1 font-semibold">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">24x7 Milestone Tracking Available Online</p>
                  </div>
                </div>

                {/* Phone Assistance */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-[#081935] flex items-center justify-center text-gold-400 flex-shrink-0 shadow">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">Phone</h3>
                    <div className="space-y-0.5 mt-1 font-sans text-sm text-slate-700">
                      <p>
                        <a href="tel:+919137024187" className="hover:text-gold-600 font-semibold transition-colors">
                          +91 91370 24187
                        </a>
                      </p>
                      <p>
                        <a href="tel:+919833889455" className="hover:text-gold-600 font-semibold transition-colors">
                          +91 98338 89455
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Email Support */}
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/80">
                  <div className="w-12 h-12 rounded-xl bg-[#081935] flex items-center justify-center text-gold-400 flex-shrink-0 shadow">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-navy-900">Email</h3>
                    <p className="text-slate-700 font-sans text-sm mt-1 font-medium">
                      <a href="mailto:globalshiplogistics96@gmail.com" className="hover:text-gold-600 hover:underline">
                        globalshiplogistics96@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Expected turnaround time: within 24 hours</p>
                  </div>
                </div>
              </div>

              
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
