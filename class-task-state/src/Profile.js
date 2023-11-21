import React from "react";
import { useState } from "react";

function Profile(prop) {
  const [userInfo, setUserInfo] = useState();
  const [educationInfo, setEducationInfo] = useState();

  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showEducationInfo, setShowEducationInfo] = useState(false);

  const handleAboutClick = () => {
    setUserInfo({ name: "Haider", email: "haiderkamrann@gmail.com", age: 24 });
    setShowUserInfo(true);
    setShowEducationInfo(false);
  };

  const handleEducationClick = () => {
    setEducationInfo({
      degreeProgram: "BSCS",
      university: "University of South Asia",
    });
    setShowUserInfo(false);
    setShowEducationInfo(true);
  };

  return (
    <>
      <div className="card-data">
        <p>User Name: {prop.data.name}</p>
        <p>Age: {prop.data.age}</p>
        <p>Gender: {prop.data.gender}</p>
        <button className="btn" onClick={prop.changeUser}>
          Change
        </button>
      </div>

      <div>
        {showUserInfo && userInfo && (
          <div>
            <h2>About User</h2>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Age: {userInfo.age}</p>
          </div>
        )}

        {showEducationInfo && educationInfo && (
          <div>
            <h2>Education</h2>
            <p>Degree Program: {educationInfo.degreeProgram}</p>
            <p>University: {educationInfo.university}</p>
          </div>
        )}
      </div>

      <div>
        <button className="btn" onClick={handleAboutClick}>About</button>
        <button className="btn" onClick={handleEducationClick}>Education</button>
      </div>
    </>
  );
}

export default Profile;
