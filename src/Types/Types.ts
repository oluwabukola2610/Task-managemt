import { FunctionComponent, PropsWithChildren } from "react";

export type AppContextProviderComponent = FunctionComponent<
  PropsWithChildren<unknown>
>;

export interface UserType {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  _id?: number;
}
export interface UserTask {
  title: string;
  startDate: string;
  label: string; // Default label value
  attachment: null; // You can use FormData for file uploads
  comment: string;
}
