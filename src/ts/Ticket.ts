export default class Ticket {
	id: number; // идентификатор (уникальный в пределах системы)

	shortDescription: string; // краткое описание

	status: boolean; // boolean - сделано или нет

	created: string; // дата создания (timestamp)

	constructor(id: number, shortDescription: string, status: boolean) {
		this.id = id;
		this.shortDescription = shortDescription;
		this.status = status;
		const date = new Date();
		this.created = `${(date.getDate() + 1).toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
	}

	update(fills: { shortDescription: string, status: boolean }) {
		this.shortDescription = fills.shortDescription;
		this.status = fills.status;
	}
}
