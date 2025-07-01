"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Wrench, Users, Home, Zap, Shield, MapPin, Truck, Phone, Facebook, Instagram, Send, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Universal ustalar",
      description: "Har qanday uy-ro'zg'or ishlarini bajaruvchi tajribali ustalar",
      features: ["Kichik ta'mir", "Katta loyihalar", "Sifatli materiallar", "Kafolat"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Yordamchi ishchilar",
      description: "Har xil ish turlarida yordam beruvchi ishchilar",
      features: ["Tez xizmat", "Sifatli ish", "Tajribali jamoa", "Arzon narx"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      title: "Uy-ofis xizmatkorlari",
      description: "Uy va ofislarni tozalash, tartibga solish xizmatlari",
      features: ["Professional tozalash", "Muntazam xizmat", "Eco-friendly", "Ishonchli"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Alpinistlar (oyna yuvish)",
      description: "Baland binolarning oynalarini yuvish xizmatlari",
      features: ["Xavfsizlik", "Professional asboblar", "Tajribali mutaxassislar", "Sifatli natija"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Wrench,
      title: "Demontajchilar",
      description: "Xavfsiz buzish va demontaj ishlari",
      features: ["Xavfsiz buzish", "Professional asboblar", "Toza ish", "Tez bajarish"],
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Maishiy texnika ustalari",
      description: "Barcha turdagi maishiy texnikalarni ta'mirlash",
      features: ["Barcha brendlar", "Tez diagnostika", "Sifatli ehtiyot qismlar", "Kafolat"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Dezinfektsiyachilar",
      description: "Professional dezinfektsiya va sanitariya xizmatlari",
      features: ["Xavfsiz preparatlar", "To'liq dezinfektsiya", "Sertifikatlangan", "Samarali"],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: MapPin,
      title: "Yetkazib berish xizmati",
      description: "Bozorlik yoki rasm orqali buyurtma berish xizmatlari",
      features: ["Tez yetkazish", "Rasm orqali buyurtma", "Ishonchli", "Qulay narx"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Truck,
      title: "Yuk mashina va avtobuslar",
      description: "Har xil o'lchamdagi transport xizmatlari",
      features: ["Har xil o'lcham", "Ishonchli haydovchilar", "Arzon narx", "24/7 xizmat"],
      color: "from-emerald-500 to-emerald-600",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center text-white hover:text-blue-400 transition-colors duration-300">
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Orqaga</span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Xizmatlar
          </h1>

          <Button 
            onClick={openContactModal}
           className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Bog'lanish
          </Button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-effect border-0 hover:scale-105 transition-all duration-300 cursor-pointer group animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
       {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeContactModal}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md mx-auto glass-effect rounded-3xl overflow-hidden shadow-2xl animate-modalSlideIn">
            {/* Close Button */}
            <button
              onClick={closeContactModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="p-8 text-center border-b border-white/10">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Bog'lanish</h3>
              <p className="text-gray-400">Biz bilan aloqaga chiqing</p>
            </div>

            {/* Contact Options */}
            <div className="p-8 space-y-6">
              {/* Phone */}
              <Link
                href="tel:+998901234567"
                className="flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
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
                className="flex items-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
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
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook className="h-6 w-6 text-white" />
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
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
  )
}
