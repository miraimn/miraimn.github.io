import "../../../css/haku-gridview.scss";
import Card4 from "../../elements/Card4";
import Card3 from "../../elements/Card3";
import Profile from "../../haku/Profile";

export default function GridView(props) {
  var gridData = [];
  switch (props.cardName) {
    case "Card4":
      for (let i = 0; i < props.data.length; i++) {
        gridData.push(
          <div className="grid-cell haku-from-bottom" haku-ani-delay={200}>
            <Card4 data={props.data[i]}></Card4>
          </div>
        );
      }
      break;
    case "Card3":
      for (let i = 0; i < props.data.length; i++) {
        gridData.push(
          <div className="grid-cell haku-from-bottom" haku-ani-delay={200}>
            <Card3 data={props.data[i]}></Card3>
          </div>
        );
      }
      break;
    case "profile":
      for (let i = 0; i < props.data.length; i++) {
        gridData.push(
          <label className="grid-cell haku-from-bottom" haku-ani-delay={200}>
            <Profile
              data={props.data[i]}
              type={i % 2 == 0 ? "black" : "blue"}
            ></Profile>
          </label>
        );
      }
      break;
  }

  return (
    <div>
      <div
        className="grid-title haku-from-bottom"
        style={{ fontSize: "2.5rem", marginTop: "10rem" }}
        haku-ani-delay={200}
      >
        {props.title}
      </div>
      <br />
      <label
        className={"grid-main" + (props.margin == "none" ? "-no-margin" : "")}
      >
        {gridData}
      </label>
    </div>
  );
}
