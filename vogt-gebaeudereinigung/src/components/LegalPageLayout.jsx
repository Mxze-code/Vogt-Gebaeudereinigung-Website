import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/**
 * Gemeinsames Layout für Impressum & Datenschutz: Navbar, ruhiger Lesefluss, Footer.
 */
export default function LegalPageLayout({ title, children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black pt-28 pb-6 md:pt-32">
        <div className="mx-auto max-w-2xl px-4 py-12 md:px-8 md:py-16 lg:max-w-3xl">
          <h1 className="mb-10 font-montserrat text-2xl font-bold tracking-tight text-brand-silverLL md:mb-12 md:text-3xl">
            {title}
          </h1>
          <div
            className={[
              'text-brand-silver/90',
              '[&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:font-montserrat [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-brand-silverL md:[&_h2]:text-xl',
              '[&_h2:first-of-type]:mt-0 [&_h2:first-of-type]:pt-0',
              '[&_h3]:mb-2 [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-brand-silverLL',
              '[&_p]:mb-4 [&_p]:text-[0.9375rem] [&_p]:leading-relaxed md:[&_p]:text-base',
              '[&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-[0.9375rem] [&_ul]:leading-relaxed md:[&_ul]:text-base',
              '[&_li]:mb-2 [&_li]:text-brand-silver/90',
              '[&_a]:text-brand-blueLight [&_a]:underline [&_a]:underline-offset-2 [&_a]:transition-colors hover:[&_a]:text-brand-silverLL',
            ].join(' ')}
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
