/**
 * E-Commerce Platform - Main Application
 * Modern JavaScript implementation with MVC architecture
 * Features: State management, LocalStorage persistence, Advanced filtering
 */

/* ===========================
   Data Layer
   =========================== */

const PRODUCTS_DATA = [
  // Audio Products
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 24999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    price: 12499,
    category: "audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 7,
    name: "Wireless Earbuds Pro",
    price: 20799,
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 9,
    name: "Studio Monitor Headphones",
    price: 18999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    price: 17999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "New"
  },
  {
    id: 11,
    name: "Bass Boost Bluetooth Speaker",
    price: 8999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 12,
    name: "Wireless Over-Ear Headphones",
    price: 15999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 13,
    name: "Smart Speaker with Voice Assistant",
    price: 11999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 14,
    name: "Gaming Headset with Mic",
    price: 13999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 15,
    name: "True Wireless Earbuds",
    price: 9999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 16,
    name: "Hi-Fi Stereo System",
    price: 45999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "New"
  },
  {
    id: 17,
    name: "Portable Mini Speaker",
    price: 3499,
    category: "audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.3,
    badge: null
  },
  {
    id: 18,
    name: "DJ Headphones Professional",
    price: 22999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 19,
    name: "Waterproof Bluetooth Speaker",
    price: 10999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 20,
    name: "Wireless Neckband Earphones",
    price: 5999,
    category: "audio",
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },

  // Wearables
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 32999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 21,
    name: "Smartwatch Pro Series",
    price: 27999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 22,
    name: "Fitness Tracker Band",
    price: 4999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 23,
    name: "Smart Ring Health Monitor",
    price: 18999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: "New"
  },
  {
    id: 24,
    name: "GPS Sports Watch",
    price: 24999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 25,
    name: "Smart Glasses AR Edition",
    price: 89999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
    rating: 4.3,
    badge: "New"
  },
  {
    id: 26,
    name: "Heart Rate Monitor Watch",
    price: 14999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 27,
    name: "Luxury Smartwatch",
    price: 59999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: 28,
    name: "Kids Smartwatch",
    price: 7999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 29,
    name: "Sleep Tracking Band",
    price: 8999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 30,
    name: "Waterproof Fitness Tracker",
    price: 11999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 31,
    name: "Smart Bracelet Health Monitor",
    price: 6999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },

  // Gaming Products
  {
    id: 4,
    name: "Pro Gaming Mouse",
    price: 7499,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "New"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 13299,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 32,
    name: "RGB Gaming Keyboard",
    price: 14999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 33,
    name: "Wireless Gaming Mouse",
    price: 8999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 34,
    name: "Gaming Mouse Pad XL",
    price: 1999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 35,
    name: "Gaming Controller Pro",
    price: 5999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 36,
    name: "RGB Gaming Mousepad",
    price: 3499,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 37,
    name: "Gaming Chair Ergonomic",
    price: 24999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: "New"
  },
  {
    id: 38,
    name: "Gaming Monitor 144Hz",
    price: 32999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: 39,
    name: "Gaming Headset RGB",
    price: 11999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 40,
    name: "Mechanical Key Switch Set",
    price: 4999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 41,
    name: "Gaming Desk Mat",
    price: 2499,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 42,
    name: "Wireless Gaming Controller",
    price: 7999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 43,
    name: "Gaming Laptop Stand",
    price: 5499,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 44,
    name: "RGB Gaming Desk",
    price: 44999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "New"
  },
  {
    id: 45,
    name: "Gaming Microphone USB",
    price: 9999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 46,
    name: "Gaming Webcam 1080p",
    price: 12999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 47,
    name: "Gaming Console Stand",
    price: 3999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 48,
    name: "Gaming Monitor Stand",
    price: 6999,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },

  // Accessories
  {
    id: 5,
    name: "Adjustable Laptop Stand",
    price: 6499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 8,
    name: "4K Webcam",
    price: 16599,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: "New"
  },
  {
    id: 49,
    name: "USB-C Hub Multiport",
    price: 3999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 50,
    name: "Wireless Charging Pad",
    price: 2999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 51,
    name: "Laptop Sleeve Premium",
    price: 2499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 52,
    name: "External SSD 1TB",
    price: 8999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 53,
    name: "USB Flash Drive 128GB",
    price: 1999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 54,
    name: "Laptop Cooling Pad",
    price: 3499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 55,
    name: "HDMI Cable 4K",
    price: 1499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 56,
    name: "USB-C to HDMI Adapter",
    price: 2499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 57,
    name: "Laptop Stand Aluminum",
    price: 5499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 58,
    name: "Phone Stand Adjustable",
    price: 999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.3,
    badge: null
  },
  {
    id: 59,
    name: "Tablet Stand Foldable",
    price: 1999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 60,
    name: "USB-C Cable Fast Charge",
    price: 1299,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 61,
    name: "Laptop Backpack Professional",
    price: 4999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 62,
    name: "External Hard Drive 2TB",
    price: 7999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 63,
    name: "USB Hub 7-Port",
    price: 3499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 64,
    name: "Wireless Mouse Pad",
    price: 1999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 65,
    name: "Laptop Privacy Screen",
    price: 4499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 66,
    name: "USB-C Docking Station",
    price: 12999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 67,
    name: "Laptop Lock Cable",
    price: 2499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.3,
    badge: null
  },
  {
    id: 68,
    name: "Screen Cleaning Kit",
    price: 799,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 69,
    name: "Laptop Stand Ergonomic",
    price: 6999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: "New"
  },
  {
    id: 70,
    name: "USB-C Power Bank 20000mAh",
    price: 5999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 71,
    name: "Wireless Charger Stand",
    price: 3999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 72,
    name: "Laptop Carrying Case",
    price: 3499,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 73,
    name: "USB-C to Ethernet Adapter",
    price: 2999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587825142938-d4d192d57b89?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 74,
    name: "Laptop Stand with USB Hub",
    price: 8999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 75,
    name: "Portable Monitor 15.6 inch",
    price: 24999,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "New"
  },

  // Clothing Products
  {
    id: 76,
    name: "Classic Cotton T-Shirt",
    price: 599,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: "Bestseller"
  },
  {
    id: 77,
    name: "Slim Fit Denim Jeans",
    price: 1999,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 78,
    name: "Hooded Sweatshirt",
    price: 1499,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "New"
  },
  {
    id: 79,
    name: "Casual Polo Shirt",
    price: 899,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 80,
    name: "Cargo Pants",
    price: 1799,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 81,
    name: "Cotton Shorts",
    price: 799,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 82,
    name: "Formal Shirt",
    price: 1299,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 83,
    name: "Track Pants",
    price: 1199,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1506629905607-2c0c0a0a0a0a?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 84,
    name: "Kurta Set",
    price: 2499,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 85,
    name: "Winter Jacket",
    price: 3499,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "New"
  },
  {
    id: 86,
    name: "Cotton Joggers",
    price: 1399,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 87,
    name: "Printed T-Shirt",
    price: 699,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 88,
    name: "Chinos Pants",
    price: 1899,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1506629905607-2c0c0a0a0a0a?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 89,
    name: "Sweater",
    price: 1999,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 90,
    name: "Tank Top",
    price: 499,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.4,
    badge: null
  },
  {
    id: 91,
    name: "Leather Jacket",
    price: 5999,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
  },
  {
    id: 92,
    name: "Cargo Shorts",
    price: 999,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  },
  {
    id: 93,
    name: "Hoodie",
    price: 1699,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: 4.7,
    badge: null
  },
  {
    id: 94,
    name: "Formal Trousers",
    price: 2199,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1506629905607-2c0c0a0a0a0a?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
  },
  {
    id: 95,
    name: "Graphic Tee",
    price: 749,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
    badge: null
  }
];

/* ===========================
   State Management
   =========================== */

class Store {
  constructor() {
    this.state = {
      products: [],
      cart: [],
      filters: {
        search: '',
        category: 'all',
        sort: 'default'
      }
    };
    this.listeners = [];
  }

  /**
   * Get current state
   */
  getState() {
    return { ...this.state };
  }

  /**
   * Update state and notify listeners
   */
  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notifyListeners();
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Notify all listeners of state change
   */
  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }

  /**
   * Load cart from localStorage
   */
  loadCart() {
    try {
      const savedCart = localStorage.getItem('ecommerce_cart');
      if (savedCart) {
        this.state.cart = JSON.parse(savedCart);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }

  /**
   * Save cart to localStorage
   */
  saveCart() {
    try {
      localStorage.setItem('ecommerce_cart', JSON.stringify(this.state.cart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }
}

/* ===========================
   Cart Manager
   =========================== */

class CartManager {
  constructor(store) {
    this.store = store;
  }

  /**
   * Add product to cart
   */
  addToCart(productId) {
    const state = this.store.getState();
    const product = state.products.find(p => p.id === productId);
    
    if (!product) {
      console.error('Product not found:', productId);
      return;
    }

    const existingItem = state.cart.find(item => item.id === productId);
    
    let updatedCart;
    if (existingItem) {
      updatedCart = state.cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...state.cart, { ...product, quantity: 1 }];
    }

    this.store.setState({ cart: updatedCart });
    this.store.saveCart();
    
    return product;
  }

  /**
   * Remove product from cart
   */
  removeFromCart(productId) {
    const state = this.store.getState();
    const updatedCart = state.cart.filter(item => item.id !== productId);
    
    this.store.setState({ cart: updatedCart });
    this.store.saveCart();
  }

  /**
   * Update product quantity in cart
   */
  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    const state = this.store.getState();
    const updatedCart = state.cart.map(item =>
      item.id === productId
        ? { ...item, quantity }
        : item
    );

    this.store.setState({ cart: updatedCart });
    this.store.saveCart();
  }

  /**
   * Clear entire cart
   */
  clearCart() {
    this.store.setState({ cart: [] });
    this.store.saveCart();
  }

  /**
   * Get cart total
   */
  getCartTotal() {
    const state = this.store.getState();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  /**
   * Get cart item count
   */
  getCartItemCount() {
    const state = this.store.getState();
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  }
}

/* ===========================
   Product Manager
   =========================== */

class ProductManager {
  constructor(store) {
    this.store = store;
  }

  /**
   * Load products
   */
  loadProducts() {
    this.store.setState({ products: PRODUCTS_DATA });
  }

  /**
   * Get filtered and sorted products
   */
  getFilteredProducts() {
    const { products, filters } = this.store.getState();
    let filtered = [...products];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Apply sorting
    switch (filters.sort) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep default order
        break;
    }

    return filtered;
  }

  /**
   * Update filters
   */
  updateFilters(newFilters) {
    const state = this.store.getState();
    this.store.setState({
      filters: { ...state.filters, ...newFilters }
    });
  }
}

/* ===========================
   UI Manager
   =========================== */

class UIManager {
  constructor(store, cartManager, productManager) {
    this.store = store;
    this.cartManager = cartManager;
    this.productManager = productManager;
    
    this.elements = {
      // Landing page
      landingPage: document.getElementById('landingPage'),
      startShoppingBtn: document.getElementById('startShoppingBtn'),
      categoriesSection: document.getElementById('categoriesSection'),
      productsSection: document.getElementById('productsSection'),
      
      // Category tabs
      categoryTabs: document.querySelectorAll('.category-tab'),
      
      // Products
      productList: document.getElementById('productList'),
      cartBadge: document.getElementById('cartBadge'),
      cartBtn: document.getElementById('cartBtn'),
      cartModal: document.getElementById('cartModal'),
      cartOverlay: document.getElementById('cartOverlay'),
      closeCartBtn: document.getElementById('closeCartBtn'),
      cartItems: document.getElementById('cartItems'),
      emptyCartMsg: document.getElementById('emptyCartMsg'),
      cartFooter: document.getElementById('cartFooter'),
      cartSubtotal: document.getElementById('cartSubtotal'),
      cartTotal: document.getElementById('cartTotal'),
      checkoutBtn: document.getElementById('checkoutBtn'),
      searchInput: document.getElementById('searchInput'),
      sortSelect: document.getElementById('sortSelect'),
      categoryFilter: document.getElementById('categoryFilter'),
      loadingState: document.getElementById('loadingState'),
      emptyState: document.getElementById('emptyState'),
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toastMessage'),
      
      // Checkout modal
      checkoutModal: document.getElementById('checkoutModal'),
      checkoutOverlay: document.getElementById('checkoutOverlay'),
      closeCheckoutBtn: document.getElementById('closeCheckoutBtn'),
      checkoutForm: document.getElementById('checkoutForm'),
      checkoutSummary: document.getElementById('checkoutSummary'),
      checkoutSubtotal: document.getElementById('checkoutSubtotal'),
      checkoutTotal: document.getElementById('checkoutTotal'),
      placeOrderBtn: document.getElementById('placeOrderBtn'),
      cardDetails: document.getElementById('cardDetails'),
      paymentMethods: document.querySelectorAll('input[name="paymentMethod"]'),
      
      // Contact form
      contactForm: document.getElementById('contactForm')
    };

    this.initEventListeners();
    this.store.subscribe(() => this.render());
  }

  /**
   * Initialize all event listeners
   */
  initEventListeners() {
    // Landing page navigation
    if (this.elements.startShoppingBtn) {
      this.elements.startShoppingBtn.addEventListener('click', () => this.showProducts());
    }

    // Category tabs
    this.elements.categoryTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        this.handleCategoryTab(category);
      });
    });

    // Cart modal
    this.elements.cartBtn.addEventListener('click', () => this.showCart());
    this.elements.closeCartBtn.addEventListener('click', () => this.hideCart());
    this.elements.cartOverlay.addEventListener('click', () => this.hideCart());
    this.elements.checkoutBtn.addEventListener('click', () => this.showCheckout());

    // Checkout modal
    this.elements.closeCheckoutBtn.addEventListener('click', () => this.hideCheckout());
    this.elements.checkoutOverlay.addEventListener('click', () => this.hideCheckout());
    this.elements.placeOrderBtn.addEventListener('click', () => this.handlePlaceOrder());

    // Payment method change
    this.elements.paymentMethods.forEach(method => {
      method.addEventListener('change', (e) => {
        this.handlePaymentMethodChange(e.target.value);
      });
    });

    // Card input formatting
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');

    if (cardNumber) {
      cardNumber.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s/g, '');
        value = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = value;
      });
    }

    if (expiryDate) {
      expiryDate.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
          value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
      });
    }

    if (cvv) {
      cvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
      });
    }

    // Initialize payment method
    this.handlePaymentMethodChange('credit-card');

    // Filters
    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener('input', (e) => {
        this.productManager.updateFilters({ search: e.target.value });
      });
    }

    if (this.elements.sortSelect) {
      this.elements.sortSelect.addEventListener('change', (e) => {
        this.productManager.updateFilters({ sort: e.target.value });
      });
    }

    if (this.elements.categoryFilter) {
      this.elements.categoryFilter.addEventListener('change', (e) => {
        this.productManager.updateFilters({ category: e.target.value });
      });
    }

    // Contact form
    if (this.elements.contactForm) {
      this.elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactSubmit(e);
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.elements.cartModal.classList.contains('is-active')) {
          this.hideCart();
        }
        if (this.elements.checkoutModal.classList.contains('is-active')) {
          this.hideCheckout();
        }
      }
    });
  }

  /**
   * Main render function
   */
  render() {
    this.renderProducts();
    this.renderCart();
    this.updateCartBadge();
  }

  /**
   * Render products grid
   */
  renderProducts() {
    const products = this.productManager.getFilteredProducts();
    
    // Show empty state if no products
    if (products.length === 0) {
      this.elements.productList.style.display = 'none';
      this.elements.emptyState.style.display = 'flex';
      return;
    }

    this.elements.productList.style.display = 'grid';
    this.elements.emptyState.style.display = 'none';

    this.elements.productList.innerHTML = products.map(product => `
      <article class="product-card" role="listitem">
        <div class="product-card__image-wrapper">
          <img 
            src="${this.escapeHtml(product.image)}" 
            alt="${this.escapeHtml(product.name)}"
            class="product-card__image"
            loading="lazy"
          />
          ${product.badge ? `<span class="product-card__badge">${this.escapeHtml(product.badge)}</span>` : ''}
        </div>
        
        <div class="product-card__content">
          <span class="product-card__category">${this.escapeHtml(product.category)}</span>
          <h3 class="product-card__name">${this.escapeHtml(product.name)}</h3>
          
          <div class="product-card__footer">
            <div>
              <div class="product-card__price">₹${product.price.toLocaleString('en-IN')}</div>
              <div class="product-card__rating">
                <span class="product-card__stars">★★★★★</span>
                <span>${product.rating}</span>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          class="btn btn--primary btn--block" 
          data-product-id="${product.id}"
          aria-label="Add ${this.escapeHtml(product.name)} to cart"
        >
          Add to Cart
        </button>
      </article>
    `).join('');

    // Add event listeners to add-to-cart buttons
    this.elements.productList.querySelectorAll('.btn[data-product-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.handleAddToCart(productId);
      });
    });
  }

  /**
   * Render cart modal
   */
  renderCart() {
    const { cart } = this.store.getState();

  if (cart.length === 0) {
      this.elements.cartItems.style.display = 'none';
      this.elements.emptyCartMsg.style.display = 'flex';
      this.elements.cartFooter.style.display = 'none';
    return;
  }

    this.elements.cartItems.style.display = 'flex';
    this.elements.emptyCartMsg.style.display = 'none';
    this.elements.cartFooter.style.display = 'block';

    this.elements.cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img 
          src="${this.escapeHtml(item.image)}" 
          alt="${this.escapeHtml(item.name)}"
          class="cart-item__image"
        />
        
        <div class="cart-item__details">
          <h4 class="cart-item__name">${this.escapeHtml(item.name)}</h4>
          <div class="cart-item__price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
          
          <div class="cart-item__controls">
            <div class="cart-item__quantity">
              <button 
                class="cart-item__quantity-btn" 
                data-action="decrease" 
                data-product-id="${item.id}"
                aria-label="Decrease quantity"
              >−</button>
              <span class="cart-item__quantity-value">${item.quantity}</span>
              <button 
                class="cart-item__quantity-btn" 
                data-action="increase" 
                data-product-id="${item.id}"
                aria-label="Increase quantity"
              >+</button>
            </div>
            
            <button 
              class="cart-item__remove" 
              data-action="remove" 
              data-product-id="${item.id}"
              aria-label="Remove ${this.escapeHtml(item.name)} from cart"
            >Remove</button>
          </div>
        </div>
      </div>
    `).join('');

    // Add event listeners for cart controls
    this.elements.cartItems.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;
        const productId = parseInt(e.currentTarget.dataset.productId);
        this.handleCartAction(action, productId);
      });
    });

    // Update totals
    const subtotal = this.cartManager.getCartTotal();
    this.elements.cartSubtotal.textContent = `₹${Math.round(subtotal).toLocaleString('en-IN')}`;
    this.elements.cartTotal.textContent = `₹${Math.round(subtotal).toLocaleString('en-IN')}`;
  }

  /**
   * Update cart badge
   */
  updateCartBadge() {
    const count = this.cartManager.getCartItemCount();
    this.elements.cartBadge.textContent = count;
  }

  /**
   * Show cart modal
   */
  showCart() {
    this.elements.cartModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Hide cart modal
   */
  hideCart() {
    this.elements.cartModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  /**
   * Show toast notification
   */
  showToast(message, duration = 3000) {
    this.elements.toastMessage.textContent = message;
    this.elements.toast.classList.add('is-visible');

    setTimeout(() => {
      this.elements.toast.classList.remove('is-visible');
    }, duration);
  }

  /**
   * Handle add to cart
   */
  handleAddToCart(productId) {
    const product = this.cartManager.addToCart(productId);
    if (product) {
      this.showToast(`${product.name} added to cart!`);
    }
  }

  /**
   * Handle cart actions
   */
  handleCartAction(action, productId) {
    const { cart } = this.store.getState();
    const item = cart.find(item => item.id === productId);

    if (!item) return;

    switch (action) {
      case 'increase':
        this.cartManager.updateQuantity(productId, item.quantity + 1);
        break;
      case 'decrease':
        this.cartManager.updateQuantity(productId, item.quantity - 1);
        break;
      case 'remove':
        this.cartManager.removeFromCart(productId);
        this.showToast(`${item.name} removed from cart`);
        break;
    }
  }

  /**
   * Show products section (from landing page)
   */
  showProducts() {
    if (this.elements.landingPage) {
      this.elements.landingPage.style.display = 'none';
    }
    if (this.elements.categoriesSection) {
      this.elements.categoriesSection.style.display = 'block';
    }
    if (this.elements.productsSection) {
      this.elements.productsSection.style.display = 'block';
    }
    // Scroll to products
    if (this.elements.categoriesSection) {
      this.elements.categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Handle category tab click
   */
  handleCategoryTab(category) {
    // Update active tab
    this.elements.categoryTabs.forEach(tab => {
      if (tab.dataset.category === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update filter
    this.productManager.updateFilters({ category });
    
    // Scroll to products
    if (this.elements.productsSection) {
      this.elements.productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Show checkout modal
   */
  showCheckout() {
    this.hideCart();
    this.renderCheckout();
    this.elements.checkoutModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Hide checkout modal
   */
  hideCheckout() {
    this.elements.checkoutModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  /**
   * Render checkout modal
   */
  renderCheckout() {
    const { cart } = this.store.getState();
    const subtotal = this.cartManager.getCartTotal();
    const shipping = 99;
    const total = subtotal + shipping;

    // Render order summary
    this.elements.checkoutSummary.innerHTML = cart.map(item => `
      <div class="checkout-summary-item">
        <div>
          <div class="checkout-summary-item__name">${this.escapeHtml(item.name)}</div>
          <div style="font-size: 0.875rem; color: var(--color-gray-500);">Qty: ${item.quantity}</div>
        </div>
        <div class="checkout-summary-item__price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
      </div>
    `).join('');

    // Update totals
    this.elements.checkoutSubtotal.textContent = `₹${Math.round(subtotal).toLocaleString('en-IN')}`;
    this.elements.checkoutTotal.textContent = `₹${Math.round(total).toLocaleString('en-IN')}`;
  }

  /**
   * Handle payment method change
   */
  handlePaymentMethodChange(method) {
    if (method === 'credit-card') {
      this.elements.cardDetails.style.display = 'block';
      // Make card fields required
      document.getElementById('cardNumber').required = true;
      document.getElementById('expiryDate').required = true;
      document.getElementById('cvv').required = true;
      document.getElementById('cardName').required = true;
    } else {
      this.elements.cardDetails.style.display = 'none';
      // Remove required from card fields
      document.getElementById('cardNumber').required = false;
      document.getElementById('expiryDate').required = false;
      document.getElementById('cvv').required = false;
      document.getElementById('cardName').required = false;
    }
  }

  /**
   * Handle place order
   */
  handlePlaceOrder() {
    const form = this.elements.checkoutForm;
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const orderData = {
      address: {
        fullName: formData.get('fullName'),
        phone: formData.get('phone'),
        address: formData.get('address'),
        city: formData.get('city'),
        state: formData.get('state'),
        zipCode: formData.get('zipCode'),
        country: formData.get('country')
      },
      payment: {
        method: formData.get('paymentMethod'),
        cardNumber: formData.get('cardNumber'),
        expiryDate: formData.get('expiryDate'),
        cvv: formData.get('cvv'),
        cardName: formData.get('cardName')
      },
      items: this.store.getState().cart,
      total: this.cartManager.getCartTotal() + 99
    };

    // Show success message
    const itemCount = this.cartManager.getCartItemCount();
    this.showToast(`Order placed successfully! ${itemCount} items totaling ₹${Math.round(orderData.total).toLocaleString('en-IN')}`, 5000);
    
    // Clear cart
    this.cartManager.clearCart();
    
    // Hide checkout and reset form
    this.hideCheckout();
    form.reset();
    
    // Reset payment method
    document.querySelector('input[name="paymentMethod"][value="credit-card"]').checked = true;
    this.handlePaymentMethodChange('credit-card');
  }

  /**
   * Handle contact form submit
   */
  handleContactSubmit(e) {
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    // Show success message
    this.showToast('Thank you for your message! We will get back to you soon.', 5000);
    
    // Reset form
    e.target.reset();
  }

  /**
   * Handle checkout (old method - now redirects to checkout modal)
   */
  handleCheckout() {
    this.showCheckout();
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

/* ===========================
   Application Bootstrap
   =========================== */

class Application {
  constructor() {
    this.store = new Store();
    this.cartManager = new CartManager(this.store);
    this.productManager = new ProductManager(this.store);
    this.uiManager = new UIManager(this.store, this.cartManager, this.productManager);
  }

  /**
   * Initialize the application
   */
  init() {
    console.log('🚀 E-Commerce Platform initializing...');
    
    // Load data
    this.store.loadCart();
    this.productManager.loadProducts();
    
    // Initial render
    this.uiManager.render();
    
    console.log('✅ E-Commerce Platform ready!');
  }
}

/* ===========================
   Application Entry Point
   =========================== */

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new Application();
    app.init();
  });
} else {
  const app = new Application();
  app.init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Application, Store, CartManager, ProductManager, UIManager };
}
