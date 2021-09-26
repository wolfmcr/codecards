module.exports = [
  {
    language: 'javascript',
    front: [
      {
        type: 'code',
        code: '//write some code on the front\nconst cool = "good"'
      }
    ],
    back: [
      { type: 'text', text: 'some text on the back' },
      { type: 'code', code: '//write some poop on the front' }
    ],
    deck: ''
  },
  {
    language: 'javascript',

    front: [
      { type: 'code', code: '//write some poop on the front' },
      { type: 'code', code: '//write some poop on the front' }
    ],
    back: [
      { type: 'text', text: 'some poop on the back' },
      { type: 'code', code: '//write some poop on the front' }
    ],
    deck: ''
  }
];
