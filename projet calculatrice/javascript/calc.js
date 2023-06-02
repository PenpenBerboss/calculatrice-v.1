/* pour commencer je creer un tableau qui va recupérer tous mes boutons */

const touches = [...document.querySelectorAll('.bouton')];

/* Dans cette ligne, je crée un deuxième tableau "Listekeycode" qui va recupérer les data-key de chacun de mes boutons */

const listekeycode = touches.map(touche => touche.dataset.key)

/* Ici, je creer la variable ecran qui recupérer le contenu de mon écran (ce contenu qui est le champs vide entre mes deux divs) */

const ecran = document.querySelector('.ecran')
const result = document.querySelector('.result')

/*Dans cette ligne, je creer une méthode qui écoute le comportement de l'user lorsque il clique sur un bouton la valeur de celui ci est transmis dans la variable valeur */

// document.addEventListener('keydown', (e) => {
//     const valeur = e.key.toString();
//     calculer(valeur);
// })

/*pareil pour cette ligne ci */

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

/*Dans cette ligne, je creer le cerveau de mon apllication */
/*Ici je défini  une fonction qui va traiter la valeur recupérer au clavier par les différentes méthodes données plus haut */

const calculer = (valeur) => {

    //si la valeur entrée par l'user est incluse dans le tableau listekeycode, execute ces actions:

    if (listekeycode.includes(valeur)) {
        switch (valeur) {

            //si la valeur entrée correspond au bouton de key="8", vide l'ecran(ici le navigateur va retirer tous les caratères se trouvant entre mes divs)

            case '8':
                ecran.textContent = "";
                result.textContent = "";
                break;

                //si la valeur entrée correspond plutot au bouton de key="13", évalue(fait l'opération) qui sera entrée au clavier et met là dans la variable calcul

            case '13':
                const calcul = eval(ecran.textContent);

                //ensuite met et affiche la valeur calculée grace à la fonction "Eval" dans "ecran.textContent" qui est ce qui s'affiche à l'écran

                result.textContent = calcul;

                break;

                //Ici,je vais gérer la fonctionnnalité du bouton rouge
                // case '8'

                //enfin dans cette partie, on creer une variable qui va recupérer l'index de la valeur entrée
                //ensuite met cette valeur dans la variable toucbe
                //Et enfin affiche à l'écran cette valeur
            default:
                const indexkeycode = listekeycode.indexOf(valeur);
                const touche = touches[indexkeycode]
                ecran.textContent += touche.innerHTML;
        }
    }
}

/*Dans cette dernière ligne, je creer une méthode qui renvoi un message à l'écran indiquant à l'user qui a entré une mauvaise valeur et doit la modifier */
window.addEventListener('error', (e) => {
    alert("une erreur c'est produite dans votre calcul :" + e.message)
})