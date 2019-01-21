/**
 * Creates users in bulk on the Chatkit API from a CSV list.
 */
const fs = require('fs');
const prompt = require('prompt');
const { ChatManager, TokenProvider } = require('@pusher/chatkit-client');

/**
 * Instantiates the Chatkit rooms and users.
 *
 * @param string csvFile
 * @param Object chatkitData
 */
const createUsers = (csvFile, chatkitData) => {
  // Read list of users
  const csvData = fs.readFileSync(csvFile, 'utf8');
  const users = csvData.replace(/\r*/g, '').split("\n");

  console.log(`Using instance locator: ${chatkitData.instanceLocator}...`);
  console.log(`Creating ${users.length} users on the Chatkit API...`);

  const window = {
    console: console,
  };

  // Create Chatkit client
  const chatkit = new ChatManager({
    instanceLocator: chatkitData.instanceLocator,
    tokenProvider: new TokenProvider({ url: chatkitData.tokenProviderUrl }),
    userId: chatkitData.primaryUserId,
  });

  return;

  chatkit.createUser({
    id: "bookercodes",
    name: "Alex Booker"
  })
}

// Prompt schema
const schema = {
  properties: {
    csv: {
      default: 'users',
      description: 'CSV filename (inside ./scripts, without the extension)',
      required: true
    },
    instanceLocator: {
      default: 'v1:us1:abcdef',
      description: 'Instance Locator',
      required: true
    },
    tokenProviderUrl: {
      default: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/abcdef/token',
      description: 'Token Provider URL',
      required: true
    },
    primaryUserId: {
      default: 'frnkly',
      description: 'Primary user (yourself)',
      required: true,
    }
  }
};

prompt.start().get(schema, (error, data) => {
  if (error) {
    console.error(error);

    return;
  }

  const { instanceLocator, primaryUserId, tokenProviderUrl } = data;

  createUsers(`./scripts/${data.csv}.csv`, {
    instanceLocator,
    primaryUserId,
    tokenProviderUrl,
  });
});
