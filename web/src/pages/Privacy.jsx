import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileCheck, HelpCircle, Mail, Phone, MapPin, Eye, Server, ChevronRight } from 'lucide-react';
import { COMPANY_PROFILE } from '../constants/data';

const sections = [
  {
    id: 'info-we-collect',
    number: '1',
    title: 'Information We Collect',
    content: (
      <div className="space-y-4">
        <p>Depending on how you interact with our Website and supply chain services, we may collect the following information:</p>
        
        <div>
          <h4 className="font-serif font-bold text-navy-900 text-base mb-2">Information You Provide Directly</h4>
          <p className="mb-2">This may include:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>Full name and contact person details;</li>
            <li>Email address and telephone / mobile numbers;</li>
            <li>Pickup, destination, and billing postal addresses (including pincodes);</li>
            <li>Company / business name and GSTIN information;</li>
            <li>Consignment details (AWB, Order ID, LRN, package weight, dimensions, and declared value);</li>
            <li>Information submitted through contact, tracking, or rate enquiry forms;</li>
            <li>Information provided when booking a freight, warehousing, or corporate gifting service;</li>
            <li>Information included in messages or communications sent to our customer care.</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500 italic">We only request information that is reasonably necessary for fulfilling shipments and providing logistics services.</p>
        </div>

        <div className="pt-2">
          <h4 className="font-serif font-bold text-navy-900 text-base mb-2">Information Collected Automatically</h4>
          <p className="mb-2">When you access our Website, certain technical information may be collected automatically, such as:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
            <li>IP address and internet service provider (ISP);</li>
            <li>Browser type and version;</li>
            <li>Device type and operating system;</li>
            <li>Pages visited and navigation paths;</li>
            <li>Referring website or campaign source;</li>
            <li>Approximate location data (city/region);</li>
            <li>Date and time of access and session duration.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'how-we-collect',
    number: '2',
    title: 'How We Collect Information',
    content: (
      <div className="space-y-3">
        <p>We collect information when you:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Visit or browse our Website;</li>
          <li>Submit a contact, quote, or business enquiry form;</li>
          <li>Track a consignment using our online tracking tools (AWB / LRN / Mobile);</li>
          <li>Book or schedule a freight, courier, or warehousing pickup;</li>
          <li>Contact us by email, phone, WhatsApp, or customer care channels;</li>
          <li>Subscribe to service alerts or operational updates;</li>
          <li>Interact with Website features or request corporate gifting catalogues;</li>
          <li>Otherwise voluntarily provide information to us.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'how-we-use-info',
    number: '3',
    title: 'How We Use Your Information',
    content: (
      <div className="space-y-3">
        <p>We use collected information to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Respond to inquiries and generate shipping quotations;</li>
          <li>Provide requested multimodal freight, air express, surface delivery, PTL/FTL, and warehousing services;</li>
          <li>Process consignments, generate Air Waybills (AWBs), and facilitate milestone tracking;</li>
          <li>Schedule pickups, milk runs, line-haul dispatches, and doorstep deliveries;</li>
          <li>Process invoices, commercial billing, and payments where applicable;</li>
          <li>Provide live consignment customer support and status notifications;</li>
          <li>Improve our digital platform, tracking reliability, and logistics operational efficiency;</li>
          <li>Maintain Website security, prevent fraud, and verify consignment credentials;</li>
          <li>Comply with regulatory authorities, tax compliance (E-way bills, GST), and transport laws;</li>
          <li>Send operational service updates and milestone notifications.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'cookies',
    number: '4',
    title: 'Cookies and Similar Technologies',
    content: (
      <div className="space-y-3">
        <p>
          Our Website may use cookies and similar technologies to improve functionality, understand website usage, remember preferences, or support analytics and other features.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li><strong>Essential cookies:</strong> Required for core website operations, form submissions, and secure navigation.</li>
          <li><strong>Analytics cookies:</strong> Used to understand visitor behavior, page views, and optimize user experience.</li>
          <li><strong>Preference cookies:</strong> Used to remember your selected inputs, filters, or tracking preferences.</li>
          <li><strong>Marketing cookies:</strong> Used where applicable to measure the effectiveness of our commercial campaigns.</li>
        </ul>
        <p>
          You may control or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality or consignment query responsiveness.
        </p>
      </div>
    )
  },
  {
    id: 'analytics',
    number: '5',
    title: 'Analytics',
    content: (
      <div className="space-y-3">
        <p>
          We may use analytics services (such as Google Analytics and server performance metrics) to understand how visitors interact with our digital platform.
        </p>
        <p>
          These services collect aggregated information about your device, browser, referring pages, session duration, and feature interactions. This data helps us improve loading speeds, tracking precision, and overall platform navigation.
        </p>
      </div>
    )
  },
  {
    id: 'third-party-services',
    number: '6',
    title: 'Third-Party Services',
    content: (
      <div className="space-y-3">
        <p>Our digital operations and logistics workflows integrate with trusted third-party service providers, including:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li><strong>Web3Forms:</strong> Secure third-party form processing and email routing service used to transmit customer inquiries submitted via our contact forms;</li>
          <li>Commercial freight carriers, airlines, and partner delivery networks;</li>
          <li>Payment gateways and banking partners;</li>
          <li>Map, postal pincode verification, and geolocation services;</li>
          <li>SMS, WhatsApp, and email tracking dispatch gateways;</li>
          <li>Cloud hosting, CDN, and cybersecurity providers;</li>
          <li>Enterprise customer relationship and logistics management systems.</li>
        </ul>
        <p>
          These third parties process information in accordance with their respective privacy policies and security standards.
        </p>
      </div>
    )
  },
  {
    id: 'how-we-share',
    number: '7',
    title: 'How We Share Information',
    content: (
      <div className="space-y-3">
        <p>
          <strong>We do not sell personal information to third parties.</strong>
        </p>
        <p>We may share information with delivery partners, line-haul transporters, form processing providers (such as Web3Forms), communication gateways, professional advisers, or regulatory authorities where reasonably necessary to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Transmit and respond to inquiries or quote requests submitted through our contact forms;</li>
          <li>Fulfill parcel pickup, transit, customs/checkpoint clearance, and doorstep delivery;</li>
          <li>Operate and secure the Website and consignment tracking databases;</li>
          <li>Process payments and corporate invoicing;</li>
          <li>Send automated milestone tracking notifications;</li>
          <li>Comply with Indian transport laws, GST/E-way bill regulations, or court orders;</li>
          <li>Protect the legal rights, safety, and security of GlobalShip Logistics and our clients.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'data-security',
    number: '8',
    title: 'Data Security',
    content: (
      <div className="space-y-3">
        <p>
          We implement appropriate technical and organizational safeguards (including SSL/HTTPS encryption, access controls, secure cloud architecture, and regular security reviews) to protect your personal and consignment data against unauthorized access, loss, misuse, or alteration.
        </p>
        <p className="text-slate-600 text-xs sm:text-sm">
          While we maintain rigorous industry-standard security protocols, no internet transmission or digital database can be guaranteed to be 100% impenetrable.
        </p>
      </div>
    )
  },
  {
    id: 'data-retention',
    number: '9',
    title: 'Data Retention',
    content: (
      <div className="space-y-3">
        <p>
          We retain personal and shipment information only for as long as reasonably necessary to fulfill the purposes outlined in this Privacy Policy—including providing freight services, maintaining manifest and AWB records, resolving claims or disputes, and complying with statutory tax and accounting retention requirements under Indian law.
        </p>
      </div>
    )
  },
  {
    id: 'your-rights',
    number: '10',
    title: 'Your Rights and Choices',
    content: (
      <div className="space-y-3">
        <p>Depending on applicable Indian laws, you may exercise rights regarding your personal information, including:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
          <li>Requesting access to the personal data we hold about you;</li>
          <li>Requesting correction or updating of inaccurate contact or address details;</li>
          <li>Requesting deletion of non-essential records where legally permitted;</li>
          <li>Withdrawing consent for optional marketing communications;</li>
          <li>Raising inquiries or concerns regarding how your data is handled.</li>
        </ul>
        <p>To exercise any of these rights, please contact us using the information provided in the Contact section.</p>
      </div>
    )
  },
  {
    id: 'marketing-communications',
    number: '11',
    title: 'Marketing Communications',
    content: (
      <div className="space-y-3">
        <p>
          Where applicable, we may periodically send service announcements, corporate gifting updates, or logistics industry insights.
        </p>
        <p>
          You may opt out of receiving promotional communications at any time by following the unsubscribe instructions in the email or by contacting our team directly. Essential transactional and milestone tracking messages regarding active shipments will continue to be sent.
        </p>
      </div>
    )
  },
  {
    id: 'childrens-privacy',
    number: '12',
    title: "Children's Privacy",
    content: (
      <div className="space-y-3">
        <p>
          Our Website and commercial logistics services are intended for business enterprises and individuals aged <strong>18 and above</strong>. We do not knowingly collect personal information from minors. If you believe that a minor has provided us with personal information, please contact us for prompt removal.
        </p>
      </div>
    )
  },
  {
    id: 'external-links',
    number: '13',
    title: 'External Links',
    content: (
      <div className="space-y-3">
        <p>
          Our Website may contain links to external websites (e.g., social media platforms, carrier tracking gateways, or partner resources). We are not responsible for the privacy practices, content, or security of external websites. We encourage you to review their privacy policies when visiting them.
        </p>
      </div>
    )
  },
  {
    id: 'international-transfers',
    number: '14',
    title: 'International Data Transfers',
    content: (
      <div className="space-y-3">
        <p>
          Where international logistics forwarding, overseas air freight coordination, or globally distributed cloud hosting infrastructure is utilized, consignment data may be processed across secure international systems in compliance with applicable cross-border data transfer laws and standard contractual clauses.
        </p>
      </div>
    )
  },
  {
    id: 'changes-to-policy',
    number: '15',
    title: 'Changes to This Privacy Policy',
    content: (
      <div className="space-y-3">
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our logistics offerings, operational technologies, or legal requirements.
        </p>
        <p>
          Any revisions will be published on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
        </p>
      </div>
    )
  },
  {
    id: 'contact-us',
    number: '16',
    title: 'Contact Us',
    content: (
      <div className="space-y-3">
        <p>If you have questions, concerns, or requests relating to this Privacy Policy or your data, please reach out to us:</p>
        <div className="p-4 bg-surface-50 border border-gold-400/30 rounded-xl space-y-2 text-sm">
          <p className="font-serif font-bold text-navy-900 text-base">{COMPANY_PROFILE.name}</p>
          <p className="text-slate-600">{COMPANY_PROFILE.address}</p>
          <p>
            <span className="font-semibold text-navy-900">Privacy & Support Email:</span>{' '}
            <a href={`mailto:${COMPANY_PROFILE.email}`} className="text-gold-600 hover:underline">{COMPANY_PROFILE.email}</a>
          </p>
          <p>
            <span className="font-semibold text-navy-900">Phone Assistance:</span>{' '}
            <a href="tel:+919137024187" className="text-gold-600 hover:underline">{COMPANY_PROFILE.phones[0]}</a> /{' '}
            <a href="tel:+919833889455" className="text-gold-600 hover:underline">{COMPANY_PROFILE.phones[1]}</a>
          </p>
          <p>
            <span className="font-semibold text-navy-900">Website:</span>{' '}
            <a href="https://globalshiplogistics.in" className="text-gold-600 hover:underline">https://globalshiplogistics.in</a>
          </p>
        </div>
      </div>
    )
  }
];

const Privacy = () => {
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
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-xs sm:text-sm font-serif font-semibold tracking-wider text-gold-300 uppercase">
                Privacy & Data Protection
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-gold-400 mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="font-sans text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              How GlobalShip Logistics collects, safeguards, and processes consignment, corporate, and user information.
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
                <Lock className="w-5 h-5 text-gold-500" />
                Policy Sections
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
                <p className="text-xs text-slate-500 mb-3">Questions about how we handle your shipment data?</p>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center text-xs font-serif font-bold text-white bg-navy-900 hover:bg-navy-800 py-2.5 px-4 rounded-xl transition-colors border border-gold-500/40"
                >
                  Contact Privacy Officer
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-6">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                At <strong>GlobalShip Logistics</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to protecting your personal, business, and cargo shipment information.
              </p>
              <div className="mt-4 p-4 bg-emerald-50/70 border-l-4 border-emerald-500 rounded-r-xl text-slate-800 text-sm">
                This Privacy Policy explains how we collect, use, store, disclose, and protect information when you visit or use <a href="https://globalshiplogistics.in" className="text-navy-900 font-semibold hover:underline">https://globalshiplogistics.in</a> (&quot;Website&quot;) or interact with our multi-modal freight services.
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
                Review Our Service Agreements
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
                Understand how our operating policies, cargo schedules, and terms apply to your supply chain.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/terms"
                  className="bg-gold-500 hover:bg-gold-600 text-navy-950 font-serif font-bold text-sm py-2.5 px-6 rounded-xl transition-all shadow"
                >
                  View Terms &amp; Conditions
                </Link>
                <Link
                  to="/contact"
                  className="bg-navy-800 hover:bg-navy-700 text-white font-serif font-semibold text-sm py-2.5 px-6 rounded-xl transition-all border border-slate-600"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </main>
        </div>
      </section>
    </motion.div>
  );
};

export default Privacy;
