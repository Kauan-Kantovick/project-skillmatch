/* SkillMtach JS - SISTEMA DE COMPATIBILIDADE DE VAGAS

Sistema para analisar aderência de um candidato, para vaga de Front-End Júnior. No qual o sistema faz um calculo de compatibilidade do
candidato em relaçao a vaga, comparando as habilidades do candidato com os requisitos da vaga. O sistema irá verificar as seguintes informações:
 
 - Habiliddes do Candidato
 - Requisitos da Vaga
 - Lista de habilidades faltantes. 
 - Percentual de classificação da compatibilidade do candidato com a vaga
  - Indicar a vaga que tem maior compatibilidadec com o candidato.
 - Sugestão de estudos com base nas habilidades faltantes, para ser adotada pelo candidato.
 */

//CRIANDO PERFIL DO CANDIDATO
const candidato = {
  nome: "Ricardo",
  area: "Front-End",
  habilidades: ["HTML", "CSS", "JavaScript"],
  experiencia: 8
};

//CRIANDO ARRAY DAS VAGAS
const vagas = [
  { id: 1, 
    empresa: "ProSolutions", 
    cargo: "Front-End Developer",
    requisitos: ["HTML", "CSS", "JavaScript", "React"], 
    salario: 3500 
  },
  { id: 2, 
    empresa: "DataTech", 
    cargo: "Desenvolvedor Front-End Jr",
    requisitos: ["HTML", "CSS", "JavaScript"], 
    salario: 3000 
  },
  { id: 3, 
    empresa: "Digital Systems", 
    cargo: "Front-End React",
    requisitos: ["HTML", "CSS", "JavaScript", "React", "Git"], 
    salario: 4200 }
];