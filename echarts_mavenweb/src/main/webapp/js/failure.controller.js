$(document).bind( "mobileinit", function() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.pushStateEnabled = false; 
});

function FailureController() {
	//var failureSummaryView 	= new FailureSummaryView();
	var failureModel 	= new FailureModel();
	
	this.onLoadSummary 	= function( summaryType, startMonth, endMonth ) {
		failureModel.loadSummary( summaryType, startMonth, endMonth );
	};
	this.loadedSummary 	= function( datas ) {
		failureSummaryView.showSummary( datas );
	};

	this.onRedirectToDetailHtml = function( failureMessage ) {
		// Before redirect the detail html, save the summary html firstly.
		failureSummaryView.snapshot();
		// Send message to the detail html
		failureMessage.send( );		
        redirectToDetailHtml();
	};

	this.onLoadDetail 	= function( summaryType, id, startMonth, endMonth ) {		
		failureModel.loadDetail( summaryType, id, startMonth, endMonth );
	};
	this.loadedDetail 	= function( datas ) {	
        failureDetailView.showDetail( datas );
	};

	var redirectToDetailHtml 	= function() {
		window.open("./failureDetail.html");
	};
	

}

var failureController = new FailureController();