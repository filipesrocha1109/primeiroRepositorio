let a = 3

global.b = 4
this.c = 5

 console.log(this.a)
 console.log(global.b)
 console.log(this.c)
 console.log(module.exports.c)
 console.log(module.exports === this)

