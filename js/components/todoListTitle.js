/**
 * @param {Object} props
 * @param {string} props.text
 */
export default function TodoListTitle({ text }) {
    const component = document.createElement('h5');
    component.className = "scroll-m-20 text-xl font-semibold tracking-tight";
    component.innerText = text;

    return component;
}