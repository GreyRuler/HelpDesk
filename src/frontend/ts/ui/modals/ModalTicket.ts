import { Modal } from 'bootstrap';

export default class ModalTicket {
	public element: HTMLElement;
	public modal: Modal;

	constructor(modal: HTMLElement) {
		this.element = modal;
		this.modal = new Modal(modal)
	}

	static get inputIdSelector() {
		return 'input[name="id"]';
	}

	static get editShortDescriptionSelector() {
		return '#short-description__edit';
	}

	static get editLongDescriptionSelector() {
		return '#long-description__edit';
	}

	static get createShortDescriptionSelector() {
		return '#short-description__create';
	}

	static get createLongDescriptionSelector() {
		return '#long-description__create';
	}

	static get statusEditSelector() {
		return '#status__edit';
	}

	static get statusCreateSelector() {
		return '#status__create';
	}

	changeValueShortDescriptionEl(value: string) {
		const shortDescriptionEl = this.element
			.querySelector(ModalTicket.editShortDescriptionSelector) as HTMLInputElement;
		shortDescriptionEl.value = value;
	}

	changeValueLongDescription(value: string) {
		const longDescriptionEl = this.element
			.querySelector(ModalTicket.editLongDescriptionSelector) as HTMLInputElement;
		longDescriptionEl.value = value;
	}

	changeValueStatus(value: boolean) {
		const statusEl = this.element
			.querySelector(ModalTicket.statusEditSelector) as HTMLInputElement;
		statusEl.checked = value;
	}

	clear() {
		const shortDescriptionEl = this.element
			.querySelector(ModalTicket.createShortDescriptionSelector) as HTMLInputElement;
		const longDescriptionEl = this.element
			.querySelector(ModalTicket.createLongDescriptionSelector) as HTMLInputElement;
		const statusEl = this.element
			.querySelector(ModalTicket.statusCreateSelector) as HTMLInputElement;
		shortDescriptionEl.value = '';
		longDescriptionEl.value = '';
		statusEl.checked = false;
	}
}
