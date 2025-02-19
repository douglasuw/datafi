function domanda() {
	console.log("domanda");
}

$(document).ready(function() {
	$("#signupForm").submit(function(event) {
		event.preventDefault();

		var formData = {
			email: $("#email").val(),
			password: $("#password").val(),
			fullName: $("#fullName").val()
		};

		$.ajax({
			url: "https://fernandodm.com.br/data/auth/signup",
			type: "POST",
			contentType: "application/json",
			data: JSON.stringify(formData),
			success: function(response) {
				alert("Conta criada com sucesso!");
				console.log(response);
			},
			error: function(xhr, status, error) {
				alert("Erro ao criar conta: " + xhr.responseText);
				console.error(error);
			}
		});
	});
});
