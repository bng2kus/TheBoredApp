import React, { useState } from "react";

const Bored = () => {
  const [type, setType] = useState("");
  const [participants, setParticipants] = useState("");
  const [accessibility, setAccessibility] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetches bored api data and converts to JSON string to be used
    fetch(`http://www.boredapi.com/api/activity?type=${type}&participants=${participants}&accessibility=${accessibility}`)
      .then((response) => response.json())
      .then((data) => setActivity(data.activity))
      .catch((error) => console.log(error));

      if(!activity){
        setActivity("Activity Not Available");
      }
    // Resets values
    setType("");
    setParticipants("");
    setAccessibility("");
  };

  return (
    <div className="bored">
      <h1 className="title">The Bored Form</h1>
      <div className="bored-form">
        <div className="activity">
          <h2>{activity}</h2>
        </div>
        <p className="instructions">
          Fill in the form, and I will give you an activity to do
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">Activity Type:</label>
          <select
            className="form-select"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="education">Educational</option>
            <option value="recreational">Recreational</option>
            <option value="social">Social</option>
            <option value="diy">DIY</option>
            <option value="charity">Charity</option>
            <option value="cooking">Cooking</option>
            <option value="relaxation">Relaxation</option>
            <option value="music">Music</option>
            <option value="busywork">Busywork</option>
          </select>

          <label className="form-label">Number of Participants:</label>
          <select
            className="form-select"
            required
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
          >
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">Multiple People</option>
          </select>

          <label className="form-label">Level of Accessibility:</label>
          <select
            className="form-select"
            required
            value={accessibility}
            onChange={(e) => setAccessibility(e.target.value)}
          >
            <option value="1">Most Accessible</option>
            <option value="0.5">Somewhat Accessible</option>
            <option value="0">Least Accessible</option>
          </select>

          <button className="submit-button" type="submit">
            Give Me An Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bored;
