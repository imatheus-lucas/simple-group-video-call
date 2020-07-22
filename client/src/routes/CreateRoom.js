import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }

  return (
    <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
      <button
        style={{
          border: "none",
          width: 100,
          height: 52,
          fontWeight: "bold",
          borderRadius: 8,
        }}
        onClick={create}
      >
        Create room
      </button>
    </div>
  );
};

export default CreateRoom;
