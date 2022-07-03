console.log( 'script jsesss')

window.addEventListener('load', function (){ // после загрузки страницы

   $('#form-data').submit(function (e) { // при помощи jQuery в момент отправки формы
       e.preventDefault(); // останавливаем перезагрузку страницы
       let dataForm = $(this).serialize(); // получаем данные с формы

       // отправляем данные с формы по ajax на url
       $.ajax({
           url: 'includes/file.php',
           data: dataForm,
           method: 'post',
           success(response) {
               // в случае успеха передачи данных попадаем сюда
               console.log(response)
           }
       })
   })


})
