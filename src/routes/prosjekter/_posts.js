// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "Koronavirusstatistikk",
    yr: "2020",
    slug: "koronavirusstatistikk",
    mp4: "korov.mp4",
    png: "korov.png",
    link: "https://korona.elektri.site",
    html: `
			<p>Visualisering av forskjellige tall som har å gjøre med koronavirusepidemien i Norge. Skrevet i <a href="http://svelte.dev">Svelte</a> med visualiseringsbilioteket <a href="http://layercake.graphics">Layercake</a> (som er relativt tett integrert med <a href="https://d3js.org">D3.js</a>.</p>
		`,
  },

  {
    title: "Museumsnettside",
    yr: "2017",
    slug: "museumsnettside",
    mp4: "reiselivsmuseet.mp4",
    png: "reiselivsmuseet.png",
    link: "http://reiselivsmuseum.no",
    html: `
			<p>Nettside til Norsk reisleivsmuseum, skrevet i Vue (2) med Drupal som REST-api.</p>
		`,
  },

  {
    title: "Forskningsprosjektnettside",
    yr: "2016",
    slug: "forskningsprosjektnettside",
    mp4: "rurdev.mp4",
    png: "rurdev.png",
    link: "http://ruraldevelopment.user.jacobs-university.de",
    html: `
			<p>Ren HTML/CSS-nettside med minimalt Javascript.</p>
		`,
  },

  {
    title: "Denne siden",
    yr: "2020",
    slug: "denne-siden",
    link: "http://elektri.site",
    html: `
			<p>Denne siden er er skrevet i Sveltes app-rammeverk <a href="http://sapper.svelte.dev">Sapper</a>, for å vise fram de øvrige prosjektene.</p>
		`,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
