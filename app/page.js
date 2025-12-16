// app/landing/page.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const features = [
    {
      icon: "💰",
      title: "Tracking Pendapatan",
      description: "Pantau pendapatan terapis per hari, per bulan, dan per individu"
    },
    {
      icon: "📊",
      title: "Laporan Detail",
      description: "Generate laporan lengkap dengan analisis per terapis dan per bulan"
    },
    {
      icon: "📄",
      title: "Export PDF",
      description: "Ekspor laporan ke format PDF untuk dokumentasi dan presentasi"
    },
    {
      icon: "💾",
      title: "Penyimpanan Aman",
      description: "Data tersimpan permanen di database dan localStorage"
    },
    {
      icon: "⚡",
      title: "Real-time Update",
      description: "Update data secara real-time tanpa perlu refresh halaman"
    },
    {
      icon: "📱",
      title: "Responsif",
      description: "Akses dari berbagai perangkat: desktop, tablet, dan mobile"
    }
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner Spa & Salon",
      text: "Sistem ini sangat membantu mengelola pendapatan terapis kami. Laporan PDF-nya profesional untuk klien."
    },
    {
      name: "Sari Dewi",
      role: "Manager Beauty Clinic",
      text: "Komisi 2% otomatis terhitung, sangat praktis! Interface-nya juga user-friendly."
    },
    {
      name: "Rudi Hartono",
      role: "Terapis Senior",
      text: "Mudah melacak pendapatan per bulan. Fitur export PDF sangat membantu untuk arsip."
    }
  ];

  const handleGetStarted = () => {
    setIsLoading(true);
    router.push("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-lg">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">TerapisReport</h1>
                <p className="text-xs text-gray-500">Sistem Manajemen Pendapatan</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition duration-300"
              >
                Login
              </Link>
              <button
                onClick={handleGetStarted}
                disabled={isLoading}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Loading...
                  </>
                ) : (
                  <>
                    <span>🚀</span>
                    Get Started
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span>✨</span>
              Solusi Digital untuk Manajemen Terapis
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Kelola Pendapatan Terapis
              </span>
              <br />
              <span className="text-gray-700">Lebih Mudah & Efisien</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Sistem manajemen pendapatan terapis profesional dengan laporan detail, 
              perhitungan komisi otomatis 2%, dan export PDF dalam satu platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={handleGetStarted}
              disabled={isLoading}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-xl hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span className="text-xl">🚀</span>
              Mulai Sekarang 
            </button>
          </div>

          {/* Hero Image/Preview */}
          <div className="relative mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-2xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left - Total Card Preview */}
                <div className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-xl border border-indigo-100 shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Pendapatan</h3>
                    <p className="text-3xl font-bold text-indigo-600">Rp 24.580.000</p>
                    <p className="text-sm text-gray-500 mt-1">Komisi 2%: Rp 491.600</p>
                  </div>
                  <div className="h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg animate-pulse"></div>
                </div>
                
                {/* Right - Table Preview */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-gray-800">Laporan Terapis</h3>
                    <div className="flex gap-2">
                      <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-20 h-6 bg-indigo-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full animate-pulse"></div>
                          <div>
                            <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-16 h-3 bg-gray-100 rounded mt-1 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                          <div className="w-16 h-3 bg-green-100 rounded mt-1 animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded-lg">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">TerapisReport</h2>
                  <p className="text-gray-400 text-sm">Sistem Manajemen Pendapatan</p>
                </div>
              </div>
              <p className="text-gray-400 max-w-md">
                Platform manajemen pendapatan terapis terintegrasi dengan fitur 
                laporan detail, komisi otomatis, dan export PDF profesional.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Menu</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                  <li><Link href="/login" className="text-gray-400 hover:text-white transition">Login</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">Documentation</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TerapisReport. All rights reserved.</p>
            <p className="text-sm mt-2">Made with ❤️ for better terapis management</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;