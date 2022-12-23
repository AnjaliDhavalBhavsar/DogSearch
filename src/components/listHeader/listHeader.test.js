import TestRenderer from "react-test-renderer";
import DogSearch from "../../container/dogSearch";
import DogDataProvider from "../../context";

const data = {
  dogList: [
    {
      imperial: "23 - 25",
      height: "58 - 64",
      id: 9,
      name: "Alaskan Malamute",
      group: "Working",
      lifespan: "12 - 15 years",
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
    },
    {
      imperial: "20 - 22",
      height: "58 - 64",
      id: 10,
      name: "Alaskan ",
      group: "Working",
      lifespan: "12 - 15 years",
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
    },
  ],
};
test("listHeader snapshot", () => {
  const element = new TestRenderer.create(
    (
      <DogDataProvider value={data}>
        <DogSearch />
      </DogDataProvider>
    )
  );
  expect(element).toMatchSnapshot();
});
