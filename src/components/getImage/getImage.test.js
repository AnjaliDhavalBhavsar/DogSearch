import React from "react";
import { render } from "@testing-library/react";
import { GetImage } from ".";
import * as api from "./api";

jest.mock("./api");
const props = { id: 8 };
test("fetches image from   API", async () => {
  let mockFn = jest.fn();

  GetImage.GetURI = mockFn();
  api.getImageApi.mockResolvedValueOnce([
    {
      breeds: [
        {
          weight: { imperial: "38 - 50", metric: "17 - 23" },
          height: { imperial: "23 - 26", metric: "58 - 66" },
          id: 8,
          name: "Alaskan Husky",
          bred_for: "Sled pulling",
          breed_group: "Mixed",
          life_span: "10 - 13 years",
          temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
          reference_image_id: "-HgpNnGXl",
        },
      ],
      id: "NxTFaEvsq",
      url: "https://cdn2.thedogapi.com/images/NxTFaEvsq.jpg",
      width: 1200,
      height: 699,
    },
  ]);
  render(<GetImage {...props} />);
  expect(mockFn).toHaveBeenCalled();

  expect(api.getImageApi).toHaveBeenCalled();
});
