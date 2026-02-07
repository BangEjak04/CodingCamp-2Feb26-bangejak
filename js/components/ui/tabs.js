/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function Tabs({ children = [] }) {
    const component = document.createElement("div");
    component.setAttribute("dir", "ltr");
    component.setAttribute("data-orientation", "horizontal");
    component.setAttribute("data-slot", "tabs");
    component.className = "group/tabs flex gap-2 data-horizontal:flex-col";

    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}