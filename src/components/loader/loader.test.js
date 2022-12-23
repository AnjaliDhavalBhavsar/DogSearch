import renderer from "react-test-renderer";
import { Loader } from ".";

test("Loader testing", () => {
  const element = renderer.create(<Loader />).toJSON();
  expect(element).toMatchSnapshot();
});
