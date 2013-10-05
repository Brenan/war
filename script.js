$(document).ready(function() {

	var Card = Backbone.Model.extend({
		defaults:{
			value: null,
			suit:null,
			str_value:null
		}
		
	});

	var CardView = Backbone.Model.extend({
		template: _.template($("#card-template")).html(),
		render: function(){
			this.$el.html(this.template(this.Model.toJSON()));
		}
	});



	function convert_value_to_string(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];

		for (var j = 0; j<13; j++) {
			var createCard = new Card({
				value:j+1,
				suit: suit,
				str_value: convert_value_to_string(j+1)

			});
			deck.push(createCard);
		}
	}
	_.shuffle(deck);

	$("button").click(function(){
		var myCardView = new CardView({el: $("#my-card")});
		var oppCardView = new CardView({el: $("#opp-card")});
		
	});


});