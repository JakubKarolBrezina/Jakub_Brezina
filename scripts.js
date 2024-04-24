document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data.xml", true);  
    xhr.onload = function () {
        if (xhr.status === 200) {
            var xml = xhr.responseXML;
            var models = xml.getElementsByTagName("model");
            var tableBody = document.getElementById("modelsTable").querySelector("tbody");

            for (var i = 0; i < models.length; i++) {
                var type = models[i].getElementsByTagName("type")[0].textContent;
                var name = models[i].getElementsByTagName("name")[0].textContent;
                var price = models[i].getElementsByTagName("price")[0].textContent;
                var colors = models[i].getElementsByTagName("color");
                var colorText = Array.from(colors).map(function(color) {
                    return color.textContent;
                });

                var row = document.createElement("tr");
                row.innerHTML = `<td>${type}</td>
                                  <td>${name}</td>
                                  <td>${price}</td>
                                  <td>${colorText.join(", ")}</td>`;
                tableBody.appendChild(row);
            }
        } else {
            console.error('Error loading XML file.');
        }
    };
    xhr.onerror = function () {
        console.error('Request failed.');
    };
    xhr.send();
});


