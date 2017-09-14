var meusItens = JSON.parse(localStorage.getItem('Frutas'))
var app = new Vue({
  el: '#app',
  data: {
    title: 'Hello Vue!',
    message: 'Adicione uma fruta',
    items: meusItens || []
  },

  methods: {
    addItem: function(){
      var field = document.getElementById('input')
      
      if(field.value !== ''){
        this.items.push({
          fruta: field.value
        })
      }
      
      field.value = ''
      this.saveStorage(this.items)      
    },

    deleteItem: function(index){
      this.items.splice(index, 1)
      this.saveStorage(this.items)
    },

    saveStorage: function(obj){
     obj = JSON.stringify(obj)
     localStorage.setItem('Fruta', obj)
    },
    
    loadStorage: function(){
      if(localStorage.key(0) == 'Fruta'){
        var frutasObj = JSON.parse(localStorage.getItem('Fruta'))
        this.items = frutasObj
      }
    },

    loadTemplate: function(){
      var list = document.getElementsByClassName('list')[0]
      var el = document.getElementById('app')
      list.className += ' animated slideInUp'
      el.className += ' animated fadeIn'
      this.loadStorage()
    }
  }
})

app.loadTemplate()