import PropTypes from "prop-types";
import { useState } from "react";

export const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search..."
    />
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
