import React from "react";
import FeaturedExperts from "./featured_experts";
import Filters from "./filters";

export default class FindExpertLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          flexDirection: "row",
          padding: 15,
          paddingBottom: 0,
          margin: 20,
        }}
      >
        <Filters />
        <FeaturedExperts />
      </div>
    );
  }
}
