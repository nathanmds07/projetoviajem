function saudacao() {
  const hora = new Date().getHours();
  const mensagem = hora < 12 ? "Bom dia!" : hora < 18 ? "Boa tarde!" : "Boa noite!";
  const el = document.getElementById("saudacao");
  if (el) el.innerText = mensagem;
}

function mostrarMais() {
  const extra = document.getElementById("conteudo-extra");
  extra.style.display = extra.style.display === "none" ? "block" : "none";
}

function abrirModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const descricao = document.getElementById("descricao");
  modal.style.display = "flex";
  modalImg.src = img.src;
  descricao.innerText = img.alt;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function validarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  if (!nome || !email) {
    alert("Preencha nome e e-mail.");
    return false;
  }
  alert("Mensagem enviada com sucesso!");
  return true;
}

function alternarModoEscuro() {
  document.body.classList.toggle("dark-mode");
}