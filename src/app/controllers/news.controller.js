class NewsController {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:slug
  show(req, res) {
    res.send(`You are viewing ${req.params.slug}`);
  }
}

export default new NewsController();
