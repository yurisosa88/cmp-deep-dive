export interface Ticket {
    id: string;
    title: string;
    request: string;
    status: 'open' | 'close';
}

export interface NewTicket {
    title: string;
    request: string;
}