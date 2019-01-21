# Yakitty: a chat app for everyone :point_right: [bit.ly/yakitty](http://bit.ly/yakitty)

## Module: **Using state and integrating 3rd party libraries (Moment.js)**

- [Using state](#using-state)
- [Integrating Moment.js](#integrating-momentjs)
- [Next module: Integrating 3rd party APIs (Chatkit)](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/apis.md)
- [Back to list of modules](https://github.com/frnkly/react-native-tutorial#modules)

# Using state

We're moving pretty fast, but that's intended. Our goal is to get an overview of what React Native can do, so don't worry if you're not getting all the concepts right away. We'll keep linking to great resources on the web whenever we introduce a new concept, so you can look it up in more detail at your own pace.

The time has come to introduce another important concept in React called _state_. State variables are created and updated within a component. This is different from _props_, which are passed down from a parent component. In other words:

- Props are _immutable_: they are **never** changed by the component.
- State is _mutable_: it is created and updated by the component.

An analogy you can use for _props_ are your genes. These were passed down to you from your parents—nothing you can do about it. Likewise, your personality, ambitions and preferences are more like _state_. You decide what they are, and you can choose to change them whenever you like.

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
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/state-timestamps.jpg" />
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

[&rarr; integrating 3rd party APIs](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/apis.md)

[&larr; list of modules](https://github.com/frnkly/react-native-tutorial#modules)

_Did you understand the difference between State and Props? I'd love to hear your feedback or comments if you have any :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)_
