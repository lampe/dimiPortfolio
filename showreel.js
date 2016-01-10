function showreel() {
  var width = $("#showreel-container").css("width").split("p")[0];
  var height = width * 0.5625;
  $("#showreel").css("width", width);
  $("#showreel").css("height", height);
  $('#modal1Video').css("width", width);
  $('#modal1Video').css("height", height);
}
