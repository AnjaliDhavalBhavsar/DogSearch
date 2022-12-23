import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Loader } from "../loader";
import noImage from "../../images/noImage.png";
import { getImageApi } from "./api";
import "./image.css";

/**
 * to search dog by their breed Name
 */

export const GetImage = ({ id, className }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(noImage);

  const GetURI = useCallback(async (id) => {
    setIsLoading(true);
    getImageApi(id)
      .then((data) => {
        setImageUrl(data[0].url);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        return console.log(err);
      });
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsLoading(true);
    GetURI(id);
  }, [GetURI, id]);

  return (
    <div className={className}>
      {isLoading ? (
        <Loader containerStyle="imageLoader" />
      ) : (
        <img
          className="imageClass"
          src={imageUrl}
          alt="NoImage"
          height="100px"
          width="100px"
        />
      )}
    </div>
  );
};

GetImage.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
};
