import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

const Top = () => {
  return (
    <div>
      <div style={{ display: "flex", padding: 20 }}>
        <div style={{ flex: "100px 0 0 " }}>
          <img
            src={"/images/hyoil.jpg"}
            alt="logo"
            style={{ display: "block", width: 80 }}
          ></img>
        </div>
        <Header as="h1">Hyoil</Header>
      </div>
      <Gnb></Gnb>
    </div>
  );
};

export default Top;
