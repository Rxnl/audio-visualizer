import { createContext } from "react";

export type ErrorHandler = (message: string) => void;

export const ErrorHandlerContext = createContext<ErrorHandler>(() => {});
