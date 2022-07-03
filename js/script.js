console.log( 'script jsesss')

window.addEventListener('load', function (){

   $('#form-data').submit(function (e) {
       e.preventDefault();
       $.ajax({
           url: 'includes/file.php',
           data: $(this).serialize(),
           method: 'post',
           success(response) {
               console.log(response)
           }
       })
   })


})
