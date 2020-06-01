const express = require('express');
const router = express.Router();
// router.use(express.static(__dirname + '/public'));
router.use('/user', require('./user'));
router.use('/membership', require('./membership'));
router.use('/members',require('./members'))
router.use('/notMembers',require('./notMember'))
router.use('/financeOfficer',require('./financeOfficer'))
router.use('/printingOfficer',require('./printingOfficer'))
router.use('/deliveryOfficer',require('./deliveryOfficer'))
router.use('/get',require('./profile'))
router.use('/admin',require('./admin'))
router.use('/authenticate',require('./authenticate'))
router.use('/visa',require('./visa'))
router.use('/signUp',require('./authenticate'))
router.use('/message',require('./Messages'))



module.exports = router;