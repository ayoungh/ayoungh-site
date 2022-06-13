export default (_req, res) => {
  console.log('_req: ', _req);
  res.statusCode = 200;
  res.json({
    Instagram: 'https://www.instagram.com/ayoungh/',
    Twitter: 'https://twitter.com/ayoungh',
    Codepen: 'https://codepen.io/ayoungh',
    Dribble: 'https://dribbble.com/ayoungh',
    Github: 'https://github.com/ayoungh',
    LinkedIn: 'https://www.linkedin.com/in/ayoungh/',
    Medium: 'https://medium.com/@ayoungh',
    Pinterest: 'https://www.pinterest.co.uk/ayoungh',
    Spotify: 'https://open.spotify.com/user/ayoungh',
    Youtube: 'https://www.youtube.com/channel/UC3HauKwKSTTXzw-XLH9rMEQ',
  });
};
