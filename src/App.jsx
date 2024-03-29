import Header from "@cm/header";
import Footer from "@cm/footer";
import Intro from "@ui/intro/index";
import Second from "@ui/secondsection/index";
import icon from "@img/CaretDoubleRight.svg";
import img from "@img/thirdsection.png";
import line from "@img/lines.svg";
import cardBoxImage from "@img/cards1.png";
import cardBoxImage1 from "@img/cards2.png";
import cardBoxImage2 from "@img/cards3.png";
import cardBoxImage3 from "@img/cards4.png";
import Card from "@ui/card"
import profile from "@img/avatar.svg"
import star from "@img/start.svg";
function App() {

    const card_data = [
        {
            img: cardBoxImage,
            description: "Dijital Pazarlama",
            title: "Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?",
            info: "Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...",
        },
        {
            img: cardBoxImage1,
            description: "Dijital Pazarlama",
            title: "Dijital PR Nedir? Dijital PR Neden Gereklidir?",
            info: "Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin...",
        },
        {
            img: cardBoxImage2,
            description: "Kurumsal Kimlik Tasarımı",
            title: "Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?",
            info: "Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet...",
        },
        {
            img: cardBoxImage3,
            description: "Dijital Pazarlama",
            title: "Online İtibar Yönetimi Nedir?",
            info: "Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek...",
        },
    ];

    return (
        <>
            <Header />
            <main>

                <Intro />

                <Second />

                <section className="thrid">
                    <div className="container">
                        <h1>Ürününüz veya hizmetiniz için en iyisini birlikte yapalım.</h1>

                        <p className="about">
                            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
                            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
                            hizmetleri sunmaktayız.
                        </p>

                        <button>
                            HEMEN TEKLİF ALIN
                            <img src={icon} alt="icon" />
                        </button>
                    </div>
                </section>

                <section className="neler">
                    <div className="container">
                        <p className="neler-text">
                            Neler <span>Yapıyoruz?</span>
                        </p>
                        <h1>3 adımda çalışma sürecimiz</h1>

                        <p className="neler-text2">
                            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
                            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
                            hizmetleri sunmaktayız.
                        </p>
                    </div>

                    <div className="equipments">
                        <img src={img} alt="image" />

                        <div className="equipments__title">
                            <h1>Sizin için neler yapabiliriz beraber bakalım.</h1>

                            <p className="info">
                                Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili
                                bilgiler edinelim.
                            </p>

                            <div className="desc">
                                <img src={line} alt="" />

                                <div>
                                    <h3>Web Tasarım</h3>
                                    <p className="desc-title">
                                        Var olan veya yeni kurulan işletmenizin, modern bir kurumsal
                                        kimliğe sahip olması için web sitesi.
                                    </p>
                                </div>
                            </div>

                            <div className="desc">
                                <img src="" alt="" />

                                <div>
                                    <h3>Dijital Pazarlama</h3>
                                    <p className="desc-title">
                                        Web sitenizin veya işletmenizin, daha popüler hale gelmesi
                                        için çeşitli hizmetler sunuyoruz.
                                    </p>
                                </div>
                            </div>

                            <div className="desc">
                                <img src="" alt="" />

                                <div>
                                    <h3>Prodüksiyon</h3>
                                    <p className="desc-title">
                                        İşletmenizin tanıtımının daha güzel hale gelmesi için,
                                        fotoğraf çekimi ve prodüksiyon yapıyoruz.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cards">
                    <div className="container">
                        <div className="card">
                            <p className="card-info">
                                Neler <span>Yapıyoruz?</span>
                            </p>

                            <h1 className="card-title">Öğreniyoruz, sizinle paylaşıyoruz.</h1>

                            <div className="card-desc">
                                Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı
                                yaptıkları yazıları inceleyelim.
                            </div>

                            <div className="card__box">
                                <div>Hepsini Gör</div>
                                <div>Web Tasarım</div>
                                <div>Kurumsal Kimlik Tasarımı</div>
                                <div>SEO</div>
                                <div>Dijital Pazarlama</div>
                            </div>

                            <div className="card__about">
                                {card_data.map((item, index) => {
                                    return <Card key={index} data={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="thanks">
                    <div className="container">
                        <h1>Memnuniyetini bildiren müşterilerimiz</h1>

                        <div className="thanks__wrapper">
                            <div className="thanks__wrapper--card">
                                <img src={profile} alt="profile" />

                                <h2>Jane Cooper</h2>
                                <p className="thanks__wrapper--card-info">
                                    The Walt Disney Company
                                </p>

                                <p className="thanks__wrapper--card-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
                                    amet feugiat donec sit morbi tristique massa enim. Consequat
                                    odio adipiscing est odio nibh. Nec scelerisque hendrerit in eu
                                    purus faucibus quam. Quis commodo tortor aliquam tortor
                                </p>

                                <div className="star">
                                    <img src={star} alt="star" className="star" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default App;