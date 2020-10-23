import React from "react";
import { Box, Text, Heading } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      height={60}
      display="flex"
      alignItems="center"
      color="blue"
      padding={1}
      shape="roundedBottom"
      justifyContent="around"
    >
      <NavLink activeClassName="active"  to="/signup">
        <Text size="xl" weight="bold" color="white">
          Sign Up
        </Text>
      </NavLink>

      <NavLink activeClassName="active" exact to="/">
        <Heading size="md" color="white">
          E-store
        </Heading>
      </NavLink>

      <NavLink activeClassName="active" to="/signin">
        <Text size="xl" weight="bold" color="white">
          Sign In
        </Text>
      </NavLink>
    </Box>
  );
};

export default Navbar;
