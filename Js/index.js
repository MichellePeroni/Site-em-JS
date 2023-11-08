import {Card} from "./card.js";
import {NavBar} from "./NavBar.js";

const navBar = new NavBar();
const card = new Card();
navBar.criarNavBar()

const produtos = [
    {
        nome: 'pizza frango com catupiry',
        texto: 'Essa é a melhor pizza do senac',
        imagem: 'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_333724454.jpg',
    },
    {
        nome: 'pizza portuguesa',
        texto: 'Essa é a segunda melhor pizza do senac',
        imagem: 'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_333724454.jpg',
    }
]

produtos.forEach(produto => {
    card.criarCard(produto.imagem, produto.nome, produto.texto);
})