import React, { useState } from "react";

const FormExampleForm = () => {
  const [state, nextState] = useState({
    name: "",
    rollNumber: "",
    checkbox: false,
    image: null,
  });

  function removeImage() {
    nextState((prevState) => {
      return { ...prevState, image: null };
    });
  }

  const inputHandler = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      nextState((prevState) => {
        return { ...prevState, image: e.target.files[0] };
      });
    } else {
      const inputname = e.target.name;
      const value = e.target.value;
      nextState((prevState) => {
        return { ...prevState, [inputname]: [value] };
      });
    }
  };

  const checkedHandler = (e) => {
    nextState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.checked };
    });
  };
  const { name, rollNumber, checkbox, image } = state;
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={inputHandler} />
        <br />
        <label htmlFor="roll_numb">Roll Number:</label>
        <input
          type="number"
          id="roll_numb"
          name="rollNumber"
          onChange={inputHandler}
        />
        <br />
        <label htmlFor="check_box">Term & Condition:</label>
        <input
          type="checkbox"
          id="check_box"
          name="checkbox"
          onChange={checkedHandler}
        />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <input
          id="file-input"
          accept="image/*"
          type="file"
          onChange={inputHandler}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "200px",
            display: "none",
          }}
        />
        <div
          style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }}
        >
          <label htmlFor="file-input">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="Thumb"
              style={{
                width: "100px",
                border: "2px solid black",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </label>
          <button
            onClick={removeImage}
            style={{
              display: "block",
              marginLeft: "-50px",
              marginRight: "auto",
              width: "200px",
            }}
          >
            Remove
          </button>
        </div>
      </form>
      {JSON.stringify(state)}
    </>
  );
};

export default FormExampleForm;
