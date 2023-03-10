const { Router }  = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, renewToke } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');



const router = Router();



//Crear un nuevo usuario
router.post('/new',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').isLength({min:6}),
    check('name','El nombre es obligatorio').not().isEmpty(),
    validarCampos
    

],crearUsuario);



//login
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').isLength({min:6}),
    validarCampos
    

] , loginUsuario);

//Validar Token y revalidar token
router.get('/renew',validarJWT,renewToke);




module.exports = router;