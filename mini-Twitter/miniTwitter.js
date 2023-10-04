console.log("#ConstruindoCRUDS");

// [CRUD] JavaScript ~ BÁSICO

const miniTwitter = {
  usuarios: [
    {
      username: "thaizacapelao",
    },
],
    posts: [
        {   
            id: 1,
            owner: 'thaizacapelao',
            content: 'Meu primeiro Tweet',
        }
    ],
};

//CREATE

function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}
criaPost({ owner: 'thaizacapelao', content: 'Segundo Tweet'})
criaPost({ owner: 'thaizacapelao', content: 'Terceiro Tweet'})
console.log(miniTwitter.posts)

//READ

function pegaPosts() {
    return miniTwitter.posts;
}

//UPDATE

function atualizaContentDoPost(id, novoConteudo) {
const PostQueVaiSerAtualizado = pegaPosts().find((post) =>{
    return post.id === id
})

console.log(PostQueVaiSerAtualizado)
PostQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentDoPost(1, 'Novo conteudo do Post')
console.log(pegaPosts())

//DELETE

function apagaPost(id) {
    const listaDePostsAtualizado = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizado;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());
