import Ticket from './Ticket';

export default class TicketFull extends Ticket {
	private description: string; // полное описание

	constructor(id: number, name: string, status: boolean, description: string) {
		super(id, name, status);
		this.description = description;
	}

	update(fills: { name: string, status: boolean, description: string }) {
		this.name = fills.name;
		this.status = fills.status;
		this.description = fills.description;
	}
}
