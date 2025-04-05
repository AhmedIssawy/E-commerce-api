
# E-commerce API

A RESTful API built with Node.js for an e-commerce platform, providing endpoints for product management, user authentication, and order processing.

## Features

- User authentication and authorization
- Product management (CRUD operations)
- Shopping cart functionality
- Order processing
- Category management
- User profile management

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Mongoose ODM
- Bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FahdAzmy/E-commerce-api.git
cd E-commerce-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the server:
```bash
npm start
```

## API Endpoints

# 🛒 E-commerce API

## Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user

## Users
- `GET /api/v1/users` - Get all users (Admin only)
- `GET /api/v1/users/:id` - Get single user (Admin or same user)
- `PUT /api/v1/users/:id` - Update user (Admin or same user)
- `DELETE /api/v1/users/:id` - Delete user (Admin only)

## Products
- `GET /api/v1/products` - Get all products
- `GET /api/v1/products/:id` - Get single product
- `POST /api/v1/products` - Create new product (Admin only)
- `PUT /api/v1/products/:id` - Update product (Admin only)
- `DELETE /api/v1/products/:id` - Delete product (Admin only)

## Categories
- `GET /api/v1/categories` - Get all categories
- `POST /api/v1/categories` - Create new category (Admin only)
- `PUT /api/v1/categories/:id` - Update category (Admin only)
- `DELETE /api/v1/categories/:id` - Delete category (Admin only)

## Subcategories
- `GET /api/v1/subcategories` - Get all subcategories
- `POST /api/v1/subcategories` - Create subcategory (Admin only)
- `PUT /api/v1/subcategories/:id` - Update subcategory (Admin only)
- `DELETE /api/v1/subcategories/:id` - Delete subcategory (Admin only)

## Brands
- `GET /api/v1/brands` - Get all brands
- `POST /api/v1/brands` - Create brand (Admin only)
- `PUT /api/v1/brands/:id` - Update brand (Admin only)
- `DELETE /api/v1/brands/:id` - Delete brand (Admin only)

## Reviews
- `GET /api/v1/reviews` - Get all reviews
- `POST /api/v1/reviews` - Create a review (Auth only)
- `PUT /api/v1/reviews/:id` - Update review (Owner only)
- `DELETE /api/v1/reviews/:id` - Delete review (Owner/Admin)

## Wishlist
- `GET /api/v1/wishlist` - Get user's wishlist
- `POST /api/v1/wishlist` - Add product to wishlist
- `DELETE /api/v1/wishlist/:productId` - Remove product from wishlist

## Addresses
- `GET /api/v1/addresses` - Get user addresses
- `POST /api/v1/addresses` - Add new address
- `PUT /api/v1/addresses/:id` - Update address
- `DELETE /api/v1/addresses/:id` - Delete address

## Coupons
- `GET /api/v1/coupons` - Get all coupons
- `POST /api/v1/coupons` - Create a coupon (Admin only)
- `PUT /api/v1/coupons/:id` - Update a coupon (Admin only)
- `DELETE /api/v1/coupons/:id` - Delete a coupon (Admin only)

## Cart
- `GET /api/v1/cart` - Get user's cart
- `POST /api/v1/cart` - Add item to cart
- `PUT /api/v1/cart/:itemId` - Update cart item
- `DELETE /api/v1/cart/:itemId` - Remove item from cart

## Orders
- `GET /api/v1/orders` - Get user's orders
- `POST /api/v1/orders` - Create new order
- `GET /api/v1/orders/:id` - Get order details


## Error Handling

The API uses standard HTTP status codes for error handling:
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

## Security Features

- JWT-based authentication
- Password hashing
- Protected routes
- Role-based access control

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Fahd Azmy - [GitHub](https://github.com/FahdAzmy)

Project Link: [https://github.com/FahdAzmy/E-commerce-api](https://github.com/FahdAzmy/E-commerce-api)
