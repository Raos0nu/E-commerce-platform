# Contributing to SONU's STORE E-Commerce Platform

Thank you for your interest in contributing! This document provides guidelines and best practices for contributing to this project.

## 🌟 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Setting Up Development Environment

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Install dependencies** (optional, for linting)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   python -m http.server 8000
   ```

## 📝 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/wishlist`)
- `fix/` - Bug fixes (e.g., `fix/cart-total-calculation`)
- `refactor/` - Code refactoring (e.g., `refactor/product-manager`)
- `docs/` - Documentation updates (e.g., `docs/api-documentation`)
- `style/` - Style/UI changes (e.g., `style/mobile-responsive`)

### Commit Message Format

Follow the conventional commits specification:

```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(cart): add wishlist functionality
fix(search): resolve case-sensitive search bug
docs(readme): update installation instructions
style(header): improve mobile responsiveness
```

## 🏗️ Code Standards

### JavaScript

```javascript
// ✅ Good
const getCartTotal = cart => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

// ❌ Avoid
function getCartTotal(cart) {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].price * cart[i].quantity;
  }
  return total;
}
```

**Best Practices:**
- Use ES6+ features (arrow functions, destructuring, template literals)
- Prefer `const` over `let`, avoid `var`
- Write pure functions when possible
- Use meaningful variable and function names
- Keep functions small and focused (Single Responsibility)
- Add JSDoc comments for complex functions

### CSS

```css
/* ✅ Good - BEM methodology */
.product-card__title {
  font-size: var(--font-size-lg);
  color: var(--color-gray-900);
}

/* ❌ Avoid - Deep nesting */
.product .card .content .title {
  font-size: 18px;
  color: #111827;
}
```

**Best Practices:**
- Use CSS custom properties for theming
- Follow BEM naming convention
- Mobile-first responsive design
- Avoid !important
- Group related properties
- Use meaningful class names

### HTML

```html
<!-- ✅ Good - Semantic and accessible -->
<button class="btn btn--primary" aria-label="Add to cart">
  Add to Cart
</button>

<!-- ❌ Avoid - Non-semantic -->
<div class="button" onclick="addToCart()">
  Add to Cart
</div>
```

**Best Practices:**
- Use semantic HTML5 elements
- Include ARIA attributes for accessibility
- Add alt text for images
- Use proper heading hierarchy
- Validate HTML

## 🧪 Testing

### Manual Testing Checklist

Before submitting a PR, ensure:

- [ ] Code works in Chrome, Firefox, Safari, and Edge
- [ ] Mobile responsiveness tested on multiple screen sizes
- [ ] Keyboard navigation works properly
- [ ] No console errors
- [ ] LocalStorage functionality works
- [ ] All features work as expected
- [ ] Code follows project standards

### Browser Testing

Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 📤 Pull Request Process

### Before Submitting

1. **Update documentation** if needed
2. **Test thoroughly** across browsers
3. **Run linters** (if applicable)
   ```bash
   npm run lint:js
   npm run lint:css
   ```
4. **Format code**
   ```bash
   npm run format
   ```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe the tests you ran

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested across browsers
```

### Review Process

1. Maintainer will review your PR
2. Address any requested changes
3. Once approved, PR will be merged
4. Your contribution will be credited

## 🐛 Reporting Bugs

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- Browser: [e.g., Chrome 98]
- OS: [e.g., Windows 10]
- Device: [e.g., Desktop, iPhone 12]
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Problem it Solves**
What problem does this solve?

**Proposed Solution**
How would you implement this?

**Alternatives Considered**
Other solutions you've considered

**Additional Context**
Any other relevant information
```

## 📚 Resources

- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [CSS Guidelines](https://cssguidelin.es/)
- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## ❓ Questions?

Feel free to:
- Open an issue for discussion
- Reach out to maintainers
- Check existing issues and PRs

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Happy Coding! 🚀**

