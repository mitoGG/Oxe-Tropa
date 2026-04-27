const filmes = [
    { titulo: "Interestelar", imagem: "https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" },
    { titulo: "Batman", imagem: "https://image.tmdb.org/t/p/w500/t7I9S6C6D6J7JpWn3Mv2ZJpP7p.jpg" },
    { titulo: "Matrix", imagem: "https://image.tmdb.org/t/p/w500/lh4YtfS7jU7f68v1GDbXvS0mc0X.jpg" },
    { titulo: "Avatar", imagem: "https://image.tmdb.org/t/p/w500/8Y736mS4Emm998X4Sps8719p7S.jpg" },
    { titulo: "Vingadores", imagem: "https://image.tmdb.org/t/p/w500/RYMX2uSBLxrL7OPRbs67vC5RVp.jpg" },
    { titulo: "O Rei Leão", imagem: "https://image.tmdb.org/t/p/w500/279S969YvjxY7WSTp96vbsn8CIs.jpg" }
];

const movieGrid = document.getElementById('movieGrid');
const searchInput = document.getElementById('searchInput');

// Função para exibir os filmes
function exibirFilmes(lista) {
    movieGrid.innerHTML = ""; // Limpa a tela antes de exibir
    lista.forEach(filme => {
        const card = `
            <div class="movie-card">
                <img src="${filme.imagem}" alt="${filme.titulo}">
                <div class="movie-info">
                    <h3>${filme.titulo}</h3>
                </div>
            </div>
        `;
        movieGrid.innerHTML += card;
    });
}

// Lógica de busca
searchInput.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();
    const filmesFiltrados = filmes.filter(filme => 
        filme.titulo.toLowerCase().includes(termoBusca)
    );
    exibirFilmes(filmesFiltrados);
});

// Inicializar a página
exibirFilmes(filmes);