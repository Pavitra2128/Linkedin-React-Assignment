import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="text">
        <img
          className="iconexlightbox-3"
          loading="lazy"
          alt=""
          src="/iconexlightbox-3.svg"
        />
        <div className="catalix">Catalix</div>
      </div>
      <div className="frame">
        <div className="sidebar-tab">
          <img className="iconexlighthome" alt="" src="/iconexlighthome.svg" />
          <div className="home1">Home</div>
        </div>
        <div className="sidebar-tab1">
          <img
            className="iconexlighttimer"
            alt=""
            src="/iconexlighttimer.svg"
          />
          <div className="home2">Activities</div>
        </div>
        <div className="sidebar-tab2">
          <img
            className="iconexlightchart"
            alt=""
            src="/iconexlightchart.svg"
          />
          <div className="home3">Analytics</div>
        </div>
        <div className="sidebar-tab3">
          <img
            className="iconexlightrocket"
            loading="lazy"
            alt=""
            src="/iconexlightrocket.svg"
          />
          <div className="home4">Transformation</div>
        </div>
        <div className="sidebar-tab4">
          <img
            className="iconexlightlayers"
            loading="lazy"
            alt=""
            src="/iconexlightlayers.svg"
          />
          <div className="home5">Library</div>
        </div>
      </div>
      <img
        className="sidebar-icon"
        loading="lazy"
        alt=""
        src="/sidebar-icon.svg"
      />
      <div className="d">
        <div className="sidebar-tab5">
          <img
            className="iconexlightsettings1"
            loading="lazy"
            alt=""
            src="/iconexlightsettings@2x.png"
          />
          <div className="home6">Settings</div>
        </div>
        <div className="sidebar-tab6">
          <img
            className="iconexlightlogout"
            loading="lazy"
            alt=""
            src="/iconexlightlogout.svg"
          />
          <div className="home7">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
