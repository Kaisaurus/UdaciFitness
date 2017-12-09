The easiest way to generate both the .apk and the .ipa files is to use Expo's exp CLI. First, run `npm install -g exp`. Once that's installed (and after you've configured your app.json file), you can run `exp build:ios` to build your .ipa file, and `exp build:android` to build your .apk file.

Note that these will take anywhere from 10-20 minutes to build, so you'll need to be patient. To check the status of the build you can run exp build:status

https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/UploadingBinariesforanApp.html#//apple_ref/doc/uid/TP40011225-CH38-SW1

https://support.google.com/googleplay/android-developer/answer/113469?hl=en