// Útil quando a variável possui valor específico

const permissoes = "professor" // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Só pode assistir as aulas.");
    break;
  case "professor":
    console.log("Pode alterar as aulas.");
    break;
  case "admin":
    console.log("Pode alterar qualquer coisa do sistema!");
    break;
  default:
    console.log("Não sei quem é você no sistema!");
}
