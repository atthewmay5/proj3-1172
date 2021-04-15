
require(['require'], function (require) {
var client = require(['require', 'express']); // <-ERROR
app = client();
});

async function loadpython(){
	
	const response = await fetch("python.json");
	const questions = await response.json();
	
	return users;
	
	console.log(response);
	
}

document.addEventListener('DOMContentLoaded', async () => {
	let data = [];
	widget_html = render_view("#startpage");
	
	document.querySelector("#app_widget").innerHTML = widget_html;
	
	document.getElementById("python").onclick = (e) => {
		handle_python(e);
	}
	
	document.getElementById("java").onclick = (e) => {
		handle_java(e);
	}
	
	try{
		
		const data = await loadpython();
	}	catch(e){
		console.log("error");
	}
	
});

function handle_python(e){
	console.log("button pressed");
	widget_html = render_view("#pyview");
	document.querySelector("#app_widget").innerHTML = widget_html;
}

function handle_java(e){
	console.log("other button pressed");
	widget_html = render_view("#jaview");
	document.querySelector("#app_widget").innerHTML = widget_html;
}

function render_view(view) {
		
	template_source = document.querySelector(view).innerHTML
	
	var template = Handlebars.compile(template_source);
	
	var html_widget_element = template()
	
	return html_widget_element
	
	
}

/* require(['require'], function (require) {
var client = require(['require', 'express']); // <-ERROR
app = client();
}); */