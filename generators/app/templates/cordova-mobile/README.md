# <%= appName %>

## Add platforms

Make sure you have Cordova installed globally:
```
npm install -g cordova
```
To be able to run your CodeSoju app either on a simulator and an actual device you have to add platforms of your choice. For iOS and Android run the following commands:
```
cordova platform add ios
```
```
cordova platform add android
```
## Set up native SDKs to develop and debug locally
For iOS you would need an Apple Development Account and xCode and for Android you would need an Android Studio. Read more about setting up your environment [**here**](https://cedrus.gitbooks.io/codesoju/content/native_mobile.html)

## Cofigure Base Url to communicate with the Node side

You have to host somewhere your application to be able to reach its Node side. You have to deploy it and configure the base url which will point to where your backend lives. Otherwise there will be no frontend/backend communication possible. 

We provide you with an example how to configure it in your CodeSoju app. To deploy it to IBM Bluemix make sure you have the following:
1. Bluemix account
2. Cloud Foundry CLI tool

We have a helper operator to deploy your generated CodeSoju app to the Cloud Foundry. Run the following command:
```
yo soju:deploy-manifest
```
It will create a manifest file and add a cfignore file to your CodeSoju app. Then run:
```
cf login
```
It will ask your credentials for your Bluemix account.
After specifying your organization and space just run:
```
cf push
```
It will deploy your CodeSoju app to the Bluemix. Navigate to your Bluemix dashboard. Find your app and its url is be you Base Url. Copy it and insert it in app.js file instead of <YOUR_BASE_URL>

Once it is deployed and you configure your Base Url, it should point to the deployed CodeSoju app and your client side should now be able to communicate with your backend. 

When you make changes to your CodeSoju app make sure to run: 

- `gulp buildMobile`
- `cordova build`

And to start simulators you could run:
- `cordova run android`
- `cordova run ios`

## Development practices
- Work on issue/feature branches
- Pull request into develop branch when ready
- Pull request from develop branch into master branch periodically (after testing)

## Visit [**CodeSoju**](http://codesoju.io) for more information
