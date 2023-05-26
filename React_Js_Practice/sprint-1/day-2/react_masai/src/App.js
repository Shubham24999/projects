import Courses from "./Components/Courses";
import Title from "./Components/Title"
import UserCard from "./Components/UserCard";
// keep a user object with mentioned properties and pass down to UserCard as prop
export default function App() {
  return <>
  <Title />
  <UserCard />
  <Courses/>
  </>;
}
