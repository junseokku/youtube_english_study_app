import { LOGIN_INFO_KEY } from "@common/utils/LocalStorageKeys";
import { User } from "firebase/auth";
import { atom, selector } from "recoil";

interface IAuthenticatedUserTypes {
  accessToken: string;
  user: User | null;
}

const loginInfoValue = JSON.parse(localStorage.getItem(LOGIN_INFO_KEY)!);
const defaultLoginState = loginInfoValue
  ? loginInfoValue
  : {
      accessToken: "",
      user: null,
    };

export const authenticatedUserState = atom<IAuthenticatedUserTypes>({
  key: "authenticatedUser",
  default: defaultLoginState,
});

export const userInfo = selector<IAuthenticatedUserTypes>({
  key: "userInfo",
  get: ({ get }) => {
    return get(authenticatedUserState);
  },
});
