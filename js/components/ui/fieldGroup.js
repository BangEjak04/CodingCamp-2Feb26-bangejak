/**
 * @param {Object} props
 * @param {HTMLElement} props.children
 */
export default function FieldGroup({ children = [] }) {
    const component = document.createElement('div');
    component.setAttribute("data-slot", "field-group");
    component.className = "group/field-group @container/field-group flex w-full flex-col gap-5 data-[slot=checkbox-group]:gap-3 *:data-[slot=field-group]:gap-4";
    
    children.forEach(child => {
        if (child) component.appendChild(child);
    });

    return component;
}