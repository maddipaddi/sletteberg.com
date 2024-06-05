import { handleRouteChange } from "./handlers/handleRouteChange.mjs";
import { router } from "./utils/router.mjs";

function init() {
    window.addEventListener("popstate", handleRouteChange());
    router();
}

init(); 