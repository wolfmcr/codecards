module.exports = [
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'What will be the output of the console log below?'
      },
      {
        type: 'code',
        code: "let hello = 'Hello World!';\n\nlet message = hello;\n\nconsole.log(message)"
      }
    ],
    back: [
      {
        type: 'code',
        code: "let hello = 'Hello World!';\n\nlet message = hello;\n\nconsole.log(message) // 'Hello World!'"
      },
      {
        type: 'text',
        text: 'You can copy the value of one variable to another variable by assigning it.'
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'What is wrong with the following code?'
      },
      {
        type: 'code',
        code: 'let 1a;\n\nlet my-name;\n\nlet let = 5;'
      }
    ],
    back: [
      {
        type: 'code',
        code: 'let 1a;\n\nlet my-name;\n\nlet let = 5;'
      },
      {
        type: 'text',
        text: "These declarations will all throw errors. Variable names in JavaScript cannot start with numbers, contain hyphens or use reserved keywords such as 'let' or 'return'."
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'What are the 8 basic data types in JavaScript, and how can you easily find the type of a value?'
      }
    ],
    back: [
      {
        type: 'text',
        text: "The 8 basic data types are:\nnumber\nbigint\nstring\nboolean\nnull\nundefined\nobject and \nsymbol. \nUsing the 'typeof' operator will return a string identifying the data type of a value."
      },
      {
        type: 'code',
        code: 'typeof undefined // "undefined"\n\ntypeof 0 // "number"\n\ntypeof 10n // "bigint"\n\ntypeof true // "boolean"\n\ntypeof "foo" // "string"\n\ntypeof Symbol("id") // "symbol"\n\ntypeof {key: \'value\'} // "object"\n\ntypeof null // "object"'
      },
      {
        type: 'text',
        text: 'The result of typeof null is "object". That’s an officially recognized error in \'typeof\' behavior, coming from the early days of JavaScript and kept for compatibility. Null is not an object. It is a special value with a separate type of its own.'
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'Will the following code print to the console?'
      },
      {
        type: 'code',
        code: 'if(\'0\') {\n  console.log("Is it truthy?")\n}'
      }
    ],
    back: [
      {
        type: 'code',
        code: 'if(\'0\') {\n  console.log("Is it truthy?")\n}\n//will print "Is it truthy?"'
      },
      {
        type: 'text',
        text: 'The above code WILL print to the console - any string that is not empty will be truthy. The code below checks the number 0 and will NOT print to the console because 0 is falsy.'
      },
      {
        type: 'code',
        code: 'if(0) {\n  console.log("Is it truthy?")\n}\n//will not print'
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'How many times will the following loop run?'
      },
      {
        type: 'code',
        code: 'for(let i = 0; i <= 4; i++) {\n  console.log(i)\n}'
      }
    ],
    back: [
      {
        type: 'text',
        text: 'The loop will run five times.\nThe starting value is 0 and the condition is: "While i is less than or equal to 4" '
      },
      {
        type: 'code',
        code: 'for(let i = 0; i <= 4; i++) {\n  console.log(i)\n}\n/* output: 0\n\t\t   1\n           2\n           3\n           4'
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'The following code contains three examples of logical operators. What are the outputs of the logs and why?'
      },
      {
        type: 'code',
        code: 'let value1 = false || true\n\nlet value2 = false && true\n\nlet value3 = !false\n\nconsole.log(value1)\nconsole.log(value2)\nconsole.log(value3)'
      }
    ],
    back: [
      {
        type: 'code',
        code: 'let value1 = false || true\n\nlet value2 = false && true\n\nlet value3 = !false\n\nconsole.log(value1) // true\nconsole.log(value2) // false\nconsole.log(value3) // true'
      },
      {
        type: 'text',
        text: "The OR '||' operator evaluates from left to right and converts each operand to a boolean. If the result is true, it stops and returns the original value. If all were false it returns the last.\n\nThe AND '&&' operator returns true if both operands are true, and returns false otherwise.\n\nThe NOT '!' operator converts the value to a boolean and returns the inverse."
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'What are the outputs of the logs below? Why would they be different?'
      },
      {
        type: 'code',
        code: "console.log( 2 == '2' )\n\nconsole.log( 2 === '2')"
      }
    ],
    back: [
      {
        type: 'code',
        code: "console.log( 2 == '2' ) // true\n\n\nconsole.log( 2 === '2') // false"
      },
      {
        type: 'text',
        text: "The regular equality operator '==' checks whether the two operands are equal but will also attempt to convert operands that are different types.  In the example above the string '2' will be converted into a numeric value and the result is true.\n\nThe strict equality operator '===' will always return false if the operands are different types."
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'Why is the following code throwing an error?'
      },
      {
        type: 'code',
        code: 'function tricky() {\n  let num = 10\n }\n\nconsole.log(num)  \n//Reference error: num is not defined'
      }
    ],
    back: [
      {
        type: 'text',
        text: "Because of the 'scope'. A variable declared inside a function is only available INSIDE that function. "
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'Why is the following code throwing an error?'
      },
      {
        type: 'code',
        code: 'function tricky() {\n  let num = 10\n }\n\nconsole.log(num)  \n//Reference error: num is not defined'
      }
    ],
    back: [
      {
        type: 'text',
        text: "Because of the 'scope'. A variable declared inside a function is only available INSIDE that function. "
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: "What are two ways we could access the 'name' property of the user object in the code below?"
      },
      {
        type: 'code',
        code: "let user1 = {\n  name: 'John',\n  age: 42,\n}"
      }
    ],
    back: [
      {
        type: 'code',
        code: "let user1 = {\n  name: 'John',\n  age: 42,\n}\n\nconsole.log(user.name) // John\nconsole.log(user['name']) // John"
      },
      {
        type: 'text',
        text: "The most common way to access properties and methods of objects in JavaScript is to use 'dot notation' e.g 'user.name' but we can also use square bracket notation in a similar way, passing a string as the identifier. This is the only way we can access multiword keys like in the example below: "
      },
      {
        type: 'code',
        code: "let user2 = {\n  name: 'Peter',\n  age: 5, \n  'likes soup': true\n  /* note that the property name\n  must also be a string */\n}\n\nconsole.log(user2['likes soup']) // true"
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'JavaScript allows us to work with primitive values (numbers, strings, etc.) like they were objects and provides many built in methods we can use. In the following code, why does the first method call work, but not the second?'
      },
      {
        type: 'code',
        code: "let str = '555';\n\nconsole.log(str.includes('5'); \n// true\n            \nlet num = 555;\n            \nconsole.log(num.includes(5);\n// num.includes is not a function"
      }
    ],
    back: [
      {
        type: 'text',
        text: "Because 'includes' is a method of the String object in JavaScript. The Number object has its own methods but 'includes' isn't one of them."
      }
    ],
    deck: ''
  },
  {
    language: 'javascript',
    front: [
      {
        type: 'text',
        text: 'Arrays have several, very useful built in methods. Below are some examples; explain what each method does and you should be able to answer what the output of the log will be.'
      },
      {
        type: 'code',
        code: "let arr = ['Spider']\n\narr.push('Fly')\n\narr.unshift('Bird')\n\nconsole.log(arr)"
      }
    ],
    back: [
      {
        type: 'code',
        code: "let arr = ['Spider']\n\narr.push('Fly')\n\narr.unshift('Bird')\n\nconsole.log(arr)\n// [ 'Bird', 'Spider', 'Fly' ]"
      },
      {
        type: 'text',
        text: "'push' will add an element to the END of an Array.\n'unshift' will add an element to the START of an Array."
      }
    ],
    deck: ''
  }
];
