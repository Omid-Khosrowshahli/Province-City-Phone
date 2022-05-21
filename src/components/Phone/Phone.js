import { forwardRef } from "react";
import "./Phone.css";

const Phone = forwardRef((_, ref) => {
  return (
    <div>
      <label>شماره تلفن: </label>
      <input type="text" ref={ref} />
    </div>
  );
});

export default Phone;
