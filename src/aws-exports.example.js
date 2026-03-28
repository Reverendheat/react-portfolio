/**
 * Fallback when `src/aws-exports.js` is missing (e.g. fresh clone).
 * Replace with real output from `amplify pull` / `amplify push`, or copy this file to `aws-exports.js` and fill in values from the AWS Cognito console.
 */
const awsmobile = {
  aws_project_region: 'us-east-2',
  aws_cognito_identity_pool_id: 'us-east-2:00000000-0000-0000-0000-000000000000',
  aws_cognito_region: 'us-east-2',
  aws_user_pools_id: 'us-east-2_xxxxxxxxx',
  aws_user_pools_web_client_id: 'xxxxxxxxxxxxxxxxxxxxxxxxxx',
};

export default awsmobile;
