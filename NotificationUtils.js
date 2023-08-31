import messaging from '@react-native-firebase/messaging';

export const handleNotifications = () => {

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    // Check whether an initial notification is available
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });
}

export const getFirebaseToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log('------Firebase Token', token);

}