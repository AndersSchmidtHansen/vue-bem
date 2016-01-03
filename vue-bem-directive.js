exports.install = function(Vue) {
  Vue.directive('bem', {
    bind: function () {
      var _namespace = ' ' + ((this.modifiers.block) ? '' : 'c-')
      var _block = _namespace + this.vm.$options.name
      var _element = ''
      var _modifier = ''
      var _elementPrefix = '__'
      var _modifierPrefix = '--'

      if (this.arg) {
        var _bem = this.arg.split(',')
        _element = (_bem[0]) ? _elementPrefix + _bem[0] : ''
        _modifier = (_bem[1]) ? _modifierPrefix + _bem[1] : ''

        if (this.modifiers.block) {
          _block = _namespace + _bem[0]
          _element = _elementPrefix + _bem[1]
          _modifier = _modifierPrefix + _bem[2]

          if (_bem[1]) {
            this.el.className += _block + _element
          } else {
            this.el.className += _block
          }

          if (_bem[2]) {
            this.el.className += _block + _element + _modifier
          }

        } else {
          if (_element) {
            this.el.className += _block + _element
          } else {
            this.el.className += _block
          }

          if (_modifier) {
            this.el.className += _block + _element + _modifier
          }
        }
      } else {
        this.el.className += _block
      }
    }
  })
}