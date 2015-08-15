import Ember from "ember";
/* Abbreviations:
GID: Genre_id
CID: category_id
TID: topic_id
FTID: fact_type_id
------------------
GN: GenreName
CN: CategoryName
TN: Topicname
FTN: FactTypeName
------------------
GP: GenrePartial
CP: CategoryPartial
FTP: FactTypePartial
PDP: PostingDatePartial
------------------
GPV: Genres Partial Visibility
CPV: Category Partial Visibility
FTPV: FactType Partial Visibility
PDPV: PostingDate Partial Visibility
*/
export default Ember.Controller.extend
({
	// Variables Section
	selectedGID: 0,
	selectedCID: 0,
	selectedTID: 0,
	selectedFTID: 0,
	selectedGN: 'None',
	selectedCN: 'None',
	selectedTN: 'None',
	selectedFTN: 'None',
	searchTopicByName: 'None',
	showGP: true,
	showCP: true,
	showFTP: true,
	showPDP: true,
	// Paths to show central Panel and Sidebars Panels:
	centralPanelPaths: ["index", "posts.index", "posts.create", "posts.edit"],
	sidebarsPanelPaths: ["index", "posts.index", "posts.create", "posts.edit"],
	// Central Panel and Sidebars Visibility Boolean Check
	displayCentralPanel: Ember.computed('currentPath', function()
	{
		if(this.get('centralPanelPaths').indexOf(this.get('currentPath')) !== -1)
		{return true;}
		else
		{return false;}
	}),
	displaySidebars: Ember.computed('currentPath', function()
	{
		if(this.get('sidebarsPanelPaths').indexOf(this.get('currentPath')) !== -1)
		{return true;}
		else
		{return false;}
	}),
	// Tags Selected Boolean check.
	isGenreSelected: Ember.computed('selectedGID', function()
	{
		if(this.get('selectedGID') !== 0)
		{return true;}
		else
		{return false;}
	}),
	isFactTypeSelected: Ember.computed('selectedFTID', function()
	{
		if(this.get('selectedFTID') !== 0)
		{return true;}
		else
		{return false;}
	}),
	isCategorySelected: Ember.computed('selectedCID', function()
	{
		if(this.get('selectedCID') !== 0)
		{return true;}
		else
		{return false;}
	}),
	isTopicSelected: Ember.computed('selectedCID', function()
	{
		if(this.get('selectedTID') !== 0)
		{return true;}
		else
		{return false;}
	}),
	isPostDateSelected: function()
	{
		return false; //TODO
	},
	// Partials Visibility Boolean Check
	displayGP: Ember.computed('showGP', function()
	{
		if(this.get('showGP') === true)
		{return true;}
		else
		{return false;}
	}),
	displayCP: Ember.computed('showCP', function()
	{
		if(this.get('showCP') === true)
		{return true;}
		else
		{return false;}
	}),
	displayFTP: Ember.computed('showFTP', function()
	{
		if(this.get('showFTP') === true)
		{return true;}
		else
		{return false;}
	}),
	displayPDP: Ember.computed('showPDP', function()
	{
		if(this.get('showPDP') === true)
		{return true;}
		else
		{return false;}
	}),
	actions: 
	{
		//Set ID Tag Methods
		setGID: function(genre) 
		{ 
			this.set('selectedGID', genre.id);
			this.set('selectedGN', genre.get('name'));
		},
		setCID: function(category) 
		{ 
			this.set('selectedCID', category.id);
			this.set('selectedCN', category.get('name'));
		},
		setFTID: function(factType) 
		{ 
			this.set('selectedFTID', factType.id);
			this.set('selectedFTN', factType.get('name'));
		},
		setTID: function() 
		{ 
			//TODO
		},
		//Set Partial Visibility Methods
		setGPV: function(varBoolean)
		{ 
			this.set('showGP', varBoolean);
		},
		setCPV: function(varBoolean) 
		{ 
			this.set('showCP', varBoolean);
		},
		setFTPV: function(varBoolean)
		{ 
			this.set('showFTP', varBoolean);
		},
		setPDPV: function(varBoolean)
		{ 
			this.set('showPDP', varBoolean);
		},
		//Clear Tag Methods
		clearGenre: function() 
		{ 
			this.set('selectedGID', 0);
			this.set('selectedGN', 'None');
		},
		clearFactType: function() 
		{ 
			this.set('selectedFTID', 0);
			this.set('selectedFTN', 'None');
		},
		clearCategory: function() 
		{ 
			this.set('selectedCID', 0);
			this.set('selectedCN', 'None');
		},
		clearTopic: function() 
		{ 
			//TODO
		},
		clearPostDate: function() 
		{ 
			//TODO
		},
		//Logout method
		invalidateSession: function()
		{
			var shouldInvalidate = window.confirm("Really want to Logout? You will be returned to the homepage if you do.");
			if(shouldInvalidate)
			{
				this.get('session').invalidate();
				this.transitionToRoute('index');
			}
		}
	}
});
