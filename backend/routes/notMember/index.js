const express = require('express');
const router = express.Router();
// router.use('/membershipOfficer/membership', require('./membership/MemberShip'));
router.use('', require('./notMember'));
module.exports = router;