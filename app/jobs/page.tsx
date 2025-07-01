"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Send, Users, Wrench, Clock, Heart, ShoppingBag, Phone, ExternalLink, Instagram, Facebook, X, CalendarCheck } from "lucide-react" // CalendarCheck ikonasi qo'shildi
import Link from "next/link"
import Head from 'next/head'; // Head komponentini import qilamiz

export default function JobsPage() {
  const jobChannels = [
    {
      title: "Ishchilar uchun",
      handles: ["@Kaska_UZ", "@Kaska_premium"],
      description: "Umumiy ishchilar va premium xizmatlar uchun ish e'lonlari.",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      alt: "Ishchilar ikoni",
    },
    {
      title: "Ustalar uchun",
      handles: ["@Kaska_UZB"],
      description: "Professional ustalar va malakali mutaxassislar uchun bo'sh ish o'rinlari.",
      icon: Wrench,
      color: "from-green-500 to-green-600",
      alt: "Ustalar ikoni",
    },
    {
      title: "Oylik ishchilar uchun",
      handles: ["@Kaska_HR"],
      description: "Doimiy va uzoq muddatli ish o'rinlari, HR xizmatlari.",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      alt: "Oylik ishchilar ikoni",
    },
    {
      title: "Ayollar uchun ishlar",
      handles: ["@Kaska_women"],
      description: "Ayol ishchilar uchun moslashtirilgan maxsus ish imkoniyatlari.",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      alt: "Ayollar uchun ishlar ikoni",
    },
    {
      title: "Onlayn do'kon ishchilari",
      handles: ["@KaskaMall"],
      description: "Onlayn do'kon mahsulotlari va aksessuarlari savdosi bilan bog'liq ishlar.",
      icon: ShoppingBag,
      color: "from-orange-500 to-red-500",
      alt: "Onlayn do'kon ikoni",
    },
  ]

  const benefits = [
    "Raqobatbardosh maosh",
    "Moslashuvchan ish vaqti",
    "Professional rivojlanish imkoniyatlari",
    "Do'stona va qo'llab-quvvatlovchi jamoaviy muhit",
    "Rag'batlantiruvchi bonuslar va mukofotlar",
    "O'z vaqtida va kafolatlangan to'lovlar",
  ]

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
        <title>Kaska.uz Ish O'rinlari - Professional Jamoamizga Qo'shiling</title>
        <meta name="description" content="Kaska.uz jamoasiga qo'shiling! Professional ustalar, umumiy ishchilar, oylik ishchilar, ayol ishchilar va onlayn do'kon xodimlari uchun bo'sh ish o'rinlari. Telegram kanallarimiz orqali murojaat qiling." />
        <meta name="keywords" content="Kaska.uz ish, ish o'rinlari O'zbekiston, usta ish, ishchi kerak, oylik ish, ayollar uchun ish, onlayn do'kon ish, ish qidirish, vakansiyalar, telegram ish, Kaska.uz vakansiya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Kaska.uz Ish O'rinlari - Professional Jamoamizga Qo'shiling" />
        <meta property="og:description" content="Kaska.uz jamoasiga qo'shiling! Professional ustalar, umumiy ishchilar, oylik ishchilar, ayol ishchilar va onlayn do'kon xodimlari uchun bo'sh ish o'rinlari." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaska.uz/jobs" />
        {/* <meta property="og:image" content="https://www.kaska.uz/og-image-jobs.jpg" /> */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaska.uz Ish O'rinlari" />
        <meta name="twitter:description" content="Kaska.uz jamoasiga qo'shiling va karyerangizni boshlang!" />
        {/* <meta name="twitter:image" content="https://www.kaska.uz/twitter-image-jobs.jpg" /> */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-gray-100 relative overflow-hidden">
        {/* --- Creative fon effektlari (Subtle Blobs) --- */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-rose-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

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
              Ish O'rinlari
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
            {/* Hero Section */}
            <div className="text-center animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                <Users className="h-12 w-12 text-white" aria-label="Ishchilar guruhi ikoni" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Kaska.uz Jamoasiga Qo'shiling!
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Kaska.uz dinamik va o'sib borayotgan jamoasining bir qismi bo'lish imkoniyatini qo'ldan boy bermang. Biz turli sohalarda doimiy va vaqtinchalik ish o'rinlarini taklif etamiz. Telegram kanallarimizga qo'shilib, eng so'nggi vakansiyalardan xabardor bo'ling.
              </p>
            </div>

            {/* Job Channels Section */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">Rasmiy Telegram Kanallarimiz</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {jobChannels.map((channel, index) => (
                  <Card
                    key={channel.title}
                    className="glass-effect border-0 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group"
                    style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "both" }}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                      >
                        <channel.icon className="h-8 w-8 text-white" aria-label={channel.alt} />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 text-center">
                        {channel.title}
                      </h3>

                      <p className="text-gray-400 mb-6 leading-relaxed text-sm text-center">{channel.description}</p>

                      <div className="space-y-3">
                        {channel.handles.map((handle, idx) => (
                          <Link
                            key={idx}
                            href={`https://t.me/${handle.replace("@", "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group/link"
                            aria-label={`${handle} Telegram kanaliga o'tish`}
                          >
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                <Send className="h-5 w-5 text-white" />
                              </div>
                              <span className="text-blue-400 font-medium text-base">{handle}</span>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400 group-hover/link:text-white transition-colors duration-300" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="animate-fadeIn" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 md:mb-12">Nima uchun Kaska.uzda ishlash kerak?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="glass-effect border-0 hover:scale-105 transition-all duration-300 group" style={{ animationDelay: `${0.9 + index * 0.05}s`, animationFillMode: "both" }}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <CalendarCheck className="h-6 w-6 text-white" aria-label="Afzallik belgisi" /> {/* Iconka qo'shildi */}
                      </div>
                      <p className="text-white font-medium text-base">{benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* How to Apply Section */}
            <Card className="glass-effect border-0 animate-fadeIn" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
              <CardContent className="p-8 md:p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Send className="h-10 w-10 text-white" aria-label="Ariza yuborish ikoni" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Qanday qilib ishga kirish mumkin?</h2>
                <div className="max-w-3xl mx-auto space-y-6 text-left">
                  {/* Step 1 */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Telegram kanaliga qo'shiling</h3>
                      <p className="text-gray-300 text-sm md:text-base">Yuqoridagi telegram kanallaridan o'zingizga mos keladiganini tanlab, qo'shiling va e'lonlarni kuzatib boring.</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ariza yuboring</h3>
                      <p className="text-gray-300 text-sm md:text-base">Kanalda ko'rsatilgan yo'riqnoma bo'yicha o'zingiz haqingizda to'liq ma'lumot va rezyumeni yuboring.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Suhbatga tayyorlaning</h3>
                      <p className="text-gray-300 text-sm md:text-base">Bizning HR mutaxassislarimiz siz bilan bog'lanib, bo'sh ish o'rni uchun suhbat o'tkazadilar.</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 shadow-md">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ishni boshlang!</h3>
                      <p className="text-gray-300 text-sm md:text-base">Muvaffaqiyatli suhbatdan so'ng, siz Kaska.uz jamoasiga qo'shilib, faoliyatni boshlaysiz va daromad olishni boshlaysiz.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for More Info Section */}
            <Card className="glass-effect border-0 animate-fadeIn" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Qo'shimcha savollar bormi?</h2>
                <p className="text-gray-300 mb-6 text-base">
                  Ish o'rinlari haqida batafsil ma'lumot olish yoki boshqa savollar bilan biz bilan bog'laning. Jamoamiz sizga yordam berishga tayyor.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+998901234567"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                    aria-label="Telefon orqali bog'lanish"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    +998 90 123 45 67
                  </Link>
                  <Link
                    href="https://t.me/Kaska_UZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-md"
                    aria-label="Telegram orqali bog'lanish"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Telegram orqali
                  </Link>
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
            background: rgba(255, 255, 255, 0.04); /* Adjusted opacity for slightly darker glass */
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