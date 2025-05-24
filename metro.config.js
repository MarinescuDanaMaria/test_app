const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs'); // suport pentru .cjs
defaultConfig.resolver.unstable_enablePackageExports = false; // dezactivează suportul pt package exports modern

module.exports = defaultConfig;
