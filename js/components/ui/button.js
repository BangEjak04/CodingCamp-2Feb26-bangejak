/**
 * 
 * @param {Object} props
 * @param {string} props.id
 * @param {'button' | 'disabled' | 'reset' | 'submit'} props.type
 * @param {string} props.content
 * @param {string} [props.className]
 */
export default function Button({ id, type = 'button', content = '', className = '' }) {
    const component = document.createElement('button');

    const baseClasses = "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none bg-primary text-primary-foreground [a]:hover:bg-primary/80 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2";
    component.className = `${baseClasses} ${className}`;

    component.id = id;
    component.type = type;
    component.innerHTML = content
    
    return component;
}