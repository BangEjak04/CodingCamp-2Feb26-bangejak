export default function TodoEmptyState() {
    const container = document.createElement('div');
    container.className = "flex flex-col items-center justify-center py-12";

    const img = document.createElement('img');
    img.src = "./js/assets/empty.svg";
    img.alt = "Empty";
    img.className = "size-12 opacity-50";

    const headMessage = document.createElement('h3');
    headMessage.className = "text-lg font-semibold mb-1";
    headMessage.innerText = "No Task Yet";

    const bodyMessage = document.createElement('p');
    bodyMessage.className = "text-sm text-muted-foreground";
    bodyMessage.innerText = "Add your first task to get started";

    container.append(img, headMessage, bodyMessage);
    return container;
}