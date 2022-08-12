import React from "react";
import TvShowDetails from "../components/tvDetails";
import { MemoryRouter } from "react-router";
import sampleTVShowData from "./sampleTVShowData";

export default {
  title: "Tv Details Page/TvShowDetails",
  component: TvShowDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TvShowDetails tvSeries={sampleTVShowData} />;

Basic.storyName = "Default";