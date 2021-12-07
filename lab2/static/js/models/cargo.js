class Cargo extends BaseModel {
    constructor () {
        super('cargoes')
        this.fields = this.fields.concat(['name', 'weight'])
    }
}