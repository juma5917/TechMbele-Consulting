function loadComponent(id, filePath) {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Could not load ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(id).innerHTML = data;
      })
      .catch(error => console.error(error));
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "/navbar.html");
    loadComponent("footer", "/footer.html");
  });
  