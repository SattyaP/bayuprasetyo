document.addEventListener('DOMContentLoaded', () => {
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
    const myAge = getAge('2006-02-06')

    if (myAge <= 25) {
        document.getElementById('age').innerText = `${myAge} years old 😎`
    } else {
        document.getElementById('age').innerText = `${myAge} years old 😴`
    }
})

