import style from "./style.css"
import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}