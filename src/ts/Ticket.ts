export default class Ticket {
	id: number; // идентификатор (уникальный в пределах системы)

	name: string; // краткое описание

	status: boolean; // boolean - сделано или нет

	created: string; // дата создания (timestamp)

	constructor(id: number, name: string, status: boolean) {
		this.id = id;
		this.name = name;
		this.status = status;
		const date = new Date();
		this.created = `${(date.getDate() + 1).toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
	}

	update(fills: { name: string, status: boolean }) {
		this.name = fills.name;
		this.status = fills.status;
	}
}
