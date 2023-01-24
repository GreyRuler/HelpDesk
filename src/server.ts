import Koa from 'koa';
import koaBody from 'koa-body';
import TicketFull from './ts/TicketFull';

const app: Koa = new Koa();

let ticketID = 0;
let tickets: TicketFull[] = [
	new TicketFull(++ticketID, 'name1', true, 'desc1'),
	new TicketFull(++ticketID, 'name2', true, 'desc2'),
	new TicketFull(++ticketID, 'name3', true, 'desc3')
];

app.use(koaBody({
	urlencoded: true
}));

app.use(async (ctx: Koa.Context) => {
	const { method } = ctx.request.query;
	switch (method) {
		case 'allTickets':
			ctx.response.body = tickets;
			break;
		case 'createTicket': {
			const { name, description, status } = ctx.request.body;
			const ticket = new TicketFull(++ticketID, name, status, description);
			tickets.push(ticket);
			ctx.response.body = 'Success';
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
			break;
		}
		case 'deleteTicketById': {
			const { id } = ctx.request.query;
			tickets = tickets.filter((value: TicketFull) => value.id !== Number(id));
			break;
		}
		default:
			ctx.response.body = 'Error 404';
	}
});

const port = 7070;

app.listen(port);
