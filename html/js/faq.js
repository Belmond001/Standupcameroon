
$('.faq-title').click(function(){
    $('.faq-title').removeClass("active");
    $(this).addClass("active");
    const idcategory=$(this).attr('id');

    const items = document.querySelectorAll('.wrap-item-faq');
    items.forEach(function(item) {
        if(item.getAttribute('data-idcategory')==idcategory){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    });
})


document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec la classe 'item'
    const items = document.querySelectorAll('.faq-question-box');

    // Ajoute un écouteur d'événement 'click' à chaque élément
    items.forEach(function(item) {
        item.addEventListener('click', function() {
            // Supprime la classe 'active' de tous les éléments
            items.forEach(function(el) {
                el.classList.remove('active');
            });
            // Ajoute la classe 'active' à l'élément cliqué
            this.classList.add('active');
        });
    });
});
