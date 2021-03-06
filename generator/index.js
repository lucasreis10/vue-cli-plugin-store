const storeGenerator = require('./storeGenerator');
const testsStoreGenerator = require('./testsStoreGenerator');
const componenteGenerator = require('./componentGenerator');
const viewGenerator = require('./viewGenerator');


module.exports = function(api, options) {

  const tarefas = {tarefaStore, tarefaComponente, tarefaView};

  const { tipoTarefa } = options;
  
  tarefas[tipoTarefa](api, options);
}

function tarefaStore(api, { nomeModulo, caminhoEArquivoStore }) {
  storeGenerator(api, nomeModulo, caminhoEArquivoStore);
  testsStoreGenerator(api, nomeModulo);
}

function tarefaComponente(api, { nomeNovoDiretorio, diretorioComponente, nomeComponente }) {
  componenteGenerator(api, nomeNovoDiretorio, diretorioComponente, nomeComponente);
}

function tarefaView(api, { nomeView }) {
  viewGenerator(api, nomeView);
}
