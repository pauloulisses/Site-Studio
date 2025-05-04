const studios = {
  name: "Studio de Treinamento Personalizado",
  location: "Rua Exemplo, 123, Cidade, Estado",
  focusGroups: [
    {
      group: "Idosos",
      description:
        "Treinamento focado em melhorar a mobilidade, flexibilidade e força para promover a qualidade de vida na terceira idade.",
      programs: [
        "Alongamento e Flexibilidade",
        "Fortalecimento Muscular",
        "Equilíbrio e Coordenação",
      ],
      poster:
        "https://st3.depositphotos.com/12985790/18900/i/450/depositphotos_189004534-stock-photo-cropped-shot-rehabilitation-therapist-assisting.jpg",
    },
    {
      group: "Doenças Crônicas",
      description:
        "Programas de treinamento físico voltados para pessoas com doenças crônicas, promovendo a melhora da capacidade funcional, redução de sintomas e qualidade de vida, com foco em segurança e adaptação individual.",
      programs: [
        "Exercícios de Baixo Impacto",
        "Fortalecimento do Core e Membros",
        "Exercícios de Respiração e Controle do Estresse",
      ],
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy70jhy9KoVdHa4Z8AZJp5YdHk_F51EVbvCw&s"
    },
    {
      group: "Pessoas com Deficiência",
      description:
        "Programas de treinamento físico desenvolvidos para pessoas com deficiências, com o objetivo de melhorar a mobilidade, a força muscular e a qualidade de vida. Esses programas são adaptados para diferentes tipos de deficiências, focando na individualização de cada treino, respeitando os limites e promovendo a inclusão social. As atividades buscam a redução de sintomas, o aumento da independência e o controle de condições associadas.",
      programs: [
        "Exercícios Adaptados de Baixo Impacto",
        "Fortalecimento Muscular e Estabilização do Corpo",
        "Exercícios de Respiração para Aumento da Capacidade Pulmonar e Redução do Estresse",
        "Treinamentos Funcionais para Melhora da Mobilidade e Coordenação",
      ],
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb7kG89P9s-GCTNFD_kLxwMLE8Ivoaa91pQ&s"
    },
    {
      group: "Pessoas com Transtornos Mentais",
      description:
        "Programas de treinamento físico desenvolvidos para pessoas com transtornos mentais, com o objetivo de melhorar o bem-estar psicológico, reduzir sintomas relacionados ao transtorno e promover a qualidade de vida. As atividades são adaptadas para ajudar no controle do estresse, na regulação emocional e no aumento da autoestima, sempre com foco na segurança, apoio e adaptação às necessidades individuais.",
      programs: [
        "Exercícios de Baixo Impacto para Redução de Ansiedade",
        "Fortalecimento do Core e Membros para Estabilidade Física e Mental",
        "Exercícios de Respiração e Técnicas de Relaxamento para Controle do Estresse",
        "Atividades de Movimento para Melhora do Humor e Combate à Depressão",
      ],
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiz4CMKpSjJtzfYJnl_8Jgj5s8W-U_Wm2pUA&s"
    },
    {
      group: "Doenças Músculoesqueléticas",
      description:
        "Programas de treinamento especializados para pessoas com doenças músculoesqueléticas, com foco na recuperação muscular, alívio da dor, e prevenção de futuras lesões. As atividades são adaptadas para melhorar a mobilidade, fortalecer as articulações e músculos, e promover a funcionalidade plena do corpo, sempre com atenção à segurança e adaptação individual.",
      programs: [
        "Fortalecimento Muscular e Reabilitação Pós-Lesão",
        "Exercícios de Mobilidade Articular para Aumentar a Flexibilidade",
        "Treinamento Funcional para Prevenção de Lesões Repetitivas",
        "Exercícios de Alongamento e Relaxamento para Redução da Dor",
      ],
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3n6rKeBweWAbSaeU7G2_j-To_W_uuqXFHA&s"
    },
  ],
  facilities: [
    "Espaço amplo e adaptado para diferentes tipos de treinamento",
    "Equipamentos modernos e seguros",
    "Área de descanso e recuperação",
    "Profissionais qualificados e com experiência em grupos especiais",
  ],

  contactInfo: {
    phone: "(XX) XXXXX-XXXX",
    email: "contato@estudiotreinamento.com.br",
    website: "www.estudiotreinamento.com.br",
  },
};

const studio = document.getElementById("studio");

// Exibindo os grupos de foco
for (const grupo of studios.focusGroups) {
  studio.innerHTML += `
      <div class="grupo">
        <h2>${grupo.group}</h2>
        <p>${grupo.description}</p>
        ${
          grupo.poster
            ? `<img src="${grupo.poster}" style="max-width: 300px; height: auto;" class="card-img-top" alt="Imagem do grupo" />`
            : ""
        }
        <h4>Programas:</h4>
        <ul>
          ${grupo.programs.map((programa) => `<li>${programa}</li>`).join("")}
        </ul>
      </div>
    `;
}

// Adicionando as informações no rodapé após o loop de foco
const rodape = document.getElementById("rodape");

// Exibindo facilities no rodapé (apenas uma vez)
rodape.innerHTML += `
  <div class="facilities">
    <h3>Instalações:</h3>
    <ul>
      ${studios.facilities.map((facility) => `<li>${facility}</li>`).join("")}
    </ul>
  </div>
`;

// Exibindo informações de contato no rodapé (apenas uma vez)
rodape.innerHTML += `
  <div class="contact-info">
    <h3>Informações de Contato:</h3>
    <p>Telefone: <a href="tel:${studios.contactInfo.phone}">${studios.contactInfo.phone}</a></p>
    <p>Email: <a href="mailto:${studios.contactInfo.email}">${studios.contactInfo.email}</a></p>
    <p>Website: <a href="http://${studios.contactInfo.website}" target="_blank">${studios.contactInfo.website}</a></p>
  </div>
`;
