import React from "react";
import { Phone, Mail, MapPin, Briefcase, ArrowRight } from "lucide-react";
import { NAVY, GREEN, GREEN_LIGHT, COMPANY, scrollToId } from "../constants";

const MAP_SRC = "https://www.google.com/maps?q=" + encodeURIComponent(COMPANY.address) + "&output=embed";

const DETAILS = [
  { icon: Phone, label: "Call Us", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
  { icon: Mail, label: "Email Us", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Visit Us", value: COMPANY.address, href: null },
  { icon: Briefcase, label: "About Us", value: `${COMPANY.industry} · ${COMPANY.companySize}`, href: null },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#F7F9FA] py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: GREEN }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contact Us</h2>
          <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
            Have a question or want a site walkthrough? Reach out directly or
            find us on the map below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-6">
              {DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: GREEN_LIGHT }}
                  >
                    <Icon className="w-4.5 h-4.5" style={{ color: NAVY }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-gray-800 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-gray-800">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollToId("quote")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-sm text-white hover:opacity-90 active:scale-[0.98] transition"
                style={{ backgroundColor: NAVY }}
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-sm border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[320px] lg:min-h-0">
            <iframe
              title="Techsail Engineering office location map"
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
