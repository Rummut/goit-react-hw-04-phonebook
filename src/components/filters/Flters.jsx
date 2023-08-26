import { Input } from "components/contact-form/ContactForm.styled";

export const Filters = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      name="filter"
      placeholder="Write to filter name"
      onChange={event => onChange(event.target.value)}
    />
  );
};
