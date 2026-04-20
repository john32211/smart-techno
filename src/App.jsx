import React, { useState } from "react";

export default function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: "What age groups are suitable for each track?",
      a: "Robotics & AI: Ages 8-15 | Game Development: Ages 6-12 | STEAMPark: Ages 6-10. We provide age-appropriate projects in each track."
    },
    {
      q: "Do kids need prior coding experience?",
      a: "No! All our courses are beginner-friendly. We start from scratch and guide kids step-by-step."
    },
    {
      q: "What's the instructor-to-student ratio?",
      a: "We maintain a 1:6 ratio to ensure personalized attention and quality learning for every child."
    },
    {
      q: "Will my child get a certificate?",
      a: "Yes! Every student receives a completion certificate and a portfolio of projects they built."
    },
    {
      q: "Can I see what kids build?",
      a: "Absolutely! We share project photos and videos weekly with parents. Gallery videos available on request."
    }
  ];

  const tracks = [
    {
      icon: "🤖",
      title: "Robotics & AI",
      subtitle: "Ages 8-15",
      description: "Build real robots with Arduino, sensors, and motors. Learn about AI and automation through hands-on projects.",
      highlights: ["Arduino Programming", "Sensor Integration", "Real Robot Projects", "AI Basics"]
    },
    {
      icon: "🎮",
      title: "Game Development",
      subtitle: "Ages 6-12",
      description: "Create your own games using Scratch-style platforms and game engines. Learn logic and problem-solving through game creation.",
      highlights: ["Game Logic", "Visual Coding", "Asset Creation", "Player Mechanics"]
    },
    {
      icon: "🎢",
      title: "STEAMPark",
      subtitle: "Ages 6-10",
      description: "Fun engineering activities combining science, tech, engineering & art. Perfect introduction to STEM for younger kids.",
      highlights: ["Building Projects", "Creative Design", "Physics Concepts", "Team Challenges"]
    }
  ];

  const benefits = [
    { emoji: "🧠", text: "Future-Ready Skills", subtext: "Essential tech skills for the digital age" },
    { emoji: "🎯", text: "Problem Solving", subtext: "Learn to think logically and creatively" },
    { emoji: "🤝", text: "Social Development", subtext: "Collaborate with peers and build teamwork" },
    { emoji: "🏆", text: "Confidence Boost", subtext: "Build real projects kids can be proud of" }
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "Parent", text: "My son went from playing games to creating his own. The instructors are amazing!" },
    { name: "Rahul Verma", role: "Parent", text: "Best investment in my child's summer. She learned so much and made great friends." },
    { name: "Anjali Patel", role: "Parent", text: "Professional environment, caring teachers, real projects. Highly recommended!" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Smart Techno Students" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg" />
            <h1 className="text-base sm:text-xl font-bold text-gray-900">Smart Techno</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#tracks" className="text-gray-600 hover:text-blue-600 transition">Tracks</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition">FAQ</a>
          </div>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition">
            Register
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <div className="mt-16 sm:mt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white pt-12 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
                Turn Your Child Into a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tech Creator</span>
              </h1>

              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-lg">
                This summer, your child learns Robotics, AI & Game Development from industry experts. Build real projects. Make real impact.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:shadow-lg transition text-base sm:text-lg">
                  Enroll Now
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-base sm:text-lg">
                  View Curriculum
                </button>
              </div>

              <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
                ⏰ Early bird discount: 20% off | Limited to 60 students
              </p>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
                <div className="text-5xl sm:text-6xl mb-6">👶 👧 🧒</div>
                <p className="text-lg mb-4 font-semibold">Ages 6-15</p>
                <p className="mb-6">Beginner to intermediate level</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">✓ No prior experience needed</div>
                  <div className="flex items-center gap-2">✓ Certificate on completion</div>
                  <div className="flex items-center gap-2">✓ 1:6 instructor ratio</div>
                  <div className="flex items-center gap-2">✓ Real projects portfolio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BENEFITS SECTION ===== */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Why Parents Choose Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{benefit.emoji}</div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{benefit.text}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{benefit.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TRACKS SECTION ===== */}
      <div id="tracks" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Our Tracks</h2>
          <p className="text-center text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Choose the perfect track for your child's interest and age group
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tracks.map((track, i) => (
              <div key={i} className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-8 hover:shadow-xl hover:border-blue-400 transition">
                <div className="text-5xl sm:text-6xl mb-3">{track.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{track.title}</h3>
                <p className="text-blue-600 font-semibold mb-4 text-sm sm:text-base">{track.subtitle}</p>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{track.description}</p>

                <div className="border-t pt-6">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-3">What they learn:</p>
                  <ul className="space-y-2">
                    {track.highlights.map((h, j) => (
                      <li key={j} className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:shadow-lg transition">
                  Explore {track.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div id="about" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">About Smart Techno Students</h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Why We're Different</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">👨‍🏫 Expert Instructors</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Industry professionals who are passionate about teaching kids</p>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">🛠️ Hands-On Learning</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Real robots, real coding, real projects - not just theory</p>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">🎓 Certified Programs</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Structured curriculum with completion certificates</p>
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">📊 Progress Tracking</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Weekly parent updates and project portfolio for every child</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-blue-600">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                  <p className="text-gray-600 text-sm">Students trained</p>
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-purple-600">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">4.9/5</div>
                  <p className="text-gray-600 text-sm">Parent satisfaction rating</p>
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-green-600">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">3</div>
                  <p className="text-gray-600 text-sm">Specialized tracks offered</p>
                </div>
                <div className="bg-white p-5 sm:p-6 rounded-xl border-l-4 border-yellow-600">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-600">1:6</div>
                  <p className="text-gray-600 text-sm">Instructor-to-student ratio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TESTIMONIALS ===== */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">What Parents Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-5 sm:p-8 rounded-xl border border-gray-200">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-lg sm:text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-sm sm:text-base">"{t.text}"</p>
                <p className="font-bold text-gray-900 text-sm sm:text-base">{t.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FAQ SECTION ===== */}
      <div id="faq" className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full p-4 sm:p-6 flex justify-between items-start sm:items-center hover:bg-gray-50 transition text-left gap-4"
                >
                  <h3 className="font-bold text-base sm:text-lg text-gray-900">{faq.q}</h3>
                  <span className={`text-xl sm:text-2xl transition flex-shrink-0 ${openFAQ === i ? "rotate-180" : ""}`}>▼</span>
                </button>
                {openFAQ === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to Give Your Child an Amazing Summer?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90">
            Limited seats available | Early bird discount: 20% off
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:shadow-lg transition">
              Register Now
            </button>
            <a href="https://wa.me/919999999999" className="bg-green-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-green-600 transition flex items-center justify-center gap-2">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold mb-4 text-sm sm:text-base">Smart Techno Students</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Building the tech leaders of tomorrow</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li><a href="#tracks" className="hover:text-white">Tracks</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Contact</h4>
            <p className="text-gray-400 text-xs sm:text-sm">Email: hello@smarttechno.com</p>
            <p className="text-gray-400 text-xs sm:text-sm">Phone: +20 1204633338</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4 text-gray-400 text-xs sm:text-sm">
              <a href="https://www.facebook.com/STSEGYPTO/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/smart.techno.students/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://www.tiktok.com/@smarttechnostudents" target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; 2024 Smart Techno Students. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}