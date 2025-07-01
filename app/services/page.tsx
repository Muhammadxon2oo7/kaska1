"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Wrench, Users, Home, Zap, Shield, MapPin, Truck, Phone, Facebook, Instagram, Send, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Head from 'next/head'; // Head komponentini import qilamiz

// particle system is this page not included. because landing page use this.

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Universal ustalar",
      description: "Har qanday uy-ro'zg'or ishlarini bajaruvchi tajribali ustalar.",
      features: ["Kichik ta'mir", "Katta loyihalar", "Sifatli materiallar", "Kafolatli ishlar"],
      color: "from-blue-500 to-blue-600",
      alt: "Universal ustalar ikoni - kalit",
    },
    {
      icon: Users,
      title: "Yordamchi ishchilar",
      description: "Yuklash, tushirish va boshqa umumiy ishlarda yordam beruvchi malakali ishchilar.",
      features: ["Tez va samarali", "Sifatli ish", "Tajribali jamoa", "Hamyonbop narx"],
      color: "from-green-500 to-green-600",
      alt: "Yordamchi ishchilar ikoni - odamlar",
    },
    {
      icon: Home,
      title: "Uy-ofis xizmatkorlari",
      description: "Uy va ofislarni professional darajada tozalash va tartibga solish xizmatlari.",
      features: ["Professional tozalash", "Muntazam xizmat", "Eco-friendly mahsulotlar", "Ishonchli xodimlar"],
      color: "from-purple-500 to-purple-600",
      alt: "Uy-ofis xizmatkorlari ikoni - uy",
    },
    {
      icon: Zap,
      title: "Alpinistlar (oyna yuvish)",
      description: "Baland qavatli binolarning tashqi oynalarini xavfsiz va professional yuvish.",
      features: ["Eng yuqori xavfsizlik", "Zamonaviy asboblar", "Tajribali mutaxassislar", "Benuqson natija"],
      color: "from-cyan-500 to-cyan-600",
      alt: "Alpinistlar ikoni - chaqmoq",
    },
    {
      icon: Wrench, // Kaska.uz logotipida ham wrench bor, uni o'zgartirishni taklif qilaman, masalan, Hammer yoki Build
      title: "Demontajchilar",
      description: "Ob'ektlarni xavfsiz va tez buzish hamda demontaj qilish ishlari.",
      features: ["Xavfsiz buzish", "Maxsus asboblar", "Toza va tartibli ish", "Tezkor bajarish"],
      color: "from-red-500 to-red-600",
      alt: "Demontajchilar ikoni - kalit",
    },
    {
      icon: Zap, // Yuqoridagi Alpinistnikiga o'xshash, o'zgartirishni taklif qilaman, masalan, Settings or Circuit
      title: "Maishiy texnika ustalari",
      description: "Barcha turdagi maishiy texnikalarni tez va sifatli ta'mirlash.",
      features: ["Barcha brendlar", "Bepul diagnostika", "Original ehtiyot qismlar", "To'liq kafolat"],
      color: "from-yellow-500 to-orange-500",
      alt: "Maishiy texnika ustalari ikoni - chaqmoq",
    },
    {
      icon: Shield,
      title: "Dezinfektsiyachilar",
      description: "Uy va biznes ob'ektlarida professional dezinfektsiya va sanitariya xizmatlari.",
      features: ["Xavfsiz preparatlar", "To'liq qamrov", "Sertifikatlangan mutaxassislar", "Uzoq muddatli samaradorlik"],
      color: "from-teal-500 to-teal-600",
      alt: "Dezinfektsiyachilar ikoni - qalqon",
    },
    {
      icon: MapPin,
      title: "Yetkazib berish xizmati",
      description: "Bozorlik, restoran taomlari yoki rasm orqali buyurtmalarni tez yetkazish.",
      features: ["Tezkor yetkazish", "Rasm orqali buyurtma", "Ishonchli kuryerlar", "Qulay narxlar"],
      color: "from-indigo-500 to-indigo-600",
      alt: "Yetkazib berish xizmati ikoni - joylashuv belgisi",
    },
    {
      icon: Truck,
      title: "Yuk mashina va avtobuslar",
      description: "Har xil o'lchamdagi yuk va yo'lovchi tashish transport xizmatlari.",
      features: ["Keng avtopark", "Tajribali haydovchilar", "Hamyonbop narxlar", "24/7 xizmat"],
      color: "from-emerald-500 to-emerald-600",
      alt: "Yuk mashina va avtobuslar ikoni - yuk mashinasi",
    },
  ]

  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal()
    }

    if (isContactModalOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden" // Scrollni o'chiramiz
    } else {
      document.body.style.overflow = "unset" // Scrollni yoqamiz
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isContactModalOpen])

  return (
    <>
      <Head>
        <title>Kaska.uz Xizmatlari - Professional Ustalar, Ishchilar, Tozalash xizmati</title>
        <meta name="description" content="Kaska.uz barcha turdagi professional uy-ro'zg'or va biznes xizmatlarini taklif etadi: universal ustalar, yordamchi ishchilar, tozalash, dezinfeksiya, alpinistlar va boshqalar." />
        <meta name="keywords" content="xizmatlar, universal usta, yordamchi ishchi, uy tozalash, ofis tozalash, alpinistlar, oyna yuvish, demontaj, maishiy texnika ta'miri, dezinfeksiya, yetkazib berish, yuk tashish, O'zbekiston xizmatlari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="Kaska.uz Xizmatlari - Professional Ustalar, Ishchilar, Tozalash xizmati" />
        <meta property="og:description" content="Kaska.uz barcha turdagi professional uy-ro'zg'or va biznes xizmatlarini taklif etadi: universal ustalar, yordamchi ishchilar, tozalash, dezinfeksiya, alpinistlar va boshqalar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kaska.uz/services" />
        {/* <meta property="og:image" content="https://www.kaska.uz/og-image.jpg" /> */} {/* O'zingizning rasm URL'ingizni qo'ying */}
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kaska.uz Xizmatlari" />
        <meta name="twitter:description" content="Kaska.uz – Professional uy-ro'zg'or va biznes xizmatlari manzili." />
        {/* <meta name="twitter:image" content="https://www.kaska.uz/twitter-image.jpg" /> */} {/* O'zingizning rasm URL'ingizni qo'ying */}
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-gray-100 relative overflow-hidden">
        {/* Karta foniga subtle, abstract shakl-shamoillar qo'shish */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>


        {/* Header */}
        <header className="relative z-20 p-4 md:p-6 bg-slate-900/40 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <Link
              href="/"
              className="flex items-center text-white hover:text-blue-400 transition-colors duration-300 group"
              aria-label="Bosh sahifaga qaytish"
            >
              <ArrowLeft className="h-6 w-6 mr-2 group-hover:translate-x-[-4px] transition-transform duration-200" />
              <span className="text-lg font-semibold hidden sm:inline">Orqaga</span> {/* Kichik ekranlarda yashirish */}
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-center flex-grow">
              Bizning Xizmatlarimiz
            </h1>

            <Button
              onClick={openContactModal}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="Bog'lanish oynasini ochish"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              <span className="hidden sm:inline">Bog'lanish</span> {/* Kichik ekranlarda yashirish */}
            </Button>
          </div>
        </header>

        {/* Services Grid */}
        <main className="relative z-10 px-4 md:px-6 py-8 md:py-12">
          <section className="max-w-6xl mx-auto">
            <p className="text-center text-gray-300 text-lg md:text-xl mb-10 md:mb-16 max-w-2xl mx-auto leading-relaxed">
              Kaska.uz – bu sizning barcha uy-ro'zg'or va biznes ehtiyojlaringiz uchun bir darchadan xizmat. Biz sifat, ishonch va tezlikni kafolatlaymiz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="glass-effect border-0 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 cursor-pointer group animate-fadeIn"
                  style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "both" }}
                >
                  <CardContent className="p-6 md:p-8">
                    <div
                      className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-7 w-7 md:h-8 md:w-8 text-white" aria-label={service.alt} />
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h2>

                    <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-xs md:text-sm">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        {/* Global Styles for Animations and Glass Effect */}
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
            border-radius: 1rem; /* Buni Tailwind config'da ham sozlash mumkin */
          }
        `}</style>

        {/* Contact Modal (takrorlanish bo'lsa ham, hozircha shu yerda qoldirdik) */}
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