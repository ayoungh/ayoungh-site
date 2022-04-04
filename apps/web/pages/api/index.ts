export default (_req, res) => {
    console.log('_req: ', _req)
  res.statusCode = 200
  res.json({ oura: 'oura/daily', strava: 'strava/activity', spotify: ['spotify/now-playing', 'spotify/top-tracks'], });
}
