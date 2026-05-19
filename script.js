const slider = document.querySelector('.promo-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }
  
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }
  
  function updateSlider() {
    slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }
  
  updateSlider();
const coffeeProducts = [
  {
    title: "Еспресо класичний",
    description: "Класичний еспресо з ароматної робусти та арабіки середньої обжарки",
    price: 120,
    image: "img/coffee-brown.png"
  },
  {
    title: "Капучіно",
    description: "Ніжна молочна пінка зі збалансованим смаком еспресо та карамельними нотками", 
    price: 175,
    image: "img/Flat_White.svg"
  },
  {
    title: "Латте з ванільним сиропом",
    description: "Ароматний еспресо, вершкове молоко та дотик ванільного сиропу",
    price: 195,
    image: "img/coffee-yellow.png"
  },
  {
    title: "Декаф Флет Уайт",
    description: "Кава без кофеїну з Ефіопії з натуральним фермерським молоком",
    price: 225,
    image: "img/coffee-purple.png"
  },
  {
    title: "Мокачіно",
    description: "Комбінація еспресо, гарячого шоколаду та молока з пінкою",
    price: 210,
    image: "img/coffee-black.png"
  },
  {
    title: "Раф з лавандою",
    description: "Унікальний авторський раф з ніжними нотками лаванди та ванілі",
    price: 235,
    image: "img/coffee-pink.png"
  }
];


function renderProducts(products) {
  const catalogGrid = document.querySelector('.catalog-grid');
  catalogGrid.innerHTML = ''; 
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}грн</span>
          <button class="btn-cart">В кошик</button>
        </div>
      </div>
    `;
    
    catalogGrid.appendChild(productCard);
  });

  
  document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', function() {
      const productCard = this.closest('.product-card');
      const productTitle = productCard.querySelector('.product-title').textContent;
      alert(`Товар "${productTitle}" добавлен в корзину!`);
    });
  });
}


function sortProducts(method) {
  let sortedProducts = [...coffeeProducts]; 
  
  switch(method) {
    case 'price-asc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sortedProducts.sort((a, b) => a.price - b.price).reverse();
      break;
    case 'name':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'name-reverse':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title)).reverse();
      break;
    default: 
      break;
  }
  
  renderProducts(sortedProducts);
}


document.addEventListener('DOMContentLoaded', () => {
  renderProducts(coffeeProducts);
  
  
  const sortingSelect = document.querySelector('.sorting-select');
  if (sortingSelect) {
    sortingSelect.addEventListener('change', (e) => {
      sortProducts(e.target.value);
    });
  }
});