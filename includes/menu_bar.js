var id = new Array()
id[0] = ''
id[1] = ''
id[2] = ''
id[3] = ''
id[4] = ''
id[5] = ''

var url = location.href.substring(location.href.lastIndexOf('/')+1)

if ( url == 'index.htm' )
{ id[0] = 'selected' }
else if ( url == 'products.htm' )
{ id[1] = 'selected' }
else if ( url == 'support.htm' || url == 'faq.htm' || url == 'download.htm' )
{ id[2] = 'selected' }
else if ( url == 'wheretobuy.htm' )
{ id[3] = 'selected' }
else if ( url == 'contact.htm' )
{ id[4] = 'selected' }
else if ( url == 'aboutus.htm' )
{ id[5] = 'selected' }
else if ( url == '' )
{ id[0] = 'selected' }
else { id[1] = 'selected' }

document.write('<ul>');
document.write('<li><a id="' + id[0] + '" href="index.htm" style="border-left: 1px solid;">Home</a></li>');
document.write('<li><a id="' + id[1] + '" href="products.htm" onmouseover="return dropdownmenu(this, event, menu1, \'129px\')" onmouseout="delayhidemenu()">Products</a></li>');
document.write('<li><a id="' + id[2] + '" href="support.htm" onmouseover="return dropdownmenu(this, event, menu2, \'129px\')" onmouseout="delayhidemenu()">Support</a></li>');
document.write('<li><a id="' + id[3] + '" href="wheretobuy.htm">Where To Buy</a></li>');
document.write('<li><a id="' + id[4] + '" href="contact.htm">Contact</a></li>');
document.write('<li><a id="' + id[5] + '" class="last" href="aboutus.htm">About Us</a></li>');
document.write('</ul>');