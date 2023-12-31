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
  category: string; // Default label value
  attachment?: null; // You can use FormData for file uploads
  description: string;
  status?: string
  _id: string;
}
