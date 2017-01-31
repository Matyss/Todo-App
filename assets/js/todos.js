//check off the specific todos by clicking
$("ul").on("click", "span", function(){
	$(this).parent().toggleClass("completed");
});

//change class of icon check to redo
$("ul").on("click", "span.check", function(){
	$(this).toggleClass("redo");
	$(this).find("i").toggleClass("fa-check fa-repeat");
});

//click on trash icon to delete item
$("ul").on("click", "span.delete", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); 
});

//click enter to add new todo
$("input[type=text]").keypress(function(event) {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span><span class='check'><i class='fa fa-check'></i></span> " + todoText + "</li>")
	}
});

//click pencil icon to show input form and change pencil opacity
$(".fa-pencil").click(function() {
	$(".fa-pencil").toggleClass("selected");
	$("input[type=text]").fadeToggle();
});
