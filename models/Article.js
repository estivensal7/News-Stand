const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},

	link: {
		type: String,
		required: true
	},

	description: {
		type: String,
	},

	comment: {
		type: Schema.Types.ObjectId,
		ref: "Comment"
	}
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;