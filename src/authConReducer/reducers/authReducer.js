export const initialState = {
  user: null,
  token: null,
  isAuth: false,
};

export const TYPES = {
  LOGIN: "[auth]LOGIN",
  LOGOUT: "[auth]LOGOUT",
};

// action creators

// make actions creators

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      console.log("caso de inciar sesion");
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};
