import React from "react";

const UserCard = ({ name, email, website }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        alignItems: "center",
        width: "300px",
      }}
    >
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h5>{website}</h5>
    </div>
  );
};

export default UserCard;
