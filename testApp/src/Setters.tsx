import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Didomi } from '@didomi/react-native';
import Setter from './SetterCall';

export default function Setters() {

  const userId = "d13e49f6255c8729cbb201310f49d70d65f365415a67f034b567b7eac962b944eda131376594ef5e23b025fada4e4259e953ceb45ea57a2ced7872c567e6d1fae8dcc3a9772ead783d8513032e77d3fd";
  const secretId = "testsdks-PEap2wBx";

  return (
    <View style={styles.container}>
      <Setter
        name="setUserStatusSets"
        call={async () => {
          return await Didomi.setUserStatusSets(
            ['cookies', 'advertising_personalization', 'analytics'],
            ['ad_delivery', 'content_personalization'],
            [],
            [],
            [],
            [],
            [],
            []
          );
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserAgreeToAll"
        call={async () => {
          return await Didomi.setUserAgreeToAll();
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserDisagreeToAll"
        call={async () => {
          return await Didomi.setUserDisagreeToAll();
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserWithId"
        call={async () => {
          return await Didomi.setUser("abcd");
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserWithHashAuth"
        call={async () => {
          return await Didomi.setUserWithHashAuth(userId, "hash-md5", secretId, "test-digest");
        }}
        test={() => {
          return true;
        }}
        />

      <Setter
        name="setUserWithHashAuthWithSaltAndExpiration"
        call={async () => {
          return await Didomi.setUserWithHashAuth(userId, "hash-md5", secretId, "test-digest", "test-salt", 3600);
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserWithEncryptionAuth"
        call={async () => {
          return await Didomi.setUserWithEncryptionAuth(userId, "aes-256-cbc", secretId, "3ff223854400259e5592cbb992be93cf");
        }}
        test={() => {
          return true;
        }}
      />

      <Setter
        name="setUserWithEncryptionAuthWithExpiration"
        call={async () => {
          return await Didomi.setUserWithEncryptionAuth(userId, "aes-256-cbc", secretId, "3ff223854400259e5592cbb992be93cf", 3600);
        }}
        test={() => {
          return true;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
