import {
  Container,
  Data,
  Heading2,
  Title
} from "../../components/sharedstyles";

type Data = {
  id: number;
  name: string;
  email: string;
  signupDate: string;
};

type LoginData = {
  userId: number;
  date: string;
  device: string;
};

type UpgradeData = {
  userId: number;
  oldPlan: string;
  newPlan: string;
  upgradeDate: string;
};

const userDetail = ({ user, userLogin }) => {
  const userData = user[0];
  return (
    <Container>
      <Title>User Details</Title>
      {userData ? (
        <Heading2>{userData.name}</Heading2>
      ) : (
        <Heading2>User not found</Heading2>
      )}

      {userLogin[0] ? (
        <Data>
          <span>Last Login: {userLogin[0].date}</span>
          <span>Device: {userLogin[0].device}</span>
        </Data>
      ) : (
        <Data>
          <span>Login Data not available!!!</span>
        </Data>
      )}
    </Container>
  );
};

export default userDetail;

export async function getServerSideProps(ctx) {
  const res = await fetch("http://localhost:3000/api/signups");
  const data = await res.json();

  const res2 = await fetch("http://localhost:3000/api/logins");
  const data2 = await res2.json();

  const id = parseInt(ctx.params.id);

  const user = data.filter((jj: Data) => jj.id === id);

  const userLogin = data2.filter((jj: LoginData) => jj.userId === id);

  return {
    props: {
      user,
      userLogin
    }
  };
}
