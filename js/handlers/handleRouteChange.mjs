import { router } from "../utils/router.mjs";

export function handleRouteChange() {
document.querySelectorAll(".route").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        history.pushState(null, "", this.href);
        router();
    });
});
}

