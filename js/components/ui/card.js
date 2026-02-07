/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function Card({ children = [] }) {
    const component = document.createElement("div");
    component.setAttribute("data-slot", "card");
    component.className = "ring-foreground/10 bg-card text-card-foreground group/card flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl w-full";

    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}