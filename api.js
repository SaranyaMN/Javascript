
 
 var oXHR = new XMLHttpRequest();

  // Initiate request.
  oXHR.onreadystatechange = reportStatus;
  oXHR.open("GET", "https://jsonplaceholder.typicode.com/todos", true);  // get json file.
  oXHR.send();

  function reportStatus() {
      if (oXHR.readyState == 4) {		// Check if request is complete.

          // Create an HTML table using response from server.
          createTableFromJSON(this.responseText);
      }
  }

  // Create an HTML table using the JSON data.
  function createTableFromJSON(jsonData) {
      var arr = [];
      arr = JSON.parse(jsonData); 	// Convert JSON to array.

      var col = [];
      for (var i = 0; i < arr.length; i++) {
          for (var key in arr[i]) {
              if (col.indexOf(key) === -1) {
                  col.push(key);
              }
          }
      }
      // Create a dynamic table.
      let table = document.createElement("table");// Create table header.

      let tr = table.insertRow(-1);                   // Table row.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // Table header.
          th.innerHTML = col[i];
          tr.appendChild(th);
      } 

      // Add JSON to the table rows.
      for (var i = 0; i < arr.length; i++) {
            tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++) {
            
                var tabCell = tr.insertCell(-1);
                var checkbox = document.createElement('input');
            if(j==3){
                    
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.setAttribute("id", "chk");
                    tabCell.innerHTML = arr[i][col[j]];
                    if(tabCell.innerHTML=="true"){
                          checkbox.setAttribute("checked", "checked");
                          checkbox.setAttribute("disabled", "true");

                        }
                    tabCell.innerHTML=" "; 
                    tabCell.appendChild(checkbox); 
                    }
            else{
                tabCell.innerHTML = arr[i][col[j]];
            }
                $('input[type="checkbox"]').click(function() {
                    let P = new Promise((resolve, reject) => {
                        if ($("input:checkbox:checked").length % 5 == 0) {
                            resolve();
                        } else {
                            reject();
                        }
                    });

                    P.then(() => {
                        alert("Congrats. 5 Tasks have been Successfully Completed");
                    }).catch(() => {
                    })
                });
                
            
                
      // Finally, add the dynamic table to a container.
      var divContainer = document.getElementById("showTable");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
    }
 }
}
