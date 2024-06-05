import { setUpAbout } from "../pages/about.mjs";
import { setUpContact } from "../pages/contact.mjs";
import { setUpHome } from "../pages/home.mjs";
import { setUpPortfolio } from "../pages/portfolio.mjs";
import { setUpResume } from "../pages/resume.mjs";
import { setUpSkills } from "../pages/skills.mjs";

export function router() {
    const url = new URL(window.location.href);
    const hash = url.hash.slice(1);
    let view; 
  
    switch (hash) {
      case "/":
      case "/index.html":
        view = setUpHome();
        break;
      case "/about":
        view = setUpAbout(); 
        break;
      case "/portfolio":
        view = setUpPortfolio(); 
        break;
      case "/skills":
        view = setUpSkills(); 
        break;
      case "/resume":
        view = setUpResume(); 
         break;
      case "/contact":
        view = setUpContact(); 
        break;
  
      default:
        // 404 page
        break;
    }

    document.getElementById("app").innerHTML = view;
  } 