const juan = {
    name: "Juanito",
    age: 18,
    approved_Courses: ["Curso 1"],
    add_Course(new_course){
        this.approved_Courses.push(new_course);
    }
}

// La propiedad Static se utiliza para poder acceder a atributos o elementos de un objeto sin la necesidad de crear instancias

//metodos Statics del prototipo Object:

//enviar como argumento de que objeto se quiere obtener la lista de sus keys
console.log(Object.keys(juan));
//devuelve un array con las propiedades del objeto, funciona igual que el Object.keys
console.log(Object.getOwnPropertyNames(juan));
//devuelve un array de arrays de los nombres de las propiedades y sus valores.
console.log(Object.entries(juan));
//se puede acceder por medio de las posiciones de los arrays
console.log(Object.entries(juan)[3]); //accedemos al vector de propiedad de la funcion add_course
//en este caso solo se puede acceder al codigo, pero no se puede utilizar como cuando se hacen las instancias para actualizar y enviar mas datos
//esto se debe a que en el metodo entries no utiliza 'this' con el objeto 'juan'. 
//en realidad utiliza el objeto array ['add_course', f] y es la razón por la que arroja error como 'undefined' >>main.js:6 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
console.log(Object.entries(juan)[3][1]); //accedemos al codigo de la función.
//ejemplo de del error que arroja si intentamos agregar un nuevo curso tratando de acceder al objeto  'juan'
console.log('el sig. ejemplo es el error que arroja de lo anterior explicado')
//console.log(Object.entries(juan)[3][1]('nuevo curso'));

console.log(Object.getOwnPropertyDescriptors(juan))

//crear nuevas propiedades al objeto con la siguiente propiedad:
Object.defineProperties(juan,"prueba_NASA",{
    //lista de atributos del nuevo metodo
    value: "extraterreste",
    writable: true,
    configurable: true,
    enumerable:true

})