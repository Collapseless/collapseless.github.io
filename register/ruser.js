/*
var fso, ts;

fso = new ActiveXObject("Scripting.FileSystemObject");

ts = fso.OpenTextFile("users.txt", 1);

var users = ts.ReadAll();

ts.Close();
*/

import { user } from "users.js";

function a(xinc,xina){
    var jc1 = Object.keys(user).length;
    user[xina] = xinc;
    
var fso = new   ActiveXObject("Scripting.FileSystemObject");

var f=fso.CreateTextFile("users.js",true);

f.write("export var user = " + JSON.stringify(user));

f.Close();


}