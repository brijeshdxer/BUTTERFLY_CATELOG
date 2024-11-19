import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.butterflycatalog.app',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    codeCache: true,
    maxLogcatObjectSize: 2048,
    buildTypes: {
      release: {
        minifyEnabled: true,
        useProguard: true,
        proguardRules: [],
        signingConfig: 'release',
        debuggable: false
      }
    }
  },
  ios: {
    discardUncaughtJsExceptions: true
  }
} as NativeScriptConfig;