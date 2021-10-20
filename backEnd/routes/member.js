const router = require('express').Router();

const Member = require('../models/members.module');

router.route('/').get((req, res) => {
	Member.find()
		.then((members) => res.json(members))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/:id').get((req, res) => {
	Member.findById(req.params.id)
		.then((member) => res.json(member))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/delete/:id').delete((req, res) => {
	Member.findByIdAndDelete(req.params.id)
		.then(() => res.json('member dleated!'))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});
router.route('/update/:id').post((req, res) => {
	const { nameEngish } = req.body;
	Member.findById(req.params.id)
		.then((member) => {
			// eslint-disable-next-line no-param-reassign
			member.nameEngish = nameEngish;

			member
				.save()
				.then(() => res.json('member update!'))
				.catch((err) => res.status(400).json(`Error: ${err}`));
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
	console.log(req.body);
	const { nameEngish } = req.body;

	const newMember = new Member({ nameEngish });
	newMember
		.save()
		.then(() => res.json('member added!'))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
