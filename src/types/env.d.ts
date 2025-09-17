interface ImportMetaEnv {
  NEXT_PUBLIC_FOOTER_FORM_UUID: string;
  NEXT_PUBLIC_FOOTER_RESPONSE_FIELD_ID: string;

  NEXT_PUBLIC_FORM_UUID: string;
  NEXT_PUBLIC_FIRST_NAME_ID: string;
  NEXT_PUBLIC_LAST_NAME_ID: string;
  NEXT_PUBLIC_EMAIL_ID: string;
  NEXT_PUBLIC_PHONE_ID: string;
  NEXT_PUBLIC_SUBJECT_ID: string;
  NEXT_PUBLIC_MESSAGE_ID: string;
  NEXT_PUBLIC_TERMS_ID: string;

  NEXT_PUBLIC_GRAPHQL_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
