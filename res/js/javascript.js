
YUI().use('autocomplete', 'autocomplete-highlighters', function (Y) {
  Y.one('#querytextbox').plug(Y.Plugin.AutoComplete, {
    resultHighlighter: 'phraseMatch',
    source: 'select * from search.suggest where query="{query}"',
    yqlEnv: 'http://pieisgood.org/yql/tables.env'
  });
});
function cleartextbox(){
	document.getElementById("querytextbox").value='';
}
function nonew(){
var a=document.getElementById("querytextbox");
	//alert(a.value);
	
YUI().use('yql', function(Y) {

    Y.YQL(' SELECT * FROM boss.search WHERE ck="dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz" and secret="a3d93853ba3bad8a99a175e8ffa90a702cd08cfa" and q="'+a.value+' " ', function(r) {
        //r now contains the result of the YQL Query
		//use the YQL Developer console to learn
		//what data is coming back in this object
		//and how that data is structured.
		//console.log(r);
		
		
		//
		//if(r.query && r.query.results && r.query.results.bossresponse && r.query.results.bossresponse.news && r.query.results.bossresponse.news.results.result){
      var array=r.query.results.bossresponse.web.results.result,
          out = '<br><br><br><br><ol>',
          i = 0,
          cur = '<br><br><br>';
      for(i=0,j=5;i<j;i++){
        cur = array[i];
        out += '<li><font size="5"><a href="' + cur.clickurl + '" target="_blank">' +
                cur.title.content + '</a><br></font><font color="green">'+cur.clickurl+'</font><p>' + cur.abstract.content +
               '</p></li>';
      }
      out += '</ol>';
      
	  document.getElementById('left').innerHTML=out;
     
   //
    });

});

}
var lat,long;
          navigator.geolocation.getCurrentPosition(
		function (position){
		lat=(position.coords.latitude).toFixed(3);
		long = (position.coords.longitude).toFixed(3);
       	}
);
function map(){
	   var map1;
        if (GBrowserIsCompatible()) {
          var mapOptions = {
            googleBarOptions : {
              style : "new"
            }
          }
          map1 = new GMap2(document.getElementById("map_canvas"), mapOptions);
          
	//new GLatLng(lat,long)
          map1.setCenter(new GLatLng(lat,long), 13);
          map1.setUIToDefault();
          map1.enableGoogleBar();
		  //
	 document.getElementById('map').innerHTML="<h4>Too Urgent To Buy</h4>";
  }
}
function query(){
	var a=document.getElementById("querytextbox");
	 
	//alert(a.value);
YUI().use('yql', function(Y) {

    Y.YQL(' SELECT * FROM boss.search WHERE ck="dj0yJmk9YWF3ODdGNWZPYjg2JmQ9WVdrOWVsWlZNRk5KTldFbWNHbzlNVEEyTURFNU1qWXkmcz1jb25zdW1lcnNlY3JldCZ4PTUz" and secret="a3d93853ba3bad8a99a175e8ffa90a702cd08cfa" and q="'+a.value+' release" and service="news"', function(r) {
        //r now contains the result of the YQL Query
		//use the YQL Developer console to learn
		//what data is coming back in this object
		//and how that data is structured.
		//console.log(r);
		
		
		//
		//if(r.query && r.query.results && r.query.results.bossresponse && r.query.results.bossresponse.news && r.query.results.bossresponse.news.results.result){
      var array=r.query.results.bossresponse.news.results.result,
          out = '<br><br><br><br><ol>',
          i = 0,
          cur = '<br>';
      for(i=0,j=5;i<j;i++){
        cur = array[i];
        out += '<li><h3><a href="' + cur.url + '" target="_blank">' +
                cur.title + '</a></h3><p>' + cur.abstract +
               '</p></li>';
      }
      out += '</ol>';
      
	  document.getElementById('left').innerHTML=out;
     
   //
    });

});}
function righttables(){
	
	var b=document.getElementById("querytextbox");
	if(b.value=="iphone"){
		document.getElementById("mychart").innerHTML='';
		var t=setTimeout("",2000);
YUI().use('charts', function (Y) 
{ 	
   // Data for the chart
var myDataValues = [
    {category:"29/6/2007", values:500},
    {category:"5/9/2007", values:399},
    {category:"6/2008", values:199},
    {category:"6/2009", values:199},
    
];

// Instantiate and render the chart
var mychart = new Y.Chart({
    dataProvider: myDataValues,
    render: "#mychart"
});});}
else if(b.value=="macbook pro"){
	document.getElementById("mychart").innerHTML='';
	var t=setTimeout("",2000);
YUI().use('charts', function (Y) 
{ 	
   // Data for the chart
var myDataValues = [
    {category:"24/4/2006", values:2100},
    {category:"5/9/2007", values:1999},
    {category:"6/2008", values:1994},
    {category:"6/2009", values:1993},
    
];

// Instantiate and render the chart
var mychart = new Y.Chart({
    dataProvider: myDataValues,
    render: "#mychart"
});});
	}
else{	  document.getElementById("mychart").innerHTML='';} }
function doallthese(){
query();
righttables();
map();
}

