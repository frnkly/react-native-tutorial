# Yakitty: a chat app for everyone :point_right: [bit.ly/yakitty](http://bit.ly/yakitty)

## What's this?

>yak (verb): to talk persistently. Also, a large long-haired wild or domesticated ox :ox:

Yakitty is a simple [React Native](https://facebook.github.io/react-native) tutorial for building smooth-running Android and iOS apps using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript). If you're interested, have a look at the [requirements](https://github.com/frnkly/react-native-tutorial/blob/docs/docs/requirements.md) before getting started.

To get the most out of this tutorial, you should have a basic understanding of [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript). Knowing the basics of [React](https://reactjs.org/tutorial/tutorial.html) will be helpful too, but it's not required.

This is meant to give you a taste of what you can do with React Native. I encourage you to [read the docs](https://facebook.github.io/react-native/docs/getting-started.html) to get a more complete understanding of the framework. This is also a work in progress. Feel free to [contribute](https://github.com/frnkly/react-native-tutorial/blob/docs/docs/contributing.md) :)

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
  - [JSX: HTML in JavaScript](#jsx-html-in-javascript)
- [Creating our components](#creating-our-components)
  - [MessageList component](#messagelist-component)
  - [Message component](#message-component)
  - [Input component](#input-component)
  - [Restructuring our components](#restructuring-our-components)
- [Using state](#using-state)
- [Integrating Moment.js](#integrating-momentjs)
- [APIs and Chatkit](#apis-and-chatkit)
  - [Creating a Chatkit account](#creating-a-chatkit-account)
  - [Integrating Chatkit](#integrating-chatkit)
  - [Improving our UI](#improving-our-ui)
  - [Hiding developer secrets](#hiding-developer-secrets)
- [Conclusion & Comments](#conclusion--comments)
- [Bonus material](#bonus-material)
- [Resources](#resources)

# First things first
_(~10 mins)_

## What are we building?

We're going to build an Android or iOS app _with our bear hands_ :bear:—in three hours or so.

## What will we learn?

We're going to use renowned libraries such as [React](https://reactjs.org) in order to become renowned developers. We'll also learn how to integrate 3rd party APIs and organize our codebase the way master code crafters do.

## What is React Native?

[React Native](https://facebook.github.io/react-native) is a framework built on [React](https://reactjs.org) for building native mobile apps using only JavaScript. Native means your app will look and feel like any real app that was written in Java or Objective-C, the languages for developing Android and iOS apps.

This is different from tools like [PhoneGap](https://phonegap.com) or [Ionic](https://ionicframework.com) which create apps that run in your phone's "Web View" (or browser). But it _is_ similar to frameworks such as [NativeScript](https://www.nativescript.org) or [Flutter](https://flutter.io).

## What you'll need

Did you skip the [requirements](https://github.com/frnkly/react-native-tutorial/blob/docs/docs/requirements.md) page? Here's the CliffsNotes version:

- A computer (Windows, Mac or Linux).
- A [code editor](https://alternativeto.net/software/sublime-text) such as [Visual Studio Code](https://code.visualstudio.com) or [Sublime Text](https://sublimetext.com).
- If you're on Windows, I recommend getting the [Cmder](http://cmder.net) console emulator.
- [Node](https://nodejs.org/en) and [Expo](https://docs.expo.io/versions/latest/introduction/installation)
- An Android phone (4.4+) or iPhone (iOS 9+) with the Expo Client app installed.

I'll even provide you these QR codes for your convenience, so you don't have to search for the app in the Play Store/App Store. Just point your camera and download the app:

<table>
  <tr>
    <td align="center">Expo for Android</td>
    <td align="center">Expo for iOS</td>
  </tr>
  <tr>
    <td align="center">
      <a target="_blank" href="https://play.google.com/store/apps/details?id=host.exp.exponent">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/docs/docs/qr-code-expo-android.png" />
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://itunes.apple.com/us/app/expo-client/id982107779">
        <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/docs/docs/qr-code-expo-ios.png" />
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

Know that you're supposed to type that into your terminal and press `enter` or `return`. Any line that starts with a `#` is simply a comment. You don't need to type that in.

Now, let's check our setup. Open your terminal and run the following commands:

```shell
# Check that Node is installed and working
node --version

# Check that NPM is installed and working
npm --version

# Check that Expo is installed and working
expo --version

# Login to Expo (not required)
expo login
```

It's OK to copy and paste from this tutorial, but it's a good idea type out code for yourself to better grasp the material.

[&uarr; back to table of contents](#table-of-contents)

# Getting started
_(~5 mins)_

Now that you've mastered the terminal _like a champ_, it's time to get our hands dirty with some code. We'll start from a clean slate and build everything from the ground up. From your terminal, change directories using the `cd` command into a folder where you want to keep all of your code. I like to keep my code in `~/Code` on Mac/Linux, and in `C:\Projects` on Windows, but that's up to you.

```shell
# Change directories into your projects folder.
cd ~/Code

# Create a new React Native project called "yakitty". If you're asked to choose
# a template, pick the blank one by pressing enter/return.
npx create-react-native-app yakitty

# Change directories into the newly created "yakitty" folder.
cd yakitty
```

If you get the message `Do you want to install it globally [Y/n]?` simply type in `y` and then press `enter` or `return`. If you're asked to choose a template, pick the blank one.

If you get "write errors", this might have something to do with how you installed Node. You can try again by adding `sudo` before the `npx ...` command, although I recommend you reinstall Node instead.

```shell
# Not recommended, but can get you started quickly
sudo npx create-react-native-app yakitty
```

We've just used the `npx` command provided by NPM to run a helpful script (`create-react-native-app`) written by the good people at React Native. That script downloaded some files and installed other dependencies we're going to need to get started. Fantastic  :ok_hand:

[&uarr; back to table of contents](#table-of-contents)

## Running the app

Now let's run the app to see what we have so far. From your terminal, execute one of the following commands:

    # If you're using your Android phone or iPhone. Don't forget to open the Expo app on your phone.
    expo start

    # To use Expo with the Android emulator.
    expo android

    # To use Expo with the iOS emulator.
    expo ios

    # You can also run the emulator with the React Native scripts.
    react-native run-android

You can use the camera on your phone to point at the QR code that just appeared in your browser. It will open the Expo app on your phone _automagically_.

_Wow_. Tap yourself on the back :clap: you've just built a mobile app. Keep in mind the Expo app works best when your phone is on the same WiFi network as your computer.

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

# Creating our components
_(~25 mins)_

React is a component-based UI framework. That means we have to think of our app in terms of components, or "parts". Messaging apps often have the following elements:

- A message list.
- Messages inside that list.
- An input to create a new message.

This is only an example, but keep in mind you can have your own opinion as to what "parts" make up a messaging app.

[&uarr; back to table of contents](#table-of-contents)

## MessageList component

Let's create a folder called `components` and create a new file called `MessageList.js` inside it. This is going to be our very first component. Keep in mind it's better to type out the code an go through the motions, but don't feel bad if you end up copy & pasting :)

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
    // Every "render" method should return some JSX like this:
    return (
      <View>
        <Text>One bottle of beer on the wall</Text>
        <Text>Two bottles of beer on the wall</Text>
        <Text>Three bottles of beer on the wall</Text>
      </View>
    );
  }
}
```

In `App.js`, we'll _import_ our new component `MessageList` so we can actually use it. We do that using the `import` statement like this:

```javascript
// App.js

// Add this line right after the "import React" line in App.js. We simply need
// to specify the path to the component. Notice we don't need to add ".js".
// This is just how imports work in React, or more specifically,
// Babel (babeljs.io).
import MessageList from './components/MessageList'
```

All we've done is tell React to bring in the component we've created into our `App.js` file. If you'd like to read more about `import` statements, Mozilla has some [great documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) available for free. We can now use our brand new component inside `App.js` to replace the `<Text>` elements we already have:

```javascript
// App.js

import React from 'react';

// Since we're replacing the Text components with our MessageList, we don't need
// to import it anymore. It's good practice to only import the components you're
// actually using.
import { StyleSheet, View } from 'react-native';

import MessageList from './components/MessageList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MessageList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

[&uarr; back to table of contents](#table-of-contents)

## Message component

We'll move on to our next component. Create a file `Message.js` in the `components` folder. This component will be responsible for displaying a single message. As you might have guessed, we're going to be replacing the `<Text>` components in `<MessageList>` with the one we're creating right now.

For now, all that component will do is render some text:

```javascript
// components/Message.js

// Import the React library from "react", then import the Text and View
// components from "react-native"
import React from 'react';
import { Text, View } from 'react-native';

// This time, we'll create a "functional" component. Functional components are
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
```

If you're paying attention, you'll notice we're doing things a little differently here. First, we created a _functional_ component instead of a _class_ component. It's up to you how you want to define your components. Functional components usually look simpler, whereas class components offer a little more flexibility.

If you took the time to type out the code for yourself, you probably also noticed the `props` object. Props are parameters that allow us to customize a component. Any component can receive Props.

In our case, the `<Message>` component expects to receive a `text` prop from its parent (the parent will be the `<MessageList>` component, we'll get to that soon). This allows us to reuse the same component regardless of the content of the message. _This is the strength of React:_ reusing UI components in different contexts.

But enough theory. Let's import our new `<Message>` component into `<MessageList>` to see how we can pass down the `text` prop:

```javascript
// components/MessageList.js
import React from 'react'

// Notice we don't need to import the Text component anymore...
import { View } from 'react-native'

// ...since we're importing our own, bespoke, superior and better Message
// component. The reason we don't use curly brackets here is because we
// exported the Message component with the "default" keyword in
// "components/Message.js". If we leave the "default" out, then we'd have to
// import it using curly brackets like the View component above. Also notice
// that we import from "./Message" and not from "./components/Message". That's
// because the <Message> component is in the same folder as <MessageList>.
import Message from './Message'

export default class MessageList extends React.Component {
  render() {
    // We can now replace each <Text>...</Text> element with our own, and pass
    // the message contents as a "prop" called "text". This is similar to how
    // attributes work in HTML or XML.
    return (
      <View>
        <Message text="One bottle of beer on the wall" />
        <Message text="Two bottles of beer on the wall" />
        <Message text="Three bottles of beer on the wall" />
      </View>
    );
  }
}
```

_You're looking pretty good_.

[&uarr; back to table of contents](#table-of-contents)

## Input component

Our last component will handle user input, and allow users to write new messages to our app. Thankfully, React Native conveniently provides us with a `<TextInput>` component we can use instead of having to create our own. It [expects a few props](https://facebook.github.io/react-native/docs/textinput.html), including:

Expected prop | What it does
---- | ----
`placeholder` | The text to show before a user starts typing.
`value` | The text the user has entered.
`onChangeText` | A function that will be called whenever the text changes.
`onSubmitEditing` | A function that will be called once the user sends a new message.

We'll go into more detail a little later when we talk about _state_, but for now we can integrate it and pass in `null` values where we don't know what to put yet:

```javascript
// components/MessageList.js

import React from 'react'
import { TextInput, View } from 'react-native'

import Message from './components/Message'

export default class MessageList extends React.Component {
  render() {
    return (
      <View>
        <Message text="One bottle of beer on the wall" />
        <Message text="Two bottles of beer on the wall" />
        <Message text="Three bottles of beer on the wall" />

        <TextInput
          placeholder="What's on your mind?"
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

[&uarr; back to table of contents](#table-of-contents)

## Restructuring our components

Now that you have a little more experience with React, let's restructure, or _refactor_ our components. As it is, our messages are _hard-coded_ into the `<MessageList>` component. But we already know we want this part of our app to be dynamic.

Instead of hard-coding the `<Message>` components, we'll create an _array_ and loop through that array. This way, whatever is in that array is what will get displayed:

```javascript
// Create an array of messages inside the render() function, but before the
// "return" statement. I suggest making this an array of objects, so we can
// add more properties later such as the sender's name.
const messages = [
  {
    text: 'One bottle of beer on the wall',
  },
  {
    text: 'Two bottles of beer on the wall',
  },
  {
    text: 'Three bottles of beer on the wall',
  },
];
```

We can then loop, or "map" through the array in JSX like so:

```javascript
return (
  <View>
    {messages.map(msg => (
      <Message text={msg.text} />
    ))}

    <TextInput
      placeholder="What's on your mind?"
      value={null}
      onChangeText={null}
      onSubmitEditing={null}
      style={{ height: 70, padding: 10 }}
    />
  </View>
);
```

If all goes well, you're messages should still be visible. You'll also get a warning:

>Each child in an array or iterator should have a unique "key" prop.

React is an efficient framework: anytime a UI change happens in your app, only those components that have changed will get "re-rendered". This saves on memory and helps make your app run faster. To help React do its job, it needs to know which element in the array is which, so it can decide what changed and what does not need to be re-rendered. We'll simply make up fake unique IDs for now. Here's a truncated version of what your `MessageList.js` should look like:

```javascript
// components/MessageList.js

// ... your other imports

export default class MessageList extends React.Component {
  render() {
    // Array of objects. Each object represents a message, with an "id" and
    // "text" property. These will correspond to the "key" and "text" prop of the
    // <Message> component.
    const messages = [
      {
        id: 1,
        text: 'One bottle of beer on the wall',
      },
      {
        id: 2,
        text: 'Two bottles of beer on the wall',
      },
      {
        id: 3,
        text: 'Three bottles of beer on the wall',
      },
    ];

    return (
      <View>
        {messages.map(msg => (
          <Message key={msg.id} text={msg.text} />
        ))}

        {/* ... your <TextInput> component ... */}

        {/* By the way: this is how you write comments in JSX. Neat, eh? */}
      </View>
    );
  }
}
```

So now we have a dynamic `<MessageList>` component. Sweet. But our app doesn't really look like your typical chat app, does it? You might have noticed the `styles` object in `App.js` and thought to yourself _I wonder if I can use that to add colours and stuff_. In fact, we can. I'll leave it up to you to [explore the possibilities](https://facebook.github.io/react-native/docs/style.html), but let's at least define some basic styles for ourselves.

Try changing the `alignItems` property in the `styles` object in `App.js` to `stretch`, and using a [different value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value) for the `backgroundColor`:

```javascript
// App.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornsilk',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
```

If you're dying to know, _cornsilk_ is the long shiny fibers on corn that gets stuck in your teeth when you eat it. _How annoying_... Let's also create the same type of style object for the `<MessageList>` component:

```javascript
// components/MessageList.js

import React from 'react'

// Add an import for "StyleSheet"
import { StyleSheet, TextInput, View } from 'react-native'

import Message from './Message'

export default class MessageList extends React.Component {
  render() {
    const messages = [ ... ];

    // Add a style property to the main <View> component
    return (
      <View style={styles.container}>
        {/* ... */}
      </View>
    )
  }
}

// At the end of the file, add:
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  }
});
```

We're already looking better, but I'm not satisfied. Chat apps usually have the name of the sender, and sometimes even the time a message was sent at. Yakitty will be no lesser. Let's use our newfound knowledge to refactor our `<Message>` component to display this information.

What we'll do is add a `<Text>` component to encapsulate the sender and time details, then use another `<Text>` component for the message contents. This will allow us to style each one individually:

```javascript
// components/Message.js

// ... your imports

// Let's add two new props: "sender" and "timestamp". We'll have to update our
// <MessageList> component to pass down those props as well. Notice that we've
// also "destructured" the "props" argument. Destructuring in JavaScript allows
// us to specify what properties we expect more explicitly. So, instead of
// having (props) as an argument we now have ({ sender, text, timestamp }), and
// instead of using "props.text" to get the message contents we'll simply use
// "text" without the "props." before it.
export default ({ sender, text, timestamp }) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      {sender} {timestamp}
    </Text>

    <Text style={styles.message}>
      {text}
    </Text>
  </View>
)

// Don't forget to import the "StyleSheet" component too.
const styles = StyleSheet.create({
  // Styles for our component container (which is a <View> component)
  container: {
    padding: 10,
  },

  // Styles for the "name" <Text> component
  name: {
    color: 'gray',
    fontSize: 12,
  },

  // Styles for the "message" <Text> component
  message: {
    fontSize: 16,
  }
})
```

Finally, let's update our `<MessageList>` component to pass on the extra information to the `<Message>` components (sender and timestamp):

```javascript
// components/MessageList.js

// ...

// Our new messages array
const messages = [
  {
    id: 1,
    sender: 'Claudia Sousa Arteaga',
    text: 'One bottle of beer on the wall',
    timestamp: '1 months ago',
  },
  {
    id: 2,
    sender: 'Ama Addai',
    text: 'Two bottles of beer on the wall',
    timestamp: '3 mins ago',
  },
  {
    id: 3,
    sender: 'Masimo Zlatković',
    text: 'Three bottles of beer on the wall',
    timestamp: '1 min ago',
  },
];

// Make sure to pass on the new props to the <Message> component, e.g.
// <Message key={msg.id} sender={msg.sender} text={msg.text} ... />
```

Now we're _looking good_. Great work. Now that we have our basic components, **go ahead a take a short break**. You've earned it!!

[&uarr; back to table of contents](#table-of-contents)

# Using state
_(~20 mins)_

We're moving pretty fast, but that's intended. Our goal is to get an overview of what React Native can do, so don't worry if you're not getting all the concepts right away. We'll keep linking to great resources on the web whenever we introduce a new concept, so you can look it up in more detail at your own pace later.

The time has come to introduce another important concept in React called _state_. State variables are created and updated within a component. This is different from _props_, which are passed down from a parent component. In other words:

- Props are _immutable_: they are **never** changed by the component.
- State is _mutable_: it is created and updated by the component.

An analogy you can use for _props_ are your genes. These were passed down to you from your parents—nothing you can do about it. Likewise, your thoughts, dreams and your ambitious are more like _state_. You decide what they are, and you can choose to change them whenever you like.

In our case, we're going to use state to handle a user's message input. The general idea to keep in mind is:

- `<MessageList>` knows all the messages currently displayed.
- It also knows what new message the user is typing.

Because `<MessageList>` is "aware" and responsible for those two details, it cannot be passed down from a parent component. And it makes sense for `<MessageList>` to be the one to deal with the list of messages, since it has to display them anyways (remember our loop?).

This is where state comes in: state is how `<MessageList>` can "know" or "remember" all the messages that have been posted. Let's see how that works:

```javascript
// components/MessageList.js

// ... imports

export default class MessageList extends React.Component {
  // This is how we "initialize" state in a React component. All we do is
  // declare an object with the properties we need. In our case, "messages" is
  // an array of messages to be displayed, and "newMsgText" is the message
  // currently being typed by the user. By using state instead of props in this
  // case we're saying that the <MessageList> component should handle these two
  // bits of information, *and no one else*.
  //
  // On a side note, because of how state is defined in React, we wouldn't be
  // able to do this in a functional component like <Message>. That's one
  // benefit of using class-based components.
  state = {
    messages: [
      {
        id: 1,
        sender: 'Claudia Sousa Arteaga',
        text: 'One bottle of beer on the wall',
        timestamp: '1 months ago',
      },
      {
        id: 2,
        sender: 'Ama Addai',
        text: 'Two bottles of beer on the wall',
        timestamp: '3 mins ago',
      },
      {
        id: 3,
        sender: 'Masimo Zlatković',
        text: 'Three bottles of beer on the wall',
        timestamp: '1 min ago',
      },
    ],
    newMsgText: '',
  }

  render() {
    // Instead of the array we had defined earlier, we will use the messages
    // defined in our state. You can copy/paste that array above to see the same
    // messages.

    return (
      <View style={styles.container}>
        {/* Notice how we access variables inside our state */}
        {this.state.messages.map(msg => (
          <Message
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}

        {/* We can also update the "value" prop on the <TextInput> */}
        <TextInput
          placeholder="What's on your mind?"
          value={this.state.newMsgText}
          onChangeText={null}
          onSubmitEditing={null}
          style={{ height: 70, padding: 10 }}
        />
      </View>
    );
  }
}
```

Save your changes and make sure the app is behaving the same way.

To show how state works, let's create our _handler functions_, the ones that will be used in for the `onChangeText` and `onSubmitEditing` props:

```javascript
// components/MessageList.js

// ... imports

export default class MessageList extends React.Component {
  state = {
    messages: [ ... ],
    newMsgText: '',
  }

  /**
   * This method (or function) will update the "newMsgText" state variable
   * anytime the user types a character. This will allow us to always be
   * aware of the message being typed.
   *
   * We use "this.setState" to update a state variable. This is important to
   * remember: *never* update the state directly, as this will cause you
   * headaches. See the docs for more details:
   * https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly
   */
  updateMessage = (newMsgText) => this.setState({ newMsgText });

  /**
   * This method (or function) will add new messages to the chat history.
   */
  addMessage = () => {
    // Retrieve new message from state. We use "trim" to remove whitespace
    // that might be dangling at the beginning or end of the message.
    const text = this.state.newMsgText.trim();

    // If the message doesn't actually have any content, return and exit early.
    // It's always good practice to avoid doing useless work, so that our app
    // isn't wasting the phone's resources.
    if (text.length < 1) {
      return;
    }

    // "console.log" writes messages to your terminal. This is useful for
    // debugging or just understanding what's happening "under the hood".
    console.log('Yakitty yak yak:', text)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.messages.map(msg => (
          <Message
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}

        <TextInput
          placeholder="What's on your mind?"
          value={this.state.newMsgText}
          onChangeText={this.updateMessage}
          onSubmitEditing={this.addMessage}
          style={{ height: 70, padding: 10 }}
        />
      </View>
    );
  }
}
```

Save your changes, open your terminal and type out a new message in your app (try "Hello"). Once you submit the message, your terminal should output something like:

>Yakitty yak yak: Hello

Not bad, grasshopper. Not bad :)

Let's finish by actually adding the new message instead of outputting it to the console. Replace the `console.log` line with:

```javascript
// components/MessageList.js

// Create a JavaScript Date object.
const currentDate = new Date();

// Build a new message object, using the new message text.
const newMsg = {
  id: currentDate.getTime(),
  sender: 'frnkly',
  text: text,
  timestamp: currentDate.getTime(),
}

// Append the new message object to the list of messages in state. Notice that
// we're using the "spread" operator (the 3 dots) to get all the messages, just
// to put them back into a new array. We do this because we do not want to
// change the state directly, *ever*. We don't want to use something like
// "this.state.messages.push(newMsg)" as that would change, or "mutate" our
// state directly. Which we've already agreed we would never do.
this.setState({
  messages: [...this.state.messages, newMsg],

  // We also reset "newMsgText" to an empty string.
  newMsgText: '',
})
```

That's it. That's how state works. If you're still confused, I invite you to check out React Native's [awesome docs](https://reactjs.org/docs/state-and-lifecycle.html) about state and how it connects to everything else.

[&uarr; back to table of contents](#table-of-contents)

## Integrating Moment.js

At this point, your app should look something like this:

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/docs/docs/48624f.jpg" />
</p>

Pretty cool. Except for those random numbers showing up next to the sender's name. If you've developed with JavaScript before, you might already be familiar with [Moment.js](https://momentjs.com), a library for easily formatting dates and times. The great thing about building mobile apps with JavaScript is that you can reuse a lot of the stuff you already know from making kick-ass web apps.

Head back to your terminal and stop your dev environment using `ctrl+c` or `cmd+c`. You should still be in the `yakitty` folder. From there, run the following commands to install Moment.js:

```shell
# This will install Moment.js using NPM.
npm install moment --save

# Or, if you'd rather use Yarn:
yarn add moment

# If there are no errors, re-launch your app with "expo start" or which ever
# command you had first used.
expo start
```

Moment.js also has some great [documentation](https://momentjs.com/docs) which I invite you to read when you get a chance, but to save time I'll share you something cool we can do with it right now.

In the `<MessageList>` component, let's remove the default messages as we don't need them anymore. In other words, `messages` should be an empty array `[]`. Then, in the `<Message>` component, we can replace `{timestamp}` with `{moment(timestamp).fromNow()}` to get the elapsed time since the message was posted:

```javascript
// components/Message.js

// ... React and React Native imports

// Import Moment.js
import moment from 'moment'

// Format the "timestamp" using Moment.
export default ({ sender, text, timestamp }) => (
  <View style={styles.container}>
    <Text style={styles.name}>
      {sender} {moment(timestamp).fromNow()}
    </Text>

    {/* ... */}
  </View>
)

// ...
```

Voilà! Yakitty is now a professional-looking chat app :raised_hands:

[&uarr; back to table of contents](#table-of-contents)

# APIs and Chatkit
_(~25 mins)_

Before we move further, I want to congratulate you for making it this far. Building an app is not easy, but you've shown guts and patience in pushing through until the end. _Bravo!_

We're going to introduce the last concept for this tutorial, which unlike the other concepts has broad applications in all kinds of software development. APIs are the glue that sticks programs together. They allow you to backup your iPhone (a piece of software) to iCloud (another piece of software). They allow you to sign up on websites using your Facebook or Google account. They allow your smart devices to interact with each other.

APIs provide an _interface_ (the "I" in API) between _apps_ or _applications_ (the "A" in API) for them to communicate with each other.

Just like Messenger or Slack, our app needs to store data in the cloud, or on _servers_, and manage chat histories, users, and so on. Thankfully, Chatkit provides an API to help us manage all of that. _Fiou!_

[&uarr; back to table of contents](#table-of-contents)

## Creating a Chatkit account

Install Chatkit with `yarn add @pusher/chatkit` or `npm install @pusher/chatkit --save`, the same way we installed Moment.js earlier.

If you're following along in a workshop, then for the sake of the event we'll all use the same Chatkit account. Just choose a username and add it to this list: [bit.ly/yakitty-users](http://bit.ly/yakitty-users). This way we'll all be in the same chat room. In a real app, you would definitely create your own account and have users sign up or sign in through your user interface.

If you're following this tutorial on your own time _like a trooper_, I invite you to create an account on [Pusher](https://pusher.com/chatkit) so you can use their API for free. **The following steps are optional if you're following along in a workshop**.

- Create Chatkit account.
- Create user, room, etc.
- Follow the quick-start guide: https://docs.pusher.com/chatkit/quick_start/javascript

[&uarr; back to table of contents](#table-of-contents)

## Integrating Chatkit

In a new tab in your browser, open Chatkit's [quick-start guide](https://docs.pusher.com/chatkit/quick_start/javascript) to understand how their API works.

To use their API we'll need a Chatkit instance, an instance locator, some users, a chat room, and a token provider. It might sound like a lot, but the docs are relatively easy to follow if you go through them step by step.

To help us stay organized in our code, we'll create a "chat manager" that will handle the [initialization](https://docs.pusher.com/chatkit/quick_start/javascript#initialise-chatkit) steps for us. This way, most of the Chatkit setup will be isolated to one file. This is standard practice and usually a good idea. Create a file called `chatManager.js` in the root of your project and add the sample code from the Chatkit docs in it:

```javascript
// chatManager.js

// Import the Chatkit library.
import Chatkit from '@pusher/chatkit'

// Chatkit's sample code.
const tokenProvider = new Chatkit.TokenProvider({
  url: "YOUR TEST TOKEN ENDPOINT"
})

const chatManager = new Chatkit.ChatManager({
  instanceLocator: "YOUR INSTANCE LOCATOR",
  userId: "YOUR USER ID",
  tokenProvider: tokenProvider
})

// The default export for this file. This allows us to import it in
// components/MessageList.js using the "import chatManager from ..." syntax.
export default chatManager
```

You can replace "YOUR USER ID" with your own username. We'll also need to replace `url` and `instanceLocator` with the proper values. Notice that we didn't need to import React. We only need to import it when creating React components (which the Chat Manager is not).

In the `<MessageList>` component, let's import our Chat Manager and start using it. At the top, add:

```javascript
// components/MessageList.js

// The Chat Manager. The two dots mean "go up one folder to find this file".
import chatManager from '../chatManager';
```

We'll then use our first [lifecycle method](https://reactjs.org/docs/state-and-lifecycle.html). Lifecycle methods are functions that get called automatically by React during the "life" of a component--that is, from being rendered to being updated and finally being removed from the UI.

The Chatkit docs explain that [connecting to the API](https://docs.pusher.com/chatkit/quick_start/javascript#connect-to-chatkit) involves [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). All this means is that connecting to Chatkit is an _asynchronous_ action. All _that_ means is that when we tell our code to connect to Chatkit, it won't do it right away. This is the equivalent of your mother asking you for $5, and you giving her an "[I.O.U](https://en.wikipedia.org/wiki/IOU)" instead of giving her the money right on the spot.

In React, asynchronous code should usually go in the `componentDidMount` lifecycle method. This helps React stay efficient and avoid unexpected behaviour in our app. Here's how we can use it to include Chatkit's sample code:

```javascript
// components/MessageList.js

// ... imports

export default class MessageList extends React.Component {
  state = {
    messages: [],
    newMsgText: '',
  }

  // The Chatkit user object.
  user;

  // The Chatkit room object.
  room;

  /**
   * Our "componentDidMount" lifecycle. This gets called by React automatically
   * whenever this component has been rendered to the screen. Notice the "async"
   * keyword. That's how we create "asynchronous" functions in JavaScript.
   */
  componentDidMount = async () => {
    // We'll use what's called a "try-catch block" to wrap Chatkit's sample code.
    try {
      // Connect to the Chatkit API.
      this.user = await chatManager.connect();

      // Subscribe to the main room.
      this.room = await this.user.subscribeToRoom({
        roomId: this.user.rooms[0].id,
        hooks: {
          onNewMessage: null,
        }
      });
    } catch (error) {
      // If anything bad happened, avoid the scary red error screen, but log
      // the error to the console.
      console.error(error);
      console.error('Could not connect to Chatkit API.');
    }
  }

  render() {
    // ..
  }
}

// ...
```

You'll notice the "try-catch block" around Chatkit's sample code. We don't necessarily expect anything bad to happen here, but if something goes wrong, we want to avoid showing a big red error screen to the user. Reasons why this could go wrong include a bad WiFi connection, Chatkit going down, etc.

You'll also notice the `await` keyword. We use "await" when we want to wait for an asynchronous function to complete, instead of dealing with a "Promise". This is like your mother saying "No worries, child. I'll wait for you to come up with the $5. I'll wait right here." Awkward :/

You might be asking yourself why I decided to make the `user` and `room` properties of the `MessageList` class, instead of using _props_ or _state_. It's rare you'll have to do this in React, but as you can see from the Chatkit docs we'll need to use those variables later in our code.

Making them _props_ would mean passing them down from the parent component (in this case `App.js`) which doesn't apply in this case. Adding them to our _state_ would imply we might want to update them later in our code, which is also not the case. `user` and `room` are basically _constants_ whose values aren't known until we successfully connect to the Chatkit API.

If you've followed all the instructions so far, you should see this beautiful screen:

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/docs/docs/9cdba4.jpg" />
</p>

Developing in JavaScript means learning to read sometimes cryptic error messages. Let's have a closer look:

>expected onNewMessage to be of type function but was of type object

Can you spot our mistake? I admit it: I modified the Chatkit sample code to introduce an error. `onNewMessage` in our code should refer to a function, and not to `null`. For now, replace `null` with:

```javascript
msg => console.log('received new yak: ', Object.keys(msg))`
```

This will allow us to see what Chatkit sends us when a user sends a message. Now head to your Chatkit dashboard and find your Instance Inspector, and click on "Add message to room" to inspect the output in your terminal. You should see something like this:

```shell
[20:30:51] received new yak:  Array [
[20:30:51]   "id",
[20:30:51]   "senderId",
[20:30:51]   "roomId",
[20:30:51]   "text",
[20:30:51]   "attachment",
[20:30:51]   "createdAt",
[20:30:51]   "updatedAt",
[20:30:51]   "userStore",
[20:30:51]   "roomStore",
[20:30:51] ]
```

Aha! So anytime we receive a new message, we know we'll have access to these keys. The ones that matter to us are `id`, `senderId`, `text` and `createdAt`. Let's create a handler method called `handleReceiveMessage`, and pass that on to `onNewMessage`:

```javascript
// components/MessageList.js

// After the "componentDidMount" method, but before the "updateMessage" one,
// let's create a new method "handleReceiveMessage" that will handle new
// messages coming from the Chatkit API.
handleReceiveMessage = (msg) => {
  // Our newMessage object. This should match the objects inside the "messages"
  // array in our state, because we will append it to that same array. By using
  // console.log and inspecting the object keys inside "msg", we know that we
  // can use the properties "text", "senderId", "createdAt" and "id".
  const newMessage = {
    text: msg.text,
    sender: msg.senderId,
    timestamp: msg.createdAt,

    // "msg.id" will be a number, but React expects "id" to be a string. This
    // is an easy way to make sure it's always a string when we use it as the
    // "key" attribute on JSX components.
    id: `${msg.id}`,
  };

  // This is another, safer way of updating the state. You can either try this
  // or use the other way we used for updating "newMsgText" inside
  // "updateMessage".
  this.setState(oldState => ({
    messages: [...oldState.messages, newMessage],
  }));
}
```

Don't forget to replace `msg => console.log('received new yak: ', Object.keys(msg))`
with `this.handleReceiveMessage`.

We'll also update our `addMessage` method to send new messages to Chatkit
instead of only storing it in our local state. Inside `addMessage`, replace:

```javascript
this.setState({
  messages: [...this.state.messages, newMsg],
  newMsgText: '',
})
```

with:

```javascript
this.user.sendMessage({
  text,
  roomId: this.user.rooms[0].id
})

this.setState({
  newMsgText: '',
})
```

We can also get rid of the `currentDate` and `newMsg` variables inside `addMessage`.

Your `<MessageList>` component should now look something like this:

```javascript
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import Message from './Message'
import chatManager from '../chatManager'

export default class MessageList extends React.Component {
  state = {
    messages: [],
    newMsgText: '',
  }

  // The Chatkit user object.
  user;

  // The Chatkit room object.
  room;

  componentDidMount = async () => {
    try {
      // Connect to the Chatkit API.
      this.user = await chatManager.connect()

      // Subscribe to the main room.
      this.room = await this.user.subscribeToRoom({
        roomId: this.user.rooms[0].id,
        hooks: {
          onNewMessage: this.handleReceiveMessage,
        }
      })

      console.log("We're connected to Chatkit! ᓩ")
    } catch (error) {
      // If anything bad happened, avoid the scary red error screen, but log
      // the error to the console.
      console.error(error)
      console.error('Could not connect to Chatkit API.')
    }
  }

  handleReceiveMessage = (msg) => {
    // Build a new message object.
    const newMessage = {
      text: msg.text,
      sender: msg.senderId,
      timestamp: msg.createdAt,
      id: `${msg.id}`,
    };

    // Update the state safely.
    this.setState(oldState => ({
      messages: [...oldState.messages, newMessage],
    }));
  }

  /**
   * Updates the current message being typed by the user.
   */
  updateMessage = (newMsgText) => this.setState({ newMsgText });

  /**
   * Adds new messages to the chat history.
   */
  addMessage = () => {
    // Retrieve new message from state.
    const text = this.state.newMsgText.trim();

    // If the message doesn't actually have any content, return and exit early.
    if (text.length < 1) {
      return;
    }

    // Send the new message to Chatkit.
    this.user.sendMessage({
      text,
      roomId: this.user.rooms[0].id
    })

    // Reset the newMsgText in our state.
    this.setState({
      newMsgText: '',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.messages.map(msg => (
          <Message
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            timestamp={msg.timestamp}
          />
        ))}

        <TextInput
          placeholder="What's on your mind?"
          value={this.state.newMsgText}
          onChangeText={this.updateMessage}
          onSubmitEditing={this.addMessage}
          style={{ height: 70, padding: 10 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  }
})
```

[&uarr; back to table of contents](#table-of-contents)

## Improving our UI

React Native provides a [plethora of components](https://facebook.github.io/react-native/docs/components-and-apis) that are optimized for mobile apps. I encourage you to check them out whenever you want to create a new component. Chances are, what you're looking for has already been created for you.

There are two useful components we can use right now for displaying a list of chat messages: [`<KeyboardAvoidingView>`](https://facebook.github.io/react-native/docs/keyboardavoidingview) and [`<FlatList>`](https://facebook.github.io/react-native/docs/flatlist.html). The former keeps our `<TextInput>` from being hidden when too many messages are displayed, and the latter is simply an efficient list that only renders the visible messages, among other features. Here's how we can use them:

```javascript
// components/MessageList.js

// Updated import
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
} from 'react-native'

// Updated handleReceiveMessage() method
handleReceiveMessage = (msg) => {
  // Notice that "id" is now called "key", so that it can work nicely with
  // the <FlatList> component.
  const newMessage = {
    text: msg.text,
    timestamp: msg.createdAt,
    sender: msg.senderId,
    key: `${msg.id}`,
  };

  this.setState(oldState => ({
    messages: [...oldState.messages, newMessage],
  }));
}

// New method on MessageList class to be used with the <FlatList> component.
renderMessage = ({ item }) => (
  <Message
    text={item.text}
    sender={item.sender}
    timestamp={item.timestamp}
  />
)

// Updated render() method, which uses <KeyboardAvoidingView> and <FlatList>.
render() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled
    >
      <FlatList
        data={this.state.messages}
        renderItem={this.renderMessage}
      />

      <TextInput
        placeholder="What's on your mind?"
        value={this.state.newMsgText}
        onChangeText={this.updateMessage}
        onSubmitEditing={this.addMessage}
        style={{ height: 70, padding: 10 }}
      />
    </KeyboardAvoidingView>
  );
}
```

[&uarr; back to table of contents](#table-of-contents)

## Hiding developer secrets

Our Chat Manager provides conveniently hides the Chatkit setup from the rest of our code. But sometimes when working with other developers or when sharing your code on [Github](https://github.com), you'll want to keep some things private, such as the `tokenProvider`'s `url` or your `instanceLocator`.

It's common practice to put sensitive info inside a `config.js` file, and then set those details from the environment or by other means. Here's what a configuration file might look like:

```javascript
// config.js
/**
 * This file contains all the configuration options we'll need.
 * By grouping them here, we make them easy for anyone to find
 * and also for us to reuse throughout our app.
 *
 * Note that, because this is not a React or React Native component,
 * there's no need to import React from 'react'.
 */
export default {
  // This could be a string, or some environment variable which would be
  // retrieved at build time. Fancy stuff.
  instanceLocator: '',

  // The test token provider URL allows us to authenticate with Chatkit
  // without having to implement any login flows. This is only good
  // for testing.
  testTokenProviderUrl: '',

  // This is the user we will use to authenticate with. In a real app,
  // we would have a login page to retrieve this info.
  testUserId: 'frnkly',
}
```

Then, you could update `chatManager.js` to look something like this:

```javascript
import Chatkit from '@pusher/chatkit'

import config from './config.js'

const tokenProvider = new Chatkit.TokenProvider({
  url: config.testTokenProviderUrl,
});

const chatManager = new Chatkit.ChatManager({
  instanceLocator: config.instanceLocator,
  userId: config.testUserId,
  tokenProvider: tokenProvider
});

export default chatManager
```

[&uarr; back to table of contents](#table-of-contents)

# Conclusion & Comments

You've successfully completed this tutorial. **Congrats!** There's still a lot more to learn though. This was but a _taste_ of what I know you can achieve.

If you have 3 minutes to spare, **I'd love to hear your feedback** on this tutorial. I `await` your comments and I `Promise` to read them all eventually...

:point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback) :v:

# Bonus material

TODO: create bonus material

- Publishing to the Play Store/App Store.
- Localization.
- Integrating layout libraries, e.g. yogalayout.com

Have any requests? Let me know :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)

[&uarr; back to table of contents](#table-of-contents)

# Resources

- Things we saw in this tutorial:
  - React Native scripts & [Expo CLI](https://docs.expo.io/versions/latest/workflow/expo-cli) (command line interface)
  - [Props](https://reactjs.org/docs/components-and-props.html)
  - [State & Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
  - [JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [APIs](https://medium.freecodecamp.org/what-is-an-api-in-english-please-b880a3214a82)
  - [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview)
  - [FlatList](https://facebook.github.io/react-native/docs/flatlist.html)
  - [Other React Native components](https://facebook.github.io/react-native/docs/components-and-apis)
- Other React-related resources:
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html), along with the general [docs](https://reactjs.org/docs/hello-world.html)
  - [React tutorial](https://reactjs.org/tutorial/tutorial.html)
  - [React Native tutorial](https://facebook.github.io/react-native/docs/tutorial.html)
  - [React Native Express](http://www.reactnativeexpress.com) for more learning
  - [React Native libraries, tools and tutorials](https://www.awesome-react-native.com)
  - [More React Native libraries (react.parts)](https://react.parts/?collection=React+Native)
- More excellent resources:
  - [JavaScript tutorial](https://developer.mozilla.org/en-US/docs/Web/javascript) by Mozilla
  - [Alternatives](https://alternativeto.net/software/react-native) to React Native
  - [React 360](https://facebook.github.io/react-360) for VR applications

[&uarr; back to table of contents](#table-of-contents)
