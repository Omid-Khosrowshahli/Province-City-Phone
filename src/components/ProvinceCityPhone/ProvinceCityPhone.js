import { useRef } from "react";
import Phone from "../Phone/Phone";
import ProvinceCity from "../ProvinceCity/ProvinceCity";
import "./ProvinceCityPhone.css";

const ProvinceCityPhone = () => {
  const provinceAndCity = useRef();
  const phoneNumber = useRef();

  const showInfo = () => {
    console.log(provinceAndCity.current.getInfo());
    console.log(phoneNumber.current.value);
  };

  return (
    <div className="province-city-phone-container">
      <div className="components">
        <ProvinceCity ref={provinceAndCity} />
        <Phone ref={phoneNumber} />
        <button onClick={showInfo}>Submit</button>
      </div>
    </div>
  );
};

export default ProvinceCityPhone;
