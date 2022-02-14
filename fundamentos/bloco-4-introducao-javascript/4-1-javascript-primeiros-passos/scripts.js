const myName = 'Juliana';
const birthCity = 'Campo Grande';
const birthYear = 1988;
console.log(myName);
console.log(birthCity);
console.log(birthYear);

const base= 5;
const height = 8;
const area = base * height;
console.log(area);

const perimeter = 5 + 5 + 8 +8;
console.log(perimeter);

const notaDesafio = 80;

if(notaDesafio >= 80){
   console.log("Parabéns, você foi aprovada(o)!")
}else if(notaDesafio < 80 && notaDesafio >= 60) {
    console.log("Você está na nossa lista de espera");
} else if(notaDesafio < 60) {
    console.log("Você foi reprovada(o)")
};

const currentHour = 22;
let message = '';
if(currentHour >= 22){
    message = 'Não deveríamos comer nada, é hora de dormir';
} else if(currentHour >= 18 && currentHour < 22){
    message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18){
    message ='Vamos fazer um bolo pro café da tarde?';
} else if(currentHour >= 11 && currentHour < 14){
    message ='Hora do almoço!!!';
} else if( currentHour < 11 && currentHour < 4){
    message ='Hmmm, cheiro de café recém passado';
} 
console.log(message)

const weekDay = 'sabado';
if(weekDay === 'segunda-feira' || weekDay === 'terça-feira' ||weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay ==='sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}else {
    console.log('FINALMENTE, descanso merecido UwU');
}
