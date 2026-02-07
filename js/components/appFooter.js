export default function AppFooter() {
    const footer = document.createElement("footer");
    footer.className = "mt-24 py-8 border-t border-slate-200 dark:border-slate-800";

    const container = document.createElement("div");
    container.className = "max-w-lg mx-auto flex flex-col items-center justify-between px-4 gap-4 md:flex-row";

    const creditText = document.createElement("p");
    creditText.className = "text-sm text-slate-500 dark:text-slate-400 text-center md:text-left";
    creditText.innerHTML = `
        &copy; ${new Date().getFullYear()} To-Do List App. <br/> Built with vanilla JS and Tailwind CSS.
    `;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/BangEjak04/CodingCamp-2Feb26-bangejak";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.className = "flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 transition-colors";

    const githubIcon = document.createElement("img");
    githubIcon.src = "js/assets/github.svg";
    githubIcon.alt = "GitHub Logo";
    githubIcon.className = "w-5 h-5 dark:invert";

    const linkText = document.createElement("span");
    linkText.innerText = "GitHub";

    githubLink.append(githubIcon, linkText);
    
    container.append(creditText, githubLink);
    footer.appendChild(container);

    return footer;
}