import { SvelteKitAuth } from '@auth/sveltekit';
import Cognito from '@auth/core/providers/cognito';
import Google from '@auth/core/providers/google';

import {
	COGNITO_CLIENT_ID,
	COGNITO_CLIENT_SECRET,
	COGNITO_ISSUER,
	GOOGLE_ID,
	GOOGLE_SECRET,
	AUTH_SECRET
} from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		Google({
			clientId: GOOGLE_ID,
			clientSecret: GOOGLE_SECRET
		}),
		Cognito({
			issuer: COGNITO_ISSUER,
			clientId: COGNITO_CLIENT_ID,
			clientSecret: COGNITO_CLIENT_SECRET
		})
	]
	// secret: AUTH_SECRET
});
