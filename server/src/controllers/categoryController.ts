// ======================================================================================
// @desc      Response Category
// @route     GET /api/category
// @access    Public
// ======================================================================================
const getCategory = (req: any, res: any) => {
	res.json({ message: "Hello World! from get Category" });
};

// ======================================================================================
// @desc      Post Category
// @route     POST /api/category
// @access    Public
// ======================================================================================
const postCategory = (req: any, res: any) => {
	res.json({ message: "Hello World! Post  Category" });
};

// ======================================================================================
// @desc      update Category
// @route     PUT /api/category
// @access    Public
// ======================================================================================
const putCategory = (req: any, res: any) => {
	const categoryId = req.params.id;
	res.json({ message: "Hello World!  Update Category", categoryId });
};

// ======================================================================================
// @desc      Remove Category
// @route     DELETE /api/category
// @access    Public
// ======================================================================================
const deleteCategory = (req: any, res: any) => {
	const categoryId = req.params.id;
	res.json({ message: "Hello World!  Delete Category", categoryId});
};

export { getCategory, postCategory, putCategory, deleteCategory };