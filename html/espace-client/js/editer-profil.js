document.getElementById("file-upload").addEventListener("change", function (event) {
    const file = event.target.files[0];

    // Vérification du type de fichier
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        const reader = new FileReader();

        // Lecture du fichier et mise à jour de l'image
        reader.onload = function (e) {
            document.getElementById("profile-image").src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert("Veuillez sélectionner un fichier JPG ou PNG uniquement.");
        // Réinitialiser l'input pour permettre un nouvel upload
        event.target.value = "";
    }
});
$('.profil-edit-icon').click(function(){
    $("#file-upload").click();
})