document.addEventListener('DOMContentLoaded', function() {
    var btnImagem = document.getElementById('btn_imagem');
    var btnTabela = document.getElementById('btn_tabela');

    btnImagem.addEventListener('click', function() {
        window.location.href = '/imagem/';
    });

    btnTabela.addEventListener('click', function() {
        window.location.href = '/tabela/';
    })
})

// nao consegui com essa url enviada no pdf
// https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/12/20/1527502278-golden-retriever.jpg

// porem com outras da internet funcionou perfeitamente
// https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-1024x683.jpg
// https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg

function buscarImagem() {
    const url = document.getElementById('search_image').value;
    const imageContainer = document.getElementById('image_container');

    if (url) {
        console.log(url)
        imageContainer.innerHTML = `<img src="${url}" alt="Imagem buscada" style="max-width:100%; max-height:100%;">`;
    } else {
        imageContainer.innerHTML = "<p>Nenhuma imagem para exibir.</p>";
    }
}