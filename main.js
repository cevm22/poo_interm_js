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

//enumerable:false , hace que se 'oculte la propiedad' con el object.keys; y para poder verlo debe ser con getownpropertydescriptors. pero si se puede acceder a su valor
Object.defineProperty(juan,'navigator',{
    value:'chrome',
    enumerable:false,
    writable:true,
    configurable:true
});

//writable:false , NO  permite cambiar el valor de la propiedad, pero, si se puede borrar
Object.defineProperty(juan,'editor',{
    value:'VSCODE',
    enumerable:true,
    writable:false,
    configurable:true
});

//configurable: false, puede editarse el valor de la propiedad, pero, no se puede borrar
Object.defineProperty(juan,'terminal',{
    value:'cWSL',
    enumerable:true,
    writable:true,
    configurable:false
});

//dejar los 3 valores en false, hace que no se pueda editar, borrar y ocultar la propiedad 'prueba_Nasa'
Object.defineProperty(juan,'prueba_Nasa',{
    value:'extraterrestres',
    enumerable:false,
    writable:false,
    configurable:false
});

//========================
//hay otras 2 propiedades que son object.freeze y object.seal, el problema de utilizar estos metodos es que no se puede quitar, y lo que se debe hacer
//es hacer una 'copia' del objeto para poder manipularlo
//el object.seal(objeto) convierte todas las propiedades del objeto en false (enumerable, writable, configurable)
//Object.seal(juan);
//el object.freze(objecto) convierte todas las propiedades cambian a writable y configurable a false
//Object.freeze(juan);
//========================


// Funcionamiento de la memoria en Java Script
//Las variables se guardan en dos tipos de memorias, que son STACk y HEAP
//STACK: es un tipo de memoria que es limitada y solo guarda las variables normales (int,bool,string,array)
//HEAP: es un tipo de memoria más amplia, pero mas lenta. aqui es donde se guardan TODOS los objetos, y en la memoria STACK solo se almacena el apuntador que va a HEAP

let person = {
    name:'natalia',
    age:25
}

let person2=person;
person2.name='nuevo nombre'
//en esta variable deberia de estar el nombre 'natalia'
console.log(person)
//en esta variable deberia estar 'nuevo nombre'
console.log(person2)

//en el caso anterior explica sobre lo anterior explicado, lo que sucede es que cuando intenamos hacer 'copia de person' lo que realmente está pasando es que
//se esta copiando el apuntador en donde se guarda el objeto de la memoria HEAP, por lo que cuando se intentan modificar, agregar o borrar propiedades de person o person2,
//lo que ocurre es que se estan cambiando al mismo objeto, porque 'person2' SOLO esta copiando el apuntador, PERO no creando un nuevo.

//==========================

//SHALLOW COPY o copia superficial, puede hacer copias de objetos a primer nivel o con poca profundidad, PERO si tiene objetos anidados, sucede el problema de que solo
//se copian los apuntadores de memoria y no se pueden clonar.
//metodos para poder hacer shallow copy.

const student = {
    name:'carlos',
    age:28,
    clases:{
        puntos:123,
        basico: ['java script'],
        intermedio: ['html','css']
    }
}

//por ciclo for

const student_2={}
for (prop in student ){
    student_2[prop] = student[prop]
}

console.log(student_2)

//por medio de Object.assign({},objeto)
//hace una copia como en el ciclo for
const student_3= Object.assign({},student);
console.log(student_3);


//por ultimo esta Object.create(objeto)
//en este caso las propiedades se copian en __proto__ y se pueden 'asignar como nuevo valor', se siguen conservando, pero solo toma el valor más nuevo
//los valores en __proto__ se cambian desde el objeto original y las nuevas propiedades que se le agreguen a estas copias no podrán ser modificados por el original
//PERO sigue teniendo el mismo problema en que no funciona en los objetos anidados
const student_4 = Object.create(student);
console.log(student_4);