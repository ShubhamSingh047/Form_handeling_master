import React, { useState } from "react";
import './Form.scss'


const FormExampleForm = () => {
  const [state, nextState] = useState({
    name: "",
    rollNumber: "",
    checkbox: false,
    image: null,
  });

  const removeImage=()=> {
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
  const { image } = state;
  return (
    <>
      <form className="container-form">
      
      <div className="field">
        <label className="field-label" htmlFor="name">Name</label>
        <input className="field-input" type="text" id="name" name="name" onChange={inputHandler} />
      </div>

      <div className="field">
        <label className="field-label" htmlFor="roll_numb">Roll Number:</label>
      <input
          className="field-input"
          type="number"
          id="roll_numb"
          name="rollNumber"
          onChange={inputHandler}
        />
      </div>
      
      <div className="field">
        <label className="field-label" htmlFor="check_box">Term & Condition:</label>
      <input
          className="field-input"
          type="checkbox"
          id="check_box"
          name="checkbox"
          onChange={checkedHandler}
        />
      </div>

        <div
          style={{ width: "100px", marginLeft: "auto", marginRight: "auto" }}
        >
          <label className="field-label" htmlFor="file-input">
          </label>
        <input
          className="field-input"
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
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              }
              alt="Thumb"
              className="form-image"
            />
          <button
            onClick={removeImage}
            className="form-button"
          >
            Remove
          </button>
        </div>

        <input type="submit" value="Submit" />

      </form>
      {JSON.stringify(state)}
    </>
  );
};

export default FormExampleForm;
