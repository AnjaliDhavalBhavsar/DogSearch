import PropTypes from "prop-types";

import {
  sortNumberRangeAscendingOrder,
  sortStringAscendingOrder,
  sortStringDescendingOrder,
  sortNumberRangeDecendingOrder,
} from "../../utils";
import { useDogContext } from "../../context/dogContext";
import { STRING, ActionType } from "../../constants";
import iconsUpDown from "../../images/iconsUpDown.png";

import "./listHeader.css";

export const ListHeader = ({ header = [] }) => {
  const {
    state: { dogList, isNameAscSort, isLifeSpanAscSort, isHeightAscSort },
    dispatchAction,
  } = useDogContext();
  const widthConstant = 90 / (header.length - 1);

  const handleClick = ({ sort, type, key }) => {
    if (sort) {
      if (type === STRING) {
        !isNameAscSort
          ? dispatchAction(
              ActionType.SORT_DOG_BY_NAME_ASC,
              sortStringAscendingOrder(dogList, key)
            )
          : dispatchAction(
              ActionType.SORT_DOG_BY_NAME_DEC,
              sortStringDescendingOrder(dogList, key)
            );
      } else if (key === "height") {
        isHeightAscSort
          ? dispatchAction(
              ActionType.SORT_DOG_BY_HEIGHT_DESC,
              sortNumberRangeDecendingOrder(dogList, key)
            )
          : dispatchAction(
              ActionType.SORT_DOG_BY_HEIGHT_ASC,
              sortNumberRangeAscendingOrder(dogList, key)
            );
      } else if (key === "lifespan") {
        isLifeSpanAscSort
          ? dispatchAction(
              ActionType.SORT_DOG_BY_LIFE_DESC,
              sortNumberRangeDecendingOrder(dogList, key)
            )
          : dispatchAction(
              ActionType.SORT_DOG_BY_LIFE_ASC,
              sortNumberRangeAscendingOrder(dogList, key)
            );
      }
    }
  };
  return (
    <div>
      {header.map((item) => (
        <button
          className="headerButton"
          style={{
            width: item?.name === "Image" ? "10%" : `${widthConstant}%`,
            backgroundImage: item?.sort && `url(${iconsUpDown})`,
          }}
          key={item.name}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

ListHeader.propTypes = {
  header: PropTypes.array,
};
