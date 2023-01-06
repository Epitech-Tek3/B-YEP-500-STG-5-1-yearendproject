FROM reactnativecommunity/react-native-android:latest

WORKDIR /app

RUN ls

RUN yes | sdkmanager --update
RUN yes | sdkmanager --licenses
RUN yes | sdkmanager "build-tools;30.0.2" "platforms;android-30"

COPY . .
RUN yarn

WORKDIR /app/android
RUN ./gradlew assembleRelease

CMD ["cp", "app/build/outputs/apk/release/app-release.apk", "../../app_mobile/apps/web/public/client.apk"]
