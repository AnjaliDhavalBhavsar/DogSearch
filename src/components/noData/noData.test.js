import renderer from "react-test-renderer";
import NoDataAvailable from ".";

test("NoDataAvailablesnapshot testing", () => {
  const element = renderer.create(<NoDataAvailable />).toJSON();
  expect(element).toMatchSnapshot();
});
