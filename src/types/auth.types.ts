export type userDetailsType = {
  email: string;
  id: string;
  name: string;
  username?: string;
  bio?: string;
  website?: string;
};

export interface AuthState {
  authToken: string | null;
  authStatus: string;
  userId: string;
  name: string;
  email: string;
  allUsers: userDetailsType[];
}
