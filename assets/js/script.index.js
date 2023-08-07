const posts = [];

function savePost() {
    const title = document.getElementById("title").value
    const resume = document.getElementById("resume").value
    const publisher = document.getElementById("publisher").value
    const date = document.getElementById("date").value

    if (title && resume && publisher && date) {
        storePost(title, resume, publisher, date);

    }
    showPosts();
}
function storePost(title, resume, publisher, date) {
    const post = {
        title,
        resume,
        publisher,
        date
    };
    posts.push(post)
}
function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="post">

        <h2>${post.title}</h2>
        <p><strong>Resumo: </strong>${post.resume}</p>
        <p><strong>Autor: </strong>${post.publisher}</p>
        <p><strong>Data de Publicaçao: </strong>${post.date}</p>
<button onclick="editpost(${index})">Editar</button>
<button onclick="removepost(${index})">Remover</button>


        </div>

        `;
    })
    document.getElementById("list").innerHTML = showContent;
}
