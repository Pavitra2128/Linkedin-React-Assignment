import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  arrow2,
  iconexLightTimeCircle,
  tEXTDAYSTOTALACTIV,
  createContent,
  arrow3,
  propPadding,
  propPaddingRight,
}) => {
  const approvalAreaStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const createContentStyle = useMemo(() => {
    return {
      paddingRight: propPaddingRight,
    };
  }, [propPaddingRight]);

  return (
    <div className="frame-parent4">
      <div className="frame-wrapper2">
        <div className="frame-parent5">
          <div className="vector-parent">
            <img className="frame-inner" alt="" src={arrow2} />
            <img
              className="iconexlighttime-circle1"
              loading="lazy"
              alt=""
              src={iconexLightTimeCircle}
            />
          </div>
          <div className="pending-approval-button1">
            <div className="pending-approval-button-child" />
            <div className="p-o-l-y-g-o-n-f-l-o-w-t-i-m-e1">
              <div className="l-i-n">!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="t-e-x-t-d-a-y-s-t-o-t-a-l-a-c-parent">
        <img
          className="t-e-x-t-d-a-y-s-t-o-t-a-l-a-c"
          loading="lazy"
          alt=""
          src={tEXTDAYSTOTALACTIV}
        />
        <div className="approval-area" style={approvalAreaStyle}>
          <div className="approval-area-child" />
          <div className="create-content" style={createContentStyle}>
            {createContent}
          </div>
        </div>
      </div>
      <div className="vector-wrapper">
        <img className="arrow-icon" alt="" src={arrow3} />
      </div>
    </div>
  );
};

export default FrameComponent;
