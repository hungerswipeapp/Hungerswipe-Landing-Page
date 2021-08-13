import "./App.css";
import "./tailwind.output.css";
import Main from "./Shared/Main";
import Footer from "./Shared/Footer";
import Feedback from "./Shared/Feedback";
import { Helmet } from "react-helmet";
import appIcon from "./Assets/favicon.ico";

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={appIcon} />
        <meta
          name="description"
          content="Swipe Right to your next restaurant destination! Match on restaurants with your friends, family or even that one special person in your life."
        />
      </Helmet>
      <Main />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
