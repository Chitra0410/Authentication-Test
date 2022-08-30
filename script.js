const DB_Users = []

const resetFields = () => {
    document.getElementById('registration-first-name').value = ''
    document.getElementById('registration-last-name').value = ''
    document.getElementById('registration-email').value = ''
    document.getElementById('registration-phone').value = ''
    document.getElementById('registration-batch').value = ''
    document.getElementById('registration-current').value = ''
}

const signUp = () => {
    let first = document.getElementById('registration-first-name').value
    let lastName = document.getElementById('registration-last-name').value
    let email = document.getElementById('registration-email').value
    let phoneNumber = document.getElementById('registration-phone').value
    let batchNo = document.getElementById('registration-batch').value
    let currentModule = document.getElementById('registration-current').value

    let registrationAlert = document.getElementById('registration-success')

    DB_Users.push(userDetails)
    registrationAlert.style.display = 'block'
    console.log(DB_Users)
    resetFields()
}