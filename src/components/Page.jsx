import React, { useEffect } from "react";
import Nav from "./Nav";

const Page = (props) => {
  useEffect(() => {
    if (props.title) {
      document.title = props.title;
    }
  }, [props.title]);
  return (
    <div className="constainer">
      <Nav />
      {props.children}
    </div>
  );
};

export default Page;
