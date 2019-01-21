# Yakitty: a chat app for everyone :point_right: [bit.ly/yakitty](http://bit.ly/yakitty)

## Module: **Integrating 3rd party APIs (Chatkit)**

Before we move further, I want to congratulate you for making it this far. Building an app is not easy, but you've shown guts and patience in pushing through. _Bravo!_

We're going to introduce a new concept, which unlike the other concepts has broad applications in all kinds of software development. APIs are the glue that sticks programs together. They allow you to backup your iPhone (a piece of software) to iCloud (another piece of software). They allow you to sign up on websites using your Facebook or Google account. They allow your smart devices to interact with each other.

APIs provide an _interface_ (the "I" in API) between _apps_ or _applications_ (the "A" in API) for them to communicate with each other.

Just like Messenger or Slack, our app needs to store data in the cloud, or on _servers_, and manage chat histories, users, and so on. Thankfully, [Chatkit](https://pusher.com/chatkit) provides an API to help us manage all of that. _Fiou!_

## Table of contents

- [Creating a Chatkit account](#creating-a-chatkit-account)
- [Integrating Chatkit](#integrating-chatkit)
- [Improving our UI](#improving-our-ui)
- [Hiding developer secrets](#hiding-developer-secrets)
- [Back to list of modules](https://github.com/frnkly/react-native-tutorial#modules)

# Creating a Chatkit account

Install Chatkit with `yarn add @pusher/chatkit-client` or `npm install @pusher/chatkit-client --save`, the same way we installed Moment.js earlier. You'll need to stop your development environment using `ctrl+c` or `cmd+c` as you did before. Once Chatkit has been installed, re-launch your environment using `expo start`.

If you're following along in a workshop, then for the sake of the event we'll all use the same Chatkit account. Just choose a username and add it to this list: [bit.ly/yakitty-users](http://bit.ly/yakitty-users). This way we'll all be in the same chat room. In a real app, you would definitely create your own account and have users sign up or sign in through your user interface.

If you're following this tutorial on your own time _like a trooper_, I invite you to create an account on [Pusher](https://pusher.com/chatkit) so you can use their API for free. **The following steps are optional if you're following along in a workshop**.

- Create Chatkit account.
- Create user, room, etc.
- Follow the quick-start guide: https://docs.pusher.com/chatkit/quick_start/javascript

[&uarr; back to table of contents](#table-of-contents)

# Integrating Chatkit

In a new tab in your browser, open Chatkit's [quick-start guide](https://docs.pusher.com/chatkit/quick_start/javascript) to understand how their API works.

To use their API we'll need a Chatkit instance, an instance locator, some users, a chat room, and a token provider. It might sound like a lot, but the docs are relatively easy to follow if you go through them step by step.

To help us stay organized in our code, we'll create a "chat manager" that will handle the [initialization](https://docs.pusher.com/chatkit/quick_start/javascript#initialise-chatkit) steps for us. This way, most of the Chatkit setup will be isolated to one file. This is standard practice and usually a good idea. Create a file called `chatManager.js` in the root of your project and add the sample code from the Chatkit docs in it:

```javascript
// chatManager.js

// Import the Chatkit library.
import { ChatManager, TokenProvider } from '@pusher/chatkit-client/react-native'

// Chatkit's sample code.
const chatManager = new ChatManager({
  instanceLocator: 'YOUR INSTANCE LOCATOR',
  userId: 'YOUR USER ID',
  tokenProvider: new TokenProvider({ url: 'YOUR TEST TOKEN ENDPOINT' })
})

// The default export for this file. This allows us to import it in
// components/MessageList.js using the "import chatManager from ..." syntax.
export default chatManager
```

You can replace "YOUR USER ID" with your own username. We'll also need to replace `url` and `instanceLocator` with the values from your Pusher dashboard. If you're following along in a workshop, you can use the group values here: [bit.ly/yakitty-users](http://bit.ly/yakitty-users)

Notice that we didn't need to import React. We only need to import it when creating React components (which the Chat Manager is not).

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
          onMessage: null,
        }
      });

      console.log("We're connected to Chatkit! ᓩ")
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

If you've followed all the instructions so far, you should see something similar to:

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/apis-expected-function.png" />
</p>

Developing in JavaScript means learning to read sometimes cryptic error messages. Let's have a closer look:

>expected hooks.onMessage to be of type function but was of type object

Can you spot our mistake? Inside our `componentDidMount` method, when subscribing to a chat room, `onMessage` in our code should refer to a function, and not to `null`. For now, let's replace `null` with:

```javascript
msg => console.log('received new yak: ', Object.keys(msg))
```

So that the resulting code can look like:

```javascript
// Subscribe to the main room.
this.room = await this.user.subscribeToRoom({
  roomId: this.user.rooms[0].id,
  hooks: {
    onMessage: msg => console.log('received new yak: ', Object.keys(msg)),
  }
});
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

Aha! So anytime we receive a new message, we know we'll have access to these keys. The ones that matter to us are `id`, `senderId`, `text` and `createdAt`. Let's create a handler method called `handleReceiveMessage`, and pass that on to `onMessage`:

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

# Improving our UI

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

# Hiding developer secrets

Our Chat Manager conveniently hides the Chatkit setup from the rest of our code. But sometimes when working with other developers or when sharing your code on [Github](https://github.com), you'll want to keep some things private, such as the `tokenProvider`'s `url` or your `instanceLocator`.

It's common practice to put sensitive info inside a `config.js` file, and then set those details from the environment or by other means. Let's go ahead and follow common practice. Here's what a configuration file might look like:

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

[&larr; list of modules](https://github.com/frnkly/react-native-tutorial#modules)

_Were you able to integrate the Chatkit API? I'd love to hear your feedback. I `await` your comments and I `Promise` to read them all eventually... :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)_
