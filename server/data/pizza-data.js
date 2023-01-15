const pizzas = [
    {
      name: "Aalo Paratha",
      varients: ["Spicy", "Cheese","Spicy and Cheese"],
      prices: [
        {
          small: 30,
          medium: 40,
          large: 45,
        },
      ],
      category: "veg",
      image: "/images/ap.jpeg",
      description: "One more paratha is always good.",
    },
    {
      name: "Masala Sandwich",
      varients: ["Normal", "Cheese","Hari Chutney"],
      prices: [
        {
          small: 30,
          medium: 40,
          large: 40,
        },
      ],
      category: "veg",
      image: "/images/ms.jpeg",
      description:
        "Crispy delightful Sandwiches",
    },
    {
      name: "Paneer Paratha",
      varients: ["Spicy", "Cheese","Spicy and Cheese"],
      prices: [
        {
          small: 40,
          medium: 45,
          large: 50,
        },
      ],
      category: "veg",
      description:
        "Treat yourselves with the awesome chutney sandwich.",
      image: "/images/pp.jpeg",
    },
    {
      name: "Chicken Lababdar",
      varients: ["half", "medium", "full"],
      prices: [
        {
          half: 110,
          medium: 150,
          full: 200,
        },
      ],
      category: "nonveg",
      image: "/images/cl.jpeg",
      description:
        "What else is better than a CHICKEN DINNER?",
    },
    {
      name: "Chicken Biryani",
      varients: ["half", "medium", "full"],
      prices: [
        {
          half: 60,
          medium: 90,
          full: 110,
        },
      ],
      category: "nonveg",
      image: "/images/cb.jpeg",
      description:
        "Why it's a dish loved by all? Let us show you why!",
    },
    {
      name: "Chicken Roll",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 60,
          medium: 90,
          large: 110,
        },
      ],
      category: "nonveg",
      image: "/images/cr.jpeg",
      description:
        "Hungry? Grab your roll!",
    },
  ];
module.exports = pizzas;