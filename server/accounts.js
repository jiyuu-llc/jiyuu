Accounts.onCreateUser(function(options, user) {
    user.firstName = options.firstName;
    user.lastName = options.lastName;
    user.theme = options.theme;
    user.type = options.type;
    user.avatar = options.avatar;
    user.dob = options.dob;
    user.interests = options.interests;
    return user;
});