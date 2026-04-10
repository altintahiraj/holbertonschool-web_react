import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import CourseList from "../CourseList/CourseList";
import "../CourseList/CourseList.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import AppContext from "../Context/context";
import "./App.css";

function App() {
  const { user: contextUser } = useContext(AppContext);
  const removedNotificationIdsRef = useRef(new Set());
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(contextUser);
  const [notifications, setNotifications] = useState([]);
  const [courses, setCourses] = useState([]);

  // Fetch notifications on initial mount
  useEffect(() => {
    let isMounted = true;

    const fetchNotifications = async () => {
      try {
        const { data } = await axios.get("/notifications.json");
        if (isMounted) {
          const nextNotifications = Array.isArray(data)
            ? data
            : Array.isArray(data?.notifications)
              ? data.notifications
              : [];

          setNotifications(
            nextNotifications.filter(
              (notification) =>
                !removedNotificationIdsRef.current.has(notification.id)
            )
          );
        }
      } catch (_err) {
        // silently handle fetch errors
      }
    };

    fetchNotifications();

    return () => {
      isMounted = false;
    };
  }, []);

  // Fetch courses whenever user state changes
  useEffect(() => {
    let isMounted = true;

    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/courses.json");
        if (isMounted) {
          const nextCourses = Array.isArray(data)
            ? data
            : Array.isArray(data?.courses)
              ? data.courses
              : [];
          setCourses(nextCourses);
        }
      } catch (_err) {
        // silently handle fetch errors
      }
    };

    fetchCourses();

    return () => {
      isMounted = false;
    };
  }, [user]);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({ email, password, isLoggedIn: true });
  }, []);

  const logOut = useCallback(() => {
    setUser(contextUser);
  }, [contextUser]);

  const markNotificationAsRead = useCallback((id) => {
    removedNotificationIdsRef.current.add(id);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  const contextValue = useMemo(
    () => ({ user, logOut }),
    [user, logOut]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className="notifications-header">
        <Header />
        <div className="root-notifications">
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
      </div>

      {user.isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={courses} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login logIn={logIn} />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School News goes here</p>
      </BodySection>

      <Footer />
    </AppContext.Provider>
  );
}

export default App;
