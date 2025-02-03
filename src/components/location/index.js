import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9202064607216!2d-77.0260611!3d38.8800674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7808abd89eb%3A0x336c2f6bd257a392!2sThe%20Anthem!5e0!3m2!1sen!2s!4v1738602316112!5m2!1sen!2s"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowFullScreen
        title="googleMaps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
