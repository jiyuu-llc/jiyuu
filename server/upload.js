AWS.config.update({
    accessKeyId: "AKIAIDZI2EA324XGPMYA",
    secretAccessKey: "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"
});

Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
    bucket: "jiyuuu",
    AWSAccessKeyId: 'AKIAIDZI2EA324XGPMYA',
    AWSSecretAccessKey: '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',
    region: 'us-east-1',

    acl: "public-read",

    authorize: function () {
        //Deny uploads if user is not logged in.
        if (!this.userId) {
            var message = "Please login before posting files";
            throw new Meteor.Error("Login Required", message);
        }



        return true;
    },

    key: function (file) {
        //Store file into a directory by the user's id
        return this.userId + "/" + Random.id(32);
    }
});

