// Mock data for categories
const mockCategories = [
  { id: 1, name: 'Electronics', selected: false },
  { id: 2, name: 'Clothing', selected: false },
  { id: 3, name: 'Food', selected: false },
  { id: 4, name: 'Books', selected: false },
  { id: 5, name: 'Home & Kitchen', selected: false },
  { id: 6, name: 'Beauty & Personal Care', selected: false },
  { id: 7, name: 'Sports & Outdoors', selected: false },
  { id: 8, name: 'Health & Household', selected: false },
  { id: 9, name: 'Toys & Games', selected: false },
  { id: 10, name: 'Baby', selected: false },
  { id: 11, name: 'Automotive Parts & Accessories', selected: false },
  { id: 12, name: 'Office Products', selected: false },
  { id: 13, name: 'Tools & Home Improvement', selected: false },
  { id: 14, name: 'Pet Supplies', selected: false },
  { id: 15, name: 'Arts, Crafts & Sewing', selected: false },
  { id: 16, name: 'Industrial & Scientific', selected: false },
  { id: 17, name: 'Musical Instruments', selected: false },
  { id: 18, name: 'Grocery & Gourmet Food', selected: false },
  { id: 19, name: 'Patio, Lawn & Garden', selected: false },
  { id: 20, name: 'Baby Products', selected: false },
  { id: 21, name: 'Movies & TV', selected: false },
  { id: 22, name: 'CDs & Vinyl', selected: false },
  { id: 23, name: 'Video Games', selected: false },
  { id: 24, name: 'Kindle Store', selected: false },
  { id: 25, name: 'Automotive', selected: false },
  { id: 26, name: 'Digital Music', selected: false },
  { id: 27, name: 'Grocery & Gourmet Food', selected: false },
  { id: 28, name: 'Toys & Games', selected: false },
  { id: 29, name: 'Baby Products', selected: false },
  { id: 30, name: 'Health & Personal Care', selected: false },
  { id: 31, name: 'Home & Kitchen', selected: false },
  { id: 32, name: 'Beauty', selected: false },
  { id: 33, name: 'Pet Supplies', selected: false },
  { id: 34, name: 'Software', selected: false },
  { id: 35, name: 'Sports & Outdoors', selected: false },
  { id: 36, name: 'Tools & Home Improvement', selected: false },
  { id: 37, name: 'Toys & Games', selected: false },
  { id: 38, name: 'Video Games', selected: false },
  { id: 39, name: 'Kindle eBooks', selected: false },
  { id: 40, name: 'Prime Video', selected: false },
  { id: 41, name: 'Amazon Fashion', selected: false },
  { id: 42, name: 'Amazon Warehouse', selected: false },
  { id: 43, name: 'Appliances', selected: false },
  { id: 44, name: 'Apps & Games', selected: false },
  { id: 45, name: 'Arts, Crafts & Sewing', selected: false },
  { id: 46, name: 'Automotive', selected: false },
  { id: 47, name: 'Baby', selected: false },
  { id: 48, name: 'Beauty & Personal Care', selected: false },
  { id: 49, name: 'Books', selected: false },
  { id: 50, name: 'CDs & Vinyl', selected: false },
  { id: 51, name: 'Cell Phones & Accessories', selected: false },
  { id: 52, name: 'Clothing, Shoes & Jewelry', selected: false },
  { id: 53, name: 'Collectibles & Fine Art', selected: false },
  { id: 54, name: 'Computers', selected: false },
  { id: 55, name: 'Courses', selected: false },
  { id: 56, name: 'Credit and Payment Cards', selected: false },
  { id: 57, name: 'Digital Educational Resources', selected: false },
  { id: 58, name: 'Digital Music', selected: false },
  { id: 59, name: 'Electronics', selected: false },
  { id: 60, name: 'Garden & Outdoor', selected: false },
  { id: 61, name: 'Beauty & Personal Care', selected: false },
  { id: 62, name: 'Grocery & Gourmet Food', selected: false },
  { id: 63, name: 'Handmade', selected: false },
  { id: 64, name: 'Jewelry', selected: false },
  { id: 65, name: 'Music', selected: false },
  { id: 66, name: 'Outdoor Recreation', selected: false },
  { id: 67, name: 'Software', selected: false },
  { id: 68, name: 'Tools & Home Improvement', selected: false },
  { id: 69, name: 'Watches', selected: false },
  { id: 70, name: 'Video Games', selected: false },
  { id: 71, name: 'Office Supplies', selected: false },
  { id: 72, name: 'Industrial & Scientific', selected: false },
  { id: 73, name: 'Digital Cameras', selected: false },
  { id: 74, name: 'Musical Instruments', selected: false },
  { id: 75, name: 'Automotive Parts', selected: false },
  { id: 76, name: 'Collectibles', selected: false },
  { id: 77, name: 'Crafts & Sewing', selected: false },
  { id: 78, name: 'Gourmet Food', selected: false },
  { id: 79, name: 'Gift Cards', selected: false },
  { id: 80, name: 'Home Improvement', selected: false },
  { id: 81, name: 'Pet Supplies', selected: false },
  { id: 82, name: 'Software Games', selected: false },
  { id: 83, name: 'Sporting Goods', selected: false },
  { id: 84, name: 'Travel', selected: false },
  { id: 85, name: 'Video Games', selected: false },
  { id: 86, name: 'Wireless Accessories', selected: false },
  { id: 87, name: 'Boys Clothing', selected: false },
  { id: 88, name: 'Girls Clothing', selected: false },
  { id: 89, name: 'Toddler Clothing', selected: false },
  { id: 90, name: 'Baby Clothing', selected: false },
  { id: 91, name: 'Maternity Clothing', selected: false },
  { id: 92, name: 'Men\'s Shoes', selected: false },
  { id: 93, name: 'Women\'s Shoes', selected: false },
  { id: 94, name: 'Men\'s Watches', selected: false },
  { id: 95, name: 'Women\'s Watches', selected: false },
  { id: 96, name: 'Girls Jewelry', selected: false },
  { id: 97, name: 'Boys Jewelry', selected: false },
  { id: 98, name: 'Fine Jewelry', selected: false },
  { id: 99, name: 'Handmade Jewelry', selected: false },
  { id: 100, name: 'Electronics Accessories', selected: false },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      res.status(200).json(mockCategories);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ error: 'An error occurred while sending the OTP.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
