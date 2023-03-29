import { dev } from '$app/environment';
import { execute } from './../../../.graphclient';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const query = gql`
	query UserQuery {
		user(id: "0x71622ae3a9574120e6f7036834c6eb60cea648d0") {
			trades {
				PnL
				blockNumber
				entryMargin
				entryPrice
				volume
			}
		}
	}
`;

const result = await execute(query, {});
console.log(result);
