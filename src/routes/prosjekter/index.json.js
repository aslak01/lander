import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      slug: post.slug,
      png: post.png,
      mp4: post.mp4,
      html: post.html,
      yr: post.yr,
      url: post.link,
      github: post.github,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
