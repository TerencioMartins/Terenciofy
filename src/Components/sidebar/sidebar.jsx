import React from "react";
import "./sidebar.css";
import SidebarOptions from "./sidebarOptions";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import QueueMusicOutlinedIcon from "@material-ui/icons/QueueMusicOutlined";
import { useProviderValue } from "../../contexts/provider";
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';

function Sidebar() {
  const [{ playlists }, dispatch] = useProviderValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo"
      />
      <SidebarOptions Icon={HomeOutlinedIcon} title="Início" />
      <SidebarOptions Icon={SearchIcon} title="Buscar" />
      <SidebarOptions Icon={QueueMusicOutlinedIcon} title="Sua Biblioteca" />

      <br />
      <SidebarOptions Icon={AddBoxRoundedIcon} title="Criar Playlist" />
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOptions title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
