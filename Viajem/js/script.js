// Saudação dinâmica no index.html
window.addEventListener("DOMContentLoaded", () => {
    const saudacao = document.getElementById("saudacao");
    if (saudacao) {
      const hora = new Date().getHours();
      let mensagem = "";
      if (hora >= 6 && hora < 12) mensagem = "Bom dia!";
      else if (hora >= 12 && hora < 18) mensagem = "Boa tarde!";
      else mensagem = "Boa noite!";
      saudacao.textContent = mensagem;
    }
  });
  
  // Mostrar mais/menos na página Sobre
  function toggleConteudo() {
    const conteudo = document.getElementById("conteudo-extra");
    const botao = document.getElementById("btn-toggle");
    if (!conteudo || !botao) return;
  
    if (conteudo.style.display === "none" || conteudo.style.display === "") {
      conteudo.style.display = "block";
      botao.textContent = "Mostrar menos";
    } else {
      conteudo.style.display = "none";
      botao.textContent = "Mostrar mais";
    }
  }
  
  // Modal Galeria com navegação
  const galeriaImgs = document.querySelectorAll('.galeria img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const descricao = document.getElementById('descricao');
  const btnFechar = document.getElementById('btn-fechar');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  
  let indiceAtual = 0;
  
  function abrirModal(indice) {
    indiceAtual = indice;
    modal.classList.add('active');
    mostrarImagem(indiceAtual);
  }
  
  function fecharModal(event) {
    if (event.target === modal || event.target === btnFechar) {
      modal.classList.remove('active');
    }
  }
  
  function mostrarImagem(indice) {
    if (indice < 0) indice = galeriaImgs.length - 1;
    if (indice >= galeriaImgs.length) indice = 0;
    indiceAtual = indice;
    modalImg.src = galeriaImgs[indiceAtual].src;
    descricao.textContent = galeriaImgs[indiceAtual].alt;
  }
  
  // Inicializa evento das imagens da galeria (se estiver na página galeria.html)
  if (galeriaImgs.length > 0) {
    galeriaImgs.forEach((img, i) => {
      img.addEventListener('click', () => abrirModal(i));
    });
    btnFechar.addEventListener('click', fecharModal);
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      mostrarImagem(indiceAtual - 1);
    });
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      mostrarImagem(indiceAtual + 1);
    });
    modal.addEventListener('click', fecharModal);
  }
  
  // Validação simples do formulário (contato.html)
  function validarFormulario(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
  
    if (!nome.value.trim() || !email.value.trim()) {
      alert("Por favor, preencha o nome e o e-mail.");
      return;
    }
  
    alert("Mensagem enviada com sucesso!");
    document.getElementById("form-contato").reset();
  }
  
  // Alternar modo escuro em todas as páginas
  function alternarModoEscuro() {
    document.body.classList.toggle("dark-mode");
  }