import React, { useState } from "react";

export default function Form() {
  const [data, setData] = useState([{ name: "", age: "" }]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleInput = (index, e, type) => {
    const prevFormData = [...data];
    // console.log(prevFormData);
    const newName = type === "name" ? e.target.value : prevFormData[index].name;
    const newAge = type === "age" ? e.target.value : prevFormData[index].age;

    prevFormData[index] = {
      name: newName,
      age: newAge,
    };
    setData(prevFormData);
  };

  const handleSubmit = () => {
    console.log(data);
  };

  const handleAddField = () => {
    setData([...data, { name: "", age: "" }]);
  };

  const handleRemove = (index) => {
    const prevFormData = [...data];
    prevFormData.splice(index, 1);
    setData(prevFormData);
  };

  return (
    <div>
      {data?.map((form, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id={index}
            value={form.name}
            onChange={(e) => handleInput(index, e, "name")}
          />
          <input
            type="number"
            age="age"
            placeholder="Age"
            id={index}
            value={form.age}
            onChange={(e) => handleInput(index, e, "age")}
          />
          <button onClick={() => handleRemove(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddField}>Add More..</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
