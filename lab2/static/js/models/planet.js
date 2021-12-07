class Planet extends BaseModel {
    constructor () {
        super('planets')
        this.fields = this.fields.concat(['load capacity', 'weight'])
    }
}