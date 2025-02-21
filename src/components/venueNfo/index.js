import React from "react";

import { Zoom } from "react-awesome-reveal";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item" triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">
                    Feb 20, 2025
                    <br />
                    @01:20:00pm
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="vn_item" triggerOnce delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_location})` }}
                  ></div>

                  <div className="vn_title">Event location</div>
                  <div className="vn_desc">375 Deer Oak, Oakland, CA 9835</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VenueNfo;
