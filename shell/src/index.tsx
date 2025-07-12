document.body.setAttribute(
  "data-theme",
  localStorage.getItem("theme") || "light"
);

import("./bootstrap");
