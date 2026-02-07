export default function formatDueDate(dateString) {
    if (!dateString) return "No deadline";

    const targetDate = new Date(dateString);
    const today = new Date();
    
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const readableDate = targetDate.toLocaleDateString('en-US', options);

    let status = "";
    if (diffDays === 0) status = " • Today";
    else if (diffDays === 1) status = " • Tomorrow";
    else if (diffDays === -1) status = " • Yesterday";
    else if (diffDays > 1) status = ` • ${diffDays} days left`;
    else if (diffDays < -1) status = ` • ${Math.abs(diffDays)} days ago`;

    return `${readableDate}${status}`;
}
