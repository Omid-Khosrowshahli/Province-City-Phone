import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./ProvinceCity.css";
import DATA from "../../DATA.json";

const ProvinceCity = forwardRef((_, ref) => {
  const [province, setProvince] = useState(null);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState(null);

  const citiesArray = () => {
    let arr = DATA.filter((item) => item.province === province);
    return arr;
  };

  const provinceOnChange = (event) => {
    setProvince(event.target.value);
  };

  useEffect(() => {
    const res = citiesArray();
    res.length > 0 && setCities(res[0].cities);
  }, [province]);

  useImperativeHandle(
    ref,
    () => ({
      getInfo: () => {
        return { province: province, city: city };
      },
    }),
    [city]
  );

  return (
    <div className="container">
      <select
        onChange={(event) => provinceOnChange(event)}
        className="container-item"
      >
        <option className="option">انتخاب استان</option>
        {DATA.map((item) => (
          <option className="option">{item.province}</option>
        ))}
      </select>

      <select
        onChange={(event) => setCity(event.target.value)}
        className="container-item"
      >
        <option className="option">انتخاب شهر</option>
        {cities.length &&
          cities.map((item) => <option className="option">{item}</option>)}
      </select>
    </div>
  );
});

export default ProvinceCity;
