import { Header } from "semantic-ui-react";
import { Nav } from "../components/Nav";

export const Top = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", paddingTop: 20 }}>
        <div style={{ flex: "120px 0 0" }}>
          <img
            src="/images/sumin.jpg"
            alt="logo"
            style={{ display: "block", width: 100, borderRadius: "50%" }}
          />
        </div>
        <Header as="h1" style={{ marginBottom: "24px" }}>
          Sumin's cosmetics shop
        </Header>
      </div>
      <Nav />
    </>
  );
};
