export const IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000',
  domesticTruck: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
  internationalCargo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
  railTrain: '/rail_cargo.jpg',
  warehouse: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
  faqSupport: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200',
  gifting: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=1200',
  airplaneServicesHero: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1200',
  trackingHeroBg: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000',
  helpDelivery: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=800',
  helpSupport: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  helpTrackingMobile: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
  helpGlobalNetwork: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
};

export const COMPANY_PROFILE = {
  name: 'GlobalShip Logistics',
  tagline: 'Procure | Collate | Pack | Ship',
  address: 'Shop No 25, B wing, Harias Dream Park, Near Indian Bank, Hatkesh Udyog Nagar',
  phones: ['+91 91370 24187', '+91 98338 89455'],
  phone: '+91 91370 24187',
  email: 'globalshiplogistics96@gmail.com',
  vision: 'Our Vision is to be the achievers of reliability in our services and be the epitome of success for our clients and to be recognized as a disruptive platform for supply chain service provider.',
  mission: 'Our Mission is to make each service a great experience with our technology and pool of people who are in sync with our organization.',
  values: 'Procedures, values and attitudes are crucial to our reputation – not to mention the success we enjoy.',
  whoWeAre: 'We are a network of distributors, manufacturers, and logistics partners providing a one-stop solution for all your corporate gifting, packaging, and supply chain needs.',
  stats: [
    { label: 'Surface Delivery Network', value: '19,000+', suffix: 'Pincodes' },
    { label: 'Air Express Milk Run (Day 1)', value: '2,000+', suffix: 'Pincodes' },
    { label: 'Air Express Milk Run (Day 2)', value: '3,000+', suffix: 'Pincodes' },
    { label: 'Trusted Enterprise Clients', value: '100+', suffix: 'Companies' },
  ]
};

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  {
    name: 'Services',
    path: '/services',
    dropdown: [
      { name: 'Domestic Logistics', path: '/services#domestic' },
      { name: 'International Logistics', path: '/services#international' },
      { name: 'PTL & FTL', path: '/services#ptl-ftl' },
      { name: 'Rail Logistics', path: '/services#rail' },
      { name: 'Warehousing', path: '/services#warehousing' },
    ]
  },
  { name: 'Track Shipment', path: '/track' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

export const SOLUTIONS = [
  {
    title: 'B2B & B2C Logistics',
    description: 'We provide daily logistics support for your B2B cargo as well as your B2C e-commerce shipments, with our multi-modal shipping options tailored to your schedule.',
  },
  {
    title: 'Corporate Gifting & Packaging',
    description: 'We handle everything from procuring gifts and managing inventory to custom packaging and shipping, providing a unique and personalized brand experience.',
  },
  {
    title: 'End-to-End Supply Chain',
    description: 'A robust network of distributors, manufacturers, and logistics partners providing a one-stop solution from start to finish to streamline your business movement.',
  },
];

export const SERVICES_PREVIEW = [
  {
    id: 'domestic',
    title: 'Domestic Logistics',
    description: 'Standard Premium ground-based delivery serving over 19,000 pincodes with day-definite, pincode-specific reliability.',
    path: '/services#domestic',
    image: IMAGES.domesticTruck,
  },
  {
    id: 'international',
    title: 'International Logistics',
    description: 'Domestic air freight express with day-definite next day (2,000+ pincodes) and second day (3,000+ pincodes) delivery.',
    path: '/services#international',
    image: IMAGES.internationalCargo,
  },
  {
    id: 'ptl-ftl',
    title: 'PTL & FTL',
    description: 'Flexible transportation solutions for both part-load and full-truck cargo requirements across regional and national corridors.',
    path: '/services#ptl-ftl',
    isGraphic: true,
  },
  {
    id: 'rail',
    title: 'Rail Logistics',
    description: 'High capacity, cost-effective rail-based logistics solutions connecting industrial corridors across India.',
    path: '/services#rail',
    image: IMAGES.railTrain,
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    description: 'Safe storage, collation, and inventory management solutions to streamline your entire supply chain lifecycle.',
    path: '/services#warehousing',
    image: IMAGES.warehouse,
  },
];

export const TRUSTED_PARTNERS = [
  'Xtreme Media Private Limited',
  'Vijay Sales',
  'Actis Technologies Pvt. Ltd.',
  'Hamazz Lifesciences LLC',
  'Chiron Instruments (I) Pvt Ltd.',
  'Hydro BS India Private Limited',
  'Innovcare Lifesciences Pvt Ltd',
  'Donear Industries Limited',
  'Yarman Coffee Pvt. Ltd',
  'Pantaloons',
  'VIP Industries',
  'NDT Systems & Solution',
  'Shailja Luxusprodukt Pvt. Ltd',
  'SVK Electronics',
  'Triton Technologies',
  'Tyman International',
  'Brand Barrel - Bajaj Finance',
  'Serturner Lab Pvt Ltd',
  'Hetero Healthcare'
];

export const FAQ_DATA = [
  {
    question: 'What is your courier rate?',
    answer: 'Our rates depend on the parcel weight, destination, and service requirement. We provide competitive rates and can suggest the most suitable courier option based on your requirement.',
  },
  {
    question: 'How long will my parcel take to reach?',
    answer: 'Delivery time depends on the destination and service selected. Before booking, we can provide you with the expected delivery timeline.',
  },
  {
    question: 'Which courier company will you use?',
    answer: 'We have access to multiple courier services, so we can select the most suitable option based on the destination, delivery requirement, and rate.',
  },
  {
    question: 'Can I track my shipment?',
    answer: 'Yes. Once your shipment is booked, you will receive the tracking/AWB number. You can use it to track your shipment status until delivery.',
  },
  {
    question: 'What if my parcel is delayed or damaged?',
    answer: 'In case of any issue, our team will coordinate with the courier company and assist you with the resolution or claim process as per the applicable courier terms and conditions.',
  },
  {
    question: 'What is 3PL logistics and how does GlobalShip manage supply chains?',
    answer: 'Third-Party Logistics (3PL) involves outsourcing transportation, warehousing, collation, and distribution. GlobalShip Logistics acts as a full-service 3PL and multi-modal supply chain provider across 19,000+ surface pincodes and day-definite air express routes.',
  },
  {
    question: 'How does GlobalShip Logistics align with India’s National Logistics Policy?',
    answer: 'We support the National Logistics Policy goals of reducing logistics costs and improving operational efficiency by providing integrated multi-modal freight (surface, air, rail, PTL/FTL) with single-window accountability and real-time milestone tracking.',
  },
];

export const SERVICES_DETAILED = [
  {
    id: 'domestic',
    title: 'Domestic Logistics',
    subtitle: 'Standard Premium Ground Solution Serving Over 19,000 Pincodes',
    description: 'Our Standard Premium service is the perfect choice when you need a balance of speed and affordability. This ground-based solution delivers your business-to-business (B2B) shipments with no fuss, offering day-definite, pincode-specific delivery with real-time tracking. Partnering with multiple logistics providers allows us to provide competitive rates, faster delivery times, and more flexibility.',
    features: ['19,000+ Pincodes Network', 'Day-Definite Ground Delivery', 'Competitive B2B Commercial Rates', 'Pincode-Specific Real-Time Tracking'],
    image: IMAGES.domesticTruck,
    icon: 'truck',
    layout: 'image-left'
  },
  {
    id: 'international',
    title: 'International Logistics',
    subtitle: 'Express Domestic Air Freight with Day-Definite Speed',
    description: 'Our domestic air freight express services provide day-definite delivery, giving your business the predictability and speed needed to compete globally. We offer Next Day Delivery (Milk Run) to over 2,000 pincodes and Second Day Delivery (Milk Run) to over 3,000 pincodes using state-of-the-art infrastructure and live milestone tracking.',
    features: ['Next Day Delivery (2,000+ Pincodes)', 'Second Day Delivery (3,000+ Pincodes)', 'High Priority Air Freight', 'Real-Time Flight & Waybill Tracking'],
    image: IMAGES.internationalCargo,
    icon: 'plane',
    layout: 'image-right'
  },
  {
    id: 'ptl-ftl',
    title: 'PTL & FTL',
    subtitle: 'Flexible Capacity for Part-Load and Full-Truck Consignments',
    description: 'Whether you require dedicated full-truck capacity (FTL) for bulk shipments or economical part-truckload (PTL) consolidation, our extensive fleet network ensures direct routing, scheduled dispatches, and careful freight handling across key commercial highways.',
    features: ['Dedicated Full Truckload (FTL)', 'Cost-Optimized Part Truckload (PTL)', 'Pan-India Highway Reach', 'GPS Tracking & Safe Consignment Loading'],
    isGraphic: true,
    icon: 'truck',
    layout: 'image-left'
  },
  {
    id: 'rail',
    title: 'Rail Logistics',
    subtitle: 'High Capacity Intermodal Connectivity Across Industrial Corridors',
    description: 'Rail logistics offers a sustainable, cost-effective, and high-capacity alternative for moving heavy cargo and large volumes across India’s core industrial corridors. Integrated with first-mile and last-mile trucking for seamless doorstep delivery.',
    features: ['Connecting Industrial Corridors', 'High Volume & Bulk Freight', 'Eco-Friendly Cost Efficiency', 'Seamless Rail-to-Road Multi-Modal Transfer'],
    image: IMAGES.railTrain,
    icon: 'train',
    layout: 'image-right'
  },
  {
    id: 'warehousing',
    title: 'Warehousing',
    subtitle: 'Safe Storage, Collation & Streamlined Inventory Management',
    description: 'Modern warehousing solutions designed to safeguard your goods, manage inventory buffers, and accelerate order fulfillment. We provide secure storage, collation, kitting, and multi-channel dispatch services tailored to your supply chain requirements.',
    features: ['Secure Storage & Inventory Control', 'Procure, Collate & Kitting Facilities', 'Pincode-Specific Dispatches', 'Climate & Modern Racking Options'],
    image: IMAGES.warehouse,
    icon: 'warehouse',
    layout: 'image-left'
  },
];

export const HANDCRAFTED_WARES = [
  { title: 'Hand Painted Bookmarks', description: 'Artisanal customized bookmarks for corporate stationery and gifts.' },
  { title: 'Hand Painted Tea Coasters', description: 'Handcrafted durable aesthetic coasters tailored to corporate brand themes.' },
  { title: 'Welcome Kit Goodies', description: 'Custom branded goodies designed to delight new joiners and guests.' },
  { title: 'Hand Painted Quote Frames', description: 'Inspirational framed art pieces for employee desks and partner appreciation.' },
];
