import { SvelteKitAuth } from '@auth/sveltekit';
import Cognito from '@auth/core/providers/cognito';

import type { OAuthConfig } from '@auth/core/providers/index.js';
import type { Profile } from '@auth/core/types.js';

import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { DynamoDBAdapter } from '@next-auth/dynamodb-adapter';

import type { DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';

import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import {
	COGNITO_ID,
	COGNITO_SECRET,
	COGNITO_ISSUER,
	AUTH_SECRET,
	NEXT_AUTH_AWS_ACCESS_KEY,
	NEXT_AUTH_AWS_SECRET_KEY,
	NEXT_AUTH_AWS_REGION
} from '$env/static/private';

// export const handle = SvelteKitAuth({
// 	providers: [
// 		Cognito({
// 			clientId: COGNITO_ID,
// 			clientSecret: COGNITO_SECRET,
// 			issuer: COGNITO_ISSUER
// 		}) as OAuthConfig<Profile>
// 	]
// });

const config: DynamoDBClientConfig = {
	credentials: {
		accessKeyId: NEXT_AUTH_AWS_ACCESS_KEY,
		secretAccessKey: NEXT_AUTH_AWS_SECRET_KEY
	},
	region: NEXT_AUTH_AWS_REGION
};

const client = DynamoDBDocument.from(new DynamoDB(config), {
	marshallOptions: {
		convertEmptyValues: true,
		removeUndefinedValues: true,
		convertClassInstanceToMap: true
	}
});

// export const handle = SvelteKitAuth({
// 	providers: [
// 		Cognito({
// 			clientId: COGNITO_ID,
// 			clientSecret: COGNITO_SECRET,
// 			issuer: COGNITO_ISSUER
// 		}) as OAuthConfig<Profile>
// 	],
// 	adapter: DynamoDBAdapter(client, {
// 		tableName: 'opc-test-table',
// 		partitionKey: 'pk',
// 		sortKey: 'sk',
// 		indexName: 'GSI1',
// 		indexPartitionKey: 'GSI1PK',
// 		indexSortKey: 'GSI1SK'
// 	}) as any,
// 	// session: {
// 	// 	maxAge: 60 * 60 * 24 * 365,
// 	// 	strategy: 'jwt'
// 	// },
// 	secret: AUTH_SECRET
// });

async function authorization({ event, resolve }: any) {
	// Protect any routes under /user
	if (event.url.pathname.startsWith('/auth')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth/signin?csrf=true');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [
			Cognito({
				clientId: COGNITO_ID,
				clientSecret: COGNITO_SECRET,
				issuer: COGNITO_ISSUER
			}) as OAuthConfig<Profile>
		],
		adapter: DynamoDBAdapter(client, {
			tableName: 'opc-test-table',
			partitionKey: 'pk',
			sortKey: 'sk',
			indexName: 'GSI1',
			indexPartitionKey: 'GSI1PK',
			indexSortKey: 'GSI1SK'
		}) as any,
		// session: {
		// 	maxAge: 60 * 60 * 24 * 365,
		// 	strategy: 'jwt'
		// },
		secret: AUTH_SECRET
	}),
	authorization
);
