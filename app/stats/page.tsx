"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, Users, CheckCircle, Star, Award, Clock, Target, Phone, Facebook, Instagram, Send, X, Calendar, BarChart3 } from "lucide-react" // Calendar ikonasi qo'shildi
import Link from "next/link"
import Head from 'next/head'; // Head komponentini import qilamiz

// --- Animated Counter Component ---
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isVisible?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  isVisible = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Agar ko'rinmasa animatsiya ishlamaydi

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Kvadratik ease-out funksiyasi
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end); // Animatsiya tugagandan so'ng aniq qiymatni o'rnatish
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]); // isVisible o'zgarishi bilan animatsiya qayta ishga tushadi

  // 4.9 kabi o'nlik kasrlar uchun aniqlikni boshqarish
  const displayedCount = end.toString().includes('.') ? count.toFixed(1) : count.toLocaleString();

  return (
    <span>
      {prefix}
      {displayedCount}
      {suffix}
    </span>
  );
};


// --- Intersection Observer Hook ---
function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  // Refni useRef<HTMLElement>(null) qilib kengaytiramiz, chunki u divga ham biriktirilishi mumkin
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) { // Faqat bir marta ishga tushirish uchun !isVisible qo'shildi
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) { // Cleanup funksiyasida ref mavjudligini tekshiramiz
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    }
  }, [threshold, isVisible]) // isVisible ni dependencylarga qo'shdik

  return [ref, isVisible] as const
}

// --- Asosiy StatsPage Komponenti ---
export default function StatsPage() {
  const [statsRef, statsVisible] = useIntersectionObserver(0.3); // 30% ko'rinsa animatsiya boshlansin

  const mainStats = [
    {
      icon: CheckCircle,
      number: 10000, // Raqam (number)
      suffix: "+",
      prefix: "",
      title: "Bajarilgan Xizmatlar",
      description: "Muvaffaqiyatli yakunlangan loyihalar soni",
      color: "from-blue-500 to-blue-600",
      alt: "Bajarilgan xizmatlar ikoni",
    },
    {
      icon: Users,
      number: 5000, // Raqam (number)
      suffix: "+",
      prefix: "",
      title: "Mamnun Mijozlar",
      description: "Bizga ishongan va qaytgan mijozlar soni",
      color: "from-green-500 to-green-600",
      alt: "Mijozlar ikoni",
    },
    {
      icon: Star,
      number: 4.9, // Raqam (number)
      suffix: "/5",
      prefix: "",
      title: "O'rtacha Reyting",
      description: "Mijozlar tomonidan berilgan o'rtacha baho",
      color: "from-yellow-500 to-orange-500",
      alt: "Reyting ikoni",
    },
    {
      icon: Award,
      number: 8, // Raqam (number)
      suffix: "+", // Yillik tajriba uchun + qo'shildi
      prefix: "",
      title: "Yillik Tajriba",
      description: "Professional xizmat ko'rsatish tajribamiz",
      color: "from-purple-500 to-purple-600",
      alt: "Yillik tajriba ikoni",
    },
  ];

  const additionalStats = [
    { label: "Oylik Yangi Mijozlar", value: "500+", icon: TrendingUp, alt: "Oylik yangi mijozlar ikoni" },
    { label: "O'rtacha Javob Vaqti", value: "15 daqiqa", icon: Clock, alt: "O'rtacha javob vaqti ikoni" },
    { label: "Mijozlar Mamnunligi", value: "98%", icon: Target, alt: "Mijozlar mamnunligi ikoni" },
    { label: "Qayta Murojaat Foizi", value: "85%", icon: Users, alt: "Qayta murojaat qilish ikoni" },
  ];

  const achievements = [
    {
      year: "2016",
      title: "Kompaniya Tashkil Etildi",
      description: "Kichik jamoa bilan professional xizmatlar ko'rsatishni boshladik.",
      icon: Calendar, // Qo'shimcha ikona qo'shildi
    },
    {
      year: "2018",
      title: "1000+ Mijozga Yetdik",
      description: "Dastlabki mingta mamnun mijozimizga muvaffaqiyatli xizmat ko'rsatdik.",
      icon: Users,
    },
    {
      year: "2020",
      title: "Raqamli Platforma Ishga Tushdi",
      description: "Telegram orqali buyurtmalar qabul qilish va xizmat ko'rsatish tizimini joriy qildik.",
      icon: Send, // Telegram ikonasi
    },
    {
      year: "2022",
      title: "5000+ Mijozlar Bazasi",
      description: "Mijozlar sonimizni 5 mingdan oshirdik va xizmatlar geografiyasini kengaytirdik.",
      icon: Users,
    },
    {
      year: "2024",
      title: "Soha Yetakchisi Deb Tan Olinish",
      description: "O'zbekistonda professional xizmatlar sohasida eng yaxshi kompaniyalardan biriga aylandik.",
      icon: Award,
    },
  ];

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };

    if (isContactModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isContactModalOpen]);

  return (
    <>
      <Head>
        <title>Kaska.uz Statistikasi - Bizning Muvaffaqiyatlarimiz va Tarixiy Yutuqlar</title>
        <meta name="description" content="Kaska.uz kompaniyasining yutuqlari, bajarilgan xizmatlar soni, mijozlar reytingi, yillik tajriba va o'sish ko'rsatkichlari bilan tanishing. Bizning tarixiy yo'limizni kuzating." />
        <meta name="keywords" content="Kaska.uz statistika, kompaniya yutuqlari, mijozlar soni, reyting, tajriba, xizmat ko'rsatish hajmi, o'sish ko'rsatkichlari, timeline, O'zbekiston, raqamlar, Kaska.uz muvaffaqiyati" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kaska.uz Statistikasi - Bizning Muvaffaqiyatlarimiz va Tarixiy Yutuqlar" />
        <meta property="og:description" content="Kaska.uz kompaniyasining yutuqlari, bajarilgan xizmatlar soni, mijozlar reytingi, yillik tajriba va o'sish ko'rsatkichlari bilan tanishing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaska.uz/stats" />
        {/* <meta property="og:image" content="https://www.kaska.uz/og-image-stats.jpg" /> */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaska.uz Statistikasi" />
        <meta name="twitter:description" content="Kaska.uz kompaniyasining asosiy yutuqlari va raqamlari." />
        {/* <meta name="twitter:image" content="https://www.kaska.uz/twitter-image-stats.jpg" /> */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-gray-100 relative overflow-hidden">
        {/* --- Creative fon effektlari (Subtle Blobs) --- */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* --- Header --- */}
        <header className="relative z-20 p-4 md:p-6 bg-slate-900/40 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <Link
              href="/"
              className="flex items-center text-white hover:text-blue-400 transition-colors duration-300 group"
              aria-label="Bosh sahifaga qaytish"
            >
              <ArrowLeft className="h-6 w-6 mr-2 group-hover:translate-x-[-4px] transition-transform duration-200" />
              <span className="text-lg font-semibold hidden sm:inline">Orqaga</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center flex-grow">
              Bizning Statistikalarimiz
            </h1>

            <Button
              onClick={openContactModal}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="Bog'lanish oynasini ochish"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="hidden sm:inline">Bog'lanish</span>
            </Button>
          </div>
        </header>

        {/* --- Main Content Section --- */}
        <main className="relative z-10 px-4 md:px-6 py-8 md:py-12">
          <section className="max-w-6xl mx-auto space-y-16">
            {/* Kirish qismi */}
            <div className="text-center animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <BarChart3 className="h-12 w-12 text-white" aria-label="Statistika ikoni" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Kaska.uz Muvaffaqiyati Sonlarda Ifodalangan
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Kompaniyamizning o'sishi va mijozlarimizga bo'lgan sadoqatimizni aks ettiruvchi asosiy statistik ma'lumotlar. Bizning har bir yutug'imiz — bu sizning ishonchingiz natijasi.
              </p>
            </div>

            {/* Asosiy Statistikalar Grid */}
            <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
              {mainStats.map((stat, index) => (
                <Card
                  key={stat.title}
                  className="glass-effect border-0 hover:scale-105 transition-all duration-300 text-center animate-fadeIn"
                  style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: "both" }}
                >
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
                    >
                      <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" aria-label={stat.alt} />
                    </div>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1 sm:mb-2 leading-none">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} prefix={stat.prefix} isVisible={statsVisible} duration={2500} />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                      {stat.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Stats */}
            <div className="animate-fadeIn" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">Qo'shimcha Ko'rsatkichlar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {additionalStats.map((stat, index) => (
                  <Card key={stat.label} className="glass-effect border-0 hover:scale-105 transition-all duration-300 animate-fadeIn" style={{ animationDelay: `${1.3 + index * 0.1}s`, animationFillMode: "both" }}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                        <stat.icon className="h-6 w-6 text-white" aria-label={stat.alt} />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="animate-fadeIn" style={{ animationDelay: "1.8s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">Bizning Tarixiy Yo'limiz</h2>
              <div className="relative border-l-2 border-purple-500 pl-4 md:pl-10 space-y-10">
                {achievements.map((achievement, index) => (
                  <div key={achievement.year} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-3 md:-left-5 top-0 mt-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold ring-4 ring-slate-800 transition-transform duration-300 group-hover:scale-125">
                      <Calendar className="h-3 w-3 text-white" /> {/* Har bir yil uchun Calendar ikonasi */}
                    </div>
                    <Card
                      className="glass-effect border-0 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 animate-fadeIn"
                      style={{ animationDelay: `${1.9 + index * 0.15}s`, animationFillMode: "both" }}
                    >
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center">
                          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8 text-center md:text-left">
                            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto md:mx-0 shadow-lg">
                              <span className="text-white font-bold text-xl md:text-2xl">{achievement.year}</span>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{achievement.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{achievement.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>


            {/* Growth Chart Placeholder */}
            <Card className="glass-effect border-0 animate-fadeIn" style={{ animationDelay: "2.5s", animationFillMode: "both" }}>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" aria-label="O'sish grafigi ikoni" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Doimiy O'sish va Rivojlanish</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Har yili mijozlar soni va xizmat sifati ortib bormoqda. Bizning maqsadimiz – har doim eng yaxshi natijalarni ko'rsatish va sohada innovatsiyalarni joriy etish.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                  <div className="text-center bg-white/5 p-4 rounded-xl shadow-md">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">+150%</div>
                    <p className="text-gray-400 text-sm md:text-base">Mijozlar o'sishi</p>
                  </div>
                  <div className="text-center bg-white/5 p-4 rounded-xl shadow-md">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">+200%</div>
                    <p className="text-gray-400 text-sm md:text-base">Xizmatlar hajmi</p>
                  </div>
                  <div className="text-center bg-white/5 p-4 rounded-xl shadow-md">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">+180%</div>
                    <p className="text-gray-400 text-sm md:text-base">Jamoa o'sishi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        {/* --- Global Styles for Animations and Glass Effect --- */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes modalSlideIn {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .animate-modalSlideIn {
            animation: modalSlideIn 0.3s ease-out forwards;
          }
          .animate-blob {
            animation: blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
          }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }

          .glass-effect {
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
          }
        `}</style>

        {/* --- Contact Modal --- */}
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeContactModal}
              aria-label="Modalni yopish uchun orqa fonni bosing"
            ></div>

            {/* Modal Content */}
            <div
              className="relative w-full max-w-md mx-auto glass-effect rounded-3xl shadow-2xl animate-modalSlideIn max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              {/* Close Button */}
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                aria-label="Modalni yopish"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="p-8 text-center border-b border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 id="contact-modal-title" className="text-2xl font-bold text-white mb-2">Bog'lanish</h3>
                <p className="text-gray-400">Biz bilan aloqaga chiqing</p>
              </div>

              {/* Contact Options */}
              <div className="p-8 space-y-6">
                {/* Phone */}
                <Link
                  href="tel:+998901234567"
                  className="flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  aria-label="Telefon raqamiga qo'ng'iroq qilish"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telefon</p>
                    <p className="text-gray-400 text-sm">+998 90 123 45 67</p>
                  </div>
                </Link>

                {/* Telegram */}
                <Link
                  href="https://t.me/Kaska_UZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  aria-label="Telegram orqali biz bilan bog'lanish"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Telegram</p>
                    <p className="text-gray-400 text-sm">@Kaska_UZ</p>
                  </div>
                </Link>

                {/* Social Media */}
                <div>
                  <p className="text-gray-400 text-sm mb-4 text-center">
                    Ijtimoiy tarmoqlar
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link
                      href="https://facebook.com/Kaska.uz" // Real havolani qo'ying
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label="Bizning Facebook sahifamiz"
                    >
                      <Facebook className="h-6 w-6 text-white" />
                    </Link>
                    <Link
                      href="https://instagram.com/Kaska.uz" // Real havolani qo'ying
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      aria-label="Bizning Instagram sahifamiz"
                    >
                      <Instagram className="h-6 w-6 text-white" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}