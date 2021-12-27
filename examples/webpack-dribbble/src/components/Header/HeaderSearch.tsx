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
      startSlot={<Icon svg={IconSearch} color="neutral-faded" />}
    />
  );

  if (expanded) return field;

  return (
    <>
      <Hidden hide={{ s: true, xl: false }}>
        <Frame width="140px">{field}</Frame>
      </Hidden>

      <Hidden hide={{ s: true, l: false, xl: true }}>
        <Actionable href="#">
          <Icon svg={IconSearch} color="neutral-faded" />
        </Actionable>
      </Hidden>
    </>
  );
};

export default HeaderSearch;
