const integrantes = document.querySelector('.integrantes');

const pessoas = [
	{
		"name": "Filipe Jesus Portilho",
		"email": "filipeportilho77@gmail.com",
		"image_path": "images/profiles/filipe.png",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/4882730468480550"
	},
	{
		"name": "Nicole Alves Rodrigues",
		"email": "nicole.rodrigues1@estudante.ifgoiano.edu.br",
		"image_path": "images/profiles/nicole.png",
		"Formação": "Bacharelando em Ciência da Computação - IF Goiano - Campus Iporá",
		"lattes_url": "http://lattes.cnpq.br/4507579202367854"
	},
	{
		"name": "Newarney Torrezao da Costa",
		"email": "newarney.costa@ifgoiano.edu.br",
		"instagram": "https://www.instagram.com/mateusbmm/",
		"image_path": "images/profiles/newarney.png",
		"Formação": "Doutorando em Ciência da Computação - UFU",
		"lattes_url": "http://lattes.cnpq.br/4986407746430136"
	}
];

pessoas.forEach((pessoa) => {

	integrantes.innerHTML += `		
	<div class="card-professor">
		<div class="foto">
			<img class="image-professor" src="${pessoa.image_path}">
		</div>
		<div class="professor-content">
			<a href="${pessoa.lattes_url}" class="name-professor" target="_blank">${pessoa.name}</a>
		</div>
		
	</div>`
	
});

