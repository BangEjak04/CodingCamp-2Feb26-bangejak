import ThemeToggle from "./themeToggle.js";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 */
export default function AppHeader({ title, description }) {
    const component = document.createElement("header");
    component.className = "max-w-lg mx-auto flex items-start justify-between px-4 my-8";

    const textGroup = document.createElement("div");
    textGroup.className = "flex flex-col gap-1";
    
    const h1 = document.createElement("h1");
    h1.className = "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance";
    h1.innerText = title;

    const p = document.createElement("p");
    p.className = "text-muted-foreground text-xl leading-7";
    p.innerText = description;

    textGroup.append(h1, p);

    const actionsGroup = document.createElement("div");
    actionsGroup.appendChild(ThemeToggle());

    component.append(textGroup, actionsGroup);

    return component;
}