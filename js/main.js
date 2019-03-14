var tbody = document.getElementById('tbody');

//Je stock mes objets dans un objet utilisateurs
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var utilisateurs = JSON.parse(this.responseText);

          for (var i = 0; i < utilisateurs.length; i++) {
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            //Je crée le nombre de balise td qui correspond au nombres d'attributs
            var tdid = document.createElement('td');
            var tdnom = document.createElement('td');
            var tdage = document.createElement('td');
            //Je fait hérité mes balises td de <tr>
            tr.appendChild(tdid);
            tr.appendChild(tdnom);
            tr.appendChild(tdage);
            //J'associe chaque attributs à son td approprié
            tdid.textContent = utilisateurs[i].id
            tdnom.textContent = utilisateurs[i].nom;
            tdage.textContent = utilisateurs[i].age;
            console.log(utilisateurs);
          }
       }
    };
    xhttp.open("GET", "utilisateurs.json", true);
    xhttp.send();

// xhttp.onload = function() {
//   var utilisateurs = xhttp.response;
//
//   console.log(utilisateurs);
// }
