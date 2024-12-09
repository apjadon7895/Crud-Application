
const  { getUsers, addUser, getUserById, editUser, deleteUser } = require( '../controller/user_controller');
const express = require('express')
const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
 module.exports = router