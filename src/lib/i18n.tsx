import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ta";

type TranslationValue = {
  en: string;
  ta: string;
};

type Dict = Record<string, TranslationValue>;

export const dict: Dict = {
  brand: { en: "Iraivazhi Acupuncture & Varmam", ta: "இறைவழி அக்குபஞ்சர் & வர்மம்" },
  tagline: { en: "Natural Healing Through Acupuncture & Varmam", ta: "அக்குபஞ்சர் மற்றும் வர்ம சிகிச்சை மூலம் இயற்கை குணமாக்கல்" },
  nav_home: { en: "Home", ta: "முகப்பு" },
  nav_about: { en: "About", ta: "மருத்துவர்" },
  nav_treatments: { en: "Treatments", ta: "சிகிச்சைகள்" },
  nav_appointment: { en: "Appointment", ta: "சந்திப்பு" },
  nav_testimonials: { en: "Testimonials", ta: "சாட்சிகள்" },
  nav_gallery: { en: "Gallery", ta: "படங்கள்" },
  nav_contact: { en: "Contact", ta: "தொடர்பு" },
  nav_faq: { en: "FAQ", ta: "கேள்விகள்" },
  cta_book: { en: "Book Appointment", ta: "சந்திப்பை பதிவு செய்யுங்கள்" },
  cta_whatsapp: { en: "WhatsApp Now", ta: "வாட்ஸ்அப் செய்யுங்கள்" },
  cta_call: { en: "Call Clinic", ta: "மருத்துவமனையை அழைக்கவும்" },
  trust_experience: { en: "13+ Years Experience", ta: "13+ ஆண்டுகள் அனுபவம்" },
  trust_holistic: { en: "Holistic Healing", ta: "முழுமையான குணமாக்கல்" },
  trust_personal: { en: "Personalized Care", ta: "தனிப்பட்ட கவனிப்பு" },
  trust_chennai: { en: "Chennai Clinic", ta: "சென்னை கிளினிக்" },
  hero_title: {
  en: "A sanctuary for healing in the heart of Chennai",
  ta: "சென்னையின் இதயத்தில் குணமளிக்கும் அமைதியான சிகிச்சை மையம்"
},

hero_desc: {
  en: "At Iraivazhi, ancient Tamil varmam wisdom meets the precision of acupuncture.",
  ta: "இறைவழியில், பாரம்பரிய தமிழ் வர்ம அறிவும் அக்குபஞ்சர் சிகிச்சையும் இணைகின்றன."
},

about_title: {
  en: "About The Clinic",
  ta: "மருத்துவமனை பற்றி"
},

gallery_title: {
  en: "Gallery",
  ta: "புகைப்படங்கள்"
},

faq_title: {
  en: "Frequently Asked Questions",
  ta: "அடிக்கடி கேட்கப்படும் கேள்விகள்"
},

contact_title: {
  en: "Contact Us",
  ta: "தொடர்பு கொள்ளுங்கள்"
},

appointment_success: {
  en: "Your appointment has been confirmed successfully.",
  ta: "உங்கள் சந்திப்பு வெற்றிகரமாக பதிவு செய்யப்பட்டது."
},

login_title: {
  en: "Patient Login",
  ta: "நோயாளர் உள்நுழைவு"
},

signup_title: {
  en: "Create Account",
  ta: "கணக்கு உருவாக்கவும்"
},

admin_title: {
  en: "Admin Portal",
  ta: "நிர்வாக பகுதி"
},

email_label: {
  en: "Email",
  ta: "மின்னஞ்சல்"
},

password_label: {
  en: "Password",
  ta: "கடவுச்சொல்"
},

phone_label: {
  en: "Phone Number",
  ta: "தொலைபேசி எண்"
},

reason_label: {
  en: "Reason For Visit",
  ta: "வருகைக்கான காரணம்"
},

booked_label: {
  en: "Booked",
  ta: "பதிவு செய்யப்பட்டது"
},
};

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => dict[k]?.en ?? String(k),
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (stored) setLangState(stored);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export const CLINIC = {
  name: "Iraivazhi Acupuncture & Varmam",
  therapist: "Therapist P. Manikandan",
  qualifications: "BEMS, BA Psychology, MD Acupuncture",
  phone: "9840251755",
  phoneIntl: "+919840251755",
  email: "manitnagar@gmail.com",
  address: "No.1, New Boag Road, Lallitha Puram, T Nagar, Chennai – 600017",
  hours: ["10:00 AM – 1:00 PM", "4:00 PM – 7:30 PM"],
};
