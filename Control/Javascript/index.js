$(document).ready(function(){

    $('#cad').click(function(event){

        //Colect data with form
        event.preventDefault();

        //The form in general
        var da = $('#form').serialize();

        console.log(da);

        var name =  $('#nome').val();
        var email =  $('#email').val();
        var cell =  $('#cell').val();
        var pass =  $('#pass').val();


    
        if(name == "" || email == "" || cell == "" || pass== ""){
            alert('Um dos Campos está vazil')
        }
        else{
            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                assync: true,
                data: da,
                url: '../Model/index.php',
                success: function(da){
                $('#res').append(`
                 <tr> 
                  <td>${da.name}</td>
                  <td>${da.email}</td>
                  <td>${da.cell}</td>
                  <td>${da.pass}</td>
                 </tr>`)
                }
             })
        }


    })


})