App.ApplicationRoute = Ember.Route.extend({
  model: function() {
      return Ember.RSVP.hash({
         genres: this.store.find('genre'),
         factTypes: this.store.find('factType')
      })
  }
});