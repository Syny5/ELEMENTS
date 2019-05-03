$(function() {
  // L'essence de cet exercice ecommerce est d'être en mesure de créer ses propres fonctions
            var cart = { // On déclare une variable carte qui contiendra notre calcul
                products: [], // On crée un tableau (array)
                total: 0, // On crée un total d'une valeur nulle

                addProduct: function(product) { // On crée la fonction addProduct avec la valeur product
                    this.products.push(product); // On lui dit que son utilité sera push les éléments produits du tableau
                    this.calculateTotal(); // On lui demande aussi de calculer le total, pour cela, nous allons créer la fonction plus bas du même nom
                },
                calculateTotal: function() {
                    var total = 0; // On crée la variable total d'une valeur nulle
                    for (var i = 0; i < this.products.length; i++) { // On donne à une variable i une valeur nulle
                      // "Pour i qui gagne un élément produit dans sa liste en s'incrémentant..."
                        total += this.products[i].price; // "... Le prix du produit prend la valeur indiquée. "
                    }
                    this.total = Math.round(total * 100) / 100; // On arrondit le total à deux chiffres après la virgule avec Math.round
                }
            };

            function displayCart() { // On déclare une fonction displayCart
                if (cart.products.length == 0) { // Si le panier est vide :
                    document.getElementById('cart').innerHTML = '<h4>Aucun produit</h4>'; // On indique qu'il n'y a aucun produit
                    document.getElementById('order').style.display = 'none'; // Et le bouton commander ne s'affiche pas.
                } else {
                    var cartCode = ""; // On déclare une variable texte (string) d'une valeur nulle
                    for (var i = 0; i < cart.products.length; i++) { // Comme plus haut, on redonne à une variable i une valeur nulle
                        var product = cart.products[i]; // On déclare la valeur product qui prend la valeur de l'élément produit dans le panier
                        var div = "<div><strong>" + product.title + "</strong> : " + product.price + "</div>";
                        // La valeur div que l'on déclare prend en compte le titre du produit et son prix.
                        cartCode += div; // La valeur de la variable cartCode est supérieure ou égale à la variable div
                    }
                      // On affiche le texte du total.
                    cartCode += "<h2>TOTAL : " + cart.total.toString().replace('.', ',') + " &euro;</h2>";

                    document.getElementById('cart').innerHTML = cartCode;
                    document.getElementById('order').style.display = 'block';
                }
            }
              // On crée une fonction ajout de produit avec la valeur id
            function addProduct(id) {
                var title = document.querySelector('#produit-' + id + ' h3').innerHTML;
                // On donne à la variable title la valeur du produit, son id et son titre.
                var price = Number(document.getElementById('prix-' + id).value);
                // On donne à la variable price la valeur de l'ID du produit ainsi que son titre
                var product = { // La variable product prend la valeur des deux variables créées précédemment.
                    title: title,
                    price: price
                }
                cart.addProduct(product);
                  // "Quand on ajoute un produit, on l'affiche dans le panier"
                  // Pour cela, nous allons devoir indiquer qu'il doit s'afficher dès le moment où l'on clique sur le bouton "ajouter au panier"
                displayCart();
            }

            var buttons = document.querySelectorAll('a.add'); // La variable button prend la valeur des liens add
            for (var i = 0; i < buttons.length; i++) { // Comme précédemment, on crée une variable i de valeur nulle
              // "Chaque élément ajouté au panier via le bouton "ajouter au panier" s'ajoute au panier. "
                var button = buttons[i];
                  // La variable button prend un élément du tableau buttons
                button.onclick = function() {
                    var id = Number(this.getAttribute('data-id'));
                    addProduct(id);
        // On indique qu'il ne doit prendre en compte que le produit concerné. Évitons que le clic sur "ajouter au panier" ajoute tous les éléments qui ont la même fonctionnalité
                };
            }
// Ci-dessous : JS permettant l'incrémentation et la décrémentation pour sélectionner le nombre de produit à ajouter au panier.
//             displayCart();
// var count = 0;
// var total = $('.priceValue').text();
// $('.plusIcons').click(function() {
//     count++;
//     $('.inputPlusLess').attr('value', count);
//     $('.totalValue').text(count * total);
// });

// $('.minusIcons').click(function() {
//     count--;
//     $('.inputPlusLess').attr('value', count);
//     $('.totalValue').text(count * total);
// });

// $('.basketButton').click(function() {
//     if (count == 1) {
//         alert('Votre article a bien été ajouté !')
//     } else if (count > 1) {
//         alert('Vos articles ont bien été ajoutés !')
//     }
//     $('.inputPlusLess');
// });
          });
