"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, Users, CheckCircle, Star, Award, Clock, Target, Phone, Facebook, Instagram, Send, X } from "lucide-react"
import Link from "next/link"

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  isVisible = false,
}: {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  isVisible?: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Intersection Observer Hook
function useIntersectionObserver(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isVisible] as const
}

export default function StatsPage() {
  const [statsRef, statsVisible] = useIntersectionObserver(0.3)

  const mainStats = [
    {
      icon: CheckCircle,
      number: 10000,
      suffix: "+",
      title: "Bajarilgan xizmat",
      description: "Muvaffaqiyatli yakunlangan loyihalar",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      number: 5000,
      suffix: "+",
      title: "Mijoz",
      description: "Bizga ishongan va qaytgan mijozlar",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Star,
      number: 4.9,
      suffix: "/5",
      title: "Reyting",
      description: "Mijozlar tomonidan berilgan o'rtacha baho",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      number: 8,
      suffix: "",
      title: "Yillik tajriba",
      description: "Professional xizmat ko'rsatish tajribasi",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const additionalStats = [
    { label: "Oylik yangi mijozlar", value: "500+", icon: TrendingUp },
    { label: "O'rtacha javob vaqti", value: "15 daqiqa", icon: Clock },
    { label: "Mijozlar mamnunligi", value: "98%", icon: Target },
    { label: "Qayta murojaat qilish", value: "85%", icon: Users },
  ]

  const achievements = [
    {
      year: "2016",
      title: "Kompaniya tashkil etildi",
      description: "Kichik jamoa bilan professional xizmatlar ko'rsatishni boshladik",
    },
    {
      year: "2018",
      title: "1000+ mijoz",
      description: "Birinchi mingta mijozimizga xizmat ko'rsatdik",
    },
    {
      year: "2020",
      title: "Raqamli platforma",
      description: "Telegram orqali xizmat ko'rsatish tizimini ishga tushirdik",
    },
    {
      year: "2022",
      title: "5000+ mijoz",
      description: "Mijozlar sonini 5 mingga yetkazdik",
    },
    {
      year: "2024",
      title: "Yetakchi kompaniya",
      description: "O'zbekistonda eng yaxshi professional xizmatlar kompaniyasi",
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
            Statistikalar
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
          {/* Hero Stats */}
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainStats.map((stat, index) => (
              <Card
                key={stat.title}
                className="glass-effect border-0 hover:scale-105 transition-all duration-300 text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} isVisible={statsVisible} duration={2500} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Stats */}
          <div>
            <h2 className="text-3xl font-bold text-center text-white mb-12">Qo'shimcha ko'rsatkichlar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalStats.map((stat, index) => (
                <Card key={stat.label} className="glass-effect border-0 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-center text-white mb-12">Bizning yo'limiz</h2>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.year}
                  className="glass-effect border-0 hover:scale-[1.02] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{achievement.year}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-3">{achievement.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Growth Chart Placeholder */}
          <Card className="glass-effect border-0">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Doimiy o'sish</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Har yili mijozlar soni va xizmat sifati ortib bormoqda. Bizning maqsadimiz - har doim eng yaxshi
                natijalarni ko'rsatish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">+150%</div>
                  <p className="text-gray-400">Mijozlar o'sishi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">+200%</div>
                  <p className="text-gray-400">Xizmatlar hajmi</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">+180%</div>
                  <p className="text-gray-400">Jamoa o'sishi</p>
                </div>
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
