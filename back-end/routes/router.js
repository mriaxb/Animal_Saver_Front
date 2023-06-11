const express = require('express');
const router = express.Router();
const ProtetorController = require('../controllers/protetorController');
const multer = require('multer');
const PetController = require('../controllers/petController');
const upload = multer({ dest: 'uploads/' });

// PROTETOR
router.post('/protetor', ProtetorController.criarProtetor);
router.get('/protetor/list', ProtetorController.obterProtetores);
router.get('/protetor/:id', ProtetorController.obterProtetorPorId);
router.put('/protetor/:id', ProtetorController.atualizarProtetor);
router.delete('/protetor/:id', ProtetorController.excluirProtetor);
router.post('/protetor/login', ProtetorController.autenticarLogin);

// PET
router.post('/pet', PetController.criarPet);
router.post('/pets', upload.single('imagem'), PetController.criarPet);
router.get('/pet/list', PetController.obterPets);
router.get('/pet/:id', PetController.obterPetPorId);
router.put('/pet/:id', PetController.atualizarPet);
router.delete('/pet/:id', PetController.excluirPet);

module.exports = router;
