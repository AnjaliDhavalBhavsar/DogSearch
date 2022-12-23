import PropTypes from "prop-types";

import { DogListItem } from "../dogListItem";
import { ListHeader } from "../listHeader";
import NoDataAvailable from "../noData";
import { STRING, RANGE } from "../../constants";

export const DogList = ({ list = [] }) => {
  const headers = [
    { name: "Image", key: "image", type: STRING },
    { name: "Name", key: "name", sort: true, type: STRING },
    { name: "Height", key: "height", sort: true, type: RANGE },
    { name: "LifeSpan", key: "lifespan", sort: true, type: RANGE },
    { name: "Breed Group", key: "breed_group", sort: false, type: STRING },
  ];
  const getList = (list) => {
    return list.map((item) => <DogListItem dogDetail={item} key={item.id} />);
  };

  return (
    <div>
      <ListHeader header={headers} />
      {list?.length > 0 ? getList(list) : <NoDataAvailable />}
    </div>
  );
};

DogList.propTypes = {
  list: PropTypes.array.isRequired,
};
