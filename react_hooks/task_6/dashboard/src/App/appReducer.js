export const APP_ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  TOGGLE_DRAWER: "TOGGLE_DRAWER",
  MARK_NOTIFICATION_READ: "MARK_NOTIFICATION_READ",
  SET_NOTIFICATIONS: "SET_NOTIFICATIONS",
  SET_COURSES: "SET_COURSES",
};

export const initialState = {
  displayDrawer: true,
  user: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  notifications: [],
  courses: [],
};

function getLoginUser(action) {
  const payload = action?.payload;
  const nextUser =
    (payload && typeof payload === "object" && "user" in payload && payload.user) ||
    action.user ||
    {};

  return {
    email: nextUser.email ?? payload?.email ?? action.email ?? initialState.user.email,
    password:
      nextUser.password ??
      payload?.password ??
      action.password ??
      initialState.user.password,
    isLoggedIn: true,
  };
}

function getDrawerValue(state, action) {
  const payload = action?.payload;
  const nextValue =
    payload?.displayDrawer ??
    action.displayDrawer ??
    action.isVisible ??
    (typeof payload === "boolean" ? payload : undefined);

  return typeof nextValue === "boolean" ? nextValue : !state.displayDrawer;
}

function getArrayPayload(action, key) {
  if (Array.isArray(action?.payload)) {
    return action.payload;
  }

  if (Array.isArray(action?.[key])) {
    return action[key];
  }

  if (Array.isArray(action?.payload?.[key])) {
    return action.payload[key];
  }

  return [];
}

function getNotificationId(action) {
  const payload = action?.payload;

  return (
    payload?.id ??
    payload?.notificationId ??
    payload?.index ??
    action.notificationId ??
    action.id ??
    action.index ??
    payload
  );
}

export function appReducer(state = initialState, action = {}) {
  switch (action?.type) {
    case APP_ACTIONS.LOGIN:
      return {
        ...state,
        user: getLoginUser(action),
      };
    case APP_ACTIONS.LOGOUT:
      return initialState;
    case APP_ACTIONS.TOGGLE_DRAWER:
      return {
        ...state,
        displayDrawer: getDrawerValue(state, action),
      };
    case APP_ACTIONS.MARK_NOTIFICATION_READ:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== getNotificationId(action)
        ),
      };
    case APP_ACTIONS.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: [...getArrayPayload(action, "notifications")],
      };
    case APP_ACTIONS.SET_COURSES:
      return {
        ...state,
        courses: [...getArrayPayload(action, "courses")],
      };
    default:
      return state;
  }
}
