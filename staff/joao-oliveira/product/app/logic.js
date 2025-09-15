var logic = {}

/**
 * Registers a user.
 */
logic.registerUser = function (fullName, dateOfBirth, email, password) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) throw new Error('user already exits')
    }

    var user = {
        fullName: fullName,
        dateOfBirth: dateOfBirth,
        email: email,
        password: password
    }

    data.users.push(user)
}

logic.loginUser = function (email, password) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            if (user.password === password) {
                return
            }
            throw new Error('wrong password')
        }
    }
    throw new Error('wrong email')
}

logic.getUserInfo = function (email) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            return {
                fullName: user.fullName,
                dateOfBirth: user.dateOfBirth,
                email: user.email
            }
        }
    }
    throw new Error('user not found')
}

logic.changeUserPassword = function (email, currentPassword, newPassword, newPassowrd 2) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            if (user.email === email) {
                if (user.password === currentPassword) {
                    if (newPassword === newPassowrd) {

                        user.password = newPassowrd

                        return
                    }
                    throw new Error('new password do not match new password 2')
                }
                throw new Error('wrong password')
            }
        }
    }
    throw new Error('user not found')
}

logic.changeUserEmail = function (Email, newEmail, newEmail2) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i];

        if (user.email === email) {
            if (newEmail === newEmail2) {
                user.email = newEmail;
                
                return
            } else {
                throw new Error('emails do not match');
            }
        }
        throw new Error('user not found');
    }
}