const type = process.env.FIREBASE_TYPE;
const project_id = process.env.FIREBASE_PROJECT_ID;
const private_key_id = process.env.FIREBASE_PRIVATE_ID_KEY;
const private_key = process.env.FIREBASE_PRIVATE_KEY;
const client_email = process.env.FIREBASE_CLIENT_EMAIL;
const client_id = process.env.FIREBASE_CLIENT_ID;
const auth_uri = process.env.FIREBASE_AUTH_URI;
const token_uri = process.env.FIREBASE_TOKEN_URI;
const auth_provider_x509_cert_url = process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL;
const client_x509_cert_url = process.env.FIREBASE_CLIENT_X509_CERT_URL;
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;

export {
    auth_provider_x509_cert_url,
    auth_uri,
    client_email,
    client_id,
    client_x509_cert_url,
    private_key,
    private_key_id,
    project_id,
    token_uri,
    type,
    storageBucket
}
