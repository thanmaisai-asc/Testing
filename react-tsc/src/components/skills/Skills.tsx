import React, { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

function Skills(props: SkillsProps) {




  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
        setTimeout(() => {
            setIsLoggedIn(true)
        }, 500);
  },[])


  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>start learning</button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </>
  );
}

export default Skills;
