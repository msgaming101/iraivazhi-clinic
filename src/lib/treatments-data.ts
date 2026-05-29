import { Activity, Brain, Bone, Zap, Moon, Sparkles, HeartPulse, Wind, Footprints, Sun, type LucideIcon } from "lucide-react";

export type TreatmentDetail = {
  slug: string;
  Icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  symptoms: string[];
  causes: string[];
  acupuncture: string;
  varmam: string;
  recovery: string;
  benefits: string[];
};

export const TREATMENTS: TreatmentDetail[] = [
  {
    slug: "back-pain", Icon: Bone, name: "Back Pain",
    short: "Targeted relief for chronic and acute lower & upper back pain.",
    description: "Back pain affects mobility, sleep and daily activity. Our treatment combines precise acupuncture with traditional varmam pressure-point therapy to release tension and restore spinal balance.",
    symptoms: ["Stiffness in the lower or upper back", "Sharp pain with movement", "Muscle spasms", "Difficulty standing or bending", "Pain radiating to hips"],
    causes: ["Poor posture or prolonged sitting", "Heavy lifting or strain", "Disc compression", "Age-related wear", "Lack of core strength"],
    acupuncture: "Fine sterile needles target points along the bladder and governing meridians to reduce inflammation, improve blood flow and release tight muscle layers.",
    varmam: "Gentle thumb pressure on specific varma points around the spine relaxes deep paraspinal muscles and rebalances nerve flow without medication.",
    recovery: "Most patients feel noticeable relief within 4–6 sessions. A typical course is 8–12 sessions, followed by simple posture exercises shared by the therapist.",
    benefits: ["Drug-free pain relief", "Improved posture & flexibility", "Better sleep", "Long-lasting results"],
  },
  {
    slug: "neck-pain", Icon: Activity, name: "Neck Pain",
    short: "Release tension from posture, spondylosis and stress.",
    description: "Modern lifestyles, screen use and stress create chronic neck tightness. Acupuncture and varmam together calm the muscles and improve cervical mobility.",
    symptoms: ["Stiff neck", "Headaches at the base of skull", "Shoulder tightness", "Tingling in arms", "Reduced range of motion"],
    causes: ["Long screen hours", "Cervical spondylosis", "Stress & poor sleep posture", "Old injury"],
    acupuncture: "Needles placed at GB20, GB21 and surrounding points relieve trapezius spasm and increase oxygen to the cervical region.",
    varmam: "Soft varmam strokes along the neck and shoulder line release deep knots and rebalance pranic flow.",
    recovery: "Relief usually begins within 2–3 sessions; full course 6–10 sessions.",
    benefits: ["Quick tension release", "Fewer headaches", "Improved focus", "Better posture"],
  },
  {
    slug: "sciatica", Icon: Zap, name: "Sciatica",
    short: "Nerve-focused therapy to ease radiating leg pain.",
    description: "Sciatic nerve irritation causes shooting pain from the lower back into the leg. Our integrated therapy reduces nerve inflammation and restores comfortable movement.",
    symptoms: ["Burning pain down one leg", "Numbness or tingling", "Weakness in foot or leg", "Pain when sitting"],
    causes: ["Herniated disc", "Piriformis syndrome", "Spinal stenosis", "Prolonged sitting"],
    acupuncture: "Distal and local points along the bladder and gallbladder meridians decompress nerve pressure and reduce inflammation.",
    varmam: "Targeted pressure at hip and sacrum varma points releases the piriformis and frees the sciatic nerve.",
    recovery: "Significant relief in 6–8 sessions; complete recovery in 10–15 sessions for chronic cases.",
    benefits: ["Walk comfortably again", "No painkillers needed", "Restored leg strength"],
  },
  {
    slug: "migraine", Icon: Brain, name: "Migraine",
    short: "Reduce frequency and intensity of recurring headaches.",
    description: "Migraines disrupt life with throbbing pain, nausea and sensitivity. Our therapy reduces both intensity and frequency by calming the nervous system.",
    symptoms: ["Throbbing one-sided headache", "Nausea or vomiting", "Light or sound sensitivity", "Visual aura"],
    causes: ["Hormonal changes", "Stress", "Poor sleep", "Food triggers", "Tension build-up"],
    acupuncture: "Points such as LI4, GB20 and Yintang regulate serotonin levels and calm vascular reactivity.",
    varmam: "Fine varmam touch on temples and skull points eases pressure and quietens the nervous system.",
    recovery: "Frequency drops noticeably within 4 weeks. A full course runs 8–12 sessions.",
    benefits: ["Fewer attacks", "Lower medication need", "Calmer mind", "Better sleep"],
  },
  {
    slug: "knee-pain", Icon: Footprints, name: "Knee Pain",
    short: "Improve mobility and reduce inflammation naturally.",
    description: "Whether from age, injury or arthritis, knee pain limits independence. We help reduce swelling and rebuild joint comfort.",
    symptoms: ["Stiffness on waking", "Pain climbing stairs", "Swelling", "Clicking or grinding"],
    causes: ["Osteoarthritis", "Ligament strain", "Overuse", "Weight pressure"],
    acupuncture: "Needles around ST35, SP9 and Xiyan points reduce joint inflammation and stimulate cartilage health.",
    varmam: "Gentle varmam mobilises the knee capsule, freeing trapped fluid and improving range.",
    recovery: "Improvement seen within 5–7 sessions; full course 10–15 sessions.",
    benefits: ["Walk and climb easily", "Less swelling", "Stronger joints"],
  },
  {
    slug: "stress-relief", Icon: Wind, name: "Stress Relief",
    short: "Calm the nervous system through mind-body balance.",
    description: "Chronic stress affects sleep, mood and immunity. Acupuncture + varmam restore parasympathetic balance for deep, lasting calm.",
    symptoms: ["Racing thoughts", "Tight shoulders", "Poor sleep", "Low energy", "Anxiety"],
    causes: ["Work pressure", "Emotional strain", "Hormonal imbalance", "Lifestyle"],
    acupuncture: "Heart and pericardium meridian points calm the mind and reduce cortisol response.",
    varmam: "Soothing varmam on head, spine and feet activates the body's natural relaxation response.",
    recovery: "Most patients feel calmer from the first session; 6–8 sessions for stable balance.",
    benefits: ["Deep relaxation", "Better sleep", "Clearer thinking", "Improved mood"],
  },
  {
    slug: "paralysis-support", Icon: HeartPulse, name: "Paralysis Support",
    short: "Long-term rehabilitation through nerve stimulation.",
    description: "For post-stroke, facial or limb paralysis, our therapy supports nerve regeneration and muscle re-education over a structured course.",
    symptoms: ["Loss of movement in face or limb", "Weakness", "Speech difficulty", "Reduced sensation"],
    causes: ["Stroke", "Bell's palsy", "Nerve injury", "Spinal conditions"],
    acupuncture: "Scalp and local body acupuncture stimulates affected motor zones and improves nerve conduction.",
    varmam: "Targeted varmam reactivates dormant nerve pathways and restores micro-circulation.",
    recovery: "Best results when started early. Long-term programmes of 3–6 months show meaningful functional recovery.",
    benefits: ["Regained movement", "Improved speech", "Greater independence"],
  },
  {
    slug: "nerve-problems", Icon: Sparkles, name: "Nerve Problems",
    short: "Address neuropathy, numbness and tingling.",
    description: "Diabetic neuropathy and other nerve issues respond well to combined acupuncture and varmam by restoring circulation and nerve signalling.",
    symptoms: ["Numbness in hands or feet", "Pins-and-needles", "Burning sensation", "Loss of balance"],
    causes: ["Diabetes", "Vitamin deficiency", "Nerve compression", "Toxin exposure"],
    acupuncture: "Distal points on hands and feet stimulate peripheral nerve regeneration and circulation.",
    varmam: "Light varmam along nerve pathways awakens sensation and reduces burning.",
    recovery: "Sensation improves over 8–12 sessions; ongoing care recommended for diabetic patients.",
    benefits: ["Reduced numbness", "Better balance", "Comfortable sleep"],
  },
  {
    slug: "sleep-disorders", Icon: Moon, name: "Sleep Disorders",
    short: "Restore deep, restful sleep without medication.",
    description: "Insomnia and disturbed sleep respond beautifully to gentle nervous-system rebalancing.",
    symptoms: ["Difficulty falling asleep", "Frequent waking", "Early morning awakening", "Daytime fatigue"],
    causes: ["Stress & anxiety", "Hormonal changes", "Caffeine or screens", "Pain conditions"],
    acupuncture: "Heart-7, Spleen-6 and Anmian points reset the sleep cycle and calm the mind.",
    varmam: "Soft head and foot varmam release tension and induce natural drowsiness.",
    recovery: "Many sleep deeper from the first week. Full course 6–10 sessions.",
    benefits: ["Fall asleep faster", "Stay asleep longer", "Wake up refreshed"],
  },
  {
    slug: "general-wellness", Icon: Sun, name: "General Wellness",
    short: "Preventive care to keep body and mind in harmony.",
    description: "Regular sessions maintain energy, immunity and emotional balance — ideal for those without specific complaints who value preventive health.",
    symptoms: ["Low energy", "Frequent minor illness", "Mood ups and downs", "Mild aches"],
    causes: ["Modern lifestyle", "Imbalanced diet", "Lack of rest", "Stress accumulation"],
    acupuncture: "Balancing points across major meridians tune the body's energy systems.",
    varmam: "Whole-body varmam clears stagnation and reinforces vitality.",
    recovery: "Recommended monthly or seasonally as a wellness ritual.",
    benefits: ["More energy", "Stronger immunity", "Emotional balance", "Healthy ageing"],
  },
];
