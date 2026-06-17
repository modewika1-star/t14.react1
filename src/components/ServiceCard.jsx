export default function ServiceCard({ imageSrc, imageAlt, title, description, buttonText }) {
  return (
    <div
      className="p-6 text-center bg-white"
      style={{
        width: '302px',
        height: '387px',
        borderRadius: '0 40px 0 40px',
      }}
    >
      <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="object-cover w-full h-full" />
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
        {title}
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
        {description}
      </p>

      <button
        className="px-6 py-2 text-sm font-bold text-white transition rounded-full hover:opacity-90"
        style={{ background: 'linear-gradient(90deg, #9A0EB0 0%, #7B4FD7 100%)' }}
      >
        {buttonText}
      </button>
    </div>
  )
}

