//Javascript
$(document).ready(function(){


    //Create Part
    $('.cad').click(function(event){
        // Colect data written in we form
    
        event.preventDefault()
        //take all data in form
        
        var da = $('#form').serialize();

        

        var name =  $('#nome').val();
        var email =  $('#email').val();
        var cell =  $('#cell').val();
        var pass =  $('#pass').val();


    
        if(name == "" || email == "" || cell == "" || pass== ""){
            alert('Um dos Campos está vazil')
        }
        else{
            console.log(da);
            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                assync: true,
                data: da,
                url: '../Model/Create.php',
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
    
    //Seach
    $('.pes').click(function(event){
        // Colect data written in we form

        event.preventDefault()
        //take all data in form
        
    }
    )
    
    //Editar
    $('ed').click(function(event){

        event.preventDefault()
        //take all data in form
        
        var datass = $('#lb').serialize();
        

    })

    }
    )