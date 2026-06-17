import heroImg from '../assets/UI-UX differences-pana 1.png'

export default function Hero() {
  return (
    <section
      className="py-20 text-white bg-white"
      style={{ background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 100%)' }}
    >
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
            style={{ background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)' }}
          >
            get in touch
          </button>
        </div>
        <img
          src={heroImg}
          alt="UI/UX Design"
          className="object-cover w-full h-80 sm:h-96 rounded-2xl"
        />
      </div>
    </section>
  )
}

