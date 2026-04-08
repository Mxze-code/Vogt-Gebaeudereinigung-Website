/** Zentrale Kontakt-E-Mail (Impressum, Formular, Footer) */
export const CONTACT_EMAIL = 'Info@vogt-reinigung.de'
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

/** Telefon nur für Anrufe (Festnetz / Rufnummer) */
export const PHONE_CALL_TEL = 'tel:+4972327321032'
export const PHONE_CALL_DISPLAY = '+49 7232 7321032'

/** WhatsApp ausschließlich über wa.me – nicht als tel: verwenden */
export const WHATSAPP_E164 = '4917663356310'
export const WHATSAPP_DISPLAY = '+49 176 63356310'

const WHATSAPP_PREFILL =
  'Hallo, ich interessiere mich für Ihre Gebäudereinigungsleistungen.'

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`
