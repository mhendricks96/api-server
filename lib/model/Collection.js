
'use strict';

class Collection {
  constructor (model) {
    this.model = model;
  }

  async read(id) {
    // let options = {};
    let records;
    // if (association) {
    //   options.include = association;
    // }
  
    if (id){
      records = await this.model.findOne({where: {id:id}});
    } else {
      records = await this.model.findAll();
    }
  
    return records;
  }


  async create(obj) {
    console.log(obj);
    console.log(this.model);
    const record = await this.model.create(obj);
    return record;
  }

}

module.exports = Collection;