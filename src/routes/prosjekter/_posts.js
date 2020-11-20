// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "Korona&shy;virus&shy;stati&shy;stikk",
    yr: "2020",
    slug: "koronavirusstatistikk",
    mp4: "korov.mp4",
    png: "korov.png",
    link: "https://korona.elektri.site",
    github: "https://github.com/aslak01/svelte-layercake-koronas",
    html: `
			<p>Visualisering av forskjellige tall som har å gjøre med koronavirusepidemien i Norge. Skrevet i <a href="http://svelte.dev">Svelte</a> med visualiseringsbilioteket <a href="http://layercake.graphics">Layercake</a> (relativt tett integrert med <a href="https://d3js.org">D3.js</a>, men med muligheten for serverside-rendering av grafene, noe jeg ikke gjør bruk av her siden dataen er fersk).</p>
		`,
  },

  {
    title: "Museums&shy;nett&shy;side",
    yr: "2017",
    slug: "museumsnettside",
    mp4: "reiselivsmuseet.mp4",
    png: "reiselivsmuseet.png",
    link: "http://reiselivsmuseum.no",
    html: `
			<p>Trespråklig nettside til Norsk reisleivsmuseum, skrevet i Vue (2) med Drupal som REST-api.</p>
		`,
  },

  {
    title: "Forsknings&shy;prosjekt&shy;nettside",
    yr: "2016",
    slug: "forskningsprosjektnettside",
    mp4: "rurdev.mp4",
    png: "rurdev.png",
    link: "http://ruraldevelopment.user.jacobs-university.de",
    html: `
			<p>Minimalistisk HTML/CSS-nettside med et minimum Javascript.</p>
		`,
  },

  {
    title: "Denne siden",
    yr: "2020",
    slug: "denne-siden",
    link: "http://elektri.site",
    github: "https://github.com/aslak01/lander",
    html: `
			<p>Denne siden er er skrevet i Sveltes app-rammeverk <a href="http://sapper.svelte.dev">Sapper</a>, for å vise fram de øvrige prosjektene.</p>
		`,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
