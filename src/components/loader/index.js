import PropTypes from "prop-types";
import "./loader.css";

export const Loader = ({ loaderStyle = "loader", containerStyle = "" }) => (
  <div className={containerStyle}>
    <div className={loaderStyle} />{" "}
  </div>
);

Loader.propTypes = {
  loaderStyle: PropTypes.string,
  containerStyle: PropTypes.string,
};
