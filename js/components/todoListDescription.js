/**
 * @param {Object} props
 * @param {string} props.text
 */
export default function TodoListDescription({ text }) {
    const component = document.createElement('p');
    component.className = "leading-7 [&:not(:first-child)]:mt-2";
    component.innerText = text;

    return component;
}