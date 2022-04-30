//Javascript
$(document).ready(function(){


    $('.cad').click(function(event){

        // Colect data written in we form
    
        event.preventDefault()
        //take all data in form
        
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
                 
                  <p>${da.name}</p>
                  <p>${da.email}</p>
                  <p>${da.cell}</p>
                  <p>${da.pass}</p>
                 </tr>`)
                }
             })
        }
        
        
    
    
    })
    
    
    }
    )