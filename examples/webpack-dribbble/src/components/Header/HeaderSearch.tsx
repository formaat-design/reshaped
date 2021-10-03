import React from "react";
import { Frame, Icon, TextField, Hidden, Actionable } from "arcade";
import IconSearch from "icons/Search";
import * as T from "./Header.types";

const HeaderSearch = (props: T.SearchProps) => {
  const { expanded } = props;
  const field = (
    <TextField
      name="search"
      placeholder="Search"
      color="inherit"
      startSlot={<Icon svg={IconSearch} color="neutral-faded" />}
    />
  );

  if (expanded) return field;

  return (
    <>
      <Hidden till="xl">
        <Frame width={140}>{field}</Frame>
      </Hidden>

      <Hidden till="l" from="xl">
        <Actionable href="#">
          <Icon svg={IconSearch} color="neutral-faded" />
        </Actionable>
      </Hidden>
    </>
  );
};

export default HeaderSearch;
