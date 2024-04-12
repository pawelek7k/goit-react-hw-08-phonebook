import PropTypes from "prop-types";
import { useState } from "react";
import FilterStyles from "./FilterStyles";

const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <FilterStyles>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </FilterStyles>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
