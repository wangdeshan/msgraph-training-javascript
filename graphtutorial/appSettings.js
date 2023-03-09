// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

const settings = {
  'clientId': '04658cc5-2cef-4334-bfbb-e6c8bea1bdb3',
  'clientSecret': 'YOUR_CLIENT_SECRET_HERE_IF_USING_APP_ONLY',
  'tenantId': 'YOUR_TENANT_ID_HERE_IF_USING_APP_ONLY',
  'authTenant': 'common',
  'graphUserScopes': [
    'user.read',
    'mail.read',
    'mail.send'
  ]
};

module.exports = settings;
