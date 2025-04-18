# GadgetHeaven ✨ - E-commerce Platform Plan

---

### 🏠 Home Page:
- **Navbar**: Logo, Brand Name, Dashboard, Stats  
  - Active route indication
- **Banner Section**:
  - Eye-catching design as per Figma
  - CTA button leading to Dashboard
- **Categories Sidebar**:
  - Categories: Computers, Phones, Smart Watches, Chargers, Power Banks
- **Product Grid**:
  - 6-9 Gadget Cards
  - Card content: product image, name, price, "Details" button
  - Clicking "Details" navigates to the individual product details page
- **Nested Layout**:
  - Clicking on categories filters and shows gadgets for that category

---

### 📊 Dashboard Page:
- **Tabs**:
  - Cart Tab
  - Wishlist Tab
- **Cart Tab**:
  - Displays cart items with image, name, price, etc.
  - Show total price
  - Button to sort by price (descending)
  - Purchase button triggers modal (if cart not empty)
- **Wishlist Tab**:
  - Show all wishlist items
  - Wishlist card includes Add to Cart button

---

### 🔍 Details Page:
- **Product Details**:
  - Show full product information from JSON fields:
    - `product_id`, `product_title`, `product_image`, `category`, `price`, `description`, `Specification`, `availability`, `rating`, `brand`
- **Buttons**:
  - Add to Cart (🛒): Adds to cart and shows toast
  - Wishlist (❤️): Adds to wishlist and shows toast
  - Disable heart icon after one click

---

### 📆 New Routes:
- **Stats Page**:
  - Composed Chart: Price (Y-axis) vs Product Name (X-axis)
    - Area/Bar for price, Scatter for rating
- **Additional Route**:
  - About Us or Contact Page with meaningful content

---

### 🛋 Functionalities:
- Use **React Context API** for state management
- Use **LocalStorage** for data persistence (cart, wishlist)
- Show toast on:
  - Adding to cart (e.g., "Added to cart")
  - Adding to wishlist (e.g., "Added to wishlist")
- **Cart Price Cap**:
  - Limit cart total to $1000
  - Prevent adding items that exceed this cap
- **Cart & Wishlist Management**:
  - Remove items from cart
  - Remove items from wishlist
  - Wishlist card's Add to Cart also removes from wishlist

---

### ⚖️ Edge Case Handling:
- Avoid errors on reload using routing fallback and LocalStorage
- Prevent double adding to wishlist
- Cart limit of $1000 with graceful error toast
- Prevent Purchase if cart is empty or total is 0

---

### 🌐 UX Enhancements:
- Dynamic page titles using `react-helmet`
- Favicon added
- `useLocation()` for background styling per route
- `useNavigate()` for redirect after modal purchase
- Modal with congratulations message and redirect after purchase

---

### 📅 JSON Sample Data Fields:
```json
{
  "product_id": "P1001",
  "product_title": "Smart Bluetooth Speaker",
  "product_image": "https://example.com/img/speaker.jpg",
  "category": "Smart Watches",
  "price": 120,
  "description": "A portable Bluetooth speaker with voice assistant integration.",
  "Specification": ["Bluetooth 5.1", "10h Battery Life", "Water Resistant"],
  "availability": true,
  "rating": 4.6,
  "brand": "GadgetX"
}
