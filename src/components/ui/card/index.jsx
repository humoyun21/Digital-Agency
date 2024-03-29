import CaretDoubleRight from "@img/CaretDoubleRight2.svg";

const index = ({ data: { img, title, description, info } }) => {
  return (
    <>
      <div className="card__about--item">
        <img src={img} alt="card" />
        <div className="card__about--item-definition">
          <p className="card__about--item-definition-desc">{description}</p>
          <p className="card__about--item-definition-title">{title}</p>
          <p className="card__about--item-definition-info">{info}</p>
        </div>

        <div>
          <a href="#">
            Devamını Oku
            <img src={CaretDoubleRight} alt="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default index;