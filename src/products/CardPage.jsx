import "./Product.css";
import { Button } from "./UI/ButtonPage";

export function CardPage({ image, name, stars, count, priceCents, keywords }) {

  return (
    <div>
      <li>
        <img className="pictures" src={image} alt="here is a photo" />
        <h4 className="card-page-title">{name}</h4>

        <div className="card-page-rating">
          <img
            src={`src/data/ratings/rating-${Math.round(stars * 10)}.png`}
            alt=".data/ratings/rating-0.png"
          />
          <p>{count}</p>
        </div>

        <p className="price-cents">${priceCents}</p>

        <div className="container">
          <select>
            {keywords.map((item, i) => (
              <option value={i}>{item}</option>
            ))}
          </select>
        </div>
        <Button />
      </li>
    </div>
  );
}
