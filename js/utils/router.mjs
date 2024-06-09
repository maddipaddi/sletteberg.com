export function router() {
document.addEventListener("click", (e) => {
  const {target} = e;
  if(!target.matches("nav a"))  {
    return;
  }
  e.preventDefault();
  route();
});

const pageTitle = "MaddiPaddi"; 

const routes = {
  404: {
    template: "/templates/404.html",
    title: "404 | " + pageTitle,
    description: "Page not found."
  },
  "/": {
    template: "/templates/index.html",
    title: "Home | " + pageTitle,
    description: "Welcome to MaddiPaddi's portfolio."
  },
  "/about": {
    template: "/templates/about.html",
    title: "About me | " + pageTitle,
    description: "Read about me - MaddiPaddi."
  },
  "/portfolio": {
    template: "/templates/portfolio.html",
    title: "Portfolio | " + pageTitle,
    description: "Take a look at my projects."
  },
  "/skills": {
    template: "/templates/skills.html",
    title: "Skills | " + pageTitle,
    description: "See my skills."
  },
  "/resume": {
    template: "/templates/resume.html",
    title: "Resume | " + pageTitle,
    description: "Read or download my resume."
  },
  "/contact": {
    template: "/templates/contact.html",
    title: "Contact me | " + pageTitle,
    description: "Get in touch with me."
  }
}


const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  locationHandler();
}

const locationHandler = async () => {
  const location = window.location.pathname;
  if(location.length === 0) {
    location = "/";
  }

  const route = routes[location] || routes[404];
  const html = await fetch(route.template).then((response) => response.text());
  document.getElementById("app").innerHTML = html;
  document.title = route.title;
  document.querySelector('meta[name="description"]').setAttribute("content", route.description);
}

window.onpopstate = locationHandler;
window.route = route;

locationHandler(); 
}