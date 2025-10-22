/**
 * E-Commerce Platform - Main Application
 * Modern JavaScript implementation with MVC architecture
 * Features: State management, LocalStorage persistence, Advanced filtering
 */

/* ===========================
   Data Layer
   =========================== */

const PRODUCTS_DATA = [
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
    id: 2,
    name: "Smart Fitness Watch",
    price: 32999,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: null
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
    id: 4,
    name: "Pro Gaming Mouse",
    price: 7499,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "New"
  },
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
    id: 6,
    name: "Mechanical Keyboard",
    price: 13299,
    category: "gaming",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Bestseller"
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
    id: 8,
    name: "4K Webcam",
    price: 16599,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: "New"
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
      toastMessage: document.getElementById('toastMessage')
    };

    this.initEventListeners();
    this.store.subscribe(() => this.render());
  }

  /**
   * Initialize all event listeners
   */
  initEventListeners() {
    // Cart modal
    this.elements.cartBtn.addEventListener('click', () => this.showCart());
    this.elements.closeCartBtn.addEventListener('click', () => this.hideCart());
    this.elements.cartOverlay.addEventListener('click', () => this.hideCart());
    this.elements.checkoutBtn.addEventListener('click', () => this.handleCheckout());

    // Filters
    this.elements.searchInput.addEventListener('input', (e) => {
      this.productManager.updateFilters({ search: e.target.value });
    });

    this.elements.sortSelect.addEventListener('change', (e) => {
      this.productManager.updateFilters({ sort: e.target.value });
    });

    this.elements.categoryFilter.addEventListener('change', (e) => {
      this.productManager.updateFilters({ category: e.target.value });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.elements.cartModal.classList.contains('is-active')) {
        this.hideCart();
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
   * Handle checkout
   */
  handleCheckout() {
    const total = this.cartManager.getCartTotal();
    const itemCount = this.cartManager.getCartItemCount();
    
    this.showToast(`Thank you for your purchase of ${itemCount} items totaling ₹${Math.round(total).toLocaleString('en-IN')}!`, 5000);
    this.cartManager.clearCart();
    this.hideCart();
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
