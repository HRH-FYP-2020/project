const express = require('express');
const router = express.Router();

router.use('/', require('./users'));
// router.use('/membershipOfficer/membership', require('./membership/MemberShip'));
module.exports = router;