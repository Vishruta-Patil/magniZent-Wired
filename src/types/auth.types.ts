export type userDetailsType = {
  email?: string;
  id?: string;
  name: string;
  username: string;
  bio?: string;
  website?: string;
  bookmark?: [],
  follower?: any,
  following?: any,
  avatarUrl?:string | null | undefined
};

export type AvatarType = {
  id: string,
  url: string
}

export interface AuthState {
  authToken: string;
  authStatus: string;
  userId: string;
  name: string;
  email: string;
  allUsers: userDetailsType[];
  avatar?: string,
  avatarList?: any,
  bookmark?:[],
  searchValue: "",
}
