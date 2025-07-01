"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Award, Users, Shield, Clock, Target, Heart, Zap, Phone, Instagram, Facebook, Send, X, Handshake, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react" // useRef import qilindi
import Head from 'next/head';

// --- CountUp Komponenti: Raqamlarni animatsiya bilan o'sishi ---
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Bir marta ishga tushgach, kuzatishni to'xtatish
        }
      },
      { threshold: 0.5 } // Elementning kamida 50% ko'rinishi
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      const easedProgress = easeOutQuad(Math.min(progress / duration, 1)); // Tezlikni sozlash

      setCount(Math.floor(easedProgress * end));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Animatsiya tugagandan so'ng aniq qiymatni o'rnatish
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, inView]);

  // Tezlikni o'zgartirish funksiyasi (ease-out-quad)
  const easeOutQuad = (t: number) => t * (2 - t);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// --- Asosiy AboutPage Komponenti ---
export default function AboutPage() {
  const values = [
    {
      icon: Handshake,
      title: "Sifat",
      description: "Har bir xizmatimizda yuqori sifat standartlariga rioya qilamiz.",
      color: "from-blue-500 to-blue-600",
      alt: "Sifat ikoni - qo'l siqish",
    },
    {
      icon: Shield,
      title: "Ishonch",
      description: "Mijozlar ishonchini qadrlaymiz va shaffoflik bilan ishlaymiz.",
      color: "from-green-500 to-green-600",
      alt: "Ishonch ikoni - qalqon",
    },
    {
      icon: Lightbulb,
      title: "Innovatsiya",
      description: "Doimiy ravishda yangi yechimlarni izlaymiz va joriy qilamiz.",
      color: "from-purple-500 to-purple-600",
      alt: "Innovatsiya ikoni - lampochka",
    },
    {
      icon: Heart,
      title: "G'amxo'rlik",
      description: "Har bir mijozga individual yondashuv bilan qoniqishni ta'minlaymiz.",
      color: "from-pink-500 to-rose-500",
      alt: "Mijozga g'amxo'rlik ikoni - yurak",
    },
  ]

const stats = [
    { number: 8, label: "Yillik tajriba", suffix: "+", prefix: "", alt: "8 yildan ortiq tajriba" }, // prefix: "" qo'shildi
    { number: 5000, label: "Mamnun mijoz", suffix: "+", prefix: "", alt: "5000 dan ortiq mamnun mijoz" }, // prefix: "" qo'shildi
    { number: 10000, label: "Bajarilgan loyiha", suffix: "+", prefix: "", alt: "10000 dan ortiq bajarilgan loyiha" }, // prefix: "" qo'shildi
    { number: 4.9, label: "O'rtacha reyting", suffix: "", prefix: "", alt: "4.9 o'rtacha mijoz reytingi" }, // prefix: "" qo'shildi
  ];

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal()
    }

    if (isContactModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isContactModalOpen])

  return (
    <>
      <Head>
        <title>Kaska.uz Haqida - Bizning Missiyamiz, Qadriyatlarimiz va Tariximiz</title>
        <meta name="description" content="Kaska.uz - 2016 yildan beri professional xizmatlar ko'rsatib kelayotgan ishonchli hamkor. Bizning missiyamiz, qadriyatlarimiz va yutuqlarimiz bilan tanishing." />
        <meta name="keywords" content="Kaska.uz, biz haqimizda, kompaniya tarixi, missiya, qadriyatlar, yutuqlar, tajriba, mijozlar, professional xizmatlar O'zbekiston" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kaska.uz Haqida - Bizning Missiyamiz, Qadriyatlarimiz va Tariximiz" />
        <meta property="og:description" content="Kaska.uz - 2016 yildan beri professional xizmatlar ko'rsatib kelayotgan ishonchli hamkor. Bizning missiyamiz, qadriyatlarimiz va yutuqlarimiz bilan tanishing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaska.uz/about" />
        {/* <meta property="og:image" content="https://www.kaska.uz/og-image-about.jpg" /> */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaska.uz Haqida" />
        <meta name="twitter:description" content="Kaska.uz kompaniyasi haqida batafsil ma'lumotlar." />
        {/* <meta name="twitter:image" content="https://www.kaska.uz/twitter-image-about.jpg" /> */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-gray-100 relative overflow-hidden">
        {/* --- Creative fon effektlari (Subtle Blobs) --- */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-6000"></div>

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
              Biz Haqimizda
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
            {/* Kompaniya haqida kirish qismi */}
            <div className="text-center animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Users className="h-12 w-12 text-white" aria-label="Bizning jamoa ikonasi" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Kaska.uz – Sizning ishonchli hamkoringiz
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                2016 yildan beri O'zbekiston bo'ylab **eng sifatli va ishonchli professional xizmatlar**ni ko'rsatib kelmoqdamiz. Bizning asosiy maqsadimiz – har bir mijozning ehtiyojlarini to'liq qondirish va ularga mukammal yechimlar taqdim etish.
              </p>
            </div>

            {/* Missiya va Ko'zlangan Maqsadlar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="glass-effect border-0 animate-fadeIn hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <Target className="h-8 w-8 text-white" aria-label="Bizning missiyamiz ikoni - nishon" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Bizning Missiyamiz</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    Har bir mijozga **professional, tezkor va ishonchli xizmat** ko'rsatish orqali ularning hayotini osonlashtirish, hamda biznes va shaxsiy ehtiyojlariga moslashtirilgan yechimlar taqdim etish.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="glass-effect border-0 animate-fadeIn hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: "0.5s", animationFillMode: "both" }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <TrendingUp className="h-8 w-8 text-white" aria-label="Bizning maqsadimiz ikoni - o'sish" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Bizning Ko'zlangan Maqsadimiz</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    O'zbekistonda **eng yaxshi va keng qamrovli professional xizmatlar kompaniyasi** bo'lish, innovatsion yechimlar va yuqori darajadagi mijozlar qoniqishi bilan soha yetakchisiga aylanish.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Qadriyatlarimiz Section */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.7s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">Bizning Asosiy Qadriyatlarimiz</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {values.map((value, index) => (
                  <Card
                    key={value.title}
                    className="glass-effect border-0 hover:scale-105 transition-all duration-300 text-center group"
                    style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: "both" }}
                  >
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="h-8 w-8 text-white" aria-label={value.alt} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Yutuqlarimiz Section - CountUp va responsivlik qo'shildi */}
            <div className="animate-fadeIn" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 md:mb-12">Bizning Sonlarda Ifodalangan Yutuqlarimiz</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white/5 p-4 sm:p-6 rounded-xl glass-effect shadow-md animate-fadeIn hover:scale-105 transition-all duration-300" style={{ animationDelay: `${1.3 + index * 0.1}s`, animationFillMode: "both" }}>
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1 sm:mb-2 leading-none">
                      {/* CountUp komponenti endi bu yerda ishlatiladi */}
                      <CountUp end={stat.number} suffix={stat.suffix} prefix={stat.prefix} duration={2000} />
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Jamoa Section */}
            <Card className="glass-effect border-0 animate-fadeIn hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "1.7s", animationFillMode: "both" }}>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <Users className="h-10 w-10 text-white" aria-label="Professional jamoa ikoni" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Professional va Fidoyi Jamoa</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Bizning jamoamiz – bu **tajribali, malakali va o'z ishiga fidoyi mutaxassislar**dan iborat. Ular har bir loyihaga mas'uliyat bilan yondashadi va mijozlarga eng yaxshi natijalarni taqdim etishga intiladi.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {[{ icon: Clock, label: "24/7 Qo'llab-quvvatlash" }, { icon: Shield, label: "Xizmatga Kafolat" }, { icon: Award, label: "Sertifikatlangan Mutaxassislar" }].map((item, i) => (
                    <div key={i} className="px-4 py-2 bg-white/10 rounded-full text-gray-300 flex items-center text-sm md:text-base">
                      <item.icon className="h-4 w-4 mr-2" aria-label={`${item.label} ikoni`} />
                      {item.label}
                    </div>
                  ))}
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
          .animation-delay-6000 { animation-delay: 6s; }

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
  )
}