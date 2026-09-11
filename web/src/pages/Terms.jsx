import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Building2, HelpCircle, Mail, Phone, MapPin, Scale, ChevronRight } from 'lucide-react';
import { COMPANY_PROFILE } from '../constants/data';

const sections = [
  {
    id: 'about-us',
    number: '1',
    title: 'About Us',
    content: (
      <div className="space-y-3">
        <p>
          <strong>Business Name:</strong> {COMPANY_PROFILE.name}<br />
          <strong>Registered/Business Address:</strong> {COMPANY_PROFILE.address}<br />
          <strong>Email:</strong> <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-gold-600 hover:underline">{COMPANY_PROFILE.email}</a><br />
          <strong>Phone:</strong> {COMPANY_PROFILE.phones.join(' / ')}<br />
          <strong>Website:</strong> <a href="https://globalshiplogistics.in" className="text-gold-600 hover:underline">https://globalshiplogistics.in</a>
        </p>
      </div>
    )
  },
  {
    id: 'use-of-website',
    number: '2',
    title: 'Use of the Website',
    content: (
      <div className="space-y-3">
        <p>You agree to use the Website only for lawful purposes and in a manner that does not:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Violate any applicable law or regulation;</li>
          <li>Infringe the rights of another person or organization;</li>
          <li>Attempt to gain unauthorized access to the Website or its systems;</li>
          <li>Introduce malicious software, viruses, or harmful code;</li>
          <li>Interfere with the operation or security of the Website;</li>
          <li>Misuse any forms, communication systems, consignment tracking tools, or other features provided by the Website.</li>
        </ul>
        <p>We reserve the right to restrict or terminate access to the Website where we reasonably believe these Terms have been violated.</p>
      </div>
    )
  },
  {
    id: 'services-info',
    number: '3',
    title: 'Services and Information',
    content: (
      <div className="space-y-3">
        <p>
          GlobalShip Logistics provides multi-modal freight forwarding, pan-India domestic surface logistics (covering 19,000+ pincodes), day-definite express air cargo, PTL & FTL commercial transportation, rail logistics, warehousing & inventory management, corporate gifting & customized packaging, and real-time consignment tracking services.
        </p>
        <p>
          Information displayed on the Website is provided for general informational purposes. While we make reasonable efforts to keep information accurate and up to date, we do not guarantee that all information will always be complete, accurate, current, or error-free.
        </p>
        <p>
          Specific service terms, shipping tariffs, delivery timelines, weight slabs, cargo insurance, warranties, and other conditions may be separately agreed upon in service contracts, consignor notes, or Air Waybills (AWB) between the business and the customer.
        </p>
      </div>
    )
  },
  {
    id: 'pricing-payments',
    number: '4',
    title: 'Pricing and Payments',
    content: (
      <div className="space-y-3">
        <p>
          Where applicable, freight rates, quotations, and estimates provided or displayed through the Website are exclusive of applicable taxes (GST), fuel surcharges, state entry levies, or special handling charges unless explicitly stated otherwise.
        </p>
        <p>Payment terms may vary depending on the service or contract agreement.</p>
        <p>Where applicable:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Payments must be made through the authorized payment methods made available by us.</li>
          <li>Additional charges may apply for demurrage, re-attempts, address corrections, or remote area deliveries where clearly communicated.</li>
          <li>Taxes, fuel surcharges, insurance, or carrier fees may be charged separately.</li>
          <li>A pickup or consignment booking request is subject to operational confirmation and verification by us.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'cancellation-refunds',
    number: '5',
    title: 'Cancellation, Refunds and Returns',
    content: (
      <div className="space-y-3">
        <p>Our cancellation, refund, and return policies are governed by the specific logistics agreement and courier terms communicated at the time of booking:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Consignment cancellation requests must be made prior to shipment pickup or dispatch from origin.</li>
          <li>Refunds for eligible cancellations or billing adjustments will be processed via original payment methods or corporate credit notes within standard processing timelines.</li>
          <li>Claims regarding delayed, damaged, or lost cargo are subject to proof of value, timely notification, and carrier terms & conditions.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'intellectual-property',
    number: '6',
    title: 'Intellectual Property',
    content: (
      <div className="space-y-3">
        <p>Unless otherwise stated, all content available on this Website, including but not limited to:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-2">
          {['Text', 'Logos', 'Branding', 'Graphics', 'Images', 'Videos', 'Illustrations', 'Website design', 'Software & Layout'].map((item) => (
            <div key={item} className="flex items-center text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mr-2 flex-shrink-0"></span>
              {item}
            </div>
          ))}
        </div>
        <p>is owned by or licensed to GlobalShip Logistics and is protected by applicable intellectual property laws.</p>
        <p>You may not reproduce, copy, modify, distribute, publish, sell, or commercially exploit Website content without prior written permission, except where permitted by law.</p>
      </div>
    )
  },
  {
    id: 'user-submitted-info',
    number: '7',
    title: 'User-Submitted Information',
    content: (
      <div className="space-y-3">
        <p>If you submit information, reviews, feedback, enquiries, freight quote requests, tracking queries, shipping documents, or other material through the Website (including forms powered by Web3Forms or communication tools), you represent that:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>The information provided is accurate to the best of your knowledge;</li>
          <li>You have the right to provide such information;</li>
          <li>The material does not violate applicable law or the rights of another person.</li>
        </ul>
        <p>
          You grant GlobalShip Logistics permission to use submitted information where reasonably necessary to provide the requested service, respond to enquiries, verify shipments, or operate the Website, subject to our Privacy Policy and applicable law.
        </p>
      </div>
    )
  },
  {
    id: 'third-party-services',
    number: '8',
    title: 'Third-Party Services and Links',
    content: (
      <div className="space-y-3">
        <p>
          The Website may contain links to or integrations with third-party websites, form routing services (such as Web3Forms), partner carrier networks, payment gateways, map providers, analytics tools, or social media platforms.
        </p>
        <p>
          We do not control third-party services and are not responsible for their content, availability, security, policies, or practices. Your use of third-party services may be subject to their own terms and privacy policies.
        </p>
      </div>
    )
  },
  {
    id: 'disclaimer',
    number: '9',
    title: 'Disclaimer',
    content: (
      <div className="space-y-3">
        <p>To the extent permitted by applicable law, the Website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis.</p>
        <p>We do not guarantee that:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>The Website will always be available or uninterrupted;</li>
          <li>The Website will be free from errors;</li>
          <li>Tracking information will always be completely real-time or instantaneous;</li>
          <li>The Website will be free from viruses or other harmful components.</li>
        </ul>
        <p>Nothing in these Terms excludes any rights or protections that cannot legally be excluded under Indian law.</p>
      </div>
    )
  },
  {
    id: 'limitation-of-liability',
    number: '10',
    title: 'Limitation of Liability',
    content: (
      <div className="space-y-3">
        <p>
          To the maximum extent permitted by applicable law, GlobalShip Logistics shall not be liable for indirect, incidental, special, consequential, or unforeseeable losses arising from or relating to your use of the Website.
        </p>
        <p>
          Where the law permits limitation of liability, our liability shall be limited to the extent permitted under applicable law and, where relevant, the amount paid by the customer for the particular service giving rise to the claim.
        </p>
      </div>
    )
  },
  {
    id: 'indemnification',
    number: '11',
    title: 'Indemnification',
    content: (
      <div className="space-y-3">
        <p>To the extent permitted by applicable law, you agree to indemnify and hold harmless GlobalShip Logistics, its owners, employees, representatives, contractors, and service providers from claims, losses, liabilities, damages, or expenses arising from:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Your violation of these Terms;</li>
          <li>Your unlawful use of the Website;</li>
          <li>Your infringement of another person&apos;s rights;</li>
          <li>Information or material submitted by you.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'privacy',
    number: '12',
    title: 'Privacy',
    content: (
      <div className="space-y-3">
        <p>Your use of the Website may involve the collection and processing of personal and consignment information.</p>
        <p>
          Please refer to our <Link to="/privacy" className="text-gold-600 font-semibold hover:underline">Privacy Policy</Link> for information about how we collect, use, store, and protect personal information.
        </p>
      </div>
    )
  },
  {
    id: 'website-availability',
    number: '13',
    title: 'Website Availability and Changes',
    content: (
      <div className="space-y-3">
        <p>We reserve the right to modify, suspend, discontinue, or update any part of the Website, including its content, services, features, or functionality, at any time.</p>
        <p>We may also update these Terms from time to time. The updated version will be published on this page with a revised &quot;Last Updated&quot; date.</p>
      </div>
    )
  },
  {
    id: 'termination',
    number: '14',
    title: 'Termination',
    content: (
      <div className="space-y-3">
        <p>We may restrict or terminate your access to the Website where permitted by law, including where you violate these Terms or misuse the Website.</p>
        <p>Provisions that are intended to survive termination, including intellectual property, disclaimers, limitations of liability, and applicable dispute provisions, shall continue to apply where legally enforceable.</p>
      </div>
    )
  },
  {
    id: 'governing-law',
    number: '15',
    title: 'Governing Law and Jurisdiction',
    content: (
      <div className="space-y-3">
        <p>These Terms shall be governed by the laws applicable in India.</p>
        <p>
          Subject to any mandatory legal requirements, disputes arising from or relating to these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Thane / Mumbai, Maharashtra, India</strong>.
        </p>
      </div>
    )
  },
  {
    id: 'severability',
    number: '16',
    title: 'Severability',
    content: (
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to remain in effect to the extent permitted by law.
      </p>
    )
  },
  {
    id: 'contact-us',
    number: '17',
    title: 'Contact Us',
    content: (
      <div className="space-y-3">
        <p>If you have questions regarding these Terms, please contact us:</p>
        <div className="p-4 bg-surface-50 border border-gold-400/30 rounded-xl space-y-2 text-sm">
          <p className="font-serif font-bold text-navy-900 text-base">{COMPANY_PROFILE.name}</p>
          <p className="text-slate-600">{COMPANY_PROFILE.address}</p>
          <p>
            <span className="font-semibold text-navy-900">Email:</span>{' '}
            <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-gold-600 hover:underline">{COMPANY_PROFILE.email}</a>
          </p>
          <p>
            <span className="font-semibold text-navy-900">Phone:</span>{' '}
            <a href="tel:+919137024187" className="text-gold-600 hover:underline">{COMPANY_PROFILE.phones[0]}</a> /{' '}
            <a href="tel:+919833889455" className="text-gold-600 hover:underline">{COMPANY_PROFILE.phones[1]}</a>
          </p>
        </div>
      </div>
    )
  }
];

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-50 min-h-screen"
    >
      {/* 1. Header Banner */}
      <section className="relative bg-[#081935] text-white py-14 sm:py-20 md:py-24 overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-navy-900/90 border border-gold-500/60 px-3.5 py-1 rounded-full mb-4 sm:mb-6">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs sm:text-sm font-serif font-semibold tracking-wider text-gold-300 uppercase">
                Legal & Compliance
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-4 sm:mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="font-sans text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              Operating rules, shipping policies, and service standards governing your use of GlobalShip Logistics services and digital platforms.
            </p>
            <p className="text-xs sm:text-sm text-gold-400/90 mt-4 font-mono">
              Last Updated: 11 September 2026
            </p>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <div className="w-96 h-96 rounded-full border-[20px] border-gold-400"></div>
        </div>
      </section>

      {/* 2. Main Content Layout */}
      <section className="py-12 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sticky Sidebar Index */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-24 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-navy-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-500" />
                Table of Contents
              </h3>
              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-sm">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-600 hover:text-gold-600 hover:bg-surface-50 transition-colors group"
                  >
                    <span className="truncate">
                      <span className="font-semibold text-slate-400 mr-1.5 group-hover:text-gold-500">{sec.number}.</span>
                      {sec.title}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-gold-500" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 mb-3">Have questions about our service agreements?</p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center text-xs font-serif font-bold text-white bg-navy-900 hover:bg-navy-800 py-2.5 px-4 rounded-xl transition-colors border border-gold-500/40"
                >
                  Contact Legal Support
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-6">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Welcome to <strong>GlobalShip Logistics</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of <a href="https://globalshiplogistics.in" className="text-gold-600 font-medium hover:underline">https://globalshiplogistics.in</a> (&quot;Website&quot;) and any services, products, content, or features made available through the Website.
              </p>
              <div className="mt-4 p-4 bg-amber-50/70 border-l-4 border-gold-500 rounded-r-xl text-slate-800 text-sm">
                By accessing or using this Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.
              </div>
            </div>

            {sections.map((sec) => (
              <div
                key={sec.id}
                id={sec.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm scroll-mt-28 transition-all hover:border-slate-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-8 h-8 rounded-full bg-navy-900 text-gold-400 font-serif font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {sec.number}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-900">
                    {sec.title}
                  </h2>
                </div>
                <div className="pl-0 sm:pl-12 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {sec.content}
                </div>
              </div>
            ))}

            <div className="bg-navy-900 text-white rounded-2xl p-6 sm:p-8 border border-gold-500/40 shadow-lg text-center mt-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-400 mb-2">
                Need Clarification on Any Clause?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                Our support and operations team is available to help clarify transport documentation, consignments, and corporate agreements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-serif font-bold text-sm py-2.5 px-6 rounded-xl transition-all shadow"
                >
                  Contact Support
                </Link>
                <Link
                  to="/privacy"
                  className="bg-navy-800 hover:bg-navy-700 text-white font-serif font-semibold text-sm py-2.5 px-6 rounded-xl transition-all border border-slate-600"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;
