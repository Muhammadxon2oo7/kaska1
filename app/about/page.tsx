"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Award, Users, Shield, Clock, Target, Heart, Zap, Phone, Instagram, Facebook, Send, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Sifat",
      description: "Har bir ishimizda yuqori sifatni kafolatlaymiz",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Ishonch",
      description: "Mijozlarimizning ishonchini oqlash - asosiy maqsadimiz",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Tezlik",
      description: "Vaqtni qadrlaymiz va tez xizmat ko'rsatamiz",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "G'amxo'rlik",
      description: "Har bir mijozga individual yondashuv",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const stats = [
    { number: "8+", label: "Yillik tajriba" },
    { number: "5000+", label: "Mijoz" },
    { number: "10000+", label: "Bajarilgan ish" },
    { number: "4.9", label: "Reyting" },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center text-white hover:text-blue-400 transition-colors duration-300">
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">Orqaga</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Biz haqimizda
          </h1>
          <Button
            onClick={openContactModal}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Bog'lanish
          </Button>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center animate-fadeIn" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Target className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sizning ishonchli hamkoringiz</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              2016 yildan beri O'zbekistonda professional xizmatlar ko'rsatib kelmoqdamiz...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, index) => (
              <Card
                key={index}
                className="glass-effect border-0 animate-fadeIn"
                style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: "both" }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${index === 0 ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gradient-to-r from-purple-500 to-pink-500"} rounded-2xl flex items-center justify-center mb-6`}>
                    {index === 0 ? <Target className="h-8 w-8 text-white" /> : <Heart className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {index === 0 ? "Bizning missiyamiz" : "Bizning ko'zlangan maqsadimiz"}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {index === 0
                      ? "Har bir mijozga professional, tez va ishonchli xizmat ko'rsatish..."
                      : "O'zbekistonda eng yaxshi professional xizmatlar kompaniyasi bo'lish..."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="animate-fadeIn" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            <h3 className="text-3xl font-bold text-center text-white mb-12">Bizning qadriyatlarimiz</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  className="glass-effect border-0 hover:scale-105 transition-all duration-300 text-center animate-fadeIn"
                  style={{ animationDelay: `${0.7 + index * 0.1}s`, animationFillMode: "both" }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center animate-fadeIn" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
            <h3 className="text-3xl font-bold text-white mb-12">Bizning yutuqlarimiz</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${1.3 + index * 0.1}s`, animationFillMode: "both" }}>
                  <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-400 text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="glass-effect border-0 animate-fadeIn" style={{ animationDelay: "1.7s", animationFillMode: "both" }}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Professional jamoa</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Bizning jamoamiz tajribali mutaxassislardan iborat...
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[{ icon: Clock, label: "24/7 qo'llab-quvvatlash" }, { icon: Shield, label: "Kafolat beriladi" }, { icon: Award, label: "Sertifikatlangan" }].map((item, i) => (
                  <div key={i} className="px-4 py-2 bg-white/10 rounded-full text-gray-300 flex items-center">
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeContactModal}></div>
          {/* Modal content unchanged */}
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  )
}
