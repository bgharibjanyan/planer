

export default class Task{
    constructor(title,description,date,time,important) {
        this.user=localStorage.getItem('username')
        this.title=title;
        this.description=description;
        this.date=date;
        this.time=time;
        this.important=important;
    }
}
