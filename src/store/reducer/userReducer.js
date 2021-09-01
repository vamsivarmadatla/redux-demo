import { GET_USER, GET_USER_ERR } from "../actionTypes/userActionType";

const initialState = {
  userList: [],
};

const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER: {
      return {
        ...state,
        userList: payload,
      };
    }

    case GET_USER_ERR: {
      return {
        ...state,
        userList: [],
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default userListReducer;
