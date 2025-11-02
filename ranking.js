const usuarios = [
      { nome: "Giovanna Saori Yamada Lima", peso: 5.785 },
      { nome: "Rafael Ferreira Santiago", peso: 4.230 },
      { nome: "Giovana Alves Magalhães", peso: 3.890 },
      { nome: "Victor Antonio Mesquita Celestino da Silva", peso: 1.450 },
      { nome: "Vinicius Rodrigues dos Santos Coelho", peso: 1.200 },
    ];

 const rankingList = document.getElementById("rankingList");

    usuarios.forEach((user, index) => {
    const li = document.createElement("li");
    li.classList.add("ranking-item");
    if (index === 0) li.classList.add("top1");

    li.innerHTML = `
        <span>
        <span class="position">${index + 1}.</span>
        ${user.nome}
        </span>
        <span>${user.peso.toFixed(3)} kg</span>
    `;

      rankingList.appendChild(li);
});