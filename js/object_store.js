//This.all contains all of the event input data for each event
//Prototype holds the actions that will be performed on the data (ie add, edit,
//delete, generate)


app.ObjectStore = function () {
  this.all = {};
};

app.ObjectStore.prototype = {
  add: function (obj) {
    this.all[obj.id] = obj;
  },

  getById: function (id) {
    return this.all[id];
  },

  remove: function (id) {
    delete this.all[id];
  },

  forEach: function (fn) {
    for (var key in this.all) {
      fn(this.all[key]);
    }
  }
};
