$(document).ready(function () {
   function submitForm() {
      //   let data = JSON.stringify($(".form").serializeArray()).slice(1, -1);
      let data = $('.form').serializeArray();
      postDataOnPage(data);
      return data;
   }

   function postDataOnPage(data) {
      alert('Форма успешно отправлена!');
      document.querySelector('.structure').innerHTML = JSON.stringify(data);
   }

   $(".form").on("submit", function (e) {
      e.preventDefault();
      $.ajax({
         type: "GET",
         url: "./process.php",
         data: submitForm(),
         success: function (data) {
            alert(data);
         },
      });
      $(this).find("input[type=text]").val("");
      return false;
   });
});