import { User } from "firebase/auth";
import { atom, selector } from "recoil";

interface IAuthenticatedUserTypes {
  accessToken: string | undefined;
  userInfo: User | null;
}

export const authenticatedUserState = atom<IAuthenticatedUserTypes>({
  key: "authenticatedUser",
  default: {
    accessToken: "",
    userInfo: null,
  },
});

export const userInfo = selector<IAuthenticatedUserTypes>({
  key: "userInfo",
  get: ({ get }) => {
    return get(authenticatedUserState);
  },
});
