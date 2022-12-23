import PropTypes from "prop-types";
import "./search.css";

export const SearchBox = ({
  label = "Search",
  placeholder = "Search for dog ",
  containerStyle = "searchContainer",
  labelStyle = "searchText",
  searchStyle = "searchInput",
  handleChange,
}) => {
  return (
    <div className={containerStyle}>
      <div className={labelStyle}>{label}</div>
      <input
        type="text"
        className={searchStyle}
        aria-label="SearchInput"
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};

SearchBox.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  containerStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  searchStyle: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
