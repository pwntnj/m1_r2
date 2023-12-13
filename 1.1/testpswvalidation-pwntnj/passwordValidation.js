function isPasswordValid(password) {
  // Check if the password is null, undefined, or empty
  if (!password || password.length === 0) {
    return false;
  }

  // Check the length
  if (password.length < 8) {
    return false;
  }

  // Check for at least one uppercase letter
  let hasUpperCase = false;
  for (const char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true;
      // break;
    }
  }
  if (!hasUpperCase) {
    return false;
  }

  // Check for at least one lowercase letter
  let hasLowerCase = false;
  for (const char of password) {
    if (char >= 'a' && char <= 'z') {
      hasLowerCase = true;
      // break;
    }
  }
  if (!hasLowerCase) {
    return false;
  }

  // Check for at least one digit
  let hasDigit = false;
  for (const char of password) {
    if (char >= '0' && char <= '9') {
      hasDigit = true;
      // break;
    }
  }
  if (!hasDigit) {
    return false;
  }

  // Check for at least one special character
  const specialChars = ['@', '#', '$', '%', '^', '&', '*', '!'];
  let hasSpecialChar = false;
  for (const char of password) {
    if (specialChars.includes(char)) {
      hasSpecialChar = true;
      // break;
    }
  }
  if (!hasSpecialChar) {
    return false;
  }

  // If all checks pass, the password is valid
  return true;
}

module.exports = isPasswordValid;





















// // Natthanan Jirajaruwat 65130500104
// function isPasswordValid(password) {
//   if (password === null || password === undefined || password.length === 0) {
//     return false
//   }
//   let o = ''
//   if (password.length >= 8) {
//     for (let i = 0; i <= password.length; i++) {
//       if (password.length[i] === password.toUppercase) {
//         o = o + i
//       } 
//       else if (password.length[i] === password.toLowercase) {
//         o = o + i
//       } 
//       else if (password.length[i] >= 0) {
//         o = o + i
//       } 
//       else if (password.length[i] === '@'|| '#'|| '$'|| '%'||'^'|| '&'|| '\*'|| '!') {
//         o = o + i
//       } else {
//         o = o + i
//       }
      
      
//     }
//   }else {
//     return false
//   } 
//   return true
  
  
// }

// module.exports = isPasswordValid
