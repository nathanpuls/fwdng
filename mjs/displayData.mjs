export function displayData() {
    
         /* var div_display = document.getElementById('display');
         This is your input, but you shoud use another Id for your fields. */
        
        var textValue = document.getElementById('input').value;
        

        var path = textValue.split('/');
        var user = path[3];
        var repo = path[4];
      var rest = path.slice(7);
      //var rest2 = rest.replace(',','/');
        
      var http = 'https://'
         var domain = '.github.io/'
        var input2 = http + user + domain + repo + '/' + rest;
        var input3 = input2.replaceAll(',','/');
        window.location = input3;
