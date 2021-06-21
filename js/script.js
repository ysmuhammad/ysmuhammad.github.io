$(".page-scroll").on("click", function (event) {
  if (event != "undefined") {
    event.preventDefault();
  }
  var val = $(this).attr("href");
  var valF = $(val);
  var targetOffset = $(valF).offset().top - 120;
  var intTarget = parseInt(targetOffset);
  //   $("html, body").animate({
  //     scrollTop: 2000,
  //   });
  $("html, body").scrollTop(intTarget);
  event.preventDefault();
  console.log(intTarget);
});
