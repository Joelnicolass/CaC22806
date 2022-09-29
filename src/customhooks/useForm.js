import { useState } from "react";

const useForm = (form) => {
  const [data, setData] = useState(form);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (fn) => {
    fn();
  };

  return { handleChange, handleSubmit, data };
};

export default useForm;
