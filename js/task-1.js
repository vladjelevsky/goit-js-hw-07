const ulCategories = document.querySelector("#categories");

// перший варіант доступу до кількості дітей через батька
// console.log(`Number of categories: ${ulCategories.children.length}`);

const liItems = document.querySelectorAll(".item");

// другий варіант звернутися саме до дітей

console.log(`Number of categories: ${liItems.length}`);

//  отримуємо доступ до iнформації про дітей і нащадків li.item, перебираючим метедом forEach

liItems.forEach((item) => {
  const itemTitle = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${itemTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
