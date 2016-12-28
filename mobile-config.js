// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: 'com.app.jiyuu',
    name: 'jiyuu',
    description: 'The last suit you will ever wear.',
    author: 'Zachary Pelkey, Alec Wantoch',
    email: 'zpelkey@gmail.com',
    website: 'http://jiyuu.io'
});

App.icons({
    'android_mdpi': 'icons/android_mdpi.png',
    'android_hdpi': 'icons/android_hdpi.png',
    'android_xhdpi': 'icons/android_xhdpi.png',
    'android_xxhdpi': 'icons/android_xxhdpi.png',
    'android_xxxhdpi': 'icons/nice-highres.png'
});

App.setPreference('android-targetSdkVersion', '22');

App.accessRule('*');