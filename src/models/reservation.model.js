class Reservation {
    constructor(date, start_time, end_time, purpose, number, available, status){
        this.date = date,
        this.start_time = start_time,
        this.end_time = end_time,
        this.purpose = purpose,
        this.number = number,
        this.available = available,
        this.status = status //It can be pending, approved, rejected or cancelled
    }
}

export default Reservation;