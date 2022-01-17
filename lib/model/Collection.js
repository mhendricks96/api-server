
'use strict';

class Collection {
  constructor (model) {
    this.model = model;
    console.log('hi',model);
  }

  async read(id, association) {
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


  async create(data) {
    const record = await this.model.create(data);

    return record;
  }

}

module.exports = Collection;