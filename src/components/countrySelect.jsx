import React from "react";
import { getCountries } from "../services/country";
import Select from "./select";

class CountrySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    getCountries().then(response => {
      this.setState({ countries: response });
    });
  }
  render() {
    const { value, onHandleChange } = this.props;
    return (
      <Select
        name={"country"}
        placeholder={"select a country"}
        value={value}
        onChange={onHandleChange}
      >
        {this.getOptions()}
      </Select>
    );
  }

  getOptions() {
    const { countries } = this.state;
    if (countries.length > 0) {
      return countries.map(country => (
        <option key={country.countryCode} value={country.countryCode}>
          {country.countryName}
        </option>
      ));
    }
  }
}

export default CountrySelect;
