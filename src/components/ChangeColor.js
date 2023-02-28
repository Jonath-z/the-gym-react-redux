import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "./features/theme";

export default function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  return (
    <div>
      <input type="color" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => dispatch(changeTheme(color))}>Change color</button>
    </div>
  );
}
