$(document).ready(function () {
  var size = 1;

  $(document).on("mouseenter", "td", function () {
    $(this).css("background","black").css({
      opacity: function (index, value) {
        return parseFloat(value) + 0.1;
      }
    }); });

  $("#myNumber").on("change", function () {
    size = +$(this).val();
  });

  $("#myButt").on("click", function () {
    $(".rows,.des").remove();
    $("#myTable").createTr();
  });

  jQuery.fn.extend({
    createTr: function () {

      for (i = 1; i <= size; i++) {
        $("#myTable").append("<tr class=\"rows\"></tr>");
      }
      for (y = 1; y <= size; y++) {
        $(".rows").append("<td class=\"des\"></td>");
      }

    }
  });
});