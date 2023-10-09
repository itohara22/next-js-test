import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Data = {
  id: number;
  name: string;
  email: string;
  signupDate: string;
};
const userDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data[]>();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/signups");
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(params);

  if (isLoading) <h2>Loading</h2>;
  return <div>user</div>;
};

export default userDetail;
