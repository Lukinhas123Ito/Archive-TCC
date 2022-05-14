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
        
        var das = $('#form').serialize();

        var sel =  $('#sel').val();

        if(sel == ""){
            alert('então ele é')
        }

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: das,
            url: '../Model/Select.php',
            success: function(das){
            $('#res').append(`
            <tr><td>${das.id}</td>
            <td>${das.nm}</td>
            <td>${das.em}</td>
            <td>${das.num}</td>
            <td>${das.pass}</td></tr>
              `)
            }
         })


    }
    );
    
    }
    )