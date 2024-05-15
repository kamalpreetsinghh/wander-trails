export type INavLink = {
  title: string;
  href: string;
};

export type IUser = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string | null;
  bio: string | null;
};

export type CreateUserParams = {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
};
