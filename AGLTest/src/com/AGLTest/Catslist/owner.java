package com.AGLTest.Catslist;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.function.Function;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

@SuppressWarnings("unused")
public class owner
{
  public static void main(String[] args) throws Exception
  {
	  try{
		  //getting JSON data from the link
		  String url = "http://agl-developer-test.azurewebsites.net/people.json";
		  URL obj = new URL(url);
		  HttpURLConnection con= (HttpURLConnection) obj.openConnection();
		  con.setRequestMethod("GET");
		  con.setRequestProperty("User-agent", "Mozilla");
		  BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
		  String Inline;
		  StringBuffer response = new StringBuffer();
		  while((Inline= in.readLine())!= null){
			  response.append(Inline);
		  }in.close();		   
		   List<String> Mlist = new ArrayList<>();
		   List<String> Flist = new ArrayList<>();
		   
		   //Creating a JSON array with the data
		  JSONArray arr = new JSONArray(response.toString());
		  arr.remove(2);
           //Looping through the data to pets array
					  for(int i=0;i< arr.length();i++){
						  JSONObject obj1 = arr.getJSONObject(i);
						  JSONArray petarray = obj1.getJSONArray("pets");         //Array created for pets for JSON Object
						  String gender = obj1.getString("gender");      
						  if(gender.equals("Male")){                              // Making the condition for gender
						  
						  for(int k=0; k<petarray.length();k++){                   // Looping through the pets array
							  JSONObject obj2 = petarray.getJSONObject(k);
							  String type = obj2.getString("type"); 
							  if(type.equals("Cat")){                              //Making the condition for type of pets
								  String MPname =obj2.getString("name");
								  Mlist.addAll(Arrays.asList(MPname)); }           // Listing the names of Cats
							 }
						  }
						  else{
							  for(int j=0; j<petarray.length();j++){
								  JSONObject obj3 = petarray.getJSONObject(j);
								  String type = obj3.getString("type"); 
								  if(type.equals("Cat")){
									  String FPname = obj3.getString("name"); 
									  Flist.addAll(Arrays.asList(FPname)); }
						   }
						  }
					  }					
				  //Sorting the lists Alphabetically
					  Collections.sort(Mlist);                                      
					  Collections.sort(Flist);
					  System.out.println("Male\n");      // Printing out the list values
					  Mlist.forEach(System.out::println);
					  System.out.println(" \n");
					  System.out.println("Female \n");
					  Flist.forEach(System.out::println);
					  
					
					  
	  }
	  catch (Exception e){}
}
}
