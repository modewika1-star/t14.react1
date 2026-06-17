import ServiceCard from './ServiceCard'
import mobileUiImg from '../assets/mobile ui.svg'
import uxResearchImg from '../assets/ux researches.svg'
import preDesignImg from '../assets/pre design.png'
import websiteUiImg from '../assets/Website ui.svg'

export default function ServicesSection() {
  return (
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
        style={{ background: 'linear-gradient(180deg, #9A0EB0 0%, #7B4FD7 100%)' }}
      >
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex items-start justify-between gap-6">
            <div>
              <ServiceCard
                imageSrc={mobileUiImg}
                imageAlt="mobile ui"
                title="mobile ui"
                description="fast,powerful & design what you want"
                buttonText="read more"
              />
            </div>

            <div className="mt-16">
              <ServiceCard
                imageSrc={uxResearchImg}
                imageAlt="UX researches"
                title="ux researches"
                description="fast,powerful & design what you want"
                buttonText="read more"
              />
            </div>

            <div>
              <ServiceCard
                imageSrc={preDesignImg}
                imageAlt="pre design"
                title="pre design"
                description="fast,powerful & design what you want"
                buttonText="read more"
              />
            </div>

            <div className="mt-16">
              <ServiceCard
                imageSrc={websiteUiImg}
                imageAlt="website ui"
                title="website ui"
                description="fast,powerful & design what you want"
                buttonText="read more"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

