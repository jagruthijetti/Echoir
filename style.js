// Create tooltip element
const tooltip = document.createElement("div");
tooltip.className = "hover-tooltip";
document.body.appendChild(tooltip);

// Show tooltip on hover
document.querySelectorAll("[data-info]").forEach(elem => {
    elem.addEventListener("mouseenter", e => {
        tooltip.innerText = elem.getAttribute("data-info");
        tooltip.style.opacity = 1;
    });
    
    elem.addEventListener("mousemove", e => {
        tooltip.style.left = e.pageX + 15 + "px"; // offset from cursor
        tooltip.style.top = e.pageY + 15 + "px";
    });
    
    elem.addEventListener("mouseleave", e => {
        tooltip.style.opacity = 0;
    });
});