$(() => {
	registerPartial('burger-block', '#burger-block-partial')
	displayBurgers();
})

const registerPartial = (name, id) => {
	let src = $(id).text();
	Handlebars.registerPartial(name, src);
}

const renderTemplate = data => {
  var source = $("#page-template").text();
  var template = Handlebars.compile(source);
  var html = template(data);
  $("#app").html(html);
}

const setEventHandler = () => {
	$(document).on('click', '.message .close', function() {
	  $(this).closest('.message').hide();
	});

	$(document).on('click', '.btnDevour', function() {
		let burgerId = $(this).data("id");
		$.ajax("/api/burgers/" + burgerId, {
			type: 'PUT',
		}).then(data => {
			console.log("You ate burger #" + burgerId);
			displayBurgers();
		})
	});

	$(document).on('click', '#btnAdd', function(e) {
		e.preventDefault();
		$('#message').hide();
		let newBurger = $('#txtBurger').val().trim();

		if(newBurger.length < 3 || newBurger == '')
			$('#message').show();
		else {
			$.ajax('/api/burgers', {
				type: 'POST',
				data: {
					burgerName: newBurger
				}
			}).then(data => displayBurgers());
		}

		console.log(newBurger);
		$('#txtBurger').val('');
	})
}

const displayBurgers = () => {
	$.get('/api/burgers')
		.then(burgers => {
			renderTemplate({burgers: burgers});
			setEventHandler();
		})
}

