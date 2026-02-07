/**
 * @param {Object} props
 * @param {HTMLElement[]} props.children
 */
export default function AppContent({ children = [] }) {
    const component = document.createElement('main');
    component.className = "max-w-lg mx-auto p-4";

    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}