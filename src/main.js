// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


/* eslint-disable no-new */

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
    App},
  template: '<App/>'
})
const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  './components',
  // Se deve ou não olhar subpastas
  false,
  // Expressão regular para localizar nomes de componentes base
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName)

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Tira o início `./` e a extensão do nome do arquivo
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  )
})