import React from "react";
import FeaturedExperts from "./featured_experts";
import { Search } from "@material-ui/icons";
import { StarRate } from "@material-ui/icons";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import InputAdornment from "@material-ui/core/InputAdornment";

export default class Filters extends React.Component {
  state = {
    expertise: "",
    focus: "",
    rating: "",
  };
  render() {
    return (
      <div
        style={{
          width: "20%",
        }}
      >
        <h3>Filters</h3>
        <div
          style={{
            border: "1px solid #eff1f7",
            backgroundColor: "white",

            padding: 10,
            marginTop: 20,
            color: "#8f9bb3",
          }}
        >
          <h6 style={{ marginTop: 20 }}>EXPERTISE</h6>
          <OutlinedInput
            style={{ marginTop: 10 }}
            size="small"
            id="outlined-adornment-weight"
            value={this.state.expertise}
            onChange={(event) => {
              this.setState({ expertise: event.target.value });
            }}
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
          <div>
            <Tags item="Branding" />
          </div>

          <h6 style={{ marginTop: 20 }}>FOCUS AREA</h6>
          <OutlinedInput
            style={{ marginTop: 10 }}
            size="small"
            id="outlined-adornment-weight"
            value={this.state.focus}
            onChange={(event) => {
              this.setState({ focus: event.target.value });
              console.log();
            }}
            endAdornment={
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            labelWidth={0}
          />
          <div>
            <Tags item="Focus Area" />
            <Tags item="Focus Area" />
          </div>
          <h6 style={{ marginTop: 20 }}>RATINGS</h6>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div>
              <Checkbox
                style={{ color: "#32bc9b" }}
                // checked={true}
                name="checkedB"
                color="primary"
              />
              <div style={{ display: "inline-block", paddingTop: 10 }}>
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
              </div>
            </div>
            <div>
              <Checkbox
                style={{ color: "#32bc9b" }}
                // checked={true}
                name="checkedB"
                color="primary"
              />
              <div style={{ display: "inline-block", paddingTop: 10 }}>
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
              </div>
            </div>
            <div>
              <Checkbox
                style={{ color: "#32bc9b" }}
                // checked={true}
                name="checkedB"
              />
              <div style={{ display: "inline-block", paddingTop: 10 }}>
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
              </div>
            </div>
            <div>
              <Checkbox
                style={{ color: "#32bc9b" }}
                // checked={true}
                name="checkedB"
                color="primary"
              />
              <div style={{ display: "inline-block", paddingTop: 10 }}>
                <StarRate style={{ color: "#f38454", fontSize: 20 }} />
              </div>
            </div>
          </div>
          <h6 style={{ marginTop: 20 }}> PRICE</h6>
          <div>
            <FormControlLabel
              style={{ display: "block" }}
              control={
                <Checkbox name="checkedG" style={{ color: "#32bc9b" }} />
              }
              label="Free"
            />
            <FormControlLabel
              style={{ display: "block" }}
              control={
                <Checkbox name="checkedG" style={{ color: "#32bc9b" }} />
              }
              label="Less than $25"
            />
            <FormControlLabel
              style={{ display: "block" }}
              control={
                <Checkbox name="checkedG" style={{ color: "#32bc9b" }} />
              }
              label="$25-$30"
            />
          </div>
        </div>
      </div>
    );
  }
}

function Tags(props) {
  return (
    <div
      style={{
        backgroundColor: "#3c67e8",
        color: "white",
        borderRadius: 10,
        padding: 3,
        paddingLeft: 10,
        paddingRight: 10,
        display: "inline-block",
        margin: 10,
        fontSize: 12,
      }}
    >
      {props.item}
    </div>
  );
}
