import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../store/action/userAction";

const UserContainer = () => {
  const getData = useSelector((state) => state.userListReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList());
  }, [getUserList]);

  return (
    <div>
      <h1>redux</h1>
      <div>
        {getData &&
          getData.userList &&
          getData.userList.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
};

export default UserContainer;
