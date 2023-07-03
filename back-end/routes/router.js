const express = require('express');
const router = express.Router();
const ProtetorController = require('../controllers/protetor');
const multer = require('multer');
const PetController = require('../controllers/pet');
const path = require('path'); // Importe o módulo 'path'

// Configuração do multer para o upload de imagem
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Diretório onde as imagens serão armazenadas
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    },
});

const upload = multer({ storage: storage });

// PROTETOR
router.post('/protetor', ProtetorController.criarProtetor);
router.get('/protetor/list', ProtetorController.obterProtetores);
router.get('/protetor/:id', ProtetorController.obterProtetorPorId);
router.put('/protetor/:id', ProtetorController.atualizarProtetor);
router.delete('/protetor/:id', ProtetorController.excluirProtetor);
router.post('/protetor/login', ProtetorController.autenticarLogin);

// PET
//router.post('/pet', PetController.criarPet);
router.post('/pet', upload.single('imagem'), PetController.criarPet); // Middleware de upload
router.get('/pet/list', PetController.obterPets);
router.get('/pet/:id', PetController.obterPetPorId);
router.put('/pet/:id', PetController.atualizarPet);
router.delete('/pet/:id', PetController.excluirPet);
router.post('/pet/:petId/protetor', PetController.adicionarPetAoProtetor); // Adicionar pet a um protetor
router.put('/pet/:petId/protetor', PetController.transferirPetParaProtetor); // Transferir pet para outro protetor
router.delete('/pet/:petId/protetor', PetController.removerPetDoProtetor); // Remover pet do protetor


// Rota estática para servir os arquivos de imagem
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = router;
