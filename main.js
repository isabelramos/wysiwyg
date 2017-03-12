var inputField = document.getElementById("input-text");
var container = document.getElementById("container");

var famousPeople = [
	{
	name: "Dave Grohl",
	title: "Badass Extraordinaire",
	bio: "Dave Grohl is an American rock musician, multi-instrumentalist, singer, songwriter, director and producer. He is best known as the former drummer for the grunge band Nirvana and the founder and frontman of the rock band Foo Fighters, of which he is the lead singer, one of three guitarists, and primary songwriter.",
	image: "http://img.wennermedia.com/article-leads-horizontal/rs-174755-R1223_FEA_Grohl_A.jpg",
	lifespan: {
		birth: 1969
		}
	},
	{
	name: "Billy Joel",
	title: "The Piano Man",
	bio: `Billy Joel is an American singer-songwriter and pianist. Since releasing his first hit song, "Piano Man", in 1973, Joel has become the sixth best-selling recording artist and the third best-selling solo artist in the United States. His compilation album Greatest Hits Vol. 1 & 2 is one of the best-selling albums in the US.`,
	image: "https://www.morrisonhotelgallery.com/images/medium/LR1487M-Fr19-19A.jpg",
	lifespan: {
		birth: 1949
		}
	},
	{
	name: "Glenn Frey",
	title: "The Soaring Eagle",
	bio: `Glenn Frey was an American singer, songwriter and actor, best known as a founding member of the rock band Eagles. Frey was the lead singer and frontman for the Eagles, roles he came to share with fellow member Don Henley, with whom he wrote most of the Eagles' material. Frey played guitar, piano, and keyboards. He sang lead vocals on songs such as "Take It Easy", "Peaceful Easy Feeling", "Tequila Sunrise", "Already Gone", "Lyin' Eyes", "New Kid in Town", and "Heartache Tonight".`,
	image: "http://i.dailymail.co.uk/i/pix/2016/01/18/22/3050B32300000578-3405609-image-a-121_1453156675565.jpg",
	lifespan: {
	 	birth: 1948,
	 	death: 2016
	  	}
	}
];

var counter = 0;

for (; counter < 3; counter++) {
	
	// Give each person element a unique identifier
	container.innerHTML += `<div class="person-container" id="person-${counter}"></div>`;

	// Now containerElement will have elements in it
	var containerElement = document.getElementsByClassName("person-container");

	for (var i=0; i<containerElement.length; i++) {
		var peopleString = "";

		peopleString += `<div class="col-sm-6 col-md-4">`;
		peopleString += `<div class="thumbnail">`;
		peopleString += `<img src="${famousPeople[counter].image}">`;
		peopleString += `<div class="caption">`;
		peopleString += `<h2>${famousPeople[counter].name}</h2>`;
		peopleString += `<h4>${famousPeople[counter].title}</h4>`;
		peopleString += `<p>${famousPeople[counter].bio}</p>`;
		peopleString += `</div></div>`;
	}

	container.innerHTML += peopleString;
}


















