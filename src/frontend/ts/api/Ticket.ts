import createRequest from './createRequest';
import { Callback } from '../../../types/Callback';
import { Data } from '../../../types/Data';

export default class Ticket {
	// static URL = 'http://localhost:7070';
	static URL = 'https://helpdesk-kj5w.onrender.com';

	static list(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}/?method=allTickets`,
			method: 'GET',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data as never);
				}
			}
		});
	}

	static create(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}/?method=createTicket`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data as never);
				}
			}
		});
	}

	static update(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}/?method=updateTicketById`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data as never);
				}
			}
		});
	}

	static show(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}/?method=ticketById`,
			method: 'PUT',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data as never);
				}
			}
		});
	}

	static remove(data: Data, callback: Callback) {
		createRequest({
			url: `${this.URL}/?method=deleteTicketById`,
			method: 'DELETE',
			responseType: 'json',
			data,
			callback: (response) => {
				if (response.error) {
					console.log(response.error);
					return;
				}
				if (response && response.success) {
					callback(response.data as never);
				}
			}
		});
	}
}
