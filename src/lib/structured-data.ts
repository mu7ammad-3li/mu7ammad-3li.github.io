import { RESUME_DATA } from "@/data/resume-data";

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: RESUME_DATA.name,
    url: RESUME_DATA.personalWebsiteUrl,
    image: RESUME_DATA.avatarUrl,
    jobTitle: RESUME_DATA.about,
    address: {
      "@type": "PostalAddress",
      addressLocality: RESUME_DATA.location.split(",")[0],
      addressCountry: RESUME_DATA.location.split(",")[1]?.trim() || "",
    },
    email: RESUME_DATA.contact.email,
    telephone: RESUME_DATA.contact.tel,
    sameAs: RESUME_DATA.contact.social.map((s) => s.url),
  };
}
