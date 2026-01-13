import { esmaUlHusna } from './data/esmaUlHusna'
import { faqData } from './data/faqData'

function App() {
  return (
    <main>
      <div className="header">
        <div className="header-content">
          <h1>Allahın 99 İsmi - Esmaül Hüsna</h1>

          <p className="header-description">
            Allah'ın güzel isimleri (Esmaül Hüsna), Kur'an-ı Kerim ve hadislerde geçen,
            Yüce Allah'ın sıfatlarını ve kemal özelliklerini ifade eden mübarek isimlerdir.
          </p>
        </div>
      </div>

      <main className="main-content">
        <section className="intro-section">
          <h2>Allah'ın 99 Mübarek İsmi</h2>
          <p>
            Hz. Muhammed (s.a.v.) bir hadis-i şerifinde şöyle buyurmuştur:
            "Allah'ın doksan dokuz ismi vardır. Kim bunları sayarsa (ezberler ve manasını düşünerek hayatına geçirirse) cennete girer."
          </p>
        </section>

        <div className="names-grid">
          {esmaUlHusna.map((name) => (
            <article key={name.number} className="name-card">
              <div className="name-card-header">
                <span className="name-number">{name.number}</span>
                <div className="name-title">
                  <h3 className="name-arabic">{name.arabic}</h3>
                  <span className="name-turkish">{name.turkish}</span>
                </div>
              </div>
              <p className="name-meaning">{name.meaning}</p>
            </article>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="faq-title">Esmaül Hüsna Hakkında Sık Sorulan Sorular</h2>
          <div className="faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="references-section">
        <h2 className="references-title">Referanslar</h2>
        <ul className="references-list">
          <li>
            <a href="https://www.esmaulhusna.co" target="_blank">
              Esmaül Hüsna
            </a>

          </li>
          <li>
            <a href="https://www.ayet.online" target="_blank">
              Ayet Online
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <div className="footer-content">

          <div className="footer-divider"></div>
          <p>
            Allah'ın 99 İsmi
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
