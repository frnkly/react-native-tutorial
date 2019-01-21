# Yakitty: a chat app for everyone :point_right: [bit.ly/yakitty](http://bit.ly/yakitty)

## Module: **Creating our components**

React is a component-based UI framework. That means we have to think of our app in terms of components, or "parts". Messaging apps often have the following elements:

- A message list.
- Messages inside that list.
- An input box to create a new message.

This is only an example, but keep in mind you can have your own opinion as to what "parts" make up a messaging app.

## Table of contents

- [MessageList component](#messagelist-component)
- [Message component](#message-component)
- [Input component](#input-component)
- [Restructuring our components](#restructuring-our-components)
- [Next module: Using state and integrating 3rd party libraries (Moment.js)](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/state.md)
- [Back to list of modules](https://github.com/frnkly/react-native-tutorial#modules)

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

// Add this line right before the "export default class App" line in App.js. We
// simply need to specify the path to the component. Notice we don't need to add
// ".js". This is just how imports work in React, or more specifically, Babel
// (babeljs.io).
import MessageList from './components/MessageList'
```

All we've done is tell React to bring in the component we've created into our `App.js` file. If you'd like to read more about `import` statements, Mozilla has some [great documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) available for free. We can now use our brand new component inside `App.js` to replace the `<Text>` elements we already have:

```javascript
// App.js

import React from 'react';

// Since we're replacing the Text components with our MessageList, we don't need
// to import it anymore. It's good practice to only import the components you're
// actually using.
import { StyleSheet, View } from 'react-native'

import MessageList from './components/MessageList'

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

<p align="center">
  <img src="https://raw.githubusercontent.com/frnkly/react-native-tutorial/stable/tutorials/creating-components-unique-key.png" />
</p>

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

// Don't forget to import the "StyleSheet" component from "react-native" too.
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

[&rarr; using state](https://github.com/frnkly/react-native-tutorial/blob/stable/tutorials/state.md)

[&larr; list of modules](https://github.com/frnkly/react-native-tutorial#modules)

_Did you understand the concept of Components? I'd love to hear your feedback or comments if you have any :point_right: [bit.ly/yakitty-feedback](http://bit.ly/yakitty-feedback)_
