/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const selectAuth = (storeStates: ReduxState) => storeStates.auth;
// (storeStates: ReduxState) => {
//     return storeStates.auth
//   }
