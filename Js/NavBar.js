export class NavBar {
    //Criamos uma função que criará uma navBar
    criarNavBar = () => {
        //criamos as tags HTML
        const navBar = document.createElement('nav');
        const div = document.createElement('div');
        const iconFavorite = document.createElement('img');
        const iconPerson = document.createElement('img');

        //inserimos dentro da tag img o atributo scr junto com o valor
        iconFavorite.src = "https://cdn-icons-png.flaticon.com/512/73/73814.png";
        iconPerson.src = "https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png";

        //adicionamos classes as imagens recém ceriadas
        iconFavorite.className = 'icons';
        iconPerson.className = 'icons';

        //inserimos as duas imagens dentro da div
        div.appendChild(iconFavorite);
        div.appendChild(iconPerson);

        //inserimos a div dentro da nav
        navBar.appendChild(div)

        //inserimos a nav dentro do root
        root.appendChild(navBar);

        //cria uma div que representa nosso modal
        const divModal = document.createElement('div');
        divModal.className = 'modal';
        divModal.style.display = 'none';
        root.appendChild(divModal);

        iconFavorite.onclick = () => {
            if(divModal.style.display === 'block'){
                divModal.style.display = 'none';
            } else{
                divModal.style.display = 'block';
            }
        }  
    }
}