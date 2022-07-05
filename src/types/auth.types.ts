export type userDetailsType = {
  email?: string;
  id?: string;
  name: string;
  username: string;
  bio?: string;
  website?: string;
  avatar?: File | null
};

export interface AuthState {
  authToken: string;
  authStatus: string;
  userId: string;
  name: string;
  email: string;
  allUsers: userDetailsType[];
}
