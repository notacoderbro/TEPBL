
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.


	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	

	
	
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		ResponseText_val.innerHTML = "Hello!";

	else if (FormatInput.includes("how are you"))
		ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

	else if (FormatInput.includes("what is water pollution"))
		ResponseText_val.innerHTML = "Water pollution is any chemical, physical or biological change in the quality of water that has a harmful effect on any living thing that drinks or uses or lives (in) it. When humans drink polluted water it often has serious effects on their health. Water pollution can also make water unsuited for the desired use.";
	
	else if (FormatInput.includes("where does water pollution come from"))
		ResponseText_val.innerHTML = "Water pollution is usually caused by human activities. Different human sources add to the pollution of water. There are two sorts of sources, point and nonpoint sources. Point sources discharge pollutants at specific locations through pipelines or sewers into the surface water. Nonpoint sources are sources that cannot be traced to a single site of discharge.";
	
	else if (FormatInput.includes("how do we detect water pollution"))
		ResponseText_val.innerHTML = "Water pollution is detected in laboratories, where small samples of water are analysed for different contaminants. Living organisms such as fish can also be used for the detection of water pollution. Changes in their behaviour or growth show us, that the water they live in is polluted. Specific properties of these organisms can give information on the sort of pollution in their environment. Laboratories also use computer models to determine what dangers there can be in certain waters. They import the data they own on the water into the computer, and the computer then determines if the water has any impurities.";
	
	else if (FormatInput.includes("what is heat pollution, what causes it and what are the dangers"))
		ResponseText_val.innerHTML = "In most manufacturing processes a lot of heat originates that must be released into the environment, because it is waste heat. The cheapest way to do this is to withdraw nearby surface water, pass it through the plant, and return the heated water to the body of surface water. The heat that is released in the water has negative effects on all life in the receiving surface water. This is the kind of pollution that is commonly known as heat pollution or thermal pollution.";
	
	else if (FormatInput.includes("what is eutrophication, what causes it and what are the dangers"))
		ResponseText_val.innerHTML = "Eutrophication means natural nutrient enrichment of streams and lakes. The enrichment is often increased by human activities, such as agriculture (manure addition). Over time, lakes then become eutrophic due to an increase in nutrients.";
	
	else if (FormatInput.includes("what is acid rain and how does it develop"))
		ResponseText_val.innerHTML = "Typical rainwater has a pH of about 5 to 6. This means that it is naturally a neutral, slightly acidic liquid. During precipitation rainwater dissolves gasses such as carbon dioxide and oxygen. The industry now emits great amounts of acidifying gasses, such as sulphuric oxides and carbon monoxide. These gasses also dissolve in rainwater. This causes a change in pH of the precipitation – the pH of rain will fall to a value of or below 4. When a substance has a pH of below 6.5, it is acid. The lower the pH, the more acid the substance is. That is why rain with a lower pH, due to dissolved industrial emissions, is called acid rain.";
	
	else if (FormatInput.includes("why does water sometimes smell like rotten eggs"))
		ResponseText_val.innerHTML = "When water is enriched with nutrients, eventually anaerobic bacteria, which do not need oxygen to practice their functions, will become highly active. These bacteria produce certain gasses during their activities. One of these gases is hydrogen sulphide. This compounds smells like rotten eggs. When water smells like rotten eggs we can conclude that there is hydrogen present, due to a shortage of oxygen in the specific water.";
	
	else if (FormatInput.includes("what causes white deposit on showers and bathroom walls"))
		ResponseText_val.innerHTML = "Water contains many compounds. A few of these compounds are calcium and carbonate. Carbonate works as a buffer in water and is thus a very important component.";
	
	else if (FormatInput.includes("what are the most common causes of water pollution"))
		ResponseText_val.innerHTML = "Storm water drains, Solid waste from urban settlements, Burst or overloaded sewerage lines, Mismanaged effluent from industries, Acid mine drainage.";
	
	else if (FormatInput.includes("what can be used to test for water pollution"))
		ResponseText_val.innerHTML = "It is usually a good idea to do some basic observation when looking to see if a water body is polluted. Things to look out for are highly turbid water, extensive algal growth, lots of dead fish, frogs or insects, foam and froth, oil slick or a bad smell. These things will tell you whether the water is polluted.";
	
	else if (FormatInput.includes("what are the alternative cleaning agents that can be used in the home"))
		ResponseText_val.innerHTML = "Baking Soda, Soap Lemon, BoraxWhite Vinegar, Washing Soda or SAL Soda ";
	
	else if (FormatInput.includes("how does urbanization and industrialization contribute to water pollution"))
		ResponseText_val.innerHTML = "pH of water; colour of water; amount of nutrients; temperature ; amount minerals and salts; murkiness of water ";
	
	else if (FormatInput.includes("how does deforestation contribute to water pollution"))
		ResponseText_val.innerHTML = "Clearing land for agriculture and urban growth often leads to water pollution. Forestry has negative impacts upon bio-diversity, as the existing vegetation (often grasslands) is destroyed. When soil is stripped of its protective vegetation it becomes prone to soil erosion.";
	
	// Link
	
	else if (FormatInput.includes("open google"))
	{
		
		ResponseText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		
		ResponseText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("who made you"))
	{
		
		ResponseText_val.innerHTML = "Wait";
		window.open("https://www.instagram.com/hemant_m4/", "_blank");
	}
	else
		ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}


