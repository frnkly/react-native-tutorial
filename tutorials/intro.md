# Yakitty: a chat app for everyone :point_right: [bit.ly/yakitty](http://bit.ly/yakitty)

## Module: **Intro to React Native**

## Table of contents

- [Terminal basics](#terminal-basics)
- [Getting started](#getting-started)
    - [Running the app](#running-the-app)
    - [Troubleshooting](#troubleshooting)
- [React and React Native basics](#react-and-react-native-basics)
    - [JSX: HTML in JavaScript](#jsx-html-in-javascript)
- [Next module: Creating components](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/creating-components.md)
- [Back to list of modules](https://github.com/frnkly/react-native-tutorial#modules)

# Terminal basics

We'll be using our terminal a lot. So, you need to know how to pull it up.

- Windows users: I recommend you use [Cmder](http://cmder.net), but you can also search for the "Command Prompt" or "PowerShell" in your Programs menu.
- Mac users: use the Finder to look for the "Terminal" app.
- Linux users: you should know this :eyes:

From now on, whenever you see code like this:

```shell
# This line is a comment, but the following one is a command.
node --version
```

Know that you're supposed to type that into your terminal and press `enter` or `return`. Any line that starts with a `#` is simply a comment. You don't need to type that in.

Now, let's check our setup. Open your terminal and run the following commands:

```shell
# Check that Node is installed and working
node --version

# Check that NPM is installed and working
npm --version

# Check that Expo is installed and working
expo --version

# Login to Expo (optional)
expo login
```

It's OK to copy and paste from this tutorial, but it's a good idea type out code for yourself to better grasp the material.

[&uarr; back to table of contents](#table-of-contents)

# Getting started

Now that you've mastered the terminal _like a champ_, it's time to get our hands dirty with some code. We'll start from a clean slate and build everything from the ground up. From your terminal, change directories using the `cd` command into a folder where you want to keep all of your code. I like to keep my code in `~/Code` on Mac/Linux, and in `C:\Projects` on Windows, but that's up to you.

```shell
# Change directories into your projects folder.
cd ~/Code

# Create a new React Native project called "yakitty". If you're asked to choose
# a template, pick the blank one by pressing enter/return.
npx create-react-native-app yakitty
```

You might encounter one of the following messages:

- If you get the message `This command requires Expo CLI. Do you want to install it globally [Y/n]?` simply type in `y` and then press `enter` or `return`.
- If you're asked to choose a template, pick the blank one.
- If you're asked to `Use Yarn to install dependencies?` and you know about `Yarn` and prefer it over `npm`, you may keep using Yarn for the remainder of this tutorial, no worries.

You will see a lot of `warning` messages. This is fine, I promise! In fact, if all goes well, you should see a message similar to:

    Your project is ready at .../yakitty
    To get started, you can type:

      cd yakitty
      npm start

If you get "write errors", this might have something to do with how you installed Node. You can try again by adding `sudo` before the `npx ...` command, although I recommend you reinstall Node instead.

```shell
# Not recommended, but can get you started quickly
sudo npx create-react-native-app yakitty
```

We've just used the `npx` command provided by NPM to run a helpful script (`create-react-native-app`) written by the good people at React Native. That script downloaded some files and installed other dependencies we're going to need to get started. Fantastic :ok_hand:

[&uarr; back to table of contents](#table-of-contents)

## Running the app

Now let's run the app to see what we have so far. From your terminal, change directories into the newly created `yakitty` folder:

    cd yakitty

_Make sure your Android or iPhone emulator is running_. If you intend to develop using the Expo app on your phone, make sure your machine and phone share the same internet connection and that Expo is indeed installed on your phone.

Then, from your terminal, start Expo:

    expo start

You can use the camera on your phone to point at the QR code that just appeared in your browser, or use one of the links on the left-hand side to launch the app on your emulator. It will open the Expo app on your phone _automagically_.

_Wow_. Tap yourself on the back :clap: you've just built a mobile app!

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/intro-blank-rn-app.png" />
</p>

## Troubleshooting

If you're still having issues, try one of the following:

### "Not a valid SDK option" or "This version of the Expo app is out of date"

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/intro-sdk-not-valid.png" />
</p>

Simply update the Expo app on your device or emulator by uninstalling and reinstalling it. If you're using the emulator, you can uninstall the app and run the above `expo start` command again to automatically reinstall Expo.

[&uarr; back to table of contents](#table-of-contents)

# React and React Native basics

Open the "yakitty" folder in your fav code editor so we can have a look at the files `create-react-native-app` created for us. If you're using Visual Studio Code or Sublime Text (excellent choices!), you can pull up your editor from a new terminal window:

```shell
# Visual Studio Code users
code .

# Sublime Text users
subl .
```

The `.` is important: it means "current folder".

[&uarr; back to table of contents](#table-of-contents)

## JSX: HTML in JavaScript

There's a lot going on here. Let's start by inspecting `App.js`.

The code you see here is JavaScript mixed with something called [JSX](https://reactjs.org/docs/introducing-jsx.html). It allows us to declare the "elements" we want to see and how they should appear, the same way you would do it in HTML. Except, instead of HTML elements, we use React Native components.

Try changing the sentence within the `<Text>` tags and saving your changes. My mind is blown too! Expo allows us to make changes and see the updates in our app in real time. Very cool.

Now, add a few more `<Text>` elements, just for fun (don't forget to save your changes).

```javascript
        <Text>One bottle of beer on the wall</Text>
        <Text>Two bottles of beer on the wall</Text>
        <Text>Three bottles of beer on the wall</Text>
```

Since we're on a mission to build something a little more useful, I'm going to skip over a few things, but I encourage you to read the excellent documentation on [JSX](https://reactjs.org/docs/introducing-jsx.html) as well as [React Native](https://facebook.github.io/react-native/docs/tutorial.html) when you have time.

[&uarr; back to table of contents](#table-of-contents)

[&rarr; creating components](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/creating-components.md)

[&larr; list of modules](https://github.com/frnkly/react-native-tutorial#modules)

_Was the introduction clear? I'd love to hear your feedback or comments if you have any :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)_
