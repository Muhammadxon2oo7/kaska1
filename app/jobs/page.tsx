



"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Send, Users, Wrench, Clock, Heart, ShoppingBag, Phone, ExternalLink, Instagram, Facebook, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function JobsPage() {
  const jobChannels = [
    {
      title: "Ishchilar",
      handles: ["@Kaska_UZ", "@Kaska_premium"],
      description: "Umumiy ishchilar va premium xizmatlar",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Ustalar",
      handles: ["@Kaska_UZB"],
      description: "Professional ustalar va mutaxassislar",
      icon: Wrench,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Oylik ishchilar",
      handles: ["@Kaska_HR"],
      description: "Doimiy ish o'rinlari va HR xizmatlari",
      icon: Clock,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Ayollar uchun ishchilar",
      handles: ["@Kaska_women"],
      description: "Ayol ishchilar uchun maxsus imkoniyatlar",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      title: "Onlayn do'kon",
      handles: ["@KaskaMall"],
      description: "Mahsulotlar va aksessuarlar savdosi",
      icon: ShoppingBag,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  const benefits = [
    "Raqobatbardosh maosh",
    "Moslashuvchan ish vaqti",
    "Professional rivojlanish",
    "Jamoaviy muhit",
    "Bonuslar va mukofotlar",
    "Kafolatlangan to'lovlar",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fadeIn">
      {/* HEADER, CONTENT, AND MODAL REMAIN SAME */}
  {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center text-white hover:text-blue-400 transition-colors duration-300">
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Orqaga</span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Ish o'rinlari
          </h1>

          <Button
            onClick={openContactModal}
          
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Bog'lanish
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Users className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Bizga qo'shiling!</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Kaska.uz jamoasida ishlash imkoniyatini qo'ldan boy bermang. Turli sohalarda ish o'rinlari mavjud.
              Telegram kanallarimizga qo'shilib, eng so'nggi e'lonlardan xabardor bo'ling.
            </p>
          </div>

          {/* Job Channels */}
          <div>
            <h3 className="text-3xl font-bold text-center text-white mb-12">Rasmiy Telegram kanallarimiz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobChannels.map((channel, index) => (
                <Card
                  key={channel.title}
                  className="glass-effect border-0 hover:scale-105 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {channel.title}
                    </h4>

                    <p className="text-gray-400 mb-6 leading-relaxed">{channel.description}</p>

                    <div className="space-y-3">
                      {channel.handles.map((handle, idx) => (
                        <Link
                          key={idx}
                          href={`https://t.me/${handle.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group/link"
                        >
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                              <Send className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-blue-400 font-medium">{handle}</span>
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
          <div>
            <h3 className="text-3xl font-bold text-center text-white mb-12">Nima uchun biz bilan ishlash kerak?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="glass-effect border-0 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-white font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <Card className="glass-effect border-0">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Send className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Qanday qilib ishga kirish mumkin?</h3>
              <div className="max-w-3xl mx-auto space-y-6 text-left">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Telegram kanaliga qo'shiling</h4>
                    <p className="text-gray-300">Yuqoridagi kanallardan o'zingizga mos bo'lganini tanlab, qo'shiling</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ariza yuboring</h4>
                    <p className="text-gray-300">
                      Kanalda ko'rsatilgan yo'riqnoma bo'yicha o'zingiz haqingizda ma'lumot yuboring
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Suhbatga tayyorlaning</h4>
                    <p className="text-gray-300">
                      Bizning HR mutaxassislarimiz siz bilan bog'lanib, suhbat o'tkazadilar
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ishni boshlang</h4>
                    <p className="text-gray-300">
                      Muvaffaqiyatli o'tgan taqdirda, ishni boshlash va daromad olishni boshlaysiz
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for More Info */}
          <Card className="glass-effect border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Qo'shimcha savollar bormi?</h3>
              <p className="text-gray-300 mb-6">
                Ish o'rinlari haqida batafsil ma'lumot olish uchun biz bilan bog'laning
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+998901234567"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +998 90 123 45 67
                </Link>
                <Link
                  href="https://t.me/Kaska_UZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Telegram orqali
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
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
