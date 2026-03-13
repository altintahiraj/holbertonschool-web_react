import { Fragment } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications.js";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import { getLatestNotification } from "../utils/utils.js";

function App() {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: getLatestNotification() },
      value: "",
    },
  ];

  return (
    <Fragment>
      <Notifications notifications={notificationsList} />
      <Header />
      <Login />
      <Footer />
    </Fragment>
  );
}

export default App;
