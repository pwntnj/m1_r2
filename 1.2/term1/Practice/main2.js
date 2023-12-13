const mail = {
        sender : 'SIT, KMUTT',
        recipent : {
            firstname : 'Natthanan',
            lastname : 'Jirajaruwat'
        },
        title : 'Welcome to MUNTT',
        sentDetail : {
        sentDate : new Date(Date.now()),
        host: {
            name : '@sit.kmutt'
        }
        }
    }
let {recipent:{firstname,lastname}} = mail
console.log(firstname);
console.log(lastname);
let {sentDetail: {host: {name}}} = mail
console.log(name);