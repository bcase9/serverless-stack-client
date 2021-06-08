const config = {
    s3: {
        REGION: "us-east-2",
        BUCKET: "note-take-upload",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://cyv0ngi8f2.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_XkcRGMwCV",
        APP_CLIENT_ID: "3ss9fsou45gdjkn7pasp74571h",
        IDENTITY_POOL_ID: "us-east-2:ab3f6025-8166-49a8-b4db-79bfd165f02f",
    },
};

export default config;