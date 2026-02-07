/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function CardContent({ children = [] }) {
    const component = document.createElement('div');
    component.setAttribute("data-slot", "card-content");
    component.className = "px-4 group-data-[size=sm]/card:px-3";
    
    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}