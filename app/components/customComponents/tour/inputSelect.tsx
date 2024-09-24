import React from 'react';

type Location = {
  label: string;
  value: string | number;
};

type Props = {
  locations: Location[]; // List of locations to be displayed
  name?: string; // Name attribute for the select element
  id?: string; // ID attribute for the select element
  value?: string | number; // Controlled value of the select element
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Change event handler
  placeholder?: string; // Placeholder text for the select dropdown
  className?: string; // Additional custom class names
};

const LocationSelect = ({
  locations,
  name,
  id,
  value,
  onChange,
  placeholder = "Select a location",
  className = ""
}: Props) => {
  return (
    <select
      className={`text-sm placeholder:text-[#4D4D4D] p-4 border focus:outline-[#b4b1b1] border-[#b4b1b1] bg-white ${className}`}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {locations.map((location, index) => (
        <option key={index} value={location.value}>
          {location.label}
        </option>
      ))}
    </select>
  );
};

export default LocationSelect;
