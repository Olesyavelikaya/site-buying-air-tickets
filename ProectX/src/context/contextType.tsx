interface codeCity {
  cityIsWhereFrom: string;
  cytiIsWhere: string;
  status?: string;
  codeCityIsWhereFrom?: string;
  codeCytiIsWhere?: string;
}

interface fetchCodeCity {
  isWhereFrom: string;
  isWhere: string;
}

interface stateTicket {
  departDate?: string;
  returnDate?: string;
  cheapestTickets: [];
  status: string;
}

interface fetchAirTickets {
  cheapestTickets: [];
}

interface userModalType {
  userName: string;
  userPassword: string;
}

export type {
  codeCity,
  fetchCodeCity,
  stateTicket,
  fetchAirTickets,
  userModalType,
};
