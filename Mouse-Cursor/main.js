//const cursor = document.getElementById("custom-cursor");
const cursor = document.getElementById("custom-cursor");
const defaultCursorSize = '2rem'
const adjustCursorPosition = '1rem' // defaultCursorSize / 2

window.addEventListener("mousemove", function(event) {
  cursor.style.display = 'block';
  cursor.style.left = `calc(${event.clientX}px - ${adjustCursorPosition}`;
  cursor.style.top = `calc(${event.clientY}px - ${adjustCursorPosition}`;
});

document.querySelectorAll('a').forEach(function(element) {
  element.addEventListener('mouseover', function() {
    const rect = this.getBoundingClientRect();
    cursor.style.backgroundColor = 'rgb(0 0 0 / 0.2)';
    cursor.style.borderRadius = '8px';
    cursor.style.transform = `translateX(${(-1 * event.clientX) + rect.left}px)`;
    cursor.style.width = `calc(${rect.width}px + ${defaultCursorSize})`;
    cursor.style.height = `calc(${rect.height}px + ${adjustCursorPosition}`;
    this.addEventListener('mousemove', function(event) {
      cursor.style.transform = `translateX(${(-1 * event.clientX) + rect.left}px)`;
    });
  });

  element.addEventListener('mouseout', function() {
    cursor.style.backgroundColor = 'rgb(0 0 0 / 0.5)';
    cursor.style.borderRadius = 'calc(infinity * 1px)';
    cursor.style.transform = `translateX(0)`;
    cursor.style.width = defaultCursorSize;
    cursor.style.height = defaultCursorSize;
  });
});

document.querySelectorAll('h1, p').forEach(function(element) {
  element.addEventListener('mouseover', function() {
    const rect = this.getBoundingClientRect();
    cursor.style.borderRadius = '1px';
    cursor.style.transform = `translateX(${adjustCursorPosition})`;
    cursor.style.width = `2px`;
    cursor.style.height = `${rect.height}px`;
  });

  element.addEventListener('mouseout', function() {
    cursor.style.borderRadius = 'calc(infinity * 1px)';
    cursor.style.transform = `translateX(0)`;
    cursor.style.width = defaultCursorSize;
    cursor.style.height = defaultCursorSize;
  });
})
