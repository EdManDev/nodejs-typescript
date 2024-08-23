// ======================================================================================
// @desc      Response Article
// @route     GET /api/article
// @access    Public
// ======================================================================================
const getArticle = (req: any, res: any) => {
	res.json({ message: "Hello World! from get Article" });
};

// ======================================================================================
// @desc      Post Article
// @route     POST /api/article
// @access    Public
// ======================================================================================
const postArticle = (req: any, res: any) => {
	res.json({ message: "Hello World! Post  Article" });
};

// ======================================================================================
// @desc      update Article
// @route     PUT /api/article
// @access    Public
// ======================================================================================
const putArticle = (req: any, res: any) => {
	const ArticleId = req.params.id;
	res.json({ message: "Hello World!  Update Article", ArticleId });
};

// ======================================================================================
// @desc      Remove Article
// @route     DELETE /api/article
// @access    Public
// ======================================================================================
const deleteArticle = (req: any, res: any) => {
	const ArticleId = req.params.id;
	res.json({ message: "Hello World!  Delete Article", ArticleId});
};

export { getArticle, postArticle, putArticle, deleteArticle };