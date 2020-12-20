import { useMemo, useState } from "react";
import { getUserinfo } from "../api/users";
import { getGlobalData, setGlobalData } from "../settings";
import { GLOBAL_DATA_USERINFO } from "../settings/constants";

const useUserinfo = () => {
  const [user, setUser] = useState(getGlobalData(GLOBAL_DATA_USERINFO));
  const handleChange = useMemo(
    () => data => {
      setUser(data);
      setGlobalData(data);
    },
    []
  );
  if (!user || !user.openid) {
    getUserinfo().then(res => {
      if (res.data.code === 1) {
        handleChange(res.data.data);
      }
    });
  }
  return [user, handleChange];
};

export default useUserinfo