import { FunctionComponent, PropsWithChildren } from "react";

export type AppContextProviderComponent = FunctionComponent<
  PropsWithChildren<unknown>
>;

export interface UserType {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  _id?:number
}