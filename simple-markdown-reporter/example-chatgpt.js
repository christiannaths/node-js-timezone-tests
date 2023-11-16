function createHierarchy(inputArray) {
  const hierarchy = {};

  inputArray.forEach((item) => {
    let currentLevel = hierarchy;

    // Process each category for the current item
    item.categories.forEach((category) => {
      // If the category does not exist at the current level, create it
      if (!currentLevel[category]) {
        currentLevel[category] = { items: [] };
      }

      // Move to the next level in the hierarchy
      currentLevel = currentLevel[category];
    });

    // Add the item to the current level
    if (currentLevel.items) {
      currentLevel.items.push(item);
    } else {
      // If there are no categories, add the item directly to the hierarchy
      hierarchy.items = hierarchy.items || [];
      hierarchy.items.push(item);
    }
  });

  return hierarchy;
}

// Example usage
const exampleInputArray = [
  { id: 1, categories: ["category-a", "category-b"] },
  { id: 2, categories: ["category-a"] },
  { id: 3, categories: [] },
  { id: 4, categories: ["category-a", "category-b", "category-c"] },
  { id: 5, categories: ["category-a", "category-b"] },
];

const exampleHierarchy = createHierarchy(exampleInputArray);

console.log(exampleHierarchy);
