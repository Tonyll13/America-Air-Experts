// app/page.tsx
import Image from "next/image";
import "./globals.css";
import LeadButton from "./LeadButton";
import CallLink from "./CallLink";
import LeadForm from "./LeadForm";

export default function HomePage() {
  return (
    <section className="aae">
      <header className="aae__top">
        <div className="aae__container aae__topInner">
          <div className="aae__brand">
            <div className="aae__logo">
              <Image
                src="/America-Air-Experts-Logo.png"
                alt="America Air Experts logo"
                width={72}
                height={72}
                priority
              />
            </div>

            <div className="aae__brandText">
              <div className="aae__name">America Air Experts ✅</div>
              <div className="aae__sub">South Florida • Air Quality Specialists</div>
            </div>
          </div>

<div className="aae__topCtas">
  <a className="aae__btn aae__btn--primary" href="#lead-form">
    Get a Quote
  </a>
  <div>
  <CallLink
    phone="+17869403139"
    className="aae__btn aae__btn--ghost"
  />
  </div>
</div>
        </div>
      </header>

      <main className="aae__main">
        <div className="aae__container aae__grid">
          <div className="aae__hero">
            <div className="aae__kicker">Air Duct Cleaning • Dryer Vent Cleaning</div>
            <h1 className="aae__h1">Cleaner air, safer home, and better HVAC performance.</h1>
            <p className="aae__lead">
              Professional, local service in South Florida. Reduce dust buildup, improve airflow,
              and keep your dryer vent running safer. Fast response—request a quote below.
            </p>

            <div className="aae__badges">
              <span className="aae__badge">✅ Homeowner friendly</span>
              <span className="aae__badge">✅ Clear, honest service</span>
              <span className="aae__badge">✅ South Florida local</span>
            </div>

            <div className="aae__cards">
              <article className="aae__card">
                <h3 className="aae__h3">Air Duct Cleaning</h3>
                <p className="aae__p">
                  Remove built-up dust and debris, support better airflow, and help your home feel fresher.
                </p>
                <ul className="aae__list">
                  <li>Supply &amp; return vents</li>
                  <li>Air handler area cleanup</li>
                  <li>Before/after photos (when possible)</li>
                </ul>
              </article>

              <article className="aae__card">
                <h3 className="aae__h3">Dryer Vent Cleaning</h3>
                <p className="aae__p">
                  Reduce lint buildup to help your dryer run safer and more efficiently.
                </p>
                <ul className="aae__list">
                  <li>Vent line cleaning</li>
                  <li>Airflow check</li>
                  <li>Recommendations if restricted</li>
                </ul>
              </article>
            </div>

            <div className="aae__trust">
              <div className="aae__trustItem">
                <div className="aae__trustTitle">Reliable scheduling</div>
                <div className="aae__trustText">We confirm quickly and keep it simple.</div>
              </div>
              <div className="aae__trustItem">
                <div className="aae__trustTitle">Respectful in-home service</div>
                <div className="aae__trustText">Clean work practices and clear communication.</div>
              </div>
              <div className="aae__trustItem">
                <div className="aae__trustTitle">Local support</div>
                <div className="aae__trustText">Serving South Florida homeowners.</div>
              </div>
            </div>
          </div>

          {/* LEAD FORM */}
          <aside className="aae__formWrap" id="lead-form">
  <div className="aae__formCard">
    <h2 className="aae__h2">Request a Quote</h2>
    <p className="aae__small">Leave your info and we’ll get back to you fast.</p>

    <LeadForm />

    <div className="aae__altCta">
      Prefer calling? <a href="tel:+17869403139">Tap to call now</a>
      {/* אם אתה רוצה גם אירוע Contact:
          <CallLink phone="+17869403139" />
      */}
    </div>
  </div>
</aside>

        </div>
      </main>

      <footer className="aae__footer">
        <div className="aae__container aae__footerInner">
          <div>
            © <span>America Air Experts</span>. All rights reserved.
          </div>
          <div className="aae__footerLinks">
            <a href="#lead-form">Get a Quote</a>
            <span aria-hidden="true">•</span>
            <CallLink phone="+17869403139" />
          </div>
        </div>
      </footer>
    </section>
  );
}
