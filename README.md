# pushy-node-backend

A basic Node.js REST API built with Express for registering devices and sending push notifications with [Pushy](https://pushy.me/).

> [Pushy](https://pushy.me/) is the most reliable push notification gateway, perfect for real-time, mission-critical applications.

This API utilizes in-memory persistence to make things simple, but be aware that restarting the server will clear the registered devices list. Feel free to modify the persistence layer to utilize a real database, such as [MongoDB](https://www.mongodb.com/).

## Usage

Clone the repository locally and install its dependencies:

```shell
git clone https://github.com/pushy-me/pushy-node-backend.git

cd pushy-node-backend
npm install
```

Open `config.js` and insert your app's Secret API Key, available in the [Dashboard](https://dashboard.pushy.me/):

```js
pushy: {
    // Secret API Key
    secretApiKey: 'n00d4eea4f16btddd6d44fcfb72f2bbc20b8032175fdc979ada24a5d02b'
}
```

Start the server up:

```js
npm start
```

## API Endpoints

> Note: All requests are `GET` requests to make it easy to execute them from a web browser for testing.

### GET /

Returns a list of registered devices.

### GET /register/:token

Register a device for notifications. Execute this request from your mobile app, replacing `:token` with the actual device token.

### GET /push

Send a test notification to all registered devices, with the following payload:

```json
{"message": "Hello World!"}
```

This request will throw an error if no devices have been registered yet, or if the Secret API Key is invalid:

```json
{"error": "We could not find an app with the specified API key. Please contact us at support@pushy.me."}
```

## Production Use

To actually use this in production, consider the following:

1) Modify the push payload with data specific to your application

2) Modify the [persistence layer](util/db.js) to utilize a real database, such as [MongoDB](https://www.mongodb.com/)

3) Modify the `/push` endpoint to only send notifications to specific devices, based on app-specific criteria

## License

[Apache 2.0](LICENSE)
