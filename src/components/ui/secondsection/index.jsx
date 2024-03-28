import "./style.scss"

function secondsection() {
    return <>
    <section id="secondsection">
        <div className="container">
            <div className="secondsection-wrap">
                <div className="secondsection-wrap-titil">
                    <p>Neler <span>Yapıyoruz?</span></p>
                    <h2>3 adımda çalışma sürecimiz</h2>
                    <p>
                        360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır. İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım hizmetleri sunmaktayız.
                    </p>
                </div>
                <div className="secondsection-wrap-content">
                    <div className="secondsection-wrap-content-card">
                        <span>
                          <i className="bi bi-cup-hot-fill"></i>
                        </span>
                        <h3>
                           Keşif ve Planlama
                        </h3>
                        <p>
                          Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
                        </p>
                    </div>
                    <div className="secondsection-wrap-content-card">
                        <span>
                          <i className="bi bi-box-seam-fill"></i>
                        </span>
                        <h3>
                          Tasarım ve Geliştirme
                        </h3>
                        <p>
                          Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
                        </p>
                    </div>
                    <div className="secondsection-wrap-content-card">
                        <span>
                          <i className="bi bi-stopwatch"></i>
                        </span>
                        <h3>
                           Test ve Yayına Alma
                        </h3>
                        <p>
                          Belirlenen strateji ile tasarımın ve yazılımın oluşturulması sağlanır.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default secondsection;