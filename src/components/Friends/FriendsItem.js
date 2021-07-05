import React from "react";
import PropTypes from "prop-types";
import s from "./FriendsItem.module.css";

export default function FriendsItem({ name, isOnline, avatar }) {
  return (
    <>
      <span
        className={s.status}
        isOnline={isOnline}
        style={{
          backgroundColor: isOnline ? "green" : "red",
        }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
