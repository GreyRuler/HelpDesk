import Ticket from './Ticket';

export default class TicketFull extends Ticket {
	private longDescription: string; // полное описание

	constructor(id: number, shortDescription: string, status: boolean, longDescription: string) {
		super(id, shortDescription, status);
		this.longDescription = longDescription;
	}

	update(fills: { shortDescription: string, status: boolean, longDescription: string }) {
		this.shortDescription = fills.shortDescription;
		this.status = fills.status;
		this.longDescription = fills.longDescription;
	}
}
