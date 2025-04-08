type Product = {
  id: number
  title: string
  desc?: string
  img: string
  price: number
  options?: { title: string; additionalPrice: number }[]
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeno and red onions for a burest of flavor. A classic Italian delight.',
    img: '/temporary/p1.png',
    price: 24.5,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 2,
    title: 'Bacon Deluxe',
    desc: 'Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon and melted cheese. A perfect blend of flavor.',
    img: '/temporary/p2.png',
    price: 29.8,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 3,
    title: 'Bella Napoli',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and basil for a perfect combination of flowers.',
    img: '/temporary/p3.png',
    price: 24.2,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 4,
    title: 'Spicy Arrabbiata',
    desc: 'Penne in a spicy tomato sauce with pepperoni and red onions for a burst of flavor.',
    img: '/temporary/p4.png',
    price: 26.7,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 5,
    title: 'Jalapeno Fiesta',
    desc: 'A beef patty topped with spicy jalapenos, made for spice lovers who crave a burst of flavor in everty bite.',
    img: '/temporary/p5.png',
    price: 29.6,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 6,
    title: 'Margherita Magic',
    desc: 'A timeless favorite with a sweet twist on the classic Margherita pizza. Mozzarella, tomatoes, and basil for a perfect balance of flavors.',
    img: '/temporary/p6.png',
    price: 24.9,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 7,
    title: 'Garlic Parmesan Linguine',
    desc: 'Linguine smothered in a creamy garlic parmesan sauce for a perfect blend of flavors.',
    img: '/temporary/p7.png',
    price: 28.9,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 8,
    title: 'Mediterranean Delight',
    desc: 'Mediterranean-inspired burger topped with fresh tomatoes and herbs for a healthy and satisfying meal.',
    img: '/temporary/p8.png',
    price: 32.8,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
  {
    id: 9,
    title: 'Hawaiian Teriyaki',
    desc: 'A tropical burger with juicy beef glazed in tangy teriyaki sauce and topped with fresh pineapple for a unique flavor experience ',
    img: '/temporary/p9.png',
    price: 29.5,
    options: [
      { title: 'Small', additionalPrice: 0 },
      { title: 'Medium', additionalPrice: 4 },
      { title: 'Large', additionalPrice: 6 },
    ],
  },
]
