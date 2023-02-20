import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import TicketFull from './TicketFull';
import * as http from 'http';

const app: Koa = new Koa();

let ticketID = 0;
let tickets: TicketFull[] = [
	new TicketFull(++ticketID, 'name1', true, 'desc1'),
	new TicketFull(++ticketID, 'name2', false, 'desc2'),
	new TicketFull(++ticketID, 'name3', true, 'desc3')
];

app.use(cors());

app.use(koaBody({
	urlencoded: true,
	multipart: true
}));

app.use((ctx: Koa.Context) => {
	const { method } = ctx.request.query;
	switch (method) {
		case 'allTickets':
			ctx.response.body = {
				success: true,
				data: tickets
			};
			break;
		case 'createTicket': {
			const { shortDescription, longDescription, status } = ctx.request.body;
			const ticket = new TicketFull(++ticketID, shortDescription, status, longDescription);
			tickets.push(ticket);
			ctx.response.body = {
				success: true
			};
			break;
		}
		case 'ticketById': {
			const { id } = ctx.request.query;
			ctx.response.body = tickets.find(function (value: TicketFull) {
				return value.id === Number(id);
			});
			break;
		}
		case 'updateTicketById': {
			const { id } = ctx.request.query;
			const ticket = tickets.find((value: TicketFull) => value.id === Number(id));
			ticket?.update(ctx.request.body);
			ctx.response.body = {
				success: true
			};
			break;
		}
		case 'deleteTicketById': {
			const { id } = ctx.request.query;
			tickets = tickets.filter((value: TicketFull) => value.id !== Number(id));
			ctx.response.body = {
				success: true
			};
			break;
		}
		default:
			ctx.response.body = {
				success: false
			};
	}
});

const port = 7070;

http.createServer(app.callback()).listen(port)
