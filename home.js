document.getElementById("btn").addEventListener("click", () => {
  const alvo = document.getElementById("descarte");
  const yOffset = -230;
  const y = alvo.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});

document.getElementById("linkPontos").addEventListener("click", () => {
  const alvo = document.getElementById("pontos");
  const yOffset = -50;
  const y = alvo.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});


document.getElementById("linkDescarte").addEventListener("click", () => {
  const alvo = document.getElementById("descarte");
  const yOffset = -230;
  const y = alvo.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});


document.getElementById("linkRanking").addEventListener("click", () => {
  const alvo = document.getElementById("ranking");
  const yOffset = -50; 
  const y = alvo.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});

const scrollTopBtn = document.getElementById('scrollTopBtn');
const footer = document.getElementById('footer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const windowHeight = window.innerHeight;

  // Mostrar botão quando rolar mais de 300px
  if (scrollY > 300) {
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }

  // Evitar que o botão fique sobre o footer
  const distanceFromBottom = footerTop - scrollY - windowHeight;
  if (distanceFromBottom < 20) { // margem de 20px
    scrollTopBtn.style.bottom = `${20 + Math.abs(distanceFromBottom)}px`;
  } else {
    scrollTopBtn.style.bottom = '30px'; // posição normal
  }
});

// Scroll suave para o topo
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const isLoggedIn = false; // substituir com verificação real
const formDescarte = document.querySelector('#descarte form');
let toastShown = false; // impede múltiplos toasts ao mesmo tempo

function showToast(message) {
  if (toastShown) return;
  toastShown = true;

  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
    toastShown = false; // permite novas mensagens
  }, 3000);
}

formDescarte.addEventListener('submit', function(e) {
  e.preventDefault(); // sempre previne envio para controlar validações

  // Verifica se todos os campos estão preenchidos
  const endereco = document.getElementById('endereco').value.trim();
  const data = document.getElementById('data').value.trim();
  const objeto = document.getElementById('objeto').value.trim();
  const quantidade = document.getElementById('quantidade').value.trim();

  if (!isLoggedIn) {
    showToast('Você precisa estar logado para registrar um descarte!');
    // opcional: abrir modal de login
    return;
  }

  if (!endereco || !data || !objeto || !quantidade) {
    showToast('Preencha todos os campos para realizar o descarte!');
    return;
  }

  // Se passou nas validações, você pode enviar o formulário
  // formDescarte.submit();
  showToast('Descarte registrado com sucesso!');
});


