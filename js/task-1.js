const ulCategories = document.querySelector("#categories");
const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
