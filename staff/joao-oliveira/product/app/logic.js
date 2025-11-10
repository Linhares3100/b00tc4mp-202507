var logic = {}

/** 
 * Register a user 
 * 
 * @param {String} fullName The full name of the user.
 * @param {String} dateOfBirth The date of birth.
 * @param {String} email The e-mail of the user.
 * @param {String} password The password of the user.
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

/**
 * Logs a user in the system.
 * @param {String} email The user email.
 * @param {String} password The password of the user.
 */
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

/**
 * Gets user Info in the system.
 * @param {String} email The email of the user.
 * @returns The public information of the user (fullName, dateOfBirth, email.)
 * 
 */
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

/**
 * Changes the User password in the system.
 * @param {String} email The e-mail of the user.
 * @param {String} currentPassword The current password of the user.
 * @param {String} newPassword The new password of the user.
 * @param {String} newPassowrd The repetition of the new password of the user.
 * @param {any} 
 * @returns 
 */
logic.changeUserPassword = function (email, currentPassword, newPassword, newPasswordRepeat) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            if (user.password === currentPassword) {
                if (newPassword === newPasswordRepeat) {

                    user.password = newPassword

                    return
                }

                throw new Error('new password does not match new password repeat')
            }

            throw new Error('wrong password')
        }
    }

    throw new Error('user not found')
}

/**
 * Changes the user password in the system.
 * @param {String} email    The email of the user.
 * @param {String} newEmail The new email of the user.
 * @param {String} newEmailRepeat the repetition of the new email of the user.
 */
logic.changeUserEmail = function (email, newEmail, newEmailRepeat) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i];

        if (user.email === email) {
            if (newEmail === newEmailRepeat) {
                user.email = newEmail;

                return
            }

            throw new Error('new e-mail does not match new e-mail repeat');
        }
    }

    throw new Error('user not found');
}

/** 
 * Returns all posts in the system.
 * 
 * @param{string} email The e-mail of the user.
 * @returns An array of posts.
 */
logic.getPosts = function (email) {
    //check user exits.

    var userExits = false

    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            userExits = true

            break
        }
    }


    if (!userExits) throw new Error('user not fond')

    //rerturn all posts

    return data.posts
}

logic.addPost = function (email, image, text) {
    for (var i = 0; i < data.users.length; i++) {
        var user = data.users[i]

        if (user.email === email) {
            var post = {
                author: email,
                image: image,
                text: text,
                date: new Date().toISOString()
            }

            data.posts.push(post)

            return
        }
    }

    throw new Error('user not found')
}