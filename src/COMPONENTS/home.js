import React from "react";
import {
  NotificationsNoneOutlined,
  SmsOutlined,
  ExpandMoreOutlined,
  FiberManualRecord,
} from "@material-ui/icons";
import FindExpertLayout from "./find_expert.js/layout";
export default class Home extends React.Component {
  state = {
    selected: "find",
  };
  render() {
    return (
      <div>
        <header
          style={{
            backgroundColor: "#fff6f3",
            display: "flex",
            alignItems: "stretch",
            flexDirection: "row",
            padding: 15,
            paddingBottom: 0,
          }}
        >
          <FiberManualRecord style={{ color: "#32bc9b", marginRight: 5 }} />
          <h3 style={{ flexGrow: 3 }}>Logo</h3>
          <div style={{ flexGrow: 3 }}>
            <button
              class="btn"
              style={{
                color: this.state.selected === "dashboard" && "#f38454",
                borderBottom:
                  this.state.selected === "dashboard" && "2px solid #f38454 ",
              }}
              onClick={() => this.setState({ selected: "dashboard" })}
            >
              Dashboard
            </button>
            <button
              class="btn"
              style={{
                color: this.state.selected === "find" && "#f38454",
                borderBottom:
                  this.state.selected === "find" && "2px solid #f38454 ",
              }}
              onClick={() => this.setState({ selected: "find" })}
            >
              Find Experts
            </button>
            <button
              class="btn"
              style={{
                color: this.state.selected === "Discussion" && "#f38454",
                borderBottom:
                  this.state.selected === "Discussion" && "2px solid #f38454 ",
              }}
              onClick={() => this.setState({ selected: "Discussion" })}
            >
              Discussion
            </button>
          </div>
          <button class="btn" style={{ color: "#f38454" }}>
            <NotificationsNoneOutlined />
          </button>
          <button class="btn" style={{ color: "#f38454" }}>
            <SmsOutlined />
          </button>
          <button class="btn" style={{ color: "#f38454" }}>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              style={{ width: 33, height: 33, borderRadius: 100 }}
            ></img>
            <ExpandMoreOutlined />
          </button>
        </header>

        {this.state.selected === "find" && <FindExpertLayout />}
      </div>
    );
  }
}
