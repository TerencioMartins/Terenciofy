import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"
import { useProviderValue } from "../../contexts/provider";

function Header() {
    const [{ user }, dispatch] = useProviderValue();

  return (
    <div className="header">
      <div className="header__left">
          <SearchIcon />
          <input
          placeholder="Artistas, músicas ou podcasts"
          type='text'
          />
          </div>
      <div className="header__right">
          <a href="https://terenciomartins.netlify.app/" target={"_blank"}><strong>Portfólio</strong></a>
          <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
          <h4>{user?.display_name}</h4>
          </div>
    </div>
  );
}

export default Header;
