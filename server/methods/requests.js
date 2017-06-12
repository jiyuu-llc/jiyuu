import {Meteor} from 'meteor/meteor';
import {Requests} from '/lib/collections';
import {check} from 'meteor/check';

Meteor.methods({
	'requests.add'(to){
		Requests.insert({from: Meteor.userId(), to: to});
	}
});