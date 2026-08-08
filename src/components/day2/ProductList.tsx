import './ProductList.css';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  badge?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Urban Sneakers',
    description: 'Lightweight street-ready shoes with cushioned comfort.',
    price: 79.99,
    badge: 'Best seller',
  },
  {
    id: 2,
    name: 'Everyday Backpack',
    description: 'Minimal design with padded straps and laptop pocket.',
    price: 59.99,
    badge: 'Trending',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    description: 'Noise-isolating sound with long battery life.',
    price: 129.99,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Modern Tee',
    description: 'Soft cotton tee with a clean, modern fit.',
    price: 24.99,
  },
];

export const ProductList = () => {
  return (
    <section className="product-list-section">
      <div className="product-list-header">
        <span className="product-list-label">Featured collection</span>
        <h2>Shop with style</h2>
        <p>Explore a modern product lineup designed for a sleek ecommerce experience.</p>
      </div>

      <div className="product-list-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            {product.badge && <span className="product-card-badge">{product.badge}</span>}
            <div className="product-card-image" aria-hidden="true">
              {product.name.charAt(0)}
            </div>
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-card-footer">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <button className="product-card-button" type="button">Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
