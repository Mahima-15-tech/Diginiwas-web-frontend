import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#F6F5F2]">
      <section className="bg-[#0F2E46] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl text-white/80">
            At DigiNiwas, we value your privacy. This page explains how we collect,
            use, protect and manage your information when you buy, sell, rent or
            lease property using our platform and Niwas AI.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-8">
        {[
          ["Information We Collect","Name, email, phone number, property preferences, saved listings, search history, approximate location (with permission), enquiries and AI chat history."],
          ["How We Use Your Information","To recommend properties, connect buyers and sellers, improve Niwas AI, provide customer support, detect fraud and enhance platform security."],
          ["Property Listings","Owners, builders and agents are responsible for listing accuracy. Users should independently verify all property information before making decisions."],
          ["Niwas AI","Niwas AI provides personalised recommendations. Responses are informational and are not legal or financial advice."],
          ["Cookies","We use cookies to improve login, preferences, analytics and user experience."],
          ["Data Security","We use reasonable technical and organisational measures to protect your data from unauthorised access."],
          ["Third-Party Services","Payments, maps, analytics and cloud storage may be provided by trusted third parties with their own privacy policies."],
          ["Your Rights","You may request access, correction or deletion of your personal information subject to applicable law."],
          ["Data Retention","We retain information only as long as necessary for business, legal and security purposes."],
          ["Contact","Email: support@diginiwas.com\nPhone: +91-XXXXXXXXXX"]
        ].map(([title,body])=>(
          <section key={title} className="bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-[#0F2E46]">{title}</h2>
            <p className="mt-4 text-gray-600 leading-8 whitespace-pre-line">{body}</p>
          </section>
        ))}

        <section className="bg-[#0F2E46] rounded-3xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold">Thank You for Trusting DigiNiwas</h2>
          <p className="mt-4 text-white/80">
            By using DigiNiwas, you agree to this Privacy Policy. We may update it from time to time.
          </p>
        </section>
      </main>
    </div>
  );
}