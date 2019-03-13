var tbody = document.getElementById('tbody');

//Je stock mes objets dans un objet utilisateurs
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var utilisateurs = JSON.parse(this.responseText);

          for (var i = 0; i < utilisateurs.length; i++) {
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            var tdnom = document.createElement('td');
            var tdprenom = document.createElement('td');
            var tdage = document.createElement('td');
            tr.appendChild(tdnom);
            tr.appendChild(tdprenom);
            tr.appendChild(tdage);
            tdnom.textContent = utilisateurs[i].nom;
            tdprenom.textContent = utilisateurs[i].prenom;
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
