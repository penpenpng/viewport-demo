const set = (id, text) => {
  document.getElementById(id).textContent = text;
};

const update = () => {
  set(
    "viewport",
    '<meta name="viewport" content="' +
      document.querySelector('meta[name="viewport"]').getAttribute("content") +
      '" />'
  );

  set("innerWidth", window.innerWidth);
  set("innerHeight", window.innerHeight);
  set("visualViewportWidth", window.visualViewport.width);
  set("visualViewportHeight", window.visualViewport.height);
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("update-button", update);
  update();
});
