import Signup from "@/components/SignUp/signup";
import Login from "@/components/login/login";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Login />
    </div>
  );
}
