import React from "react";
import "./menu-item.styles.scss";
import { Link } from "react-router-dom";

export default function MenuItem({ title, imageUrl, size, linkUrl }) {

  return (
    <Link to={`/${linkUrl}`} className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </Link>
  );
}
