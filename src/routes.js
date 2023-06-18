import Auth from "./pages/Auth";
import Edit from "./pages/Edit";
import Main from "./pages/Main";
import Verify from "./pages/Verify";
import Add from "./pages/Add";
import SingleFlat from "./pages/SingleFlat";
import {
  ADD_ROUTE,
  AUTH_ROUTE,
  EDIT_ROUTE,
  MAIN_ROUTE,
  REGISTR_ROUTE,
  SINGLEFLAT_ROUTE,
  VERIFI_ROUTE,
  YOURFLATS_ROUTE,
} from "./utils/consts";

export const publicRoutes = [
  { path: MAIN_ROUTE, Component: Main },
  { path: AUTH_ROUTE, Component: Auth },
  { path: REGISTR_ROUTE, Component: Auth },
  { path: VERIFI_ROUTE, Component: Verify },
  { path: SINGLEFLAT_ROUTE + "/:id", Component: SingleFlat },
];

export const authRoutes = [
  { path: YOURFLATS_ROUTE, Component: Main },
  { path: EDIT_ROUTE, Component: Edit },
  { path: ADD_ROUTE, Component: Add },
];
