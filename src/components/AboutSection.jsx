import aboutGif from '../assets/ad8bfcdab0f7490450606b60643b9885fbb94a53.gif'

export default function AboutSection() {
  return (
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
  )
}

