import React from "react";
import data from "../../DATA/expert.json";
import {
  LocationOnOutlined,
  TranslateOutlined,
  TimerOutlined,
  StarRate,
  FavoriteBorder,
} from "@material-ui/icons";
const expert = data.experts;
export default class FeaturedExperts extends React.Component {
  render() {
    return (
      <div style={{ width: "80%", marginLeft: 10 }}>
        <h3 style={{ marginLeft: 20 }}>Featured Experts</h3>
        <Expert />
      </div>
    );
  }
}

function Expert(props) {
  console.log("hii", expert.name);
  return (
    <div>
      {expert.map((val) => (
        <div
          style={{
            display: "flex",
            margin: 20,
            backgroundColor: "white",
            border: "1px solid #eff1f7",

            padding: 10,
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              style={{ width: 72, height: 65, borderRadius: 100 }}
            ></img>
            <p style={{ marginTop: 10 }}>
              Price : <span style={{ color: "#7fd5c0" }}>FREE</span>
            </p>
            <div style={{ color: "#f38454", display: "flex", marginTop: 10 }}>
              <StarRate style={{}} />
              <p>{val.rating}</p>
            </div>
          </div>

          <div style={{ flexGrow: 8 }}>
            <div style={{ borderBottom: "1px solid #eff1f7" }}>
              <div style={{ display: "flex" }}>
                <h4 style={{ flexGrow: 1 }}>{val.name}</h4>
                <div style={{ color: "#f38454" }}>
                  <FavoriteBorder />
                  <button
                    class="btn"
                    style={{
                      backgroundColor: "#f38454",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    View Profile
                  </button>
                </div>
              </div>
              <h6 style={{ marginTop: 5 }}>{val.designation}</h6>
            </div>
            <div style={{ display: "flex", color: "#9eaec1", marginTop: 20 }}>
              <div style={{ marginRight: 20, display: "flex" }}>
                <TimerOutlined />
                <p>{val.sessions} free sessions available</p>
              </div>
              <div style={{ marginRight: 20, display: "flex" }}>
                <LocationOnOutlined />
                {val.location}
              </div>
              <div style={{ marginRight: 20, display: "flex" }}>
                <TranslateOutlined />
                {val.language}
              </div>
            </div>
            <div style={{ flexWrap: "wrap", marginTop: 20, marginBottom: 20 }}>
              {val.description}
            </div>
            <div style={{ display: "flex" }}>
              {val.skills.map((skill) => (
                <div
                  style={{
                    backgroundColor: "#edf1f7",
                    color: "#90a3b9",
                    borderRadius: 20,
                    paddingLeft: 10,
                    paddingRight: 10,
                    margin: 10,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
