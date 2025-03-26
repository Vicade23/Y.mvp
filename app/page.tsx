import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import Onboarding from "./onboarding/page";
import Navbar from './components/navbar/navbar';

export default function Home() {
  return (
    <div className="First-rendering">
      {/* <Onboarding /> */}
      <Navbar />
    </div>
  );
}
