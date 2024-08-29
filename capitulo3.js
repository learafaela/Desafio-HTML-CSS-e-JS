// 1. Implementar Mudanças Dinâmicas de Conteúdo
document.querySelectorAll('.news-container h3').forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

// 2. Adicionar Animações Suaves ao Rolar a Página
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            element.classList.add('visible');
        }
    });
});

// 3. Criar um Slideshow na Galeria de Imagens
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : totalSlides - 1;
    showSlide(slideIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex < totalSlides - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
});

showSlide(slideIndex);

// 4. Implementar uma Rolagem Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 5. Adicionar um Sistema de Validação para Formulários
document.querySelector('form').addEventListener('submit', function (e) {
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    if (email === '' || message === '') {
        e.preventDefault();
        alert('Por favor, preencha todos os campos.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        e.preventDefault();
        alert('Por favor, insira um e-mail válido.');
    }
});