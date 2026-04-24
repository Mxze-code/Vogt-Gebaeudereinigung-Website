import LegalPageLayout from '@/components/LegalPageLayout'
import { CONTACT_EMAIL, CONTACT_MAILTO } from '@/constants/contact'

export const metadata = {
  title: 'Impressum – Vogt Gebäudereinigung | vogt-reinigung.de',
  description:
    'Impressum und Anbieterkennzeichnung von Vogt Gebäudereinigung (vogt-reinigung.de), Bretten.',
}

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p>
        Keanu Vogt
        <br />
        Vogt Gebäudereinigung
        <br />
        Weißhoferstr. 62/1
        <br />
        75015 Bretten
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon:{' '}
        <a href="tel:+4972327321032">+49 7232 7321032</a>
        <br />
        E-Mail:{' '}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        Steuernummer folgt
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>
        Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/2065)
      </h2>
      <p>
        Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie
        folgt:
      </p>
      <p>
        E-Mail:{' '}
        <a href={CONTACT_MAILTO}>{CONTACT_EMAIL}</a>
        <br />
        Telefon:{' '}
        <a href="tel:+4972327321032">+49 7232 7321032</a>
      </p>
      <p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>
    </LegalPageLayout>
  )
}
