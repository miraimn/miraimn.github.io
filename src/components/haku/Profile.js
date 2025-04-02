import "../../css/haku-profile.scss";
export default function Profile(props) {
  return (
    <div className={"haku-profile-main-parent haku-profile-main-" + props.type}>
      <img className="haku-profile-img" src={props.data.picUrl} />
      <div className="haku-profile-img-mask"></div>
      <div className="haku-profile-main">
        <div className="haku-profile-text-parent">
          <div className="haku-profile-main-title">{props.data.title}</div>
          <div className="haku-profile-main-text">{props.data.text}</div>
        </div>
      </div>
    </div>
  );
}
