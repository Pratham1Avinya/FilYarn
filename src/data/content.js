import { productsData as allProductsData } from './products';

export const productsData = allProductsData;


export const manufacturingSteps = [
  {
    step: "01",
    title: "Raw Material Selection",
    desc: "Sourcing premium-grade polyester staple fibers with consistent length, denier, and strength characteristics.",
    image: "/images/manufacturing/raw-material.jpg"
  },
  {
    step: "02",
    title: "Fibre Preparation",
    desc: "Opening, blending, and carding the raw fibers to align them parallelly, forming a continuous web or sliver.",
    image: "/images/manufacturing/fibre-preparation.jpg"
  },
  {
    step: "03",
    title: "Spinning",
    desc: "Drawing and twisting the slivers on ring frames or rotor systems to create single yarn with target thickness.",
    image: "/images/manufacturing/spinning.jpg"
  },
  {
    step: "04",
    title: "Yarn Formation",
    desc: "Doubling and twisting multiple strands together to achieve the required ply, ply balance, and tensile properties.",
    image: "/images/manufacturing/yarn-formation.jpg"
  },
  {
    step: "05",
    title: "Winding",
    desc: "Clearing imperfections electronically and winding the yarn onto cones or cheeses suitable for subsequent processing.",
    image: "/images/manufacturing/winding.jpg"
  },
  {
    step: "06",
    title: "Dyeing & Finishing",
    desc: "Treating and dyeing the yarn package under high pressure and temperature to ensure brilliant, even colors.",
    image: "/images/manufacturing/dyeing-finishing.jpg"
  },
  {
    step: "07",
    title: "Quality Inspection",
    desc: "Testing yarn count, twist per inch (TPI), strength, colorfastness, and hairiness against strict standards.",
    image: "/images/manufacturing/quality-control.jpg"
  },
  {
    step: "08",
    title: "Packing & Dispatch",
    desc: "Carefully packing finished yarn cones in carton boxes or bags to prevent contamination and damage during transit.",
    image: "/images/manufacturing/packing-dispatch.jpg"
  }
];

export const valuesData = {
  mission: "To provide quality yarn solutions at competitive prices while building long-term relationships with customers through dependable products, responsive service and reliable supply.",
  vision: "To become a trusted yarn partner for textile and garment businesses by continuously improving product quality, service, technology and market reach.",
  coreValues: [
    { number: "01", title: "Quality Excellence", desc: "Upholding strict product quality benchmarks in every batch." },
    { number: "02", title: "Customer Satisfaction", desc: "Prioritizing client requirements with prompt, personalized service." },
    { number: "03", title: "Integrity", desc: "Maintaining transparency and honesty in all our B2B interactions." },
    { number: "04", title: "Innovation", desc: "Adopting modern techniques to improve manufacturing and processing." },
    { number: "05", title: "Reliable Supply", desc: "Ensuring consistent, on-time bulk deliveries across domestic markets." },
    { number: "06", title: "Continuous Improvement", desc: "Consistently refining our processes, skills, and logistics." },
    { number: "07", title: "Responsible Business", desc: "Operating with ecological responsibility and ethical employment standards." }
  ]
};

export const roadmapTimeline = [
  {
    year: "2017",
    title: "GST Registration",
    desc: "Business formally registered for GST operations, beginning local trading channels and customer sourcing operations in Surat, Gujarat."
  },
  {
    year: "Growth Phase",
    title: "Expanding Yarn Portfolio",
    desc: "Expanded product offerings across polyester yarn and sewing thread categories to fulfill growing industrial clothing requirements."
  },
  {
    year: "Today",
    title: "Serving Textile Customers",
    desc: "Continuing to develop dependable yarn sourcing, manufacturing, and customer service capabilities. Integrated under active Pvt. Ltd. status in 2024."
  },
  {
    year: "Future",
    title: "Growing With Our Customers",
    desc: "Focused on broader product availability, stronger supply capability, and long-term customer partnerships throughout Indian yarn distribution channels."
  }
];

export const mediaCategories = ["All", "Premises", "Activities", "Facility", "Events"];

export const mediaGalleryItems = [
  { id: 1, category: "Premises", title: "Registered Corporate Office", image: "/images/media-gallery/office-facade.jpg" },
  { id: 2, category: "Facility", title: "Yarn Packaging Hub", image: "/images/media-gallery/warehouse.jpg" },
  { id: 3, category: "Activities", title: "Yarn Quality Verification", image: "/images/media-gallery/quality-assurance.jpg" },
  { id: 4, category: "Facility", title: "Spinning Frame Section", image: "/images/media-gallery/spinning-floor.jpg" },
  { id: 5, category: "Events", title: "B2B Buyer Conference", image: "/images/media-gallery/buyer-meeting.jpg" },
  { id: 6, category: "Activities", title: "Administrative Operations Desk", image: "/images/media-gallery/admin-operations.jpg" }
];
