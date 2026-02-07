/**
 * @param {Object} props
 * @param {string} props.htmlFor
 * @param {string} props.text
 */
export default function FieldLabel({ htmlFor, text }) {
    const component = document.createElement('label');
    component.setAttribute("data-slot", "field-label");
    component.className = 'items-center text-sm font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 has-data-checked:bg-primary/5 has-data-checked:border-primary/30 dark:has-data-checked:border-primary/20 dark:has-data-checked:bg-primary/10 group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border *:data-[slot=field]:p-2.5 has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col';
    component.setAttribute('for', htmlFor);
    component.innerText = text;

    return component;
}