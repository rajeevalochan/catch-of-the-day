import React from "react";

const Header = (
  { tagline } //(props.tagline) === ({tagline})
) => (
  <React.Fragment>
    <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Day
      </h1>
      <h3 className="tagline">
        <span>{tagline}</span>
      </h3>
    </header>
  </React.Fragment>
);

export default Header;
