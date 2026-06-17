import { useState } from 'react'
import mobileUiImg from './assets/mobile ui.svg'
import uxResearchImg from './assets/ux researches.svg'
import preDesignImg from './assets/pre design.png'
import websiteUiImg from './assets/Website ui.svg'
import facebookSvg from './assets/facebook.svg'
import twitterSvg from './assets/twitter.svg'
import linkedinSvg from './assets/linkedin.svg'
import worldSvg from './assets/world.svg'
import aboutGif from './assets/ad8bfcdab0f7490450606b60643b9885fbb94a53.gif'

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="w-full bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 text-white" style={{ backgroundColor: '#9A0EB033' }}>
        <nav className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
          <div
            className="text-2xl font-bold"
            style={{
              background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            wonde
          </div>
          <div className="flex gap-8">
            <a href="#contact" className="transition hover:opacity-80" style={{ color: '#000000' }}>
              Get in touch
            </a>
            <a href="#work" className="transition hover:opacity-80" style={{ color: '#000000' }}>
              Our work
            </a>
            <a href="#services" className="transition hover:opacity-80" style={{ color: '#000000' }}>
              Services
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-white bg-white" style={{ background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)' }}>
        <div className="grid items-center grid-cols-2 gap-12 px-4 mx-auto max-w-7xl">
          <div>
            <h1
              className="mb-4 font-bold"
              style={{
                width: 579,
                height: 210,
                opacity: 1,
                fontFamily: 'Roboto',
                fontSize: 52,
                fontWeight: 700,
                fontStyle: 'Bold',
                lineHeight: '70px',
                letterSpacing: '0%',
                background: '#ffffff',
                color: '#000000',
              }}
            >
              A UI UX Design Agency,
            </h1>
            <p
              className="mb-8 font-bold"
              style={{
                width: 579,
                height: 210,
                opacity: 1,
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: 48,
                lineHeight: '70px',
                letterSpacing: '0%',
                background: '#ffffff',
                color: '#000000',
              }}
            >
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                evolving
              </span>{' '}
              The way people interact with the digital world.
            </p>
            <button
              className="px-6 py-3 font-bold text-white transition rounded-lg hover:opacity-90"
              style={{
                background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
              }}
            >
              get in touch
            </button>
          </div>
          <img
            src="/UI-UX differences-pana 1.png"
            alt="UI/UX Design"
            className="object-cover w-full h-80 sm:h-96 rounded-2xl"
          />
        </div>
      </section>

      {/* Gradient divider between Hero and About Us */}
      <div className="flex justify-center">
        <div
          style={{
            width: 1280,
            height: 8,
            background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
            opacity: 1,
          }}
        />
      </div>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-purple-main">About Us</h2>
          <p
            className="mb-8 text-gray-600"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 600,
              fontStyle: 'SemiBold',
              fontSize: 32,
              leadingTrim: 'NONE',
              lineHeight: '50px',
              letterSpacing: '0%',
            }}
          >
            Grow Your Business<br />With Our Agency
          </p>

          <div className="grid items-center grid-cols-2 gap-12">
            <div className="leading-relaxed text-gray-700">
              <p
                style={{
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  fontStyle: 'Regular',
                  fontSize: 28,
                  leadingTrim: 'NONE',
                  lineHeight: '50px',
                  letterSpacing: '0%',
                }}
              >
                Our team live and breath UI UX, tackling design challenges with excitement. Our mission is to
                improve lives and businesses through our design decisions. With versatile experience across
                startups and industry giants, we offer outstanding services in multiple fields. When you partner
                up with us, you'll get a superhrain team of UI UX experts dedicated to knowledge sharing and
                creating a better world.
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={aboutGif}
                alt="About Us"
                className="block object-contain"
                style={{
                  width: '1440px',
                  height: '559px',
                  angle: '0deg',
                  opacity: 1,
                  display: 'block',
                  transform: 'rotate(0deg)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <h2 className="mb-4 text-4xl font-bold text-purple-main">Our Services</h2>

          <p
            className="mb-12 text-gray-600"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 40,
              lineHeight: '50px',
            }}
          >
            We Provide Best Quality Service
          </p>
        </div>

        <div
          className="w-full py-8"
          style={{
            background: 'linear-gradient(180deg, #9A0EB0 0%, #7B4FD7 100%)',
          }}
        >
          <div className="px-4 mx-auto max-w-7xl">
            <div className="flex items-start justify-between gap-6">
              {/* Card 1 */}
              <div
                className="p-6 text-center bg-white"
                style={{
                  width: '302px',
                  height: '387px',
                  borderRadius: '0 40px 0 40px',
                }}
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 overflow-hidden">
                  <img src={mobileUiImg} alt="mobile ui" className="object-cover w-full h-full" />
                </div>

                <h3
                  className="mb-2 font-bold text-center"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '50px',
                    textAlign: 'center',
                  }}
                >
                  mobile ui
                </h3>

                <p
                  className="mb-4 text-gray-600"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    letterSpacing: '0%',
                  }}
                >
                  fast,powerful & design what you want
                </p>

                <button
                  className="px-6 py-2 text-sm font-bold text-white transition rounded-full hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
                  }}
                >
                  read more
                </button>
              </div>

              {/* Card 2 */}
              <div
                className="p-6 mt-16 text-center bg-white"
                style={{
                  width: '302px',
                  height: '387px',
                  borderRadius: '0 40px 0 40px',
                }}
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 overflow-hidden">
                  <img src={uxResearchImg} alt="UX researches" className="object-cover w-full h-full" />
                </div>

                <h3
                  className="mb-2 font-bold text-center"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '50px',
                    textAlign: 'center',
                  }}
                >
                  ux researches
                </h3>

                <p
                  className="mb-4 text-gray-600"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    letterSpacing: '0%',
                  }}
                >
                  fast,powerful & design what you want
                </p>

                <button
                  className="px-6 py-2 text-sm font-bold text-white transition rounded-full hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
                  }}
                >
                  read more
                </button>
              </div>

              {/* Card 3 */}
              <div
                className="p-6 text-center bg-white"
                style={{
                  width: '302px',
                  height: '387px',
                  borderRadius: '0 40px 0 40px',
                }}
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 overflow-hidden">
                  <img src={preDesignImg} alt="pre design" className="object-cover w-full h-full" />
                </div>

                <h3
                  className="mb-2 font-bold text-center"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '50px',
                    textAlign: 'center',
                  }}
                >
                  pre design
                </h3>

                <p
                  className="mb-4 text-gray-600"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    letterSpacing: '0%',
                  }}
                >
                  fast,powerful & design what you want
                </p>

                <button
                  className="px-6 py-2 text-sm font-bold text-white transition rounded-full hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
                  }}
                >
                  read more
                </button>
              </div>

              {/* Card 4 */}
              <div
                className="p-6 mt-16 text-center bg-white"
                style={{
                  width: '302px',
                  height: '387px',
                  borderRadius: '0 40px 0 40px',
                }}
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 overflow-hidden">
                  <img src={websiteUiImg} alt="website ui" className="object-cover w-full h-full" />
                </div>

                <h3
                  className="mb-2 font-bold text-center"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '50px',
                    textAlign: 'center',
                  }}
                >
                  website ui
                </h3>

                <p
                  className="mb-4 text-gray-600"
                  style={{
                    fontFamily: 'Roboto',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '30px',
                    textAlign: 'center',
                    letterSpacing: '0%',
                  }}
                >
                  fast,powerful & design what you want
                </p>

                <button
                  className="px-6 py-2 text-sm font-bold text-white transition rounded-full hover:opacity-90"
                  style={{
                    background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)',
                  }}
                >
                  read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work">
        <div className="px-6 pt-20 pb-10 mx-auto max-w-7xl">
          <h2
            style={{
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: 'clamp(36px,6vw,48px)',
              lineHeight: '100%',
              color: '#8B2BC7',
            }}
          >
            Our Work
          </h2>

          <p
            className="mt-2"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              fontSize: 'clamp(22px,5vw,40px)',
              lineHeight: '125%',
              color: '#111111',
            }}
          >
            Some of our projects
          </p>
        </div>

        <div
          className="relative py-20 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #9A0EB0 0%, #7B4FD7 100%)',
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>

          <div className="relative z-10 px-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-24">
              {/* Project 1 */}
              <div className="w-full text-center">
                <div className="overflow-hidden rounded-2xl group">
                  <img
                    src="/cffca1244b96da11b2bcb39c3fb1ebe28806b1d8.jpg"
                    alt="responsive design of e-commerce website"
                    className="object-cover w-full h-auto mx-auto transition-transform duration-500 max-w-266 rounded-2xl group-hover:scale-105"
                  />
                </div>

                <div className="mt-8">
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 'clamp(22px,4vw,48px)',
                      lineHeight: '110%',
                    }}
                  >
                    responsive design of e-commerce website
                  </h3>

                  <p
                    className="mt-2 text-white"
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 'clamp(20px,4vw,48px)',
                    }}
                  >
                    (uniderma)
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="w-full text-center">
                <div className="overflow-hidden rounded-2xl group">
                  <img
                    src="/eb04af81e2cdc8d9cf14dfc95fbd616480218e4f.jpg"
                    alt="mobile application design"
                    className="object-cover w-full h-auto mx-auto transition-transform duration-500 max-w-266 rounded-2xl group-hover:scale-105"
                  />
                </div>

                <div className="mt-8">
                  <h3
                    className="text-white"
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 'clamp(22px,4vw,48px)',
                      lineHeight: '110%',
                    }}
                  >
                    mobile application design
                  </h3>

                  <p
                    className="mt-2 text-white"
                    style={{
                      fontFamily: 'Roboto',
                      fontWeight: 700,
                      fontSize: 'clamp(20px,4vw,48px)',
                    }}
                  >
                    (coffee)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 md:py-20 bg-[#F4F2F2]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-[#8B2BC7]">our team</h2>

          <p className="mt-3 mb-12 md:mb-20 font-bold text-lg sm:text-2xl md:text-[28px] text-black">
            they will do their best to achieve your goal
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:gap-x-10 md:gap-y-24">
            {[
              {
                name: 'Rahma Farahat',
                phone: '01111446852',
                email: 'Rahma1562@gamil.com',
                img: '/32d6f8da3e440e1c13d458667b40dd86058116b4.png',
              },
              {
                name: 'Alyaa',
                phone: '012008449871',
                email: 'Alyaa1456@gamil.com',
                img: '/8845184846d4fa15bea4766f4a91a9417ae70fc4.jpg',
              },
              {
                name: 'Aya Mahmoud',
                phone: '01062984510',
                email: 'Aya1025@gamil.com',
                img: '/bc90dfabb1488c739e7cf2d6e6238059cdc4e76f.png',
              },
              {
                name: 'Mostafa Abo Elmagd',
                phone: '01062984990',
                email: 'mostafa122@gamil.com',
                img: '/ffe915c90f6e3bf91653036f1ddbf8e9bd82d8bd.jpg',
              },
            ].map((person, i) => (
              <div key={i} className="relative pt-16 sm:pt-20">
                <img
                  src={person.img}
                  alt={person.name}
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-25 sm:w-30 md:w-32.5 h-32.5 sm:h-40 md:h-42.5 object-cover rounded-full"
                />

                <div
                  className="rounded-[20px] text-center text-white pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 px-4 min-h-75 sm:min-h-82.5"
                  style={{
                    background: 'linear-gradient(180deg,#A428C9 0%,#7D4AE4 100%)',
                  }}
                >
                  <h3 className="mb-3 text-lg font-bold sm:text-xl sm:mb-4">{person.name}</h3>

                  <p className="mb-3 text-base sm:text-lg sm:mb-5">Ui designer</p>

                  <p className="mb-3 text-base sm:text-lg sm:mb-4">{person.phone}</p>

                  <p className="text-base wrap-break-word sm:text-lg">{person.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#f5f3f3]">
        <div className="max-w-6xl px-4 mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8A2BE2] mb-10 md:mb-16">Drop your message</h2>

          <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-0">
            {/* Contact Card */}
            <div className="w-full lg:w-[320px] rounded-[30px] bg-linear-to-b from-[#A020C0] to-[#7B4CE2] text-white shadow-2xl px-6 sm:px-10 py-10 sm:py-14">
              <h3 className="mb-10 text-2xl font-light sm:text-3xl md:text-4xl">Contact Us</h3>

              <div className="space-y-8 sm:space-y-12">
                <p>📍 Dakahlia - Mansoura</p>
                <p>📧 Mostafa@gamil.com</p>
                <p>📞 +20 01212282246</p>
                <p>📞 +20 01556965665</p>
              </div>
            </div>

            {/* Form */}
            <div className="w-full bg-white rounded-[35px] shadow-lg py-10 sm:py-16 px-6 sm:px-10 lg:px-20">
              <div className="mx-auto max-w-125 lg:ml-auto">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8A2BE2] mb-3">Get in Touch</h3>

                <p className="mb-8 text-gray-400">Feel free to drop us a line below</p>

                <p onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="w-full h-12 sm:h-14 px-4 bg-[#f3f3f3] rounded-lg"
                    onChange={handleFormChange}
                    value={formData.name}
                  />

                  <input
                    name="email"
                    placeholder="Your Email"
                    className="w-full h-12 sm:h-14 px-4 bg-[#f3f3f3] rounded-lg"
                    onChange={handleFormChange}
                    value={formData.email}
                  />

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg"
                    onChange={handleFormChange}
                    value={formData.message}
                  />

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 text-white font-bold rounded-xl bg-linear-to-r from-[#A020C0] to-[#7B4CE2]"
                  >
                    SEND
                  </button>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

            <input
              name="name"
              placeholder="Your Name"
              className="w-full h-12 sm:h-14 px-4 bg-[#f3f3f3] rounded-lg"
              onChange={handleFormChange}
              value={formData.name}
            />

            <input
              name="email"
              placeholder="Your Email"
              className="w-full h-12 sm:h-14 px-4 bg-[#f3f3f3] rounded-lg"
              onChange={handleFormChange}
              value={formData.email}
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 bg-[#f3f3f3] rounded-lg"
              onChange={handleFormChange}
              value={formData.message}
            />

            <button
              type="submit"
className="w-full sm:w-auto px-10 py-3 text-white font-bold rounded-xl bg-linear-to-r from-[#A020C0] to-[#7B4CE2]"
            >
              SEND
            </button>

          </form>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
<footer className="py-12 text-white bg-linear-to-r from-purple-main to-purple-light">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="mb-4 font-bold">Follow us</h4>
              <div className="flex gap-4">
                <a href="#" className="transition hover:opacity-80" aria-label="Facebook">
                  <img src={facebookSvg} alt="Facebook" className="w-8 h-8" />
                </a>
                <a href="#" className="transition hover:opacity-80" aria-label="World">
                  <img src={worldSvg} alt="World" className="w-8 h-8" />
                </a>
                <a href="#" className="transition hover:opacity-80" aria-label="Twitter">
                  <img src={twitterSvg} alt="Twitter" className="w-8 h-8" />
                </a>
                <a href="#" className="transition hover:opacity-80" aria-label="LinkedIn">
                  <img src={linkedinSvg} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Call us 📞</h4>
              <p className="mb-2">01228246278</p>
              <p>01228246278</p>
            </div>

            <div>
              <h4 className="mb-4 font-bold">wonder 📍</h4>
              <p>Sponsored Developer Career</p>
            </div>

            <div></div>
          </div>

          <div className="pt-8 text-center border-t border-white border-opacity-30">
            <p
              className="mb-2"
              style={{
                background: 'linear-gradient(180deg, #9A0EB0 0%, #7B4FD7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 600,
              }}
            >
              Copyright wonder. All Rights Reserved ©
            </p>
            <p
              style={{
                background: 'linear-gradient(180deg, #9A0EB0 0%, #7B4FD7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 600,
              }}
            >
              Designed by Developer Career Team.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
