import React from "react";

export default function TermsOfService() {
  const sections = [
    ["Acceptance of Terms","By accessing or using DigiNiwas, you agree to these Terms of Service. If you do not agree, please discontinue use of the platform."],
    ["Our Services","DigiNiwas provides AI-assisted property discovery, property listings, buying, selling, renting, leasing and enquiry management."],
    ["User Accounts","You are responsible for maintaining the confidentiality of your account and the accuracy of the information you provide."],
    ["Property Listings","Property owners, builders and partners are responsible for ensuring listing details, pricing, images and availability are accurate."],
    ["Payments","Any applicable booking, subscription or promotional payments are subject to the terms displayed during checkout."],
    ["Prohibited Activities","Users must not post false information, misuse the platform, attempt unauthorized access or violate applicable laws."],
    ["Niwas AI","AI recommendations are informational only and should not be considered legal, financial or investment advice."],
    ["Intellectual Property","All logos, branding, content and software belong to DigiNiwas unless otherwise stated."],
    ["Limitation of Liability","DigiNiwas is not liable for losses arising from inaccurate third-party listings or user decisions."],
    ["Termination","We may suspend or terminate access for violations of these Terms."],
    ["Changes","These Terms may be updated periodically. Continued use indicates acceptance of revisions."],
    ["Contact","Email: support@diginiwas.com\nPhone: +91-XXXXXXXXXX"]
  ];

  return (
    <div className="min-h-screen bg-[#F6F5F2]">
      <section className="bg-[#0F2E46] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="mt-6 max-w-3xl text-white/80 leading-8">
            These Terms govern your use of DigiNiwas for buying, selling,
            renting and leasing properties through our website and AI services.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {sections.map(([title, body]) => (
          <section key={title} className="bg-white rounded-3xl border shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#0F2E46]">{title}</h2>
            <p className="mt-4 text-gray-600 leading-8 whitespace-pre-line">{body}</p>
          </section>
        ))}

        <section className="bg-[#33cc99] rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-[#0F2E46]">
            Thank You for Using DigiNiwas
          </h2>
          <p className="mt-4 text-[#0F2E46]/80 max-w-3xl mx-auto">
            We are committed to providing a secure, transparent and trustworthy
            real estate experience for buyers, sellers, landlords and tenants.
          </p>
        </section>
      </main>
    </div>
  );
}