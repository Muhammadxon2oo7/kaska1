"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Send, Facebook, Instagram, X, Wrench, Users, BarChart3, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Particle System Component
function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? "#3b82f6" : "#8b5cf6",
      })
    }

    function animate() {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()
      })

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = "#3b82f6"
            ctx.globalAlpha = ((100 - distance) / 100) * 0.1
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}

const navigationCards = [
  {
    id: "services",
    title: "Xizmatlar",
    subtitle: "Professional yechimlar",
    icon: Wrench,
    gradient: "from-blue-500 to-cyan-500",
    href: "/services",
  },
  {
    id: "about",
    title: "Biz haqimizda",
    subtitle: "Bizning hikoyamiz",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
    href: "/about",
  },
  {
    id: "stats",
    title: "Statistikalar",
    subtitle: "Bizning yutuqlarimiz",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
    href: "/stats",
  },
  {
    id: "jobs",
    title: "Ish o'rinlari",
    subtitle: "Bizga qo'shiling",
    icon: Users,
    gradient: "from-orange-500 to-red-500",
    href: "/jobs",
  },
]

export default function KaskaDigitalLanding() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out forwards;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-hover-effect {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover-effect:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Background Effects */}
      <ParticleSystem />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-glow">
              <Sparkles className="h-10 w-10 text-white animate-float" />
             
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 mb-4">
              Kaska.uz
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Kelajakdagi professional xizmatlar
            </p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full mb-16">
          {navigationCards.map((card, index) => (
            <Card
              key={card.id}
              className="glass-effect border-0 card-hover-effect cursor-pointer group animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => (window.location.href = card.href)}
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${card.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {card.subtitle}
                </p>

                <div className="flex items-center justify-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm mr-2">Ko'rish</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Button */}
        <div className="animate-slideUp" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={openContactModal}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <Phone className="mr-3 h-6 w-6" />
            Bog'lanish
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        </div>
        <div
          className="absolute top-40 right-20 animate-float opacity-30"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-40 left-1/4 animate-float opacity-30"
          style={{ animationDelay: "4s" }}
        >
          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>

      {/* Contact Modal */}
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
  );
}
