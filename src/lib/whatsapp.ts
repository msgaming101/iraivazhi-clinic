import { CLINIC } from "./i18n";

export const WA_NUMBER = CLINIC.phoneIntl.replace(/\D/g, ""); // "919840251755"

export const WA_DEFAULT_MSG =
  "Hello, I would like to book an appointment at Iraivazhi Acupuncture & Varmam.";

export function waLink(message: string = WA_DEFAULT_MSG) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
