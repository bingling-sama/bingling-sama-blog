import _mergeJSXProps from 'babel-helper-vue-jsx-merge-props'

var BilibiliIcon = {
  name: 'BilibiliIcon',
  functional: true,
  render: function render (h, ctx) {
    return h('svg', _mergeJSXProps([{
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        stroke: '00',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      },
      class: 'booling booling-bilibili',
    }, ctx.data]), [h('path', {
      attrs: {
        d: 'M6.2.4l3.9,4.2h3.8L17.8.4a1.2,1.2,0,0,1,1.7,0,1.3,1.3,0,0,1,0,1.8h0L17.3,4.6h2.5A4.4,4.4,0,0,1,24,9.1h0V19.5A4.4,4.4,0,0,1,19.8,24H4.2A4.4,4.4,0,0,1,0,19.5H0V9.1A4.4,4.4,0,0,1,4.2,4.6H6.7L4.5,2.2A1.3,1.3,0,0,1,4.5.4,1.2,1.2,0,0,1,6.2.4ZM19.8,7.2H4.2A1.8,1.8,0,0,0,2.4,8.9V19.5A1.9,1.9,0,0,0,4,21.4H19.8a1.8,1.8,0,0,0,1.8-1.7V9.1A1.8,1.8,0,0,0,19.8,7.2ZM7.2,11.1a1.2,1.2,0,0,1,1.2,1.2v2.6a1.2,1.2,0,1,1-2.4,0V12.3A1.2,1.2,0,0,1,7.2,11.1Zm9.6,0A1.2,1.2,0,0,1,18,12.3h0v2.6a1.2,1.2,0,1,1-2.4,0V12.3a1.2,1.2,0,0,1,1.2-1.2Z',
      },
    })])
  },
}

export { BilibiliIcon }
