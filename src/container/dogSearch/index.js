import { useCallback, useState } from "react";

import { useDogContext } from "../../context/dogContext";
import { debounce, normalizeResponse } from "../../utils";
import { SearchBox, Loader, DogList } from "../../components";
import { endpoint, api_value, ActionType } from "../../constants";

import "./dogSearch.css";

const DogSearch = () => {
  const {
    state: { dogList },
    dispatchAction,
  } = useDogContext();

  const [isLoading, setIsLoading] = useState(false);

  const searchBreed = async (searchText) => {
    setIsLoading(true);
    await fetch(`${endpoint}v1/breeds/search?q=${searchText}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": api_value,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        dispatchAction(ActionType.SET_DOG_LIST, normalizeResponse(data));
      })
      .catch((err) => {
        alert(err.messge);
        setIsLoading(false);
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(debounce(searchBreed), []);

  return (
    <>
      <SearchBox handleChange={handleSearch}></SearchBox>
      {isLoading && <Loader containerStyle="loaderContainer" />}
      <div className="container">
        <DogList list={dogList} />
      </div>
    </>
  );
};

export default DogSearch;
