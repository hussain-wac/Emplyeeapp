import { atomWithStorage } from "jotai/utils";

export const userState = atomWithStorage("user", null, undefined, {
  getOnInit: true,
});
 