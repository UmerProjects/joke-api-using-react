import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    ratings: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      ratings: 5,
    });
  };

  return (
    <div>
      <h4>Give a comment!</h4>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <br />
        <textarea
          placeholder="Add New Remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          id="remarks"
          name="remarks"
        >
          Comments
        </textarea>
        <br />
        <br />
        <label htmlFor="ratings">Ratings</label>
        <br />
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formData.ratings}
          onChange={handleInputChange}
          id="ratings"
          name="ratings"
        />
        <br />
        <br />
        <button>Add button</button>
      </form>
    </div>
  );
}
