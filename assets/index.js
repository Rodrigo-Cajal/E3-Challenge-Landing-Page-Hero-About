


const slider = document.querySelector('.trabajos-slider');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const cardWidth = 300; // Ancho de cada card
const cardGap = 10; // Espacio entre las cards
const visibleCards = 8; // Número total de cards visibles (2 filas de 4)
const totalCards = slider.children[0].children.length; // Total de cards en una fila

let index = 0;

function updateSlider() {
  const maxIndex = totalCards - (visibleCards / 4); // Total de cards menos las visibles por fila
  if (index > maxIndex) index = 0;
  if (index < 0) index = maxIndex;
  slider.style.transform = `translateX(-${(cardWidth + cardGap) * index}px)`; // Ajusta el tamaño y el gap
}

function nextSlide() {
  index++;
  updateSlider();
}

function prevSlide() {
  index--;
  updateSlider();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Deslizar automáticamente cada 3.5 segundos
setInterval(nextSlide, 3500);

// Inicializar la posición del slider
updateSlider();


document.addEventListener('DOMContentLoaded', () => {
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const prevPortfolioBtn = document.querySelector('#prev-portfolio');
    const nextPortfolioBtn = document.querySelector('#next-portfolio');
  
    const cardWidth = 300; // Ancho de cada card
    const cardGap = 10; // Espacio entre las cards
    const visibleCards = 8; // Número total de cards visibles (2 filas de 4)
    const totalCards = portfolioSlider.children[0].children.length; // Total de cards en una fila
  
    let portfolioIndex = 0;
  
    function updatePortfolioSlider() {
      const maxPortfolioIndex = totalCards - (visibleCards / 4); // Total de cards menos las visibles por fila
      if (portfolioIndex > maxPortfolioIndex) portfolioIndex = 0;
      if (portfolioIndex < 0) portfolioIndex = maxPortfolioIndex;
      portfolioSlider.style.transform = `translateX(-${(cardWidth + cardGap) * portfolioIndex}px)`; // Ajusta el tamaño y el gap
    }
  
    function nextPortfolioSlide() {
      portfolioIndex++;
      updatePortfolioSlider();
    }
  
    function prevPortfolioSlide() {
      portfolioIndex--;
      updatePortfolioSlider();
    }
  
    prevPortfolioBtn.addEventListener('click', prevPortfolioSlide);
    nextPortfolioBtn.addEventListener('click', nextPortfolioSlide);
  
    // Deslizar automáticamente cada 3.5 segundos
    setInterval(nextPortfolioSlide, 3800);
  
    // Inicializar la posición del slider
    updatePortfolioSlider();
  });
