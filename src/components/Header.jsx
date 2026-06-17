export default function Header() {
  return (
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
  )
}

