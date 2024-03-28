import "./style.scss";
function Intro() {
    return <>
        <section id="intro">
            <div className="container">
                <div className="intro-wrap">
                    <div className="intro-wrap-top">
                        <h1>
                            İşinize uygun <span>tasarım</span> ve <span>yazılımlar</span>
                        </h1>
                        <p>
                            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
                        </p>
                        <button>
                            Detaylı İncele
                            <i className="bi bi-chevron-double-right"></i>
                        </button>
                    </div>
                    <div className="intro-wrap-center">
                        <p>Assalomu alaykum , </p>
                        <h1>
                            Web sitesi ve Kurumsal Kimlik Tasarımları
                        </h1>
                        <p>
                            Online dünyadaki yüzünüz olan web sitelerinizi tasarlar. E-ticaret siteleri dahil olmak üzere tüm ihyitaçlarınıza çözümler sunar.
                        </p>
                    </div>
                </div>
                <div className="intro-wrap-bottom">
                        <span>1</span><span className="activ">2</span><span>3</span>
                </div>
            </div>
        </section>
    </>
}

export default Intro;