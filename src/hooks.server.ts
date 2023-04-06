import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import Cognito from '@auth/core/providers/cognito';

import type { OAuthConfig } from '@auth/core/providers/index.js';
import type { Profile } from '@auth/core/types.js';

import {
	GOOGLE_ID,
	GOOGLE_SECRET,
	COGNITO_ID,
	COGNITO_SECRET,
	COGNITO_ISSUER
} from '$env/static/private';

export const handle = SvelteKitAuth({
	providers: [
		// Google({
		// 	clientId: GOOGLE_ID,
		// 	clientSecret: GOOGLE_SECRET
		// }) as OAuthConfig<Profile>,
		Cognito({
			clientId: COGNITO_ID,
			clientSecret: COGNITO_SECRET,
			issuer: COGNITO_ISSUER
		}) as OAuthConfig<Profile>
	]
});
