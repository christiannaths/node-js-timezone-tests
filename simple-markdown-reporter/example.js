const exampleInputArray = [
  {
    id: 1,
    categories: ["category-a", "category-b"],
  },
  {
    id: 2,
    categories: ["category-a"],
  },
  {
    id: 3,
    categories: [],
  },
  {
    id: 4,
    categories: ["category-a", "category-b", "category-c"],
  },
  {
    id: 5,
    categories: ["category-a", "category-b"],
  },
];

const exampleHeirarchy = {
  items: {
    id: 3,
    categories: [],
  },

  "category-a": {
    items: [
      {
        id: 2,
        categories: ["category-a"],
      },
    ],

    "category-b": {
      items: [
        {
          id: 1,
          categories: ["category-a", "category-b"],
        },
        {
          id: 5,
          categories: ["category-a", "category-b"],
        },
      ],

      "category-c": {
        items: [
          {
            id: 4,
            categories: ["category-a", "category-b", "category-c"],
          },
        ],
      },
    },
  },
};
