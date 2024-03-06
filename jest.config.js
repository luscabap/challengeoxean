module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/' // Aqui 'axios' é o módulo que você quer que o Jest transforme
  ]
};
