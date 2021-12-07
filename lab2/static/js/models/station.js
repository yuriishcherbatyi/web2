class Station extends BaseModel {
    constructor () {
        super('stations')
        this.fields = this.fields.concat(['load capacity', 'availability'])
    }
}