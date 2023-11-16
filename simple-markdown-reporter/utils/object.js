function createHierarchy(
  inputArray,
  itemsKey = "items",
  categoriesKey = "categories"
) {
  const hierarchy = {};

  inputArray.forEach((item) => {
    let currentLevel = hierarchy;

    // Process each category for the current item
    item[categoriesKey].forEach((category) => {
      // If the category does not exist at the current level, create it
      if (!currentLevel[category]) {
        currentLevel[category] = { [itemsKey]: [] };
      }

      // Move to the next level in the hierarchy
      currentLevel = currentLevel[category];
    });

    // Add the item to the current level
    if (currentLevel[itemsKey]) {
      currentLevel[itemsKey].push(item);
    } else {
      // If there are no categories, add the item directly to the hierarchy
      hierarchy[itemsKey] = hierarchy[itemsKey] || [];
      hierarchy[itemsKey].push(item);
    }
  });

  return hierarchy;
}

module.exports = {
  createHierarchy,
};
