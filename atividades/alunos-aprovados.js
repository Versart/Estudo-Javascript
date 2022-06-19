let alunos = [
  {
    nome: 'Jayce',
    nota: 8
  },
  {
    nome: 'Lux',
    nota: 7
  },
  {
    nome: 'Tryndamare',
    nota: 3
  }
]

function alunosAprovados(alunos, media) {
  let alunosAprovados = []

  for (aluno of alunos) {
    if (aluno.nota >= media) {
      alunosAprovados.push(aluno.nome)
    }
  }
  return alunosAprovados
}

console.log(alunosAprovados(alunos, 7))
