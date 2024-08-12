import axios from "axios";
import { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("https://portfolio-server-ah8e.onrender.com/add-skill")
      .then((res) => setSkills(res.data));
  }, []);
  return [skills];
};

export default useSkills;
