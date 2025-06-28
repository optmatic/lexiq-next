"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe, ArrowRight, Zap, Shield, Target } from "lucide-react";
import Link from "next/link";
import { Inter, Crimson_Text } from "next/font/google";
import { SearchBar } from "@/components/search-bar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
});

export default function LexiqLanding() {
  return (
    <div
      className={`${inter.variable} ${crimson.variable} min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900`}
    >
      <style jsx global>{`
        body {
          font-family: var(--font-inter), system-ui, sans-serif;
        }

        .font-heading {
          font-family: var(--font-crimson), Georgia, serif;
        }

        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(163, 230, 53, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(163, 230, 53, 0.7);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom gradient text animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      {/* Navigation
      <nav className="border-b border-black/20 backdrop-blur-sm bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-lg flex items-center justify-center border-2 border-black">
                <BookOpen className="w-4 h-4 text-black" />
              </div>
              <span className="text-2xl font-bold text-white font-heading">
                Lexiq
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#features"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#categories"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                Categories
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-lime-400 transition-colors"
              >
                About
              </Link>
              <Button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 to-emerald-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-lime-400/20 text-lime-400 border-lime-400/30 hover:bg-lime-400/30">
              <Zap className="w-3 h-3 mr-1" />
              Politics, Decoded
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-heading">
              Your Modern
              <br />
              <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                Political Lexicon
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Cut through the political noise with clear, unbiased definitions
              of contemporary terms. Multiple perspectives, real-world context,
              and the clarity you need to understand today&apos;s political
              landscape.
            </p>
            {/* Search Bar
            <SearchBar /> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="hover:cursor-pointer bg-lime-400 hover:bg-lime-500 text-black font-semibold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  Start Exploring
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              {/* <Button className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent">
                Watch Demo
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-transparent to-black/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
              Why Choose Lexiq?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re not just another dictionary. We&apos;re your guide
              through the complex world of modern politics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-2 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:shadow-[6px_6px_0px_0px_rgba(163,230,53,0.3)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-black">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Multiple Perspectives
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every term includes diverse viewpoints - mainstream,
                  alternative, and international perspectives to give you the
                  full picture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-2 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:shadow-[6px_6px_0px_0px_rgba(163,230,53,0.3)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-black">
                  <Globe className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Global Context
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Real-world examples from the US, UK, Australia, and beyond.
                  Understand how political concepts play out across different
                  nations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-2 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:shadow-[6px_6px_0px_0px_rgba(163,230,53,0.3)]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border-2 border-black">
                  <Shield className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading">
                  Unbiased & Clear
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Cut through partisan spin with neutral, fact-based definitions
                  that respect the complexity of political discourse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through organized sections of political terminology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Domestic Politics",
                count: "150+ terms",
                color: "from-lime-400 to-emerald-500",
              },
              {
                name: "International Relations",
                count: "120+ terms",
                color: "from-emerald-400 to-teal-500",
              },
              {
                name: "Social Movements",
                count: "80+ terms",
                color: "from-teal-400 to-cyan-500",
              },
              {
                name: "Institutions",
                count: "90+ terms",
                color: "from-cyan-400 to-blue-500",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="bg-white/5 border-2 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group hover:shadow-[6px_6px_0px_0px_rgba(163,230,53,0.3)]"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 border-2 border-black group-hover:scale-110 transition-transform`}
                  >
                    <BookOpen className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-400/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Decode Politics?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of informed citizens, students, and professionals who
            trust Lexiq for clear political understanding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Start Exploring
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-lg flex items-center justify-center border-2 border-black">
                  <BookOpen className="w-4 h-4 text-black" />
                </div>
                <span className="text-2xl font-bold text-white font-heading">
                  Lexiq
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your modern political lexicon. Clear definitions for complex
                politics, one term at a time.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Browse Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Recent Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Submit Term
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-lime-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Lexiq. All rights reserved.
              Decoding politics, one term at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
