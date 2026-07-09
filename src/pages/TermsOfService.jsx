import React from "react";

export default function TermsOfService() {

  // const sections = [
  //   ["Acceptance of Terms","By creating an account or using DigiNiwas, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of the platform." , []],
  //   ["Our Services","DigiNiwas is a digital property platform that provides services including." , []],
  //   ["User Accounts","You agree to:"],
  //   ["Property Listings","Property owners, builders, developers and agents are solely responsible for the accuracy of:"],
  //   ["User Responsibilities","Users must not post false information, misuse the platform, attempt unauthorized access or violate applicable laws."],
  //   ["Prohibited Activities","AI recommendations are informational only and should not be considered legal, financial or investment advice."],
  //   ["Niwas AI","All logos, branding, content and software belong to DigiNiwas unless otherwise stated."],
  //   ["Payments","DigiNiwas is not liable for losses arising from inaccurate third-party listings or user decisions."],
  //   ["Intellectual Property","We may suspend or terminate access for violations of these Terms."],
  //   ["Third-Party Services","These Terms may be updated periodically. Continued use indicates acceptance of revisions."],
   


  //   ["Limitation of Liability", "To the maximum extent permitted by law, DigiNiwas shall not be liable for:", ["Incorrect or misleading property listings", "User-generated content", "Property disputes", "Financial losses arising from property transactions", "Decisions made using Niwas AI", "Service interruptions or technical issues beyond our reasonable control"] , "DigiNiwas acts as a technology platform connecting users and does not become a party to property transactions unless expressly stated." ],
  //   ["Termination" , "We reserve the right to suspend or terminate any account that:", ["Violates these Terms", "Engages in fraudulent activities", "Misuses the platform", "Poses security or legal risks"] , "Termination does not affect rights or obligations accrued before termination."],
  //   ["Changes to These Terms", "We may update these Terms periodically. Updated versions will be published on the DigiNiwas platform with a revised effective date.", [], "Continued use of the platform after updates constitutes acceptance of the revised Terms."],
  //   ["Governing Law", "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ambala, Haryana.", [], ""],
  //   ["Contact","Email: Diginiwas@gmail.com\nPhone: +91-7988537478"]
  // ];


  const sections = [
  [
    "Acceptance of Terms",
    "By creating an account or using DigiNiwas, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy. If you do not agree, please discontinue use of the platform.",
    [],
    ""
  ],

  [
    "Our Services",
    "DigiNiwas is a digital property platform that provides services including:",
    [
      "Property buying, selling, renting and leasing",
      "Property discovery and recommendations",
      "AI-powered assistance through Niwas AI",
      "Property enquiry management",
      "Home loan assistance",
      "Documentation guidance",
      "Property photography & videography",
      "Digital property promotion",
      "Property management services (where available)"
    ],
    "Some services may be provided by trusted third-party partners."
  ],

  [
    "User Accounts",
    "You agree to:",
    [
      "Provide accurate and complete information",
      "Keep your login credentials secure",
      "Update your account information when necessary",
      "Be responsible for all activity under your account"
    ],
    "We reserve the right to suspend accounts involved in fraudulent or unlawful activities."
  ],

  [
    "Property Listings",
    "Property owners, builders, developers and agents are solely responsible for the accuracy of:",
    [
      "Property descriptions",
      "Images and videos",
      "Pricing",
      "Availability",
      "Legal ownership",
      "Documents and approvals"
    ],
    "DigiNiwas does not guarantee the completeness or accuracy of third-party listings. Users should independently verify all information before entering into any transaction."
  ],

  [
    "User Responsibilities",
    "When using DigiNiwas, you agree to:",
    [
      "Use the platform lawfully",
      "Provide truthful information",
      "Respect other users",
      "Verify property details independently",
      "Comply with applicable laws and regulations"
    ],
    ""
  ],

  [
    "Prohibited Activities",
    "Users must not:",
    [
      "Publish false or misleading listings",
      "Upload unlawful, offensive or fraudulent content",
      "Impersonate another person or business",
      "Attempt unauthorized access to the platform",
      "Introduce malware or harmful software",
      "Interfere with platform operations",
      "Use automated tools to scrape or copy data without permission"
    ],
    "Violation of these Terms may result in account suspension or permanent removal."
  ],

  [
    "Niwas AI",
    "Niwas AI provides automated recommendations and informational assistance based on available information.",
    [
      "Are provided for general information only",
      "May not always be accurate or complete",
      "Do not constitute legal, financial, tax or investment advice",
      "Should not replace professional consultation"
    ],
    "Users remain responsible for all decisions made using AI-generated information."
  ],

  [
    "Payments",
    "Where applicable, payments for subscriptions, promotional services or other paid offerings are subject to the pricing and payment terms displayed at checkout.",
    [],
    "Unless otherwise stated, fees are non-refundable."
  ],

  [
    "Intellectual Property",
    "All trademarks, logos, branding, software, website content, graphics and AI technologies associated with DigiNiwas remain the intellectual property of DigiNiwas or its licensors.",
    [],
    "You may not reproduce, modify or distribute any part of the platform without prior written permission."
  ],

  [
    "Third-Party Services",
    "DigiNiwas may integrate with third-party services including:",
    [
      "Payment gateways",
      "Mapping services",
      "Cloud providers",
      "Marketing platforms",
      "Financial institutions",
      "Government or verification services"
    ],
    "These services operate under their own terms and privacy policies."
  ],

  [
    "Limitation of Liability",
    "To the maximum extent permitted by law, DigiNiwas shall not be liable for:",
    [
      "Incorrect or misleading property listings",
      "User-generated content",
      "Property disputes",
      "Financial losses arising from property transactions",
      "Decisions made using Niwas AI",
      "Service interruptions or technical issues beyond our reasonable control"
    ],
    "DigiNiwas acts as a technology platform connecting users and does not become a party to property transactions unless expressly stated."
  ],

  [
    "Termination",
    "We reserve the right to suspend or terminate any account that:",
    [
      "Violates these Terms",
      "Engages in fraudulent activities",
      "Misuses the platform",
      "Poses security or legal risks"
    ],
    "Termination does not affect rights or obligations accrued before termination."
  ],

  [
    "Changes to These Terms",
    "We may update these Terms periodically. Updated versions will be published on the DigiNiwas platform with a revised effective date.",
    [],
    "Continued use of the platform after updates constitutes acceptance of the revised Terms."
  ],

  [
    "Governing Law",
    "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ambala, Haryana.",
    [],
    ""
  ],

  [
    "Contact Us",
    "For any questions regarding these Terms, please contact us:",
    [
      "Email: Diginiwas@gmail.com",
      "Phone: +91-7988537478"
    ],
    ""
  ]
];
  return (
    <div className="min-h-screen bg-[#F6F5F2]">
      <section className="bg-[#0F2E46] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="mt-6 max-w-3xl text-white/80 leading-8">
            {/* These Terms govern your use of DigiNiwas for buying, selling,
            renting and leasing properties through our website and AI services. */}
            Welcome to DigiNiwas. These Terms of Service ("Terms") govern your access to and use of the DigiNiwas website, mobile applications, Niwas AI, and related services. By accessing or using our platform, you agree to comply with these Terms.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {sections.map(([title, body, points, footer]) => (
          <section key={title} className="bg-white rounded-3xl border shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#0F2E46]">{title}</h2>
            <p className="mt-4 text-gray-600 leading-8 whitespace-pre-line">{body}</p>
             {points.length > 0 && (
            <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-600 leading-8">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

            {footer && (
              <p className="mt-5 text-gray-600 leading-8">{footer}</p>
            )}

          </section>
        ))}

        <section className="bg-[#33cc99] rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-[#0F2E46]">
         Thank you for choosing DigiNiwas.
          </h2>
          <p className="mt-4 text-[#0F2E46]/80 max-w-3xl mx-auto">
           We're committed to creating a secure, transparent and technology-driven property ecosystem for buyers, sellers, tenants, landlords, agents and trusted service partners.
          </p>
        </section>
      </main>
    </div>
  );
}