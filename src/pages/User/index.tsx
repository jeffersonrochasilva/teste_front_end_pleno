import { Box } from "@mui/material";
// components
import { FaceUser } from "../../shared/components/user";
// axios
import axios from "axios";
import { useEffect, useState } from "react";

interface Users {
  id: string;
  name: string;
  sexo: string;
}

export const User = () => {
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    getUserInApi();
  }, []);
  const getUserInApi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users/");
      setData(response.data);
      console.log("response", response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box padding={5}>
      {data && data.map((item) => <FaceUser item={item} key={item.id} />)}
    </Box>
  );
};
