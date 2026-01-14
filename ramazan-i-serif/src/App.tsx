
import { articlesData } from './data/articlesData'
import { faqData } from './data/faqData'

function App() {
    return (
        <main>
            <div className="header">
                <div className="header-content">
                    <h1>Ramazan-ı Şerif</h1>
                    <p className="header-description">
                        Ramazan ayı, Kur'an-ı Kerim'in indirildiği, oruç tutmanın farz kılındığı ve
                        bin aydan hayırlı Kadir Gecesi'ni barındıran mübarek bir aydır.
                    </p>
                </div>
            </div>

            <main className="main-content">

                <section className="articles-section">
                    {articlesData.map((article) => (
                        <article key={article.id} className="intro-section">
                            <h2 className="article-title">{article.title}</h2>
                            {article.content.map((paragraph, index) => (
                                <p key={index} className="article-paragraph">{paragraph}</p>
                            ))}
                        </article>
                    ))}
                </section>

                {/* FAQ Section */}
                <section className="faq-section">
                    <h2 className="faq-title">Ramazan Hakkında Sık Sorulan Sorular</h2>
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
                        Ramazan-ı Şerif Rehberi
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default App
