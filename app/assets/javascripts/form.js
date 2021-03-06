function showTaskDetails (id) {
  $(".task_details."+id).show( "slide", {direction: "right"}, 800);
}
function hideTaskDetails() {
  $(".task_details").hide( "slide", {direction: "right"}, 800);
}
function showNewTask() {
  $(".new_task_container").show( "slide", {direction: "right"}, 800 );
  $("#new_link").css("visibility", "hidden");
}
function hideNewTask() {
  $(".new_task_container").hide( "slide", {direction: "right"}, 800 );
  $("#new_task")[0].reset();  
  $("#new_link").css("visibility", "visible"); 
}

$(function() {

  // Date Picker
	$(".datepicker").datepicker({
		altField: ".datepicker_db_format",
		altFormat: "yy-mm-d"
	});
  
  // Slide Task Details
  $(".container").on("click", ".task_title", function() {
      var item_id = $(this).attr("id");

      if ($(".task_details."+item_id).is(":visible")) {
        hideTaskDetails();
      }
      else {
        hideTaskDetails();
        hideNewTask();
        showTaskDetails(item_id);
      }
      return false;
  });

  $(".task_details .cancel_show_link").click(function() {
    hideTaskDetails();
    return false;
  });

  // New Task Form
  $(".container").on("click", "#new_link", function() {
    hideTaskDetails();
    showNewTask();
    return false;
  });
  
  $(".cancel_form_link").click(function() {
    hideNewTask();
    $(".edit_task").hide();
    return false;
  });

  // Close Task on Container Click
  $(".container").click(function() {
    hideTaskDetails();
    hideNewTask();
    return false;
  });

  // Prevent Task Close when Clicking on Details
  $(".container").on("click", ".task_details", function(e){
      e.stopPropagation();
  });
  $(".new_task_container").click(function(e){
      e.stopPropagation();
  });  

  // Open Form on Edit
  $(".edit_link").click(function () {
    var item_id = $(this).attr("id");
    $("#edit_task_"+item_id).show();
  });

});
