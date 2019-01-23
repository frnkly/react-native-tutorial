# Requirements

So you want to build a mobile app. The first thing you'll need for this tutorial is a computer with a code editor such as:

- [Visual Studio Code](https://code.visualstudio.com)
- [Sublime Text](https://sublimetext.com)
- [Brackets](http://brackets.io)
- Other options: https://alternativeto.net/software/sublime-text

We'll also be using the terminal/comamnd line. If you're running Windows, I recommend [cmder](http://cmder.net) but the powershell or any command line will do (these are already installed by default on your computer).

You can develop Android and iOS apps on Windows, Mac or Linux. However to publish iOS apps to the App Store you will need a Mac. There are two options for developing apps with React Native.

## Option 1: using an emulator

You may use an Android or iOS emulator directly on your laptop (no smartphone needed). You'll find the instructions in the React Native docs [here](https://facebook.github.io/react-native/docs/getting-started) in the "Building Projects with Native Code" tab.

_This option will allow you to develop **iOS apps on a Mac** or Android apps on any platform._ Make sure to run Android Studio or Xcode at least once to make sure all is good.

## Option 2: using your Android or iOS device

You can also use your smartphone to develop your app. _This option will allow you to develop iOS and Android apps **on any platform**_, though you'll still need a Mac to publish iOS apps to the App Store. For this, you'll need:

- An Android phone with Android 4.4 or later, or an iPhone with iOS 9 or later.
- The Expo app installed on your phone.

Open the camera app on your phone and point it to one of these QR codes to get Expo straight from the Play Store/App Store:

<table>
  <tr>
    <td align="center">Expo for Android</td>
    <td align="center">Expo for iOS</td>
  </tr>
  <tr>
    <td align="center">
      <a target="_blank" href="https://play.google.com/store/apps/details?id=host.exp.exponent">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/qr-code-expo-android.png" />
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://itunes.apple.com/us/app/expo-client/id982107779">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/qr-code-expo-ios.png" />
      </a>
    </td>
  </tr>
</table>

# Software setup

Once you've decided which option is right for you, make sure the following software are also installed on your machine:

- [Node & NPM](https://nodejs.org)
- [Expo](https://docs.expo.io)

# Troubleshooting

## Node permission errors using Homebrew on OSX

If you're having trouble installing Node on your Mac, try the following commands to re-install the latest version:

```shell
brew uninstall node
brew update
brew update # a second time, just to be sure
brew doctor
brew upgrade
brew install node
```

If that still doesn't do the trick, try fixing the file ownership settings in your `/usr/local` folder (tip from [Homebrew's help page](https://docs.brew.sh/Troubleshooting)):

```shell
cd /usr/local && sudo chown -R $(whoami) bin etc include lib sbin share var opt Cellar Caskroom Framework
```

If that _still doesn't work_, I would opt for using [NVM](https://github.com/creationix/nvm) instead:

```shell
brew uninstall node

# You'll find the latest version of NVM on their website: https://github.com/creationix/nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
nvm install node
```

[&rarr; intro to React Native](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/intro.md)

[&larr; list of modules](https://github.com/frnkly/react-native-tutorial#modules)

_Were you able to install the required software? I'd love to know where you got hung up :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)_
