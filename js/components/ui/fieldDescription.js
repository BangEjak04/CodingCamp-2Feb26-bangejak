/**
 * @param {Object} props
 * @param {string} props.text
 */
export default function FieldDescription({ text }) {
    const component = document.createElement("p");
    component.setAttribute("data-slot", "field-description");
    component.className = "text-muted-foreground text-left text-sm leading-normal font-normal group-has-data-horizontal/field:text-balance [[data-variant=legend]+&]:-mt-1.5 last:mt-0 nth-last-2:-mt-1 [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4";
    component.innerText = text;

    return component;
}