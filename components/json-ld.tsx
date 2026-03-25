import { getSiteUrl, SITE_DESCRIPTION, SITE_HANDLE, SITE_NAME, SITE_TITLE, SOCIAL } from "@/lib/site-config"

export function JsonLd() {
  const url = getSiteUrl()

  /**
   * Person — the primary entity for name-based searches:
   *   "Vasileios Tsolakidis" and "billtsol"
   */
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}/#person`,
    name: SITE_NAME,
    alternateName: [SITE_HANDLE, "Βασίλειος Τσολακίδης"],
    description: SITE_DESCRIPTION,
    url,
    image: `${url}/icon.svg`,
    jobTitle: "Robotics & Embedded Systems Engineer",
    nationality: {
      "@type": "Country",
      name: "Greece",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "GR",
    },
    email: "billtsol1@gmail.com",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Macedonia",
        address: { "@type": "PostalAddress", addressCountry: "GR" },
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Pisa",
        address: { "@type": "PostalAddress", addressCountry: "IT" },
      },
    ],
    knowsAbout: [
      "Robotics",
      "Embedded Systems",
      "ESP32",
      "Arduino",
      "Computer Vision",
      "YOLO",
      "PID Control",
      "Autonomous Navigation",
      "Kubernetes",
      "Spring Boot",
      "KiCad",
      "Machine Learning",
    ],
    sameAs: [SOCIAL.github, SOCIAL.linkedin],
  }

  /**
   * WebSite — enables Google's Sitelinks search-box eligibility
   * and confirms the canonical home URL.
   */
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url,
    author: { "@id": `${url}/#person` },
    inLanguage: "en",
  }

  /**
   * ProfilePage — structured data type specifically designed for
   * personal portfolio / profile pages (improves People-type results).
   */
  const profilePage = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}/#profilepage`,
    name: `${SITE_NAME} — ${SITE_HANDLE}`,
    description: SITE_DESCRIPTION,
    url,
    mainEntity: { "@id": `${url}/#person` },
    inLanguage: "en",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
      />
    </>
  )
}
