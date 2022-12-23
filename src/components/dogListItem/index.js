import PropTypes from "prop-types";
import { GetImage } from "../getImage";
import "./dogListItem.css";

export const DogListItem = ({ dogDetail = {} }) => {
  const {
    name,
    height,
    lifespan,
    id,
    description,
    temperament,
    imperial,
    group,
  } = dogDetail;
  return (
    <div className="detailContainer">
      <GetImage id={id} className="imageContainer" name={name} />
      <div className="column">
        <div className="name">
          <span className="bold">Name:</span> {name}
        </div>
        {temperament && (
          <div className="name">
            <span className="bold">Temperament:</span> {temperament}
          </div>
        )}
        {description && (
          <div className="description">
            <span className="bold">Description:</span> {description}
          </div>
        )}
      </div>
      <div className="column">
        <div className="name">
          <span className="bold">Metric: </span>
          {height}
        </div>
        <div className="name">
          <span className="bold">Imperial: </span>
          {imperial}
        </div>
      </div>
      <div className="column flex">{lifespan}</div>
      <div className="column flex">{group}</div>
    </div>
  );
};

DogListItem.propTypes = {
  dogDetail: PropTypes.object,
};
