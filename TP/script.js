/* exp = /^[\w\.\-\\]{5,30}(@)[a-zA-Z]{0,15}(\.com)$/
phrase = "assim@gmail.com"
exp = /^[\w]+/
console.log(phrase.indexOf('@'));
console.log(exp.test(phrase)) */
const paypal = document.querySelector('.modepayement')
const carte =  document.querySelector('.modecarte')
const containe_paypal = document.querySelector('.paypal')
const containe_carte = document.querySelector('.carte')
paypal.addEventListener("input",function(){
    if(paypal.checked){
        containe_carte.classList.add("hide");
        containe_paypal.classList.remove("hide");
    }
})
carte.addEventListener("input",function(){
    if(carte.checked){
        containe_paypal.classList.add("hide");
        containe_carte.classList.remove("hide");
    }
})

//validation des champs
const namee = document.getElementById('name')
const adresse = document.getElementById('adresse')
const num = document.getElementById('num')
const form = document.querySelector('form')
function Ppaypal(){
    const email = document.getElementById('email')
    const pwd = document.getElementById('pwd')
    let errortext = document.getElementById('error')
    var test = false
    let error = ""
    if(!/^[a-zA-Z]+\s?[a-zA-Z]+$/.test(namee.value)){
        test = true
        error = "Invalid Name"
    }
    else if(!/^[\w\s\-\.]{10,100}$/.test(adresse.value)){
        test = true
        error = "Invalid Adresse"
    }
    else if(!/^0[567]\d{8}$/.test(num.value)){
        test = true
        error = "Invalid num"
    }
    else if(!/^[\w\.\-]+@[a-zA-Z]{3,10}\.com$/.test(email.value)){
        test = true
        error = "Invalid email"
    }
    else if(pwd.value.length < 4){
        test = true
        error = "Invalid password"
    }
    /* cheking */
    if(test === true)
        console.log(error)
        errortext.style.border = '2px solid red'
        errortext.style.color = 'red'
        errortext.innerHTML = error
        errortext.style.transform = 'scale(1,1)'
    if(test=== false){
        errortext.style.border = '2px solid green'
        errortext.style.color = 'green'
        errortext.innerHTML = "YOUR GOOD"
        errortext.style.transform = 'scale(1,1)'
        form.reset()
    }
}
function Ccarte(){
    const num_carte = document.getElementById('num_carte')
    const code_ver = document.getElementById('code_ver')
    let errortext = document.getElementById('error')
    var test = false
    let error = ""
    if(!/^[a-zA-Z]+\s?[a-zA-Z]+$/.test(namee.value)){
        test = true
        error = "Invalid Name"
    }
    else if(!/^[\w\s\-\.]{10,100}$/.test(adresse.value)){
        test = true
        error = "Invalid Adresse"
    }
    else if(!/^0[567]\d{8}$/.test(num.value)){
        test = true
        error = "Invalid num"
    }
    else if(!/^\d{16}$/.test(num_carte.value)){
        test = true
        error = "Invalid num_carte"
    }
    else if(!/^\d{3}$/.test(code_ver.value)){
        test = true
        error = "Invalid code_ver"
    }
    /* cheking */
    if(test === true)
        console.log(error)
        errortext.style.border = '2px solid red'
        errortext.style.color = 'red'
        errortext.innerHTML = error
        errortext.style.transform = 'scale(1,1)'
    if(test=== false){
        errortext.style.border = '2px solid green'
        errortext.style.color = 'green'
        errortext.innerHTML = "Successfully"
        errortext.style.transform = 'scale(1,1)'
        console.log('hello')
        form.reset()
    }
}
const button = document.getElementById('button')
button.addEventListener('click',function(){
    if(paypal.checked)
        Ppaypal()
    else
        Ccarte()
})