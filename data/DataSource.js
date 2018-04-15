export const DataSource = new Meteor.Collection('dataSource');
export const RateOfChange = new Meteor.Collection('rateOfChange');

if(Meteor.isClient) {
  Meteor.startup(function() {
    console.log(!DataSource.find({}).fetch().length);
    if (!DataSource.find({}).fetch().length) {
      DataSource.insert({x: 'Department Stores', value: 6371664, id:"12345_a"});
      DataSource.insert({x: 'Discount Stores', value: 7216301, id:"12345_b"});
      DataSource.insert({x: 'Men\'s/Women\'s Stores', value: 1486621, id:"12345_c"});
      DataSource.insert({x: 'Juvenile Specialty Stores', value: 786622, id:"12345_d"});
      DataSource.insert({x: 'All other outlets', value: 900000, id:"12345_e"});
    }
    if (!RateOfChange.find({}).fetch().length) {
      RateOfChange.insert({date: new Date(), value:2.5});
    }
  });
}
