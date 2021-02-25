import { Menu } from "semantic-ui-react";

export const Nav = () => {
  const activeItem = "home";
  return (
    <Menu inverted>
      <Menu.Item
        name="Home"
        active={activeItem === "home"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="About"
        active={activeItem === "messages"}
        // onClick={this.handleItemClick}
      />
      <Menu.Item
        name="Contact Us"
        active={activeItem === "friends"}
        // onClick={this.handleItemClick}
      />
    </Menu>
  );
};
