import axios from "axios";
import { useEffect, useState } from "react";

const useSkills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/add-skill")
      .then((res) => setSkills(res.data));
  }, []);
  return [skills];
};

export default useSkills;
