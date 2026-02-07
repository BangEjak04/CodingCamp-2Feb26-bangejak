/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function TabsList({ children = [] }) {
    const component = document.createElement("div");
    component.role = "tablist";
    component.ariaOrientation = "horizontal";
    component.setAttribute("data-slot", "tabs-list");
    component.className = "rounded-lg p-[3px] group-data-horizontal/tabs:h-8 data-[variant=line]:rounded-none group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col bg-muted";

    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}