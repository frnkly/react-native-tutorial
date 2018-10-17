# Yakitty: a chat app for all of us

<h3 align="center">
  <a href="bit.ly/yakitty">
    bit.ly/yakitty
  </a>
</h3>

# What's this?

>yak (verb): to talk persistently. Also, a large long-haired wild or domesticated ox :ox:

Yakitty is a simple [React Native](https://facebook.github.io/react-native) tutorial for building smooth-running Android and iOS apps using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript). It's a good idea to check out the [requirements](https://github.com/frnkly/react-native-tutorial/blob/develop/docs/requirements.md) before getting started.

To get the most out of this tutorial, you should have a basic understanding of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript). It wouldn't hurt to know the basics of [React](https://reactjs.org/tutorial/tutorial.html) either, but it's not required.

THIS IS A WORK IN PROGRESS

# Table of contents

- [First things first](#first-things-first)
  - [What are we building?](#what-are-we-building)
  - [What will we learn?](#what-will-we-learn)
  - [What is React Native?](#what-is-react-native)
  - [What you'll need](#what-youll-need)
- [Terminal basics](#terminal-basics)
- [Getting started](#getting-started)
  - [Running the app](#running-the-app)
- [React and React Native basics](#react-and-react-native-basics)
  - [JSX: JavaScript & HTML](#jsx-javascript--html)
- [Our first components](#our-first-components)
  - [MessageList component](#messagelist-component)
  - [Message component](#message-component)
  - [Input component](#input-component)
- [Developing our components](#developing-our-components)
- [APIs and Chatkit](#apis-and-chatkit)
  - [Organizing our code](#organizing-our-code)
- [Improving our code](#improving-our-code)
- [Resources](#resources)

# First things first
_(~10 mins)_

## What are we building?

We're going to build an Android or iOS app _with our bear hands_—in two hours or less.

## What will we learn?

We're going to use renowned libraries such as [React](https://reactjs.org) in order to become renowned developers. We'll also learn how to integrate 3rd party APIs and organize our codebase the way master code crafters do.

## What is React Native?

[React Native](https://facebook.github.io/react-native) is a framework built on [React](https://reactjs.org) for building native mobile apps using only JavaScript. Native means your app will look and feel like any real app that was written in Java or Objective-C, the languages for developing Android and iOS apps.

This is different from tools like [PhoneGap](https://phonegap.com) or [Ionic](https://ionicframework.com) which create apps that run in your phone's "Web View" (or browser). But it _is_ similar to frameworks such as [NativeScript](https://www.nativescript.org) or [Flutter](https://flutter.io).

## What you'll need

Did you skip the [requirements](https://github.com/frnkly/react-native-tutorial/blob/develop/docs/requirements.md) page? Here's the CliffsNotes version:

- A computer (Windows, Mac or Linux).
- A [code editor](https://alternativeto.net/software/sublime-text) such as [Visual Studio Code](https://code.visualstudio.com) or [Sublime Text](https://sublimetext.com).
- If you're on Windows, I recommend getting the [Cmder](http://cmder.net) console emulator.
- An Android phone (4.4+) or iPhone (iOS 9+) with the Expo Client app installed.

I'm even providing you these QR codes for your convenience, so you don't have to search for the app in the Play Store/App Store. Just point your camera and download the app:

<table>
  <tr>
    <td align="center">Expo for Android</td>
    <td align="center">Expo for iOS</td>
  </tr>
  <tr>
    <td align="center">
      <a target="_blank" href="https://play.google.com/store/apps/details?id=host.exp.exponent">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/develop/docs/qr-code-expo-android.png" />
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://itunes.apple.com/us/app/expo-client/id982107779">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/develop/docs/qr-code-expo-ios.png" />
      </a>
    </td>
  </tr>
</table>

[&uarr; back to table of contents](#table-of-contents)

# Terminal basics
_(~5 mins)_

We'll be using our terminal a lot. So, you need to know how to pull it up.

- Windows users: I recommend you use [Cmder](http://cmder.net), but you can also search for the "Command Prompt" or "PowerShell" in your Programs menu.
- Mac users: use the Finder to look for the "Terminal" app.
- Linux users: you should know this :eyes:

From now on, whenever you see code like this:

```shell
# This line is a comment, but the following one is a command.
node --version
```

Know that you're supposed to type that into your terminal and press `enter` or `return`. Any line that starts with a `#` is simply a comment. You don't need to type it out.

Now, let's check our setup. Open your terminal and run the following commands:

```shell
# Check that Node is installed and working
node --version

# Check that NPM is installed and working
npm --version

# Check that Expo is installed and working
expo --version

# Login to Expo
expo login
```

It's OK to copy and paste from this tutorial, but it's a good idea type out code for yourself to better grasp the material.

[&uarr; back to table of contents](#table-of-contents)

# Getting started
_(~5 mins)_

Now that you've mastered the terminal _like a champ_, it's time to get our hands dirty with some code. We'll start from a clean slate and build everything from the ground up. From your terminal, change directories using the `cd` command into a folder where you want to keep all of your code. I like to keep my code in `~/Code` on Mac/Linux, and in `C:\Projects` on Windows, but that's up to you.

```shell
# Change directories into your projects folder
cd ~/Code

# Create a new React Native project called "yakitty"
npx create-react-native-app yakitty

# Change directories into the newly created "yakitty" folder
cd yakitty
```

If you get the message `Do you want to install it globally [Y/n]?` simply type in `y` and then press `enter` or `return`. If you're asked to choose a template, pick the blank one.

If you get "write errors", this might have something to do with how you installed Node or NPM. You can try again by adding `sudo` before the `npx ...` command, although I recommend you reinstall Node and NPM instead.

```shell
# Not recommended, but can get you started quickly
sudo npx create-react-native-app yakitty
```

We've just used the `npx` command provided by NPM to run a helpful script (`create-react-native-app`) written by the good people at React Native. That script downloaded some files and installed other dependencies we're going to need to get started. Fantastic  :ok_hand:

## Running the app

Now let's run the app to see what we have so far. From your terminal, execute one of the following commands:

    # If you're using your Android phone or iPhone
    expo start

    # To use Expo with the Android emulator
    expo android

    # To use Expo with the iOS emulator
    expo ios

    # You can also run the emulator with the React Native scripts
    react-native run-android

_Wow_. Tap yourself on the back :clap: you've just built a mobile app. Keep in mind the Expo app works best when your phone is on the same internet network as your computer.

[&uarr; back to table of contents](#table-of-contents)

# React and React Native basics
_(~5 mins)_

Open the "yakitty" folder in your fav code editor so we can have a look at the files `create-react-native-app` created for us. If you're using Visual Studio Code or Sublime Text (excellent choices!), you can pull up your editor from the terminal:

```shell
# Visual Studio Code users
code .

# Sublime Text users
subl .
```

## JSX: JavaScript & XML

There's a lot going on here. Let's start by inspecting `App.js`.

The code you see here is called [JSX](https://reactjs.org/docs/introducing-jsx.html). It's like JavaScript, but with more possiblities. It allows us to declare the "elements" we want to see and how they should appear, the same way you would do it in HTML. Except, instead of HTML elements, we use React Native components.

Try changing the sentence within the `<Text>` tags. My mind is blown too! React Native allows us to make changes and see the updates in our app in real time. Very cool.

Since we're on a mission to build something a little more useful, I'm going to skip over a few things... But I encourage you to read the excellent documentation on [JSX](https://reactjs.org/docs/introducing-jsx.html) as well as [React Native](https://facebook.github.io/react-native/docs/tutorial.html) when you have time.

# Our first components
_(~25 mins)_

React is a component-based UI framework. That means we have to think of our app in terms of components, or "parts". Messaging apps often have the following elements:

- A message list.
- Messages inside that list.
- An input to create a new mesage.

This is only an example, but keep in mind you can have your own opinion as to what "parts" make up a messaging app.

## MessageList component

Let's create a folder called `components` and create a new file called `MessageList` inside it. Keep in mind it's better to type out the code an go through the motions, but don't feel bad if you end up copy & pasting :)

```javascript
// components/MessageList.js

// We always "import" React when creating React components.
import React from 'react'

// We also import the React Native components we want to use.
// Notice the curly brackets around View and Text. This is just a different
// kind of import. Also notice that we imported from "react-native" instead of
// "react". The two are different libraries, which provide different
// functionality.
import { View, Text } from 'react-native'

// Here, we "export" a new class called MessageList. This will allow us to "import"
// it in another file, such as App.js.
export default class MessageList extends React.Component {
  // Every React component needs a "render" method. Methods are just functions
  // that belong to a class. If this sounds like gibberish, don't worry. I
  // know you'll look it up on your own time, as any good student would.
  render() {
    // Every "render" method should return something like this:
    return (
      <View>
        <Text>One bottle of beer on the wall</Text>
        <Text>Two bottles of beer on the wall</Text>
        <Text>Three bottles of beer on the wall</Text>
        <Text>Four bottles of beer on the wall</Text>
      </View>
    );
  }
}
```

TODO: explain how to import it into App.js

TODO: talk about props

Each component can receive Props. Props are basically parameters we give a Component to customize it.

## Message component

TODO: Create Message component.

```javascript
// components/Message.js

// Import the React library from "react", then import the Text and View
// components from "react-native"
import React from 'react';
import { Text, View } from 'react-native';

// A functional component that displays a message. Functional components are
// functions instead of classes. This is another way of creating components in
// React. It's simpler, but as we'll see pretty soon it's also a little
// limited in what you can do with them.
export default (props) => (
  <View>
    <Text>
      {props.text}
    </Text>
  </View>
)


// For your interest, the above is the same as:
const Message = (props) => (
  <View>
    <Text>
      {props.text}
    </Text>
  </View>
)

export default Message
```

TODO: Pass "text" as prop.

```javascript
// components/MessageList.js
import React from 'react'

// Notice we don't need to import the Text component anymore...
import { View } from 'react-native'

// ...since we're importing our own, bespoke, superior and better Message
// component. The reason we don't use curly brackets here is because we
// exported the Message component with the "default" keyword in
// "components/Message.js". If we leave the "default" out, then we'd have to
// import it using curly brackets like the View component above.
import Message from './components/Message'

export default class MessageList extends React.Component {
  render() {
    // We can now replace each <Text>...</Text> element with our own, and pass
    // the message contents as a "prop".
    return (
      <View>
        <Message text="One bottle of beer on the wall" />
        <Message text="Two bottles of beer on the wall" />
        <Message text="Three bottles of beer on the wall" />
        <Message text="Four bottles of beer on the wall" />
      </View>
    );
  }
}
```

TODO: Styling.
TODO: Flexbox.

## Input component

TODO: introduce state (variables created and controlled within a component)

```javascript
// components/MessageList.js
import React from 'react'

// Notice the extra "TextInput". I like to list components in alphabetical
// order, to make them easier to find for other developers reading my code.
import { TextInput, View } from 'react-native'

import Message from './components/Message'

export default class MessageList extends React.Component {
  render() {
    return (
      <View>
        <Message text="One bottle of beer on the wall" />
        <Message text="Two bottles of beer on the wall" />
        <Message text="Three bottles of beer on the wall" />
        <Message text="Four bottles of beer on the wall" />

        <TextInput
          placeholder="Message"
          value={null}
          onChangeText={null}
          onSubmitEditing={null}
          style={{height: 70, padding: 10}}
        />
      </View>
    );
  }
}
```

Take a break. You've earned it.

[&uarr; back to table of contents](#table-of-contents)

# Developing our components
_(~20 mins)_

TODO: final result

```javascript
// components/Message.js
import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View } from 'react-native';

/**
 * A functional component that displays a message.
 */
export default ({ sender, text, timestamp }) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      {sender} {moment(timestamp).fromNow()}
    </Text>

    <Text style={styles.message}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  name: {
    color: 'gray',
    fontSize: 12,
  },
  message: {
    fontSize: 16,
  }
});
```

```javascript
// components/MessageList.js
import React from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import Message from './Message';

/**
 * A class-based component that displays a list of messages.
 */
export default class MessageList extends React.Component {
  // The advantage of class-based components is that they can have "state".
  state = {
    messages: [],
    newMsgText: '',
  }

  addMessage = () => {
    // Retrieve new message.
    const text = this.state.newMsgText.trim();

    // Make sure the message actually has some content.
    if (text.length < 1) {
      return;
    }

    this.user.sendMessage({
      text,
      roomId: this.user.rooms[0].id
    });

    this.setState({
      newMsgText: '',
    });
  }

  renderMessage = ({ item }) => (
    <Message
      text={item.text}
      sender={item.sender}
      timestamp={item.timestamp}
    />
  )

  render = () => (
    <View style={styles.container}>
      <FlatList
        data={this.state.messages}
        renderItem={this.renderMessage}
      />

      <TextInput
        placeholder="Message"
        value={this.state.newMsgText}
        onChangeText={this.updateMessage}
        onSubmitEditing={this.addMessage}
        style={{height: 70, padding: 10}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  }
});
```

[&uarr; back to table of contents](#table-of-contents)

# APIs and Chatkit
_(~25 mins)_

- What are APIs?
- What does Chatkit provide us?
+ Create Chatkit account.
+ Create user, room, etc.
+ Install Chatkit with `yarn add @pusher/chatkit` or `npm install @pusher/chatkit`.
+ Follow quick start guide: https://docs.pusher.com/chatkit/quick_start/javascript
- Why don't we use state or props for `user` prop?

## Organizing our code

+ Pull some details into a `config.js` file.
+ Move Chatkit provider to its own file.

[&uarr; back to table of contents](#table-of-contents)

# Improving our code

You've successfully completed this tutorial. **Congrats!** There's still a lot more to learn though. This was but a _taste_ of what I know you can achieve.

- Inspect the message object received from Chatkit using `Object.keys`.
- Use a `StyleSheet` instead of style objects everywhere.
- https://facebook.github.io/react-native/docs/text#selectable
- https://yogalayout.com/

[&uarr; back to table of contents](#table-of-contents)

# Resources

- Things we saw in this tutorial:
  - React Native scripts & [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli) (command line interface).
  - [Props](https://reactjs.org/docs/components-and-props.html).
  - [State](https://reactjs.org/docs/state-and-lifecycle.html).
  - [JSX](https://reactjs.org/docs/introducing-jsx.html).
- Other React-related resources:
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html), along with the general [docs](https://reactjs.org/docs/hello-world.html).
  - [React tutorial](https://reactjs.org/tutorial/tutorial.html).
  - [React Native tutorial](https://facebook.github.io/react-native/docs/tutorial.html).
  - [React Native Express](http://www.reactnativeexpress.com) for more learning.
  - [React Native libraries, tools and tutorials](https://www.awesome-react-native.com).
  - [More React Native libraries (react.parts)](https://react.parts/?collection=React+Native)
- More excellent resources:
  - [JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/javascript) by Mozilla.
  - [Alternatives](https://alternativeto.net/software/react-native) to React Native.
  - [React 360](https://facebook.github.io/react-360) for VR applications.

[&uarr; back to table of contents](#table-of-contents)
