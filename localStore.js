function saveToLocalStorage() {
  if (typeof window !== "undefined") {
    localStorage.setItem("guyname", "Machala");
  }
}

saveToLocalStorage();
