import TestRenderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import DogSearch from ".";
import DogDataProvider from "../../context";
import { debounce } from "../../utils";

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

afterEach(cleanup);

jest.useFakeTimers();

describe("debounce util", () => {
  const callback = jest.fn();

  beforeEach(() => {
    // Reset in case there are more test cases depending on the same mock
    callback.mockReset();
  });

  it("should call debounce util", () => {
    const debouncedCallback = debounce(callback, 10);
    for (let i = 0; i < 100; i++) {
      // Execute the debounced function
      debouncedCallback();
    }

    // Should not have been called yet since 10ms is not passed
    expect(callback).not.toHaveBeenCalled();

    // Fast forward time => 10ms will be passed
    jest.runAllTimers();

    // Now the callback should have been called exactly once
    expect(callback).toBeCalledTimes(1);
  });
});

test("Dog Search snapshot", () => {
  const element = new TestRenderer.create(
    (
      <DogDataProvider value={data}>
        <DogSearch />
      </DogDataProvider>
    )
  );
  expect(element).toMatchSnapshot();
});
