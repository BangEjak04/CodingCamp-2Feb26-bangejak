/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function Field({ children = [] }) {
    const component = document.createElement("div");
    component.setAttribute("data-slot", "field");
    component.setAttribute("data-orientation", "vertical");
    component.className = "data-[invalid=true]:text-destructive gap-2 group/field flex w-full flex-col *:w-full [&>.sr-only]:w-auto";
    component.role = "group";
    
    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}
