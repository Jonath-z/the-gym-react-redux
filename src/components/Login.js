import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/user";
export default function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({ name: "Jonathan", email: "jonathan@gmail.com", age: 20 })
          )
        }
      >
        Login
      </button>
    </div>
  );
}
