<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <p>
      Полдела сделано :)
    <h2>Дано:</h2>
    <p>
      Back, отдающий турнирные сетки в json:  <a href="/api/bracket/1">/api/bracket/:id</a>, id∈{1, 2}
    <h2>Что надо:</h2>
    <img src="/static/i/demo.png" class="img-fluid">
    <p>
      Нужно сделать небольшой прототип турнирной сетки (single elimination).
    <ul>
      <li>
        «Прототип» означает, что вы не потратите на это слишком много времени.<br>
        Сами решайте, что надо сделать обязательно, а что можно и выкинуть.<br>
        Дизайн, например, почти не важен. Кроссбраузерность - тоже.<br>
        Комментарии в стиле "если бы я потратил на это больше времени, то сделал ещё то/сделал это по-другому и т. д." приветствуются.
      </li>
      <li>На картинке - пример. При наведении на команду, все остальные вхождения этой команды должны подсвечиваться.</li>
      <li>Если вы считаете, что формат хранения сетки - не очень, то скорее всего вы правы. Можно переделать на свой, данные лежат в back/routes/api.js.</li>
    </ul>

    <p>Решение должно использовать:</p>
    <ul>
      <li>Vue.js</li>
      <li>Bootstrap либо свою вёрстку</li>
      <li>По желанию - <a href="http://vuejs-templates.github.io/webpack/pre-processors.html">SASS, LESS, PostCSS?</a></li>
    </ul>

    <h2>Ещё инфа</h2>
    <p>
      Dev-server прокидывает запросы на /api/* на backend, например <a href="/api/test" target=_blank>/api/test</a>
    <p>
      По вопросам пишите в лс на моём круге или на gmail@uzere.name


    <h2>Ссылки по Vue.js от шаблона, пусть тут лежат</h2>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      msg: 'Оно работает!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
table tr td {
  border: solid 1px grey
}
.todo {
  width: 970px;
  margin: 0 auto;
}

.todo img {
  margin: 0 auto;
  display: block;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.todo .img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
