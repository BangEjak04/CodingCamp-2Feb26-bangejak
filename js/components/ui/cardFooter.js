/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function CardContent({ children = [] }) {
    const component = document.createElement('div');
    component.setAttribute("data-slot", "card-footer");
    component.className = "bg-muted/50 flex items-center rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3";
    
    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}