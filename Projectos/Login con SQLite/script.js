document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
});

const btnEl = document.getElementById("registerButton");


btnEl.addEventListener("click", ()=>{
    var id = document.getElementById('id').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // Connect to the SQLite database1
    let db = new sqlite3.Database('./base.db');
  
    // Execute an INSERT query to register the user
    db.run(
      'INSERT INTO Users (ID, Username, Password) VALUES (?, ?, ?)',
      id, username, password),
      function(err) {
        if (err) {
          return console.log(err.message);
        } 
          console.log("Se resgitró correctamente.");
      }
        
    // Close the database connection
    db.close();
    });

    
  
  // Enable or disable the Register button based on input fields' validity
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      var id = document.getElementById('id').value;
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var registerButton = document.getElementById('registerButton');
  
      if (id && username && password) {
        registerButton.removeAttribute('disabled');
      } else {
        registerButton.setAttribute('disabled', 'disabled');
      }
    });
  });
  
  function showMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
  }