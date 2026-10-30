import { useEffect, useRef, useState } from 'react'
import SafeImage from './components/SafeImage'

// Main WhatsApp & Calling number: 9301193030 (Amber Tamrakar / Durga Patra Emporium)
// Secondary contact: 9827571414 (Sachin Tamrakar)
const whatsappNumber = "919301193030"
const primaryPhone = "9301193030"
const secondaryPhone = "9827571414"
const googleMapsSearchUrl = "https://www.google.com/maps/search/?api=1&query=Durga+Patra+Emporium+In+front+of+Indore+Sev+Bhandar+Main+Road+Adhartal+Jabalpur"
const googleBusinessUrl = "https://www.google.com/search?q=Durga+Patra+Emporium+Adhartal+Jabalpur"

const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Durga%20Patra%20Emporium%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.`
const whatsappShraddha = `https://wa.me/919301193030?text=Hello%20Shraddha%20Metals%2C%20I%20want%20to%20know%20more%20about%20Modware%20collection.`

const heroSlides = [
  {
    image: "/images/hero-campaign.jpg",
    title: "Everything Your Kitchen Needs.",
    sub: "Explore quality kitchenware, pooja bartan & home appliances from trusted brands.",
    kicker: "EST. 1982 • ADHARTAL, JABALPUR"
  },
  {
    image: "/images/hero-cookware.jpg",
    title: "Built for Everyday Cooking.",
    sub: "Stainless steel and triply cookware crafted for Indian kitchens.",
    kicker: "AUTHORISED MODWARE DISTRIBUTOR"
  },
  {
    image: "/images/hero-dinnerware.jpg",
    title: "Serve with Pride. Cook with Joy.",
    sub: "Premium dinner sets, marriage bartan & essentials for modern homes.",
    kicker: "TRUSTED BRANDS • 42+ YEARS OF EXCELLENCE"
  }
]

const services = [
  {
    title: "Kitchenware & Cookware",
    desc: "Stainless steel, triply & hard-anodised essentials.",
    image: "/images/cat-cookware.jpg"
  },
  {
    title: "Branded Household Products",
    desc: "Prestige, Milton, Hawkins, Sujata & more — in one place.",
    image: "/images/cat-appliances.jpg"
  },
  {
    title: "Brass Murtis & Pooja Utensils",
    desc: "Sacred brass idols, diyas, pooja thalis & spiritual items.",
    image: "/images/cat-pooja.jpg"
  },
  {
    title: "Marriage & Dahej Utensils",
    desc: "Complete wedding kitchen combos, dahej sets & gifting.",
    image: "/images/cat-marriage.jpg"
  }
]

interface BrandItem {
  name: string
  logo: string
  subtitle: string
  heightClass: string
}

const brands: BrandItem[] = [
  {
    name: "Modware",
    logo: "/images/modware-logo.png",
    subtitle: "Authorised Distributor",
    heightClass: "h-8 md:h-10"
  },
  {
    name: "Prestige",
    logo: "/images/prestige-logo.svg",
    subtitle: "Cookware & Appliances",
    heightClass: "h-9 md:h-11"
  },
  {
    name: "Sujata",
    logo: "/images/sujata-logo.svg",
    subtitle: "Mixers & Juicers",
    heightClass: "h-8 md:h-10"
  },
  {
    name: "Bajaj",
    logo: "/images/bajaj-logo.svg",
    subtitle: "Kitchen Appliances",
    heightClass: "h-7 md:h-9"
  },
  {
    name: "Milton",
    logo: "/images/milton-logo.png",
    subtitle: "Homeware & Thermoware",
    heightClass: "h-9 md:h-11"
  },
  {
    name: "Hawkins",
    logo: "/images/hawkins-logo.svg",
    subtitle: "Pressure Cookers",
    heightClass: "h-9 md:h-11"
  },
  {
    name: "Cello",
    logo: "/images/cello-brand-logo.png",
    subtitle: "Kitchen & Tableware",
    heightClass: "h-8 md:h-10"
  }
]

interface CategoryItem {
  name: string
  tagline: string
  image: string
  query: string
  contain?: boolean
}

const categories: CategoryItem[] = [
  {
    name: "Cookware",
    tagline: "Pots, pans & triply sets",
    image: "/images/cat-cookware.jpg",
    query: "Cookware"
  },
  {
    name: "Pressure Cookers",
    tagline: "Hawkins, Prestige & classic cookers",
    image: "/images/cat-pressure-cooker.jpg",
    query: "Pressure Cookers"
  },
  {
    name: "Brass Murtis & All Pooja Utensils",
    tagline: "Sacred brass idols, diyas, kalash & pooja thalis",
    image: "/images/cat-pooja.jpg",
    query: "Brass Murtis & All Pooja Utensils"
  },
  {
    name: "Mixer & Grinders",
    tagline: "Heavy-duty mixer grinders, juicers & blenders",
    image: "/images/cat-mixer.jpg",
    query: "Mixer & Grinders"
  },
  {
    name: "Marriage Utensils",
    tagline: "Wedding dahej sets, gift combos & traditional bartan",
    image: "/images/cat-marriage.jpg",
    query: "Marriage Utensils"
  },
  {
    name: "Sujata Items",
    tagline: "Juicer mixer grinders, heavy motors & genuine jars",
    image: "/images/cat-sujata.jpg",
    query: "Sujata Items"
  },
  {
    name: "Kitchen Utensils",
    tagline: "Spoons, ladles, spatulas & steel tools",
    image: "/images/steel-utensils.jpg",
    query: "Kitchen Utensils"
  },
  {
    name: "Dinnerware",
    tagline: "Plates, bowls & elegant tableware",
    image: "/images/cat-dinnerware.jpg",
    query: "Dinnerware"
  },
  {
    name: "Storage",
    tagline: "Airtight jars, canisters & containers",
    image: "/images/kitchen-pantry-storage.jpg",
    query: "Storage Containers"
  },
  {
    name: "Kitchen Appliances",
    tagline: "Mixers, kettles & small appliances",
    image: "/images/cat-appliances.jpg",
    query: "Kitchen Appliances"
  },
  {
    name: "Modware Collection",
    tagline: "Insulated bottles & hot pots",
    image: "/images/modware-item4.png",
    query: "Modware Collection",
    contain: true
  },
  {
    name: "Household Essentials",
    tagline: "Everyday kitchen tools & prep essentials",
    image: "/images/prestige-kitchen-knife-peeler.jpg",
    query: "Household Essentials",
    contain: true
  }
]

const featured = [
  {
    name: "Sujata Powermatic Plus 900W Juicer Mixer Grinder",
    brand: "Sujata",
    image: "/images/cat-sujata.jpg",
    tag: "High Demand",
    contain: false
  },
  {
    name: "Handcrafted Brass Pooja Thali & Diya Set",
    brand: "Pooja Special",
    image: "/images/cat-pooja.jpg",
    tag: "Auspicious",
    contain: false
  },
  {
    name: "Triply Stainless Steel Kadai with Lid",
    brand: "Modware",
    image: "/images/modware-product-1.png",
    tag: "Bestseller",
    contain: true
  },
  {
    name: "Hard Anodised Pressure Cooker 5L",
    brand: "Hawkins",
    image: "/images/featured-hawkins-cooker.jpeg",
    tag: "Classic",
    contain: true
  },
  {
    name: "Marriage Special Stainless Steel Dinner & Bartan Set",
    brand: "Durga Patra",
    image: "/images/cat-marriage.jpg",
    tag: "Wedding Dahej",
    contain: false
  },
  {
    name: "Copper Bottom Stainless Steel Sauce Pan",
    brand: "Prestige",
    image: "/images/featured-saucepan.jpg",
    tag: "Popular",
    contain: true
  },
  {
    name: "Heavy-Duty Commercial & Kitchen Mixer Grinder",
    brand: "Mixer Range",
    image: "/images/cat-mixer.jpg",
    tag: "Essential",
    contain: false
  },
  {
    name: "Brushed Steel Insulated Vacuum Bottle",
    brand: "Modware",
    image: "/images/modware-item4.png",
    tag: "Hot Seller",
    contain: true
  }
]

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [contactTab, setContactTab] = useState<'photo' | 'map'>('photo')
  const featuredRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const id = setInterval(() => setActiveSlide(s => (s + 1) % heroSlides.length), 5500)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('is-visible')
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollFeatured = (dir: 'left' | 'right') => {
    if (!featuredRef.current) return
    featuredRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  return (
    <div className="bg-white text-[#242424] selection:bg-[#B85C38]/20 antialiased">
      <style>{`
        *{font-family:"DM Sans", system-ui, -apple-system, sans-serif}
        h1,h2,h3,.serif{font-family:"Cormorant Garamond", serif}
        .reveal{opacity:0; transform:translateY(16px); transition: all 0.7s cubic-bezier(.16,1,.3,1)}
        .reveal.is-visible{opacity:1; transform:none}
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none}
      `}</style>

      {/* Announcement strip */}
      <div className="bg-[#242424] text-white text-[11px] md:text-xs tracking-widest font-medium">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-2.5 flex items-center justify-between gap-4">
          <p className="uppercase tracking-[0.14em] truncate">
            Bulk Orders, Pooja Utensils & Marriage Dahej Sets <span className="hidden md:inline opacity-60">•</span>{' '}
            <span className="hidden md:inline font-normal normal-case tracking-normal opacity-80">
              In front of Indore Sev Bhandar, Adhartal, Jabalpur — Since 1982
            </span>
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <span className="hidden xl:inline text-white/70 font-normal normal-case tracking-normal text-[11px]">
              Open Daily: 10:00 AM – 10:00 PM
            </span>
            <a
              href={`tel:${primaryPhone}`}
              className="hidden md:inline-flex items-center gap-2 shrink-0 bg-white text-[#242424] px-3 py-1 text-[11px] tracking-widest uppercase font-semibold hover:bg-[#F7F6F2] transition"
            >
              Call: {primaryPhone}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="md:hidden inline-flex items-center gap-1.5 text-white/90 shrink-0">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header
        className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b transition-all ${
          scrolled ? 'border-[#E8E6E2] shadow-[0_4px_24px_rgba(0,0,0,0.06)]' : 'border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 h-[68px] md:h-[76px] flex items-center justify-between gap-6">
          {/* logo */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-[#B85C38] flex items-center justify-center text-white shadow-sm transition group-hover:bg-[#9e4a2a]">
              <span className="serif text-[18px] font-bold leading-none tracking-tight">
                D<span className="font-light">P</span>
              </span>
            </div>
            <div className="leading-none">
              <div className="serif text-[17px] md:text-[18px] font-semibold tracking-[0.02em] text-[#242424]">
                DURGA PATRA
              </div>
              <div className="text-[9px] md:text-[10px] tracking-[0.28em] font-semibold text-[#B85C38] -mt-0.5">
                EMPORIUM • EST. 1982
              </div>
            </div>
          </a>

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide text-neutral-700">
            <a href="#services" className="hover:text-[#B85C38] transition">Services</a>
            <a href="#brands" className="hover:text-[#B85C38] transition">Our Brands</a>
            <a href="#shraddha" className="hover:text-[#B85C38] transition">Shraddha Metals</a>
            <a href="#products" className="hover:text-[#B85C38] transition">Collection</a>
            <a href="#featured" className="hover:text-[#B85C38] transition">Featured</a>
            <a href="#contact" className="hover:text-[#B85C38] transition">Contact & Map</a>
          </nav>

          {/* actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 border border-[#E8E6E2] px-4 py-2.5 text-xs font-semibold tracking-widest uppercase hover:border-[#242424] hover:bg-[#242424] hover:text-white transition"
            >
              <span className="w-2 h-2 bg-[#25D366] rounded-full"></span> WhatsApp
            </a>
            <a
              href="#products"
              id="nav-explore-btn"
              className="hidden md:inline-flex bg-[#242424] text-white px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-black transition shadow-sm"
            >
              Explore Collection
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 border border-[#E8E6E2] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <div className={`w-4 h-px bg-[#242424] transition ${mobileOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-4 h-px bg-[#242424] transition ${mobileOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                <div className={`w-4 h-px bg-[#242424] ${mobileOpen ? 'hidden' : 'block'}`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E8E6E2] bg-white px-4 py-6 space-y-4">
            <a onClick={() => setMobileOpen(false)} href="#services" className="block text-sm font-medium py-2 border-b border-[#F7F6F2]">
              Services
            </a>
            <a onClick={() => setMobileOpen(false)} href="#brands" className="block text-sm font-medium py-2 border-b border-[#F7F6F2]">
              Our Brands
            </a>
            <a onClick={() => setMobileOpen(false)} href="#shraddha" className="block text-sm font-medium py-2 border-b border-[#F7F6F2]">
              Shraddha Metals
            </a>
            <a onClick={() => setMobileOpen(false)} href="#products" className="block text-sm font-medium py-2 border-b border-[#F7F6F2]">
              Product Variety
            </a>
            <a onClick={() => setMobileOpen(false)} href="#featured" className="block text-sm font-medium py-2 border-b border-[#F7F6F2]">
              Featured
            </a>
            <a onClick={() => setMobileOpen(false)} href="#contact" className="block text-sm font-medium py-2">
              Contact & Google Map
            </a>
            <div className="flex gap-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] text-white text-center py-3 text-xs font-bold tracking-widest uppercase"
              >
                WhatsApp Enquiry
              </a>
              <a
                href={`tel:${primaryPhone}`}
                className="flex-1 bg-[#242424] text-white text-center py-3 text-xs font-bold tracking-widest uppercase"
              >
                Call: {primaryPhone}
              </a>
            </div>
            <p className="text-xs text-neutral-500 text-center">In front of Indore Sev Bhandar, Main Road, Adhartal, Jabalpur</p>
            <p className="text-[11px] text-[#B85C38] text-center font-medium">Timings: 10:00 AM to 10:00 PM (Daily)</p>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-[#F7F6F2] overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="relative h-[560px] md:h-[640px] lg:h-[720px] overflow-hidden bg-[#E8E6E2]">
            {heroSlides.map((slide, i) => (
              <div
                key={slide.title}
                className={`absolute inset-0 transition-opacity duration-[1000ms] ease-out ${
                  i === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <SafeImage
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}

            {/* hero content */}
            <div className="absolute inset-0 flex items-center pointer-events-none z-10">
              <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 pointer-events-auto">
                <div className="max-w-[580px] text-white">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-3.5 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
                    {heroSlides[activeSlide].kicker}
                  </div>
                  <h1 className="serif text-[42px] md:text-[56px] lg:text-[66px] font-semibold leading-[0.96] tracking-[-0.02em] mb-4 drop-shadow-md">
                    {heroSlides[activeSlide].title}
                  </h1>
                  <p className="text-white/90 text-[15px] md:text-[18px] font-light leading-relaxed max-w-[440px] mb-8 drop-shadow-sm">
                    {heroSlides[activeSlide].sub}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#products"
                      id="hero-explore-collection"
                      className="bg-white text-[#242424] px-8 py-4 text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#F7F6F2] hover:shadow-lg transition transform hover:-translate-y-0.5"
                    >
                      Explore Collection
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white/80 text-white px-7 py-4 text-xs font-bold tracking-[0.16em] uppercase hover:bg-white hover:text-[#242424] transition backdrop-blur-md bg-white/10"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                  <div className="hidden md:flex items-center gap-6 mt-10 text-[11px] tracking-widest uppercase font-medium text-white/80">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-px bg-white/60"></span> Trusted Since 1982
                    </span>
                    <span>•</span>
                    <span>Curated Indian Brands</span>
                    <span>•</span>
                    <span>Open 10 AM – 10 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* carousel slide indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8 lg:left-12 flex items-center gap-4 z-20">
              <div className="flex gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 transition-all ${
                      idx === activeSlide ? 'w-10 bg-white' : 'w-6 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/80 text-[11px] tracking-[0.16em] font-medium hidden md:inline">
                0{activeSlide + 1} / 03
              </span>
            </div>

            {/* next / prev arrows */}
            <div className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 flex-col gap-2 z-20">
              <button
                onClick={() => setActiveSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
                className="w-10 h-10 bg-white/15 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-[#242424] transition text-lg"
                aria-label="Previous slide"
              >
                ‹
              </button>
              <button
                onClick={() => setActiveSlide(s => (s + 1) % heroSlides.length)}
                className="w-10 h-10 bg-white text-[#242424] flex items-center justify-center hover:bg-[#242424] hover:text-white transition text-lg shadow-md"
                aria-label="Next slide"
              >
                ›
              </button>
            </div>

            {/* floating feature card on desktop */}
            <div className="hidden lg:flex absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 pr-6 gap-4 items-center shadow-2xl border border-white/50 max-w-[340px] z-20">
              <div className="w-16 h-16 shrink-0 overflow-hidden bg-[#F7F6F2] border border-[#E8E6E2]">
                <SafeImage
                  src="/images/cat-cookware.jpg"
                  alt="Triply Stainless Steel Cookware"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] tracking-[0.16em] uppercase font-bold text-[#B85C38] mb-0.5">
                  Featured Range
                </p>
                <p className="serif text-[15px] font-semibold leading-tight text-[#242424]">
                  Triply Cookware & Essentials
                </p>
                <p className="text-xs text-neutral-500 mt-1">Enquire for showroom stock</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & SHOWROOM SECTION */}
      <section id="contact" className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="border border-[#E8E6E2] bg-white overflow-hidden reveal shadow-sm">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              {/* Left — Image or Live Google Map */}
              <div className="relative group overflow-hidden h-[360px] md:h-[480px] lg:h-[540px] bg-[#F7F6F2] border-b lg:border-b-0 lg:border-r border-[#E8E6E2]">
                {contactTab === 'photo' ? (
                  <>
                    <SafeImage
                      src="/images/showroom.jpg"
                      alt="Durga Patra Emporium kitchenware showroom with arranged stainless steel cookware"
                      className="w-full h-full group-hover:scale-[1.03] transition duration-[900ms] ease-out object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </>
                ) : (
                  <iframe
                    title="Durga Patra Emporium Location Map"
                    src="https://maps.google.com/maps?q=Durga%20Patra%20Emporium,%20Main%20Road,%20Adhartal,%20Jabalpur,%20Madhya%20Pradesh%20482004&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                )}

                {/* View switcher badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center bg-white/95 backdrop-blur-md p-1 border border-[#E8E6E2] shadow-md z-10">
                  <button
                    onClick={() => setContactTab('photo')}
                    className={`px-3 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase transition ${
                      contactTab === 'photo'
                        ? 'bg-[#242424] text-white shadow-sm'
                        : 'text-neutral-600 hover:text-[#242424]'
                    }`}
                  >
                    Showroom View
                  </button>
                  <button
                    onClick={() => setContactTab('map')}
                    className={`px-3 py-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase flex items-center gap-1.5 transition ${
                      contactTab === 'map'
                        ? 'bg-[#242424] text-white shadow-sm'
                        : 'text-neutral-600 hover:text-[#242424]'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    Live Google Map
                  </button>
                </div>

                {/* bottom info */}
                {contactTab === 'photo' && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 flex gap-3 items-end">
                    <div className="bg-white/95 backdrop-blur-sm px-4 py-3 shadow-lg flex-1 md:flex-initial border border-[#E8E6E2]">
                      <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-[#B85C38]">
                        Since 1982 • Adhartal
                      </p>
                      <p className="serif text-[13px] md:text-[14px] font-semibold leading-tight mt-1 text-[#242424]">
                        In front of Indore Sev Bhandar, Adhartal, Jabalpur
                      </p>
                    </div>
                    <button
                      onClick={() => setContactTab('map')}
                      className="hidden md:flex bg-[#242424] text-white px-3 py-2 text-[10px] tracking-wider uppercase font-semibold items-center gap-1.5 hover:bg-black transition shadow-md"
                    >
                      View Map ↗
                    </button>
                  </div>
                )}
              </div>

              {/* Right — Content */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
                <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase font-semibold text-[#B85C38] mb-3">
                  <span className="w-6 h-px bg-[#B85C38]"></span> Get In Touch
                </div>
                <h2 className="serif text-[34px] md:text-[42px] font-semibold leading-[0.95] tracking-tight text-[#242424]">
                  Let&apos;s Connect
                </h2>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-neutral-600 mt-3 max-w-[420px]">
                  Looking for quality kitchenware, pooja bartan, mixer grinders, or wedding sets? Get in touch with Durga Patra Emporium or visit us in Adhartal, Jabalpur.
                </p>
                <div className="w-10 h-1 bg-[#B85C38] mt-5 mb-7"></div>

                {/* Contact details */}
                <div className="space-y-3.5">
                  <a
                    href={`tel:${primaryPhone}`}
                    className="group flex items-center gap-4 p-3.5 border border-[#E8E6E2] bg-[#F7F6F2]/60 hover:bg-white hover:border-[#242424] transition"
                  >
                    <div className="w-10 h-10 bg-white border border-[#E8E6E2] group-hover:border-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-white flex items-center justify-center transition shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-neutral-500">
                        WhatsApp / Calling
                      </p>
                      <p className="text-[15px] font-semibold tracking-wide text-[#242424]">
                        {primaryPhone}
                        <span className="text-xs text-neutral-500 font-normal ml-2">(Alt: {secondaryPhone})</span>
                      </p>
                    </div>
                    <span className="ml-auto text-[11px] tracking-widest uppercase font-semibold text-neutral-400 group-hover:text-[#242424]">
                      Call →
                    </span>
                  </a>

                  <a
                    href="mailto:durgapatra1980@gmail.com"
                    className="group flex items-center gap-4 p-3.5 border border-[#E8E6E2] bg-[#F7F6F2]/60 hover:bg-white hover:border-[#242424] transition"
                  >
                    <div className="w-10 h-10 bg-white border border-[#E8E6E2] group-hover:border-[#B85C38] group-hover:bg-[#B85C38] group-hover:text-white flex items-center justify-center transition shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 6 13.65 12.65a2 2 0 0 1-3.3 0L2 6" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-neutral-500">Email</p>
                      <p className="text-[14px] font-semibold truncate">durgapatra1980@gmail.com</p>
                    </div>
                    <span className="ml-auto text-[11px] tracking-widest uppercase font-semibold text-neutral-400 group-hover:text-[#242424] hidden md:inline">
                      Mail →
                    </span>
                  </a>

                  <div className="flex items-start gap-4 p-3.5 border border-[#E8E6E2] bg-[#F7F6F2]/60">
                    <div className="w-10 h-10 bg-white border border-[#E8E6E2] flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M12 21s-7-6-7-11a7 7 0 1 1 14 0c0 5-7 11-7 11Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-neutral-500">Location</p>
                      <p className="text-[13px] font-medium leading-relaxed text-[#242424] mt-0.5">
                        In front of Indore Sev Bhandar, Main Road, Adhartal,
                        <br />
                        Jabalpur, Madhya Pradesh, India - 482004.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-3.5 border border-[#E8E6E2] bg-[#F7F6F2]/60">
                    <div className="w-10 h-10 bg-white border border-[#E8E6E2] flex items-center justify-center shrink-0 text-[#B85C38]">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.14em] uppercase font-semibold text-neutral-500">Store Timings</p>
                      <p className="text-[13px] font-semibold text-[#242424] mt-0.5">
                        10:00 AM – 10:00 PM <span className="text-neutral-500 font-normal">• Open All 7 Days (Mon–Sun)</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-8">
                  <a
                    href={`tel:${primaryPhone}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#242424] text-white px-4 py-3.5 text-xs font-bold tracking-[0.12em] uppercase hover:bg-black transition shadow-sm text-center"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
                    </svg>
                    Call Now
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3.5 text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#1eb855] transition shadow-sm text-center"
                  >
                    <span className="w-2 h-2 bg-white rounded-full"></span> WhatsApp
                  </a>
                  <a
                    href={googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-[#242424] bg-white text-[#242424] px-4 py-3.5 text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#F7F6F2] transition text-center"
                  >
                    <span>Google Maps</span> ↗
                  </a>
                  <a
                    href={googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-[#4285F4] bg-[#4285F4]/5 text-[#1a73e8] px-4 py-3.5 text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#4285F4] hover:text-white transition text-center"
                  >
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    Google ↗
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mt-4 text-[11px] text-neutral-500">
                  <p>Mon–Sun • 10:00 AM – 10:00 PM • Quick response on WhatsApp</p>
                  <a
                    href={googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1a73e8] font-medium hover:underline"
                  >
                    ★ Rated on Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#F7F6F2] py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 reveal">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#B85C38] mb-3">
                What We Do
              </p>
              <h2 className="serif text-[32px] md:text-[42px] font-medium leading-none tracking-tight">
                Our Services
              </h2>
            </div>
            <p className="max-w-[420px] text-sm leading-relaxed text-neutral-600">
              Everything for a well-equipped kitchen — curated from trusted brands and guided by decades of experience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal bg-white group overflow-hidden border border-[#E8E6E2] hover:border-[#242424] hover:shadow-lg transition duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F7F6F2]">
                  <SafeImage
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full group-hover:scale-[1.06] transition duration-700 object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="serif text-[16px] md:text-[18px] font-semibold leading-tight mb-2 text-[#242424]">
                    {s.title}
                  </h3>
                  <p className="text-xs md:text-[13px] leading-relaxed text-neutral-500 line-clamp-2">
                    {s.desc}
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#242424] group-hover:text-[#B85C38] transition"
                  >
                    <span className="w-6 h-px bg-[#E8E6E2] group-hover:w-8 group-hover:bg-[#B85C38] transition-all"></span>
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED OUR BRANDS SECTION (Requirement 3) */}
      <section id="brands" className="bg-white py-12 md:py-20 border-y border-[#E8E6E2]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8 md:mb-12 reveal">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#B85C38] mb-3">
                Quality You Can Trust
              </p>
              <h2 className="serif text-[32px] md:text-[42px] font-semibold tracking-tight text-[#242424]">
                Our Brands
              </h2>
            </div>
            <p className="text-xs md:text-sm text-neutral-500 max-w-[400px]">
              We source and supply trusted kitchenware and appliance brands renowned across India for durability and performance.
            </p>
          </div>

          {/* Clean brand logo cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 reveal">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group relative bg-white border border-[#E8E6E2] hover:border-[#242424] hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center justify-between min-h-[160px] md:min-h-[175px] rounded-none"
              >
                {/* Logo container with preserved aspect ratio */}
                <div className="w-full flex-1 flex items-center justify-center p-2">
                  <SafeImage
                    src={b.logo}
                    alt={`${b.name} official brand logo`}
                    fallbackText={b.name}
                    contain={true}
                    className={`w-auto ${b.heightClass} object-contain transition-transform duration-300 group-hover:scale-105`}
                  />
                </div>

                {/* Brand label & role subtitle */}
                <div className="w-full text-center pt-3 border-t border-[#F7F6F2]">
                  <p className="text-[12px] font-semibold text-[#242424] tracking-wide group-hover:text-[#B85C38] transition">
                    {b.name}
                  </p>
                  <p className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5 truncate">
                    {b.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Legal / Relationship clarification */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-[#F7F6F2] text-xs text-neutral-500">
            <p className="text-center sm:text-left text-[11px] leading-relaxed">
              *Brand logos displayed for authentic identification. Authorised distributorship applies exclusively to{' '}
              <strong className="text-[#242424] font-semibold">Modware</strong> via Shraddha Metals. Other brands available as curated retail products.
            </p>
            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="text-[11px] px-3 py-1 bg-[#F7F6F2] border border-[#E8E6E2]">100% Genuine</span>
              <span className="text-[11px] px-3 py-1 bg-[#F7F6F2] border border-[#E8E6E2]">Manufacturer Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* SHRADDHA METALS — MODWARE AUTHORISED DISTRIBUTOR (Requirement 5) */}
      <section id="shraddha" className="bg-[#F7F6F2] py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 reveal">
          <div className="bg-white border border-[#E8E6E2] overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
              {/* image side */}
              <div className="relative h-[360px] md:h-[480px] lg:h-auto overflow-hidden bg-[#FAF9F6]">
                <SafeImage
                  src="/images/hero-cookware.jpg"
                  alt="Modware cookware collection display"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden pointer-events-none"></div>

                {/* Top Authorised Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white px-3.5 py-2 flex items-center gap-2 shadow-lg border border-[#E8E6E2]">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#242424]">
                    Authorised Distributor
                  </span>
                </div>

                {/* Modware floating badge desktop */}
                <div className="hidden lg:flex absolute bottom-6 left-6 bg-white/95 backdrop-blur-md shadow-xl p-4 pr-6 gap-4 items-center max-w-[340px] border border-[#E8E6E2]">
                  <div className="w-16 h-16 overflow-hidden shrink-0 bg-[#F7F6F2] border border-[#E8E6E2] flex items-center justify-center p-2">
                    <SafeImage
                      src="/images/modware-logo.png"
                      alt="Modware Logo"
                      contain={true}
                      fallbackText="MODWARE"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.16em] uppercase font-bold text-[#B85C38]">
                      Modware Range
                    </p>
                    <p className="serif text-[15px] font-semibold leading-tight text-[#242424]">
                      Triply Cookware & Hot Pots
                    </p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Wholesale & Retail Supply</p>
                  </div>
                </div>
              </div>

              {/* content side */}
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#B85C38] mb-3">
                    <span className="w-6 h-px bg-[#B85C38]"></span> Dedicated Distribution
                  </div>
                  <h2 className="serif text-[32px] md:text-[40px] font-semibold leading-[0.98] tracking-tight text-[#242424]">
                    SHRADDHA METALS
                    <span className="block text-[15px] md:text-[17px] font-medium tracking-[0.14em] uppercase text-neutral-500 mt-2">
                      Authorised Distributor of Modware
                    </span>
                  </h2>
                  <div className="w-12 h-1 bg-[#B85C38] mt-4 mb-5"></div>
                  <p className="text-[14px] md:text-[15px] leading-relaxed text-neutral-600 italic border-l-2 border-[#B85C38] pl-4 bg-[#F7F6F2]/50 py-2">
                    “Explore the full Modware collection of tri-ply cookware, insulated casseroles and thermoware with direct distributor pricing.”
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                    <a
                      href="tel:9827571414"
                      className="flex items-center gap-3 bg-[#F7F6F2] border border-[#E8E6E2] p-3 hover:border-[#242424] hover:bg-white transition"
                    >
                      <div className="w-9 h-9 bg-white border border-[#E8E6E2] flex items-center justify-center text-xs text-[#242424]">
                        ☎
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wide uppercase font-semibold text-neutral-500">Sachin Tamrakar</p>
                        <p className="text-sm font-semibold">9827571414</p>
                      </div>
                    </a>
                    <a
                      href="tel:9301193030"
                      className="flex items-center gap-3 bg-[#F7F6F2] border border-[#E8E6E2] p-3 hover:border-[#242424] hover:bg-white transition"
                    >
                      <div className="w-9 h-9 bg-white border border-[#E8E6E2] flex items-center justify-center text-xs text-[#242424]">
                        ☎
                      </div>
                      <div>
                        <p className="text-[10px] tracking-wide uppercase font-semibold text-neutral-500">Amber Tamrakar</p>
                        <p className="text-sm font-semibold">9301193030</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <a
                      href="mailto:amber.tamrakar@gmail.com"
                      className="flex items-center gap-2 text-neutral-600 hover:text-[#B85C38]"
                    >
                      <span className="w-6 h-6 bg-[#F7F6F2] border border-[#E8E6E2] flex items-center justify-center text-[11px]">
                        ✉
                      </span>
                      amber.tamrakar@gmail.com
                    </a>
                    <p className="flex items-start gap-2 text-neutral-600 text-xs leading-relaxed">
                      <span className="w-6 h-6 bg-[#F7F6F2] border border-[#E8E6E2] flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                        ◎
                      </span>
                      In front of Indore Sev Bhandar, Main Road, Adhartal, Jabalpur, M.P., India
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={whatsappShraddha}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#242424] text-white px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase hover:bg-black transition shadow-sm"
                    >
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Enquire on Modware
                    </a>
                    <a
                      href="tel:9301193030"
                      className="inline-flex items-center gap-2 border border-[#242424] bg-white px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase hover:bg-[#F7F6F2] transition"
                    >
                      Call Amber
                    </a>
                  </div>

                  <p className="text-[11px] leading-relaxed text-neutral-400 mt-5 border-t border-[#E8E6E2] pt-3">
                    Official claim of distributorship is exclusively for Modware as authorized. Other brands displayed on site for customer reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY-WISE PRODUCT VISUALS GRID (Requirement 4) */}
      <section id="products" className="bg-white py-12 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-[640px] mx-auto mb-10 md:mb-14 reveal">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#B85C38] mb-3">
              Explore Our Product Variety
            </p>
            <h2 className="serif text-[32px] md:text-[44px] font-medium leading-none tracking-tight mb-4 text-[#242424]">
              Curated for Every Kitchen
            </h2>
            <p className="text-sm leading-relaxed text-neutral-500">
              From everyday steel essentials to statement triply cookware — discover categories styled for modern Indian homes.
            </p>
          </div>

          {/* 12 Distinct Category Cards in a clean, balanced grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <a
                key={cat.name}
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Durga%20Patra%20Emporium%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(
                  cat.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group bg-white border border-[#E8E6E2] hover:border-[#242424] hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                {/* Image Container with consistent 4:3 aspect ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F7F6F2] flex items-center justify-center">
                  <SafeImage
                    src={cat.image}
                    alt={`${cat.name} — ${cat.tagline}`}
                    contain={cat.contain}
                    className={`w-full h-full transition duration-[700ms] ease-out group-hover:scale-105 ${
                      cat.contain ? 'object-contain p-4' : 'object-cover'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 text-xs shadow-sm">
                    ↗
                  </div>
                </div>

                {/* Text and Action */}
                <div className="p-4 md:p-5 flex flex-col justify-between flex-1 border-t border-[#F7F6F2]">
                  <div>
                    <h3 className="serif text-[18px] md:text-[20px] font-semibold leading-tight text-[#242424] group-hover:text-[#B85C38] transition">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                      {cat.tagline}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F7F6F2] flex items-center justify-between text-[11px] tracking-[0.14em] uppercase font-semibold">
                    <span className="text-[#242424] group-hover:text-[#B85C38] transition">
                      Enquire
                    </span>
                    <span className="text-neutral-400 group-hover:text-[#242424] transition transform group-hover:translate-x-1 duration-300">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#242424] px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase hover:bg-[#242424] hover:text-white transition shadow-sm"
            >
              Enquire For Full Catalogue <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section id="featured" className="bg-[#F7F6F2] py-12 md:py-20 border-y border-[#E8E6E2]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between gap-4 mb-8 reveal">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#B85C38] mb-2">
                Featured Product Collection
              </p>
              <h2 className="serif text-[28px] md:text-[36px] font-semibold leading-none text-[#242424]">
                Handpicked for You
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scrollFeatured('left')}
                className="w-10 h-10 bg-white border border-[#E8E6E2] flex items-center justify-center hover:border-[#242424] transition text-base"
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                onClick={() => scrollFeatured('right')}
                className="w-10 h-10 bg-[#242424] text-white flex items-center justify-center hover:bg-black transition text-base shadow-sm"
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={featuredRef}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-3"
          >
            {featured.map((p) => (
              <div
                key={p.name}
                className="reveal min-w-[260px] md:min-w-[300px] max-w-[300px] bg-white border border-[#E8E6E2] snap-start group flex flex-col justify-between hover:shadow-lg transition duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#FDFDFD] flex items-center justify-center p-3">
                  <SafeImage
                    src={p.image}
                    alt={p.name}
                    contain={p.contain}
                    className={`w-full h-full group-hover:scale-105 transition duration-500 ${
                      p.contain ? 'object-contain' : 'object-cover'
                    }`}
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-[#242424] text-white text-[10px] tracking-[0.12em] uppercase font-bold px-2.5 py-1">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-1 border-t border-[#F7F6F2]">
                  <div>
                    <p className="text-[11px] tracking-[0.12em] uppercase font-bold text-[#B85C38]">
                      {p.brand}
                    </p>
                    <h3 className="serif text-[16px] font-semibold leading-tight mt-1 line-clamp-2 min-h-[40px] text-[#242424]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">Sample catalogue • Price on enquiry</p>
                  </div>
                  <div className="flex gap-2 mt-4 pt-3 border-t border-[#F7F6F2]">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=Hello%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                        p.name
                      )}%20(${p.brand}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#242424] text-white text-center py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-black transition"
                    >
                      Enquire
                    </a>
                    <a
                      href={`tel:${primaryPhone}`}
                      className="px-4 border border-[#E8E6E2] py-2.5 text-[11px] font-bold tracking-[0.12em] uppercase hover:border-[#242424] transition text-center"
                    >
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] text-neutral-500 mt-6">
            Illustrative catalogue — actual stock, price and availability confirmed on enquiry only. No checkout.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST METRICS */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 reveal">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 border border-[#E8E6E2]">
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-[#E8E6E2]">
              <p className="serif text-[34px] font-semibold text-[#B85C38]">42+</p>
              <p className="text-xs tracking-[0.14em] uppercase font-semibold text-neutral-700 mt-1">
                Years of Trust in Jabalpur
              </p>
              <p className="text-xs text-neutral-400 mt-1">Established in 1982 in Adhartal</p>
            </div>
            <div className="p-8 text-center border-b md:border-b-0 md:border-r border-[#E8E6E2]">
              <p className="serif text-[34px] font-semibold text-[#242424]">7+ Trusted Brands</p>
              <p className="text-xs tracking-[0.14em] uppercase font-semibold text-neutral-700 mt-1">
                Curated & Genuine
              </p>
              <p className="text-xs text-neutral-400 mt-1">Modware, Prestige, Sujata, Hawkins & more</p>
            </div>
            <div className="p-8 text-center">
              <p className="serif text-[34px] font-semibold text-[#242424]">10,000+ Homes</p>
              <p className="text-xs tracking-[0.14em] uppercase font-semibold text-neutral-700 mt-1">
                Served Across the Region
              </p>
              <p className="text-xs text-neutral-400 mt-1">Generations of satisfied families</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#242424] text-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-14 pb-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-6 border-b border-white/10 pb-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#B85C38] flex items-center justify-center shadow-sm">
                  <span className="serif text-[17px] font-bold">DP</span>
                </div>
                <div>
                  <div className="serif text-[16px] font-semibold tracking-wide">DURGA PATRA EMPORIUM</div>
                  <div className="text-[10px] tracking-[0.20em] uppercase text-white/60">
                    Everything Your Kitchen Needs
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/70 max-w-[340px]">
                Your neighbourhood kitchenware destination in Adhartal, Jabalpur — quality, trust and personal assistance since 1982.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-[#1eb855] transition"
                >
                  WhatsApp
                </a>
                <a
                  href={`tel:${primaryPhone}`}
                  className="border border-white/20 px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#242424] transition"
                >
                  Call {primaryPhone}
                </a>
                <a
                  href={googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 px-4 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#242424] transition"
                >
                  Google Maps ↗
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-[11px] tracking-[0.16em] uppercase font-bold text-white/90 mb-4">
                Categories
              </p>
              <ul className="space-y-2.5 text-sm text-white/60">
                {categories.map((c) => (
                  <li key={c.name}>
                    <a href="#products" className="hover:text-white transition">
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2">
              <p className="text-[11px] tracking-[0.16em] uppercase font-bold text-white/90 mb-4">
                Our Brands
              </p>
              <ul className="space-y-2.5 text-sm text-white/60">
                {brands.map((b) => (
                  <li key={b.name}>
                    <a href="#brands" className="hover:text-white transition">
                      {b.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-white/40 mt-4 leading-tight">
                Authorised Distributor: Modware via Shraddha Metals
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-[11px] tracking-[0.16em] uppercase font-bold text-white/90 mb-4">
                Contact & Visit
              </p>
              <div className="space-y-3 text-sm text-white/70">
                <p>
                  In front of Indore Sev Bhandar, Main Road,
                  <br />
                  Adhartal, Jabalpur, Madhya Pradesh, India - 482004
                </p>
                <p className="text-white/90 font-medium">
                  Timings: 10:00 AM – 10:00 PM (Daily)
                </p>
                <a href={`tel:${primaryPhone}`} className="block hover:text-white">
                  Phone: {primaryPhone} <span className="text-white/50 text-xs">(Alt: {secondaryPhone})</span>
                </a>
                <a href="mailto:durgapatra1980@gmail.com" className="block hover:text-white">
                  durgapatra1980@gmail.com
                </a>
                <div className="pt-2">
                  <a
                    href={googleBusinessUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition"
                  >
                    <span>View on Google Search & Reviews</span> ↗
                  </a>
                </div>
                <div className="pt-3 border-t border-white/10 mt-3">
                  <p className="text-xs font-semibold text-white/90">Shraddha Metals — Modware Distributor</p>
                  <p className="text-xs text-white/60 mt-1">Amber: {primaryPhone} • Sachin: {secondaryPhone}</p>
                  <p className="text-xs text-white/60">amber.tamrakar@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Durga Patra Emporium. All rights reserved. • Adhartal, Jabalpur.</p>
            <div className="flex items-center gap-4">
              <span>Quality Cookware & Kitchenware Retailer</span>
              <span className="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
              <a href="#contact" className="hover:text-white">
                Showroom Visit
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp enquiry"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-13 h-13 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition duration-300"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.288.043.088.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.177.182-.076.356.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.178L2 22l4.981-1.306C8.423 21.545 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.63 0-3.14-.492-4.406-1.334l-.316-.21-2.955.775.789-2.88-.231-.368C3.963 14.823 3.5 13.454 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.667-8.5 8.667z" />
        </svg>
      </a>
    </div>
  )
}
