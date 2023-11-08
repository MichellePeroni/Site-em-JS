export class Card{
    criarCard = (imagemDoCard, tituloCard, textoCard) =>{
        const div = document.createElement('div');
        div.className = 'divCard';
        const imagem = document.createElement('img');
        imagem.src = imagemDoCard;
        const titulo = document.createElement('h2');
        titulo.innerText = tituloCard;
        const texto = document.createElement('p');
        texto.innerText = textoCard;

        div.appendChild(imagem);
        div.appendChild(titulo);
        div.appendChild(texto);

        root.appendChild(div);

    }
}