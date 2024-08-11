import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    _id: null,
    boxSize: "",
    boxHolder: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMailbox(formData); 
    navigate("/"); 
  };

  return (
    <>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder: </label>
        <input
          type="text"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Box Size: </label>
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="">Select a size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Add Mailbox</button>
      </form>
    </>
  );
};

export default MailboxForm;
